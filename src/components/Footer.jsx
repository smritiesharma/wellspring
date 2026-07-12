import { NavLink } from 'react-router-dom'
import { Droplet, Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-sand-100/80 section-pad !py-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 text-sand-50 mb-3">
            <Droplet className="h-5 w-5 text-gold-400" />
            <span className="font-display text-xl font-semibold">Wellspring</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Clean water, classrooms, and livelihoods for communities building their own way forward.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/about" className="hover:text-gold-400 transition-colors">About Us</NavLink></li>
            <li><NavLink to="/campaigns" className="hover:text-gold-400 transition-colors">Campaigns</NavLink></li>
            <li><NavLink to="/get-involved" className="hover:text-gold-400 transition-colors">Get Involved</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-gold-400 transition-colors">Contact</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>128 Meridian Ave, Suite 4</li>
            <li>Nairobi, Kenya</li>
            <li>+254 (0) 700 123 456</li>
            <li>hello@wellspring.org</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Follow</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-sand-50/20 hover:border-gold-400 hover:text-gold-400 transition-colors"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-sand-50/10 text-xs text-sand-100/50 flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 Wellspring. All rights reserved.</span>
        <span>This is a prototype demo site — all data is simulated.</span>
      </div>
    </footer>
  )
}
