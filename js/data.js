/* ══ PRODUCT DATA — PACK_IMAGES, PACK_COUNTS, PRODUCTS, BRANDS ══ */

/* ══ PRODUCT DATA ══ */
const PACK_IMAGES = {
  'oat-chips': [
    'packs/oat-chips-1.webp',
    'packs/oat-chips-2.webp',
    'packs/oat-chips-3.webp',
    'packs/oat-chips-4.webp',
    'packs/oat-chips-5.webp',
    'packs/oat-chips-6.webp',
    'packs/oat-chips-7.webp',
    'packs/oat-chips-8.webp',
    'packs/oat-chips-9.webp',
  ],
  'fire-fingers': [
    'packs/fire-fingers-1.webp',
    'packs/fire-fingers-2.webp',
    'packs/fire-fingers-3.webp',
    'packs/fire-fingers-4.webp',
    'packs/fire-fingers-5.webp',
    'packs/fire-fingers-6.webp',
  ],
  'oat-rings': [
    'packs/oat-rings-1.webp',
    'packs/oat-rings-2.webp',
    'packs/oat-rings-3.webp',
    'packs/oat-rings-4.webp',
    'packs/oat-rings-5.webp',
    'packs/oat-rings-6.webp',
  ],
  'popcorn': [
    'packs/popcorn-1.webp',
    'packs/popcorn-2.webp',
    'packs/popcorn-3.webp',
    'packs/popcorn-4.webp',
    'packs/popcorn-5.webp',
    'packs/popcorn-6.webp',
    'packs/popcorn-7.webp',
    'packs/popcorn-8.webp',
  ],
  'bozo': [
    'packs/bozo-1.webp',
    'packs/bozo-2.webp',
    'packs/bozo-3.webp',
    'packs/bozo-4.webp',
    'packs/bozo-5.webp',
    'packs/bozo-6.webp',
  ],
  'crazy': [
    'packs/crazy-1.webp',
    'packs/crazy-2.webp',
    'packs/crazy-3.webp',
    'packs/crazy-4.webp',
    'packs/crazy-5.webp',
    'packs/crazy-6.webp',
    'packs/crazy-7.webp',
  ],
  'zegzag': [
    'packs/zegzag-1.webp',
    'packs/zegzag-2.webp',
    'packs/zegzag-3.webp',
    'packs/zegzag-4.webp',
  ],
  'chill-puffs': [
    'packs/chill-puffs-1.webp',
    'packs/chill-puffs-2.webp',
    'packs/chill-puffs-3.webp',
  ],
  'cranshi': [
    'packs/cranshi-1.webp',
    'packs/cranshi-2.webp',
    'packs/cranshi-3.webp',
    'packs/cranshi-4.webp',
    'packs/cranshi-5.webp',
    'packs/cranshi-6.webp',
    'packs/cranshi-7.webp',
  ],
  'crispy-peanut': [
    'packs/crispy-peanut-1.webp',
    'packs/crispy-peanut-2.webp',
    'packs/crispy-peanut-3.webp',
    'packs/crispy-peanut-4.webp',
  ],
  'lightpop-lolly': [
    'packs/lightpop-lolly-1.webp',
    'packs/lightpop-lolly-2.webp',
    'packs/lightpop-lolly-3.webp',
    'packs/lightpop-lolly-4.webp',
    'packs/lightpop-lolly-5.webp',
    'packs/lightpop-lolly-6.webp',
    'packs/lightpop-lolly-7.webp',
    'packs/lightpop-lolly-8.webp',
    'packs/lightpop-lolly-9.webp',
    'packs/lightpop-lolly-10.webp',
    'packs/lightpop-lolly-11.webp',
    'packs/lightpop-lolly-12.webp',
    'packs/lightpop-lolly-13.webp',
    'packs/lightpop-lolly-14.webp',
  ],
  'lightpop-bonbon': [
    'packs/lightpop-bonbon-1.webp',
    'packs/lightpop-bonbon-2.webp',
    'packs/lightpop-bonbon-3.webp',
    'packs/lightpop-bonbon-4.webp',
    'packs/lightpop-bonbon-5.webp',
    'packs/lightpop-bonbon-6.webp',
    'packs/lightpop-bonbon-7.webp',
    'packs/lightpop-bonbon-8.webp',
    'packs/lightpop-bonbon-9.webp',
    'packs/lightpop-bonbon-10.webp',
  ],
  'tutti-lolly': [
    'packs/tutti-lolly-1.webp',
    'packs/tutti-lolly-2.webp',
    'packs/tutti-lolly-3.webp',
    'packs/tutti-lolly-4.webp',
    'packs/tutti-lolly-5.webp',
    'packs/tutti-lolly-6.webp',
    'packs/tutti-lolly-7.webp',
    'packs/tutti-lolly-8.webp',
    'packs/tutti-lolly-9.webp',
  ],
  'honey-gum': [
    'packs/honey-gum-1.webp',
    'packs/honey-gum-2.webp',
    'packs/honey-gum-3.webp',
    'packs/honey-gum-4.webp',
    'packs/honey-gum-5.webp',
    'packs/honey-gum-6.webp',
    'packs/honey-gum-7.webp',
    'packs/honey-gum-8.webp',
    'packs/honey-gum-9.webp',
  ],
};

        /* ══ PACKAGING COUNTS KEY MAP ══ */
        const PACK_COUNTS = {
            'chillout-oat': {key:'oat-chips'},
            'fire-fingers': {key:'fire-fingers'},
            'oat-rings': {key:'oat-rings'},
            'gourmet-popcorn': {key:'popcorn'},
            'bozo-puffs': {key:'bozo'},
            'crazy-crisps': {key:'crazy'},
            'lightpop-lolly': {key:'lightpop-lolly'},
            'lightpop-bonbon': {key:'lightpop-bonbon'},
            'tutti-lolly': {key:'tutti-lolly'},
            'honey-gum': {key:'honey-gum'},
            'mojo-lolly': {key:'tutti-lolly'},
        };

        const PRODUCTS = {
            'chillout-oat': {
                brand: 'ChillOut',
                cat: 'Snacks & Chips',
                img: 'ChillOut Oat Chips.png',
                name: 'ChillOut Oat Chips — 7 Flavors',
                desc: 'The first oven-baked oat chip in Egypt. Made from whole oat grains — never fried — delivering a satisfying crunch with a healthier nutritional profile. Trusted by distributors worldwide.',
                glow: 'linear-gradient(135deg,#1e3a8a,#1d4ed8)',
                flavors: ['Grilled BBQ', 'Sweet Chilli', 'Flamy Hot', 'Smoked Food', 'Chicken', 'Sour Cream', 'Original'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Method',
                    v: 'Oven-Roasted'
                }, {
                    l: 'Brand',
                    v: 'ChillOut'
                }],
                certs: ['HALAL', 'ISO 22000', 'FDA', 'HACCP']
            },
            'fire-fingers': {
                brand: 'ChillOut',
                cat: 'Snacks',
                img: 'Fire Fingers.png',
                em: '🌶️',
                name: 'Fire Fingers',
                desc: 'Bold, fiery corn fingers bursting with Spicy Shrimp flavor. Oven-baked — never fried. A crowd favorite in Gulf and export markets.',
                glow: 'linear-gradient(135deg,#7c2d12,#ea580c)',
                flavors: ['Spicy Shrimp'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Method',
                    v: 'Oven-Baked'
                }, {
                    l: 'Brand',
                    v: 'ChillOut'
                }],
                certs: ['HALAL', 'ISO 22000', 'FDA', 'HACCP']
            },
            'oat-rings': {
                brand: 'ChillOut',
                cat: 'Snacks',
                img: 'Backed Oat Rings.png',
                em: '⭕',
                name: 'Baked Oat Rings',
                desc: 'Crunchy oven-baked oat rings in multiple bold flavors — Grilled, Tomatoes, Spicy, and Sweet BBQ. A healthier take on classic ring snacks.',
                glow: 'linear-gradient(135deg,#14532d,#16a34a)',
                flavors: ['Grilled', 'Tomatoes', 'Spicy', 'Sweet BBQ'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Method',
                    v: 'Oven-Baked'
                }, {
                    l: 'Brand',
                    v: 'ChillOut'
                }],
                certs: ['HALAL', 'ISO 22000', 'HACCP']
            },
            'gourmet-popcorn': {
                brand: 'ChillOut',
                cat: 'Snacks',
                img: 'Gourmet Popcorn.png',
                em: '🍿',
                name: 'Gourmet Popcorn',
                desc: 'Premium quality gourmet popcorn in 6 sophisticated flavors. A step above regular popcorn — perfect for upscale retail placement and impulse purchase.',
                glow: 'linear-gradient(135deg,#78350f,#d97706)',
                flavors: ['Butter', 'Caramel', 'Cheese', 'BBQ', 'Sweet Chilli', 'Salt & Vinegar'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Brand',
                    v: 'ChillOut'
                }, {
                    l: 'Type',
                    v: 'Gourmet'
                }],
                certs: ['HALAL', 'ISO 22000', 'HACCP']
            },
            'crazy-crisps': {
                brand: 'Crazy / Zegzag',
                cat: 'Snacks & Chips',
                img: 'Crazy Crisps- Flaming Hot Series.png',
                em: '🔥',
                name: 'Crazy Crisps — Flaming Hot Series',
                desc: '100% Natural ingredients. Boldly seasoned crisps under the Zegzag brand that deliver an intense, adventurous heat experience. A bestseller in spice-loving markets across the Gulf.',
                glow: 'linear-gradient(135deg,#450a0a,#dc2626)',
                flavors: ['Flaming Hot', 'Shrimps', 'Chicken', 'Tomatoes'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Brand',
                    v: 'Zegzag / Crazy'
                }, {
                    l: 'Type',
                    v: '100% Natural'
                }],
                certs: ['HALAL', 'ISO 22000', 'FDA', 'HACCP']
            },
            'bozo-puffs': {
                brand: 'Bozo',
                cat: 'Puffs',
                img: 'Bozo.png',
                em: '💜',
                name: 'Bozo Puffs',
                desc: 'Big-bag corn puffs with bold, moreish flavors. Mexican Salsa and BBQ lead the range — ideal for family-size snacking occasions. Popular in Gulf and European markets.',
                glow: 'linear-gradient(135deg,#2e1065,#7c3aed)',
                flavors: ['Mexican Salsa', 'BBQ', 'Cheese', 'Ketchup', 'Onion'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Brand',
                    v: 'Bozo'
                }, {
                    l: 'Type',
                    v: 'Corn Puffs'
                }],
                certs: ['HALAL', 'ISO 22000', 'HACCP']
            },
            'lightpop-lolly': {
                brand: 'Light Pop',
                cat: 'Lollipops',
                img: 'lightpop.png',
                em: '🍭',
                name: 'Light Pop Fruits Lollipop — Multi-Format',
                desc: 'Natural Colors. Mix Flavors. Available in bags, jars, bus displays, car displays and tree displays — making it one of the most versatile lollipop ranges in the Egyptian export market.',
                glow: 'linear-gradient(135deg,#9d174d,#db2777)',
                flavors: ['Strawberry', 'Mango', 'Orange', 'Lemon', 'Watermelon', 'Cola', 'Cherry'],
                specs: [{
                    l: 'Pack Sizes',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Brand',
                    v: 'Light Pop'
                }, {
                    l: 'Display Types',
                    v: 'Bag · Jar · Bus · Car · Tree'
                }],
                certs: ['HALAL', 'ISO 22000', 'FDA', 'Natural Colors', 'HACCP']
            },
            'lightpop-premium': {
                brand: 'Light Pop',
                cat: 'Lollipops — Coming Soon',
                img: 'Light pop.png',
                em: '🟠',
                name: 'Light Pop Premium Box',
                desc: 'An elevated lollipop experience — exotic flavor combinations in premium gift-box packaging. Designed for upscale retail and impulse gifting occasions.',
                glow: 'linear-gradient(135deg,#7c2d12,#f97316)',
                flavors: ['Chili Mango', 'Dragon Fruit', 'Hazelnut Chocolate'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Brand',
                    v: 'Light Pop'
                }, {
                    l: 'Status',
                    v: 'Coming Soon'
                }],
                certs: ['HALAL', 'ISO 22000', 'HACCP']
            },
            'mojo-lolly': {
                brand: 'MOJO',
                cat: 'Bubble Gum Lollipop',
                img: 'Mojo.png',
                em: '😜',
                name: 'Mojo Lollipop',
                desc: 'Fruit-flavored lollipops with a center-filled bubble gum core. A kid-favorite format in bus, car, and box display configurations. Drives strong repeat purchase.',
                glow: 'linear-gradient(135deg,#7c0000,#ef4444)',
                flavors: ['Strawberry', 'Watermelon', 'Orange', 'Lemon', 'Raspberry', 'Cola'],
                specs: [{
                    l: 'Pack Sizes',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Brand',
                    v: 'MOJO'
                }, {
                    l: 'Type',
                    v: 'Bubble Gum Center'
                }],
                certs: ['HALAL', 'ISO 22000', 'HACCP']
            },
            'tutti-lolly': {
                brand: 'Tutti Lolly',
                cat: 'Mini Lollipops',
                img: 'TuttiLolly.png',
                em: '🎀',
                name: 'Tutti Lolly Mini & XXL',
                desc: 'Colorful mini and XXL lollipops made with Natural Colors and mix flavors. Available in 2 sizes — perfect for impulse display and kids gifting markets.',
                glow: 'linear-gradient(135deg,#713f12,#eab308)',
                flavors: ['Mix Fruits', 'Strawberry', 'Mango', 'Apple', 'Berry', 'Cola'],
                specs: [{
                    l: 'Pack Size',
                    v: 'Customizable'
                }, {
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Brand',
                    v: 'Tutti Lolly'
                }, {
                    l: 'Sizes',
                    v: 'Mini & XXL'
                }],
                certs: ['HALAL', 'ISO 22000', 'Natural Colors', 'HACCP']
            },
            'honey-gum': {
                brand: 'HONEY',
                cat: 'Chewing Gum',
                img: 'Honey.png',
                em: '🍯',
                name: 'Honey Gum — 6 Flavors',
                desc: 'Center-filled chewing gum with a liquid honey core. Available in box, jar and the health-focused Hacendado sugar-free line. A staple product across all EgyGulf export markets.',
                glow: 'linear-gradient(135deg,#064e3b,#10b981)',
                flavors: ['Strawberry', 'Mango', 'Mint', 'Cola', 'Apple', 'Banana'],
                specs: [{
                    l: 'Pack Sizes',
                    v: 'Customizable'
                }, {
                    l: 'Formats',
                    v: 'Box & Jar'
                }, {
                    l: 'Brand',
                    v: 'Honey Gum'
                }, {
                    l: 'Type',
                    v: 'Center-Filled'
                }],
                certs: ['HALAL', 'ISO 22000', 'FDA', 'HACCP']
            },
            'lightpop-bonbon': {
                brand: 'Light Pop',
                cat: 'Hard Candy',
                img: 'Light pop Fruits lollipop.png',
                em: '🍡',
                name: 'Light Pop Bon Bon',
                desc: 'Classic hard candy bon bons in beloved familiar flavors. Sold in bags and jars — suitable for counter display and bulk retail.',
                glow: 'linear-gradient(135deg,#1e1b4b,#6d28d9)',
                flavors: ['Butter', 'Coffee', 'Cola', 'Mint', 'Fruits', 'Milk'],
                specs: [{
                    l: 'Pack Sizes',
                    v: 'Customizable'
                }, {
                    l: 'Formats',
                    v: 'Bag & Jar'
                }, {
                    l: 'Brand',
                    v: 'Light Pop'
                }, {
                    l: 'Type',
                    v: 'Hard Candy'
                }],
                certs: ['HALAL', 'ISO 22000', 'HACCP']
            },
            'light-eclair': {
                brand: 'Light Pop',
                cat: 'Candy',
                img: 'packs/honey-gum-10.webp',
                em: '🟣',
                name: 'Light Eclair',
                desc: 'Caramel eclair toffee candy in bag, box, and jar formats. A familiar impulse product with broad market appeal — a global favourite across all EgyGulf export markets.',
                glow: 'linear-gradient(135deg,#4a1942,#c026d3)',
                flavors: ['Caramel'],
                specs: [{
                    l: 'Weight',
                    v: 'Customizable'
                }, {
                    l: 'Formats',
                    v: 'Bag · Box · Jar'
                }, {
                    l: 'Brand',
                    v: 'Light Pop'
                }, {
                    l: 'Type',
                    v: 'Toffee Eclair'
                }],
                certs: ['HALAL', 'ISO 22000', 'HACCP']
            }
        };

        /* ══ BRAND DATA ══ */
        const BRANDS = {
            'chillout': {
                icon: '🥣',
                img: 'ChillOut Oat Chips.png',
                name: 'ChillOut',
                type: 'Snacks & Chips',
                desc: 'Premium oven-roasted oat chips, corn fingers, fire fingers, puffs & gourmet popcorn. The first oven-roasted snack brand in Egypt — healthier without compromising on taste.',
                products: [{
                    id: 'chillout-oat',
                    em: '🥣',
                    name: 'ChillOut Oat Chips',
                    sub: '7 Flavors · 50gm · 15 Bags/Box'
                }, {
                    id: 'fire-fingers',
                    em: '🌶️',
                    name: 'Fire Fingers',
                    sub: 'Spicy Shrimp · 50gm'
                }, {
                    id: 'oat-rings',
                    em: '⭕',
                    name: 'Baked Oat Rings',
                    sub: '4 Flavors · 40-60gm'
                }, {
                    id: 'gourmet-popcorn',
                    em: '🍿',
                    name: 'Gourmet Popcorn',
                    sub: '6 Flavors · 80-90gm'
                }, ]
            },
            'lightpop': {
                icon: '🍭',
                img: 'lightpop.png',
                name: 'Light Pop',
                type: 'Lollipops & Candy',
                desc: 'Fruits lollipops, premium boxes, bon bons, toffee & eclair in multiple packaging formats. The most versatile confectionery brand in the EgyGulf portfolio.',
                products: [{
                    id: 'lightpop-lolly',
                    em: '🍭',
                    name: 'Fruits Lollipop',
                    sub: 'Multi-Format · 50-150 pcs'
                }, {
                    id: 'lightpop-premium',
                    em: '🟠',
                    name: 'Premium Box',
                    sub: 'Coming Soon · 40 pcs/box'
                }, {
                    id: 'lightpop-bonbon',
                    em: '🍡',
                    name: 'Bon Bon Hard Candy',
                    sub: '5 Flavors · 50-250 pcs'
                }, {
                    id: 'light-eclair',
                    em: '🟣',
                    name: 'Light Eclair',
                    sub: 'Caramel · Bag · Box · Jar'
                }, ]
            },
            'mojo': {
                icon: '😜',
                img: 'Mojo.png',
                name: 'Mojo',
                type: 'Bubble Gum Lollipops',
                desc: 'Fun bubble gum-filled lollipops in bus, car & box display formats — kids\' favourite. A strong impulse product with high repeat purchase rates.',
                products: [{
                    id: 'mojo-lolly',
                    em: '😜',
                    name: 'Mojo Lollipop',
                    sub: '6 Flavors · 40-100 pcs'
                }, ]
            },
            'honeygum': {
                icon: '🍯',
                img: 'Honey.png',
                name: 'Honey Gum',
                type: 'Chewing Gum',
                desc: 'Center-filled gum in box & jar + sugar-free Hacendado line for health-conscious consumers. One of the strongest performing SKUs in Gulf export markets.',
                products: [{
                    id: 'honey-gum',
                    em: '🍯',
                    name: 'Honey Gum',
                    sub: '7 Flavors · Box & Jar · 50-250 pcs'
                }, ]
            },
            'crazy': {
                icon: '🔥',
                img: 'Crazy Crisps- Flaming Hot Series.png',
                name: 'Crazy',
                type: 'Crisps & Corn Snacks',
                desc: 'Bold flaming hot crisps (Zegzag) and Frido corn snacks for adventurous snack lovers. 100% Natural ingredients, packed for Gulf and international export markets.',
                products: [{
                    id: 'crazy-crisps',
                    em: '🔥',
                    name: 'Crazy Crisps Flaming Hot',
                    sub: '4 Flavors · 15-30gm'
                }, {
                    id: 'bozo-puffs',
                    em: '💜',
                    name: 'Bozo Puffs',
                    sub: '5 Flavors · 80-90gm'
                }, ]
            },
            'bozo': {
                icon: '💜',
                img: 'Bozo.png',
                name: 'Bozo',
                type: 'Puffs',
                desc: 'Big-bag puffs in Mexican Salsa, BBQ & more. Family-size snacking occasions — great shelf presence.',
                products: [{
                    id: 'bozo-puffs',
                    em: '💜',
                    name: 'Bozo Puffs',
                    sub: 'Mexican Salsa · BBQ · 5 Flavors'
                }, ]
            },
            'tutti': {
                icon: '🎀',
                img: 'TuttiLolly.png',
                name: 'Tutti Lolly',
                type: 'Mini Lollipops',
                desc: 'Colorful mini & XXL lollipops with natural colors. A kids staple for impulse and gifting channels.',
                products: [{
                    id: 'tutti-lolly',
                    em: '🎀',
                    name: 'Tutti Lolly Mini & XXL',
                    sub: 'Natural Colors · 50 pcs/bag'
                }, ]
            },
        };
