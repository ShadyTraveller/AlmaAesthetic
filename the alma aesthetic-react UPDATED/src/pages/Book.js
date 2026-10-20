import React, { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Btn, PageHead } from '../components/ui'
import Icon from '../components/Icon'
import usePageTitle from '../usePageTitle'
import { ADDONS, BUSINESS, SERVICES } from '../data'

const pad = (n) => String(n).padStart(2, '0')
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

// Next 10 weekdays (clinic is closed Sat/Sun).
function nextWeekdays(count = 10) {
  const out = []
  const d = new Date()
  d.setHours(12, 0, 0, 0)
  while (out.length < count) {
    d.setDate(d.getDate() + 1)
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      out.push({
        value: iso(d),
        label: d.toLocaleDateString('en-CA', { weekday: 'short' }),
        sub: d.toLocaleDateString('en-CA', { month: 'short', day: 'numeric' }),
      })
    }
  }
  return out
}

// 8:00 AM – 7:00 PM start times (open until 8 PM).
const TIMES = Array.from({ length: 23 }, (_, i) => {
  const mins = 8 * 60 + i * 30
  const h = Math.floor(mins / 60)
  const m = mins % 60
  const label = `${((h + 11) % 12) + 1}:${pad(m)} ${h < 12 ? 'AM' : 'PM'}`
  return { value: `${pad(h)}:${pad(m)}`, label }
}).filter((t) => t.value <= '19:00')

const chip = (on) =>
  `min-h-[44px] rounded-full border px-4 text-sm transition-colors ${
    on ? 'border-ink bg-ink text-white' : 'border-line bg-white hover:border-ink/40'
  }`
const input =
  'min-h-[48px] w-full rounded-xl border border-line bg-white px-4 text-base focus:border-gold focus:outline-none'

export default function Book() {
  usePageTitle('Book')
  const [params] = useSearchParams()
  const initial = SERVICES.some((s) => s.id === params.get('service')) ? params.get('service') : ''
  const [service, setService] = useState(initial)
  const [addons, setAddons] = useState([])
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const days = useMemo(() => nextWeekdays(), [])

  const toggle = (id) => setAddons((a) => (a.includes(id) ? a.filter((x) => x !== id) : [...a, id]))
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))
  const canAddOn = service && service !== 'consult'

  async function submit(e) {
    e.preventDefault()
    if (!service || !date || !time) {
      setError('Please choose a treatment, day and time.')
      return
    }
    setError('')
    setStatus('sending')
    const svc = SERVICES.find((s) => s.id === service).name
    const addOnNames = canAddOn ? addons.map((id) => ADDONS.find((a) => a.id === id).name) : []
    const dayLabel = days.find((d) => d.value === date)
    const timeLabel = TIMES.find((t) => t.value === time).label
    const payload = { ...form, treatment: svc, addOns: addOnNames, date, time: timeLabel }
    try {
      const r = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (r.ok) {
        setStatus('sent')
        return
      }
    } catch (_) {
      /* fall through to email */
    }
    const body = [
      'Booking request',
      `Treatment: ${svc}`,
      addOnNames.length ? `Add-ons: ${addOnNames.join(', ')}` : null,
      `Preferred: ${dayLabel.label} ${dayLabel.sub}, ${timeLabel}`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
    ].filter(Boolean).join('\n')
    window.location.href = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(`Booking request: ${svc}`)}&body=${encodeURIComponent(body)}`
    setStatus('mailto')
  }

  if (status === 'sent' || status === 'mailto') {
    return (
      <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="px-5 py-20 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/25">
          <Icon name="check" size={26} />
        </span>
        <h1 className="mt-5 text-3xl">{status === 'sent' ? 'Request received' : 'One last step'}</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-muted">
          {status === 'sent'
            ? 'We will confirm your appointment shortly by email or phone.'
            : `Your email app should open with the request ready. Press send to finish. Nothing opened? Email ${BUSINESS.email} or message us on WhatsApp.`}
        </p>
        <div className="mt-6 flex justify-center"><Btn to="/" variant="ghost">Back home</Btn></div>
      </motion.section>
    )
  }

  return (
    <>
      <PageHead eyebrow={`${BUSINESS.city} · ${BUSINESS.hours}`} title="Book a Treatment">
        Send a request and we will confirm your time. Closed weekends.
      </PageHead>
      <form onSubmit={submit} className="px-5 pb-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <fieldset>
            <legend className="mb-3 text-sm font-semibold">1. Treatment</legend>
            <div className="flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button type="button" key={s.id} onClick={() => setService(s.id)} className={chip(service === s.id)} aria-pressed={service === s.id}>
                  {s.name}
                </button>
              ))}
            </div>
          </fieldset>

          <AnimatePresence initial={false}>
            {canAddOn && (
              <motion.fieldset
                key="addons"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <legend className="mb-3 text-sm font-semibold">Enhancements (optional)</legend>
                <div className="flex flex-wrap gap-2">
                  {ADDONS.map((a) => (
                    <button type="button" key={a.id} onClick={() => toggle(a.id)} className={chip(addons.includes(a.id))} aria-pressed={addons.includes(a.id)}>
                      {a.name}
                    </button>
                  ))}
                </div>
              </motion.fieldset>
            )}
          </AnimatePresence>

          <fieldset>
            <legend className="mb-3 text-sm font-semibold">2. Day</legend>
            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5">
              {days.map((d) => (
                <button
                  type="button"
                  key={d.value}
                  onClick={() => setDate(d.value)}
                  aria-pressed={date === d.value}
                  className={`flex min-h-[64px] w-16 shrink-0 flex-col items-center justify-center rounded-2xl border text-xs transition-colors ${
                    date === d.value ? 'border-ink bg-ink text-white' : 'border-line bg-white'
                  }`}
                >
                  <span>{d.label}</span>
                  <span className="mt-0.5 font-semibold">{d.sub}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-3 text-sm font-semibold">3. Time</legend>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {TIMES.map((t) => (
                <button type="button" key={t.value} onClick={() => setTime(t.value)} aria-pressed={time === t.value} className={chip(time === t.value)}>
                  {t.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="mb-3 text-sm font-semibold">4. Your details</legend>
            <input className={input} placeholder="Full name" autoComplete="name" required value={form.name} onChange={set('name')} />
            <input className={input} placeholder="Phone" type="tel" autoComplete="tel" required value={form.phone} onChange={set('phone')} />
            <input className={input} placeholder="Email" type="email" autoComplete="email" required value={form.email} onChange={set('email')} />
          </fieldset>

          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          <Btn type="submit" variant="gold" disabled={status === 'sending'} className="w-full">
            {status === 'sending' ? 'Sending…' : 'Request Booking'}
          </Btn>
        </div>
      </form>
    </>
  )
}
