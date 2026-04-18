const defaultSiteContent = {
    brand: {
        name: 'Kleyson Klaus',
    },
    navigationItems: [
        { href: '#marca', label: 'Kleyson' },
        { href: '#aplicaciones', label: 'Aplicaciones' },
        { href: '#contacto', label: 'Contacto' },
    ],
    hero: {
        title: 'Soluciones simples y fáciles',
        lead: 'Desarrollo, publicicón y organización de un catalogo de aplicaciones.',
        stats: [
            {
                title: 'Soluciones',
                copy: 'Ágiles.',
            },
            {
                title: 'Autonomia',
                copy: 'Priorizando',
            },
            {
                title: 'Constancia',
                copy: 'Actualizaciones constantes',
            },
        ],
    },
    company: {
        section: {
            id: 'marca',
            eyebrow: 'Marca',
            title: 'Creando aplicaciones simples, eficientes y mantenibles a largo plazo.',
            copy: 'Un paso cada dia.',
        },
        pillars: [
            {
                kicker: 'Posicion',
                title: 'Nuevas Apps',
                copy: 'Creando nuevas apps con novedades',
            },
            {
                kicker: 'Catalogo',
                title: 'Linea principal',
                copy: 'Enfocada a soluciones apps moviles',
            },
            {
                kicker: 'Continuidad',
                title: 'Apps disponibles',
                copy: 'Con mantemiento constante y escuchando sugerencias',
            },
        ],
    },
    contact: {
        eyebrow: 'Contacto',
        title: 'Solicita información o envia tu sugerencia',
        lead: 'Escribir unicamente al correo disponibilizado. no se responderá otro modo de contacto.',
        actions: [
            { href: 'mailto:soporte@kleysonklaus.com', label: 'Escribir por correo', variant: 'primary' },
            { href: '#aplicaciones', label: 'Ver aplicaciones', variant: 'secondary' },
        ],
        meta: {
            eyebrow: 'Canal principal',
            email: 'soporte@kleysonklaus.com',
            copy: 'Usa este correo para pedir informacion de una app especifica o enviar una sugerencia puntual.',
            note: 'Soporte inicial, feedback y oportunidades de mejora.',
        },
    },
};

const rootScope = typeof globalThis !== 'undefined' ? globalThis : window;

function cloneItems(items) {
    return items.map((item) => ({ ...item }));
}

function resolveItems(items, fallback) {
    return Array.isArray(items) && items.length ? cloneItems(items) : cloneItems(fallback);
}

export function getSiteContent() {
    const globalContent = rootScope.__KK_SITE_CONTENT__ || {};
    const globalHero = globalContent.hero || {};
    const globalCompany = globalContent.company || {};
    const globalCompanySection = globalCompany.section || {};
    const globalContact = globalContent.contact || {};
    const globalContactMeta = globalContact.meta || {};

    return {
        brand: {
            name: globalContent.brand?.name || defaultSiteContent.brand.name,
        },
        navigationItems: resolveItems(globalContent.navigationItems, defaultSiteContent.navigationItems),
        hero: {
            title: globalHero.title || defaultSiteContent.hero.title,
            lead: globalHero.lead || defaultSiteContent.hero.lead,
            stats: resolveItems(globalHero.stats, defaultSiteContent.hero.stats),
        },
        company: {
            section: {
                id: globalCompanySection.id || defaultSiteContent.company.section.id,
                eyebrow: globalCompanySection.eyebrow || defaultSiteContent.company.section.eyebrow,
                title: globalCompanySection.title || defaultSiteContent.company.section.title,
                copy: globalCompanySection.copy || defaultSiteContent.company.section.copy,
            },
            pillars: resolveItems(globalCompany.pillars, defaultSiteContent.company.pillars),
        },
        contact: {
            eyebrow: globalContact.eyebrow || defaultSiteContent.contact.eyebrow,
            title: globalContact.title || defaultSiteContent.contact.title,
            lead: globalContact.lead || defaultSiteContent.contact.lead,
            actions: resolveItems(globalContact.actions, defaultSiteContent.contact.actions),
            meta: {
                eyebrow: globalContactMeta.eyebrow || defaultSiteContent.contact.meta.eyebrow,
                email: globalContactMeta.email || defaultSiteContent.contact.meta.email,
                copy: globalContactMeta.copy || defaultSiteContent.contact.meta.copy,
                note: globalContactMeta.note || defaultSiteContent.contact.meta.note,
            },
        },
    };
}

export const siteContent = getSiteContent();