/* ═══════════════════════════════════════════════════════════
   RESEARCH SITE — main.js
   ═══════════════════════════════════════════════════════════ */

// ── Year in footer ────────────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();

// ── Dark mode toggle ──────────────────────────────────────
const themeToggle = document.getElementById('themeToggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme') ?? 'dark';
root.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to dark mode' : 'Switch to light mode');
});

// ── Mobile nav toggle ─────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── News "Show all / Show less" toggle ────────────────────
const newsToggle = document.getElementById('newsToggle');
const hiddenNews = document.querySelectorAll('.news-hidden');
let newsExpanded = false;

newsToggle.addEventListener('click', () => {
  newsExpanded = !newsExpanded;
  hiddenNews.forEach(item => item.classList.toggle('visible', newsExpanded));
  newsToggle.textContent = newsExpanded ? 'Show less' : 'Show all';
});

// ── Publications filter ───────────────────────────────────
const filterBtns = document.querySelectorAll('.pub-filter-btn');
const pubItems   = document.querySelectorAll('.pub-item');

function applyFilter(filter) {
  pubItems.forEach(item => {
    if (filter === 'all' || item.dataset.type === filter) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyFilter(btn.dataset.filter);
  });
});

// Apply default filter on load
const activeBtn = document.querySelector('.pub-filter-btn.active');
if (activeBtn) applyFilter(activeBtn.dataset.filter);

// ── Active nav link on scroll ─────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const observerOptions = {
  root: null,
  rootMargin: `-${getComputedStyle(document.documentElement)
    .getPropertyValue('--nav-h')
    .trim()} 0px -60% 0px`,
  threshold: 0,
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.style.color = '';
        a.style.fontWeight = '';
      });
      const active = document.querySelector(
        `.nav-links a[href="#${entry.target.id}"]`
      );
      if (active) {
        active.style.color = 'var(--rust)';
        active.style.fontWeight = '500';
      }
    }
  });
}, observerOptions);

sections.forEach(s => observer.observe(s));

// ── Smooth scroll offset (account for sticky nav) ─────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
    );
    const top = target.getBoundingClientRect().top + window.scrollY - navH - 12;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
