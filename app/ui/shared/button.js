const rootScope = typeof globalThis !== 'undefined' ? globalThis : window;

function defaultButtonLink({ href, label, variant = 'primary', extraClass = '' }) {
    const className = ['button', `button--${variant}`, extraClass].filter(Boolean).join(' ');
    return `<a class="${className}" href="${href}">${label}</a>`;
}

export function buttonLink(options) {
    const helper = rootScope.__KK_RENDER_HELPERS__?.buttonLink;
    return typeof helper === 'function' ? helper(options) : defaultButtonLink(options);
}
