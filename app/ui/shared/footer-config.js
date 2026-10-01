const rootScope = typeof globalThis !== 'undefined' ? globalThis : window;

const defaultFooterConfig = {
    brand: {
        eyebrow: 'Enlaces',
        title: 'Kleyson Klaus',
        copy: 'Redes sociales',
    },
    navigationLinks: [
        { href: '#marca', label: 'Kleyson' },
        { href: '#aplicaciones', label: 'Aplicaciones' },
        { href: '#contacto', label: 'Contacto' },
    ],
    socialLinks: {},
    copyright: {
        owner: 'Kleyson Klaus',
        note: 'Todos los derechos reservados.',
    },
};

export const footerConfig = rootScope.__KK_FOOTER_CONFIG__ || defaultFooterConfig;