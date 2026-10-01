# Workspace Operativo

Esta carpeta agrupa todo el material que sirve para operar, documentar y gobernar el repositorio sin mezclarlo con los archivos del producto publicado.

## Objetivo
Separar claramente dos mundos:
- El sitio real que se publica o ejecuta.
- La documentacion, reglas y guias usadas por agentes o por mantenimiento interno.

## Estructura
- `guides/`: planes, guias de implementacion, auditorias y prompts de trabajo.
- `rules/`: reglas persistentes que los agentes deben respetar.

## Regla de uso
Cuando una tarea requiera contexto operativo, los agentes deben revisar primero esta carpeta antes de editar el proyecto.

## Rutas principales
- `_workspace/guides/plan-web-corporativa.md`
- `_workspace/guides/guia-agente-implementacion.md`
- `_workspace/guides/guia-agente-auditoria-uso.md`
- `_workspace/guides/revision-uso-actual.md`
- `_workspace/guides/guia-uso-instrucciones-agentes.md`
- `_workspace/rules/root-protected-files.md`