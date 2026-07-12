import { useState } from 'react'
import { ChevronDown, CheckCircle2, ArrowRight, ArrowLeft, Quote } from 'lucide-react'
import { openings, testimonials } from '../data/mockData.js'
import { api } from '../api/client.js'
import { useAuth } from '../context/AuthContext.jsx'
import { Spinner } from '../components/UI.jsx'

const skillOptions = ['Construction', 'Teaching', 'Healthcare', 'Fundraising', 'Design / Media', 'Logistics']
const availabilityOptions = ['Weekends only', 'Few weeks (short-term)', '3+ months', 'Fully remote']

function VolunteerForm({ presetOpening, onApplied }) {
  const { token, user } = useAuth()
  const [step, setStep] = useState(1)
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [serverError, setServerError] = useState('')
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', skills: [], availability: '', reason: '' })
  const [errors, setErrors] = useState({})

  const toggleSkill = (s) =>
    setForm((f) => ({
      ...f,
      skills: f.skills.includes(s) ? f.skills.filter((x) => x !== s) : [...f.skills, s],
    }))

  const validateStep1 = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateStep2 = () => {
    const e = {}
    if (form.skills.length === 0) e.skills = 'Select at least one skill'
    if (!form.availability) e.availability = 'Choose your availability'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (step === 1 && !validateStep1()) return
    if (step === 2 && !validateStep2()) return
    setStep((s) => s + 1)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setServerError('')
    if (!form.reason.trim()) {
      setErrors({ reason: 'Tell us a little about why you want to join' })
      return
    }
    setSubmitting(true)
    try {
      await api.applyVolunteer(
        { ...form, openingId: presetOpening?.id, openingTitle: presetOpening?.title },
        token
      )
      setDone(true)
      onApplied?.()
    } catch (err) {
      setServerError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className="card p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-forest-700 mx-auto" />
        <h3 className="font-display text-2xl font-semibold mt-4">Application received</h3>
        <p className="text-ink-700 mt-2 max-w-md mx-auto">
          Thanks, {form.name.split(' ')[0]}. Your application is saved on our server{user ? ' and visible in your dashboard' : ''}.
          A coordinator will follow up at {form.email} within 3–5 business days.
        </p>
      </div>
    )
  }

  return (
    <div className="card p-8">
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((n) => (
          <div key={n} className="flex items-center flex-1 last:flex-none">
            <div
              className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-mono shrink-0 ${
                step >= n ? 'bg-forest-700 text-white' : 'bg-sand-200 text-ink-700/50'
              }`}
            >
              {n}
            </div>
            {n < 3 && <div className={`h-0.5 flex-1 mx-2 ${step > n ? 'bg-forest-700' : 'bg-sand-200'}`} />}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-4 animate-rise">
            <h3 className="font-display text-xl font-semibold">Let\u2019s start with you</h3>
            {presetOpening && (
              <p className="text-xs font-mono text-gold-600 bg-gold-500/10 rounded-lg px-3 py-2">
                Applying for: {presetOpening.title}
              </p>
            )}
            <div>
              <label className="text-sm font-medium">Full name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1.5 w-full border border-sand-200 rounded-xl px-4 py-2.5 text-sm focus:border-forest-700 outline-none"
                placeholder="Jane Doe"
              />
              {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1.5 w-full border border-sand-200 rounded-xl px-4 py-2.5 text-sm focus:border-forest-700 outline-none"
                placeholder="jane@email.com"
              />
              {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5 animate-rise">
            <h3 className="font-display text-xl font-semibold">Your skills & time</h3>
            <div>
              <label className="text-sm font-medium">Skills (select any)</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {skillOptions.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggleSkill(s)}
                    className={`px-4 py-1.5 rounded-full text-sm border transition-colors ${
                      form.skills.includes(s) ? 'bg-forest-700 text-white border-forest-700' : 'border-sand-200 hover:border-forest-700'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {errors.skills && <p className="text-xs text-red-600 mt-1">{errors.skills}</p>}
            </div>
            <div>
              <label className="text-sm font-medium">Availability</label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {availabilityOptions.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => setForm({ ...form, availability: a })}
                    className={`px-4 py-2 rounded-xl text-sm border text-left transition-colors ${
                      form.availability === a ? 'bg-forest-700 text-white border-forest-700' : 'border-sand-200 hover:border-forest-700'
                    }`}
                  >
                    {a}
                  </button>
                ))}
              </div>
              {errors.availability && <p className="text-xs text-red-600 mt-1">{errors.availability}</p>}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4 animate-rise">
            <h3 className="font-display text-xl font-semibold">Why Wellspring?</h3>
            <textarea
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
              rows={5}
              placeholder="Tell us what draws you to this work..."
              className="w-full border border-sand-200 rounded-xl px-4 py-3 text-sm focus:border-forest-700 outline-none resize-none"
            />
            {errors.reason && <p className="text-xs text-red-600 mt-1">{errors.reason}</p>}
            {serverError && <p className="text-sm text-red-600">{serverError}</p>}
          </div>
        )}

        <div className="flex justify-between mt-8">
          {step > 1 ? (
            <button type="button" onClick={() => setStep((s) => s - 1)} className="btn-secondary !text-ink-900 !border-sand-300">
              <ArrowLeft className="h-4 w-4" /> Back
            </button>
          ) : <span />}

          {step < 3 ? (
            <button type="button" onClick={handleNext} className="btn-dark">
              Next <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button type="submit" disabled={submitting} className="btn-primary">
              {submitting ? <><Spinner className="h-4 w-4" /> Submitting…</> : 'Submit Application'}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

function OpeningsAccordion({ onApply }) {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="space-y-3">
      {openings.map((o) => (
        <div key={o.id} className="border border-sand-200 rounded-2xl bg-white overflow-hidden">
          <button
            onClick={() => setOpenId(openId === o.id ? null : o.id)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
          >
            <div>
              <span className="text-xs font-mono text-gold-600">{o.type} · {o.commitment}</span>
              <h4 className="font-display font-semibold text-lg mt-0.5">{o.title}</h4>
            </div>
            <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${openId === o.id ? 'rotate-180' : ''}`} />
          </button>
          {openId === o.id && (
            <div className="px-6 pb-6 animate-rise">
              <p className="text-sm text-ink-700 leading-relaxed">{o.desc}</p>
              <button onClick={() => onApply(o)} className="btn-dark mt-4 !py-2 !px-5 text-sm">
                Apply Now
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default function GetInvolved() {
  const [selectedOpening, setSelectedOpening] = useState(null)

  return (
    <div>
      <section className="bg-teal-950 section-pad !pb-14">
        <p className="eyebrow">Get involved</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 text-sand-50 max-w-2xl">
          Bring your skills to the field
        </h1>
        <p className="mt-4 text-sand-100/70 max-w-xl">
          Whether it\u2019s three hours a week from home or three months on-site, there\u2019s a role built for your schedule.
        </p>
      </section>

      <section className="bg-sand-50 section-pad !pt-14 grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
        <div className="lg:col-span-3">
          <h2 className="font-display text-2xl font-semibold mb-6">Current openings</h2>
          <OpeningsAccordion onApply={setSelectedOpening} />
        </div>
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl font-semibold mb-6">Volunteer registration</h2>
          <VolunteerForm key={selectedOpening?.id || 'general'} presetOpening={selectedOpening} />
        </div>
      </section>

      <section className="bg-teal-900 section-pad">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow">In their words</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-sand-50">
            What volunteers say
          </h2>
          <div className="mt-12 columns-1 md:columns-3 gap-6 space-y-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`break-inside-avoid bg-teal-800/50 border border-teal-800 rounded-2xl p-6 ${i === 1 ? 'md:mt-8' : ''}`}>
                <Quote className="h-6 w-6 text-gold-400 mb-3" />
                <p className="text-sand-100/90 text-sm leading-relaxed">\u201C{t.quote}\u201D</p>
                <div className="flex items-center gap-3 mt-5">
                  <img src={t.image} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                  <div>
                    <p className="text-sand-50 text-sm font-semibold">{t.name}</p>
                    <p className="text-sand-100/50 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
