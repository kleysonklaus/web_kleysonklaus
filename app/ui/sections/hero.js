import { buttonLink } from '../shared/button.js';
import { siteContent } from '../shared/site-content.js';

export function heroSection() {
    const hero = siteContent.hero;

    const stats = hero.stats
        .map(
            (item) => `
                <article class="stat-card">
                    <strong>${item.title}</strong>
                    <span>${item.copy}</span>
                </article>
            `
        )
        .join('');

    return `
        <section class="hero" id="inicio">
            <div class="container hero__layout">
                <div>
                    <h1>${hero.title}</h1>
                    <p class="hero__lead">${hero.lead}</p>
                    <div class="hero__actions">
                        ${buttonLink({ href: '#aplicaciones', label: 'Explorar aplicaciones', variant: 'primary' })}
                        ${buttonLink({ href: '#contacto', label: 'Ir al contacto', variant: 'secondary' })}
                    </div>
                    <div class="hero__stats" aria-label="Indicadores principales">${stats}</div>
                </div>
            </div>
        </section>
    `;
}
