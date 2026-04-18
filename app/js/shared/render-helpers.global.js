(function (scope) {
    function buttonLink(options) {
        var href = options.href;
        var label = options.label;
        var variant = options.variant || 'primary';
        var extraClass = options.extraClass || '';
        var className = ['button', 'button--' + variant, extraClass].filter(Boolean).join(' ');

        return '<a class="' + className + '" href="' + href + '">' + label + '</a>';
    }

    function sectionIntro(options) {
        return '\n        <div class="section__intro">\n            <p class="eyebrow">' + options.eyebrow + '</p>\n            <h2>' + options.title + '</h2>\n            <p>' + options.copy + '</p>\n        </div>\n    ';
    }

    function renderAnimatedBrand(name, variantClass) {
        var letters = Array.from(name).map(function (character, index) {
            if (character === ' ') {
                return '<span class="brand__space" aria-hidden="true" style="--char-index: ' + index + ';">&nbsp;</span>';
            }

            return '<span class="brand__char" aria-hidden="true" style="--char-index: ' + index + ';">' + character + '</span>';
        }).join('');
        var className = ['brand__title', variantClass || ''].filter(Boolean).join(' ');

        return '\n        <span class="' + className + '" aria-label="' + name + '" data-text="' + name + '">\n            <span class="brand__title-copy" aria-hidden="true">' + letters + '</span>\n        </span>\n    ';
    }

    scope.__KK_RENDER_HELPERS__ = {
        buttonLink: buttonLink,
        sectionIntro: sectionIntro,
        renderAnimatedBrand: renderAnimatedBrand
    };
}(typeof globalThis !== 'undefined' ? globalThis : window));