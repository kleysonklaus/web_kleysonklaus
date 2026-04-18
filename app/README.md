# App Frontend

Esta carpeta contiene la arquitectura modular propuesta para todos los archivos relacionados con la pagina web.

## Estructura
- `assets/`: recursos visuales del frontend.
- `css/`: sistema de estilos modular.
- `js/`: comportamiento e interacciones.
- `ui/`: organizacion estructural de componentes, layout y secciones.

## Regla de crecimiento
Toda nueva pieza del frontend deberia ubicarse aqui segun su responsabilidad, evitando seguir agregando archivos sueltos en la raiz del proyecto.

## Estado actual
La pagina activa sigue entrando por `index.html`, pero ya usa esta arquitectura de forma parcial:

- `styles/main.css` importa `app/css/main.css`.
- `index.html` carga `app/js/core/loader.js`.
- `app/js/core/main.js` y `app/ui/` vuelven a ser la fuente activa del frontend modular.
- `app/js/core/runtime-fallback.js` mantiene una ruta compatible si falla la carga modular.
- Los assets del frontend deben moverse y crecer dentro de `app/assets/`.

La migracion no esta cerrada, pero `app/` ya es la ruta principal recomendada para nuevos archivos del frontend.
