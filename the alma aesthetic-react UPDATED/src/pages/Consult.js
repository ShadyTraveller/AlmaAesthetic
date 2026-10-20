import React from 'react'
import { Btn, PageHead, Reveal } from '../components/ui'
import usePageTitle from '../usePageTitle'
import { CONSULT, CONSULT_STEPS } from '../data'

export default function Consult() {
  usePageTitle('Cosmetic Consultation')
  return (
    <>
      <PageHead eyebrow="Start here" title="Cosmetic Consultation">
        A thoughtful consultation to help you understand your skin, renew it and support its health.
      </PageHead>
      <section className="px-5 pb-12">
        <ol className="mx-auto max-w-3xl space-y-4">
          {CONSULT_STEPS.map(([title, text], i) => (
            <Reveal key={title} delay={i * 0.06}>
              <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/25 font-serif text-sm">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-base">{title}</h2>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
        <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-between gap-4 rounded-2xl bg-elevated p-5 text-sm">
          <p>
            <span className="font-semibold">{CONSULT.minutes} minutes</span> · please arrive 15 minutes early.
          </p>
          <Btn to="/book?service=consult">Book Consultation</Btn>
        </div>
      </section>
    </>
  )
}
