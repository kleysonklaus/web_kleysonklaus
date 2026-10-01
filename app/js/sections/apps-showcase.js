import { queryAll } from '../shared/dom.js';

function setActiveState(panels, activeId) {
    panels.forEach((panel) => {
        panel.classList.toggle('is-active', panel.id === activeId);
    });
}

export function initAppsShowcase() {
    const panels = queryAll('[data-app-panel]');

    if (!panels.length) {
        return;
    }

    const firstId = panels[0].id;
    setActiveState(panels, firstId);

    if (!('IntersectionObserver' in window)) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            const visibleEntries = entries
                .filter((entry) => entry.isIntersecting)
                .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

            if (!visibleEntries.length) {
                return;
            }

            setActiveState(panels, visibleEntries[0].target.id);
        },
        {
            threshold: [0.35, 0.55, 0.75],
            rootMargin: '-12% 0px -12% 0px',
        }
    );

    panels.forEach((panel) => observer.observe(panel));
}