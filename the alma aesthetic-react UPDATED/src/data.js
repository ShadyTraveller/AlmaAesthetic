export const BUSINESS = {
  name: 'Alma Aesthetic',
  email: 'book@almaaesthetic.co',
  whatsapp: '18442242723',
  whatsappDisplay: '1-844-224-2723',
  city: 'Toronto, ON',
  hours: 'Mon–Fri · 8AM–8PM',
  tz: 'America/Toronto',
}

export const TREATMENTS = [
  {
    id: 'signature',
    name: 'Signature Ritual',
    price: 150,
    img: '/images/alma-signature-facial.png',
    blurb:
      'Refined exfoliation, a potent active booster and a nourishing mask, finished with our sculpting, draining and lifting massage.',
    best: 'Lift, glow, hydration, contouring',
    pairs: 'Customized Peels or Microcurrent',
  },
  {
    id: 'radiance',
    name: 'Radiance Ritual',
    price: 250,
    img: '/images/alma-led-therapy.png',
    blurb:
      'Cleanse, peel and hydration infusion, a hyaluronic mask, circulation-boosting massage and soothing light therapy to support collagen.',
    best: 'Pre-event glow, post-flight recovery, dullness',
    pairs: 'Exosomes or LED Phototherapy',
  },
  {
    id: 'desincrustation',
    name: 'Désincrustation Aesthetic',
    price: 250,
    img: '/images/alma-galvanic-facial.png',
    blurb:
      'Deep cleansing and exfoliating facial using ultra-fine microdermabrasion for oiliness, congestion and blackheads.',
    best: 'Congestion, oiliness, deep cleansing',
    pairs: 'Customized Peels or LED Phototherapy',
  },
  {
    id: 'breathing',
    name: 'Breathing Ritual',
    price: 350,
    img: '/images/alma-led-therapy.png',
    blurb:
      'Impurities are removed, then our wand infuses specialized serums and concentrated oxygen deep into the pores.',
    best: 'Dehydrated, tired, congested skin',
    pairs: 'Microcurrent or LED Phototherapy',
  },
]

export const CONSULT = { id: 'consult', name: 'Cosmetic Consultation', minutes: 45 }

export const SERVICES = [...TREATMENTS, CONSULT]

export const ADDONS = [
  { id: 'peels', name: 'Customized Peels', price: null },
  { id: 'exosomes', name: 'Exosomes', price: 550 },
  { id: 'microdermabrasion', name: 'Microdermabrasion', price: 120 },
  { id: 'microcurrent', name: 'Microcurrent', price: 90 },
  { id: 'led', name: 'LED Phototherapy', price: 90 },
]

export const CONSULT_STEPS = [
  ['Initial Assessment', 'Your routine, lifestyle and skin concerns, to build a baseline.'],
  ['Digital Skin Analysis', 'Advanced imaging and expert observation to see what the eye cannot.'],
  ['Expert Recommendations', 'Treatments and bioscience-grade products matched to your skin.'],
  ['Ritual Plan', 'Your long-term roadmap: visit frequency and home care.'],
]

// Placeholders. Replace name, price, blurb and paste each PayPal checkout link into `paypal`.
// While `paypal` is empty the button shows "Coming soon".
export const DEVICES = [
  { id: 'device-1', name: 'Red Light Device 01', price: '$ —', blurb: 'Placeholder. Product details coming soon.', paypal: '' },
  { id: 'device-2', name: 'Red Light Device 02', price: '$ —', blurb: 'Placeholder. Product details coming soon.', paypal: '' },
  { id: 'device-3', name: 'Red Light Device 03', price: '$ —', blurb: 'Placeholder. Product details coming soon.', paypal: '' },
]

export const money = (n) => (n == null ? 'Price on consult' : `$${n}`)
