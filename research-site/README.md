# Personal Research Website

A warm, editorial-style personal research website. No frameworks, no build tools — just HTML, CSS, and vanilla JavaScript.

## 🚀 Running Locally

The fastest way:

```bash
# Python 3 (most machines have this)
cd research-site
python3 -m http.server 8080
```

Then open **http://localhost:8080** in your browser.

Alternatives:
```bash
# Node.js
npx serve .

# VS Code: install the "Live Server" extension, right-click index.html → "Open with Live Server"
```

> ⚠️ Opening `index.html` directly (file://) may cause font issues. Use a local server.

---

## ✏️ Customization Guide

### 1. Personal Info — `index.html`

Search for these placeholders and replace them:

| Placeholder | Replace with |
|---|---|
| `Your Name` / `Your Full Name` | Your actual name |
| `YN` (nav logo) | Your initials |
| `[University Name]` | Your university |
| `[Department Name]` | Your department |
| `[Field]` | Your research field |
| `Prof. Advisor Name` | Your advisor's name & link |
| `City, State` | Your location |
| `yourname@university.edu` | Your email |

### 2. Profile Photo

Replace `assets/img/placeholder-photo.svg` with your own photo:

```html
<!-- In index.html, change this line: -->
<img src="assets/img/placeholder-photo.svg" ... />
<!-- to: -->
<img src="assets/img/your-photo.jpg" ... />
```

A portrait orientation (4:5 ratio) works best — e.g. 400×500 px or 800×1000 px.

### 3. Social Links

In the `hero-social` div and `contact-social` div, update the `href` attributes:

```html
<a href="https://scholar.google.com/citations?user=YOUR_ID" ...>Scholar</a>
<a href="https://github.com/YOUR_USERNAME" ...>GitHub</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" ...>LinkedIn</a>
```

### 4. News Items

Add new `<li>` items inside `#newsList`. The first 3 are visible; add `class="news-hidden"` for older items (they appear under "Show all"):

```html
<li class="news-item">
  <span class="news-date">Dec 2025</span>
  <span class="news-text">Your news item here.</span>
</li>
```

### 5. Research Projects

Copy a `<article class="project-card">` block and fill in your project details. Use `class="project-card featured"` for your primary project.

### 6. Publications

Copy a `<li class="pub-item">` block. Set `data-type` to one of:
- `journal`
- `conference`
- `preprint`

This powers the filter buttons automatically.

### 7. CV

Fill in the `.cv-entry` blocks. Add more skill tags in `.cv-skills`.

### 8. CV PDF

Place your CV file at `assets/cv.pdf`. The "Download CV" buttons already point there.

---

## 🎨 Theming

All colors are CSS variables in `css/style.css` at the top:

```css
:root {
  --rust:  #b85c38;   /* accent color — change to your preference */
  --cream: #faf7f2;   /* page background */
  --ink:   #1c1814;   /* text color */
  /* ... */
}
```

---

## 🌐 Deploying to GitHub Pages

1. Create a repo named `your-username.github.io` (or any name for a project site)
2. Push all files to the `main` branch
3. In repo Settings → Pages → set source to `main` / `root`
4. Your site will be live at `https://your-username.github.io`

---

## 📁 File Structure

```
research-site/
├── index.html          ← All page content
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Interactivity (nav, filter, news toggle)
├── assets/
│   ├── cv.pdf          ← Your CV (add this!)
│   └── img/
│       └── placeholder-photo.svg  ← Replace with your photo
└── README.md
```
