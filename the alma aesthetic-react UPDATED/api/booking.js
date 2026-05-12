const { createClient } = require('@supabase/supabase-js')

module.exports = async (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body =
    typeof req.body === 'string'
      ? (() => {
          try {
            return JSON.parse(req.body)
          } catch (_) {
            return null
          }
        })()
      : req.body

  if (!body || typeof body !== 'object') {
    return res.status(400).json({ error: 'Invalid JSON body' })
  }

  const fullName = String(body.fullName || '').trim()
  const phone = String(body.phone || '').trim()
  const email = String(body.email || '').trim()
  const treatmentType = String(body.treatmentType || '').trim()
  const addOns = Array.isArray(body.addOns)
    ? body.addOns.map(String).join(', ')
    : String(body.addOns != null ? body.addOns : '').trim()

  if (!fullName || !phone || !email || !treatmentType) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    return res.status(503).json({
      code: 'NOT_CONFIGURED',
      error: 'Supabase is not configured for this deployment.',
    })
  }

  const supabase = createClient(url, key, {
    auth: { persistSession: false },
  })

  const row = {
    full_name: fullName,
    phone,
    email,
    treatment_type: treatmentType,
    add_on_services: addOns || null,
    preferred_date: body.preferredDate || null,
    preferred_time: body.preferredTime || null,
    region: body.region || null,
  }

  const { error } = await supabase.from('bookings').insert(row)
  if (error) {
    console.error('Supabase insert error', error)
    return res.status(500).json({ error: 'Could not save booking' })
  }

  return res.status(200).json({ ok: true })
}
