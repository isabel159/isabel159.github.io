# Isabel Rodríguez · Backend & AI Agent Engineer

Portafolio web publicado en **https://isabel159.github.io**

Casos de estudio de agentes de IA y servicios backend en producción (Python, FastAPI, Microsoft Azure, RAG, multiagente, MCP), con arquitectura, decisiones técnicas y capturas.

- CV en español: [cv/CV_Isabel_Rodriguez_ES.pdf](cv/CV_Isabel_Rodriguez_ES.pdf)
- CV in English: [cv/CV_Isabel_Rodriguez_EN.pdf](cv/CV_Isabel_Rodriguez_EN.pdf)
- Portafolio en PDF: [cv/Portafolio_Isabel_Rodriguez.pdf](cv/Portafolio_Isabel_Rodriguez.pdf)

## Estructura

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Página principal (navegación por proyectos) |
| `content.js` | **Todos los textos**: perfil, métricas, proyectos, capturas |
| `render.js`, `styles.css` | Plantillas y estilos |
| `print.html` | Versión para generar el portafolio en PDF |
| `img/<proyecto>/` | Capturas en formato `.webp` |
| `cv/` | CVs y portafolio en PDF |

## Actualizar

- **CV nuevo:** sustituye el PDF en `cv/` manteniendo el mismo nombre. El enlace no cambia.
- **Textos:** edita `content.js`.
- **Captura nueva:** guárdala en `img/<proyecto>/` y añádela en `shots` dentro de `content.js`.

Ver en local: `python -m http.server 8000` y abrir http://localhost:8000

Por acuerdos de confidencialidad, no se publica código fuente ni datos de clientes.
