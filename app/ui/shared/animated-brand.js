const rootScope = typeof globalThis !== 'undefined' ? globalThis : window;

function defaultRenderAnimatedBrand(name, variantClass = '') {
    const letters = Array.from(name)
        .map((character, index) => {
            if (character === ' ') {
                return `<span class="brand__space" aria-hidden="true" style="--char-index: ${index};">&nbsp;</span>`;
            }

            return `<span class="brand__char" aria-hidden="true" style="--char-index: ${index};">${character}</span>`;
        })
        .join('');

    const className = ['brand__title', variantClass].filter(Boolean).join(' ');

    return `
        <span class="${className}" aria-label="${name}" data-text="${name}">
            <span class="brand__title-copy" aria-hidden="true">${letters}</span>
        </span>
    `;
}

export function renderAnimatedBrand(name, variantClass = '') {
    const helper = rootScope.__KK_RENDER_HELPERS__?.renderAnimatedBrand;
    return typeof helper === 'function' ? helper(name, variantClass) : defaultRenderAnimatedBrand(name, variantClass);
}