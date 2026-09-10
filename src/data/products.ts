export type Product = {
  id: number
  name: string
  category: string
  pet: 'Dog' | 'Cat' | 'Bird' | 'Small Pet'
  price: number
  originalPrice: number
  rating: number
  reviews: number
  image: string
  description: string
  badge: string
  tag: string
}

export const categoryCards = [
  {
    name: 'Dogs',
    description: 'Food, toys, beds, grooming and more.',
    image:
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Cats',
    description: 'Treats, toys, scratchers, beds and accessories.',
    image:
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Birds',
    description: 'Food, cages, toys and essentials.',
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Small Pets',
    description: 'Products for rabbits, hamsters and other small companions.',
    image:
      'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=900&q=80',
  },
]

export const productData: Product[] = [
  {
    id: 1,
    name: 'Pawfect Chicken Bites',
    category: 'Food',
    pet: 'Dog',
    price: 399,
    originalPrice: 520,
    rating: 4.8,
    reviews: 231,
    image:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80',
    description: 'Crunchy, protein-rich training treats made with real chicken and gentle ingredients.',
    badge: '23% OFF',
    tag: 'Best Seller',
  },
  {
    id: 2,
    name: 'CozyCloud Pet Bed',
    category: 'Beds',
    pet: 'Dog',
    price: 1299,
    originalPrice: 1599,
    rating: 4.9,
    reviews: 184,
    image:
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=900&q=80',
    description: 'Cloud-soft orthopedic support for naps, lounging, and recovery days.',
    badge: '18% OFF',
    tag: 'Loved by pets',
  },
  {
    id: 3,
    name: 'TugBuddy Rope Toy',
    category: 'Toys',
    pet: 'Dog',
    price: 299,
    originalPrice: 430,
    rating: 4.7,
    reviews: 142,
    image:
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
    description: 'Durable braided rope toy for tug, fetch, and energetic play sessions.',
    badge: '31% OFF',
    tag: 'Playtime',
  },
  {
    id: 4,
    name: 'WhiskerJoy Cat Treats',
    category: 'Food',
    pet: 'Cat',
    price: 249,
    originalPrice: 290,
    rating: 4.8,
    reviews: 96,
    image:
      'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
    description: 'Delicate, crunchy cat treats enriched with omega oils and premium proteins.',
    badge: '15% OFF',
    tag: 'Cat favorite',
  },
  {
    id: 5,
    name: 'Everyday Comfort Collar',
    category: 'Accessories',
    pet: 'Dog',
    price: 349,
    originalPrice: 440,
    rating: 4.6,
    reviews: 110,
    image:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
    description: 'Soft, durable everyday collar with an easy-adjust fit and stylish finish.',
    badge: '20% OFF',
    tag: 'Daily essential',
  },
  {
    id: 6,
    name: 'FreshPaws Grooming Kit',
    category: 'Grooming',
    pet: 'Dog',
    price: 699,
    originalPrice: 930,
    rating: 4.9,
    reviews: 320,
    image:
      'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=900&q=80',
    description: 'A complete grooming set for brushing, cleaning, and coat care between baths.',
    badge: '25% OFF',
    tag: 'Pet care',
  },
  {
    id: 7,
    name: 'FeatherNest Bird Perch',
    category: 'Accessories',
    pet: 'Bird',
    price: 420,
    originalPrice: 560,
    rating: 4.7,
    reviews: 67,
    image:
      'https://images.unsplash.com/photo-1504006833117-8886a355efbf?auto=format&fit=crop&w=900&q=80',
    description: 'Natural wood perch with a comfortable grip for active, healthy birds.',
    badge: '25% OFF',
    tag: 'Bird Care',
  },
  {
    id: 8,
    name: 'Velvet Cozy Cat Bed',
    category: 'Beds',
    pet: 'Cat',
    price: 1199,
    originalPrice: 1490,
    rating: 4.9,
    reviews: 143,
    image:
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
    description: 'Soft, plush lounge bed designed to help your cat sink into a deep nap.',
    badge: '19% OFF',
    tag: 'Hushed comfort',
  },
  {
    id: 9,
    name: 'HopperBowl Ceramic Feeder',
    category: 'Accessories',
    pet: 'Small Pet',
    price: 650,
    originalPrice: 790,
    rating: 4.6,
    reviews: 78,
    image:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=80',
    description: 'Stable, easy-to-clean ceramic feeder for rabbits and small pet companions.',
    badge: '18% OFF',
    tag: 'Small pet must-have',
  },
  {
    id: 10,
    name: 'Sunbeam Bird Seed Mix',
    category: 'Food',
    pet: 'Bird',
    price: 390,
    originalPrice: 500,
    rating: 4.8,
    reviews: 120,
    image:
      'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=900&q=80',
    description: 'Balanced, nutrient-rich seed blend for healthy feathered friends.',
    badge: '22% OFF',
    tag: 'Nutrition',
  },
  {
    id: 11,
    name: 'Purrfect Scratch Tower',
    category: 'Toys',
    pet: 'Cat',
    price: 1499,
    originalPrice: 1990,
    rating: 4.9,
    reviews: 243,
    image:
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=900&q=80',
    description: 'A multi-level cat engagement toy to keep paws busy and paws happy.',
    badge: '24% OFF',
    tag: 'Play & stretch',
  },
  {
    id: 12,
    name: 'BunnyBloom Hay Basket',
    category: 'Accessories',
    pet: 'Small Pet',
    price: 520,
    originalPrice: 680,
    rating: 4.5,
    reviews: 61,
    image:
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
    description: 'Soft storage basket for hay, treats, and everyday bunny essentials.',
    badge: '23% OFF',
    tag: 'Bunny essentials',
  },
]

export const stackImages = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80',
]
