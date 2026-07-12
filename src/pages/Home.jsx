import { NavLink } from 'react-router-dom'
import { ArrowRight, Droplets, BookOpen, HeartPulse, Sprout } from 'lucide-react'
import { stats, pillars, stories } from '../data/mockData.js'
import { WaveDivider, AnimatedCounter } from '../components/UI.jsx'

const icons = { Droplets, BookOpen, HeartPulse, Sprout }

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-teal-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/70 to-teal-950/30" />
        <div className="relative section-pad !pt-32 !pb-24 max-w-4xl">
          <p className="eyebrow mb-5 animate-rise">Clean water. Real futures.</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-sand-50 font-semibold animate-rise [animation-delay:100ms]">
            Every well we dig gives a village back its mornings.
          </h1>
          <p className="mt-6 text-lg text-sand-100/80 max-w-xl animate-rise [animation-delay:200ms]">
            Wellspring builds clean water access, schools, and sustainable livelihoods in communities
            that need them most — and shows you exactly where every dollar goes.
          </p>
          <div className="mt-9 flex flex-wrap gap-4 animate-rise [animation-delay:300ms]">
            <NavLink to="/contact" className="btn-primary text-base">
              Donate Now <ArrowRight className="h-4 w-4" />
            </NavLink>
            <NavLink to="/about" className="btn-secondary text-base">
              Learn More
            </NavLink>
          </div>
        </div>
      </section>

      {/* IMPACT COUNTER */}
      <section className="bg-teal-900 text-sand-50 section-pad !py-14">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <div className="font-display text-4xl md:text-5xl font-semibold text-gold-400">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-sand-100/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className="bg-sand-50 section-pad">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">What we do</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 max-w-xl">
            Four pillars, one goal: communities that don\u2019t need us anymore.
          </h2>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => {
              const Icon = icons[p.icon]
              return (
                <div key={p.id} className="card p-7">
                  <div className="h-12 w-12 rounded-xl bg-forest-700/10 flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6 text-forest-700" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-ink-700 leading-relaxed">{p.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <WaveDivider color="#0F3D3E" />

      {/* STORIES */}
      <section className="bg-teal-900 section-pad !pt-0">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <p className="eyebrow">From the field</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-sand-50">
                Recent stories
              </h2>
            </div>
            <NavLink to="/campaigns" className="text-gold-400 text-sm font-medium hover:underline flex items-center gap-1">
              View all campaigns <ArrowRight className="h-4 w-4" />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.id} className="group rounded-2xl overflow-hidden bg-teal-800/60 border border-teal-800 hover:border-gold-500/40 transition-colors">
                <div className="h-48 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gold-400 font-mono mb-3">
                    <span>{s.category}</span>
                    <span className="text-sand-100/30">•</span>
                    <span className="text-sand-100/50">{s.date}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-sand-50 leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-sand-100/70 leading-relaxed">{s.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
