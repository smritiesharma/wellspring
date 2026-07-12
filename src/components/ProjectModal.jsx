import { useState } from 'react'
import { X, MapPin, CheckCircle2 } from 'lucide-react'
import { mockApiCall } from '../hooks/useLocalStorage.js'
import { Spinner } from './UI.jsx'

const presetAmounts = [10, 25, 50, 100]

export default function ProjectModal({ project, onClose, onDonated }) {
  const [amount, setAmount] = useState(25)
  const [custom, setCustom] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const finalAmount = custom ? Number(custom) : amount
  const pct = Math.min(100, Math.round((project.raised / project.goal) * 100))

  const handleDonate = async (e) => {
    e.preventDefault()
    if (!finalAmount || finalAmount <= 0) return
    setSubmitting(true)
    await mockApiCall({ projectId: project.id, amount: finalAmount })
    setSubmitting(false)
    setDone(true)
    onDonated?.(project.id, finalAmount)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-ink-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white w-full sm:max-w-2xl sm:rounded-3xl rounded-t-3xl max-h-[92vh] overflow-y-auto animate-rise">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 shadow flex items-center justify-center z-10 hover:bg-sand-100"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="h-56 bg-cover bg-center rounded-t-3xl sm:rounded-t-3xl" style={{ backgroundImage: `url(${project.image})` }} />

        <div className="p-7">
          {!done ? (
            <>
              <div className="flex items-center gap-2 text-xs font-mono text-forest-700 mb-2">
                <MapPin className="h-3.5 w-3.5" /> {project.location}
              </div>
              <h2 className="font-display text-2xl font-semibold">{project.title}</h2>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed">{project.desc}</p>

              <div className="mt-6">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-mono text-forest-700">${project.raised.toLocaleString()} raised</span>
                  <span className="text-ink-700/60">of ${project.goal.toLocaleString()} goal</span>
                </div>
                <div className="h-2.5 rounded-full bg-sand-200 overflow-hidden">
                  <div className="h-full bg-forest-700 rounded-full" style={{ width: `${pct}%` }} />
                </div>
              </div>

              <form onSubmit={handleDonate} className="mt-7 border-t border-sand-200 pt-6">
                <p className="text-sm font-medium mb-3">Choose an amount</p>
                <div className="grid grid-cols-4 gap-3">
                  {presetAmounts.map((a) => (
                    <button
                      type="button"
                      key={a}
                      onClick={() => { setAmount(a); setCustom('') }}
                      className={`py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                        !custom && amount === a
                          ? 'bg-forest-700 text-white border-forest-700'
                          : 'border-sand-200 hover:border-forest-700'
                      }`}
                    >
                      ${a}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="1"
                  placeholder="Custom amount"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="mt-3 w-full border border-sand-200 rounded-xl px-4 py-2.5 text-sm focus:border-forest-700 outline-none"
                />
                <button type="submit" disabled={submitting} className="btn-dark w-full mt-5">
                  {submitting ? <><Spinner className="h-4 w-4" /> Processing\u2026</> : `Support with $${finalAmount || 0}`}
                </button>
              </form>
            </>
          ) : (
            <div className="py-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-forest-700 mx-auto" />
              <h3 className="font-display text-2xl font-semibold mt-4">Thank you!</h3>
              <p className="text-ink-700 mt-2 text-sm">
                Your simulated ${finalAmount} donation to <strong>{project.title}</strong> has been recorded.
              </p>
              <button onClick={onClose} className="btn-primary mt-6">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
