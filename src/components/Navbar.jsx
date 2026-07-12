import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Droplet, Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/campaigns', label: 'Campaigns' },
  { to: '/get-involved', label: 'Get Involved' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-teal-950/95 backdrop-blur shadow-lg' : 'bg-teal-950'
      }`}
    >
      <nav className="flex items-center justify-between px-6 md:px-10 lg:px-16 h-20">
        <NavLink to="/" className="flex items-center gap-2 text-sand-50 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/20">
            <Droplet className="h-5 w-5 text-gold-400" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-full border border-gold-400/50 group-hover:animate-ripple" />
          </span>
          <span className="font-display text-2xl font-semibold tracking-tight">Wellspring</span>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-8 font-body text-sm font-medium">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-gold-400 ${isActive ? 'text-gold-400' : 'text-sand-100/90'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <NavLink to="/contact" className="btn-primary">
            Donate Now
          </NavLink>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="lg:hidden text-sand-50"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-teal-950 border-t border-teal-800 px-6 pb-6 pt-2 animate-rise">
          <ul className="flex flex-col gap-4 font-body">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-lg transition-colors ${isActive ? 'text-gold-400' : 'text-sand-100/90'}`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full">
            Donate Now
          </NavLink>
        </div>
      )}
    </header>
  )
}
