export const categories = [
  { id: 'all', label: 'All Treatments' },
  { id: 'nails', label: 'Nail Services' },
  { id: 'lashes', label: 'Eyelash Services' },
  { id: 'packages', label: 'Bridal & Packages' }
];

export const services = [
  // Nail Services
  {
    id: 'gel-nail-extensions',
    category: 'nails',
    title: 'Gel Nail Extensions',
    subtitle: 'Ultra-light, natural-feeling flexible extensions',
    price: '₹1,999',
    duration: '75 - 90 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop',
    description: 'Sculpted gel extensions tailored to your desired length and contour (Almond, Coffin, Stiletto, or Square) with long-lasting chip-free shine.',
    features: [
      'Gentle on natural nail beds',
      'High-gloss durable finish',
      'Choice of length & custom apex shape',
      'Cuticle care & nail bed prep included'
    ]
  },
  {
    id: 'acrylic-nails',
    category: 'nails',
    title: 'Acrylic Nails',
    subtitle: 'Maximum durability & structured strength',
    price: '₹1,799',
    duration: '80 - 100 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800&auto=format&fit=crop',
    description: 'Premium liquid-and-powder acrylic sculpting designed for those who desire unmatched strength, architectural length, and lasting shape.',
    features: [
      'Ideal for active lifestyles & long tips',
      'Superior structural durability',
      'Precision shaping by senior nail masters',
      'Protective glossy gel top coat'
    ]
  },
  {
    id: 'nail-art-design',
    category: 'nails',
    title: 'Custom Nail Art & Design',
    subtitle: 'Hand-painted fine art, chrome, 3D & French ombre',
    price: '₹499+',
    duration: '30 - 60 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800&auto=format&fit=crop',
    description: 'Transform your nails into wearable couture. From glazed donut chrome and blooming gel to intricate floral decals, pearls, and Swarovski crystals.',
    features: [
      'Bespoke hand-painted artistry',
      'Glazed chrome & cat-eye magnetic effects',
      'Authentic crystals & 3D charms',
      'Pinterest & Instagram recreation specialists'
    ]
  },
  {
    id: 'manicure-spa',
    category: 'nails',
    title: 'Luxury Spa Manicure',
    subtitle: 'Exfoliation, cuticle renewal & hand massage',
    price: '₹899',
    duration: '45 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
    description: 'An indulgent hand rejuvenation including organic rose-sugar scrub, warm botanical soak, meticulous cuticle detailing, and deep hydrating massage.',
    features: [
      'Aromatherapeutic hand soak & cleanse',
      'Micro-exfoliation dead skin peel',
      'Relaxing acupressure hand massage',
      'Nourishing serum & buff or shine polish'
    ]
  },
  {
    id: 'nail-refill-removal',
    category: 'nails',
    title: 'Nail Refill & Safe Removal',
    subtitle: 'Gentle maintenance to protect natural nail health',
    price: '₹699',
    duration: '35 - 50 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800&auto=format&fit=crop',
    description: 'Seamless outgrown nail rebalancing, re-shaping, and damage-free foil soak-off removal maintaining your natural nail plate thickness.',
    features: [
      'Refill grown-out gaps cleanly',
      'Zero e-file nail plate damage guarantee',
      'Deep keratin strengthening treatment',
      'Nourishing cuticle oil infusion'
    ]
  },
  {
    id: 'callus-removal',
    category: 'nails',
    title: 'Intensive Callus Removal & Pedicure',
    subtitle: 'Silky smooth heels & medical-grade foot therapy',
    price: '₹1,199',
    duration: '50 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?q=80&w=800&auto=format&fit=crop',
    description: 'Deep therapeutic foot care targeting stubborn cracked heels, rough calluses, and tired feet using enzymatic fruit peel softenings and scrub.',
    features: [
      'Gentle painless callus rasping & smoothing',
      'Hydrating paraffin or botanical wrap',
      'Calf & arch tension relief massage',
      'Long-lasting clean toe nail styling'
    ]
  },

  // Eyelash Services
  {
    id: 'classic-lash-extensions',
    category: 'lashes',
    title: 'Classic Lash Extensions',
    subtitle: '1:1 individual application for natural mascara look',
    price: '₹2,299',
    duration: '90 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800&auto=format&fit=crop',
    description: 'One premium faux-mink extension attached per natural lash for effortless waking-up-ready eyes with custom length, curl (C/D/L), and density.',
    features: [
      'Featherlight weightless feel',
      'Hypoallergenic medical-grade adhesive',
      'Customized eye map (Cat Eye, Doll Eye, Open Eye)',
      'Waterproof & lasting 4-6 weeks'
    ]
  },
  {
    id: 'volume-lash-extensions',
    category: 'lashes',
    title: 'Volume Lash Extensions',
    subtitle: 'Handcrafted ultra-fine fans (3D to 6D) for fullness',
    price: '₹2,799',
    duration: '100 - 120 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=800&auto=format&fit=crop',
    description: 'Lush, fluttery, multi-dimensional drama. 3 to 6 lightweight Russian volume lashes fan out across each single natural lash without weighing it down.',
    features: [
      'Maximum fullness & dense dark lash line',
      'Fluffy velvety matte texture',
      'Customizable Russian or Kim K wispy style',
      'Includes complimentary lash styling wand'
    ]
  },
  {
    id: 'lash-lift-tint',
    category: 'lashes',
    title: 'Keratin Lash Lift & Deep Tint',
    subtitle: 'Curled, lifted natural lashes with zero maintenance',
    price: '₹1,599',
    duration: '60 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
    description: 'Perm-free keratin infusion that curls and defines your existing natural lashes from the root up, paired with a rich jet-black gloss tint.',
    features: [
      'Zero extensions required',
      'Lasts up to 6 - 8 weeks',
      'Keratin & botanical conditioning boost',
      'Swim, sleep & workout friendly after 24 hrs'
    ]
  },

  // Special Packages
  {
    id: 'bridal-services',
    category: 'packages',
    title: 'Royal Bridal Nail & Lash Suite',
    subtitle: 'Exclusive VIP bridal pamper & photogenic glam',
    price: '₹4,499',
    duration: '180 mins',
    popular: true,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop',
    description: 'The ultimate luxury pampering for brides. Complete gel or acrylic extensions with custom bridal motifs (zari, gold leaf, crystal stones), luxury manicure, and volume lash extensions.',
    features: [
      'Personalized bridal bridal lehenga matching consult',
      'Full set gel/acrylic extensions with heavy designer art',
      'Full volume or hybrid lash extension set',
      'Luxury spa manicure with golden hydration serum',
      'Complimentary bridal touch-up kit'
    ]
  },
  {
    id: 'duo-pamper-package',
    category: 'packages',
    title: 'Glow Duo: Gel Extensions + Lash Lift',
    subtitle: 'The best of both worlds for vacations & events',
    price: '₹3,299',
    duration: '120 mins',
    popular: false,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
    description: 'Combine elegant gel nail extensions with our signature Keratin Lash Lift & Tint for instant red-carpet readiness with zero stress.',
    features: [
      'Fresh gel extension set with French/Chrome finish',
      'Keratin lash lifting & dark tinting',
      'Hydrating cuticles & collagen eye mask during lash lift',
      'Saves ₹700 when booked together'
    ]
  }
];

