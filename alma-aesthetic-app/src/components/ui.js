import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const V = {
  primary: 'bg-ink text-white hover:bg-black',
  gold: 'bg-gold text-ink hover:bg-gold-dark',
  ghost: 'border border-ink/25 text-ink hover:bg-ink/5',
  light: 'bg-white text-ink hover:bg-sand',
}

export function Btn({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold tracking-wide transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${V[variant]} ${className}`
  let el
  if (to) el = <Link to={to} className={cls} {...rest}>{children}</Link>
  else if (href) el = <a href={href} className={cls} {...rest}>{children}</a>
  else el = <button className={cls} {...rest}>{children}</button>
  return (
    <motion.span whileTap={{ scale: 0.97 }} className="inline-block">
      {el}
    </motion.span>
  )
}

export function Reveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function PageHead({ eyebrow, title, children }) {
  return (
    <header className="px-5 pb-6 pt-10 md:pt-16">
      <div className="mx-auto max-w-3xl">
        {eyebrow && <p className="mb-2 text-xs uppercase tracking-[0.25em] text-gold-dark">{eyebrow}</p>}
        <h1 className="text-3xl leading-tight md:text-5xl">{title}</h1>
        {children && <p className="mt-4 max-w-xl text-muted">{children}</p>}
      </div>
    </header>
  )
}
