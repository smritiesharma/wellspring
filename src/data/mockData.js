export const stats = [
  { label: 'Lives Impacted', value: 10400, suffix: '+' },
  { label: 'Active Projects', value: 54, suffix: '+' },
  { label: 'Countries Reached', value: 12, suffix: '' },
  { label: 'Charity Navigator Rating', value: 4, suffix: '/5' },
]

export const pillars = [
  {
    id: 'water',
    title: 'Clean Water',
    desc: 'Wells, filtration systems, and water-safety training so families stop losing hours — and health — to dirty water.',
    icon: 'Droplets',
  },
  {
    id: 'education',
    title: 'Education',
    desc: 'Classrooms, teacher training, and scholarships that keep kids in school through the years that matter most.',
    icon: 'BookOpen',
  },
  {
    id: 'health',
    title: 'Healthcare',
    desc: 'Mobile clinics and community health workers bringing basic care within walking distance.',
    icon: 'HeartPulse',
  },
  {
    id: 'livelihoods',
    title: 'Livelihoods',
    desc: 'Microloans, farming co-ops, and trade training that turn short-term aid into long-term independence.',
    icon: 'Sprout',
  },
]

export const stories = [
  {
    id: 1,
    title: 'A well changes a village\u2019s morning',
    excerpt: 'In Kibera, the walk for water used to take three hours. Now it takes three minutes — and the girls who made that walk are back in class.',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1200&auto=format&fit=crop',
    date: 'June 2026',
    category: 'Clean Water',
  },
  {
    id: 2,
    title: 'The first class of Amina Primary',
    excerpt: 'Forty children started school this spring in a building that didn\u2019t exist a year ago, taught by two teachers Wellspring trained.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1200&auto=format&fit=crop',
    date: 'May 2026',
    category: 'Education',
  },
  {
    id: 3,
    title: 'From aid to income: the Terai co-op',
    excerpt: 'Eighteen families pooled a Wellspring microloan into a shared rice mill. This season, all eighteen turned a profit.',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?q=80&w=1200&auto=format&fit=crop',
    date: 'April 2026',
    category: 'Livelihoods',
  },
]

export const timeline = [
  { year: '2011', title: 'Founded in a spare room', desc: 'Three friends, one well-drilling rig, and a single village in Kenya.' },
  { year: '2014', title: 'First school built', desc: 'Wellspring Primary opens its doors to 60 students in Turkana County.' },
  { year: '2018', title: 'Crossed into 6 countries', desc: 'Programs expand into South Asia and Central America.' },
  { year: '2022', title: 'Livelihoods program launched', desc: 'Microloan and co-op model rolled out to 40 communities.' },
  { year: '2026', title: '10,000+ lives touched', desc: 'Today, 54 active projects across 12 countries.' },
]

export const team = [
  { name: 'Amara Okafor', role: 'Executive Director', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop' },
  { name: 'Daniel Reyes', role: 'Director of Programs', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
  { name: 'Priya Nair', role: 'Head of Water Initiatives', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
  { name: 'Tomas Berg', role: 'Finance & Transparency Lead', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop' },
]

export const fundAllocation = [
  { label: 'Programs', pct: 85, color: '#276E57' },
  { label: 'Fundraising', pct: 10, color: '#D4A24C' },
  { label: 'Administration', pct: 5, color: '#B8862F' },
]

export const projects = [
  {
    id: 'p1',
    title: 'Turkana Well Rehabilitation',
    category: 'Urgent',
    location: 'Turkana, Kenya',
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop',
    desc: 'Six community wells built in 2014 need new pumps before the dry season. Without repair, 2,200 people lose their nearest water source.',
    raised: 12000,
    goal: 20000,
  },
  {
    id: 'p2',
    title: 'Amina Primary Expansion',
    category: 'Active',
    location: 'Kilifi, Kenya',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    desc: 'Adding two classrooms and a library to keep pace with enrollment, which has doubled in two years.',
    raised: 8400,
    goal: 15000,
  },
  {
    id: 'p3',
    title: 'Terai Rice Mill Co-op',
    category: 'Active',
    location: 'Terai, Nepal',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop',
    desc: 'Scaling the shared-mill model to eight new farming communities with training and equipment.',
    raised: 21000,
    goal: 30000,
  },
  {
    id: 'p4',
    title: 'Mobile Health Van — Guatemala',
    category: 'Urgent',
    location: 'Huehuetenango, Guatemala',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop',
    desc: 'A second van is needed to reach eleven mountain villages currently outside clinic range.',
    raised: 6100,
    goal: 25000,
  },
  {
    id: 'p5',
    title: 'Clean Water Filtration — Cusco',
    category: 'Completed',
    location: 'Cusco, Peru',
    image: 'https://images.unsplash.com/photo-1526951521990-620dc14c214b?q=80&w=1200&auto=format&fit=crop',
    desc: 'Household filtration units installed for 340 families. Waterborne illness reports dropped 68% within six months.',
    raised: 18000,
    goal: 18000,
  },
  {
    id: 'p6',
    title: 'Girls\u2019 Scholarship Fund',
    category: 'Active',
    location: 'Multi-country',
    image: 'https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=1200&auto=format&fit=crop',
    desc: 'Full-year scholarships covering tuition, uniforms, and supplies for girls at risk of dropping out.',
    raised: 27500,
    goal: 40000,
  },
]

export const openings = [
  {
    id: 'o1',
    title: 'Field Volunteer — Water Projects',
    type: 'Volunteer',
    commitment: '3+ months, on-site',
    desc: 'Support well-drilling teams and community water-safety training in East Africa. No engineering background required — just reliability and a willingness to learn.',
  },
  {
    id: 'o2',
    title: 'Remote Grant Writer',
    type: 'Volunteer',
    commitment: '5 hrs/week, remote',
    desc: 'Help us secure funding by researching and drafting grant proposals alongside our development team.',
  },
  {
    id: 'o3',
    title: 'Program Manager, Livelihoods',
    type: 'Career',
    commitment: 'Full-time, Nairobi HQ',
    desc: 'Own the day-to-day of our microloan and co-op programs, from partner relationships to impact reporting.',
  },
  {
    id: 'o4',
    title: 'Communications Associate',
    type: 'Career',
    commitment: 'Full-time, remote',
    desc: 'Tell the stories behind our projects across email, social, and our annual report.',
  },
]

export const testimonials = [
  { name: 'Fatima R.', role: 'Field Volunteer, 2024\u2013present', quote: 'I came for three months and stayed for two years. You see exactly where the money goes — that\u2019s rare.', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop' },
  { name: 'James K.', role: 'Remote Grant Writer', quote: 'Working from home, I still get monthly updates on the actual wells our grants funded. It never feels abstract.', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop' },
  { name: 'Lin C.', role: 'Field Volunteer, 2023', quote: 'The training before deployment was thorough. I felt useful on day one, not day thirty.', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop' },
]
