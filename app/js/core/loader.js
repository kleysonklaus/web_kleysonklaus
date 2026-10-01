(function () {
    var currentScript = document.currentScript;
    var loaderUrl = currentScript && currentScript.src ? currentScript.src : window.location.href;

    function showFallback(message) {
        var root = document.querySelector('[data-app-root]');

        if (!root) {
            return;
        }

        root.innerHTML = '\n            <main class="section">\n                <div class="container">\n                    <div class="panel" style="padding: 2rem;">\n                        <p class="eyebrow">Error de carga</p>\n                        <h1>No se pudo inicializar la interfaz.</h1>\n                        <p>' + message + '</p>\n                    </div>\n                </div>\n            </main>\n        ';
    }

    function loadFallbackRuntime(reason, error) {
        var script = document.createElement('script');
        script.src = new URL('./runtime-fallback.js', loaderUrl).href;
        script.defer = true;

        script.onerror = function () {
            showFallback(reason);
        };

        document.head.appendChild(script);

        if (window.console && typeof window.console.warn === 'function') {
            window.console.warn(reason, error);
        }
    }

    function start() {
        try {
            var moduleUrl = new URL('./main.js', loaderUrl).href;
            var importMain = new Function('url', 'return import(url);');
            var result = importMain(moduleUrl);

            if (result && typeof result.catch === 'function') {
                result.catch(function (error) {
                    loadFallbackRuntime(
                        'La carga modular fallo y se activo el runtime de compatibilidad para mantener visible la interfaz.',
                        error
                    );

                    if (window.console && typeof window.console.error === 'function') {
                        window.console.error(error);
                    }
                });
            }
        } catch (error) {
            loadFallbackRuntime(
                'Este navegador o entorno no pudo cargar el entrypoint modular del sitio. Se intentara usar el runtime de compatibilidad.',
                error
            );

            if (window.console && typeof window.console.error === 'function') {
                window.console.error(error);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
}());