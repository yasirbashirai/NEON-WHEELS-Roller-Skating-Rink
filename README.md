# Neon Wheels Roller Skating Rink & Fun Center

A 10-page website revamp for **Neon Wheels Roller Skating Rink & Fun Center** — a 501(c)(3) nonprofit raising $4.5M to build a transformational youth and family destination in Lake County, Illinois.

## Pages

| # | Page | File |
|---|------|------|
| 1 | Home | `index.html` |
| 2 | About Us | `about.html` |
| 3 | Programs & Services | `programs.html` |
| 4 | Impact | `impact.html` |
| 5 | Visionary Leaders | `leadership.html` |
| 6 | Partners & Sponsors | `partners.html` |
| 7 | Donate | `donate.html` |
| 8 | 5-Year Business Plan & Financial Forecast | `business-plan.html` |
| 9 | Contact | `contact.html` |
| 10 | Thank You | `thank-you.html` |

## Folder Structure

```
neon-wheels/
├── index.html
├── about.html
├── programs.html
├── impact.html
├── leadership.html
├── partners.html
├── donate.html
├── business-plan.html
├── contact.html
├── thank-you.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── images/
│       ├── logo.png
│       ├── building-rendering.png
│       ├── land.png
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
- Fully responsive grid layouts (4 → 2 → 1 column breakpoints)
- Sticky header with mobile hamburger toggle
- Accessible alt text on all imagery, semantic HTML

## Local Preview

Just open `index.html` in a browser, or serve the folder:

```bash
cd "neon-wheels"
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Content Sources

- Page mockups and copy in `/Users/yasirbashir/Downloads/neonwheels/`
- Leadership bios from "Visionry Leadership page text.pdf"
- Need / impact copy from "Why the Need - Neon Wheel 5-6 Revised.docx"
- Financial forecast from "neon_wheels_5_year_business_plan_tab.txt"

## Contact

**Neon Wheels Roller Skating Rink & Fun Center**
- 📞 (224) 614-5495
- ✉ info@neonwheels.org
- 🌐 www.neonwheels.org
- 📍 Lake County, Illinois — Serving Waukegan, North Chicago, Zion, Round Lake, Beach Park
- EIN: 93-4851977 (501(c)(3) Nonprofit)
