import { query, queryAll } from '../shared/dom.js';

export function initHeroSection() {
    const hero = query('.hero');
    if (!hero) {
        return;
    }

    const revealItems = queryAll('.hero .stat-card');
    revealItems.forEach((item, index) => {
        item.classList.add('reveal-on-scroll');
        item.style.transitionDelay = `${index * 90}ms`;
    });

    if (!('IntersectionObserver' in window)) {
        revealItems.forEach((item) => item.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, currentObserver) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                revealItems.forEach((item) => item.classList.add('is-visible'));
                currentObserver.disconnect();
            });
        },
        {
            threshold: 0.2,
        }
    );

    observer.observe(hero);
}
