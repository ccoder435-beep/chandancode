# ⚡ Chandan Code — Minimalist Personal Portfolio & Notes Website

> **Ultra-professional, pure black & white developer website for Chandan Kumar ("Chandan Code").**  
> **Institution:** Government Polytechnic, Gulzarbagh, Patna-7 (GP Patna 7), Bihar.  
> **Discipline:** Electronics Engineering Student & Software/Hardware Developer.  
> **Production Domain:** [https://chandancode.github.io](https://chandancode.github.io) (also compatible with `chandancode.vercel.app`).

---

## 🌟 Key Architecture & Design Highlights

### 1. Pure Black & White Vercel / Apple Minimalist Theme
- **100% Pure Pitch Black Background** (`#000000`) across all pages.
- **Razor-Sharp White Typography** (`#ffffff`) with subtle zinc/silver (`#a1a1aa`, `#71717a`) for secondary descriptions.
- **Zero Heavy Gradients**: Eliminated blue and pink colors; replaced with sleek monochrome borders, subtle glow states, and solid minimalist cards.

### 2. Multi-Page Navigation Structure (Zero Long Single-Page Scrolling)
Clicking any top navigation link directly loads the dedicated page at the top of the screen:
- **`index.html`**: Home view with hero headline, live status pill, dynamic typewriter, and TypeScript profile mockup.
- **`about.html`**: Dedicated biography, Government Polytechnic Patna-7 educational background, and electronics journey.
- **`skills.html`**: Categorized tech stack (Python, C, C++, JavaScript, HTML/CSS, ESP32, Arduino, IoT, Circuit Design, and Japanese).
- **`projects.html`**: Dedicated showcase for IoT sensor stations, microcontroller builds, Python tools, and web engineering.
- **`blog.html`**: Free handwritten engineering notes, C pointer guides, and Japanese study references with live search.
- **`contact.html`**: Working contact form with direct LinkedIn, Instagram, GitHub, and email cards.

### 3. Real Profile & Education Alignment
- **Personal Name**: Chandan Kumar
- **Brand / Website**: Chandan Code (`<ChandanCode />`)
- **College / Institute**: Government Polytechnic, Gulzarbagh, Patna-7 (GP Patna 7), SBTE Bihar.
- **Software Stack**: Python, C, C++, HTML5, CSS3, JavaScript.
- **Hardware & IoT**: ESP32, Arduino, Microcontrollers, Relays, Sensors, Circuit Design.
- **Language Learning**: Japanese (日本語 - Active Study), English, Hindi.

### 4. SEO & AI Engine Optimization (AEO)
- Structured for free hosting: `https://chandancode.github.io`.
- Rich Schema.org JSON-LD graph defining Chandan Kumar as a `Person` and alumni of GP Patna-7 with social `sameAs` mapping.
- Crawler-ready `robots.txt` explicitly permitting Googlebot, GPTBot, ClaudeBot, and PerplexityBot.
- Multi-page `sitemap.xml`.

---

## 📁 File Structure

```
chandan-coder-portfolio/
│
├── index.html        # Home View (Hero, Profile Terminal, Quick Pathways)
├── about.html        # Dedicated About & GP Patna-7 Education Page
├── skills.html       # Dedicated Skills Page (Software, Hardware, Languages)
├── projects.html     # Dedicated Projects Page (ESP32, Arduino, Python, Web)
├── blog.html         # Dedicated Notes Page with Live Search (C, IoT, Japanese)
├── contact.html      # Dedicated Contact Page (Form, Email, LinkedIn, Instagram, GitHub)
├── style.css         # Pure Pitch Black (#000000) Minimalist Stylesheet
├── script.js         # Navigation Drawer, Hero Typewriter, Search & Form Script
├── robots.txt        # Configured for chandancode.github.io
├── sitemap.xml       # Multi-Page XML Sitemap
└── README.md         # Documentation
```

---

## 🚀 Free Deployment Guide

### Option 1: GitHub Pages (Recommended — 100% Free)
1. Create a new GitHub repository named: **`chandancode.github.io`**
2. Push all the files from this directory to the `main` branch:
   ```bash
   git init
   git remote add origin https://github.com/chandancode/chandancode.github.io.git
   git add .
   git commit -m "Launch Chandan Code website"
   git push -u origin main
   ```
3. Your website will be live immediately at: **`https://chandancode.github.io`**

### Option 2: Vercel (1-Click Free Hosting)
1. Go to [vercel.com](https://vercel.com) and import your repository.
2. Hit **Deploy** — your site is instantly live with free SSL.
