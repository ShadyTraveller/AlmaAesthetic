import React, { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Icon from './Icon'
import Logo from './Logo'
import { Btn } from './ui'
import { BUSINESS } from '../data'

const NAV = [
  { to: '/', label: 'Home', short: 'Home', icon: 'home' },
  { to: '/treatments', label: 'Treatments', short: 'Treatments', icon: 'leaf' },
  { to: '/cosmetic-consultation', label: 'Cosmetic Consult', short: 'Consult', icon: 'spark' },
  { to: '/contact', label: 'Contact', short: 'Contact', icon: 'chat' },
]

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" aria-label="Alma Aesthetic home" className="text-ink">
          <Logo className="h-9 w-auto md:h-10" />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === '/'}
              className={({ isActive }) =>
                `border-b pb-0.5 text-sm tracking-wide transition-colors ${
                  isActive ? 'border-gold text-ink' : 'border-transparent text-muted hover:text-ink'
                }`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <Btn to="/book" variant="gold" className="!min-h-[40px] !px-5">
          Book
        </Btn>
      </div>
    </header>
  )
}

function BottomNav() {
  return (
    <nav
      aria-label="Main"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <ul className="mx-auto grid max-w-md grid-cols-4">
        {NAV.map((n) => (
          <li key={n.to}>
            <NavLink to={n.to} end={n.to === '/'} className="relative flex flex-col items-center gap-0.5 py-2.5 text-[11px]">
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-x-3 top-1 h-8 rounded-full bg-gold/25"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <Icon name={n.icon} size={20} className={`relative ${isActive ? 'text-ink' : 'text-muted'}`} />
                  <span className={`relative ${isActive ? 'font-semibold text-ink' : 'text-muted'}`}>{n.short}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <Logo className="h-10 w-auto text-white" />
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Skincare treatments and red light therapy in {BUSINESS.city}.
          </p>
        </div>
        <ul className="space-y-2 text-sm text-white/80">
          <li>{BUSINESS.address}</li>
          <li>{BUSINESS.hours} · closed weekends</li>
          <li><a className="hover:text-gold" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></li>
          <li>
            <a className="hover:text-gold" href={`https://wa.me/${BUSINESS.whatsapp}`}>
              WhatsApp {BUSINESS.whatsappDisplay}
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-start gap-3 text-sm">
          <Btn to="/book" variant="gold">Book a Treatment</Btn>
          <Link className="text-white/60 hover:text-gold" to="/#devices">Red light devices</Link>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-white/40">© {new Date().getFullYear()} Alma Aesthetic</p>
    </footer>
  )
}

export default function Layout() {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}
