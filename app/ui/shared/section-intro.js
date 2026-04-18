const rootScope = typeof globalThis !== 'undefined' ? globalThis : window;

function defaultSectionIntro({ eyebrow, title, copy }) {
    return `
        <div class="section__intro">
            <p class="eyebrow">${eyebrow}</p>
            <h2>${title}</h2>
            <p>${copy}</p>
        </div>
    `;
}

export function sectionIntro(options) {
    const helper = rootScope.__KK_RENDER_HELPERS__?.sectionIntro;
    return typeof helper === 'function' ? helper(options) : defaultSectionIntro(options);
}
