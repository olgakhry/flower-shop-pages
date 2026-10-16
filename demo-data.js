/* Bloom & Stem — fictional demo data.
   This is a demo shop for testing AI support tooling; no real orders, payments or inventory exist. */

// Catalog used by shop.html
const CATALOG = [
  { id: "bs-101", name: "The Morning Market", price: 48, desc: "Loose, garden-style arrangement in whatever is freshest at the flower market today.", swatch: 1 },
  { id: "bs-102", name: "Blush Peony Classic", price: 72, desc: "Peonies, garden roses and ranunculus in soft pinks. A staff favourite from April to June.", swatch: 2 },
  { id: "bs-103", name: "The Greenhouse", price: 55, desc: "All-green textures: ferns, eucalyptus, hellebores and a single statement bloom.", swatch: 3 },
  { id: "bs-104", name: "Lavender Letter", price: 42, desc: "Lavender, lisianthus and wax flower in cool violets. Calm, and gently scented.", swatch: 4 },
  { id: "bs-105", name: "Golden Hour", price: 64, desc: "Sunflowers, craspedia and wheat — warm ambers that last well past the week.", swatch: 5 },
  { id: "bs-106", name: "First Frost", price: 58, desc: "White anemones, delphinium and dusty blue thistle. Our winter regular.", swatch: 6 }
];

// Pre-seeded fictional orders so order tracking always has something to find.
const DEMO_ORDERS = [
  {
    number: "BS-10234",
    email: "jamie@example.com",
    placed: "2026-10-12",
    item: "Blush Peony Classic",
    qty: 1,
    total: 76.90,
    status: "in-transit",
    carrier: "Brookfield Courier",
    tracking: "BC-4471002",
    eta: "2026-10-17",
    address: "12 Alder Street, Brookfield"
  },
  {
    number: "BS-10198",
    email: "sam.rivera@example.com",
    placed: "2026-10-08",
    item: "The Morning Market",
    qty: 2,
    total: 103.80,
    status: "delivered",
    carrier: "Brookfield Courier",
    tracking: "BC-4469811",
    eta: "2026-10-10",
    address: "8 Harrow Lane, Brookfield"
  },
  {
    number: "BS-10245",
    email: "priya@example.com",
    placed: "2026-10-15",
    item: "Golden Hour",
    qty: 1,
    total: 68.90,
    status: "processing",
    carrier: "Brookfield Courier",
    tracking: null,
    eta: "2026-10-19",
    address: "45 Millbrook Road, Brookfield"
  }
];

// Delivery flat rate and shop facts (kept in one place so pages stay consistent)
const SHOP = {
  deliveryFee: 4.95,
  freeDeliveryOver: 80,
  hours: [
    { days: "Monday – Friday", time: "9am – 6pm" },
    { days: "Saturday", time: "9am – 5pm" },
    { days: "Sunday", time: "10am – 3pm" }
  ],
  phone: "(555) 014-2873",
  email: "hello@bloomandstem.example"
};
