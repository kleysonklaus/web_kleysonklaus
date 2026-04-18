(function () {
    var rootScope = typeof globalThis !== 'undefined' ? globalThis : window;

    function query(selector, scope) {
        return (scope || document).querySelector(selector);
    }

    function queryAll(selector, scope) {
        return Array.from((scope || document).querySelectorAll(selector));
    }

    function buttonLink(options) {
        var helpers = rootScope.__KK_RENDER_HELPERS__ || {};

        if (typeof helpers.buttonLink === 'function') {
            return helpers.buttonLink(options);
        }

        var href = options.href;
        var label = options.label;
        var variant = options.variant || 'primary';
        var extraClass = options.extraClass || '';
        var className = ['button', 'button--' + variant, extraClass].filter(Boolean).join(' ');
        return '<a class="' + className + '" href="' + href + '">' + label + '</a>';
    }

    function sectionIntro(options) {
        var helpers = rootScope.__KK_RENDER_HELPERS__ || {};

        if (typeof helpers.sectionIntro === 'function') {
            return helpers.sectionIntro(options);
        }

        return '\n        <div class="section__intro">\n            <p class="eyebrow">' + options.eyebrow + '</p>\n            <h2>' + options.title + '</h2>\n            <p>' + options.copy + '</p>\n        </div>\n    ';
    }

    var DEFAULT_SITE_CONTENT = {
        brand: {
            name: 'Kleyson Klaus'
        },
        navigationItems: [
            { href: '#marca', label: 'Kleyson' },
            { href: '#aplicaciones', label: 'Aplicaciones' },
            { href: '#contacto', label: 'Contacto' }
        ],
        hero: {
            title: 'Avanzando ...',
            lead: 'Desarrollo, publicicón y organización de un catalogo de aplicaciones.',
            stats: [
                { title: 'Soluciones', copy: 'Ágiles.' },
                { title: 'Autonomia', copy: 'Priorizando' },
                { title: 'Constancia', copy: 'Actualizaciones constantes' }
            ]
        },
        company: {
            section: {
                id: 'marca',
                eyebrow: 'Marca',
                title: 'Creando aplicaciones simples, eficientes y mantenibles a largo plazo.',
                copy: 'Un paso cada dia.'
            },
            pillars: [
                { kicker: 'Posicion', title: 'Nuevas Apps', copy: 'Creando nuevas apps con novedades' },
                { kicker: 'Catalogo', title: 'Linea principal', copy: 'Enfocada a soluciones apps moviles' },
                { kicker: 'Continuidad', title: 'Apps disponibles', copy: 'Con mantemiento constante y escuchando sugerencias' }
            ]
        },
        contact: {
            eyebrow: 'Contacto',
            title: 'Solicita información o envia tu sugerencia',
            lead: 'Escribir unicamente al correo disponibilizado. no se responderá otro modo de contacto.',
            actions: [
                { href: 'mailto:soporte@kleysonklaus.com', label: 'Escribir por correo', variant: 'primary' },
                { href: '#aplicaciones', label: 'Ver aplicaciones', variant: 'secondary' }
            ],
            meta: {
                eyebrow: 'Canal principal',
                email: 'soporte@kleysonklaus.com',
                copy: 'Usa este correo para pedir informacion de una app especifica o enviar una sugerencia puntual.',
                note: 'Soporte inicial, feedback y oportunidades de mejora.'
            }
        }
    };

    function cloneItems(items) {
        return items.map(function (item) {
            var result = {};

            Object.keys(item).forEach(function (key) {
                result[key] = item[key];
            });

            return result;
        });
    }

    function resolveItems(items, fallback) {
        return Array.isArray(items) && items.length ? cloneItems(items) : cloneItems(fallback);
    }

    function getSiteContent() {
        var globalContent = rootScope.__KK_SITE_CONTENT__ || {};
        var globalHero = globalContent.hero || {};
        var globalCompany = globalContent.company || {};
        var globalCompanySection = globalCompany.section || {};
        var globalContact = globalContent.contact || {};
        var globalContactMeta = globalContact.meta || {};

        return {
            brand: {
                name: globalContent.brand && globalContent.brand.name ? globalContent.brand.name : DEFAULT_SITE_CONTENT.brand.name
            },
            navigationItems: resolveItems(globalContent.navigationItems, DEFAULT_SITE_CONTENT.navigationItems),
            hero: {
                title: globalHero.title || DEFAULT_SITE_CONTENT.hero.title,
                lead: globalHero.lead || DEFAULT_SITE_CONTENT.hero.lead,
                stats: resolveItems(globalHero.stats, DEFAULT_SITE_CONTENT.hero.stats)
            },
            company: {
                section: {
                    id: globalCompanySection.id || DEFAULT_SITE_CONTENT.company.section.id,
                    eyebrow: globalCompanySection.eyebrow || DEFAULT_SITE_CONTENT.company.section.eyebrow,
                    title: globalCompanySection.title || DEFAULT_SITE_CONTENT.company.section.title,
                    copy: globalCompanySection.copy || DEFAULT_SITE_CONTENT.company.section.copy
                },
                pillars: resolveItems(globalCompany.pillars, DEFAULT_SITE_CONTENT.company.pillars)
            },
            contact: {
                eyebrow: globalContact.eyebrow || DEFAULT_SITE_CONTENT.contact.eyebrow,
                title: globalContact.title || DEFAULT_SITE_CONTENT.contact.title,
                lead: globalContact.lead || DEFAULT_SITE_CONTENT.contact.lead,
                actions: resolveItems(globalContact.actions, DEFAULT_SITE_CONTENT.contact.actions),
                meta: {
                    eyebrow: globalContactMeta.eyebrow || DEFAULT_SITE_CONTENT.contact.meta.eyebrow,
                    email: globalContactMeta.email || DEFAULT_SITE_CONTENT.contact.meta.email,
                    copy: globalContactMeta.copy || DEFAULT_SITE_CONTENT.contact.meta.copy,
                    note: globalContactMeta.note || DEFAULT_SITE_CONTENT.contact.meta.note
                }
            }
        };
    }

    function getFooterConfig() {
        return rootScope.__KK_FOOTER_CONFIG__ || FOOTER_CONFIG;
    }

    function buildAppStyleVars(theme) {
        var currentTheme = theme || {};
        var accent = currentTheme.accent || '#6be3c1';
        var accentStrong = currentTheme.accentStrong || '#2fb8e0';
        var glow = currentTheme.glow || 'rgba(107, 227, 193, 0.18)';

        return '--app-accent: ' + accent + '; --app-accent-strong: ' + accentStrong + '; --app-glow: ' + glow + ';';
    }

    var STORE_META = {
        googlePlay: {
            label: 'Google Play',
            badge: 'Android',
            copy: 'Ficha oficial disponible para instalacion inmediata desde Android.',
            icon: '\n            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">\n                <path d="M3.69 2.21 13.42 12 3.7 21.79a2.24 2.24 0 0 1-.19-.91V3.12c0-.33.07-.64.18-.91Z" fill="currentColor" opacity="0.72" />\n                <path d="m16.55 15.15-3.13-3.15L3.69 2.21c.3-.56.8-1 1.44-1.18l11.42 6.49Z" fill="currentColor" opacity="0.92" />\n                <path d="M16.55 15.15 5.13 21.64c-.63-.18-1.14-.62-1.43-1.18L13.42 12l3.13 3.15Z" fill="currentColor" />\n                <path d="M20.47 10.69c1.37.78 1.37 1.84 0 2.62l-3.92 1.84L13.42 12l3.13-3.15 3.92 1.84Z" fill="currentColor" opacity="0.58" />\n            </svg>\n        '
        },
        appStore: {
            label: 'App Store',
            badge: 'iPhone / iPad',
            copy: 'La version para iPhone se anunciara cuando la publicacion este lista.',
            icon: '\n            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">\n                <path d="M14.88 3.36c.78-.95 1.31-2.23 1.17-3.36-1.12.05-2.46.74-3.25 1.68-.72.83-1.35 2.16-1.18 3.42 1.25.1 2.48-.64 3.26-1.74Z" fill="currentColor" />\n                <path d="M19.02 12.77c.03-2.47 2.02-3.65 2.11-3.71-1.15-1.68-2.94-1.91-3.57-1.94-1.52-.16-2.97.89-3.74.89-.78 0-1.97-.86-3.24-.84-1.67.02-3.2.97-4.06 2.47-1.74 3.02-.44 7.49 1.25 9.93.83 1.19 1.81 2.53 3.1 2.48 1.25-.05 1.72-.8 3.23-.8s1.93.8 3.26.77c1.35-.02 2.2-1.22 3.02-2.42.95-1.38 1.34-2.73 1.36-2.8-.03-.01-2.62-1-2.72-4.03Z" fill="currentColor" />\n            </svg>\n        '
        }
    };

    function escapeAttribute(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    function padNumber(value) {
        return value < 10 ? '0' + value : String(value);
    }

    function appAsset(slug, fileName) {
        return 'app/assets/images/apps/' + slug + '/' + fileName;
    }

    function buildScreenshots(slug, items) {
        return items.map(function (item, index) {
            var result = {
                src: appAsset(slug, 'screen-' + padNumber(index + 1) + '.webp')
            };

            Object.keys(item).forEach(function (key) {
                result[key] = item[key];
            });

            return result;
        });
    }

    function buildStoreConfig(href, isEnabledLink, overrides) {
        var result = {
            href: href,
            isEnabledLink: isEnabledLink
        };

        Object.keys(overrides || {}).forEach(function (key) {
            result[key] = overrides[key];
        });

        return result;
    }

    function renderBrandTitle(name, variantClass) {
        var helpers = rootScope.__KK_RENDER_HELPERS__ || {};

        if (typeof helpers.renderAnimatedBrand === 'function') {
            return helpers.renderAnimatedBrand(name, variantClass);
        }

        var letters = Array.from(name).map(function (character, index) {
            if (character === ' ') {
                return '<span class="brand__space" aria-hidden="true" style="--char-index: ' + index + ';">&nbsp;</span>';
            }

            return '<span class="brand__char" aria-hidden="true" style="--char-index: ' + index + ';">' + character + '</span>';
        }).join('');
        var className = ['brand__title', variantClass || ''].filter(Boolean).join(' ');

        return '\n            <span class="' + className + '" aria-label="' + name + '" data-text="' + name + '">\n                <span class="brand__title-copy" aria-hidden="true">' + letters + '</span>\n            </span>\n        ';
    }

    function renderStoreCard(appTitle, storeKey, store) {
        var meta = STORE_META[storeKey];
        var isEnabledLink = Boolean(store.isEnabledLink);
        var tooltip = escapeAttribute(store.tooltip || 'Aun no esta disponible en esta plataforma.');
        var cardClassName = ['app-store-card', 'app-store-card--' + storeKey, isEnabledLink ? 'app-store-card--enabled' : 'app-store-card--disabled'].join(' ');
        var content = '\n                <div class="app-store-card__top">\n                    <span class="app-store-card__platform">\n                        <span class="app-store-card__icon">' + meta.icon + '</span>\n                        <span class="app-store-card__platform-copy">\n                            <strong class="app-store-card__title">' + meta.label + '</strong>\n                            <span class="app-store-card__badge">' + meta.badge + '</span>\n                        </span>\n                    </span>\n                    <span class="app-store-card__status">' + (isEnabledLink ? 'Disponible' : 'Proximamente') + '</span>\n                </div>\n                <p class="app-store-card__copy">' + (store.copy || meta.copy) + '</p>\n                <span class="app-store-card__action">' + (isEnabledLink ? 'Abrir ficha oficial' : 'Ver estado de lanzamiento') + '</span>\n            ';

        if (isEnabledLink) {
            return '\n                <a class="' + cardClassName + '" href="' + store.href + '" target="_blank" rel="noreferrer" aria-label="Abrir ' + appTitle + ' en ' + meta.label + '">\n                    ' + content + '\n                </a>\n            ';
        }

        return '\n            <div class="' + cardClassName + '" tabindex="0" role="note" data-tooltip="' + tooltip + '" aria-label="' + meta.label + ' aun no disponible para ' + appTitle + '">\n                ' + content + '\n            </div>\n        ';
    }

    var unavailableStoreMessage = 'Aun no esta disponible en esta plataforma.';
    var FOOTER_CONFIG = {
        brand: {
            eyebrow: 'Enlaces',
            title: 'Kleyson Klaus',
            copy: 'Redes sociales'
        },
        navigationLinks: [
            { href: '#marca', label: 'Kleyson' },
            { href: '#aplicaciones', label: 'Aplicaciones' },
            { href: '#contacto', label: 'Contacto' }
        ],
        socialLinks: {},
        copyright: {
            owner: 'Kleyson Klaus',
            note: 'Todos los derechos reservados.'
        }
    };

    function appShowcasePanel(options) {
        var highlightList = options.highlights.map(function (item) {
            return '<li>' + item + '</li>';
        }).join('');
        var statsMarkup = options.stats.map(function (item) {
            return '\n                <article class="app-showcase-panel__stat">\n                    <strong>' + item.value + '</strong>\n                    <span>' + item.label + '</span>\n                </article>\n            ';
        }).join('');
        var storesMarkup = ['googlePlay', 'appStore'].filter(function (storeKey) {
            return options.stores && options.stores[storeKey];
        }).map(function (storeKey) {
            return renderStoreCard(options.title, storeKey, options.stores[storeKey]);
        }).join('');
        var screenshotsMarkup = options.screenshots.map(function (item) {
            return '\n                <figure class="app-shot-card">\n                    <div class="app-shot-card__frame">\n                        <img src="' + item.src + '" alt="' + item.alt + '" loading="lazy">\n                    </div>\n                    <figcaption class="app-shot-card__caption">\n                        <strong>' + item.title + '</strong>\n                        <p>' + item.copy + '</p>\n                    </figcaption>\n                </figure>\n            ';
        }).join('');

        return '\n        <article class="app-showcase-panel" id="' + options.id + '" data-app-panel style="' + buildAppStyleVars(options.theme) + '">\n            <div class="container app-showcase-panel__shell">\n                <div class="app-showcase-panel__hero">\n                    <div class="app-showcase-panel__brand">\n                        <div class="app-showcase-panel__copy">\n                            <span class="app-card__tag">' + options.tag + '</span>\n                            <p class="eyebrow">' + options.eyebrow + '</p>\n                            <h3>' + options.title + '</h3>\n                            <p class="app-showcase-panel__lead"><em>' + options.copy + '</em></p>\n                        </div>\n                        <div class="app-showcase-panel__logo-shell">\n                            <img class="app-showcase-panel__logo" src="' + options.logoSrc + '" alt="' + options.logoAlt + '" loading="lazy">\n                        </div>\n                    </div>\n                    <aside class="panel app-showcase-panel__support" aria-label="Resumen de la aplicacion ' + options.title + '">\n                        <span class="panel__label">Ficha</span>\n                        <div class="app-showcase-panel__stats">' + statsMarkup + '</div>\n                        <ul class="app-showcase-panel__list">' + highlightList + '</ul>\n                        <div class="app-showcase-panel__stores-block">\n                            <div class="app-showcase-panel__stores-head">\n                                <strong>Play Store y App Store</strong>\n                                <p>Controla los enlaces y su disponibilidad editando el objeto stores de cada app.</p>\n                            </div>\n                            <div class="app-showcase-panel__stores">' + storesMarkup + '</div>\n                        </div>\n                    </aside>\n                </div>\n                <div class="app-showcase-panel__gallery-block">\n                    <div class="app-showcase-panel__gallery-heading">\n                        <p class="eyebrow">Capturas y mensajes</p>\n                        <p>Desliza horizontalmente para revisar pantallas clave y el mensaje que acompana cada vista.</p>\n                    </div>\n                    <div class="app-showcase-panel__gallery" aria-label="Capturas de pantalla de ' + options.title + '">\n                        ' + screenshotsMarkup + '\n                    </div>\n                </div>\n            </div>\n        </article>\n    ';
    }

    function siteHeader() {
        var siteContent = getSiteContent();
        var navigation = siteContent.navigationItems.map(function (item) {
            return '<a href="' + item.href + '">' + item.label + '</a>';
        }).join('');

        return '\n        <header class="site-header">\n            <div class="container site-header__inner">\n                <a class="brand" href="#inicio" aria-label="Volver al inicio de Kleyson Klaus">\n                    ' + renderBrandTitle(siteContent.brand.name, 'brand__title--header') + '\n                </a>\n                <nav class="site-nav" aria-label="Principal">' + navigation + '</nav>\n                ' + buttonLink({ href: '#contacto', label: 'Contacto', variant: 'ghost' }) + '\n            </div>\n        </header>\n    ';
    }

    function heroSection() {
        var hero = getSiteContent().hero;
        var stats = hero.stats.map(function (item) {
            return '\n                <article class="stat-card">\n                    <strong>' + item.title + '</strong>\n                    <span>' + item.copy + '</span>\n                </article>\n            ';
        }).join('');

        return '\n        <section class="hero" id="inicio">\n            <div class="container hero__layout">\n                <div>\n                    <h1>' + hero.title + '</h1>\n                    <p class="hero__lead">' + hero.lead + '</p>\n                    <div class="hero__actions">\n                        ' + buttonLink({ href: '#aplicaciones', label: 'Explorar aplicaciones', variant: 'primary' }) + '\n                        ' + buttonLink({ href: '#contacto', label: 'Ir al contacto', variant: 'secondary' }) + '\n                    </div>\n                    <div class="hero__stats" aria-label="Indicadores principales">' + stats + '</div>\n                </div>\n            </div>\n        </section>\n    ';
    }

    function companySection() {
        var company = getSiteContent().company;
        var cards = company.pillars.map(function (item) {
            return '\n                <article class="capability">\n                    <span class="capability__kicker">' + item.kicker + '</span>\n                    <h3>' + item.title + '</h3>\n                    <p>' + item.copy + '</p>\n                </article>\n            ';
        }).join('');

        return '\n        <section class="section" id="' + company.section.id + '">\n            <div class="container">\n                ' + sectionIntro(company.section) + '\n                <div class="capabilities">' + cards + '</div>\n            </div>\n        </section>\n    ';
    }

    function buildAppsCatalog() {
        return [
            {
                id: 'inventario-facil',
                tag: 'Herramientas',
                eyebrow: 'Inventario y operaciones',
                title: 'Inventario Facil',
                copy: 'Gestiona productos, servicios y movimientos de stock con una experiencia clara, rapida y preparada para pequenos negocios que necesitan orden desde el primer uso.',
                logoSrc: appAsset('inventario-facil', 'logo.png'),
                logoAlt: 'Logo de Inventario Facil',
                highlights: ['Ingreso rapido de productos y servicios sin friccion visual.', 'Organizacion por carpetas, grupos e imagenes para reconocimiento inmediato.', 'Colaboracion en tiempo real con roles para distintos perfiles del negocio.'],
                stats: [{ label: 'Descargas', value: '100k+' }, { label: 'Calificacion', value: '4.5' }, { label: 'Actualizacion', value: '16 abr 2026' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.kleysonklaus.inventario_facil&hl=es_PE', true, { copy: 'Disponible para instalar en Android desde su ficha oficial de Google Play.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La version para App Store se encuentra en preparacion.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('inventario-facil', [
                    { alt: 'Captura de Inventario Facil con panel principal', title: 'Control inmediato', copy: 'Una vista inicial enfocada en leer el inventario con rapidez y entender el estado general sin ruido.' },
                    { alt: 'Captura de Inventario Facil con modulo de productos', title: 'Productos bien organizados', copy: 'El sistema permite ordenar articulos por grupos y carpetas para trabajar con mas claridad.' },
                    { alt: 'Captura de Inventario Facil con movimientos de stock', title: 'Movimientos registrados', copy: 'Cada ingreso, venta o salida queda documentado para seguir la operacion con seguridad.' },
                    { alt: 'Captura de Inventario Facil con apoyo visual del producto', title: 'Reconocimiento visual', copy: 'Las imagenes por inventario ayudan a encontrar productos y servicios de un solo vistazo.' },
                    { alt: 'Captura de Inventario Facil con colaboracion en equipo', title: 'Trabajo en equipo', copy: 'La colaboracion en tiempo real facilita operar con vendedores, observadores y gerentes.' },
                    { alt: 'Captura de Inventario Facil con estadisticas y resumenes', title: 'Lectura del negocio', copy: 'Las estadisticas basicas muestran movimientos y ventas para tomar decisiones con mas contexto.' }
                ]),
                theme: { accent: '#6be3c1', accentStrong: '#2fb8e0', glow: 'rgba(107, 227, 193, 0.18)' }
            },
            {
                id: 'guia-aymara',
                tag: 'Educacion',
                eyebrow: 'Aprendizaje linguistico',
                title: 'Guia Aymara - Aprende Facil',
                copy: 'Una guia de estudio pensada para aprender vocabulario, frases y traducciones en aymara con una navegacion simple y util para consulta diaria.',
                logoSrc: appAsset('guia-aymara', 'logo.webp'),
                logoAlt: 'Logo de Guia Aymara',
                highlights: ['Incluye un diccionario amplio para buscar terminos y expresiones frecuentes.', 'Presenta frases y ejemplos orientados a sesiones cortas de estudio continuo.', 'Integra un traductor que ayuda a resolver dudas sin abandonar el flujo.'],
                stats: [{ label: 'Descargas', value: '10k+' }, { label: 'Categoria', value: 'Educacion' }, { label: 'Actualizacion', value: '29 jul 2022' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.lastpangos.nueva_guia_aymara', true, { copy: 'Disponible en Google Play para estudio y consulta desde Android.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La version para App Store todavia no fue publicada.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('guia-aymara', [
                    { alt: 'Captura de Guia Aymara con portada de aprendizaje', title: 'Inicio de aprendizaje', copy: 'La portada conduce rapido hacia vocabulario, frases y herramientas de consulta.' },
                    { alt: 'Captura de Guia Aymara con terminos organizados', title: 'Terminos ordenados', copy: 'El contenido se organiza para estudiar con menos friccion y encontrar palabras con rapidez.' },
                    { alt: 'Captura de Guia Aymara con traductor integrado', title: 'Traductor integrado', copy: 'El traductor acompana el aprendizaje y acelera la resolucion de dudas puntuales.' },
                    { alt: 'Captura de Guia Aymara con vista de consulta', title: 'Consulta rapida', copy: 'Cada vista busca reducir el tiempo entre la duda del usuario y la respuesta correcta.' },
                    { alt: 'Captura de Guia Aymara con material complementario', title: 'Material de apoyo', copy: 'La app combina estudio guiado y consulta practica en una sola experiencia.' },
                    { alt: 'Captura de Guia Aymara con seguimiento de estudio', title: 'Uso continuo', copy: 'El recorrido visual favorece sesiones breves y repetibles para memorizar mejor.' }
                ]),
                theme: { accent: '#ffd166', accentStrong: '#ff9f43', glow: 'rgba(255, 209, 102, 0.20)' }
            },
            {
                id: 'oniichat',
                tag: 'Entretenimiento',
                eyebrow: 'Chat y personajes',
                title: 'OniiChat - Habla a tu Waifu',
                copy: 'Una experiencia conversacional centrada en personajes, historias y sesiones de chat para usuarios que buscan entretenimiento con identidad visual marcada.',
                logoSrc: appAsset('oniichat', 'logo.webp'),
                logoAlt: 'Logo de OniiChat',
                highlights: ['Permite iniciar conversaciones con distintos personajes desde una interfaz directa.', 'Refuerza personalidad y narrativa con perfiles visuales y fichas descriptivas.', 'Organiza el acceso a chats y pantallas de detalle con una navegacion clara.'],
                stats: [{ label: 'Descargas', value: '1k+' }, { label: 'Categoria', value: 'Entretenimiento' }, { label: 'Actualizacion', value: '28 may 2024' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.kleysonklaus.oniichat', true, { copy: 'Disponible en Google Play para Android con acceso directo a la ficha oficial.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La edicion para App Store sigue pendiente de lanzamiento.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('oniichat', [
                    { alt: 'Captura de OniiChat con personajes destacados', title: 'Personajes visibles', copy: 'La primera pantalla prioriza descubrir personajes y entrar rapido a cada conversacion.' },
                    { alt: 'Captura de OniiChat con chat abierto', title: 'Conversacion en foco', copy: 'El chat ocupa el centro de la experiencia para mantener el intercambio sin distracciones.' },
                    { alt: 'Captura de OniiChat con detalles del personaje', title: 'Perfiles con contexto', copy: 'Cada personaje suma informacion visual para reforzar tono, historia y personalidad.' },
                    { alt: 'Captura de OniiChat con navegacion interna', title: 'Navegacion compacta', copy: 'Las vistas alternan entre chat y detalle sin romper el ritmo de uso.' },
                    { alt: 'Captura de OniiChat con seleccion de personaje', title: 'Seleccion rapida', copy: 'El catalogo facilita cambiar de personaje y probar distintas conversaciones.' },
                    { alt: 'Captura de OniiChat con interfaz final', title: 'Sesion continua', copy: 'La estructura permite volver al chat una y otra vez con una entrada simple.' }
                ]),
                theme: { accent: '#ff8fb1', accentStrong: '#ff5c8a', glow: 'rgba(255, 143, 177, 0.18)' }
            },
            {
                id: 'relatos-del-peru',
                tag: 'Lectura',
                eyebrow: 'Cultura y narrativa',
                title: 'Relatos del Peru',
                copy: 'Una biblioteca movil orientada a cuentos, mitos y leyendas del Peru, pensada para lectura continua desde una interfaz amable y editorial.',
                logoSrc: appAsset('relatos-del-peru', 'logo.webp'),
                logoAlt: 'Logo de Relatos del Peru',
                highlights: ['Reune relatos tradicionales en una sola app enfocada en lectura cultural.', 'Organiza historias para entrar rapido a mitos, cuentos y leyendas.', 'Presenta una experiencia ligera para leer desde el telefono sin friccion.'],
                stats: [{ label: 'Descargas', value: '5k+' }, { label: 'Categoria', value: 'Libros' }, { label: 'Actualizacion', value: '02 abr 2022' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.lastpangos.cuentos_mitos_leyendas_peru', true, { copy: 'Disponible en Google Play para lectura desde Android.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La publicacion en App Store todavia no esta disponible.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('relatos-del-peru', [
                    { alt: 'Captura de Relatos del Peru con portada', title: 'Entrada editorial', copy: 'La portada presenta el tono cultural de la app y orienta al lector desde el inicio.' },
                    { alt: 'Captura de Relatos del Peru con lista de relatos', title: 'Catalogo de historias', copy: 'Las historias se ordenan para entrar rapido al contenido sin pasos innecesarios.' },
                    { alt: 'Captura de Relatos del Peru con lectura abierta', title: 'Lectura continua', copy: 'El formato de lectura busca mantener foco y ritmo en pantallas pequenas.' },
                    { alt: 'Captura de Relatos del Peru con navegacion de categorias', title: 'Mitos y leyendas', copy: 'La navegacion separa tipos de relatos para facilitar la exploracion del catalogo.' },
                    { alt: 'Captura de Relatos del Peru con seccion destacada', title: 'Contenido destacado', copy: 'La seleccion visual ayuda a descubrir historias relevantes con menos esfuerzo.' },
                    { alt: 'Captura de Relatos del Peru con cierre de lectura', title: 'Sesion ligera', copy: 'Cada pantalla esta pensada para volver a leer en cualquier momento desde el movil.' }
                ]),
                theme: { accent: '#ffb86c', accentStrong: '#ff7f50', glow: 'rgba(255, 184, 108, 0.20)' }
            },
            {
                id: 'pentabra',
                tag: 'Palabras',
                eyebrow: 'Juego verbal',
                title: 'Pentabra',
                copy: 'Un juego corto de palabras ocultas que apuesta por partidas rapidas, lectura clara del tablero y feedback inmediato en cada intento.',
                logoSrc: appAsset('pentabra', 'logo.webp'),
                logoAlt: 'Logo de Pentabra',
                highlights: ['Propone descubrir una palabra oculta en pocos intentos con dinamica directa.', 'Usa pistas visuales por color para que el aprendizaje del juego sea inmediato.', 'Mantiene una interfaz ligera para sesiones rapidas desde el telefono.'],
                stats: [{ label: 'Descargas', value: '10+' }, { label: 'Categoria', value: 'Palabras' }, { label: 'Actualizacion', value: '24 mar 2022' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=com.lastpangos.pentabra', true, { copy: 'Disponible en Google Play para jugar desde Android.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La version para App Store aun no fue liberada.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('pentabra', [
                    { alt: 'Captura de Pentabra con tablero principal', title: 'Tablero limpio', copy: 'El juego muestra desde el inicio una lectura clara del tablero y del reto actual.' },
                    { alt: 'Captura de Pentabra con intento en curso', title: 'Pistas por color', copy: 'Cada intento devuelve informacion visual para acotar la palabra correcta.' },
                    { alt: 'Captura de Pentabra con progreso del jugador', title: 'Partidas breves', copy: 'La estructura invita a jugar rondas cortas y repetir sin desgaste visual.' },
                    { alt: 'Captura de Pentabra con estado final', title: 'Cierre inmediato', copy: 'El resultado se entiende rapido para volver a empezar otra partida al instante.' }
                ]),
                theme: { accent: '#ffd166', accentStrong: '#f4a261', glow: 'rgba(255, 209, 102, 0.20)' }
            },
            {
                id: 'tuidy-asistencia-digital',
                tag: 'Herramientas',
                eyebrow: 'Control de asistencia',
                title: 'Tuidy - Asistencia Digital',
                copy: 'Una app orientada a registrar asistencia, monitorear presencia y comunicar eventos en tiempo real para instituciones que necesitan trazabilidad.',
                logoSrc: appAsset('tuidy-asistencia-digital', 'logo.webp'),
                logoAlt: 'Logo de Tuidy',
                highlights: ['Permite llevar control de asistencia con foco operativo y visual claro.', 'Refuerza el seguimiento con alertas y vistas de consulta para responsables.', 'Ordena informacion institucional en una experiencia preparada para uso cotidiano.'],
                stats: [{ label: 'Descargas', value: '10+' }, { label: 'Categoria', value: 'Herramientas' }, { label: 'Estado', value: 'Piloto' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.kleysonklaus.school_student_system', true, { copy: 'Disponible en Google Play para instituciones que operan desde Android.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La salida para App Store sigue pendiente.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('tuidy-asistencia-digital', [
                    { alt: 'Captura de Tuidy con panel principal', title: 'Panel operativo', copy: 'La pantalla inicial resume asistencia y acciones clave para trabajo institucional.' },
                    { alt: 'Captura de Tuidy con registro de asistencia', title: 'Registro ordenado', copy: 'El flujo de asistencia busca registrar informacion con rapidez y menos errores.' },
                    { alt: 'Captura de Tuidy con detalle de estudiante', title: 'Seguimiento puntual', copy: 'Las vistas de detalle ayudan a revisar estados individuales sin salir del sistema.' },
                    { alt: 'Captura de Tuidy con notificaciones', title: 'Avisos en tiempo real', copy: 'Las notificaciones refuerzan seguimiento y respuesta desde el telefono.' },
                    { alt: 'Captura de Tuidy con resumen institucional', title: 'Lectura institucional', copy: 'Los indicadores permiten entender rapidamente el estado general de la asistencia.' },
                    { alt: 'Captura de Tuidy con navegacion interna', title: 'Navegacion de uso diario', copy: 'Cada pantalla esta pensada para operar todos los dias desde un contexto real.' }
                ]),
                theme: { accent: '#7dd3fc', accentStrong: '#38bdf8', glow: 'rgba(125, 211, 252, 0.20)' }
            },
            {
                id: 'quiz-heroes-quiz-ia',
                tag: 'Casual',
                eyebrow: 'Trivia y busqueda visual',
                title: 'Quiz Heroes. Quiz IA',
                copy: 'Una propuesta casual que mezcla busqueda, trivia y progresion ligera para sesiones de juego breves con fuerte apoyo visual.',
                logoSrc: appAsset('quiz-heroes-quiz-ia', 'logo.webp'),
                logoAlt: 'Logo de Quiz Heroes',
                highlights: ['Combina dinamicas de trivia con exploracion visual en un formato accesible.', 'Presenta retos cortos para jugar desde el movil sin curva de entrada alta.', 'Ordena niveles y escenas con una lectura clara del objetivo en pantalla.'],
                stats: [{ label: 'Descargas', value: '1k+' }, { label: 'Categoria', value: 'Casual' }, { label: 'Actualizacion', value: '05 abr 2022' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=com.kleysonklaus.quien_es_quien', true, { copy: 'Disponible en Google Play con acceso inmediato a la ficha oficial.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La salida en App Store todavia no fue habilitada.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('quiz-heroes-quiz-ia', [
                    { alt: 'Captura de Quiz Heroes con inicio del juego', title: 'Inicio del reto', copy: 'La portada del juego deja claro el objetivo y la entrada a cada ronda.' },
                    { alt: 'Captura de Quiz Heroes con tablero visual', title: 'Busqueda visual', copy: 'La escena principal concentra la atencion en encontrar y resolver con rapidez.' },
                    { alt: 'Captura de Quiz Heroes con progreso', title: 'Progreso por niveles', copy: 'La estructura de niveles permite jugar en sesiones cortas y acumulativas.' },
                    { alt: 'Captura de Quiz Heroes con pantalla final', title: 'Feedback inmediato', copy: 'El resultado de cada ronda se entiende rapido para seguir con el siguiente reto.' }
                ]),
                theme: { accent: '#fda4af', accentStrong: '#fb7185', glow: 'rgba(253, 164, 175, 0.18)' }
            },
            {
                id: 'match-heroes-2',
                tag: 'Puzzle',
                eyebrow: 'Memoria y tablero',
                title: 'Match Heroes 2',
                copy: 'Un juego de memoria basado en parejas y reconocimiento visual, planteado para partidas agiles con tableros simples y lectura inmediata.',
                logoSrc: appAsset('match-heroes-2', 'logo.webp'),
                logoAlt: 'Logo de Match Heroes 2',
                highlights: ['Plantea dinamicas de memoria con tableros faciles de entender desde el primer segundo.', 'Combina ritmo rapido, repeticion y reconocimiento visual en partidas breves.', 'Mantiene una interfaz clara para jugar en movil sin sobrecargar la pantalla.'],
                stats: [{ label: 'Descargas', value: '100+' }, { label: 'Categoria', value: 'Puzzle' }, { label: 'Actualizacion', value: '27 mar 2022' }],
                stores: {
                    googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=com.kleysonklaus.midota', true, { copy: 'Disponible en Google Play para jugar desde Android.' }),
                    appStore: buildStoreConfig('', false, { copy: 'La version para App Store sigue en espera de publicacion.', tooltip: unavailableStoreMessage })
                },
                screenshots: buildScreenshots('match-heroes-2', [
                    { alt: 'Captura de Match Heroes 2 con menu principal', title: 'Entrada al tablero', copy: 'El inicio conduce rapido a la partida con una lectura simple del juego.' },
                    { alt: 'Captura de Match Heroes 2 con tablero activo', title: 'Memoria en accion', copy: 'Las cartas y parejas se muestran con suficiente claridad para reaccionar rapido.' },
                    { alt: 'Captura de Match Heroes 2 con avance de nivel', title: 'Progreso constante', copy: 'Cada ronda entrega avance visible para sostener el ritmo de juego.' },
                    { alt: 'Captura de Match Heroes 2 con pantalla intermedia', title: 'Partidas repetibles', copy: 'La estructura permite volver a jugar sin friccion y con objetivos claros.' },
                    { alt: 'Captura de Match Heroes 2 con interfaz de memoria', title: 'Reconocimiento visual', copy: 'La composicion del tablero favorece recordar patrones y parejas con rapidez.' },
                    { alt: 'Captura de Match Heroes 2 con cierre de ronda', title: 'Cierre ligero', copy: 'El resultado de cada intento deja lista la siguiente partida sin sobrecarga.' }
                ]),
                theme: { accent: '#c4b5fd', accentStrong: '#8b5cf6', glow: 'rgba(196, 181, 253, 0.18)' }
            }
        ];
    }

    function appsSection() {
        var apps = buildAppsCatalog();
        var cards = apps.map(function (app) {
            return appShowcasePanel(app);
        }).join('');

        return '\n        <section class="section apps-section" id="aplicaciones" data-apps-section>\n            <div class="container apps-section__intro">\n                ' + sectionIntro({ eyebrow: 'Aplicaciones', title: 'Apps disponibles', copy: 'Disponibles inmediatamante' }) + '\n            </div>\n            <div class="apps-showcase" data-apps-showcase>' + cards + '</div>\n            <div class="container apps-section__footnote">\n                <p>\n                    Para agregar o ajustar una app edita su objeto en esta misma lista: stores.googlePlay.href, stores.googlePlay.isEnabledLink, stores.appStore.href y stores.appStore.isEnabledLink controlan el click, el estado visual y la presencia de cada boton de tienda.\n                </p>\n            </div>\n        </section>\n    ';
    }

    function contactSection() {
        var contact = getSiteContent().contact;
        var actions = contact.actions.map(function (item) {
            return buttonLink(item);
        }).join('');

        return '\n        <section class="section contact-section" id="contacto">\n            <div class="container">\n                <div class="contact-minimal panel">\n                    <div class="contact-minimal__copy">\n                        <p class="eyebrow">' + contact.eyebrow + '</p>\n                        <h2>' + contact.title + '</h2>\n                        <p class="contact-minimal__lead">' + contact.lead + '</p>\n                        <div class="contact-minimal__actions">' + actions + '</div>\n                    </div>\n                    <aside class="contact-minimal__meta" aria-label="Canal principal de contacto">\n                        <span class="contact-minimal__eyebrow">' + contact.meta.eyebrow + '</span>\n                        <a class="contact-minimal__link" data-email-address="' + contact.meta.email + '">' + contact.meta.email + '</a>\n                        <p>' + contact.meta.copy + '</p>\n                        <span class="contact-minimal__note">' + contact.meta.note + '</span>\n                    </aside>\n                </div>\n            </div>\n        </section>\n    ';
    }

    function siteFooter() {
        var footerConfig = getFooterConfig();
        var links = footerConfig.navigationLinks.map(function (item) {
            return '<a href="' + item.href + '">' + item.label + '</a>';
        }).join('');
        var socialLinks = Object.keys(footerConfig.socialLinks).map(function (key) {
            return footerConfig.socialLinks[key];
        }).filter(function (item) {
            return item.enabled;
        }).map(function (item, index) {
            return '\n                <a class="social-link" href="' + item.href + '" target="_blank" rel="noreferrer" style="--social-color: ' + item.color + '; --social-index: ' + index + ';" aria-label="Abrir ' + item.label + '" title="' + item.label + '">\n                    <span class="social-link__icon" aria-hidden="true">' + item.icon + '</span>\n                    <span class="social-link__label">' + item.label + '</span>\n                </a>\n            ';
        }).join('');
        var currentYear = new Date().getFullYear();

        return '\n        <footer class="footer">\n            <div class="container">\n                <section class="footer-band" aria-label="Footer principal">\n                    <div class="footer-band__brand">\n                        <p class="eyebrow">' + footerConfig.brand.eyebrow + '</p>\n                        <h3 class="footer-band__title">' + renderBrandTitle(footerConfig.brand.title, 'brand__title--footer') + '</h3>\n                        <p>' + footerConfig.brand.copy + '</p>\n                    </div>\n                    <nav class="footer-band__nav" aria-label="Navegacion secundaria">' + links + '</nav>\n                    ' + (socialLinks ? '<div class="footer-band__socials" aria-label="Redes sociales">' + socialLinks + '</div>' : '') + '\n                </section>\n                <section class="footer-copyright" aria-label="Copyright">\n                    <p>Copyright © ' + currentYear + ' ' + footerConfig.copyright.owner + '. ' + footerConfig.copyright.note + '</p>\n                </section>\n            </div>\n        </footer>\n    ';
    }

    function homePage() {
        return '\n        ' + siteHeader() + '\n        <main>\n            ' + heroSection() + '\n            ' + companySection() + '\n            ' + appsSection() + '\n            ' + contactSection() + '\n        </main>\n        ' + siteFooter() + '\n    ';
    }

    function renderApp() {
        var root = query('[data-app-root]');
        if (!root) {
            return;
        }

        root.innerHTML = homePage();
    }

    function initNavigation() {
        var navLinks = queryAll('.site-nav a[href^="#"]');
        var sections = navLinks.map(function (link) {
            return document.querySelector(link.getAttribute('href'));
        }).filter(Boolean);

        if (!navLinks.length || !sections.length || !('IntersectionObserver' in window)) {
            return;
        }

        var linkById = new Map(navLinks.map(function (link) {
            return [link.getAttribute('href').slice(1), link];
        }));

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                navLinks.forEach(function (link) {
                    link.removeAttribute('aria-current');
                });

                var activeLink = linkById.get(entry.target.id);
                if (activeLink) {
                    activeLink.setAttribute('aria-current', 'page');
                }
            });
        }, {
            rootMargin: '-30% 0px -55% 0px',
            threshold: 0.01
        });

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    function initHeroSection() {
        var hero = query('.hero');
        if (!hero) {
            return;
        }

        var revealItems = queryAll('.hero .stat-card');
        revealItems.forEach(function (item, index) {
            item.classList.add('reveal-on-scroll');
            item.style.transitionDelay = (index * 90) + 'ms';
        });

        if (!('IntersectionObserver' in window)) {
            revealItems.forEach(function (item) {
                item.classList.add('is-visible');
            });
            return;
        }

        var observer = new IntersectionObserver(function (entries, currentObserver) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                revealItems.forEach(function (item) {
                    item.classList.add('is-visible');
                });
                currentObserver.disconnect();
            });
        }, {
            threshold: 0.2
        });

        observer.observe(hero);
    }

    function setAppShowcaseActive(panels, activeId) {
        panels.forEach(function (panel) {
            panel.classList.toggle('is-active', panel.id === activeId);
        });
    }

    function initAppsShowcase() {
        var panels = queryAll('[data-app-panel]');

        if (!panels.length) {
            return;
        }

        setAppShowcaseActive(panels, panels[0].id);

        if (!('IntersectionObserver' in window)) {
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            var visibleEntries = entries.filter(function (entry) {
                return entry.isIntersecting;
            }).sort(function (left, right) {
                return right.intersectionRatio - left.intersectionRatio;
            });

            if (!visibleEntries.length) {
                return;
            }

            setAppShowcaseActive(panels, visibleEntries[0].target.id);
        }, {
            threshold: [0.35, 0.55, 0.75],
            rootMargin: '-12% 0px -12% 0px'
        });

        panels.forEach(function (panel) {
            observer.observe(panel);
        });
    }

    function initContactSection() {
        var emailNodes = queryAll('[data-email-address]');

        emailNodes.forEach(function (node) {
            var email = node.getAttribute('data-email-address');
            if (!email) {
                return;
            }

            node.setAttribute('href', 'mailto:' + email);
            node.setAttribute('title', 'Escribir a ' + email);
        });
    }

    function bootstrap() {
        renderApp();
        initNavigation();
        initAppsShowcase();
        initHeroSection();
        initContactSection();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bootstrap, { once: true });
    } else {
        bootstrap();
    }
}());