# Guia Paso a Paso Para El Agente

## Objetivo operativo
Implementar una landing corporativa para Kleyson Klaus usando la estructura actual del repositorio, pero reemplazando la portada temporal por una propuesta profesional, neutra y orientada a producto.

## Orden de trabajo
1. Actualizar `index.html` para convertir la estructura actual en una landing semantica completa.
2. Conectar una nueva hoja `styles/main.css` y retirar la dependencia visual principal de `styles/blur.css`.
3. Mantener fuera del flujo principal cualquier elemento visual heredado que sugiera una identidad tematica ajena a la marca.
4. Crear secciones de hero, empresa, aplicaciones, proceso y contacto.
5. Dejar placeholders claros donde falten nombres reales de apps, URLs de stores o datos de contacto definitivos.
6. Revisar la experiencia en desktop y movil.

## Reglas de implementacion
- Tratar “Kleyson Klaus” como una marca de empresa, no como una persona.
- No usar activos de StarCraft como parte de la identidad final.
- Evitar efectos que rompan el scroll o compliquen la lectura.
- Mantener el codigo simple y facil de editar.
- Usar copy en espanol.

## Archivos a modificar o crear
- `index.html`
- `styles/main.css`
- `_workspace/guides/plan-web-corporativa.md`
- `_workspace/guides/guia-agente-implementacion.md`

## Secciones sugeridas
### Hero
- Titulo corporativo.
- Subtitulo con propuesta de valor.
- CTA principal hacia aplicaciones.
- CTA secundario hacia contacto.

### Empresa
- Breve explicacion de que hace la empresa.
- Tres capacidades o atributos diferenciadores.

### Aplicaciones
- Tarjetas de apps con nombre, plataforma, descripcion y estado.
- Espacio para enlaces a Play Store y App Store.

### Proceso
- Descubrimiento.
- Construccion.
- Operacion.

### Contacto
- Correo.
- Canal comercial.
- Disponibilidad o tiempo de respuesta.

## Checklist final
- Verificar que la pagina carga sin depender del canvas anterior.
- Verificar que el header navega por anclas.
- Verificar contraste y legibilidad.
- Verificar layout responsivo.
- Verificar que no quedaron textos temporales antiguos.
