import { queryAll } from '../shared/dom.js';

export function initNavigation() {
    const navLinks = queryAll('.site-nav a[href^="#"]');
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!navLinks.length || !sections.length || !('IntersectionObserver' in window)) {
        return;
    }

    const linkById = new Map(
        navLinks.map((link) => [link.getAttribute('href').slice(1), link])
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach((link) => link.removeAttribute('aria-current'));
                const activeLink = linkById.get(entry.target.id);
                if (activeLink) {
                    activeLink.setAttribute('aria-current', 'page');
                }
            });
        },
        {
            rootMargin: '-30% 0px -55% 0px',
            threshold: 0.01,
        }
    );

    sections.forEach((section) => observer.observe(section));
}
