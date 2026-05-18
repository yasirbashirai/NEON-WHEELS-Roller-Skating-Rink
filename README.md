# Neon Wheels Roller Skating Rink & Fun Center

An 11-page website for **Neon Wheels Roller Skating Rink & Fun Center** — a 501(c)(3) nonprofit youth and family destination in Gurnee, Lake County, Illinois. A safe haven for kids and families, focused on recreation, mentorship, education, wellness, and community impact.

## Pages

| # | Page | File | Nav |
|---|------|------|-----|
| 1 | Home | `index.html` | Home |
| 2 | Why Neon Wheels Matters | `why-neon-wheels-matters.html` | Why It Matters |
| 3 | About Us | `about.html` | About |
| 4 | Programs & Services | `programs.html` | Programs |
| 5 | Impact | `impact.html` | Impact |
| 6 | Visionary Leaders | `leadership.html` | Leaders |
| 7 | Future Home Site | `future-home.html` | Future Home |
| 8 | Partners & Sponsors | `partners.html` | Partners |
| 9 | Contact Us | `contact.html` | Contact |
| 10 | Thank You | `thank-you.html` | Thank You |
| – | Donate Now | `donate.html` | (CTA button) |

## Folder Structure

```
neon-wheels/
├── index.html
├── why-neon-wheels-matters.html
├── about.html
├── programs.html
├── impact.html
├── leadership.html
├── future-home.html
├── partners.html
├── contact.html
├── thank-you.html
├── donate.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   └── images/
│       ├── logo.png
│       ├── home-kids-main.png      (new home hero — kids skating)
│       ├── main-home-design.jpg    (reference design)
│       ├── future-home-page.jpg    (reference design)
│       ├── facility-vision.png     (future facility rendering)
│       ├── home-image1.png
│       ├── home-image3.png
│       ├── donate-box.png
│       ├── land.png
│       ├── building-rendering.png
│       ├── kids-cutout.png
│       ├── about-kids-1.png
│       ├── about-kid-2.jpg
│       ├── dad-daughter.png
│       ├── group-friends.webp
│       ├── footer-bg.png
│       ├── barbara.jpg
│       ├── edward.jpg
│       └── sybria.jpg
├── .gitignore
└── README.md
```

## Tech / Design

- **Static multi-page HTML + CSS** (no build step required)
- **Fonts:** Poppins (UI) + Dancing Script (accents) via Google Fonts
- **Palette:** Neon brand identity — bright pink `#ff2ea6`, cyan `#14e1ff`, yellow `#ffd83d`, purple `#a16bff`, green `#4dffb0`, on deep `#0a0414` background
- Fully responsive (4 → 2 → 1 column breakpoints)
- Sticky header with mobile hamburger toggle
- Accessible alt text, semantic HTML

## Local Preview

Open `index.html` in a browser, or serve the folder:

```bash
cd "neon-wheels"
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Contact

**Neon Wheels Roller Skating Rink & Fun Center**
- 📞 (224) 614-5495
- ✉ info@neonwheels.org
- 🌐 www.neonwheels.org
- 📍 Gurnee, IL — Lake County, Illinois
- 501(c)(3) Nonprofit • All donations tax-deductible
