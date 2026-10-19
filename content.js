// Contenido del portafolio en español. La versión en inglés está en content.en.js (misma estructura).
// Para añadir una captura: guarda la imagen con el nombre indicado en "file" dentro de img/<proyecto>/.
window.PORTFOLIO_ES = {
  profile: {
    name: 'Isabel Esther Rodríguez Alvarez',
    title: 'Backend & AI Agent Engineer',
    stack: ['Python', 'FastAPI', 'Microsoft Azure', 'RAG', 'Multiagente', 'MCP'],
    highlights: [
      { value: '5 años', label: 'de experiencia en backend e IA' },
      { value: '4', label: 'casos de estudio reales' },
      { value: '64', label: 'herramientas MCP propias en un solo agente' },
      { value: '+160k', label: 'direcciones y lugares indexados en búsqueda' },
    ],
    location: 'Remoto · Cuba (horario de EE. UU. Este)',
    github: 'https://github.com/isabel159',
    photo: 'img/isabel.webp',
    photoAlt: 'Foto de Isabel Rodríguez',
    email: 'isabelestherr@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ing-isabel-esther-rodr%C3%ADguez-alvarez-b9ab941b8',
    summary:
      'Ingeniera de Software con 5 años de experiencia en desarrollo backend y agentes de IA. ' +
      'Diseño APIs y servicios cloud en Azure (Functions, Service Bus, SignalR, App Services, AI Search, Cosmos DB) ' +
      'y construyo agentes de IA que funcionan 24/7 en producción: desde sistemas multiagente para salud hasta ' +
      'asistentes que operan procesos reales de negocio. Este portafolio recoge cuatro proyectos con su arquitectura, ' +
      'decisiones técnicas y el trabajo de implementación.',
    note: 'Por acuerdos de confidencialidad, no se muestra código fuente ni datos de clientes. Las capturas usan datos de prueba o anonimizados.',
    skills: [
      { group: 'Backend', items: ['FastAPI', 'Django', 'Spring', 'Node.js', 'APIs REST', 'Arquitectura orientada a eventos', 'Clean Architecture / DDD'] },
      { group: 'Microsoft Azure', items: ['Functions', 'Service Bus', 'SignalR', 'App Services', 'AI Search', 'Cosmos DB', 'Blob Storage', 'Key Vault', 'Container Registry', 'AI Foundry'] },
      { group: 'Agentes de IA', items: ['Multiagente', 'RAG híbrido', 'MCP', 'Function calling', 'Memoria de agentes', 'Azure AI Foundry Agents', 'Azure OpenAI'] },
      { group: 'Datos', items: ['PostgreSQL', 'MongoDB / Cosmos DB', 'Redis', 'Búsqueda vectorial y geoespacial'] },
      { group: 'DevOps', items: ['Docker', 'Azure DevOps (CI/CD)', 'Application Insights', 'OpenTelemetry'] },
    ],
  },

  cases: [
    // ------------------------------------------------------------------ VitalIA
    {
      slug: 'vitalia',
      cover: '03-informe-soap.webp',
      name: 'VitalIA',
      title: 'Plataforma de salud con IA',
      tagline: 'Junta médica multiagente, informes clínicos automáticos y chat médico en tiempo real.',
      kind: 'Agentes de IA + Backend',
      role: 'Arquitectura y desarrollo principal de los tres servicios de la plataforma: motor de agentes, orquestador y capa de tiempo real.',
      tags: ['Multiagente', 'Azure AI Foundry', 'FastAPI', 'Azure Functions', 'SignalR', 'Service Bus', 'FHIR'],
      metrics: [
        { value: '3', label: 'microservicios en Azure' },
        { value: '~9', label: 'agentes especialistas en la junta médica' },
        { value: '8', label: 'agentes de informes en paralelo' },
        { value: '~40k', label: 'líneas en el motor de agentes' },
      ],
      context:
        'VitalIA es una plataforma de salud que acompaña a profesionales y pacientes. Necesitaba analizar casos clínicos complejos con varias ' +
        'perspectivas médicas, generar informes periódicos a partir de datos clínicos estándar (FHIR) y ofrecer un asistente conversacional. ' +
        'Todo ello con respuestas trazables, porque en salud no basta con que la IA "suene bien", y con feedback en tiempo real mientras la IA trabaja.',
      solution: [
        { h: 'Junta médica multiagente', p: 'Un agente coordinador analiza el caso y elige qué especialistas intervienen. Los especialistas proponen hipótesis, agentes críticos de cada especialidad las cuestionan, se refinan y un agente de consenso redacta un informe clínico con un nivel de confianza calculado.' },
        { h: 'Informes clínicos por suscripción', p: 'Ocho agentes generan en paralelo alertas de signos vitales, tendencias poblacionales, estadísticas de condiciones y seguimiento, con la frecuencia y el volumen que define el plan del cliente.' },
        { h: 'Chat médico con memoria', p: 'Asistente conversacional con historial persistente, títulos automáticos y sugerencias de preguntas personalizadas a partir de conversaciones anteriores.' },
        { h: 'Tiempo real', p: 'El usuario ve el progreso del análisis (fase, ciclo y ronda) y las respuestas del agente a medida que se generan, a través de Azure SignalR.' },
      ],
      architecture: {
        caption: 'Arquitectura general: tres servicios desacoplados que se comunican por HTTP, SignalR y Service Bus.',
        lanes: [
          { label: 'Tiempo real', nodes: [{ t: 'Frontend web', s: 'Usuario' }, { t: 'Azure SignalR', s: 'Modo Serverless' }, { t: 'Functions de tiempo real', s: 'Node.js' }, { t: 'Orquestador', s: 'FastAPI · App Service' }] },
          { label: 'IA', nodes: [{ t: 'Orquestador', s: 'FastAPI' }, { t: 'Functions de agentes', s: 'Python' }, { t: 'Azure AI Foundry', s: 'Agents · threads · runs' }, { t: 'Cosmos DB + AI Search', s: 'Historial · RAG' }] },
          { label: 'Informes', nodes: [{ t: 'Service Bus', s: 'Mensajes programados' }, { t: 'Worker de informes', s: 'Azure Functions' }, { t: 'FHIR + Key Vault', s: 'Credenciales por cliente' }, { t: '8 agentes en paralelo', s: 'Resultados en Cosmos DB' }] },
        ],
      },
      flow: {
        title: 'Flujo de la junta médica multiagente',
        steps: [
          { t: 'Extracción clínica', p: 'Text Analytics for Health identifica entidades médicas del caso.' },
          { t: 'Coordinador', p: 'Selecciona especialistas, nivel de urgencia y banderas rojas.' },
          { t: 'Ronda 0 · Hipótesis', p: 'Los especialistas proponen diagnósticos en paralelo.' },
          { t: 'Ronda 1 · Crítica', p: 'Agentes críticos por especialidad buscan debilidades y riesgos.' },
          { t: 'Ronda 2 · Refinamiento', p: 'Los especialistas ajustan hipótesis y confianza.' },
          { t: 'Consenso', p: 'Informe SOAP con ranking de hipótesis y confianza calculada.' },
        ],
      },
      tech: [
        { group: 'Agentes e IA', items: 'Azure AI Foundry Agent Service, GPT-4o y GPT-4o-mini según el rol del agente, Azure OpenAI (embeddings), File Search con vector stores, Azure AI Language (Text Analytics for Health)' },
        { group: 'Backend', items: 'Python, FastAPI, Azure Functions (Python y Node.js), Pydantic, httpx asíncrono' },
        { group: 'Datos', items: 'Cosmos DB (API MongoDB), Azure AI Search (índice vectorial), Redis, Blob Storage' },
        { group: 'Mensajería y tiempo real', items: 'Azure SignalR Serverless, Azure Service Bus (topics y mensajes programados)' },
        { group: 'Seguridad e integración', items: 'Key Vault, Managed Identity, estándar FHIR R4/R5' },
        { group: 'DevOps', items: 'Docker multi-stage, Azure Pipelines, Container Registry, App Service, Application Insights' },
        { group: 'Arquitectura', items: 'Clean Architecture, DDD, CQRS e inyección de dependencias' },
      ],
      challenges: [
        { h: 'Confianza calculada, no autoevaluada', p: 'En lugar de pedirle al LLM que puntúe su propia seguridad, un algoritmo determinista pondera la consistencia entre especialistas, la calidad de la evidencia y la coherencia temporal. El resultado es auditable ronda a ronda.' },
        { h: 'Agentes críticos como "red team" clínico', p: 'Cada especialidad tiene un agente que propone y otro cuyo único objetivo es encontrar fallos en las hipótesis, lo que reduce el sesgo de confirmación.' },
        { h: 'Informes programados sin un cron por cliente', p: 'Cada plan de suscripción define su frecuencia. Al activarse, se programa un mensaje diferido en Service Bus; el worker lo procesa, lanza los agentes en paralelo y programa la siguiente ejecución.' },
        { h: 'Seguridad multi-cliente', p: 'Las credenciales FHIR de cada cliente se resuelven en Key Vault en tiempo de ejecución y nunca se guardan. Los servicios se autentican con Managed Identity.' },
        { h: 'SignalR fiable desde Python', p: 'El orquestador actúa como un cliente más del hub: conexión en un hilo dedicado, ping/pong propio, reconexión automática y re-suscripción a grupos y eventos tras cada caída.' },
        { h: 'Sin respuestas duplicadas al escalar', p: 'Con varias instancias, un mismo evento puede llegar dos veces. Un bloqueo en Redis con expiración evita llamar dos veces al modelo (que es lo caro) y duplicar mensajes.' },
        { h: 'Memoria que no penaliza la latencia', p: 'Las conversaciones se indexan en AI Search con embeddings tras cinco minutos de inactividad, no en cada mensaje. Esa memoria alimenta después las sugerencias personalizadas.' },
        { h: 'Refactor a Clean Architecture', p: 'Los agentes pasaron de código duplicado a una clase base común que concentra threads, reintentos y parseo robusto de JSON, eliminando cerca de mil líneas repetidas.' },
      ],
      shots: [
        { file: '01-chat.webp', caption: 'Chat médico respondiendo (datos de prueba)' },
        { file: '02-analisis-progreso.webp', caption: 'Análisis multiagente en curso: fase, ciclo y ronda' },
        { file: '03-informe-soap.webp', caption: 'Reporte clínico final: diagnósticos diferenciales y confianza global' },
        { file: '04-foundry-agentes.webp', caption: 'Azure AI Foundry: agentes propositivos, críticos y de consenso por especialidad' },
        { file: '06-azure-recursos.webp', caption: 'Recursos de la plataforma en Azure: App Services, Key Vault y almacenamiento' },
      ],
      results: [
        'Análisis clínico multiagente trazable, con historial de cada ronda consultable por API.',
        'Informes clínicos automáticos adaptados a cada plan de suscripción.',
        'Feedback en tiempo real del trabajo de la IA hacia el usuario.',
        'Despliegue continuo en Azure con contenedores y pipelines.',
      ],
    },

    // ------------------------------------------------------------------ Xuxa
    {
      slug: 'xuxa',
      cover: '01-busqueda.webp',
      name: 'Xuxa',
      title: 'Asesora inmobiliaria con IA · ED Bienes Raíces (Panamá)',
      tagline: 'Agente 24/7 en WhatsApp, Telegram y web que busca propiedades, capta clientes y resuelve dudas legales.',
      kind: 'Agentes de IA',
      role: 'Diseño e implementación completa del agente sobre OpenClaw (gateway open source de agentes), extendido con plugins, servidores MCP, RAG legal e infraestructura en Azure.',
      tags: ['WhatsApp', 'Telegram', 'Multiagente', 'RAG', 'MCP', 'Azure AI Search', 'App Service'],
      metrics: [
        { value: '24/7', label: 'atención en 3 canales' },
        { value: '2', label: 'agentes: asesora + experta legal' },
        { value: '3', label: 'servidores MCP propios' },
        { value: 'DEV / PROD', label: 'entornos separados con rollback' },
      ],
      context:
        'En ED Bienes Raíces todos los procesos de atención eran manuales: los clientes esperaban respuesta en horario laboral, los interesados ' +
        'se perdían sin registrarse y las preguntas legales (alquiler, compraventa, propiedad horizontal) consumían tiempo de los agentes.',
      solution: [
        { h: 'Búsqueda de propiedades', p: 'Consulta el CRM inmobiliario AlterEstate con filtros de ciudad, sector, tipo, precio y operación (venta o alquiler), además de proyectos y unidades.' },
        { h: 'Captación automática de clientes', p: 'Cuando detecta interés real (pide visita, precio o dice "me interesa") solicita los datos de contacto y registra el lead en el CRM etiquetado por canal.' },
        { h: 'Lex, experta legal', p: 'Subagente especializado en legislación inmobiliaria de Panamá. Responde con RAG sobre leyes oficiales, citando ley, artículo y fuente.' },
        { h: 'Back-office por roles', p: 'Clientes, agentes y administradores tienen herramientas distintas: Excel, base de datos, gestión de usuarios y, para administración, correo y calendario.' },
        { h: 'Documentos y voz', p: 'Genera PDFs con la marca de la empresa, transcribe notas de voz y ofrece un chat web público de demostración.' },
      ],
      architecture: {
        caption: 'Un gateway de agentes en contenedor recibe los mensajes de todos los canales y orquesta dos agentes y sus herramientas.',
        lanes: [
          { label: 'Entrada', nodes: [{ t: 'WhatsApp · Telegram · Web', s: 'Texto y voz' }, { t: 'Gateway de agentes', s: 'OpenClaw · App Service' }, { t: 'Xuxa', s: 'Azure AI Foundry' }] },
          { label: 'Herramientas', nodes: [{ t: 'Xuxa', s: 'Decide qué usar' }, { t: 'CRM AlterEstate', s: 'Propiedades · leads' }, { t: 'Servidores MCP', s: 'Base de datos · usuarios · Excel' }, { t: 'PDF · Graph', s: 'Blob Storage · correo' }] },
          { label: 'Legal', nodes: [{ t: 'Xuxa', s: 'Delega dudas legales' }, { t: 'Lex', s: 'Subagente aislado' }, { t: 'Azure AI Search', s: 'RAG híbrido + reranker' }, { t: 'Respuesta citada', s: 'Ley · artículo · fuente' }] },
        ],
      },
      flow: {
        title: 'Recorrido de un mensaje',
        steps: [
          { t: 'Recepción', p: 'Llega texto o nota de voz; el audio se transcribe con Azure Whisper.' },
          { t: 'Identificación', p: 'En el primer mensaje se identifica al usuario y su rol en la base de datos.' },
          { t: 'Razonamiento', p: 'El modelo decide qué herramientas usar según la intención y el rol.' },
          { t: 'Acción', p: 'Busca en el CRM, registra el lead, consulta a Lex o genera un documento.' },
          { t: 'Respuesta', p: 'Entrega por el mismo canal, con adjuntos si hace falta.' },
          { t: 'Memoria', p: 'La conversación se guarda y se compacta para sesiones largas.' },
        ],
      },
      tech: [
        { group: 'IA', items: 'Azure AI Foundry (model-router), Azure Whisper, embeddings, RAG híbrido con reranker semántico' },
        { group: 'Plataforma de agentes', items: 'OpenClaw (TypeScript, Node.js 22) con plugins y parches propios' },
        { group: 'Herramientas', items: 'Servidores MCP propios (base de datos, usuarios, Excel), plugin para el CRM con 8 herramientas, generador de PDF' },
        { group: 'Datos', items: 'Cosmos DB for MongoDB, Azure AI Search, Blob Storage' },
        { group: 'Integraciones', items: 'CRM AlterEstate (REST), Microsoft Graph, WhatsApp, Telegram' },
        { group: 'Infraestructura', items: 'App Service para contenedores (DEV y PROD), Container Registry, Azure Files, Container Apps, Managed Identity' },
      ],
      challenges: [
        { h: 'Sesiones de WhatsApp que se "robaban"', p: 'Cargar dependencias desde un disco de red bloqueaba el proceso unos 12 segundos; la conexión perdía latidos y WhatsApp retomaba la sesión. Se separó el estado en disco local de la configuración compartida, eliminando el bloqueo.' },
        { h: 'RAG legal fiable', p: 'Las leyes se trocean por artículo, las búsquedas usan un umbral de relevancia y hasta tres reformulaciones antes de admitir que no hay información. La cita de la fuente y el aviso legal son obligatorios.' },
        { h: 'Multiagente sin bucles', p: 'Xuxa solo delega preguntas jurídicas y Lex trabaja en una sesión aislada con tiempo límite, con reglas explícitas para evitar delegaciones circulares.' },
        { h: 'Mantener un fork vivo', p: 'Cinco actualizaciones del framework base conservando todas las personalizaciones. Las extensiones se hicieron como plugins para reducir conflictos.' },
        { h: 'Defensa frente a alucinaciones', p: 'Registro de documentos recientes para recuperar archivos cuando el modelo "inventa" rutas, y reglas estrictas para trabajar con Excel y adjuntos.' },
        { h: 'Seguridad por capas', p: 'Roles resueltos en base de datos, perfiles de herramientas por agente, servidores MCP en solo lectura para el chat público y protección frente a peticiones a destinos no permitidos.' },
      ],
      shots: [
        { file: '01-busqueda.webp', caption: 'Búsqueda de propiedades pedida por nota de voz, transcrita y consultada en el CRM' },
        { file: '03-lex.webp', caption: 'Xuxa delega en Lex, la experta legal, una consulta sobre desalojo' },
        { file: '04-pdf.webp', caption: 'PDF con la marca de la empresa generado por el agente' },
        { file: '05-usuarios.webp', caption: 'Panel de gestión de usuarios y roles' },
        { file: '06-azure.webp', caption: 'Portal de Azure: App Services de DEV y PROD, Foundry y servicios utilizados' },
        { file: '07-panel-admin.webp', caption: 'Panel de administración: modelo y canales conectados (Telegram y WhatsApp)' },
      ],
      results: [
        'Atención 24/7 en WhatsApp, Telegram y web, sustituyendo un flujo que era completamente manual.',
        'Registro automático de interesados en el CRM, etiquetados por canal de origen.',
        'Respuestas legales con fuente verificable para los clientes de la inmobiliaria.',
        'Despliegues controlados en DEV y PROD con copia previa y marcha atrás documentada.',
      ],
    },

    // ------------------------------------------------------------------ Sage
    {
      slug: 'sage',
      cover: '01-solicitud.webp',
      name: 'Sage',
      title: 'Agente de inventario y compras para restaurantes (Panamá)',
      tagline: 'El personal gestiona inventario, compras y recepción de mercancía conversando con un agente.',
      kind: 'Agentes de IA + Backend',
      logo: 'logo.webp',
      role: 'Diseño e implementación sobre OpenClaw: toda la lógica de negocio en servidores MCP propios, extensiones del gateway, modelo de datos e infraestructura en Azure.',
      tags: ['MCP', 'Telegram', 'Cosmos DB', 'Roles y aprobaciones', 'App Service', 'Azure Files'],
      metrics: [
        { value: '64', label: 'herramientas MCP propias' },
        { value: '5', label: 'roles con permisos dinámicos' },
        { value: '105/105', label: 'pruebas de permisos superadas' },
        { value: '2', label: 'alertas programadas al día' },
      ],
      context:
        'Una cadena de restaurantes controlaba inventario y compras con hojas de cálculo. Las compras no tenían aprobaciones trazables, la ' +
        'mercancía se recibía sin evidencia y el stock real se desviaba del teórico. El personal de cocina y almacén trabaja con el móvil, no con un ERP.',
      solution: [
        { h: 'Inventario auditable', p: 'Cada cambio es un movimiento (compra, venta, producción, merma, devolución, transferencia, ajuste) con quién, cuándo y por qué. El stock semanal se recalcula desde los movimientos.' },
        { h: 'Compras con aprobación por roles', p: 'Solicitudes numeradas con estados y límites de monto por rol y sucursal. Las compras directas avisan si el precio cambió respecto a la última vez.' },
        { h: 'Recepción en dos pasos', p: 'El almacenero registra lo recibido con calidad y foto; otra persona aprueba o rechaza cada línea. Solo lo aprobado mueve el inventario.' },
        { h: 'Alertas de reposición', p: 'Dos veces al día el agente revisa el stock y avisa por Telegram, distinguiendo entre stock bajo y agotado.' },
        { h: 'Unidades del mundo real', p: 'Convierte sacos, quintales, cajas o libras a la unidad base según el producto y el proveedor. Si falta un dato, pregunta en vez de adivinar.' },
        { h: 'Gestión y demo', p: 'Panel web de usuarios y permisos, notas de voz, lectura y generación de Excel, y un chat público de demostración con datos anonimizados.' },
      ],
      architecture: {
        caption: 'El agente no toca la base de datos directamente: toda operación pasa por herramientas MCP que validan rol, permisos y datos.',
        lanes: [
          { label: 'Conversación', nodes: [{ t: 'Telegram · Chat web', s: 'Texto, fotos y voz' }, { t: 'Gateway de agentes', s: 'OpenClaw · App Service' }, { t: 'Sage', s: 'Azure AI Foundry' }] },
          { label: 'Negocio', nodes: [{ t: 'Sage', s: 'Elige la herramienta' }, { t: 'Servidores MCP', s: 'Inventario · usuarios · Excel' }, { t: 'Cosmos DB for MongoDB', s: 'Movimientos · pedidos · roles' }] },
          { label: 'Operación', nodes: [{ t: 'Tareas programadas', s: '8:00 y 18:00' }, { t: 'Revisión de stock', s: 'Niveles y alertas' }, { t: 'Aviso por Telegram', s: 'Informativa o urgente' }] },
        ],
      },
      flow: {
        title: 'Ciclo de una solicitud de compra',
        steps: [
          { t: 'Pendiente', p: 'Se crea con número automático y sucursal.' },
          { t: 'Aprobada', p: 'La aprueba un rol con límite de monto suficiente.' },
          { t: 'En tránsito', p: 'El proveedor la envía; puede recibirse por partes.' },
          { t: 'Recepción', p: 'Registro con calidad y foto de evidencia.' },
          { t: 'Revisión', p: 'Otra persona aprueba o rechaza cada línea.' },
          { t: 'Recibida', p: 'El inventario se actualiza y se recalcula la semana.' },
        ],
      },
      tech: [
        { group: 'IA', items: 'Azure AI Foundry (model-router), Azure Whisper para notas de voz' },
        { group: 'Plataforma de agentes', items: 'OpenClaw (TypeScript, Node.js) con extensiones propias: chat público, API de usuarios y panel web' },
        { group: 'Lógica de negocio', items: 'Servidores MCP propios en Node.js: inventario y compras, usuarios y permisos, Excel' },
        { group: 'Datos', items: 'Cosmos DB for MongoDB (vCore) con validación de esquema, base de demostración anonimizada' },
        { group: 'Infraestructura', items: 'App Service para contenedores, Container Registry, Azure Files (evidencias y configuración)' },
        { group: 'Calidad', items: 'Tests del motor de unidades y suite de extremo a extremo de permisos' },
      ],
      challenges: [
        { h: 'No confiar ciegamente en el modelo', p: 'El rol se lee de la base de datos, las escrituras exigen una confirmación firmada ligada a los datos exactos y la base de datos está fijada por configuración. Nació de un incidente real en el que el modelo improvisó una estructura de datos.' },
        { h: 'Separación de funciones', p: 'Quien recibe la mercancía no puede aprobarla, y quien propone una sustitución de producto no puede confirmarla. Se garantiza en las herramientas, no en el prompt.' },
        { h: 'Respuestas lentas por concurrencia', p: 'El bot tardaba hasta dos minutos con mensajes seguidos. Se diagnosticó una condición de carrera en el inicio de sesión del framework y se corrigió con reintentos y espera exponencial.' },
        { h: 'Persistencia en contenedores', p: 'Las fotos de evidencia caían en almacenamiento efímero. Se movieron a un recurso compartido de Azure Files organizado por pedido.' },
        { h: 'Inventario como libro mayor', p: 'Los movimientos son la fuente de verdad y el stock semanal es una vista recalculada en cadena, incluso cuando se registra un movimiento de una semana pasada.' },
        { h: 'Demo pública segura', p: 'Agente separado, base anonimizada, solo herramientas de lectura, límites de peticiones y CORS. Los bloqueos del filtro de contenido se responden como un rechazo normal.' },
      ],
      shots: [
        { file: '01-solicitud.webp', caption: 'Compra por chat: aviso de cambio de precio y confirmación antes de registrar' },
        { file: '02-recepcion.webp', caption: 'Recepción: foto de evidencia y aprobación de la línea' },
        { file: '03-alerta.webp', caption: 'Alerta de reposición programada' },
        { file: '04-unidades.webp', caption: 'Conversión de unidades: quintales, sacos, libras y kilos' },
        { file: '05-permisos.webp', caption: 'Panel de permisos por rol' },
        { file: '06-usuarios.webp', caption: 'Panel de usuarios (teléfonos ocultos)' },
        { file: '07-panel-admin.webp', caption: 'Panel de administración: usuarios, roles y permisos por herramienta' },
      ],
      results: [
        'Compras y recepciones con trazabilidad completa y aprobación humana en cada paso crítico.',
        'Alertas automáticas de reposición sin revisar hojas de cálculo.',
        'Permisos reasignables desde un panel web, con efecto inmediato en el agente.',
        'Demo pública para enseñar el producto sin exponer datos reales.',
      ],
    },

    // ------------------------------------------------------------------ Backend
    {
      slug: 'backend',
      cover: '04-ai-search.webp',
      name: 'Proyectos de Backend',
      title: 'Plataforma de movilidad: búsqueda geoespacial y mensajería en tiempo real',
      tagline: 'Servicios backend para una app de transporte que conecta pasajeros y conductores.',
      kind: 'Backend',
      role: 'Evolución del motor de búsqueda de direcciones en un servicio existente, y desarrollo completo del servicio de mensajería en tiempo real.',
      tags: ['Python', 'FastAPI', 'Azure AI Search', 'Service Bus', 'Azure SignalR', 'Azure Functions', 'Azure DevOps'],
      metrics: [
        { value: '2', label: 'servicios en producción' },
        { value: '3', label: 'colas de Service Bus' },
        { value: '4', label: 'etapas en el pipeline de despliegue' },
        { value: '3', label: 'modos de envío: usuario, grupo o todos' },
      ],
      context:
        'Una app de movilidad necesita que el pasajero encuentre su destino en segundos escribiendo texto libre, y que pasajeros y conductores ' +
        'intercambien eventos al instante aunque la conexión móvil sea inestable.',
      solution: [
        { h: 'Motor de búsqueda de direcciones', p: 'Devuelve lugares y direcciones ordenados por relevancia, popularidad y cercanía, con geocodificación inversa, cálculo de rutas y alta de comercios.' },
        { h: 'Procesamiento por colas', p: 'Las búsquedas entran por eventos y se procesan de forma asíncrona con Service Bus, sin bloquear la recepción de mensajes.' },
        { h: 'Mensajería en tiempo real serverless', p: 'Azure SignalR y Azure Functions enrutan eventos entre usuarios concretos, grupos o todos, sin un servidor dedicado.' },
        { h: 'Contratos de eventos como artefacto', p: 'La especificación AsyncAPI se genera, se valida y se publica automáticamente en los repositorios que la consumen.' },
      ],
      architecture: {
        caption: 'Dos servicios complementarios: búsqueda geoespacial por eventos y un hub de mensajería serverless.',
        lanes: [
          { label: 'Búsqueda', nodes: [{ t: 'App móvil', s: 'Texto o coordenadas' }, { t: 'Hub de eventos', s: 'SignalR / Socket.IO' }, { t: 'Servicio de búsqueda', s: 'FastAPI · App Service' }, { t: 'Service Bus', s: 'Colas de trabajo' }] },
          { label: 'Datos', nodes: [{ t: 'Workers asíncronos', s: 'Concurrencia limitada' }, { t: 'Azure AI Search', s: 'Índice geoespacial' }, { t: 'MongoDB', s: 'Direcciones y lugares' }, { t: 'GIS + Mapbox', s: 'Geocodificación con respaldo' }] },
          { label: 'Tiempo real', nodes: [{ t: 'App o backend', s: 'Evento' }, { t: 'Azure SignalR', s: 'Serverless' }, { t: 'Azure Functions', s: 'Enrutador de eventos' }, { t: 'Destinatario', s: 'Usuario, grupo o todos' }] },
        ],
      },
      flow: {
        title: 'Recorrido de una búsqueda',
        steps: [
          { t: 'Evento', p: 'La app envía el texto buscado por el hub de tiempo real.' },
          { t: 'Validación', p: 'Se valida el mensaje y se identifica al usuario.' },
          { t: 'Cola', p: 'Se encola en Service Bus y el receptor queda libre al instante.' },
          { t: 'Consulta', p: 'Dos búsquedas en paralelo: lugares y direcciones, con filtro por distancia.' },
          { t: 'Fusión', p: 'Se combinan por relevancia y popularidad.' },
          { t: 'Respuesta', p: 'Se devuelve solo a ese usuario, comprimida según la versión de la app.' },
        ],
      },
      tech: [
        { group: 'Búsqueda', items: 'Python 3.11, FastAPI, Azure AI Search (índice geoespacial, analizador en español, perfiles de puntuación)' },
        { group: 'Mensajería', items: 'Azure Service Bus, Azure SignalR Serverless, Socket.IO' },
        { group: 'Serverless', items: 'Azure Functions en Node.js (modelo v4), Azurite para desarrollo local' },
        { group: 'Datos e integraciones', items: 'MongoDB, Blob Storage, API GIS, Mapbox (geocodificación y rutas)' },
        { group: 'DevOps', items: 'Docker, Azure DevOps (pipelines de 4 etapas), Container Registry, App Service, AsyncAPI' },
        { group: 'Observabilidad', items: 'OpenTelemetry, Application Insights, métricas propias de cola, health checks con auto-reparación' },
      ],
      challenges: [
        { h: 'Desacoplar recepción y procesamiento', p: 'El receptor de eventos se bloqueaba con búsquedas lentas. Se introdujo Service Bus con un productor de larga vida y un consumidor asíncrono con concurrencia controlada.' },
        { h: 'Relevancia de búsqueda', p: 'Lugares y direcciones se consultan en paralelo y se fusionan con criterios distintos: relevancia para lugares y popularidad para direcciones, con umbral mínimo configurable.' },
        { h: 'Intenciones declarativas', p: 'Reglas en un archivo de configuración convierten búsquedas como "restaurante" o "aeropuerto" en filtros por categoría, ajustables sin desplegar código.' },
        { h: 'Conexiones inestables', p: 'Reconexión en dos capas, latido propio y un health check que avisa a Azure para reciclar la instancia si la conexión no se recupera.' },
        { h: 'Hub de mensajería sin servidor', p: 'SignalR en modo Serverless con Functions: los clientes invocan eventos que atienden funciones, y el nombre del evento se decide en tiempo de ejecución, así que se añaden eventos nuevos sin desplegar.' },
        { h: 'Observabilidad con coste controlado', p: 'Muestreo de telemetría y métricas propias de tiempo en cola y fallos de procesamiento.' },
      ],
      shots: [
        { file: '01-busqueda.webp', caption: 'Búsqueda de direcciones en la app: sugerencias mientras se escribe' },
        { file: '02-pipeline.webp', caption: 'Pipeline de Azure DevOps: validación de APIs, despliegue y publicación de contratos' },
        { file: '03-asyncapi.webp', caption: 'Contrato AsyncAPI de los eventos, generado y validado en el pipeline' },
        { file: '04-ai-search.webp', caption: 'Índices de Azure AI Search: más de 160.000 direcciones y lugares en producción' },
        { file: '06-functions.webp', caption: 'Function App de tiempo real: triggers de SignalR y HTTP' },
      ],
      results: [
        'Búsqueda de direcciones rápida y relevante sin bloquear el canal de eventos.',
        'Mensajería en tiempo real que escala a cero y admite eventos nuevos sin desplegar.',
        'Contratos de API siempre sincronizados entre backend, frontend y tiempo real.',
      ],
    },
  ],
};
