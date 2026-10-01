# Revision Inicial De Uso Actual

## Resumen
En el estado actual del proyecto, el runtime visible de la web carga `index.html`, la capa de compatibilidad `styles/main.css`, el sistema CSS modular en `app/css/main.css`, el cargador `app/js/core/loader.js` y el entrypoint modular `app/js/core/main.js`. Si la carga modular falla, el loader usa `app/js/core/runtime-fallback.js` para mantener la interfaz operativa. Los candidatos de bajo riesgo aprobados anteriormente ya fueron eliminados.

## En uso confirmado
1. `index.html`
   - Estado: usado en runtime.
   - Evidencia: es la pagina principal y esta definida como entrada por `.htaccess`.
   - Impacto si se elimina: alto.
   - Nota: romperia la carga principal del sitio.

2. `styles/main.css`
   - Estado: usado en runtime.
   - Evidencia: enlazado desde `index.html` e importa `app/css/main.css`.
   - Impacto si se elimina: alto.
   - Nota: hoy funciona como puente de compatibilidad hacia la arquitectura modular.

3. `app/css/main.css`
   - Estado: usado en runtime.
   - Evidencia: importado desde `styles/main.css`.
   - Impacto si se elimina: alto.
   - Nota: concentra el sistema CSS modular activo.

4. `app/js/core/loader.js`
   - Estado: usado en runtime.
   - Evidencia: cargado desde `index.html` como script diferido.
   - Impacto si se elimina: alto.
   - Nota: hoy activa el entrypoint modular y deriva al runtime de compatibilidad si falla la carga.

5. `app/js/core/main.js`
   - Estado: usado en runtime.
   - Evidencia: se activa desde `app/js/core/loader.js` mediante import dinamico.
   - Impacto si se elimina: alto.
   - Nota: monta la interfaz modular real e inicializa los comportamientos del sitio.

6. `app/js/core/runtime-fallback.js`
   - Estado: soporte de compatibilidad.
   - Evidencia: es cargado por `app/js/core/loader.js` cuando falla el import dinamico del entrypoint modular.
   - Impacto si se elimina: medio.
   - Nota: no es la ruta principal, pero evita que la interfaz quede inutilizable en ejecucion local o entornos incompatibles.

7. `.htaccess`
   - Estado: soporte de servidor.
   - Evidencia: define `DirectoryIndex index.html`.
   - Impacto si se elimina: medio.
   - Nota: en hosting Apache podria alterar como se resuelve la pagina inicial.

8. `_workspace/guides/plan-web-corporativa.md`
   - Estado: documentacion.
   - Evidencia: describe el alcance actual del proyecto.
   - Impacto si se elimina: bajo.
   - Nota: no rompe runtime, pero elimina contexto operativo.

9. `_workspace/guides/guia-agente-implementacion.md`
   - Estado: documentacion.
   - Evidencia: contiene la guia del flujo de implementacion actual.
   - Impacto si se elimina: bajo.
   - Nota: no afecta el sitio publicado, pero reduce mantenibilidad.

## Candidatos a revision por aparente falta de uso directo
1. `assets/`
   - Estado: candidato a revision.
   - Evidencia: la carpeta sigue existiendo, pero no contiene recursos activos detectados.
   - Impacto si se elimina: nulo aparente si confirmas que no se reutilizara.
   - Nota: no participa en el runtime actual despues de la migracion a `app/assets/`.
   - Pregunta sugerida: La carpeta `assets/` ya no contiene recursos activos. ¿Quieres que la elimine?

2. `app/assets/icons/`
   - Estado: candidato a revision.
   - Evidencia: la carpeta existe pero quedo vacia despues de eliminar los iconos heredados.
   - Impacto si se elimina: nulo aparente mientras no agregues nuevos iconos.
   - Nota: conservarla tiene sentido si quieres mantener la arquitectura modular preparada para recursos futuros.
   - Pregunta sugerida: `app/assets/icons/` esta vacia. ¿Quieres conservarla como estructura preparada o prefieres eliminarla?

3. `cgi-bin/README.md`
   - Estado: candidato a revision.
   - Evidencia: no se encontro el archivo actualmente en el repositorio visible.
   - Impacto si se elimina: nulo en frontend, incierto en documentacion de despliegue.
   - Nota: esta entrada debe retirarse de futuras auditorias si se confirma que la carpeta ya no existe.
   - Pregunta sugerida: No encuentro `cgi-bin/` en el estado actual. ¿Quieres que retire esta referencia historica de la documentacion de auditoria?

## Elementos que no deben eliminarse sin confirmacion adicional
1. `app-ads.txt`
   - Estado: soporte externo potencial.
   - Evidencia: aunque no aparece enlazado en `index.html`, este tipo de archivo suele ser consultado por servicios publicitarios de forma directa.
   - Impacto si se elimina: medio o alto segun configuracion externa.
   - Nota: no conviene tocarlo sin confirmar si todavia se usa para validacion o monetizacion.

2. `.github/`
   - Estado: automatizacion potencial.
   - Evidencia: carpeta presente en el repositorio, posible uso para CI, plantillas o configuracion.
   - Impacto si se elimina: incierto.
   - Nota: requiere revision especifica antes de cualquier limpieza.

## Siguiente paso recomendado
Usar esta revision como base para preguntar archivo por archivo antes de borrar. Si el usuario aprueba, la limpieza puede hacerse en dos grupos:
- Grupo de bajo riesgo: `assets/`.
- Grupo de confirmacion adicional: `app/assets/icons/`, `app-ads.txt`, `.htaccess`, `.github/`.