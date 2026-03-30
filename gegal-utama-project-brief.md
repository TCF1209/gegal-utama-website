# Gegal Utama Sdn Bhd - Website Project Brief

## 🎯 PROJECT OVERVIEW

Build a modern, mobile-friendly website for **Gegal Utama Sdn Bhd**, a licensed money lending company in Ipoh, Perak. The website should be clean, bright, and welcoming with a partnership-focused approach.

**Target Audience:** Malaysian customers seeking personal loans (primarily Malay-speaking)  
**Primary Device:** Mobile phones (majority), but must work excellently on laptops too  
**Languages:** Bahasa Malaysia (default) + English toggle

---

## 🏢 COMPANY INFORMATION

**Company Name:** GEGAL UTAMA SDN BHD  
**Business Type:** Licensed Money Lending Company  

**Contact Details:**
- **WhatsApp:** 011-53164241
- **Email:** gegalutama@gmail.com
- **Address:** 162A, Jalan Tasek Timur, Taman Tasek Indra, 31400 Ipoh, Perak
- **Facebook:** https://www.facebook.com/share/14YRfB9VnEf/

**Operating Hours:**
- Monday - Friday: 9:00 AM – 5:30 PM
- Saturday: 9:00 AM – 2:30 PM  
- Sunday: CLOSED

**Service Focus:** Personal loans for individuals

---

## 🎨 DESIGN DIRECTION

### Brand Identity (from logo)

**Logo Elements:**
- Shield (protection, security, trust)
- Handshake (partnership, cooperation, commitment)
- Blue + Orange color scheme
- White outline (clarity, cleanliness)

**Theme: "Trust & Partnership"**

Position the company as a trusted financial partner, not just a lender. Emphasize:
- Partnership and cooperation
- Protection and security
- Warmth and approachability
- Trust and reliability

### Color Palette (Extracted from Logo)

**Primary Colors:**
```
Vibrant Blue: #1E88E5 or #2196F3
- Use for: Trust indicators, headings, professional elements
- Represents: Trust, stability, professionalism

Warm Orange: #FF6F00 or #FF7043  
- Use for: CTAs, highlights, warm accents
- Represents: Warmth, energy, approachability

Red-Orange Gradient: #FF5722 to #FF6F00
- Use for: Primary CTA buttons (mimics logo text gradient)
- Represents: Action, urgency, attention
```

**Background Colors:**
```
Pure White: #FFFFFF (main background - bright, clean)
Very Light Blue: #F0F7FF (subtle section backgrounds)
Very Light Orange: #FFF3E0 (alternate section backgrounds)
```

**Text Colors:**
```
Dark Gray: #212121 (main text)
Medium Gray: #616161 (secondary text)
Light Gray: #9E9E9E (hints, labels)
```

**Accent Colors:**
```
Success/Trust: Blue
Action/CTA: Orange gradient
Warning: Keep orange-toned
```

### Design Style

**DO:**
- ✅ Clean, bright, white-dominated backgrounds
- ✅ Modern but natural (human touch, not AI-generated feel)
- ✅ Generous white space
- ✅ Blue and orange used strategically (alternating sections)
- ✅ Handshake/partnership imagery and icons
- ✅ Shield/protection visual elements
- ✅ Warm, welcoming, friendly
- ✅ Professional but approachable
- ✅ Subtle, professional animations

**DON'T:**
- ❌ Overly AI-generated aesthetic
- ❌ Dark or heavy designs
- ❌ Cluttered layouts
- ❌ Too many gradients everywhere
- ❌ Aggressive or pushy visuals
- ❌ Heavy or distracting animations

**Visual Theme:** "Bright Partnership - Your Trusted Financial Companion"

---

## 🌐 MULTI-LANGUAGE SYSTEM

### Languages
- **Bahasa Malaysia** (default)
- **English** (toggle available)

### Language Toggle
- Location: Navbar (top right)
- Format: `BM | EN`
- Active language: Orange color
- Inactive: Gray
- Click to switch instantly
- Save preference in localStorage
- No page reload

### Content Structure
All content in both BM and EN:
- Navigation items
- Section headings
- Body text
- Form labels
- Button text
- Footer content
- Error messages

---

## 📱 CRITICAL MOBILE-FIRST REQUIREMENTS

**Primary Focus: Phone Users**

**Must-Have:**
- ✅ Perfect display on phones (320px to 428px width)
- ✅ Touch-friendly buttons (minimum 48x48px)
- ✅ Easy one-handed navigation
- ✅ Fast loading on mobile data (<3 seconds)
- ✅ Readable text (minimum 16px)
- ✅ No horizontal scrolling
- ✅ Click-to-call phone numbers
- ✅ Click-to-WhatsApp functionality
- ✅ Forms optimized for mobile keyboard
- ✅ Smooth scrolling

**Also Great On Laptop:**
- ✅ Responsive up to 2000px+ width
- ✅ Looks professional on desktop
- ✅ Proper spacing and layout on large screens
- ✅ All features work on mouse+keyboard

**Test Devices:**
- iPhone (Safari)
- Android (Chrome)
- Small screens (320px)
- Tablet (768px+)
- Desktop (1024px+)

---

## 🎬 ANIMATION REQUIREMENTS

### Animation Style: Subtle & Professional

**DO Use:**
- ✅ Smooth fade-in on scroll (sections appear as you scroll down)
- ✅ Gentle slide-up animations for content
- ✅ Hover effects on buttons (slight scale, color change)
- ✅ Form input focus animations (border color, slight glow)
- ✅ Smooth transitions between states
- ✅ Loading states for form submission
- ✅ Success animations (checkmark, confirmation)
- ✅ Floating social buttons gentle pulse (very subtle)

**Animation Principles:**
- Fast and snappy (300-500ms duration)
- Enhance UX, don't distract
- Smooth easing (ease-in-out)
- Work on mobile (60fps)
- Can be disabled for accessibility

**DON'T Use:**
- ❌ Heavy, slow animations
- ❌ Distracting continuous movements
- ❌ Parallax effects (can be laggy on mobile)
- ❌ Auto-playing videos or GIFs
- ❌ Spinning elements
- ❌ Overly complex transitions

**Example Animations:**
```
Hero Section: Fade in + slight slide up (500ms)
Service Cards: Stagger fade-in as user scrolls (each 100ms apart)
Buttons: Scale 1.05 on hover (200ms)
Form Inputs: Border color blue→orange on focus (300ms)
Submit Success: Checkmark scale + fade in (400ms)
```

**Library:** Use Framer Motion (subtle, performant animations)

---

## 📋 WEBSITE SECTIONS

### 1. Hero Section

**Purpose:** Strong first impression emphasizing partnership

**Content (BM/EN):**

**Bahasa Malaysia:**
- Headline: "Partner Kewangan Anda Yang Dipercayai"
- Subheadline: "Pinjaman peribadi yang mudah, pantas dan selamat. Kami sedia membantu anda mencapai matlamat kewangan."
- CTA Primary: "Mohon Sekarang" (Orange gradient button)
- CTA Secondary: "Hubungi Kami" (Blue outline button)

**English:**
- Headline: "Your Trusted Financial Partner"
- Subheadline: "Easy, fast and secure personal loans. We're here to help you achieve your financial goals."
- CTA Primary: "Apply Now"
- CTA Secondary: "Contact Us"

**Design:**
- Clean white background
- Large, bold headline
- Trust badges: Licensed | Fast Approval | Trusted Partner
- Hero image: Handshake or partnership imagery (subtle, professional)
- Gradient CTAs with hover animation

**Animation:**
- Headline: Fade in + slide up
- Badges: Stagger fade in
- Buttons: Hover scale effect

---

### 2. Trust Bar

**Purpose:** Immediate credibility

**Content (4 trust indicators in row):**

**BM:**
```
🛡️ Berlesen & Dipercayai
   Syarikat pinjaman berlesen

⚡ Kelulusan Pantas  
   Kelulusan dalam 24 jam

🤝 Perkhidmatan Mesra
   Kami sedia membantu anda

✓ Proses Mudah
   Permohonan ringkas & cepat
```

**EN:**
```
🛡️ Licensed & Trusted
   Licensed lending company

⚡ Fast Approval
   Approval within 24 hours

🤝 Friendly Service
   We're here to help you

✓ Easy Process
   Simple & fast application
```

**Design:**
- Light blue background (#F0F7FF)
- Icons in blue
- Grid layout (2x2 on mobile, 4x1 on desktop)
- Each item: Icon + Title + Description

**Animation:**
- Fade in when scrolled into view
- Stagger each item (100ms apart)

---

### 3. Services Section

**Purpose:** Explain what they offer

**Heading (BM/EN):**
- BM: "Perkhidmatan Kami"
- EN: "Our Services"

**3 Service Cards:**

**Card 1: Personal Financing**
- Icon: 💰 (blue)
- BM Title: "Pembiayaan Peribadi"
- EN Title: "Personal Financing"
- BM Description: "Pinjaman peribadi untuk pelbagai keperluan dengan kadar berpatutan dan terma yang fleksibel."
- EN Description: "Personal loans for various needs with reasonable rates and flexible terms."

**Card 2: Easy Application**
- Icon: 📱 (orange)
- BM Title: "Permohonan Mudah"
- EN Title: "Easy Application"
- BM Description: "Proses permohonan yang ringkas dan pantas. Lengkapkan borang dalam 5 minit sahaja."
- EN Description: "Simple and fast application process. Complete the form in just 5 minutes."

**Card 3: Fast Approval**
- Icon: ⚡ (blue)
- BM Title: "Kelulusan Cepat"
- EN Title: "Fast Approval"
- BM Description: "Kelulusan dalam masa 24 jam. Kami proses permohonan anda dengan segera."
- EN Description: "Approval within 24 hours. We process your application promptly."

**Design:**
- White cards on light background
- 3-column grid (desktop), 1-column (mobile)
- Alternating blue/orange accents
- Hover: Slight lift + shadow
- Clean, spacious cards

**Animation:**
- Cards fade in + slide up when scrolled
- Stagger animation (each 150ms apart)
- Hover: Scale 1.03 + shadow increase

---

### 4. How to Apply (4-Step Process)

**Purpose:** Clear, confidence-building process

**Heading:**
- BM: "4 Langkah Mudah"
- EN: "4 Easy Steps"

**Steps:**

**Step 1:**
- Icon: 📝
- BM: "Isi Borang Online" / "Lengkapkan borang permohonan"
- EN: "Fill Online Form" / "Complete the application form"

**Step 2:**
- Icon: 📤
- BM: "Hantar Permohonan" / "Submit aplikasi anda"
- EN: "Submit Application" / "Submit your application"

**Step 3:**
- Icon: ✅
- BM: "Terima Kelulusan" / "Kelulusan dalam 24 jam"
- EN: "Get Approval" / "Approval within 24 hours"

**Step 4:**
- Icon: 💸
- BM: "Terima Wang" / "Dana akan dikreditkan"
- EN: "Receive Money" / "Funds will be credited"

**Design:**
- Horizontal timeline (desktop), vertical (mobile)
- Numbers in orange circles
- Blue connecting line between steps
- Icons in blue
- Clean, modern layout

**Animation:**
- Timeline animates drawing from left to right
- Steps appear one by one
- Numbers scale in

---

### 5. Application Form ⭐⭐⭐ MOST IMPORTANT

**Purpose:** Main conversion point - make it EASY

**Heading:**
- BM: "Mohon Sekarang"
- EN: "Apply Now"

**Subheading:**
- BM: "Isi borang di bawah dan kami akan hubungi anda dalam masa 24 jam"
- EN: "Fill the form below and we'll contact you within 24 hours"

**Form Fields (Simple - 5 fields only):**

**Field 1: Nama Penuh / Full Name**
```
Type: Text input
Required: Yes
Placeholder (BM): "Masukkan nama penuh anda"
Placeholder (EN): "Enter your full name"
Validation: Minimum 3 characters
```

**Field 2: No. Telefon / Phone Number**
```
Type: Text input
Required: Yes
Placeholder (BM): "012-345 6789"
Placeholder (EN): "012-345 6789"
Validation: Malaysian phone format
```

**Field 3: Pekerjaan / Employment Type**
```
Type: Dropdown select
Required: Yes
Placeholder (BM): "Pilih pekerjaan"
Placeholder (EN): "Select employment type"

Options (BM):
- Pekerja Kerajaan
- Pekerja Swasta
- Pencen
- SOCSO (PERKESO)
- Penerima Zakat
- JKM (Kebajikan)

Options (EN):
- Government Employee
- Private Employee
- Pensioner
- SOCSO (PERKESO)
- Zakat Recipient
- JKM (Welfare)
```

**Field 4: Negeri / State**
```
Type: Dropdown select
Required: Yes
Placeholder (BM): "Pilih negeri"
Placeholder (EN): "Select state"

Options (All 16 states + territories):
- Selangor
- Kuala Lumpur
- Putrajaya
- Negeri Sembilan
- Melaka
- Johor
- Perak
- Kedah
- Pulau Pinang
- Kelantan
- Terengganu
- Pahang
- Perlis
- Sabah
- Sarawak
- Labuan
```

**Field 5: Jumlah Pinjaman / Loan Amount**
```
Type: Dropdown select
Required: Yes
Placeholder (BM): "Pilih jumlah"
Placeholder (EN): "Select amount"

Options (RM 1,000 to RM 30,000 in RM 1,000 increments):
- RM 1,000
- RM 2,000
- RM 3,000
- ... (continue to RM 30,000)
```

**Submit Button:**
- BM: "Hantar Permohonan"
- EN: "Submit Application"
- Style: Large, prominent, orange gradient
- Loading state: Spinner + "Menghantar..." / "Submitting..."
- Disabled state when submitting

**Form Behavior:**
- Real-time validation
- Error messages in BM/EN
- Clear error indicators (red border, icon, message)
- Success state with animation
- Smooth transitions

**Form Submission:**
- Send email to: gegalutama@gmail.com
- Include all form data + timestamp
- Show success modal with WhatsApp option

**Success Modal:**
```
BM:
Title: "Permohonan Berjaya Dihantar! ✅"
Message: "Terima kasih! Kami telah terima permohonan anda dan akan hubungi anda dalam masa 24 jam."
Button 1: "Hantar via WhatsApp Juga" (green, opens WhatsApp)
Button 2: "Tutup" (gray)

EN:
Title: "Application Successfully Submitted! ✅"
Message: "Thank you! We have received your application and will contact you within 24 hours."
Button 1: "Send via WhatsApp Too" (green, opens WhatsApp)
Button 2: "Close" (gray)
```

**WhatsApp Pre-filled Message:**
```
BM:
"Saya ingin memohon pinjaman peribadi dengan Gegal Utama.

Nama: [Name]
Telefon: [Phone]
Pekerjaan: [Employment]
Negeri: [State]
Jumlah: [Amount]

Sila hubungi saya untuk maklumat lanjut. Terima kasih!"

EN:
"I would like to apply for a personal loan with Gegal Utama.

Name: [Name]
Phone: [Phone]
Employment: [Employment]
State: [State]
Amount: [Amount]

Please contact me for more information. Thank you!"
```

**Design:**
- Clean white card on light background
- Large, clear input fields
- Blue focus state (border glow)
- Orange submit button (gradient)
- Professional, spacious layout
- Mobile-optimized inputs

**Animation:**
- Form fade in when scrolled
- Focus: Border color blue + slight glow
- Submit: Button ripple effect
- Success: Checkmark scale + fade in
- Error shake: Input shakes if invalid

---

### 6. Requirements Section

**Purpose:** Set clear expectations

**Heading:**
- BM: "Syarat Permohonan"
- EN: "Application Requirements"

**Two Sub-sections:**

**A) Kelayakan / Eligibility**

**BM:**
```
✓ Warganegara Malaysia
✓ Berumur 18 hingga 55 tahun
✓ Pendapatan bulanan minimum RM 1,500
✓ Pekerja Kerajaan atau Swasta
✓ Tidak blacklist dalam CTOS/CCRIS
```

**EN:**
```
✓ Malaysian Citizen
✓ Age 18 to 55 years old
✓ Minimum monthly income RM 1,500
✓ Government or Private Employee
✓ Not blacklisted in CTOS/CCRIS
```

**B) Dokumen Diperlukan / Required Documents**

**BM:**
```
📄 Kad Pengenalan Malaysia (MyKad)
📄 Slip gaji 3 bulan terkini
📄 Penyata bank 3 bulan terkini
📄 Bil utiliti terkini
```

**EN:**
```
📄 Malaysian Identity Card (MyKad)
📄 Latest 3 months payslips
📄 Latest 3 months bank statements
📄 Latest utility bill
```

**NOT ACCEPTED Section:**

**BM:**
```
✗ Tunai Gaji / Cash Advance
✗ Perniagaan
✗ Pemberi Pinjaman Senarai Hitam
```

**EN:**
```
✗ Cash Advance
✗ Business Loans
✗ Blacklisted Lenders
```

**Design:**
- Two-column layout (desktop), stacked (mobile)
- Eligibility: Light blue background, blue checkmarks
- Documents: White background, blue icons
- Not Accepted: Light orange background, orange X marks
- Clean, scannable format

**Animation:**
- Sections fade in when scrolled
- Checkmarks/icons appear with slight scale

---

### 7. Why Choose Us

**Purpose:** Differentiation and trust-building

**Heading:**
- BM: "Kenapa Pilih Gegal Utama?"
- EN: "Why Choose Gegal Utama?"

**6 Reasons (3x2 grid):**

**1. Berlesen & Dipercayai / Licensed & Trusted**
- Icon: 🛡️ (blue)
- BM: "Syarikat pinjaman wang berlesen yang sah dan dipercayai"
- EN: "Legitimate and trusted licensed money lending company"

**2. Kelulusan Pantas / Fast Approval**
- Icon: ⚡ (orange)
- BM: "Kelulusan dalam masa 24 jam, proses yang cepat dan efisyen"
- EN: "Approval within 24 hours, fast and efficient process"

**3. Kadar Berpatutan / Reasonable Rates**
- Icon: 💰 (blue)
- BM: "Kadar faedah yang kompetitif dan telus, tiada caj tersembunyi"
- EN: "Competitive and transparent interest rates, no hidden charges"

**4. Perkhidmatan Mesra / Friendly Service**
- Icon: 🤝 (orange)
- BM: "Pasukan yang mesra dan sedia membantu anda"
- EN: "Friendly team ready to help you"

**5. Proses Mudah / Easy Process**
- Icon: ✓ (blue)
- BM: "Permohonan yang ringkas dan mudah difahami"
- EN: "Simple and easy-to-understand application"

**6. Partner Anda / Your Partner**
- Icon: 💼 (orange)
- BM: "Kami bukan sekadar pemberi pinjaman - kami partner kewangan anda"
- EN: "We're not just a lender - we're your financial partner"

**Design:**
- 3x2 grid (desktop), 2x3 (tablet), 1 column (mobile)
- White cards with subtle shadow
- Alternating blue/orange icon circles
- Hover: Slight lift + shadow increase
- Clean, professional

**Animation:**
- Cards stagger fade in + slide up
- Each 100ms apart
- Hover: Scale 1.05 + shadow

---

### 8. FAQ Section

**Purpose:** Address common questions

**Heading:**
- BM: "Soalan Lazim"
- EN: "Frequently Asked Questions"

**Format:** Accordion (click to expand)

**Questions (BM/EN):**

**Q1:**
- BM: "Berapa lama proses kelulusan?"
- EN: "How long does the approval process take?"
- Answer BM: "Kelulusan biasanya mengambil masa 24 jam. Setelah dokumen lengkap, kami akan maklumkan keputusan kepada anda secepat mungkin."
- Answer EN: "Approval usually takes 24 hours. Once documents are complete, we will notify you of the decision as soon as possible."

**Q2:**
- BM: "Apa dokumen yang diperlukan?"
- EN: "What documents are required?"
- Answer BM: "MyKad, slip gaji 3 bulan, penyata bank 3 bulan, dan bil utiliti terkini."
- Answer EN: "MyKad, 3 months payslips, 3 months bank statements, and latest utility bill."

**Q3:**
- BM: "Berapa jumlah pinjaman minimum dan maksimum?"
- EN: "What is the minimum and maximum loan amount?"
- Answer BM: "Jumlah minimum RM 1,000 dan maksimum RM 30,000."
- Answer EN: "Minimum amount RM 1,000 and maximum RM 30,000."

**Q4:**
- BM: "Berapa kadar faedah?"
- EN: "What is the interest rate?"
- Answer BM: "Kadar faedah bergantung kepada jumlah pinjaman dan tempoh bayaran. Hubungi kami untuk quotation penuh."
- Answer EN: "Interest rate depends on loan amount and repayment period. Contact us for full quotation."

**Q5:**
- BM: "Bolehkah saya bayar awal?"
- EN: "Can I make early payment?"
- Answer BM: "Ya, anda boleh membuat bayaran awal tanpa penalti."
- Answer EN: "Yes, you can make early payments without penalty."

**Q6:**
- BM: "Adakah saya layak jika saya blacklist?"
- EN: "Am I eligible if I'm blacklisted?"
- Answer BM: "Maaf, kami tidak dapat meluluskan permohonan jika anda berada dalam senarai hitam CTOS atau CCRIS."
- Answer EN: "Sorry, we cannot approve applications if you are blacklisted in CTOS or CCRIS."

**Design:**
- Accordion style (click to expand/collapse)
- Question: Bold, dark gray, blue arrow icon
- Answer: Regular weight, medium gray, indented
- Active question: Orange arrow icon
- Light background
- Smooth expand/collapse animation

**Animation:**
- Questions fade in when scrolled
- Click: Smooth expand (300ms ease)
- Arrow rotates 180° when expanded
- Answer slides down + fades in

---

### 9. Contact Section

**Purpose:** Multiple ways to reach the company

**Heading:**
- BM: "Hubungi Kami"
- EN: "Contact Us"

**Subheading:**
- BM: "Kami sedia membantu anda. Hubungi kami hari ini!"
- EN: "We're here to help you. Contact us today!"

**Contact Methods:**

**WhatsApp (Most Prominent):**
```
Icon: WhatsApp (green)
BM: "WhatsApp Kami"
EN: "WhatsApp Us"
Number: 011-53164241
Button: Large green button "WhatsApp Sekarang" / "WhatsApp Now"
Link: https://wa.me/60115316424?text=[pre-filled message]
```

**Phone:**
```
Icon: Phone (blue)
BM: "Hubungi Kami"
EN: "Call Us"
Number: 011-53164241 (clickable tel: link)
Hours: "Isnin-Jumaat: 9:00 pagi - 5:30 petang"
```

**Email:**
```
Icon: Email (blue)
BM: "Emel Kami"
EN: "Email Us"
Email: gegalutama@gmail.com (clickable mailto: link)
Response: "Balasan dalam 24 jam" / "Response within 24 hours"
```

**Facebook:**
```
Icon: Facebook (blue)
BM: "Ikuti Kami di Facebook"
EN: "Follow Us on Facebook"
Link: https://www.facebook.com/share/14YRfB9VnEf/
Button: "Lawati Facebook" / "Visit Facebook"
```

**Walk-In Address:**
```
Icon: Location (orange)
BM: "Lawati Pejabat Kami"
EN: "Visit Our Office"
Address:
162A, Jalan Tasek Timur
Taman Tasek Indra
31400 Ipoh, Perak

Operating Hours:
Isnin - Jumaat: 9:00 AM - 5:30 PM
Sabtu: 9:00 AM - 2:30 PM
Ahad: TUTUP / CLOSED
```

**Google Maps Embed:**
- Embedded map showing office location in Ipoh
- "Dapatkan Arah" / "Get Directions" button (opens Google Maps)

**Quick Contact Form (Backup):**
```
Fields:
- Nama / Name
- Telefon / Phone  
- Email
- Mesej / Message

Button: "Hantar Mesej" / "Send Message" (orange gradient)
```

**Design:**
- Split layout (contact cards on left, map + form on right)
- Mobile: Stacked vertically
- WhatsApp button most prominent (larger, green)
- Contact cards with icons
- Light blue background section
- Clean, organized

**Animation:**
- Contact cards slide in from left
- Map + form slide in from right
- Stagger animations
- Hover effects on buttons

---

### 10. Footer

**Purpose:** Final contact info and legal

**Layout:** 4 columns (desktop), stacked (mobile)

**Column 1: Company Info**
```
Logo (Gegal Utama)
GEGAL UTAMA SDN BHD
Syarikat Pinjaman Wang Berlesen
Licensed Money Lending Company

Tagline (BM): "Partner Kewangan Anda Yang Dipercayai"
Tagline (EN): "Your Trusted Financial Partner"
```

**Column 2: Quick Links**
```
BM:
• Perkhidmatan
• Syarat Kelayakan  
• Soalan Lazim
• Hubungi Kami

EN:
• Services
• Requirements
• FAQ
• Contact Us
```

**Column 3: Contact Info**
```
📧 gegalutama@gmail.com
📱 011-53164241 (WhatsApp)
📍 162A, Jalan Tasek Timur, 31400 Ipoh, Perak

Waktu Operasi / Operating Hours:
Isnin-Jumaat / Mon-Fri: 9:00 AM - 5:30 PM
Sabtu / Sat: 9:00 AM - 2:30 PM
Ahad / Sun: Tutup / Closed
```

**Column 4: Connect**
```
Facebook:
[Facebook Icon] Ikuti Kami / Follow Us

Trust Indicators:
🛡️ Berlesen / Licensed
✓ Dipercayai / Trusted
⚡ Pantas / Fast
```

**Bottom Bar:**
```
Left side:
© 2025 Gegal Utama Sdn Bhd. Hak Cipta Terpelihara. | All Rights Reserved.

Center:
• Terma & Syarat / Terms & Conditions
• Dasar Privasi / Privacy Policy
• Penafian / Disclaimer

Right side:
Amaran: Pemberi pinjaman wang berlesen tidak dibenarkan mengenakan caj bayaran pendahuluan.
Warning: Licensed money lenders are not allowed to charge advance fees.
```

**Design:**
- White background with blue/orange accents
- Clean, organized columns
- Blue links (hover: orange)
- Mobile: Single column, stacked
- Orange top border (2px)

---

## 🔧 TECHNICAL REQUIREMENTS


### Tech Stack
```
Framework: Next.js 15 (App Router)
Language: TypeScript
Styling: Tailwind CSS

Forms: React Hook Form + Zod validation
Email: EmailJS
Icons: Lucide React
Animations: Framer Motion
Multi-language: React Context + localStorage
```

### Must-Have Features

**Mobile-First:**
- Design for phone FIRST (320px to 428px)
- Then scale up for tablet and desktop
- Touch-friendly interface (48x48px minimum buttons)
- Fast loading on mobile data (<3 seconds)
- Optimized images (WebP format)
- Lazy loading for images
- No horizontal scrolling at any width

**Performance:**
- Page load: <3 seconds
- Time to Interactive: <5 seconds
- Lighthouse score: >90 (mobile and desktop)
- Core Web Vitals: All green

**Functionality:**
- Click-to-call phone numbers
- Click-to-WhatsApp functionality
- Click-to-email
- Form validation (real-time)
- Error handling (graceful)
- Success states (with animations)
- Multi-language toggle (instant switch)
- LocalStorage for language preference

**SEO:**
- Meta tags optimized
- Open Graph tags
- Structured data (LocalBusiness JSON-LD)
- Sitemap.xml
- Robots.txt
- Alt tags on all images
- Semantic HTML5

**Accessibility:**
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader friendly
- Focus indicators
- ARIA labels where needed

---

## 🎨 FLOATING SOCIAL BUTTONS (Bottom Right) ⭐

**Position:** Fixed bottom right corner

**Two Buttons Stacked Vertically:**

**WhatsApp Button (Top):**
```
Icon: WhatsApp logo (white)
Background: Green #25D366
Size: 56x56px (mobile), 64x64px (desktop)
Border-radius: 50% (circle)
Shadow: 0 4px 12px rgba(37, 211, 102, 0.4)
Hover: Scale 1.1 + stronger shadow
Animation: Gentle pulse (optional, very subtle)

Link: https://wa.me/60115316424?text=Saya berminat untuk tahu lebih lanjut tentang pinjaman peribadi.

Tooltip (on hover):
BM: "WhatsApp Kami"
EN: "WhatsApp Us"
```

**Facebook Button (Bottom, Below WhatsApp):**
```
Icon: Facebook logo (white)
Background: Blue #1877F2
Size: 56x56px (mobile), 64x64px (desktop)
Border-radius: 50% (circle)
Shadow: 0 4px 12px rgba(24, 119, 242, 0.4)
Hover: Scale 1.1 + stronger shadow

Link: https://www.facebook.com/share/14YRfB9VnEf/

Tooltip (on hover):
BM: "Ikuti Kami di Facebook"
EN: "Follow Us on Facebook"
```

**Layout:**
```
[WhatsApp - Green circle]
       ↑ 16px gap
[Facebook - Blue circle]
```

**Position:**
- Right: 20px from screen edge
- Bottom: 20px from screen edge
- Stack vertically
- Always visible (fixed position)
- Z-index: 1000 (above everything)

**Mobile Considerations:**
- Slightly smaller (56x56px)
- Still easily tappable
- Doesn't block important content
- Positioned to avoid clashing with mobile browser UI

**Animation:**
- Fade in on page load (500ms delay)
- Subtle pulse every 3 seconds (optional)
- Smooth hover transitions
- Click: Ripple effect

---

## 📧 EMAIL CONFIGURATION

### EmailJS Setup

**Email to Company (gegalutama@gmail.com):**

**Subject:**
```
BM: Permohonan Pinjaman Baru - [Name] [Gegal Utama]
EN: New Loan Application - [Name] [Gegal Utama]
```

**Email Template (HTML):**
```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Arial', sans-serif; color: #212121; }
    .container { max-width: 600px; margin: 0 auto; }
    .header { 
      background: linear-gradient(135deg, #1E88E5 0%, #FF6F00 100%); 
      color: white; 
      padding: 30px; 
      text-align: center;
      border-radius: 8px 8px 0 0;
    }
    .content { 
      background: #FFFFFF; 
      padding: 30px;
      border: 1px solid #E0E0E0;
    }
    .section { 
      background: #F5F5F5; 
      padding: 20px; 
      margin-bottom: 15px; 
      border-radius: 6px;
      border-left: 4px solid #FF6F00;
    }
    .section h3 { 
      color: #1E88E5; 
      margin-top: 0;
      font-size: 16px;
    }
    .info-row { 
      display: flex; 
      padding: 8px 0; 
      border-bottom: 1px solid #E0E0E0;
    }
    .info-label { 
      font-weight: 600; 
      width: 150px; 
      color: #616161;
    }
    .info-value { 
      flex: 1; 
      color: #212121;
    }
    .badge { 
      display: inline-block; 
      background: #FF6F00; 
      color: white; 
      padding: 6px 16px; 
      border-radius: 20px; 
      font-size: 12px; 
      font-weight: bold;
    }
    .footer { 
      text-align: center; 
      padding: 20px; 
      color: #616161; 
      font-size: 13px;
      background: #F5F5F5;
      border-radius: 0 0 8px 8px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0;">🏦 PERMOHONAN PINJAMAN BARU</h1>
      <p style="margin: 10px 0 0 0;">Gegal Utama Sdn Bhd</p>
      <span class="badge">⚡ PERLU TINDAKAN</span>
    </div>
    
    <div class="content">
      <div class="section">
        <h3>📋 Maklumat Pemohon</h3>
        <div class="info-row">
          <span class="info-label">Nama Penuh:</span>
          <span class="info-value"><strong>{{name}}</strong></span>
        </div>
        <div class="info-row">
          <span class="info-label">No. Telefon:</span>
          <span class="info-value"><a href="tel:{{phone}}">{{phone}}</a></span>
        </div>
        <div class="info-row">
          <span class="info-label">Pekerjaan:</span>
          <span class="info-value">{{employment}}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Negeri:</span>
          <span class="info-value">{{state}}</span>
        </div>
      </div>

      <div class="section">
        <h3>💰 Butiran Pinjaman</h3>
        <div class="info-row">
          <span class="info-label">Jumlah Pinjaman:</span>
          <span class="info-value"><strong style="color: #FF6F00; font-size: 18px;">{{loan_amount}}</strong></span>
        </div>
      </div>

      <div class="section">
        <h3>📅 Maklumat Permohonan</h3>
        <div class="info-row">
          <span class="info-label">Tarikh:</span>
          <span class="info-value">{{submission_date}}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Masa:</span>
          <span class="info-value">{{submission_time}}</span>
        </div>
      </div>

      <div style="background: #FFF3E0; padding: 15px; border-radius: 6px; margin-top: 20px; text-align: center;">
        <p style="margin: 0; color: #FF6F00; font-weight: 600;">
          ⚡ Sila hubungi pemohon dalam masa 24 jam
        </p>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0 0 8px 0;">Email ini dihantar secara automatik dari website Gegal Utama.</p>
      <p style="margin: 0; font-size: 12px;">
        162A, Jalan Tasek Timur, Taman Tasek Indra, 31400 Ipoh, Perak<br>
        📱 011-53164241 | 📧 gegalutama@gmail.com
      </p>
    </div>
  </div>
</body>
</html>
```

**Auto-reply to Applicant:**
```
Subject (BM): ✅ Permohonan Anda Diterima - Gegal Utama
Subject (EN): ✅ Your Application Received - Gegal Utama

Body (BM):
Terima kasih, {{name}}!

Kami telah menerima permohonan pinjaman anda dengan butiran berikut:

💰 Jumlah: {{loan_amount}}
👤 Pekerjaan: {{employment}}
📍 Negeri: {{state}}

Pasukan kami akan menyemak permohonan anda dan menghubungi anda dalam masa 24 jam.

Untuk respon lebih pantas, anda juga boleh hubungi kami:
📱 WhatsApp: 011-53164241
📧 Email: gegalutama@gmail.com

Terima kasih atas kepercayaan anda kepada Gegal Utama.

Salam Sejahtera,
Pasukan Gegal Utama Sdn Bhd
"Partner Kewangan Anda Yang Dipercayai"

---

Body (EN):
Thank you, {{name}}!

We have received your loan application with the following details:

💰 Amount: {{loan_amount}}
👤 Employment: {{employment}}
📍 State: {{state}}

Our team will review your application and contact you within 24 hours.

For faster response, you can also contact us:
📱 WhatsApp: 011-53164241
📧 Email: gegalutama@gmail.com

Thank you for trusting Gegal Utama.

Best Regards,
Gegal Utama Sdn Bhd Team
"Your Trusted Financial Partner"
```

---

## 🚀 DEPLOYMENT

**Platform:** Vercel (free tier)

**Domain:** 
- Vercel subdomain: `gegal-utama-website.vercel.app`
- Custom domain: [If client provides]

**Environment Variables:**
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

**Deployment Steps:**
1. Push to GitHub
2. Import to Vercel
3. Configure environment variables
4. Deploy
5. Test all functionality
6. Share URL with client

---

## ✅ SUCCESS CRITERIA

**Visual/Design:**
- ✅ Clean, bright, white-dominated design
- ✅ Blue + Orange color scheme from logo
- ✅ Modern but natural (not AI-generated feel)
- ✅ Professional and trustworthy appearance
- ✅ Subtle, professional animations

**Mobile Experience:**
- ✅ Perfect on phones (320px+)
- ✅ Touch-friendly (48px+ buttons)
- ✅ Fast loading (<3 seconds)
- ✅ Easy one-handed use
- ✅ All features work smoothly

**Desktop Experience:**
- ✅ Also looks great on laptop
- ✅ Proper spacing and layout
- ✅ Responsive up to 2000px+
- ✅ All hover states work

**Functionality:**
- ✅ Form validation works
- ✅ Email sending successful
- ✅ WhatsApp link opens correctly
- ✅ Facebook link works
- ✅ Language toggle instant
- ✅ All click-to-call/email work
- ✅ Floating social buttons always visible
- ✅ Animations smooth (60fps)

**Content:**
- ✅ All content in BM and EN
- ✅ Professional copy
- ✅ Clear call-to-actions
- ✅ Trust indicators prominent
- ✅ Partnership theme evident

---

## 🎯 KEY DIFFERENTIATORS

**What makes this different from other loan websites:**

1. **Partnership Focus** - Not just a lender, a financial partner
2. **Blue + Orange Combo** - Unique, warm yet professional
3. **Bright & Clean** - White backgrounds, light and welcoming
4. **Handshake Theme** - Cooperation and trust throughout
5. **Simple Process** - 5-field form, very easy
6. **Dual Social Buttons** - WhatsApp + Facebook always accessible
7. **Professional Animations** - Subtle, enhances UX
8. **Mobile-First** - Truly optimized for phones

---

## 📝 CONTENT TONE

**Brand Voice:**
- Friendly but professional
- Trustworthy and reliable
- Partner-oriented (not lender-focused)
- Clear and straightforward
- Warm and approachable
- Respectful and helpful

**Language Style:**
- Simple, easy-to-understand
- No jargon unless necessary
- Action-oriented CTAs
- Positive, encouraging tone
- Focus on partnership and cooperation

---

## 🎨 DESIGN INSPIRATION KEYWORDS

For visual reference:

**Style:**
- Bright and clean
- Modern partnership
- Trust and cooperation
- Professional financial services
- Warm yet reliable

**Feel:**
- Welcoming
- Trustworthy
- Partnership-oriented
- Professional
- Approachable
- Secure

**NOT:**
- Corporate and cold
- AI-generated aesthetic
- Dark or heavy
- Aggressive sales
- Overly complex

---

**Build a clean, bright, professional website that positions Gegal Utama as a trusted financial partner, not just a lender. Focus on mobile-first design, subtle animations, and a warm blue+orange color scheme. Make the application process simple (5 fields) and ensure WhatsApp/Facebook are always accessible via floating buttons.**

---

**END OF BRIEF**

This website should feel like a trustworthy handshake - professional, warm, and partnership-focused. 🤝
