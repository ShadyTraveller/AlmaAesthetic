import React from 'react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import { Btn, Reveal } from '../components/ui'
import Icon from '../components/Icon'
import usePageTitle from '../usePageTitle'
import { BUSINESS, DEVICES, TREATMENTS, money } from '../data'

const HERO_FALLBACK = 'https://videos.pexels.com/video-files/9335813/9335813-hd_720_1280_25fps.mp4'

function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-end overflow-hidden bg-ink text-white md:items-center">
      {reduce ? (
        <img src="/media/hero-poster.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/media/hero.mp4" type="video/mp4" />
          <source src={HERO_FALLBACK} type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/35 to-ink/20" />
      <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-24">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{BUSINESS.city}</p>
        <h1 className="max-w-xl text-4xl leading-tight md:text-6xl">Skin that feels like you.</h1>
        <p className="mt-4 max-w-md text-white/80">
          Facial rituals, advanced skincare and red light therapy, made personal.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Btn to="/book" variant="gold">Book a Treatment</Btn>
          <Btn to="/#devices" variant="light">Shop Red Light</Btn>
        </div>
        <p className="mt-6 flex items-center gap-2 text-xs text-white/70">
          <Icon name="clock" size={14} /> {BUSINESS.hours}
        </p>
      </div>
    </section>
  )
}

function Rituals() {
  return (
    <section className="px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl">Facial Rituals</h2>
            <Link to="/treatments" className="flex items-center gap-1 text-sm text-gold-dark">
              All <Icon name="arrow" size={16} />
            </Link>
          </div>
        </Reveal>
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {TREATMENTS.map((t) => (
            <Link
              key={t.id}
              to={`/treatments#${t.id}`}
              className="group w-64 shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-white shadow-soft transition-transform hover:-translate-y-1 md:w-auto"
            >
              <img src={t.img} alt={t.name} loading="lazy" className="h-40 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-base">{t.name}</h3>
                <p className="mt-1 text-xs text-muted">From {money(t.price)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function Devices() {
  return (
    <section id="devices" className="scroll-mt-20 bg-elevated px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold-dark">Shop</p>
          <h2 className="text-2xl md:text-3xl">Red Light Therapy Devices</h2>
          <p className="mt-2 max-w-md text-sm text-muted">
            Bring the glow home. Secure checkout with PayPal.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {DEVICES.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-soft">
                <div className="mb-4 flex h-36 items-center justify-center rounded-xl bg-sand text-xs uppercase tracking-widest text-muted">
                  Product image
                </div>
                <h3 className="text-base">{d.name}</h3>
                <p className="mt-1 flex-1 text-sm text-muted">{d.blurb}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="font-semibold">{d.price}</span>
                  {d.paypal ? (
                    <Btn href={d.paypal} target="_blank" rel="noopener noreferrer" className="!min-h-[44px]">
                      Buy with PayPal
                    </Btn>
                  ) : (
                    <Btn disabled variant="ghost" className="!min-h-[44px]">Coming soon</Btn>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  usePageTitle('')
  return (
    <>
      <Hero />
      <Rituals />
      <Devices />
      <section className="px-5 py-14">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-ink p-8 text-center text-white md:p-12">
          <h2 className="text-2xl md:text-3xl">Not sure what to choose?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            Start with a 45-minute consultation and we will build your ritual plan.
          </p>
          <div className="mt-6 flex justify-center">
            <Btn to="/book?service=consult" variant="gold">Book a Consultation</Btn>
          </div>
        </Reveal>
      </section>
    </>
  )
}
