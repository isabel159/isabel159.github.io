# Isabel Rodríguez · Backend & AI Agent Engineer

Portafolio web publicado en **https://isabel159.github.io**

Casos de estudio de agentes de IA y servicios backend en producción (Python, FastAPI, Microsoft Azure, RAG, multiagente, MCP), con arquitectura, decisiones técnicas y capturas.

- CV en español: [cv/CV_Isabel_Rodriguez_ES.pdf](cv/CV_Isabel_Rodriguez_ES.pdf)
- CV in English: [cv/CV_Isabel_Rodriguez_EN.pdf](cv/CV_Isabel_Rodriguez_EN.pdf)
- Portafolio en PDF: [español](cv/Portafolio_Isabel_Rodriguez.pdf) · [English](cv/Portafolio_Isabel_Rodriguez_EN.pdf)

La web está en español e inglés (botón ES/EN). Enlace directo en inglés: https://isabel159.github.io/?lang=en

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página principal (navegación por proyectos) |
| `content.js` / `content.en.js` | **Todos los textos** en español / inglés: perfil, métricas, proyectos, capturas |
| `i18n.js` | Textos fijos de la interfaz (botones, títulos) y selección de idioma |
| `render.js`, `styles.css` | Plantillas y estilos |
| `print.html` | Versión para generar el portafolio en PDF |
| `img/<proyecto>/` | Capturas en formato `.webp` |
| `cv/` | CVs y portafolio en PDF |

## Actualizar

- **CV nuevo:** sustituye el PDF en `cv/` manteniendo el mismo nombre. El enlace no cambia.
- **Textos:** edita `content.js` (español) y `content.en.js` (inglés). Mantén los mismos proyectos y nombres de capturas en los dos.
- **Captura nueva:** guárdala en `img/<proyecto>/` y añádela en `shots` dentro de `content.js`.

Ver en local: `python -m http.server 8000` y abrir http://localhost:8000

Por acuerdos de confidencialidad, no se publica código fuente ni datos de clientes.
