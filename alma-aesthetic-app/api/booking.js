// Vercel serverless function: emails booking requests to book@almaaesthetic.co via Resend.
// Needs RESEND_API_KEY (and optionally BOOKING_FROM). Without it returns 503 and the
// site falls back to opening the visitor's mail app.
const TO = 'book@almaaesthetic.co'
const esc = (s) =>
  String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const clean = (s, n = 200) => String(s ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, n)

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  let b = req.body
  if (typeof b === 'string') {
    try { b = JSON.parse(b) } catch (_) { b = null }
  }
  if (!b || typeof b !== 'object') return res.status(400).json({ error: 'Invalid body' })

  const d = {
    name: clean(b.name), phone: clean(b.phone, 40), email: clean(b.email),
    treatment: clean(b.treatment), date: clean(b.date, 20), time: clean(b.time, 20),
    addOns: Array.isArray(b.addOns) ? b.addOns.map((x) => clean(x, 60)).join(', ') : '',
  }
  if (!d.name || !d.phone || !/^\S+@\S+\.\S+$/.test(d.email) || !d.treatment || !d.date || !d.time) {
    return res.status(400).json({ error: 'Missing or invalid fields' })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return res.status(503).json({ code: 'NOT_CONFIGURED' })

  const html = `<h2>New booking request</h2><ul>
    <li><b>Treatment:</b> ${esc(d.treatment)}</li>
    ${d.addOns ? `<li><b>Add-ons:</b> ${esc(d.addOns)}</li>` : ''}
    <li><b>Preferred:</b> ${esc(d.date)} at ${esc(d.time)}</li>
    <li><b>Name:</b> ${esc(d.name)}</li><li><b>Phone:</b> ${esc(d.phone)}</li><li><b>Email:</b> ${esc(d.email)}</li></ul>`

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.BOOKING_FROM || 'Alma Aesthetic <onboarding@resend.dev>',
        to: [TO],
        reply_to: d.email,
        subject: `Booking request: ${d.treatment} (${d.date})`,
        html,
      }),
    })
    if (!r.ok) return res.status(502).json({ error: 'Email failed' })
    return res.status(200).json({ ok: true })
  } catch (_) {
    return res.status(502).json({ error: 'Email failed' })
  }
}
