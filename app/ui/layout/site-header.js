import { buttonLink } from '../shared/button.js';
import { renderAnimatedBrand } from '../shared/animated-brand.js';
import { siteContent } from '../shared/site-content.js';

export function siteHeader() {
    const siteBrand = siteContent.brand;
    const navigationItems = siteContent.navigationItems;
    const navigation = navigationItems
        .map((item) => `<a href="${item.href}">${item.label}</a>`)
        .join('');

    return `
        <header class="site-header">
            <div class="container site-header__inner">
                <a class="brand" href="#inicio" aria-label="Volver al inicio de Kleyson Klaus">
                    ${renderAnimatedBrand(siteBrand.name, 'brand__title--header')}
                </a>
                <nav class="site-nav" aria-label="Principal">${navigation}</nav>
                ${buttonLink({ href: '#contacto', label: 'Contacto', variant: 'ghost' })}
            </div>
        </header>
    `;
}
