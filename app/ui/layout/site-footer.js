import { footerConfig } from '../shared/footer-config.js';
import { renderAnimatedBrand } from '../shared/animated-brand.js';

function renderNavigationLinks() {
    return footerConfig.navigationLinks
        .map((item) => `<a href="${item.href}">${item.label}</a>`)
        .join('');
}

function renderSocialLinks() {
    return Object.values(footerConfig.socialLinks)
        .filter((item) => item.enabled)
        .map(
            (item, index) => `
                <a
                    class="social-link"
                    href="${item.href}"
                    target="_blank"
                    rel="noreferrer"
                    style="--social-color: ${item.color}; --social-index: ${index};"
                    aria-label="Abrir ${item.label}"
                    title="${item.label}"
                >
                    <span class="social-link__icon" aria-hidden="true">${item.icon}</span>
                    <span class="social-link__label">${item.label}</span>
                </a>
            `
        )
        .join('');
}

export function siteFooter() {
    const links = renderNavigationLinks();
    const socialLinks = renderSocialLinks();
    const currentYear = new Date().getFullYear();

    return `
        <footer class="footer">
            <div class="container">
                <section class="footer-band" aria-label="Footer principal">
                    <div class="footer-band__brand">
                        <p class="eyebrow">${footerConfig.brand.eyebrow}</p>
                        <h3 class="footer-band__title">${renderAnimatedBrand(footerConfig.brand.title, 'brand__title--footer')}</h3>
                        <p>${footerConfig.brand.copy}</p>
                    </div>
                    <nav class="footer-band__nav" aria-label="Navegacion secundaria">
                        ${links}
                    </nav>
                    ${socialLinks ? `<div class="footer-band__socials" aria-label="Redes sociales">${socialLinks}</div>` : ''}
                </section>
                <section class="footer-copyright" aria-label="Copyright">
                    <p>Copyright © ${currentYear} ${footerConfig.copyright.owner}. ${footerConfig.copyright.note}</p>
                </section>
            </div>
        </footer>
    `;
}
