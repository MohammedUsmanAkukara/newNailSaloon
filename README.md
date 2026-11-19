# Nailashes Raipur — Official Luxury Website

A production-ready, high-performance, fully responsive luxury single-page website for **Nailashes Raipur** — Raipur’s Premier Nail & Eyelash Extension Studio at Ambuja Mall.

---

## 💎 Brand & Business Information
* **Business Name:** Nailashes Raipur
* **Tagline:** Raipur’s Premier Nail & Eyelash Extension Studio
* **Location:** Shop No.63, Lower Ground, Ambuja Mall, Vidhan Sabha Rd, Raipur, Chhattisgarh 492014
* **Contact Number:** [+91 91786 92254](tel:+919178692254)
* **Operating Hours:** Monday – Sunday (10:00 AM – 9:00 PM)
* **Aesthetic:** Clean, elegant upscale luxury light theme (`#FAF8F5`), rose-gold & champagne accents (`#C58B6F`, `#D8BD8A`), deep charcoal typography (`#1C1917`), and subtle glassmorphic borders.

---

## 🚀 Technology Stack
* **Core:** React.js 18 (Vite 6)
* **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) with custom CSS theme variables
* **Animations:** Framer Motion (Parallax scroll with `useScroll` and `useTransform`, stagger children, and interactive hover scales)
* **Celebration Effects:** `canvas-confetti` for instant appointment booking feedback
* **Icons:** `lucide-react`
* **SEO:** Embedded JSON-LD `LocalBusiness` (`BeautySalon`) Schema, OpenGraph tags, GeoCoordinates (21.2778, 81.6791), and semantic HTML5

---

## 🌟 Key Features & Components

### 1. Sticky Glassmorphic Navigation (`Navbar.jsx`)
* Top announcement bar highlighting Ambuja Mall Shop 63, operating hours, and direct call link.
* Glassmorphic backdrop blur with smooth scroll triggers to all sections.
* Prominent "Book Appointment" CTA button opening the modal from anywhere.
* Fully responsive mobile hamburger drawer.

### 2. Parallax Hero Section (`Hero.jsx`)
* Verified headline: *"Elevate Your Elegance at Raipur’s Finest Nail & Lash Studio"*.
* Subheadline specifying the studio's exact location at Ambuja Mall, Vidhan Sabha Road.
* Parallax floating rose-gold and champagne abstract orbs that shift subtly on scroll.
* Dual CTAs: Direct reservation scroll and 1-tap WhatsApp chat with pre-filled inquiry.
* Trust proof points: 4.9★ rating badge, 100% Hospital-Grade Sterile tools, and Ambuja Mall valet parking indicator.

### 3. Featured Nail & Lash Horizontal Scroll (`FeaturedScroll.jsx`)
* Smooth horizontal card slider showcasing top trending styles:
  * Glazed Donut Chrome
  * French Ombre Sculpted Gel
  * Cat-Eye Velvet Magnetic
  * Wispy Russian Volume Lashes
  * Royal Bridal Gold Filigree
  * Abstract Pastel Swirls
  * Classic Wet-Look Hybrid Lashes
* Card hover zoom, luminous shadows, and tags.

### 4. Categorized Services Grid (`ServicesGrid.jsx`)
* Interactive tabs: **All Treatments**, **Nail Services**, **Eyelash Services**, and **Bridal & Packages**.
* Detailed official services:
  * *Nail Services:* Classic & Spa Manicure, Acrylic Nails, Gel Nail Extensions, Nail Art & Nail Design, Nail Refill & Removal, Callus Removal & Pedicure.
  * *Eyelash Services:* Classic Lash Extensions, Volume Lash Extensions (3D–6D), Keratin Lash Lift & Deep Tint.
  * *Special Packages:* Royal Bridal Nail & Lash Suite, Glow Duo (Gel Extensions + Lash Lift).
* Price tags, duration estimations, feature bullet points, and "Book This Treatment" direct selector.

### 5. Interactive Booking & Appointment Section (`BookingSection.jsx` & `BookingModal.jsx`)
* Seamless client reservation form:
  * Service selection (pre-populates automatically when clicked from service or style cards)
  * Date picker with minimum validation
  * Time slot picker (10:30 AM to 8:00 PM)
  * Full name & phone number validation
  * Custom notes / Pinterest reference link input
* Dynamic Confetti explosion and instant confirmation screen with unique reference ID (`NL-XXXXXX`).
* Auto-redirect to WhatsApp with formatted appointment summary message for real-time confirmation.

### 6. Location, Working Hours & Interactive Map (`LocationAndHours.jsx`)
* Embedded Google Maps centered directly on Ambuja Mall, Vidhan Sabha Road, Raipur.
* Shop directions card with floor guide: **Shop No.63, Lower Ground Floor**.
* 1-tap Google Maps GPS navigation link.

### 7. Why Choose Us (`WhyChooseUs.jsx`) & Testimonials (`Testimonials.jsx`)
* 4 pillars of excellence: Medical-Grade Autoclave Sterilization, Certified Masters, 500+ Curated Hues, and Boutique Ambuja Mall Lounge.
* Verified client reviews from Raipur neighborhoods (Shankar Nagar, VIP Road, Civil Lines, Pandri).

---

## 🛠️ Development & Production Commands

```bash
# Install dependencies
npm install

# Start Vite local development server
npm run dev

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📍 Local SEO Raipur Setup
The site includes JSON-LD structured data in `index.html` configured for search engine ranking in Raipur local search results:
* **Business Type:** `BeautySalon` / `NailSalon`
* **Address:** Shop No.63, Lower Ground, Ambuja Mall, Vidhan Sabha Rd, Raipur, Chhattisgarh 492014
* **Geo-Coordinates:** Lat `21.2778`, Long `81.6791`
* **Target Keywords:** *Nail salon Raipur*, *Best nail art Raipur*, *Nail extensions Ambuja Mall*, *Eyelash extensions Raipur*, *Lash lift Raipur*, *Bridal nails Raipur*.

