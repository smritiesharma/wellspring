import { useState, useMemo } from 'react'
import { MapPin } from 'lucide-react'
import { projects as initialProjects } from '../data/mockData.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import ProjectModal from '../components/ProjectModal.jsx'

const filters = ['All', 'Active', 'Urgent', 'Completed']

export default function Campaigns() {
  const [projects, setProjects] = useLocalStorage('wellspring_projects', initialProjects)
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [projects, filter]
  )

  const handleDonated = (id, amount) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, raised: Math.min(p.goal, p.raised + amount) } : p))
    )
  }

  return (
    <div>
      <section className="bg-teal-950 section-pad !pb-14">
        <p className="eyebrow">Campaigns</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 text-sand-50 max-w-2xl">
          Projects you can watch grow
        </h1>
        <p className="mt-4 text-sand-100/70 max-w-xl">
          Every campaign below is tracked in real time, from first dollar to final handover.
        </p>
      </section>

      <section className="bg-sand-50 section-pad !pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                  filter === f
                    ? 'bg-forest-700 text-white border-forest-700'
                    : 'border-sand-200 text-ink-700 hover:border-forest-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {visible.map((p) => {
              const pct = Math.min(100, Math.round((p.raised / p.goal) * 100))
              return (
                <div key={p.id} className="card overflow-hidden flex flex-col">
                  <div className="h-44 relative overflow-hidden">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                    <span
                      className={`absolute top-3 left-3 text-xs font-mono px-2.5 py-1 rounded-full text-white ${
                        p.category === 'Urgent' ? 'bg-red-600/90' : p.category === 'Completed' ? 'bg-ink-700/80' : 'bg-forest-700/90'
                      }`}
                    >
                      {p.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-1.5 text-xs text-ink-700/60 mb-2">
                      <MapPin className="h-3.5 w-3.5" /> {p.location}
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-snug">{p.title}</h3>
                    <p className="mt-2 text-sm text-ink-700/80 leading-relaxed line-clamp-3">{p.desc}</p>

                    <div className="mt-5">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="font-mono text-forest-700">${p.raised.toLocaleString()}</span>
                        <span className="text-ink-700/50">of ${p.goal.toLocaleString()}</span>
                      </div>
                      <div className="h-2 rounded-full bg-sand-200 overflow-hidden">
                        <div className="h-full bg-forest-700 rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                    </div>

                    <button onClick={() => setSelected(p)} className="btn-dark w-full mt-5 mt-auto">
                      Support Project
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {visible.length === 0 && (
            <p className="text-center text-ink-700/60 py-16">No projects in this category right now.</p>
          )}
        </div>
      </section>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} onDonated={handleDonated} />
      )}
    </div>
  )
}
