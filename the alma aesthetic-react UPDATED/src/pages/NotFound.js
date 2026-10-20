import React from 'react'
import { Btn } from '../components/ui'
import usePageTitle from '../usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')
  return (
    <section className="px-5 py-24 text-center">
      <h1 className="text-4xl">Page not found</h1>
      <p className="mt-3 text-muted">That page does not exist.</p>
      <div className="mt-6 flex justify-center"><Btn to="/">Back home</Btn></div>
    </section>
  )
}
