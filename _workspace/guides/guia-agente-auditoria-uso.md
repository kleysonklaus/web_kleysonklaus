# Guia Para Agente: Auditoria De Uso Y Limpieza Segura

## Objetivo
Revisar el codigo y los archivos del repositorio para identificar que se usa realmente en runtime, que solo sirve como documentacion o soporte de despliegue, y que parece estar sin uso. Ningun archivo debe eliminarse automaticamente: primero se debe pedir aprobacion al usuario con una explicacion clara del impacto.

## Regla principal
Si algo no parece usarse, no se elimina directamente. Primero se presenta al usuario una propuesta con estos campos:
- Archivo o recurso.
- Evidencia de uso o no uso.
- Impacto si se elimina.
- Impacto si se conserva.
- Recomendacion.
- Pregunta explicita de aprobacion antes de borrar.

## Procedimiento recomendado
1. Inventariar todos los archivos del repositorio por carpeta.
2. Detectar referencias directas desde `index.html`, hojas de estilo, scripts y documentacion tecnica.
3. Separar los archivos en estas categorias:
   - Usado en runtime.
   - Usado por despliegue o servidor.
   - Usado como documentacion.
   - Posiblemente sin uso.
4. Para cada candidato a eliminacion, explicar si su borrado afectaria:
   - La carga visual del sitio.
   - Navegacion o estilos.
   - Scripts o interactividad.
   - Configuracion de hosting.
   - Integraciones externas.
5. Si no hay referencias visibles, marcar el recurso como candidato y preguntar al usuario si quiere conservarlo por compatibilidad, archivo historico o futura reutilizacion.
6. Solo despues de aprobacion explicita del usuario, proceder a eliminar.

## Criterios para evaluar impacto
### Sin impacto directo aparente
- Archivos no enlazados desde `index.html` ni desde CSS o JS activos.
- Recursos heredados que no aparecen en ninguna referencia del proyecto actual.
- Documentacion obsoleta que no describa el estado real del proyecto.

### Con impacto potencial
- Configuraciones de servidor como `.htaccess`.
- Archivos de verificacion externa como `app-ads.txt`.
- Activos que no aparecen en el HTML actual pero podrian estar requeridos por una configuracion de hosting, SEO o publicacion.
- Scripts o estilos heredados que podrian volver a usarse si el usuario los conserva intencionalmente.

## Formato de salida recomendado para el agente
Usar una tabla o lista plana con este esquema:

1. `ruta/del/archivo`
   - Estado: usado / soporte / documentacion / candidato a eliminar.
   - Evidencia: donde se referencia o ausencia de referencias.
   - Impacto si se elimina: alto / medio / bajo / nulo aparente.
   - Nota: explicacion concreta.
   - Pregunta: "No encuentro uso actual de este archivo. ¿Quieres que lo elimine?"

## Casos especiales de este repositorio
- `index.html` es el punto de entrada principal del sitio.
- `styles/main.css` es una capa de compatibilidad activa que importa el sistema modular en `app/css/main.css`.
- `app/css/main.css` es el punto de entrada real del sistema CSS modular.
- `app/js/core/loader.js` es el cargador visible enlazado por la pagina.
- `app/js/core/main.js` es el entrypoint modular real y debe auditarse como runtime activo.
- `app/js/core/runtime-fallback.js` es una ruta de compatibilidad que solo entra si falla la carga modular.
- `assets/` y `app/assets/icons/` deben revisarse segun su uso real despues de cada migracion de recursos.
- `_workspace/guides/` contiene documentacion operativa y no participa en el runtime del sitio.
- `_workspace/rules/` contiene reglas de trabajo para agentes y no debe confundirse con archivos del producto publicado.
- `app-ads.txt` puede no estar referenciado desde el HTML y aun asi ser util para servicios externos.
- `.htaccess` puede no verse desde el frontend y aun asi afectar el hosting.

## Prompt listo para otro agente
Usa este prompt si quieres ejecutar la auditoria con otro agente:

"Revisa este repositorio para identificar que archivos, estilos, scripts y assets se usan realmente en runtime, cuales solo sirven como soporte o documentacion, y cuales parecen no usarse. No elimines nada automaticamente. Para cada candidato a eliminacion, muestra evidencia de uso o no uso, explica el impacto de eliminarlo, indica si el impacto aparente es alto, medio, bajo o nulo, y pregunta explicitamente si el usuario quiere borrarlo. Presta especial atencion a `index.html`, `styles/main.css`, `app/css/main.css`, `app/js/core/loader.js`, `app/js/core/main.js`, `app/js/core/runtime-fallback.js`, `app/assets/`, `assets/`, `.htaccess`, `app-ads.txt`, `_workspace/guides/` y `_workspace/rules/`." 

## Condicion de cierre
La auditoria solo se considera completa cuando el agente haya:
- Identificado recursos usados y candidatos a limpieza.
- Explicado impacto o ausencia de impacto.
- Formulado preguntas de aprobacion antes de cualquier borrado.
