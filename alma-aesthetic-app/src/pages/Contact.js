import React, { useMemo } from 'react'
import { Btn, PageHead } from '../components/ui'
import Icon from '../components/Icon'
import usePageTitle from '../usePageTitle'
import { BUSINESS } from '../data'

function torontoNow() {
  const p = new Intl.DateTimeFormat('en-CA', {
    timeZone: BUSINESS.tz,
    weekday: 'short',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(new Date())
  const get = (t) => p.find((x) => x.type === t).value
  return { day: get('weekday'), hour: parseInt(get('hour'), 10) % 24 }
}

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export default function Contact() {
  usePageTitle('Contact')
  const { open, today } = useMemo(() => {
    const n = torontoNow()
    return { today: n.day, open: DAYS.includes(n.day) && n.hour >= 8 && n.hour < 20 }
  }, [])
  const wa = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Alma Aesthetic, I would like to book a treatment.')}`
  const row = 'flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-transform active:scale-[0.99]'
  return (
    <>
      <PageHead eyebrow={BUSINESS.city} title="Contact">
        Care you can feel, from people you can reach.
      </PageHead>
      <section className="px-5 pb-12">
        <div className="mx-auto max-w-3xl space-y-3">
          <a href={wa} className={row} target="_blank" rel="noopener noreferrer">
            <Icon name="chat" className="text-gold-dark" />
            <span><span className="block text-xs text-muted">WhatsApp</span>{BUSINESS.whatsappDisplay}</span>
          </a>
          <a href={`mailto:${BUSINESS.email}`} className={row}>
            <Icon name="mail" className="text-gold-dark" />
            <span><span className="block text-xs text-muted">Email</span>{BUSINESS.email}</span>
          </a>
          <div className={row}>
            <Icon name="pin" className="text-gold-dark" />
            <span><span className="block text-xs text-muted">Location</span>{BUSINESS.address}</span>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold"><Icon name="clock" size={18} className="text-gold-dark" /> Hours</span>
              <span className={`rounded-full px-3 py-1 text-xs ${open ? 'bg-gold/25' : 'bg-sand text-muted'}`}>
                {open ? 'Open now' : 'Closed now'}
              </span>
            </div>
            <ul className="space-y-1.5 text-sm">
              {[...DAYS, 'Sat', 'Sun'].map((d) => (
                <li key={d} className={`flex justify-between ${d === today ? 'font-semibold' : 'text-muted'}`}>
                  <span>{d}</span>
                  <span>{DAYS.includes(d) ? '8AM – 8PM' : 'Closed'}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-3"><Btn to="/book" variant="gold" className="w-full">Request a Booking</Btn></div>
        </div>
      </section>
    </>
  )
}
