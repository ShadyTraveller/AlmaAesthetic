import React from 'react'
import { Btn, PageHead, Reveal } from '../components/ui'
import usePageTitle from '../usePageTitle'
import { ADDONS, TREATMENTS, money } from '../data'

export default function Treatments() {
  usePageTitle('Treatments')
  return (
    <>
      <PageHead eyebrow="Rituals" title="Treatments">
        Facial rituals designed to refine, restore and brighten. Each is tailored to your skin.
      </PageHead>
      <section className="px-5 pb-10">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-2">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 0.08}>
              <article id={t.id} className="h-full scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
                <img src={t.img} alt={t.name} loading="lazy" className="h-48 w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="text-xl">{t.name}</h2>
                    <span className="whitespace-nowrap text-sm font-semibold">From {money(t.price)}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted">{t.blurb}</p>
                  <p className="mt-3 text-xs"><span className="font-semibold">Best for:</span> {t.best}</p>
                  <p className="mt-1 text-xs text-muted">Enhance with {t.pairs}</p>
                  <div className="mt-5">
                    <Btn to={`/book?service=${t.id}`}>Book {t.name.split(' ')[0]}</Btn>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-elevated px-5 py-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl">Enhancements</h2>
          <ul className="mt-5 divide-y divide-line rounded-2xl border border-line bg-white">
            {ADDONS.map((a) => (
              <li key={a.id} className="flex items-center justify-between px-5 py-4 text-sm">
                <span>{a.name}</span>
                <span className="text-muted">{money(a.price)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6"><Btn to="/book" variant="gold">Book Now</Btn></div>
        </div>
      </section>
    </>
  )
}
