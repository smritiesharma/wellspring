import { useState } from 'react'
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react'
import { mockApiCall, useLocalStorage } from '../hooks/useLocalStorage.js'
import { Spinner } from '../components/UI.jsx'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [, setMessages] = useLocalStorage('wellspring_contact_messages', [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    const result = await mockApiCall(form)
    setMessages((prev) => [...prev, result])
    setSubmitting(false)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="card p-8 relative">
      {sent && (
        <div className="absolute inset-0 bg-white/95 rounded-2xl flex flex-col items-center justify-center text-center p-8 z-10 animate-rise">
          <CheckCircle2 className="h-12 w-12 text-forest-700" />
          <h3 className="font-display text-xl font-semibold mt-3">Message sent</h3>
          <p className="text-sm text-ink-700 mt-1">We\u2019ll get back to you within two business days.</p>
        </div>
      )}
      <h3 className="font-display text-2xl font-semibold mb-6">Send us a message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-1.5 w-full border border-sand-200 rounded-xl px-4 py-2.5 text-sm focus:border-forest-700 outline-none"
            />
            {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="mt-1.5 w-full border border-sand-200 rounded-xl px-4 py-2.5 text-sm focus:border-forest-700 outline-none"
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium">Subject</label>
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="mt-1.5 w-full border border-sand-200 rounded-xl px-4 py-2.5 text-sm focus:border-forest-700 outline-none"
          />
          {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
        </div>
        <div>
          <label className="text-sm font-medium">Message</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="mt-1.5 w-full border border-sand-200 rounded-xl px-4 py-2.5 text-sm focus:border-forest-700 outline-none resize-none"
          />
          {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
        </div>
        <button type="submit" disabled={submitting} className="btn-dark w-full">
          {submitting ? <><Spinner className="h-4 w-4" /> Sending\u2026</> : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

function DonationPortal() {
  const [frequency, setFrequency] = useState('once')
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')
  const [billing, setBilling] = useState({ name: '', email: '', card: '' })
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [, setDonations] = useLocalStorage('wellspring_donations', [])

  const finalAmount = custom ? Number(custom) : amount

  const handleDonate = async (e) => {
    e.preventDefault()
    if (!finalAmount || finalAmount <= 0 || !billing.name || !billing.email) return
    setSubmitting(true)
    const result = await mockApiCall({ frequency, amount: finalAmount, ...billing })
    setDonations((prev) => [...prev, result])
    setSubmitting(false)
    setDone(true)
  }

  if (done) {
    return (
      <div className="card p-10 text-center bg-teal-950 !border-teal-800">
        <CheckCircle2 className="h-14 w-14 text-gold-400 mx-auto" />
        <h3 className="font-display text-2xl font-semibold mt-4 text-sand-50">Transaction complete</h3>
        <p className="text-sand-100/70 mt-2">
          Your simulated {frequency === 'monthly' ? 'monthly' : 'one-time'} donation of{' '}
          <span className="text-gold-400 font-mono">${finalAmount}</span> has been processed.
        </p>
        <button onClick={() => setDone(false)} className="btn-primary mt-6">Make Another Donation</button>
      </div>
    )
  }

  return (
    <div className="card p-8 bg-teal-950 !border-teal-800">
      <h3 className="font-display text-2xl font-semibold text-sand-50 mb-6">Make a donation</h3>

      <div className="flex gap-2 mb-6">
        {['once', 'monthly'].map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className={`flex-1 py-2.5 rounded-full text-sm font-medium capitalize transition-colors ${
              frequency === f ? 'bg-gold-500 text-teal-950' : 'bg-teal-800 text-sand-100/70'
            }`}
          >
            {f === 'once' ? 'One-time' : 'Monthly'}
          </button>
        ))}
      </div>

      <form onSubmit={handleDonate} className="space-y-5">
        <div>
          <div className="grid grid-cols-4 gap-2">
            {[10, 25, 50, 100].map((a) => (
              <button
                type="button"
                key={a}
                onClick={() => { setAmount(a); setCustom('') }}
                className={`py-2.5 rounded-xl border text-sm font-semibold transition-colors ${
                  !custom && amount === a ? 'bg-gold-500 text-teal-950 border-gold-500' : 'border-teal-700 text-sand-100'
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
            className="mt-3 w-full bg-teal-900 border border-teal-700 rounded-xl px-4 py-2.5 text-sm text-sand-50 placeholder:text-sand-100/40 outline-none focus:border-gold-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="Full name"
            value={billing.name}
            onChange={(e) => setBilling({ ...billing, name: e.target.value })}
            className="bg-teal-900 border border-teal-700 rounded-xl px-4 py-2.5 text-sm text-sand-50 placeholder:text-sand-100/40 outline-none focus:border-gold-500"
          />
          <input
            placeholder="Email"
            value={billing.email}
            onChange={(e) => setBilling({ ...billing, email: e.target.value })}
            className="bg-teal-900 border border-teal-700 rounded-xl px-4 py-2.5 text-sm text-sand-50 placeholder:text-sand-100/40 outline-none focus:border-gold-500"
          />
        </div>
        <input
          placeholder="Card number (mock — 4242 4242 4242 4242)"
          value={billing.card}
          onChange={(e) => setBilling({ ...billing, card: e.target.value })}
          className="w-full bg-teal-900 border border-teal-700 rounded-xl px-4 py-2.5 text-sm text-sand-50 placeholder:text-sand-100/40 outline-none focus:border-gold-500"
        />

        <button type="submit" disabled={submitting} className="btn-primary w-full">
          {submitting ? <><Spinner className="h-4 w-4" /> Processing\u2026</> : `Donate $${finalAmount || 0} ${frequency === 'monthly' ? '/mo' : ''}`}
        </button>
        <p className="text-xs text-sand-100/40 text-center">This is a demo checkout — no real payment is processed.</p>
      </form>
    </div>
  )
}

export default function Contact() {
  return (
    <div>
      <section className="bg-teal-950 section-pad !pb-14">
        <p className="eyebrow">Contact & donate</p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold mt-3 text-sand-50 max-w-2xl">
          Let\u2019s get water where it\u2019s needed
        </h1>
      </section>

      <section className="bg-sand-50 section-pad !pt-14">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ContactForm />
          <DonationPortal />
        </div>
      </section>

      <section className="bg-white section-pad !pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-forest-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Headquarters</p>
                <p className="text-sm text-ink-700/70">128 Meridian Ave, Suite 4, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-forest-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-sm text-ink-700/70">+254 (0) 700 123 456</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-forest-700 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-ink-700/70">hello@wellspring.org</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-64 bg-sand-100 border border-sand-200 flex items-center justify-center relative">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop')" }}
            />
            <div className="relative flex flex-col items-center gap-2 text-ink-700">
              <MapPin className="h-8 w-8 text-forest-700" />
              <span className="text-sm font-medium bg-white/90 px-3 py-1 rounded-full">Map placeholder — Nairobi, Kenya</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
