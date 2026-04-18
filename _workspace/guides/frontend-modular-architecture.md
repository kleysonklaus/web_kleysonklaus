# Arquitectura Modular Propuesta Para El Frontend

## Objetivo
Organizar todos los archivos relacionados con la pagina web bajo una estructura modular y coherente, separando responsabilidades tecnicas sin perder una vista funcional del sitio.

## Propuesta principal
La carpeta recomendada para el frontend es `app/`. Dentro de ella, la estructura se organiza por tecnologia, pero usando la misma logica transversal en CSS, UI y JS.

```text
app/
  assets/
    icons/
    images/
  css/
    foundations/
    shared/
    layout/
    sections/
    pages/
  js/
    core/
    shared/
    layout/
    sections/
    pages/
  ui/
    shared/
    layout/
    sections/
    pages/
```

## Por que esta estructura es mejor
- Mantiene separado lo visual, lo estructural y lo interactivo.
- Usa la misma semantica en `css/`, `ui/` y `js/`, lo que facilita encontrar piezas equivalentes.
- Permite crecer sin convertir el proyecto en una mezcla de archivos sueltos.
- Facilita migrar por etapas desde la estructura actual sin romper el sitio.

## Significado de cada carpeta
### `app/assets/`
Recursos graficos del frontend.
- `icons/`: iconografia del sitio.
- `images/`: imagenes, mockups, banners o capturas.

### `app/css/foundations/`
Base del sistema visual.
Aqui deben vivir tokens, variables, reset, tipografia, colores, espaciado y reglas globales.

### `app/css/shared/`
Componentes CSS reutilizables entre varias partes del sitio.
Ejemplos: botones, cards, badges, formularios, tablas simples.

### `app/css/layout/`
Estructuras globales del sitio.
Ejemplos: header, footer, grid general, container, wrappers, nav.

### `app/css/sections/`
Estilos de secciones concretas de la home o de bloques funcionales.
Ejemplos: hero, empresa, aplicaciones, contacto.

### `app/css/pages/`
Estilos especificos de una pagina completa.
Se usa cuando una pagina necesita ajustes propios y no conviene mezclarlo con `sections/`.

### `app/ui/shared/`
Piezas de markup reutilizable o referencias estructurales comunes.
Ejemplos: boton base, card base, CTA, bloque de metricas, item de lista.

### `app/ui/layout/`
Partes estructurales de alto nivel.
Ejemplos: header, footer, nav principal, shell base de la pagina.

### `app/ui/sections/`
Fragmentos de UI por bloque funcional.
Ejemplos: hero, showcase de apps, proceso, contacto.

### `app/ui/pages/`
Composicion de vistas completas por pagina.
Si en el futuro el sitio deja de ser una sola landing, aqui se ordenan las paginas por separado.

### `app/js/core/`
Inicializacion y reglas base del frontend.
Ejemplos: bootstrap del sitio, config global, eventos base, startup.

### `app/js/shared/`
Utilidades o modulos reutilizables.
Ejemplos: helpers DOM, animaciones comunes, validaciones, sliders simples.

### `app/js/layout/`
Comportamiento asociado a layout global.
Ejemplos: menu mobile, header sticky, navegacion por anclas, footer interactivo.

### `app/js/sections/`
Logica de interaccion por seccion.
Ejemplos: carrusel de apps, acordeones, tabs, contador de metricas.

### `app/js/pages/`
Codigo especifico para una pagina determinada.
Util cuando una sola pagina requiere logica muy particular.

## Como migrar desde el estado actual
No conviene mover todo de golpe. La migracion recomendada es por etapas:

1. Mantener `index.html` y `styles/main.css` activos mientras se prepara la nueva estructura.
2. Extraer primero los estilos globales de `styles/main.css` hacia `app/css/foundations/`.
3. Extraer luego layout y secciones a `app/css/layout/` y `app/css/sections/`.
4. Cuando aparezca JS nuevo, ubicarlo directamente en `app/js/` segun su responsabilidad.
5. Si en el futuro separas fragments de HTML o documentacion de markup, usar `app/ui/` como mapa estructural del sitio.

## Convencion recomendada
Si una pieza existe en tres capas, mantener el mismo nombre conceptual.
Ejemplo:
- `app/ui/sections/apps-showcase.*`
- `app/css/sections/apps-showcase.css`
- `app/js/sections/apps-showcase.js`

Esto hace que cada bloque funcional tenga una correspondencia clara entre estructura, estilo y comportamiento.

## Estado actual
La estructura `app/` ya participa en el runtime actual.

- `styles/main.css` funciona como capa de compatibilidad y redirige al sistema modular en `app/css/main.css`.
- `index.html` carga `app/js/core/loader.js` como puente de compatibilidad para activar `app/js/core/main.js`.
- `app/js/core/main.js` y `app/ui/` vuelven a ser la fuente activa del frontend modular.
- Si el entorno no puede resolver imports modulares, `app/js/core/loader.js` activa `app/js/core/runtime-fallback.js` para evitar una pantalla en blanco.
- Los assets visuales en uso futuro deben centralizarse en `app/assets/`.

La raiz todavia conserva algunos puntos de entrada historicos por compatibilidad, pero la direccion correcta de crecimiento ya es `app/`.

## Recomendacion final
La mejor opcion para este proyecto es usar `app/` como espacio del frontend modular y dejar la documentacion de trabajo fuera del producto, en `_workspace/`.
