import React from 'react'
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

global.IS_REACT_ACT_ENVIRONMENT = true
window.scrollTo = () => {}
window.matchMedia = window.matchMedia || (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }))
window.IntersectionObserver = window.IntersectionObserver || class { observe() {} unobserve() {} disconnect() {} }

test.each(['/', '/treatments', '/cosmetic-consultation', '/contact', '/book?service=radiance', '/nope'])('renders %s', (path) => {
  const el = document.createElement('div')
  document.body.appendChild(el)
  act(() => { createRoot(el).render(<MemoryRouter initialEntries={[path]}><App /></MemoryRouter>) })
  expect(el.textContent).toContain('Alma')
  expect(el.textContent).not.toMatch(/Alma Method|Florida/)
  if (path.startsWith('/book')) expect(el.textContent).toContain('Request Booking')
  if (path === '/') expect(el.textContent).toContain('Coming soon')
})
