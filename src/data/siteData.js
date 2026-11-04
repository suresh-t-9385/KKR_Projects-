// ---------------------------------------------------------------
// Edit everything about the business in ONE place: this file.
// ---------------------------------------------------------------

export const SITE_URL = "https://www.kkrlinens.com"; // used for canonical links, sitemap & SEO

export const company = {
  name: "KKR Linens & Fabrics",
  tagline: "The Art of Hotel Linens",
  heroTitle: "BEST HOTEL LINEN SUPPLIERS IN INDIA",
  heroSubtitle: "Comfort in our Every stitches",
  phones: ["+91 9884311288", "+91 9843063754"],
  email: "sales@kkrlinens.com",
  emailAlt: "kkrlinens@gmail.com",
  address: "143 Kamarajar Street, Vengamedu, Karur - 639006, Tamil Nadu, India",
  mapQuery: "KKR linens and fabrics, Vengamedu, Karur, Tamil Nadu",
  social: {
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
  contacts: [
    { phone: "9843063754", label: "Factory & Sales" },
    { phone: "9884311288", label: "Chennai Sales" },
    { phone: "9843063674", label: "Chennai Sales" },
  ],
  hours: ["10am - 8pm (Factory)", "10am - 7pm (Office)"],
  brochures: [
    { label: "Spa Brochure", href: "/brochures/spa-brochure.pdf" },
    { label: "Linen Brochure", href: "/brochures/linen-brochure.pdf" },
  ],
};

// Three business locations. Used by the footer, the Location dropdown and the Location page.
export const locations = [
  {
    id: "factory",
    label: "Manufacturing Facility",
    lines: ["KKR linens and fabrics, No : 143", "Kamarajar street, Vengamedu,", "Karur - 639006 Tamil Nadu, India"],
    mapQuery: "KKR linens and fabrics, Kamarajar street, Vengamedu, Karur 639006",
    phone: null,
    hours: "10am - 8pm",
  },
  {
    id: "office",
    label: "Office",
    lines: ["KKR linens and fabrics, 5A Rajaji Ave,", "IIT Colony, Pallikaranai - 600100", "Chennai, Tamil Nadu, India"],
    mapQuery: "5A Rajaji Ave, IIT Colony, Pallikaranai, Chennai 600100",
    phone: null,
    hours: "10am - 7pm",
  },
  {
    id: "showroom",
    label: "Showroom",
    lines: ["2nd Cross Rd, near Aesthetica furniture,", "M G R Nagar, Chinna Mudailayarchavadi,", "Kottakuppam, Puducherry, Tamil Nadu 605104"],
    mapQuery: "2nd Cross Rd, MGR Nagar, Chinna Mudaliyarchavadi, Kottakuppam, Puducherry 605104",
    phone: "+91 9843063520",
    hours: "",
  },
];

export const whatsappNumber = "919884311288"; // country code + number, no "+"

const img = (n) => `/images/products/${n}.svg`;

// Items shown in the "Our Products" hover dropdown (image + link to a filtered product list)
export const productMenu = [
  { label: "Bed Sheets", image: img("bedsheet"), to: "/products?q=sheet" },
  { label: "Mattress", image: img("mattress"), to: "/products?q=mattress" },
  { label: "Pillows", image: img("pillow"), to: "/products?q=pillow" },
  { label: "Duvets", image: img("duvet"), to: "/products?q=duvet" },
  { label: "Towels", image: img("towel"), to: "/products?q=towel" },
  { label: "Bath Robes", image: img("robe"), to: "/products?q=robe" },
  { label: "Table Linen", image: img("table"), to: "/products?category=Table%20%26%20Restaurant" },
  { label: "Curtains", image: img("curtain"), to: "/products?q=curtain" },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Products", to: "/products", menu: "products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
  { label: "Location", to: "/location", menu: "location" },
];

export const categories = [
  "All",
  "Bed Linen",
  "Bath Linen",
  "Bedding",
  "Table & Restaurant",
  "Curtains & Furnishing",
];

// color = placeholder gradient shown until you add real photos.
// To use real photos: put files in /public/images and set image: "/images/xyz.jpg"
export const products = [
  { id: 1, image: img("bedsheet"), name: "Cotton Bed Sheets", category: "Bed Linen", desc: "Premium 200-300 thread count percale and satin bed sheets for hotels and resorts.", color: ["#e8eef7", "#c9d7ee"] },
  { id: 2, image: img("duvet"), name: "Duvet Covers", category: "Bed Linen", desc: "Soft, wrinkle-resistant duvet covers in plain white and stripe weaves.", color: ["#f4efe6", "#e3d8c3"] },
  { id: 3, image: img("pillow"), name: "Pillow Covers & Cases", category: "Bed Linen", desc: "Envelope-style and flange pillow covers made to match your bed sheets.", color: ["#eef3f0", "#cfe0d6"] },
  { id: 4, image: img("towel"), name: "Bath Towels", category: "Bath Linen", desc: "Highly absorbent 100% cotton terry towels in 400-600 GSM.", color: ["#f7ecec", "#ebcfcf"] },
  { id: 5, image: img("towel"), name: "Hand & Face Towels", category: "Bath Linen", desc: "Everyday hand and face towels with durable dobby borders.", color: ["#eef0f8", "#cdd3ee"] },
  { id: 6, image: img("towel"), name: "Bath Mats", category: "Bath Linen", desc: "Anti-skid, quick-dry bath mats for hotel bathrooms.", color: ["#f3f1e7", "#ddd8b8"] },
  { id: 7, image: img("robe"), name: "Bath Robes", category: "Bath Linen", desc: "Waffle and terry bath robes, with optional embroidered logo.", color: ["#f1ecf6", "#d9cbea"] },
  { id: 8, image: img("duvet"), name: "Duvets & Comforters", category: "Bedding", desc: "Microfiber and down-alternative duvets for year-round comfort.", color: ["#eaf1f6", "#c5d9e7"] },
  { id: 9, image: img("pillow"), name: "Pillows", category: "Bedding", desc: "Hollow-fibre and microfiber pillows that keep their shape.", color: ["#f6f1ea", "#e6d6c1"] },
  { id: 10, image: img("mattress"), name: "Mattress Protectors", category: "Bedding", desc: "Waterproof, breathable protectors that extend mattress life.", color: ["#edf4ee", "#c9e0cc"] },
  { id: 11, image: img("table"), name: "Table Cloths & Napkins", category: "Table & Restaurant", desc: "Stain-resistant table linen for banquets and restaurants.", color: ["#f8efe3", "#ecd3ae"] },
  { id: 12, image: img("table"), name: "Chef Uniforms & Aprons", category: "Table & Restaurant", desc: "Durable kitchen and service uniforms, aprons and caps.", color: ["#eeeeee", "#cfcfcf"] },
  { id: 13, image: img("curtain"), name: "Curtains & Drapes", category: "Curtains & Furnishing", desc: "Blackout and sheer curtains tailored for guest rooms.", color: ["#ece9f4", "#cfc7e6"] },
  { id: 15, image: img("mattress"), name: "Hotel Mattresses", category: "Bedding", desc: "Medium-firm bonded foam and pocket-spring mattresses built for daily hotel use.", color: ["#f4efe6", "#e3d8c3"] },
  { id: 14, image: img("pillow"), name: "Bed Runners & Cushions", category: "Curtains & Furnishing", desc: "Decorative bed runners and cushion covers to finish the room.", color: ["#f4e9ee", "#e5c4d1"] },
];

export const features = [
  { icon: "🏨", title: "Hotel-Grade Quality", text: "Fabrics tested for repeated industrial laundering without losing softness or colour." },
  { icon: "🚚", title: "Bulk Supply, On Time", text: "Reliable dispatch for hotels, resorts, hospitals and corporate guest houses across India." },
  { icon: "🧵", title: "Custom Sizes & Branding", text: "Made-to-measure sizes, custom colours and logo embroidery on request." },
  { icon: "💰", title: "Wholesale Pricing", text: "Direct-from-manufacturer rates with transparent bulk discounts." },
];

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Happy Clients" },
  { value: "15+", label: "Product Lines" },
  { value: "100%", label: "Quality Checked" },
];

export const clients = ["Hotels", "Resorts", "Hospitals", "Corporate Offices", "Restaurants", "Guest Houses"];

export const testimonials = [
  { name: "Procurement Manager", org: "3-Star Hotel, Chennai", text: "Consistent quality and on-time delivery. Their towels survive our laundry cycles far longer than our earlier supplier's." },
  { name: "Housekeeping Head", org: "Resort, Tamil Nadu", text: "The bed linen feels premium and the team handled our custom size requirement without any fuss." },
  { name: "Admin Officer", org: "Multi-speciality Hospital", text: "Good pricing for bulk orders and quick support whenever we need a re-order." },
];

export const blogPosts = [
  { id: 1, title: "How to Choose the Right Thread Count for Hotel Bed Sheets", date: "12 Sep 2026", tag: "Buying Guide", excerpt: "Higher isn't always better. Learn which thread count balances softness, durability and laundry cost for your property." },
  { id: 2, title: "Cotton vs Poly-Cotton: Which Linen Lasts Longer in Hotels?", date: "28 Aug 2026", tag: "Fabric Guide", excerpt: "We compare wash life, feel and price so you can pick the right blend for each room category." },
  { id: 3, title: "5 Ways to Extend the Life of Your Hotel Towels", date: "10 Aug 2026", tag: "Care Tips", excerpt: "Simple laundry and storage habits that cut replacement costs by a surprising margin." },
  { id: 4, title: "Standard Bed Sizes Used in Indian Hotels", date: "02 Jul 2026", tag: "Reference", excerpt: "A quick reference of single, double, queen and king dimensions to order sheets and duvet covers correctly." },
  { id: 5, title: "Why GSM Matters When Buying Bath Towels in Bulk", date: "18 Jun 2026", tag: "Buying Guide", excerpt: "Understand GSM ratings and pick towels that feel luxurious yet dry quickly." },
  { id: 6, title: "Setting Up a Linen Par Stock for Your Hotel", date: "05 May 2026", tag: "Operations", excerpt: "How many sets of linen you actually need per room to keep housekeeping running smoothly." },
];

export const galleryItems = [
  { id: 1, image: img("bedsheet"), title: "Deluxe Room Setup", color: ["#dfe8f5", "#b9cbe8"] },
  { id: 2, image: img("towel"), title: "Premium Towel Stack", color: ["#f7ecec", "#e5c2c2"] },
  { id: 3, image: img("pillow"), title: "Duvet & Pillows", color: ["#f4efe6", "#dcccae"] },
  { id: 4, image: img("duvet"), title: "Resort Suite", color: ["#e7f1ea", "#bcd8c3"] },
  { id: 5, image: img("robe"), title: "Spa Linen", color: ["#ece9f4", "#cbc2e3"] },
  { id: 6, image: img("table"), title: "Banquet Table Linen", color: ["#f8efe3", "#e8caa0"] },
  { id: 7, image: img("robe"), title: "Bath Robes", color: ["#eaf1f6", "#bcd3e3"] },
  { id: 8, image: img("curtain"), title: "Curtain Collection", color: ["#f4e9ee", "#e2b9ca"] },
  { id: 9, image: img("mattress"), title: "Warehouse & Stock", color: ["#eeeeee", "#c9c9c9"] },
];
