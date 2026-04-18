# Guia Para Pedir Cambios A Los Agentes Respetando Reglas Y Documentos

## Objetivo
Esta guia explica como pedir nuevas tareas a un agente para que modifique codigo usando primero la documentacion existente y respetando las reglas del proyecto.

## Regla base de trabajo
Cuando pidas una nueva tarea, debes indicar que el agente:
- Lea primero los documentos de contexto del proyecto.
- Respete las reglas definidas en la carpeta `_workspace/rules/`.
- No modifique ni elimine archivos protegidos sin aprobacion explicita.
- Explique el impacto si detecta que una regla entra en conflicto con la tarea.

## Documentos que conviene mencionar en cada solicitud
- `_workspace/rules/root-protected-files.md`
- `_workspace/guides/plan-web-corporativa.md`
- `_workspace/guides/guia-agente-implementacion.md`
- `_workspace/guides/guia-agente-auditoria-uso.md`
- `_workspace/guides/revision-uso-actual.md`
- `_workspace/README.md`

## Formula recomendada para tus prompts
Usa una instruccion parecida a esta:

"Antes de hacer cambios, revisa `_workspace/rules/root-protected-files.md` y los documentos relevantes de `_workspace/guides/`. Usa esos archivos como fuente de contexto y respeta sus reglas durante toda la tarea. Si necesitas tocar un archivo protegido o eliminar algo que no este claramente en uso, deten la ejecucion y preguntame primero con el impacto esperado. Luego implementa [tu solicitud]."

## Plantilla corta
Usa esta version cuando quieras ser directo:

"Revisa primero `_workspace/rules/root-protected-files.md` y `_workspace/guides/`. No modifiques archivos protegidos. Si detectas eliminaciones o cambios sensibles, preguntame antes. Implementa: [tarea]."

## Plantilla completa
Usa esta version cuando la tarea tenga mas riesgo:

"Quiero que hagas cambios en este repositorio. Antes de editar codigo:
1. Lee `_workspace/rules/root-protected-files.md`.
2. Lee `_workspace/guides/plan-web-corporativa.md` y `_workspace/guides/guia-agente-implementacion.md` para entender el objetivo actual.
3. Si la tarea implica limpiar archivos, revisa `_workspace/guides/guia-agente-auditoria-uso.md` y `_workspace/guides/revision-uso-actual.md`.
4. No modifiques ni elimines `.cpanel.yml`, `.htaccess` ni `app-ads.txt`.
5. Si necesitas salirte de esas reglas, preguntame antes y explicame el impacto.

Despues de eso, implementa esta tarea: [tarea]."

## Ejemplos practicos

### 1. Cambiar contenido de la web
"Revisa primero `_workspace/rules/root-protected-files.md`, `_workspace/guides/plan-web-corporativa.md` y `_workspace/guides/guia-agente-implementacion.md`. Respeta esas reglas y luego reemplaza los placeholders de la seccion de aplicaciones por contenido real. Si necesitas tocar archivos protegidos, preguntame antes."

### 2. Agregar una nueva seccion
"Lee `_workspace/rules/root-protected-files.md` y los documentos de `_workspace/guides/`. Con base en eso, agrega una nueva seccion de testimonios en la home, manteniendo el estilo actual y sin tocar archivos protegidos."

### 3. Revisar si algo puede borrarse
"Antes de eliminar archivos, revisa `_workspace/guides/guia-agente-auditoria-uso.md` y `_workspace/guides/revision-uso-actual.md`. No borres nada automaticamente. Presenta candidatos, evidencia de uso o no uso, impacto y preguntame antes de eliminar."

### 4. Refactorizar sin romper reglas
"Revisa `_workspace/rules/root-protected-files.md` y `_workspace/guides/`. Refactoriza el codigo del frontend para mejorar orden y mantenibilidad, pero no elimines archivos sin aprobacion y no toques archivos protegidos."

## Cuando conviene mencionar los documentos uno por uno
- Si la tarea es visual o de contenido: menciona `_workspace/guides/plan-web-corporativa.md` y `_workspace/guides/guia-agente-implementacion.md`.
- Si la tarea es de limpieza o eliminacion: menciona `_workspace/guides/guia-agente-auditoria-uso.md` y `_workspace/guides/revision-uso-actual.md`.
- Si la tarea puede afectar configuracion o despliegue: menciona siempre `_workspace/rules/root-protected-files.md`.

## Recomendacion de estilo al pedir tareas
- Di primero que archivos deben leerse.
- Luego di las restricciones.
- Luego di la tarea concreta.
- Finalmente indica como quieres que el agente te consulte si encuentra conflicto o riesgo.

## Estructura ideal de una solicitud
1. Contexto a leer.
2. Restricciones obligatorias.
3. Cambio que quieres hacer.
4. Condicion de seguridad para consultar antes de borrar o tocar archivos sensibles.

## Ejemplo ideal completo
"Antes de trabajar, lee `_workspace/rules/root-protected-files.md`, `_workspace/guides/plan-web-corporativa.md` y `_workspace/guides/guia-agente-implementacion.md`. No modifiques ni elimines `.cpanel.yml`, `.htaccess` ni `app-ads.txt`. Mantente dentro del enfoque corporativo actual del sitio. Luego cambia la seccion de contacto para agregar WhatsApp y correo comercial. Si detectas que algun archivo heredado deberia eliminarse, no lo borres: preguntame primero indicando impacto y si hay dependencias." 

## Resultado esperado
Si usas este formato, el agente deberia:
- Leer el contexto correcto antes de editar.
- Respetar reglas persistentes del proyecto.
- Evitar borrados impulsivos.
- Consultarte antes de tocar elementos sensibles.
- Mantener coherencia con la arquitectura y el objetivo actual del sitio.

## Prompts reutilizables listos para copiar

### Prompt maestro corto
Usa este cuando quieras una base general para casi cualquier tarea:

"Antes de hacer cambios, lee `_workspace/rules/root-protected-files.md` y revisa los documentos relevantes de `_workspace/guides/`. Respeta esas reglas durante toda la tarea. No modifiques ni elimines `.cpanel.yml`, `.htaccess` ni `app-ads.txt`. Si detectas que necesitas borrar archivos o tocar algo sensible, preguntame primero indicando impacto. Luego implementa: [tarea]."

### Prompt para cambios visuales
Usa este cuando quieras ajustar diseño, estilos, textos o estructura visual:

"Lee primero `_workspace/rules/root-protected-files.md`, `_workspace/guides/plan-web-corporativa.md` y `_workspace/guides/guia-agente-implementacion.md`. Mantente dentro del enfoque corporativo actual del sitio. No modifiques archivos protegidos. Luego implementa este cambio visual: [tarea]. Si detectas conflicto con estilos heredados o archivos sin uso, no elimines nada sin preguntarme antes."

### Prompt para limpieza de archivos
Usa este cuando quieras revisar que puede borrarse o depurarse:

"Antes de limpiar el proyecto, revisa `_workspace/rules/root-protected-files.md`, `_workspace/guides/guia-agente-auditoria-uso.md` y `_workspace/guides/revision-uso-actual.md`. No elimines nada automaticamente. Para cada archivo candidato, muestra evidencia de uso o no uso, impacto de eliminarlo y preguntame antes de borrar. No modifiques ni elimines `.cpanel.yml`, `.htaccess` ni `app-ads.txt`. Luego ejecuta la auditoria para: [alcance]."

### Prompt para nuevas secciones o funcionalidades
Usa este cuando quieras ampliar la pagina o agregar nuevas partes:

"Lee primero `_workspace/rules/root-protected-files.md`, `_workspace/guides/plan-web-corporativa.md` y `_workspace/guides/guia-agente-implementacion.md`. Respeta la identidad corporativa actual del sitio y no toques archivos protegidos. Luego agrega esta nueva seccion o funcionalidad: [tarea]. Si necesitas refactorizar o mover archivos, explica el impacto antes de hacer cambios sensibles."

### Prompt para refactorizacion segura
Usa este cuando quieras mejorar orden interno sin cambiar el objetivo del proyecto:

"Revisa `_workspace/rules/root-protected-files.md` y los documentos de `_workspace/guides/` antes de editar. Refactoriza el frontend para mejorar claridad, mantenibilidad o estructura, pero no elimines archivos sin aprobacion y no modifiques `.cpanel.yml`, `.htaccess` ni `app-ads.txt`. Si encuentras codigo heredado o sin uso, reportalo con impacto y preguntame antes de borrarlo. Objetivo: [tarea]."

## Recomendacion practica
Si no quieres pensar mucho que prompt usar, empieza siempre con el prompt maestro corto. Si la tarea incluye borrar, limpiar o revisar uso de archivos, cambia al prompt de limpieza. Si la tarea es visual, usa el prompt de cambios visuales. Si vas a ampliar la home o agregar nuevas partes, usa el de nuevas secciones o funcionalidades.