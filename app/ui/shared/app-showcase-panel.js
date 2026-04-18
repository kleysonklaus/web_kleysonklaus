const STORE_META = {
    googlePlay: {
        label: 'Google Play',
        badge: 'Android',
        copy: 'Ficha oficial disponible para instalacion inmediata desde Android.',
        icon: `
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3.69 2.21 13.42 12 3.7 21.79a2.24 2.24 0 0 1-.19-.91V3.12c0-.33.07-.64.18-.91Z" fill="currentColor" opacity="0.72" />
                <path d="m16.55 15.15-3.13-3.15L3.69 2.21c.3-.56.8-1 1.44-1.18l11.42 6.49Z" fill="currentColor" opacity="0.92" />
                <path d="M16.55 15.15 5.13 21.64c-.63-.18-1.14-.62-1.43-1.18L13.42 12l3.13 3.15Z" fill="currentColor" />
                <path d="M20.47 10.69c1.37.78 1.37 1.84 0 2.62l-3.92 1.84L13.42 12l3.13-3.15 3.92 1.84Z" fill="currentColor" opacity="0.58" />
            </svg>
        `,
    },
    appStore: {
        label: 'App Store',
        badge: 'iPhone / iPad',
        copy: 'La version para iPhone se anunciara cuando la publicacion este lista.',
        icon: `
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M14.88 3.36c.78-.95 1.31-2.23 1.17-3.36-1.12.05-2.46.74-3.25 1.68-.72.83-1.35 2.16-1.18 3.42 1.25.1 2.48-.64 3.26-1.74Z" fill="currentColor" />
                <path d="M19.02 12.77c.03-2.47 2.02-3.65 2.11-3.71-1.15-1.68-2.94-1.91-3.57-1.94-1.52-.16-2.97.89-3.74.89-.78 0-1.97-.86-3.24-.84-1.67.02-3.2.97-4.06 2.47-1.74 3.02-.44 7.49 1.25 9.93.83 1.19 1.81 2.53 3.1 2.48 1.25-.05 1.72-.8 3.23-.8s1.93.8 3.26.77c1.35-.02 2.2-1.22 3.02-2.42.95-1.38 1.34-2.73 1.36-2.8-.03-.01-2.62-1-2.72-4.03Z" fill="currentColor" />
            </svg>
        `,
    },
};

function escapeAttribute(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function buildStyleVars(theme = {}) {
    const accent = theme.accent || '#6be3c1';
    const accentStrong = theme.accentStrong || '#2fb8e0';
    const glow = theme.glow || 'rgba(107, 227, 193, 0.18)';

    return `--app-accent: ${accent}; --app-accent-strong: ${accentStrong}; --app-glow: ${glow};`;
}

export function appShowcasePanel({
    id,
    tag,
    eyebrow,
    title,
    copy,
    highlights,
    stats,
    stores,
    logoSrc,
    logoAlt,
    screenshots,
    theme,
}) {
    const highlightList = highlights
        .map((item) => `<li>${item}</li>`)
        .join('');

    const statsMarkup = stats
        .map(
            (item) => `
                <article class="app-showcase-panel__stat">
                    <strong>${item.value}</strong>
                    <span>${item.label}</span>
                </article>
            `
        )
        .join('');

    const storesMarkup = ['googlePlay', 'appStore']
        .filter((storeKey) => stores && stores[storeKey])
        .map((storeKey) => {
            const meta = STORE_META[storeKey];
            const store = stores[storeKey];
            const isEnabledLink = Boolean(store.isEnabledLink);
            const tooltip = escapeAttribute(store.tooltip || 'Aun no esta disponible en esta plataforma.');
            const cardClassName = [
                'app-store-card',
                `app-store-card--${storeKey}`,
                isEnabledLink ? 'app-store-card--enabled' : 'app-store-card--disabled',
            ].join(' ');
            const content = `
                <div class="app-store-card__top">
                    <span class="app-store-card__platform">
                        <span class="app-store-card__icon">${meta.icon}</span>
                        <span class="app-store-card__platform-copy">
                            <strong class="app-store-card__title">${meta.label}</strong>
                            <span class="app-store-card__badge">${meta.badge}</span>
                        </span>
                    </span>
                    <span class="app-store-card__status">${isEnabledLink ? 'Disponible' : 'Proximamente'}</span>
                </div>
                <p class="app-store-card__copy">${store.copy || meta.copy}</p>
                <span class="app-store-card__action">${isEnabledLink ? 'Abrir ficha oficial' : 'Ver estado de lanzamiento'}</span>
            `;

            if (isEnabledLink) {
                return `
                    <a
                        class="${cardClassName}"
                        href="${store.href}"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Abrir ${title} en ${meta.label}"
                    >
                        ${content}
                    </a>
                `;
            }

            return `
                <div
                    class="${cardClassName}"
                    tabindex="0"
                    role="note"
                    data-tooltip="${tooltip}"
                    aria-label="${meta.label} aun no disponible para ${title}"
                >
                    ${content}
                </div>
            `;
        })
        .join('');

    const screenshotsMarkup = screenshots
        .map(
            (item) => `
                <figure class="app-shot-card">
                    <div class="app-shot-card__frame">
                        <img src="${item.src}" alt="${item.alt}" loading="lazy">
                    </div>
                    <figcaption class="app-shot-card__caption">
                        <strong>${item.title}</strong>
                        <p>${item.copy}</p>
                    </figcaption>
                </figure>
            `
        )
        .join('');

    return `
        <article
            class="app-showcase-panel"
            id="${id}"
            data-app-panel
            style="${buildStyleVars(theme)}"
        >
            <div class="container app-showcase-panel__shell">
                <div class="app-showcase-panel__hero">
                    <div class="app-showcase-panel__brand">
                        <div class="app-showcase-panel__copy">
                            <span class="app-card__tag">${tag}</span>
                            <p class="eyebrow">${eyebrow}</p>
                            <h3>${title}</h3>
                            <p class="app-showcase-panel__lead"><em>${copy}</em></p>
                        </div>
                        <div class="app-showcase-panel__logo-shell">
                            <img class="app-showcase-panel__logo" src="${logoSrc}" alt="${logoAlt}" loading="lazy">
                        </div>
                    </div>
                    <aside class="panel app-showcase-panel__support" aria-label="Resumen de la aplicacion ${title}">
                        <span class="panel__label">Ficha</span>
                        <div class="app-showcase-panel__stats">${statsMarkup}</div>
                        <ul class="app-showcase-panel__list">${highlightList}</ul>
                        <div class="app-showcase-panel__stores-block">
                            <div class="app-showcase-panel__stores-head">
                                <strong>Play Store y App Store</strong>
                                <p>Controla los enlaces y su disponibilidad editando el objeto stores de cada app.</p>
                            </div>
                            <div class="app-showcase-panel__stores">${storesMarkup}</div>
                        </div>
                    </aside>
                </div>
                <div class="app-showcase-panel__gallery-block">
                    <div class="app-showcase-panel__gallery-heading">
                        <p class="eyebrow">Capturas y mensajes</p>
                        <p>
                            Desliza horizontalmente para revisar pantallas clave y el mensaje que acompana cada vista.
                        </p>
                    </div>
                    <div class="app-showcase-panel__gallery" aria-label="Capturas de pantalla de ${title}">
                        ${screenshotsMarkup}
                    </div>
                </div>
            </div>
        </article>
    `;
}