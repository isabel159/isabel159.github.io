// Portfolio content in English. Same structure as content.js (Spanish).
// Image file names must match the Spanish version.
window.PORTFOLIO_EN = {
  profile: {
    name: 'Isabel Esther Rodríguez Alvarez',
    title: 'Backend & AI Agent Engineer',
    stack: ['Python', 'FastAPI', 'Microsoft Azure', 'RAG', 'Multi-agent', 'MCP'],
    highlights: [
      { value: '5 years', label: 'of backend and AI experience' },
      { value: '4', label: 'real-world case studies' },
      { value: '64', label: 'custom MCP tools in a single agent' },
      { value: '160k+', label: 'addresses and places indexed for search' },
    ],
    location: 'Remote · Cuba (US Eastern Time)',
    github: 'https://github.com/isabel159',
    photo: 'img/isabel.webp',
    photoAlt: 'Photo of Isabel Rodríguez',
    email: 'isabelestherr@gmail.com',
    linkedin: 'https://www.linkedin.com/in/ing-isabel-esther-rodr%C3%ADguez-alvarez-b9ab941b8',
    summary:
      'Software engineer with 5 years of experience in backend development and AI agents. ' +
      'I design APIs and cloud services on Azure (Functions, Service Bus, SignalR, App Services, AI Search, Cosmos DB) ' +
      'and build AI agents that run 24/7 in production: from multi-agent systems for healthcare to ' +
      'assistants that run real business processes. This portfolio presents four projects with their architecture, ' +
      'technical decisions and implementation work.',
    note: 'Due to confidentiality agreements, no source code or client data is shown. Screenshots use test or anonymized data.',
    skills: [
      { group: 'Backend', items: ['FastAPI', 'Django', 'Spring', 'Node.js', 'REST APIs', 'Event-driven architecture', 'Clean Architecture / DDD'] },
      { group: 'Microsoft Azure', items: ['Functions', 'Service Bus', 'SignalR', 'App Services', 'AI Search', 'Cosmos DB', 'Blob Storage', 'Key Vault', 'Container Registry', 'AI Foundry'] },
      { group: 'AI Agents', items: ['Multi-agent', 'Hybrid RAG', 'MCP', 'Function calling', 'Agent memory', 'Azure AI Foundry Agents', 'Azure OpenAI'] },
      { group: 'Data', items: ['PostgreSQL', 'MongoDB / Cosmos DB', 'Redis', 'Vector and geospatial search'] },
      { group: 'DevOps', items: ['Docker', 'Azure DevOps (CI/CD)', 'Application Insights', 'OpenTelemetry'] },
    ],
  },

  cases: [
    // ------------------------------------------------------------------ VitalIA
    {
      slug: 'vitalia',
      cover: '03-informe-soap.webp',
      name: 'VitalIA',
      title: 'AI-powered healthcare platform',
      tagline: 'Multi-agent medical board, automated clinical reports and real-time medical chat.',
      kind: 'AI Agents + Backend',
      role: 'Lead architect and developer of the platform’s three services: agent engine, orchestrator and real-time layer.',
      tags: ['Multi-agent', 'Azure AI Foundry', 'FastAPI', 'Azure Functions', 'SignalR', 'Service Bus', 'FHIR'],
      metrics: [
        { value: '3', label: 'microservices on Azure' },
        { value: '~9', label: 'specialist agents on the medical board' },
        { value: '8', label: 'report agents running in parallel' },
        { value: '~40k', label: 'lines of code in the agent engine' },
      ],
      context:
        'VitalIA is a healthcare platform that supports clinicians and patients. It needed to analyze complex clinical cases from several ' +
        'medical perspectives, generate periodic reports from standard clinical data (FHIR) and offer a conversational assistant. ' +
        'All with traceable answers, because in healthcare it is not enough for the AI to "sound right", and with real-time feedback while the AI works.',
      solution: [
        { h: 'Multi-agent medical board', p: 'A coordinator agent analyzes the case and selects which specialists take part. Specialists propose hypotheses, critic agents for each specialty challenge them, the hypotheses are refined, and a consensus agent writes a clinical report with a calculated confidence level.' },
        { h: 'Subscription-based clinical reports', p: 'Eight agents generate vital-sign alerts, population trends, condition statistics and follow-ups in parallel, at the frequency and volume defined by the client’s plan.' },
        { h: 'Medical chat with memory', p: 'Conversational assistant with persistent history, automatic titles and personalized question suggestions based on previous conversations.' },
        { h: 'Real time', p: 'Users see the analysis progress (phase, cycle and round) and the agent’s answers as they are generated, through Azure SignalR.' },
      ],
      architecture: {
        caption: 'Overall architecture: three decoupled services communicating over HTTP, SignalR and Service Bus.',
        lanes: [
          { label: 'Real time', nodes: [{ t: 'Web frontend', s: 'User' }, { t: 'Azure SignalR', s: 'Serverless mode' }, { t: 'Real-time Functions', s: 'Node.js' }, { t: 'Orchestrator', s: 'FastAPI · App Service' }] },
          { label: 'AI', nodes: [{ t: 'Orchestrator', s: 'FastAPI' }, { t: 'Agent Functions', s: 'Python' }, { t: 'Azure AI Foundry', s: 'Agents · threads · runs' }, { t: 'Cosmos DB + AI Search', s: 'History · RAG' }] },
          { label: 'Reports', nodes: [{ t: 'Service Bus', s: 'Scheduled messages' }, { t: 'Report worker', s: 'Azure Functions' }, { t: 'FHIR + Key Vault', s: 'Per-client credentials' }, { t: '8 agents in parallel', s: 'Results in Cosmos DB' }] },
        ],
      },
      flow: {
        title: 'Multi-agent medical board flow',
        steps: [
          { t: 'Clinical extraction', p: 'Text Analytics for Health identifies medical entities in the case.' },
          { t: 'Coordinator', p: 'Selects specialists, urgency level and red flags.' },
          { t: 'Round 0 · Hypotheses', p: 'Specialists propose diagnoses in parallel.' },
          { t: 'Round 1 · Critique', p: 'Specialty critic agents look for weaknesses and risks.' },
          { t: 'Round 2 · Refinement', p: 'Specialists adjust hypotheses and confidence.' },
          { t: 'Consensus', p: 'SOAP report with ranked hypotheses and calculated confidence.' },
        ],
      },
      tech: [
        { group: 'Agents and AI', items: 'Azure AI Foundry Agent Service, GPT-4o and GPT-4o-mini depending on the agent’s role, Azure OpenAI (embeddings), File Search with vector stores, Azure AI Language (Text Analytics for Health)' },
        { group: 'Backend', items: 'Python, FastAPI, Azure Functions (Python and Node.js), Pydantic, async httpx' },
        { group: 'Data', items: 'Cosmos DB (MongoDB API), Azure AI Search (vector index), Redis, Blob Storage' },
        { group: 'Messaging and real time', items: 'Azure SignalR Serverless, Azure Service Bus (topics and scheduled messages)' },
        { group: 'Security and integration', items: 'Key Vault, Managed Identity, FHIR R4/R5 standard' },
        { group: 'DevOps', items: 'Multi-stage Docker, Azure Pipelines, Container Registry, App Service, Application Insights' },
        { group: 'Architecture', items: 'Clean Architecture, DDD, CQRS and dependency injection' },
      ],
      challenges: [
        { h: 'Calculated, not self-assessed, confidence', p: 'Instead of asking the LLM to score its own certainty, a deterministic algorithm weighs agreement between specialists, quality of evidence and temporal consistency. The result is auditable round by round.' },
        { h: 'Critic agents as a clinical "red team"', p: 'Each specialty has one agent that proposes and another whose only goal is to find flaws in the hypotheses, which reduces confirmation bias.' },
        { h: 'Scheduled reports without one cron per client', p: 'Each subscription plan defines its frequency. On activation, a deferred message is scheduled in Service Bus; the worker processes it, runs the agents in parallel and schedules the next run.' },
        { h: 'Multi-tenant security', p: 'Each client’s FHIR credentials are resolved from Key Vault at runtime and never stored. Services authenticate with Managed Identity.' },
        { h: 'Reliable SignalR from Python', p: 'The orchestrator acts as just another hub client: connection on a dedicated thread, custom ping/pong, automatic reconnection and re-subscription to groups and events after every drop.' },
        { h: 'No duplicate answers when scaling out', p: 'With several instances, the same event can arrive twice. A Redis lock with expiry prevents calling the model twice (the expensive part) and duplicating messages.' },
        { h: 'Memory without a latency penalty', p: 'Conversations are indexed in AI Search with embeddings after five minutes of inactivity, not on every message. That memory then powers the personalized suggestions.' },
        { h: 'Refactor to Clean Architecture', p: 'The agents moved from duplicated code to a shared base class handling threads, retries and robust JSON parsing, removing close to a thousand repeated lines.' },
      ],
      shots: [
        { file: '01-chat.webp', caption: 'Medical chat answering (test data)' },
        { file: '02-analisis-progreso.webp', caption: 'Multi-agent analysis in progress: phase, cycle and round' },
        { file: '03-informe-soap.webp', caption: 'Final clinical report: differential diagnoses and overall confidence' },
        { file: '04-foundry-agentes.webp', caption: 'Azure AI Foundry: proposing, critic and consensus agents per specialty' },
        { file: '06-azure-recursos.webp', caption: 'Platform resources on Azure: App Services, Key Vault and storage' },
      ],
      results: [
        'Traceable multi-agent clinical analysis, with every round’s history available through the API.',
        'Automated clinical reports tailored to each subscription plan.',
        'Real-time feedback to the user on what the AI is doing.',
        'Continuous deployment to Azure with containers and pipelines.',
      ],
    },

    // ------------------------------------------------------------------ Xuxa
    {
      slug: 'xuxa',
      cover: '01-busqueda.webp',
      name: 'Xuxa',
      title: 'AI real estate advisor · ED Bienes Raíces (Panama)',
      tagline: '24/7 agent on WhatsApp, Telegram and web that searches properties, captures leads and answers legal questions.',
      kind: 'AI Agents',
      role: 'End-to-end design and implementation of the agent on OpenClaw (an open-source agent gateway), extended with plugins, MCP servers, legal RAG and Azure infrastructure.',
      tags: ['WhatsApp', 'Telegram', 'Multi-agent', 'RAG', 'MCP', 'Azure AI Search', 'App Service'],
      metrics: [
        { value: '24/7', label: 'support across 3 channels' },
        { value: '2', label: 'agents: advisor + legal expert' },
        { value: '3', label: 'custom MCP servers' },
        { value: 'DEV / PROD', label: 'separate environments with rollback' },
      ],
      context:
        'At ED Bienes Raíces every customer process was manual: clients waited for answers during business hours, prospects ' +
        'were lost without being registered, and legal questions (rentals, sales, condominium law) took up the agents’ time.',
      solution: [
        { h: 'Property search', p: 'Queries the AlterEstate real estate CRM with filters for city, area, type, price and operation (sale or rent), plus projects and units.' },
        { h: 'Automatic lead capture', p: 'When it detects real interest (asking for a viewing or a price, or saying "I’m interested") it asks for contact details and registers the lead in the CRM, tagged by channel.' },
        { h: 'Lex, the legal expert', p: 'Sub-agent specialized in Panamanian real estate law. Answers with RAG over official legislation, citing the law, article and source.' },
        { h: 'Role-based back office', p: 'Clients, agents and administrators get different tools: Excel, database, user management and, for administrators, email and calendar.' },
        { h: 'Documents and voice', p: 'Generates branded PDFs, transcribes voice notes and offers a public web demo chat.' },
      ],
      architecture: {
        caption: 'A containerized agent gateway receives messages from every channel and orchestrates two agents and their tools.',
        lanes: [
          { label: 'Input', nodes: [{ t: 'WhatsApp · Telegram · Web', s: 'Text and voice' }, { t: 'Agent gateway', s: 'OpenClaw · App Service' }, { t: 'Xuxa', s: 'Azure AI Foundry' }] },
          { label: 'Tools', nodes: [{ t: 'Xuxa', s: 'Decides what to use' }, { t: 'AlterEstate CRM', s: 'Properties · leads' }, { t: 'MCP servers', s: 'Database · users · Excel' }, { t: 'PDF · Graph', s: 'Blob Storage · email' }] },
          { label: 'Legal', nodes: [{ t: 'Xuxa', s: 'Delegates legal questions' }, { t: 'Lex', s: 'Isolated sub-agent' }, { t: 'Azure AI Search', s: 'Hybrid RAG + reranker' }, { t: 'Cited answer', s: 'Law · article · source' }] },
        ],
      },
      flow: {
        title: 'Journey of a message',
        steps: [
          { t: 'Reception', p: 'Text or a voice note arrives; audio is transcribed with Azure Whisper.' },
          { t: 'Identification', p: 'On the first message, the user and their role are looked up in the database.' },
          { t: 'Reasoning', p: 'The model decides which tools to use based on intent and role.' },
          { t: 'Action', p: 'Searches the CRM, registers the lead, consults Lex or generates a document.' },
          { t: 'Response', p: 'Replies on the same channel, with attachments when needed.' },
          { t: 'Memory', p: 'The conversation is stored and compacted for long sessions.' },
        ],
      },
      tech: [
        { group: 'AI', items: 'Azure AI Foundry (model-router), Azure Whisper, embeddings, hybrid RAG with semantic reranker' },
        { group: 'Agent platform', items: 'OpenClaw (TypeScript, Node.js 22) with custom plugins and patches' },
        { group: 'Tools', items: 'Custom MCP servers (database, users, Excel), CRM plugin with 8 tools, PDF generator' },
        { group: 'Data', items: 'Cosmos DB for MongoDB, Azure AI Search, Blob Storage' },
        { group: 'Integrations', items: 'AlterEstate CRM (REST), Microsoft Graph, WhatsApp, Telegram' },
        { group: 'Infrastructure', items: 'App Service for containers (DEV and PROD), Container Registry, Azure Files, Container Apps, Managed Identity' },
      ],
      challenges: [
        { h: 'WhatsApp sessions being "stolen"', p: 'Loading dependencies from a network drive blocked the process for about 12 seconds; the connection missed heartbeats and WhatsApp took the session back. Local disk state was separated from shared configuration, removing the block.' },
        { h: 'Reliable legal RAG', p: 'Laws are chunked by article, searches use a relevance threshold and up to three reformulations before admitting there is no information. Citing the source and a legal disclaimer are mandatory.' },
        { h: 'Multi-agent without loops', p: 'Xuxa only delegates legal questions, and Lex works in an isolated session with a time limit, with explicit rules that prevent circular delegation.' },
        { h: 'Keeping a fork alive', p: 'Five upgrades of the base framework while preserving every customization. Extensions were built as plugins to reduce conflicts.' },
        { h: 'Defending against hallucinations', p: 'A registry of recent documents recovers files when the model "invents" paths, plus strict rules for working with Excel files and attachments.' },
        { h: 'Layered security', p: 'Roles resolved from the database, per-agent tool profiles, read-only MCP servers for the public chat and protection against requests to disallowed destinations.' },
      ],
      shots: [
        { file: '01-busqueda.webp', caption: 'Property search requested by voice note, transcribed and run against the CRM' },
        { file: '03-lex.webp', caption: 'Xuxa delegates an eviction question to Lex, the legal expert' },
        { file: '04-pdf.webp', caption: 'Branded PDF generated by the agent' },
        { file: '05-usuarios.webp', caption: 'User and role management panel' },
        { file: '06-azure.webp', caption: 'Azure portal: DEV and PROD App Services, Foundry and services used' },
        { file: '07-panel-admin.webp', caption: 'Admin panel: model and connected channels (Telegram and WhatsApp)' },
      ],
      results: [
        '24/7 support on WhatsApp, Telegram and web, replacing a fully manual workflow.',
        'Automatic lead registration in the CRM, tagged by source channel.',
        'Legal answers with verifiable sources for the agency’s clients.',
        'Controlled DEV and PROD deployments with prior backups and a documented rollback.',
      ],
    },

    // ------------------------------------------------------------------ Sage
    {
      slug: 'sage',
      cover: '01-solicitud.webp',
      name: 'Sage',
      title: 'Inventory and purchasing agent for restaurants (Panama)',
      tagline: 'Staff manage inventory, purchasing and goods receiving by chatting with an agent.',
      kind: 'AI Agents + Backend',
      logo: 'logo.webp',
      role: 'Design and implementation on OpenClaw: all business logic in custom MCP servers, gateway extensions, data model and Azure infrastructure.',
      tags: ['MCP', 'Telegram', 'Cosmos DB', 'Roles and approvals', 'App Service', 'Azure Files'],
      metrics: [
        { value: '64', label: 'custom MCP tools' },
        { value: '5', label: 'roles with dynamic permissions' },
        { value: '105/105', label: 'permission tests passing' },
        { value: '2', label: 'scheduled alerts per day' },
      ],
      context:
        'A restaurant chain tracked inventory and purchasing in spreadsheets. Purchases had no traceable approvals, ' +
        'goods were received without evidence and real stock drifted from theoretical stock. Kitchen and warehouse staff work from their phones, not an ERP.',
      solution: [
        { h: 'Auditable inventory', p: 'Every change is a movement (purchase, sale, production, waste, return, transfer, adjustment) recording who, when and why. Weekly stock is recalculated from the movements.' },
        { h: 'Role-based purchase approvals', p: 'Numbered requests with statuses and amount limits per role and branch. Direct purchases warn when the price has changed since the last time.' },
        { h: 'Two-step receiving', p: 'The warehouse clerk records what arrived with quality notes and a photo; another person approves or rejects each line. Only approved items move inventory.' },
        { h: 'Restock alerts', p: 'Twice a day the agent checks stock and sends a Telegram alert, distinguishing low stock from out of stock.' },
        { h: 'Real-world units', p: 'Converts sacks, quintals, boxes or pounds to the base unit by product and supplier. When data is missing, it asks instead of guessing.' },
        { h: 'Management and demo', p: 'Web panel for users and permissions, voice notes, Excel import and export, and a public demo chat with anonymized data.' },
      ],
      architecture: {
        caption: 'The agent never touches the database directly: every operation goes through MCP tools that validate role, permissions and data.',
        lanes: [
          { label: 'Conversation', nodes: [{ t: 'Telegram · Web chat', s: 'Text, photos and voice' }, { t: 'Agent gateway', s: 'OpenClaw · App Service' }, { t: 'Sage', s: 'Azure AI Foundry' }] },
          { label: 'Business', nodes: [{ t: 'Sage', s: 'Chooses the tool' }, { t: 'MCP servers', s: 'Inventory · users · Excel' }, { t: 'Cosmos DB for MongoDB', s: 'Movements · orders · roles' }] },
          { label: 'Operations', nodes: [{ t: 'Scheduled tasks', s: '8:00 and 18:00' }, { t: 'Stock review', s: 'Levels and alerts' }, { t: 'Telegram alert', s: 'Informational or urgent' }] },
        ],
      },
      flow: {
        title: 'Lifecycle of a purchase request',
        steps: [
          { t: 'Pending', p: 'Created with an automatic number and branch.' },
          { t: 'Approved', p: 'Approved by a role with a high enough amount limit.' },
          { t: 'In transit', p: 'The supplier ships it; it can be received in parts.' },
          { t: 'Receiving', p: 'Recorded with quality notes and photo evidence.' },
          { t: 'Review', p: 'Another person approves or rejects each line.' },
          { t: 'Received', p: 'Inventory is updated and the week is recalculated.' },
        ],
      },
      tech: [
        { group: 'AI', items: 'Azure AI Foundry (model-router), Azure Whisper for voice notes' },
        { group: 'Agent platform', items: 'OpenClaw (TypeScript, Node.js) with custom extensions: public chat, users API and web panel' },
        { group: 'Business logic', items: 'Custom MCP servers in Node.js: inventory and purchasing, users and permissions, Excel' },
        { group: 'Data', items: 'Cosmos DB for MongoDB (vCore) with schema validation, anonymized demo database' },
        { group: 'Infrastructure', items: 'App Service for containers, Container Registry, Azure Files (evidence and configuration)' },
        { group: 'Quality', items: 'Unit-engine tests and an end-to-end permissions test suite' },
      ],
      challenges: [
        { h: 'Not blindly trusting the model', p: 'The role is read from the database, writes require a signed confirmation bound to the exact data, and the database is pinned by configuration. This came from a real incident in which the model improvised a data structure.' },
        { h: 'Separation of duties', p: 'Whoever receives goods cannot approve them, and whoever proposes a product substitution cannot confirm it. This is enforced in the tools, not in the prompt.' },
        { h: 'Slow replies under concurrency', p: 'The bot took up to two minutes with back-to-back messages. A race condition in the framework’s session start-up was diagnosed and fixed with retries and exponential backoff.' },
        { h: 'Persistence in containers', p: 'Evidence photos were landing in ephemeral storage. They were moved to an Azure Files share organized by order.' },
        { h: 'Inventory as a ledger', p: 'Movements are the source of truth and weekly stock is a chained, recalculated view, even when a movement is recorded for a past week.' },
        { h: 'Safe public demo', p: 'Separate agent, anonymized database, read-only tools, rate limits and CORS. Content-filter blocks are returned as a normal refusal.' },
      ],
      shots: [
        { file: '01-solicitud.webp', caption: 'Purchase by chat: price-change warning and confirmation before saving' },
        { file: '02-recepcion.webp', caption: 'Receiving: photo evidence and line approval' },
        { file: '03-alerta.webp', caption: 'Scheduled restock alert' },
        { file: '04-unidades.webp', caption: 'Unit conversion: quintals, sacks, pounds and kilos' },
        { file: '05-permisos.webp', caption: 'Role permissions panel' },
        { file: '06-usuarios.webp', caption: 'Users panel (phone numbers hidden)' },
        { file: '07-panel-admin.webp', caption: 'Admin panel: users, roles and per-tool permissions' },
      ],
      results: [
        'Purchasing and receiving with full traceability and human approval at every critical step.',
        'Automatic restock alerts without checking spreadsheets.',
        'Permissions reassignable from a web panel, taking effect in the agent immediately.',
        'Public demo to showcase the product without exposing real data.',
      ],
    },

    // ------------------------------------------------------------------ Backend
    {
      slug: 'backend',
      cover: '04-ai-search.webp',
      name: 'Backend Projects',
      title: 'Mobility platform: geospatial search and real-time messaging',
      tagline: 'Backend services for a ride-hailing app that connects passengers and drivers.',
      kind: 'Backend',
      role: 'Evolved the address search engine in an existing service and built the real-time messaging service end to end.',
      tags: ['Python', 'FastAPI', 'Azure AI Search', 'Service Bus', 'Azure SignalR', 'Azure Functions', 'Azure DevOps'],
      metrics: [
        { value: '2', label: 'services in production' },
        { value: '3', label: 'Service Bus queues' },
        { value: '4', label: 'stages in the deployment pipeline' },
        { value: '3', label: 'delivery modes: user, group or all' },
      ],
      context:
        'A mobility app needs passengers to find their destination in seconds by typing free text, and passengers and drivers ' +
        'to exchange events instantly even when the mobile connection is unstable.',
      solution: [
        { h: 'Address search engine', p: 'Returns places and addresses ranked by relevance, popularity and proximity, with reverse geocoding, route calculation and business registration.' },
        { h: 'Queue-based processing', p: 'Searches arrive as events and are processed asynchronously with Service Bus, without blocking message intake.' },
        { h: 'Serverless real-time messaging', p: 'Azure SignalR and Azure Functions route events to specific users, groups or everyone, without a dedicated server.' },
        { h: 'Event contracts as an artifact', p: 'The AsyncAPI specification is generated, validated and automatically published to the repositories that consume it.' },
      ],
      architecture: {
        caption: 'Two complementary services: event-driven geospatial search and a serverless messaging hub.',
        lanes: [
          { label: 'Search', nodes: [{ t: 'Mobile app', s: 'Text or coordinates' }, { t: 'Event hub', s: 'SignalR / Socket.IO' }, { t: 'Search service', s: 'FastAPI · App Service' }, { t: 'Service Bus', s: 'Work queues' }] },
          { label: 'Data', nodes: [{ t: 'Async workers', s: 'Bounded concurrency' }, { t: 'Azure AI Search', s: 'Geospatial index' }, { t: 'MongoDB', s: 'Addresses and places' }, { t: 'GIS + Mapbox', s: 'Geocoding with fallback' }] },
          { label: 'Real time', nodes: [{ t: 'App or backend', s: 'Event' }, { t: 'Azure SignalR', s: 'Serverless' }, { t: 'Azure Functions', s: 'Event router' }, { t: 'Recipient', s: 'User, group or all' }] },
        ],
      },
      flow: {
        title: 'Journey of a search',
        steps: [
          { t: 'Event', p: 'The app sends the search text through the real-time hub.' },
          { t: 'Validation', p: 'The message is validated and the user identified.' },
          { t: 'Queue', p: 'It is queued in Service Bus and the receiver is freed instantly.' },
          { t: 'Query', p: 'Two searches in parallel: places and addresses, with a distance filter.' },
          { t: 'Merge', p: 'Results are combined by relevance and popularity.' },
          { t: 'Response', p: 'Returned only to that user, compressed according to the app version.' },
        ],
      },
      tech: [
        { group: 'Search', items: 'Python 3.11, FastAPI, Azure AI Search (geospatial index, Spanish analyzer, scoring profiles)' },
        { group: 'Messaging', items: 'Azure Service Bus, Azure SignalR Serverless, Socket.IO' },
        { group: 'Serverless', items: 'Azure Functions in Node.js (v4 model), Azurite for local development' },
        { group: 'Data and integrations', items: 'MongoDB, Blob Storage, GIS API, Mapbox (geocoding and routing)' },
        { group: 'DevOps', items: 'Docker, Azure DevOps (4-stage pipelines), Container Registry, App Service, AsyncAPI' },
        { group: 'Observability', items: 'OpenTelemetry, Application Insights, custom queue metrics, self-healing health checks' },
      ],
      challenges: [
        { h: 'Decoupling intake and processing', p: 'The event receiver was blocked by slow searches. Service Bus was introduced with a long-lived producer and an async consumer with controlled concurrency.' },
        { h: 'Search relevance', p: 'Places and addresses are queried in parallel and merged with different criteria: relevance for places and popularity for addresses, with a configurable minimum threshold.' },
        { h: 'Declarative intents', p: 'Rules in a configuration file turn searches such as "restaurant" or "airport" into category filters, adjustable without deploying code.' },
        { h: 'Unstable connections', p: 'Two-layer reconnection, a custom heartbeat and a health check that tells Azure to recycle the instance if the connection does not recover.' },
        { h: 'Serverless messaging hub', p: 'SignalR in Serverless mode with Functions: clients invoke events handled by functions, and the event name is resolved at runtime, so new events can be added without deploying.' },
        { h: 'Cost-controlled observability', p: 'Telemetry sampling plus custom metrics for queue time and processing failures.' },
      ],
      shots: [
        { file: '01-busqueda.webp', caption: 'Address search in the app: suggestions while typing' },
        { file: '02-pipeline.webp', caption: 'Azure DevOps pipeline: API validation, deployment and contract publishing' },
        { file: '03-asyncapi.webp', caption: 'AsyncAPI event contract, generated and validated in the pipeline' },
        { file: '04-ai-search.webp', caption: 'Azure AI Search indexes: over 160,000 addresses and places in production' },
        { file: '06-functions.webp', caption: 'Real-time Function App: SignalR and HTTP triggers' },
      ],
      results: [
        'Fast, relevant address search without blocking the event channel.',
        'Real-time messaging that scales to zero and accepts new events without deploying.',
        'API contracts always in sync across backend, frontend and real time.',
      ],
    },
  ],
};
