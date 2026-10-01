import { sectionIntro } from '../shared/section-intro.js';
import { appShowcasePanel } from '../shared/app-showcase-panel.js';

function appAsset(slug, fileName) {
    return `app/assets/images/apps/${slug}/${fileName}`;
}

function buildScreenshots(slug, items) {
    return items.map((item, index) => ({
        src: appAsset(slug, `screen-${String(index + 1).padStart(2, '0')}.webp`),
        ...item,
    }));
}

function buildStoreConfig(href, isEnabledLink, overrides = {}) {
    return {
        href,
        isEnabledLink,
        ...overrides,
    };
}

const unavailableStoreMessage = 'Aun no esta disponible en esta plataforma.';

export const apps = [
    {
        id: 'inventario-facil',
        tag: 'Herramientas',
        eyebrow: 'Inventario y operaciones',
        title: 'Inventario Facil',
        copy: 'Gestiona productos, servicios y movimientos de stock con una experiencia clara, rapida y preparada para pequenos negocios que necesitan orden desde el primer uso.',
        logoSrc: appAsset('inventario-facil', 'logo.png'),
        logoAlt: 'Logo de Inventario Facil',
        highlights: [
            'Ingreso rapido de productos y servicios sin friccion visual.',
            'Organizacion por carpetas, grupos e imagenes para reconocimiento inmediato.',
            'Colaboracion en tiempo real con roles para distintos perfiles del negocio.',
        ],
        stats: [
            { label: 'Descargas', value: '100k+' },
            { label: 'Calificacion', value: '4.6' },
            { label: 'Actualizacion', value: '18 may 2022' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.kleysonklaus.inventario_facil&hl=es_PE', true, {
                copy: 'Disponible para instalar en Android desde su ficha oficial de Google Play.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La version para App Store se encuentra en preparacion.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('inventario-facil', [
            {
                alt: 'Captura de Inventario Facil con panel principal',
                title: 'Control inmediato',
                copy: 'Una vista inicial enfocada en leer el inventario con rapidez y entender el estado general sin ruido.',
            },
            {
                alt: 'Captura de Inventario Facil con modulo de productos',
                title: 'Productos bien organizados',
                copy: 'El sistema permite ordenar articulos por grupos y carpetas para trabajar con mas claridad.',
            },
            {
                alt: 'Captura de Inventario Facil con movimientos de stock',
                title: 'Movimientos registrados',
                copy: 'Cada ingreso, venta o salida queda documentado para seguir la operacion con seguridad.',
            },
            {
                alt: 'Captura de Inventario Facil con apoyo visual del producto',
                title: 'Reconocimiento visual',
                copy: 'Las imagenes por inventario ayudan a encontrar productos y servicios de un solo vistazo.',
            },
            {
                alt: 'Captura de Inventario Facil con colaboracion en equipo',
                title: 'Trabajo en equipo',
                copy: 'La colaboracion en tiempo real facilita operar con vendedores, observadores y gerentes.',
            },
            {
                alt: 'Captura de Inventario Facil con estadisticas y resumenes',
                title: 'Lectura del negocio',
                copy: 'Las estadisticas basicas muestran movimientos y ventas para tomar decisiones con mas contexto.',
            },
        ]),
        theme: {
            accent: '#6be3c1',
            accentStrong: '#2fb8e0',
            glow: 'rgba(107, 227, 193, 0.18)',
        },
    },
    {
        id: 'guia-aymara',
        tag: 'Educacion',
        eyebrow: 'Aprendizaje linguistico',
        title: 'Guia Aymara - Aprende Facil',
        copy: 'Una guia de estudio pensada para aprender vocabulario, frases y traducciones en aymara con una navegacion simple y util para consulta diaria.',
        logoSrc: appAsset('guia-aymara', 'logo.webp'),
        logoAlt: 'Logo de Guia Aymara',
        highlights: [
            'Incluye un diccionario amplio para buscar terminos y expresiones frecuentes.',
            'Presenta frases y ejemplos orientados a sesiones cortas de estudio continuo.',
            'Integra un traductor que ayuda a resolver dudas sin abandonar el flujo.',
        ],
        stats: [
            { label: 'Descargas', value: '10k+' },
            { label: 'Categoria', value: 'Educacion' },
            { label: 'Actualizacion', value: '29 jul 2022' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.lastpangos.nueva_guia_aymara', true, {
                copy: 'Disponible en Google Play para estudio y consulta desde Android.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La version para App Store todavia no fue publicada.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('guia-aymara', [
            {
                alt: 'Captura de Guia Aymara con portada de aprendizaje',
                title: 'Inicio de aprendizaje',
                copy: 'La portada conduce rapido hacia vocabulario, frases y herramientas de consulta.',
            },
            {
                alt: 'Captura de Guia Aymara con terminos organizados',
                title: 'Terminos ordenados',
                copy: 'El contenido se organiza para estudiar con menos friccion y encontrar palabras con rapidez.',
            },
            {
                alt: 'Captura de Guia Aymara con traductor integrado',
                title: 'Traductor integrado',
                copy: 'El traductor acompana el aprendizaje y acelera la resolucion de dudas puntuales.',
            },
            {
                alt: 'Captura de Guia Aymara con vista de consulta',
                title: 'Consulta rapida',
                copy: 'Cada vista busca reducir el tiempo entre la duda del usuario y la respuesta correcta.',
            },
            {
                alt: 'Captura de Guia Aymara con material complementario',
                title: 'Material de apoyo',
                copy: 'La app combina estudio guiado y consulta practica en una sola experiencia.',
            },
            {
                alt: 'Captura de Guia Aymara con seguimiento de estudio',
                title: 'Uso continuo',
                copy: 'El recorrido visual favorece sesiones breves y repetibles para memorizar mejor.',
            },
        ]),
        theme: {
            accent: '#ffd166',
            accentStrong: '#ff9f43',
            glow: 'rgba(255, 209, 102, 0.20)',
        },
    },
    {
        id: 'oniichat',
        tag: 'Entretenimiento',
        eyebrow: 'Chat y personajes',
        title: 'OniiChat - Habla a tu Waifu',
        copy: 'Una experiencia conversacional centrada en personajes, historias y sesiones de chat para usuarios que buscan entretenimiento con identidad visual marcada.',
        logoSrc: appAsset('oniichat', 'logo.webp'),
        logoAlt: 'Logo de OniiChat',
        highlights: [
            'Permite iniciar conversaciones con distintos personajes desde una interfaz directa.',
            'Refuerza personalidad y narrativa con perfiles visuales y fichas descriptivas.',
            'Organiza el acceso a chats y pantallas de detalle con una navegacion clara.',
        ],
        stats: [
            { label: 'Descargas', value: '1k+' },
            { label: 'Categoria', value: 'Entretenimiento' },
            { label: 'Actualizacion', value: '28 may 2024' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.kleysonklaus.oniichat', true, {
                copy: 'Disponible en Google Play para Android con acceso directo a la ficha oficial.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La edicion para App Store sigue pendiente de lanzamiento.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('oniichat', [
            {
                alt: 'Captura de OniiChat con personajes destacados',
                title: 'Personajes visibles',
                copy: 'La primera pantalla prioriza descubrir personajes y entrar rapido a cada conversacion.',
            },
            {
                alt: 'Captura de OniiChat con chat abierto',
                title: 'Conversacion en foco',
                copy: 'El chat ocupa el centro de la experiencia para mantener el intercambio sin distracciones.',
            },
            {
                alt: 'Captura de OniiChat con detalles del personaje',
                title: 'Perfiles con contexto',
                copy: 'Cada personaje suma informacion visual para reforzar tono, historia y personalidad.',
            },
            {
                alt: 'Captura de OniiChat con navegacion interna',
                title: 'Navegacion compacta',
                copy: 'Las vistas alternan entre chat y detalle sin romper el ritmo de uso.',
            },
            {
                alt: 'Captura de OniiChat con seleccion de personaje',
                title: 'Seleccion rapida',
                copy: 'El catalogo facilita cambiar de personaje y probar distintas conversaciones.',
            },
            {
                alt: 'Captura de OniiChat con interfaz final',
                title: 'Sesion continua',
                copy: 'La estructura permite volver al chat una y otra vez con una entrada simple.',
            },
        ]),
        theme: {
            accent: '#ff8fb1',
            accentStrong: '#ff5c8a',
            glow: 'rgba(255, 143, 177, 0.18)',
        },
    },
    {
        id: 'relatos-del-peru',
        tag: 'Lectura',
        eyebrow: 'Cultura y narrativa',
        title: 'Relatos del Peru',
        copy: 'Una biblioteca movil orientada a cuentos, mitos y leyendas del Peru, pensada para lectura continua desde una interfaz amable y editorial.',
        logoSrc: appAsset('relatos-del-peru', 'logo.webp'),
        logoAlt: 'Logo de Relatos del Peru',
        highlights: [
            'Reune relatos tradicionales en una sola app enfocada en lectura cultural.',
            'Organiza historias para entrar rapido a mitos, cuentos y leyendas.',
            'Presenta una experiencia ligera para leer desde el telefono sin friccion.',
        ],
        stats: [
            { label: 'Descargas', value: '5k+' },
            { label: 'Categoria', value: 'Libros' },
            { label: 'Actualizacion', value: '02 abr 2022' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.lastpangos.cuentos_mitos_leyendas_peru', true, {
                copy: 'Disponible en Google Play para lectura desde Android.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La publicacion en App Store todavia no esta disponible.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('relatos-del-peru', [
            {
                alt: 'Captura de Relatos del Peru con portada',
                title: 'Entrada editorial',
                copy: 'La portada presenta el tono cultural de la app y orienta al lector desde el inicio.',
            },
            {
                alt: 'Captura de Relatos del Peru con lista de relatos',
                title: 'Catalogo de historias',
                copy: 'Las historias se ordenan para entrar rapido al contenido sin pasos innecesarios.',
            },
            {
                alt: 'Captura de Relatos del Peru con lectura abierta',
                title: 'Lectura continua',
                copy: 'El formato de lectura busca mantener foco y ritmo en pantallas pequenas.',
            },
            {
                alt: 'Captura de Relatos del Peru con navegacion de categorias',
                title: 'Mitos y leyendas',
                copy: 'La navegacion separa tipos de relatos para facilitar la exploracion del catalogo.',
            },
            {
                alt: 'Captura de Relatos del Peru con seccion destacada',
                title: 'Contenido destacado',
                copy: 'La seleccion visual ayuda a descubrir historias relevantes con menos esfuerzo.',
            },
            {
                alt: 'Captura de Relatos del Peru con cierre de lectura',
                title: 'Sesion ligera',
                copy: 'Cada pantalla esta pensada para volver a leer en cualquier momento desde el movil.',
            },
        ]),
        theme: {
            accent: '#ffb86c',
            accentStrong: '#ff7f50',
            glow: 'rgba(255, 184, 108, 0.20)',
        },
    },
    {
        id: 'pentabra',
        tag: 'Palabras',
        eyebrow: 'Juego verbal',
        title: 'Pentabra',
        copy: 'Un juego corto de palabras ocultas que apuesta por partidas rapidas, lectura clara del tablero y feedback inmediato en cada intento.',
        logoSrc: appAsset('pentabra', 'logo.webp'),
        logoAlt: 'Logo de Pentabra',
        highlights: [
            'Propone descubrir una palabra oculta en pocos intentos con dinamica directa.',
            'Usa pistas visuales por color para que el aprendizaje del juego sea inmediato.',
            'Mantiene una interfaz ligera para sesiones rapidas desde el telefono.',
        ],
        stats: [
            { label: 'Descargas', value: '10+' },
            { label: 'Categoria', value: 'Palabras' },
            { label: 'Actualizacion', value: '24 mar 2022' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=com.lastpangos.pentabra', true, {
                copy: 'Disponible en Google Play para jugar desde Android.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La version para App Store aun no fue liberada.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('pentabra', [
            {
                alt: 'Captura de Pentabra con tablero principal',
                title: 'Tablero limpio',
                copy: 'El juego muestra desde el inicio una lectura clara del tablero y del reto actual.',
            },
            {
                alt: 'Captura de Pentabra con intento en curso',
                title: 'Pistas por color',
                copy: 'Cada intento devuelve informacion visual para acotar la palabra correcta.',
            },
            {
                alt: 'Captura de Pentabra con progreso del jugador',
                title: 'Partidas breves',
                copy: 'La estructura invita a jugar rondas cortas y repetir sin desgaste visual.',
            },
            {
                alt: 'Captura de Pentabra con estado final',
                title: 'Cierre inmediato',
                copy: 'El resultado se entiende rapido para volver a empezar otra partida al instante.',
            },
        ]),
        theme: {
            accent: '#ffd166',
            accentStrong: '#f4a261',
            glow: 'rgba(255, 209, 102, 0.20)',
        },
    },
    {
        id: 'tuidy-asistencia-digital',
        tag: 'Herramientas',
        eyebrow: 'Control de asistencia',
        title: 'Tuidy - Asistencia Digital',
        copy: 'Una app orientada a registrar asistencia, monitorear presencia y comunicar eventos en tiempo real para instituciones que necesitan trazabilidad.',
        logoSrc: appAsset('tuidy-asistencia-digital', 'logo.webp'),
        logoAlt: 'Logo de Tuidy',
        highlights: [
            'Permite llevar control de asistencia con foco operativo y visual claro.',
            'Refuerza el seguimiento con alertas y vistas de consulta para responsables.',
            'Ordena informacion institucional en una experiencia preparada para uso cotidiano.',
        ],
        stats: [
            { label: 'Descargas', value: '10+' },
            { label: 'Categoria', value: 'Herramientas' },
            { label: 'Estado', value: 'Piloto' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=app.kleysonklaus.school_student_system', true, {
                copy: 'Disponible en Google Play para instituciones que operan desde Android.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La salida para App Store sigue pendiente.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('tuidy-asistencia-digital', [
            {
                alt: 'Captura de Tuidy con panel principal',
                title: 'Panel operativo',
                copy: 'La pantalla inicial resume asistencia y acciones clave para trabajo institucional.',
            },
            {
                alt: 'Captura de Tuidy con registro de asistencia',
                title: 'Registro ordenado',
                copy: 'El flujo de asistencia busca registrar informacion con rapidez y menos errores.',
            },
            {
                alt: 'Captura de Tuidy con detalle de estudiante',
                title: 'Seguimiento puntual',
                copy: 'Las vistas de detalle ayudan a revisar estados individuales sin salir del sistema.',
            },
            {
                alt: 'Captura de Tuidy con notificaciones',
                title: 'Avisos en tiempo real',
                copy: 'Las notificaciones refuerzan seguimiento y respuesta desde el telefono.',
            },
            {
                alt: 'Captura de Tuidy con resumen institucional',
                title: 'Lectura institucional',
                copy: 'Los indicadores permiten entender rapidamente el estado general de la asistencia.',
            },
            {
                alt: 'Captura de Tuidy con navegacion interna',
                title: 'Navegacion de uso diario',
                copy: 'Cada pantalla esta pensada para operar todos los dias desde un contexto real.',
            },
        ]),
        theme: {
            accent: '#7dd3fc',
            accentStrong: '#38bdf8',
            glow: 'rgba(125, 211, 252, 0.20)',
        },
    },
    {
        id: 'quiz-heroes-quiz-ia',
        tag: 'Casual',
        eyebrow: 'Trivia y busqueda visual',
        title: 'Quiz Heroes. Quiz IA',
        copy: 'Una propuesta casual que mezcla busqueda, trivia y progresion ligera para sesiones de juego breves con fuerte apoyo visual.',
        logoSrc: appAsset('quiz-heroes-quiz-ia', 'logo.webp'),
        logoAlt: 'Logo de Quiz Heroes',
        highlights: [
            'Combina dinamicas de trivia con exploracion visual en un formato accesible.',
            'Presenta retos cortos para jugar desde el movil sin curva de entrada alta.',
            'Ordena niveles y escenas con una lectura clara del objetivo en pantalla.',
        ],
        stats: [
            { label: 'Descargas', value: '1k+' },
            { label: 'Categoria', value: 'Casual' },
            { label: 'Actualizacion', value: '05 abr 2022' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=com.kleysonklaus.quien_es_quien', true, {
                copy: 'Disponible en Google Play con acceso inmediato a la ficha oficial.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La salida en App Store todavia no fue habilitada.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('quiz-heroes-quiz-ia', [
            {
                alt: 'Captura de Quiz Heroes con inicio del juego',
                title: 'Inicio del reto',
                copy: 'La portada del juego deja claro el objetivo y la entrada a cada ronda.',
            },
            {
                alt: 'Captura de Quiz Heroes con tablero visual',
                title: 'Busqueda visual',
                copy: 'La escena principal concentra la atencion en encontrar y resolver con rapidez.',
            },
            {
                alt: 'Captura de Quiz Heroes con progreso',
                title: 'Progreso por niveles',
                copy: 'La estructura de niveles permite jugar en sesiones cortas y acumulativas.',
            },
            {
                alt: 'Captura de Quiz Heroes con pantalla final',
                title: 'Feedback inmediato',
                copy: 'El resultado de cada ronda se entiende rapido para seguir con el siguiente reto.',
            },
        ]),
        theme: {
            accent: '#fda4af',
            accentStrong: '#fb7185',
            glow: 'rgba(253, 164, 175, 0.18)',
        },
    },
    {
        id: 'match-heroes-2',
        tag: 'Puzzle',
        eyebrow: 'Memoria y tablero',
        title: 'Match Heroes 2',
        copy: 'Un juego de memoria basado en parejas y reconocimiento visual, planteado para partidas agiles con tableros simples y lectura inmediata.',
        logoSrc: appAsset('match-heroes-2', 'logo.webp'),
        logoAlt: 'Logo de Match Heroes 2',
        highlights: [
            'Plantea dinamicas de memoria con tableros faciles de entender desde el primer segundo.',
            'Combina ritmo rapido, repeticion y reconocimiento visual en partidas breves.',
            'Mantiene una interfaz clara para jugar en movil sin sobrecargar la pantalla.',
        ],
        stats: [
            { label: 'Descargas', value: '100+' },
            { label: 'Categoria', value: 'Puzzle' },
            { label: 'Actualizacion', value: '27 mar 2022' },
        ],
        stores: {
            googlePlay: buildStoreConfig('https://play.google.com/store/apps/details?id=com.kleysonklaus.midota', true, {
                copy: 'Disponible en Google Play para jugar desde Android.',
            }),
            appStore: buildStoreConfig('', false, {
                copy: 'La version para App Store sigue en espera de publicacion.',
                tooltip: unavailableStoreMessage,
            }),
        },
        screenshots: buildScreenshots('match-heroes-2', [
            {
                alt: 'Captura de Match Heroes 2 con menu principal',
                title: 'Entrada al tablero',
                copy: 'El inicio conduce rapido a la partida con una lectura simple del juego.',
            },
            {
                alt: 'Captura de Match Heroes 2 con tablero activo',
                title: 'Memoria en accion',
                copy: 'Las cartas y parejas se muestran con suficiente claridad para reaccionar rapido.',
            },
            {
                alt: 'Captura de Match Heroes 2 con avance de nivel',
                title: 'Progreso constante',
                copy: 'Cada ronda entrega avance visible para sostener el ritmo de juego.',
            },
            {
                alt: 'Captura de Match Heroes 2 con pantalla intermedia',
                title: 'Partidas repetibles',
                copy: 'La estructura permite volver a jugar sin friccion y con objetivos claros.',
            },
            {
                alt: 'Captura de Match Heroes 2 con interfaz de memoria',
                title: 'Reconocimiento visual',
                copy: 'La composicion del tablero favorece recordar patrones y parejas con rapidez.',
            },
            {
                alt: 'Captura de Match Heroes 2 con cierre de ronda',
                title: 'Cierre ligero',
                copy: 'El resultado de cada intento deja lista la siguiente partida sin sobrecarga.',
            },
        ]),
        theme: {
            accent: '#c4b5fd',
            accentStrong: '#8b5cf6',
            glow: 'rgba(196, 181, 253, 0.18)',
        },
    },
];

export function appsSection() {
    const cards = apps
        .map((app) => appShowcasePanel(app))
        .join('');

    return `
        <section class="section apps-section" id="aplicaciones" data-apps-section>
            <div class="container apps-section__intro">
                ${sectionIntro({
        eyebrow: 'Aplicaciones',
        title: 'Apps disponibles',
        copy: 'Disponibles inmediatamante',
    })}
            </div>
            <div class="apps-showcase" data-apps-showcase>${cards}</div>
            <div class="container apps-section__footnote">
                <p>
                    Para agregar o ajustar una app edita su objeto en esta misma lista: stores.googlePlay.href, stores.googlePlay.isEnabledLink, stores.appStore.href y stores.appStore.isEnabledLink controlan el click, el estado visual y la presencia de cada boton de tienda.
                </p>
            </div>
        </section>
    `;
}
