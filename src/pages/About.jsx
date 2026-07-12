import { Linkedin, Twitter } from 'lucide-react'
import { timeline, team, fundAllocation } from '../data/mockData.js'

export default function About() {
  return (
    <div>
      {/* MISSION / VISION SPLIT */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div className="section-pad flex flex-col justify-center bg-sand-50">
          <p className="eyebrow">Our mission</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 leading-tight">
            We don\u2019t hand out aid. We build what outlasts us.
          </h1>
          <p className="mt-6 text-ink-700 leading-relaxed">
            Wellspring exists to close the gap between emergency relief and lasting independence.
            Every well, classroom, and clinic we build is designed with an exit plan — a point where
            the community runs it, funds it, and owns it outright.
          </p>
          <p className="mt-4 text-ink-700 leading-relaxed">
            We started in 2011 with a single water well in Turkana County, Kenya. Fifteen years later,
            we work across 12 countries — but the model hasn\u2019t changed: listen first, build with local
            hands, and measure success by what happens after we leave.
          </p>
        </div>
        <div
          className="min-h-[360px] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?q=80&w=1600&auto=format&fit=crop')" }}
        />
      </section>

      {/* TIMELINE */}
      <section className="bg-teal-950 section-pad">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Our history</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-sand-50">
            Fifteen years, one village at a time
          </h2>

          <div className="mt-14 relative pl-8 border-l border-teal-800">
            {timeline.map((t, i) => (
              <div key={t.year} className={`relative pb-12 ${i === timeline.length - 1 ? 'pb-0' : ''}`}>
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full bg-gold-500 ring-4 ring-teal-950" />
                <span className="font-mono text-gold-400 text-sm">{t.year}</span>
                <h3 className="font-display text-xl font-semibold text-sand-50 mt-1">{t.title}</h3>
                <p className="text-sand-100/70 text-sm mt-1 max-w-lg leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-sand-50 section-pad">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">Our team</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3">People behind the projects</h2>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="text-center group">
                <div className="rounded-2xl overflow-hidden aspect-square mb-4">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-display font-semibold">{m.name}</h3>
                <p className="text-sm text-ink-700/70">{m.role}</p>
                <div className="flex justify-center gap-2 mt-2">
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-ink-700/40 hover:text-forest-700 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-ink-700/40 hover:text-forest-700 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="bg-teal-900 section-pad">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow">Transparency</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-sand-50">
            Where your dollar actually goes
          </h2>

          <div className="mt-12 space-y-6">
            {fundAllocation.map((f) => (
              <div key={f.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-sand-50 font-medium">{f.label}</span>
                  <span className="font-mono text-gold-400">{f.pct}%</span>
                </div>
                <div className="h-3 rounded-full bg-teal-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${f.pct}%`, backgroundColor: f.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-sand-100/60 max-w-xl">
            85 cents of every dollar goes directly into program work — wells, classrooms, clinics, and
            training. We publish an audited financial report every year.
          </p>
        </div>
      </section>
    </div>
  )
}
