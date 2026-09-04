// ============================================================
// VALADAL — script.js
// Archivo compartido por todas las páginas.
// Idioma + tema + navbar + animaciones + filtros + formulario.
// ============================================================


// ============================================================
// 1. LANGUAGE SYSTEM
// ============================================================

const translations = {

  es: {
    "nav.home": "Inicio",
    "nav.repair": "Reparación",
    "nav.digital": "Digital",
    "nav.work": "Proyectos",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.quote": "Cotizar",

    "theme.toggle": "Modo oscuro",

    "hero.pill": "Reparación y Soluciones Digitales",
    "hero.title1": "Tecnología para el",
    "hero.title2": "mundo real.",
    "hero.subtitle":
      "Soluciones técnicas y digitales diseñadas para lo que viene — desde reparar los dispositivos de los que dependes hasta construir los sistemas que tu empresa necesita.",
    "hero.explore": "Explorar servicios",
    "hero.contact": "Contactar a Valadal",
    "hero.free": "Diagnóstico gratuito",
    "hero.certified": "Reparación profesional",
    "hero.turnaround": "Entrega en 48 h",

    "wwd.eyebrow": "Lo que hacemos",
    "wwd.title": "Reparamos. Construimos. Creamos.",
    "wwd.text":
      "Valadal comenzó como un taller de reparación, pero se convirtió en algo más grande. Hoy combinamos reparación técnica con diseño y desarrollo de soluciones digitales — para que la tecnología que ya tienes funcione mejor y la tecnología que tu empresa necesita se construya correctamente desde el principio.",

    "repair.eyebrow": "Reparación",
    "repair.title": "Mantén tu tecnología funcionando.",
    "repair.computers": "Computadoras",
    "repair.computersDesc":
      "Diagnóstico, reparación, mantenimiento y actualizaciones para todo tipo de computadoras.",
    "repair.smartphones": "Smartphones",
    "repair.smartphonesDesc":
      "Diagnóstico, reparación y mantenimiento para que tu teléfono vuelva a funcionar correctamente.",
    "repair.gaming": "Gaming",
    "repair.gamingDesc":
      "Reparación de HDMI, solución de drift, limpieza y diagnóstico completo de consolas.",
    "repair.button": "Explorar reparación →",

    "repair.page.eyebrow": "Reparación",
    "repair.page.title": "La tecnología falla. Nosotros la hacemos funcionar de nuevo.",
    "repair.page.lead": "Ve directo a lo que necesitas reparar.",

    "repair.nav.computers": "Computadoras",
    "repair.nav.laptops": "Laptops",
    "repair.nav.apple": "MacBook y Apple",
    "repair.nav.smartphones": "Smartphones",
    "repair.nav.screens": "Pantallas",
    "repair.nav.gaming": "Gaming",
    "repair.nav.maintenance": "Mantenimiento",
    "repair.nav.servers": "Servidores",

    "repair.desktop.eyebrow": "01 — Computadoras",
    "repair.desktop.title": "Computadoras de escritorio.",
    "repair.desktop.lead":
      "Trabajamos con computadoras de escritorio a nivel completo, desde problemas de software y configuración hasta diagnóstico y reparación de hardware.",
    "repair.desktop.card.title": "Reparación integral",
    "repair.desktop.gpu.title": "Tarjetas gráficas / GPU",
    "repair.desktop.gpu.sub": "La GPU no solamente se limpia: se revisa como un sistema completo.",
    "repair.desktop.psu.title": "Fuentes de poder",
    "repair.desktop.cooling.title": "Gestión térmica y mantenimiento",
    "repair.desktop.peripherals.title": "Periféricos de PC",

    "repair.laptops.eyebrow": "02 — Laptops",
    "repair.laptops.title": "Laptops de todas las marcas.",
    "repair.laptops.lead":
      "Trabajamos con laptops convencionales de diferentes marcas y modelos, con reparación completa de hardware.",
    "repair.laptops.card.title": "Reparación completa",
    "repair.laptops.thermal.title": "Mantenimiento y refrigeración",
    "repair.laptops.peripherals.title": "Periféricos y accesorios",

    "repair.apple.eyebrow": "03 — MacBook y Apple",
    "repair.apple.title": "Reparación integral Apple.",
    "repair.apple.lead": "Trabajamos con MacBook, iMac y computadoras de escritorio Apple.",
    "repair.apple.card.title": "MacBook · iMac",
    "repair.apple.thermal.title": "Mantenimiento y refrigeración",
    "repair.apple.peripherals.title": "Periféricos Apple",

    "repair.phones.eyebrow": "04 — Smartphones",
    "repair.phones.title": "iPhone y Android.",
    "repair.phones.lead":
      "Reparación integral del dispositivo, desde lo convencional hasta problemas de hardware más complejos.",
    "repair.phones.card.title": "Reparación integral",
    "repair.phones.diag.title": "Diagnóstico electrónico",
    "repair.phones.accessories.title": "Accesorios y periféricos",

    "repair.screens.eyebrow": "05 — Pantallas",
    "repair.screens.title": "Reparación de pantallas.",
    "repair.screens.lead":
      "Servicio para smartphones, laptops, monitores, computadoras y otros equipos electrónicos compatibles.",
    "repair.screens.card.title": "Diagnóstico de pantalla",
    "repair.screens.conn.title": "Conectores y alimentación",

    "repair.gaming.eyebrow": "06 — Gaming",
    "repair.gaming.title": "Consolas y controles.",
    "repair.gaming.lead":
      "Reparación integral de Xbox, PlayStation y otras plataformas, incluyendo controles especializados.",
    "repair.gaming.consoles.title": "Consolas",
    "repair.gaming.controllers.title": "Controles",
    "repair.gaming.clean.title": "Limpieza y mantenimiento",

    "repair.maint.eyebrow": "07 — Mantenimiento",
    "repair.maint.title": "No hacemos solamente una \"limpieza\".",
    "repair.maint.lead":
      "Mantenimiento preventivo y correctivo enfocado en recuperar el funcionamiento y mejorar la vida útil del equipo.",
    "repair.maint.step1.title": "Desmontaje",
    "repair.maint.step1.text": "Inspección visual y desmontaje cuidadoso de componentes.",
    "repair.maint.step2.title": "Limpieza profunda",
    "repair.maint.step2.text": "Eliminación de polvo, ventiladores y disipadores.",
    "repair.maint.step3.title": "Revisión térmica",
    "repair.maint.step3.text": "Cambio de pasta y pads térmicos, revisión de conexiones.",
    "repair.maint.step4.title": "Optimización",
    "repair.maint.step4.text": "Optimización del cooling y del flujo de aire.",
    "repair.maint.step5.title": "Pruebas",
    "repair.maint.step5.text": "Pruebas de funcionamiento antes de entregar el equipo.",
    "repair.maint.applies.title": "Aplicable a",

    "repair.servers.eyebrow": "08 — Servidores",
    "repair.servers.title": "Mantenimiento y refrigeración de servidores.",
    "repair.servers.lead":
      "Soluciones de mantenimiento y optimización térmica para servidores y equipos de alto uso.",
    "repair.servers.card.title": "Mantenimiento",
    "repair.servers.cooling.title": "Optimización térmica",
    "repair.servers.peripherals.title": "Periféricos y accesorios",

    "repair.soon.eyebrow": "Próximamente",
    "repair.soon.title": "Estamos ampliando lo que reparamos.",
    "repair.soon.badge": "Próximamente",
    "repair.soon.audio.title": "Sistemas de audio",
    "repair.soon.appliances.title": "Electrodomésticos",

    "repair.why.eyebrow": "¿Por qué Valadal?",
    "repair.why.title": "No nos limitamos a cambiar piezas.",
    "repair.why.lead":
      "Un equipo puede encender y seguir teniendo un problema térmico, eléctrico o electrónico que termine provocando una falla mayor. Por eso diagnosticamos antes de reparar.",
    "repair.why.p1.title": "Más limpios",
    "repair.why.p1.text": "Diagnóstico → causa → reparación.",
    "repair.why.p2.title": "Mejor refrigerados",
    "repair.why.p2.text": "Optimización térmica en cada equipo.",
    "repair.why.p3.title": "Correctamente diagnosticados",
    "repair.why.p3.text": "Optimizados y preparados para seguir funcionando.",

    "repair.cta.title": "¿No sabes qué está mal? Vamos a averiguarlo.",

    "digital.eyebrow": "Soluciones Digitales",
    "digital.title": "Construye lo que viene.",
    "digital.text":
      "Sitios web, sistemas personalizados y automatizaciones diseñadas para ayudar a tu empresa a trabajar de forma más inteligente — construidos con el mismo cuidado que ponemos en cada reparación.",
    "digital.web": "Web",
    "digital.webDesc":
      "Sitios web, landing pages y páginas empresariales.",
    "digital.systems": "Sistemas",
    "digital.systemsDesc":
      "Herramientas personalizadas, sistemas internos y utilidades empresariales.",
    "digital.automation": "Automatización",
    "digital.automationDesc":
      "Flujos de trabajo, automatización y procesos digitales.",
    "digital.button": "Explorar Digital →",

    "digital.page.eyebrow": "Desarrollo Digital",
    "digital.page.title": "Impulsa tu empresa con tecnología hecha para ti.",
    "digital.page.lead":
      "Sitios web, aplicaciones, sistemas y automatizaciones diseñadas alrededor de las necesidades reales de cada negocio, proyecto o emprendimiento.",
    "digital.page.intro":
      "Nuestro objetivo no es solamente crear tecnología: buscamos ayudarte a crecer, mejorar tus procesos y llevar tu empresa al siguiente nivel. Desde sitios web profesionales hasta sistemas empresariales, integraciones mediante APIs y automatización — cada solución se construye alrededor de cómo realmente trabaja tu negocio.",
    "digital.page.h1.title": "Código propio",
    "digital.page.h1.text": "Sitios y sistemas desarrollados directamente en código, sin plantillas ni límites de diseño.",
    "digital.page.h2.title": "Pensado para crecer",
    "digital.page.h2.text": "Sistemas y automatizaciones que se adaptan a la manera en que realmente trabaja tu empresa.",
    "digital.page.h3.title": "Todo conectado",
    "digital.page.h3.text": "Integraciones y APIs para que tus plataformas y servicios trabajen juntos.",

    "digital.nav.label": "Ir directo a",
    "digital.nav.web": "Sitios web",
    "digital.nav.seo": "Google y marketing",
    "digital.nav.apps": "Apps móviles",
    "digital.nav.software": "Software para PC",
    "digital.nav.systems": "Sistemas",
    "digital.nav.apis": "APIs",
    "digital.nav.automation": "Automatización",
    "digital.nav.projects": "Proyectos e ideas",

    "digital.web.eyebrow": "01 — Sitios web",
    "digital.web.title": "Sitios web profesionales, hechos desde código.",
    "digital.web.lead":
      "Desarrollamos páginas web estáticas directamente en código, lo que nos da mayor control sobre diseño, rendimiento y funcionamiento. Cada sitio se construye alrededor de la identidad y las necesidades del proyecto.",
    "digital.web.item1": "Empresas y negocios locales",
    "digital.web.item2": "Emprendimientos y profesionales",
    "digital.web.item3": "Portafolios y landing pages",
    "digital.web.item4": "Catálogos de productos o servicios",
    "digital.web.note":
      "El sitio se entrega completamente preparado, con código fuente propio — normalmente como un archivo ZIP con todos los elementos del proyecto. También podemos encargarnos de publicarlo para que quede disponible en Internet.",

    "digital.seo.eyebrow": "02 — Google y marketing",
    "digital.seo.title": "Que te encuentren cuando te buscan.",
    "digital.seo.lead":
      "Crear una página web es solamente el primer paso. También trabajamos la presencia digital de tu empresa en Google y construimos una estrategia alrededor de tu visibilidad en Internet.",
    "digital.seo.item1": "Publicación y configuración para buscadores",
    "digital.seo.item2": "SEO y optimización de contenido",
    "digital.seo.item3": "Estructura del sitio e indexación",
    "digital.seo.item4": "Presencia empresarial en Google",
    "digital.seo.item5": "Estrategia de visibilidad en búsquedas",
    "digital.seo.item6": "Optimización para clientes potenciales",

    "digital.apps.eyebrow": "03 — Aplicaciones móviles",
    "digital.apps.title": "Aplicaciones para Android, iPhone y proyectos móviles.",
    "digital.apps.lead":
      "Desarrollamos aplicaciones móviles adaptadas a las necesidades de cada proyecto, integrando los servicios y tecnologías que la app requiera.",
    "digital.apps.item1": "Gestión interna e inventarios",
    "digital.apps.item2": "Reservaciones y administración",
    "digital.apps.item3": "Comunicación con clientes",
    "digital.apps.item4": "Plataformas digitales propias",

    "digital.software.eyebrow": "04 — Software para PC",
    "digital.software.title": "Software diseñado para tu empresa.",
    "digital.software.lead":
      "En lugar de adaptar tu empresa a un programa genérico, desarrollamos herramientas específicas que resuelven lo que el software comercial no cubre.",
    "digital.software.item1": "Sistemas administrativos",
    "digital.software.item2": "Gestión de clientes e inventarios",
    "digital.software.item3": "Herramientas de productividad",
    "digital.software.item4": "Automatización de tareas internas",

    "digital.bizsys.eyebrow": "05 — Sistemas empresariales",
    "digital.bizsys.title": "Tecnología diseñada alrededor de tu negocio.",
    "digital.bizsys.lead":
      "Desarrollamos sistemas personalizados para empresas, proyectos y emprendimientos, planteados de acuerdo con las necesidades específicas de cada uno.",
    "digital.bizsys.item1": "Administración y ventas",
    "digital.bizsys.item2": "Control de recursos e inventarios",
    "digital.bizsys.item3": "Comunicación entre departamentos",
    "digital.bizsys.item4": "Procesos internos automatizados",

    "digital.apis.eyebrow": "06 — APIs e integraciones",
    "digital.apis.title": "Conecta tus sistemas y servicios.",
    "digital.apis.lead":
      "Las empresas usan cada vez más plataformas distintas. Desarrollamos integraciones mediante APIs para que diferentes sistemas puedan comunicarse entre sí, en lugar de trabajar de forma aislada.",
    "digital.apis.item1": "Sincronización de información",
    "digital.apis.item2": "Integración de servicios externos",
    "digital.apis.item3": "Conexión entre sistemas internos",
    "digital.apis.item4": "Herramientas alrededor de servicios existentes",

    "digital.auto.eyebrow": "07 — Automatización empresarial",
    "digital.auto.title": "Deja que la tecnología haga el trabajo repetitivo.",
    "digital.auto.lead":
      "Analizamos procesos que hoy requieren trabajo manual y buscamos oportunidades para automatizarlos, reduciendo errores y liberando tiempo de tu equipo.",
    "digital.auto.item1": "Procesamiento y gestión de datos",
    "digital.auto.item2": "Notificaciones y flujos de trabajo",
    "digital.auto.item3": "Generación automática de información",
    "digital.auto.item4": "Comunicación entre sistemas",

    "digital.projects.eyebrow": "08 — Proyectos e ideas",
    "digital.projects.title": "¿Tienes una idea? No necesitas tener una empresa establecida.",
    "digital.projects.lead":
      "También desarrollamos soluciones para proyectos personales, startups y prototipos. Si tienes una idea y no sabes cómo convertirla en algo funcional, te acompañamos desde el concepto hasta el producto.",
    "digital.projects.item1": "Emprendimientos y startups",
    "digital.projects.item2": "Prototipos y sistemas experimentales",
    "digital.projects.item3": "Proyectos escolares o tecnológicos",
    "digital.projects.item4": "Productos digitales propios",

    "digital.process.eyebrow": "Cómo trabajamos",
    "digital.process.title": "Del concepto al producto funcionando.",
    "digital.process.lead":
      "Un proceso claro, para que sepas exactamente en qué punto está tu proyecto en cada momento.",
    "digital.process.step1.title": "Diagnóstico",
    "digital.process.step1.text": "Entendemos qué necesitas: el problema a resolver, cómo trabaja tu empresa hoy y qué debería mejorar.",
    "digital.process.step2.title": "Propuesta",
    "digital.process.step2.text": "Planteamos la solución más adecuada — sitio, sistema, app o automatización — junto con alcance y tiempos.",
    "digital.process.step3.title": "Desarrollo",
    "digital.process.step3.text": "Construimos la solución directamente en código, con avances visibles a lo largo del proceso.",
    "digital.process.step4.title": "Entrega",
    "digital.process.step4.text": "Recibes el proyecto completo — código fuente incluido — y, si lo necesitas, nos encargamos de publicarlo.",
    "digital.process.step5.title": "Soporte",
    "digital.process.step5.text": "Seguimos disponibles para ajustes, mejoras o para escalar la solución cuando tu negocio lo requiera.",

    "digital.faq.eyebrow": "¿Qué necesitas desarrollar?",
    "digital.faq.title": "Cuéntanos qué necesitas y analizamos juntos la mejor solución.",
    "digital.faq.q1": "¿Necesitas una página web?",
    "digital.faq.a1": "Desarrollamos sitios profesionales desde código, adaptados a tu marca y con entrega de código fuente propio.",
    "digital.faq.q2": "¿Quieres una aplicación para tus clientes?",
    "digital.faq.a2": "Diseñamos y desarrollamos aplicaciones móviles a la medida, para Android, iPhone o ambos.",
    "digital.faq.q3": "¿Tu empresa necesita un sistema propio?",
    "digital.faq.a3": "Construimos sistemas empresariales alrededor de tus procesos reales, no al revés.",
    "digital.faq.q4": "¿Hay procesos que haces manualmente todos los días?",
    "digital.faq.a4": "Podemos automatizarlos: desde notificaciones hasta flujos de trabajo completos.",
    "digital.faq.q5": "¿Necesitas conectar diferentes plataformas?",
    "digital.faq.a5": "Desarrollamos integraciones mediante APIs para que tus sistemas trabajen juntos.",
    "digital.faq.q6": "¿Tienes una idea para un producto tecnológico?",
    "digital.faq.a6": "Te acompañamos desde el concepto hasta un producto funcional, sin necesidad de una empresa establecida.",
    "digital.faq.q7": "¿Quieres mejorar la presencia de tu empresa en Internet?",
    "digital.faq.a7": "Trabajamos SEO, indexación y estrategia de visibilidad para que te encuentren en Google.",

    "digital.growth.eyebrow": "Haz crecer tu empresa con tecnología",
    "digital.growth.title": "No es solamente una herramienta. Puede ser parte fundamental de tu crecimiento.",
    "digital.growth.lead": "En Valadal desarrollamos estas soluciones pensando en cómo pueden aportar valor real a tu negocio.",
    "digital.growth.closing1": "Tu empresa. Tu proyecto. Tu idea.",
    "digital.growth.closing2": "Nosotros ponemos la tecnología.",
    "digital.growth.item1.strong": "Una página web",
    "digital.growth.item1.text": "puede ayudarte a conseguir clientes.",
    "digital.growth.item2.strong": "Un sistema",
    "digital.growth.item2.text": "puede ayudarte a organizar tu empresa.",
    "digital.growth.item3.strong": "Una aplicación",
    "digital.growth.item3.text": "puede mejorar la experiencia de tus usuarios.",
    "digital.growth.item4.strong": "Una automatización",
    "digital.growth.item4.text": "puede ahorrarte horas de trabajo.",
    "digital.growth.item5.strong": "Una integración",
    "digital.growth.item5.text": "puede conectar todos tus procesos.",

    "digital.ctaPage.title": "¿Necesitas una página web, una aplicación, software personalizado o quieres automatizar tu empresa?",

    "about.hero.eyebrow": "Nosotros",
    "about.hero.title": "Tecnología aprendida haciendo.",
    "about.hero.lead":
      "VALADAL nació de algo más sencillo que una empresa: la curiosidad por entender cómo funcionan las cosas. Desde computadoras y consolas hasta smartphones, servidores y sistemas electrónicos, nuestra experiencia se ha construido a través de años de experimentar, reparar, construir y aprender.",
    "about.hero.lead2":
      "No creemos que el conocimiento tecnológico se limite a un título o a un manual. La experiencia también se construye con práctica, pruebas, errores y soluciones reales.",

    "about.history.eyebrow": "Nuestra historia",
    "about.history.title": "De un proyecto amateur a VALADAL.",
    "about.history.lead":
      "VALADAL comenzó con algo muy sencillo: armar computadoras y ofrecerlas en Facebook Marketplace. Desde el principio tuvimos una idea clara: una buena computadora no debería depender únicamente de cuánto dinero tienes disponible.",
    "about.history.quote":
      "\"No aprendimos tecnología solamente estudiándola. La aprendimos construyéndola, reparándola y, muchas veces, equivocándonos.\"",

    "about.tl1.title": "Curiosidad",
    "about.tl1.text": "Primeras reparaciones y experimentación con dispositivos propios.",
    "about.tl2.title": "Armado de PCs en Facebook Marketplace",
    "about.tl2.text": "Buscábamos la mejor combinación posible entre presupuesto, rendimiento y calidad.",
    "about.tl3.title": "Componentes de segunda mano, restaurados",
    "about.tl3.text":
      "Cuando un cliente lo autorizaba, buscábamos componentes usados —especialmente GPUs—, los revisábamos, limpiábamos y probábamos antes de integrarlos. Llegamos a reducir costos hasta un 60% frente a configuraciones nuevas equivalentes.",
    "about.tl4.title": "Ingeniería y especialización en cooling",
    "about.tl4.text":
      "Durante nuestra formación en ingeniería nos especializamos en refrigeración, disipación térmica y mantenimiento de equipos de alto rendimiento.",
    "about.tl5.title": "Mantenimiento de servidores para Coca-Cola",
    "about.tl5.text":
      "Llevamos nuestros conocimientos a un entorno profesional y de mayor escala, revisando y manteniendo infraestructura de servidores.",
    "about.tl6.title": "VALADAL",
    "about.tl6.text": "Reparación · Armado · Creación · Electrónica · Servidores · Digital.",

    "about.spec.eyebrow": "De la experiencia a la especialización",
    "about.spec.title": "Cooling, servidores y alto rendimiento.",
    "about.spec.text1":
      "Con el paso del tiempo, nuestro interés por las computadoras fue mucho más allá del armado. Nos especializamos en refrigeración, disipación térmica y mantenimiento de equipos de alto rendimiento.",
    "about.spec.text2":
      "Esta experiencia nos llevó a trabajar en revisión y mantenimiento de infraestructura de servidores para Coca-Cola, donde entendimos algo importante: la tecnología no solamente debe funcionar — debe funcionar correctamente, mantenerse y estar preparada para seguir funcionando.",

    "about.passion.eyebrow": "Una pasión que comenzó mucho antes",
    "about.passion.title": "Smartphones, custom ROMs y curiosidad.",
    "about.passion.text1":
      "Desde una edad temprana comenzamos a experimentar con smartphones, sistemas operativos y dispositivos móviles — modos DFU de Apple, Recovery de Android, sistemas modificados, Custom ROMs y jailbreak.",
    "about.passion.q1": "¿Cómo funciona?",
    "about.passion.q2": "¿Por qué falla?",
    "about.passion.q3": "¿Se puede modificar, reparar o mejorar?",

    "about.gaming.eyebrow": "Tecnología que también disfrutamos",
    "about.gaming.title": "No todo comenzó como trabajo.",
    "about.gaming.text":
      "Las consolas y controles que utilizábamos personalmente fueron algunos de nuestros primeros dispositivos de reparación. Cuando algo fallaba, queríamos saber qué había fallado, por qué, y cómo solucionarlo. Con el tiempo, esa afición terminó convirtiéndose también en parte de los servicios que ofrecemos.",

    "about.phil.eyebrow": "Nuestra filosofía",
    "about.phil.title": "Tratamos cada equipo como si fuera nuestro.",
    "about.phil.quote":
      "No vemos una computadora, teléfono, consola o servidor simplemente como otro dispositivo. Detrás de cada equipo existe una inversión, un proyecto o algo que para su propietario tiene valor.",
    "about.phil.cite": "Buscamos que funcione correctamente, se vea correctamente, y quede correctamente.",

    "about.values.eyebrow": "Más que una persona",
    "about.values.title": "Cada persona en VALADAL comparte una misma manera de trabajar.",
    "about.v1.title": "Curiosidad",
    "about.v1.text": "Queremos entender cómo funcionan las cosas.",
    "about.v2.title": "Cuidado",
    "about.v2.text": "Tratamos los equipos de nuestros clientes como si fueran propios.",
    "about.v3.title": "Precisión",
    "about.v3.text": "Los detalles importan.",
    "about.v4.title": "Aprendizaje",
    "about.v4.text": "Siempre existe algo nuevo que aprender.",
    "about.v5.title": "Responsabilidad",
    "about.v5.text": "Cada equipo que recibimos representa la confianza de alguien.",

    "about.today.eyebrow": "Lo que somos hoy",
    "about.today.title": "Reparación, mantenimiento, creación y desarrollo digital.",
    "about.today.text":
      "Pero nuestra meta no es quedarnos ahí. Queremos seguir aprendiendo, explorar nuevas tecnologías y ampliar nuestras áreas de trabajo para resolver cada vez más problemas.",

    "about.vision.eyebrow": "Nuestra visión",
    "about.vision.text":
      "VALADAL existe para convertir curiosidad, conocimiento y experiencia en soluciones reales — desde un pequeño circuito hasta un servidor completo, desde una computadora personalizada hasta un sistema diseñado específicamente para una empresa.",
    "about.closing.line1": "Nació de la pasión.",
    "about.closing.line2": "Creció con experiencia.",
    "about.closing.line3": "Y continúa aprendiendo.",

    "values.eyebrow": "Por qué Valadal",
    "values.title": "Construidos sobre los mismos cuatro principios, siempre.",
    "values.precision": "Precisión",
    "values.precisionDesc":
      "Trabajo técnico cuidadoso y metódico — nada se hace con prisas.",
    "values.transparency": "Transparencia",
    "values.transparencyDesc":
      "Comunicación clara sobre qué ocurre y qué se necesita para solucionarlo.",
    "values.quality": "Calidad",
    "values.qualityDesc":
      "Soluciones construidas para durar, no solamente para pasar una inspección.",
    "values.innovation": "Innovación",
    "values.innovationDesc":
      "Tecnología con la mirada puesta en hacia dónde se dirige el mundo.",

    "work.eyebrow": "Proyectos destacados",
    "work.title": "Trabajo real. Soluciones reales.",
    "work.text":
      "Estamos documentando cada proyecto a medida que lo completamos. Esto es el tipo de trabajo que encontrarás en nuestro portafolio completo.",
    "work.gaming": "Gaming",
    "work.computers": "Computadoras",
    "work.smartphones": "Smartphones",
    "work.digital": "Digital",
    "work.button": "Ver todos los proyectos →",

    "about.eyebrow": "Nosotros",
    "about.title": "La tecnología debería trabajar para ti.",
    "about.text":
      "Valadal es una empresa tecnológica construida sobre dos divisiones — reparación y soluciones digitales — y una idea: entender el problema, encontrar la solución y hacer que funcione.",
    "about.button": "Conoce más →",

    "cta.title": "Hagámoslo funcionar.",
    "cta.button": "Cotizar →",

    "footer.tagline": "Tecnología para el mundo real.",
    "footer.company": "Empresa",
    "footer.contact": "Contáctanos",
    "footer.location": "Guadalajara, Jalisco, México"
  },

  en: {
    "nav.home": "Home",
    "nav.repair": "Repair",
    "nav.digital": "Digital",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.quote": "Get a Quote",

    "theme.toggle": "Dark mode",

    "hero.pill": "Repair & Digital Solutions",
    "hero.title1": "Technology for the",
    "hero.title2": "real world.",
    "hero.subtitle":
      "Technical and digital solutions built for what's next — from repairing the devices you rely on, to building the systems your business needs.",
    "hero.explore": "Explore Services",
    "hero.contact": "Contact Valadal",
    "hero.free": "Free diagnosis",
    "hero.certified": "Professional repair",
    "hero.turnaround": "48h turnaround",

    "wwd.eyebrow": "What we do",
    "wwd.title": "We repair. We build. We create.",
    "wwd.text":
      "Valadal started as a repair workshop, but it's grown into something bigger. Today we combine hands-on technical repair with digital solutions design and development — so the technology you already own works better, and the technology your business needs gets built right the first time.",

    "repair.eyebrow": "Repair",
    "repair.title": "Keep your tech alive.",
    "repair.computers": "Computers",
    "repair.computersDesc":
      "Diagnosis, repair, maintenance and upgrades for every kind of computer.",
    "repair.smartphones": "Smartphones",
    "repair.smartphonesDesc":
      "Diagnosis, repair and maintenance to get your phone back to normal.",
    "repair.gaming": "Gaming",
    "repair.gamingDesc":
      "HDMI repair, drift fixes, cleaning and full console diagnostics.",
    "repair.button": "Explore Repair →",

    "repair.page.eyebrow": "Repair",
    "repair.page.title": "Technology breaks. We make it work again.",
    "repair.page.lead": "Jump straight to what you need fixed.",

    "repair.nav.computers": "Computers",
    "repair.nav.laptops": "Laptops",
    "repair.nav.apple": "MacBook & Apple",
    "repair.nav.smartphones": "Smartphones",
    "repair.nav.screens": "Screens",
    "repair.nav.gaming": "Gaming",
    "repair.nav.maintenance": "Maintenance",
    "repair.nav.servers": "Servers",

    "repair.desktop.eyebrow": "01 — Computers",
    "repair.desktop.title": "Desktop computers.",
    "repair.desktop.lead":
      "We work on desktop computers at every level, from software and configuration issues to hardware diagnosis and repair.",
    "repair.desktop.card.title": "Full repair",
    "repair.desktop.gpu.title": "Graphics cards / GPU",
    "repair.desktop.gpu.sub": "A GPU doesn't just get cleaned — it's reviewed as a complete system.",
    "repair.desktop.psu.title": "Power supplies",
    "repair.desktop.cooling.title": "Thermal management and maintenance",
    "repair.desktop.peripherals.title": "PC peripherals",

    "repair.laptops.eyebrow": "02 — Laptops",
    "repair.laptops.title": "Laptops, every brand.",
    "repair.laptops.lead":
      "We work with conventional laptops from different brands and models, with full hardware repair.",
    "repair.laptops.card.title": "Full repair",
    "repair.laptops.thermal.title": "Maintenance and cooling",
    "repair.laptops.peripherals.title": "Peripherals and accessories",

    "repair.apple.eyebrow": "03 — MacBook & Apple",
    "repair.apple.title": "Full Apple repair.",
    "repair.apple.lead": "We work with MacBook, iMac and Apple desktop computers.",
    "repair.apple.card.title": "MacBook · iMac",
    "repair.apple.thermal.title": "Maintenance and cooling",
    "repair.apple.peripherals.title": "Apple peripherals",

    "repair.phones.eyebrow": "04 — Smartphones",
    "repair.phones.title": "iPhone and Android.",
    "repair.phones.lead":
      "Full device repair, from everyday fixes to more complex hardware issues.",
    "repair.phones.card.title": "Full repair",
    "repair.phones.diag.title": "Electronic diagnosis",
    "repair.phones.accessories.title": "Accessories and peripherals",

    "repair.screens.eyebrow": "05 — Screens",
    "repair.screens.title": "Screen repair.",
    "repair.screens.lead":
      "Service for smartphones, laptops, monitors, computers and other compatible electronics.",
    "repair.screens.card.title": "Screen diagnosis",
    "repair.screens.conn.title": "Connectors and power",

    "repair.gaming.eyebrow": "06 — Gaming",
    "repair.gaming.title": "Consoles and controllers.",
    "repair.gaming.lead":
      "Full repair for Xbox, PlayStation and other platforms, including specialized controller repair.",
    "repair.gaming.consoles.title": "Consoles",
    "repair.gaming.controllers.title": "Controllers",
    "repair.gaming.clean.title": "Cleaning and maintenance",

    "repair.maint.eyebrow": "07 — Maintenance",
    "repair.maint.title": "We don't just do a \"cleaning\".",
    "repair.maint.lead":
      "Preventive and corrective maintenance focused on restoring performance and extending the life of your equipment.",
    "repair.maint.step1.title": "Disassembly",
    "repair.maint.step1.text": "Visual inspection and careful component disassembly.",
    "repair.maint.step2.title": "Deep cleaning",
    "repair.maint.step2.text": "Dust, fans and heatsinks fully cleaned.",
    "repair.maint.step3.title": "Thermal review",
    "repair.maint.step3.text": "Thermal paste and pad replacement, connection check.",
    "repair.maint.step4.title": "Optimization",
    "repair.maint.step4.text": "Cooling and airflow optimization.",
    "repair.maint.step5.title": "Testing",
    "repair.maint.step5.text": "Functional testing before your equipment ships back.",
    "repair.maint.applies.title": "Works on",

    "repair.servers.eyebrow": "08 — Servers",
    "repair.servers.title": "Server maintenance and cooling.",
    "repair.servers.lead":
      "Maintenance and thermal optimization solutions for servers and high-use equipment.",
    "repair.servers.card.title": "Maintenance",
    "repair.servers.cooling.title": "Thermal optimization",
    "repair.servers.peripherals.title": "Peripherals and accessories",

    "repair.soon.eyebrow": "Coming soon",
    "repair.soon.title": "We're expanding what we repair.",
    "repair.soon.badge": "Coming soon",
    "repair.soon.audio.title": "Audio systems",
    "repair.soon.appliances.title": "Appliances",

    "repair.why.eyebrow": "Why Valadal",
    "repair.why.title": "We don't just swap parts.",
    "repair.why.lead":
      "A device can turn on and still have a thermal, electrical or electronic issue that leads to a bigger failure. That's why we diagnose before we repair.",
    "repair.why.p1.title": "Cleaner",
    "repair.why.p1.text": "Diagnosis → root cause → repair.",
    "repair.why.p2.title": "Better cooled",
    "repair.why.p2.text": "Thermal optimization on every device.",
    "repair.why.p3.title": "Properly diagnosed",
    "repair.why.p3.text": "Optimized and ready to keep working.",

    "repair.cta.title": "Not sure what's wrong? Let's find out.",

    "digital.eyebrow": "Digital Solutions",
    "digital.title": "Build what's next.",
    "digital.text":
      "Websites, custom systems and automation designed to help your business run smarter — built with the same care we put into every repair.",
    "digital.web": "Web",
    "digital.webDesc":
      "Websites, landing pages and business websites.",
    "digital.systems": "Systems",
    "digital.systemsDesc":
      "Custom tools, internal systems and business utilities.",
    "digital.automation": "Automation",
    "digital.automationDesc":
      "Workflows, automation and digital processes.",
    "digital.button": "Explore Digital →",

    "digital.page.eyebrow": "Digital Development",
    "digital.page.title": "Grow your business with technology built for you.",
    "digital.page.lead":
      "Websites, apps, systems and automation designed around the real needs of every business, project or venture.",
    "digital.page.intro":
      "Our goal isn't just to build technology — it's to help you grow, improve your processes and take your business to the next level. From professional websites to business systems, API integrations and automation, every solution is built around how your business actually works.",
    "digital.page.h1.title": "Custom-built code",
    "digital.page.h1.text": "Sites and systems built directly in code, with no templates or design limits.",
    "digital.page.h2.title": "Built to grow",
    "digital.page.h2.text": "Systems and automation that adapt to how your business actually works.",
    "digital.page.h3.title": "Everything connected",
    "digital.page.h3.text": "Integrations and APIs so your platforms and services work together.",

    "digital.nav.label": "Jump to",
    "digital.nav.web": "Websites",
    "digital.nav.seo": "Google & marketing",
    "digital.nav.apps": "Mobile apps",
    "digital.nav.software": "PC software",
    "digital.nav.systems": "Systems",
    "digital.nav.apis": "APIs",
    "digital.nav.automation": "Automation",
    "digital.nav.projects": "Projects & ideas",

    "digital.web.eyebrow": "01 — Websites",
    "digital.web.title": "Professional websites, built from code.",
    "digital.web.lead":
      "We build static websites directly in code, giving us more control over design, performance and functionality. Every site is built around the project's identity and needs.",
    "digital.web.item1": "Businesses and local shops",
    "digital.web.item2": "Ventures and professionals",
    "digital.web.item3": "Portfolios and landing pages",
    "digital.web.item4": "Product or service catalogs",
    "digital.web.note":
      "The site is delivered fully ready, with your own source code — usually as a ZIP file with every project asset. We can also handle publishing it live on the Internet.",

    "digital.seo.eyebrow": "02 — Google & marketing",
    "digital.seo.title": "Get found when people search for you.",
    "digital.seo.lead":
      "Building a website is only the first step. We also work on your business's digital presence on Google and build a strategy around your online visibility.",
    "digital.seo.item1": "Search engine setup and submission",
    "digital.seo.item2": "SEO and content optimization",
    "digital.seo.item3": "Site structure and indexing",
    "digital.seo.item4": "Business presence on Google",
    "digital.seo.item5": "Search visibility strategy",
    "digital.seo.item6": "Optimization for potential customers",

    "digital.apps.eyebrow": "03 — Mobile apps",
    "digital.apps.title": "Apps for Android, iPhone and mobile projects.",
    "digital.apps.lead":
      "We build mobile apps tailored to each project's needs, integrating whatever services and technologies the app requires.",
    "digital.apps.item1": "Internal management and inventory",
    "digital.apps.item2": "Bookings and administration",
    "digital.apps.item3": "Customer communication",
    "digital.apps.item4": "Your own digital platforms",

    "digital.software.eyebrow": "04 — PC software",
    "digital.software.title": "Software designed for your business.",
    "digital.software.lead":
      "Instead of adapting your business to generic software, we build specific tools that solve what off-the-shelf software doesn't cover.",
    "digital.software.item1": "Administrative systems",
    "digital.software.item2": "Customer and inventory management",
    "digital.software.item3": "Productivity tools",
    "digital.software.item4": "Internal task automation",

    "digital.bizsys.eyebrow": "05 — Business systems",
    "digital.bizsys.title": "Technology designed around your business.",
    "digital.bizsys.lead":
      "We build custom systems for businesses, projects and ventures, designed around each one's specific needs.",
    "digital.bizsys.item1": "Administration and sales",
    "digital.bizsys.item2": "Resource and inventory control",
    "digital.bizsys.item3": "Communication between departments",
    "digital.bizsys.item4": "Automated internal processes",

    "digital.apis.eyebrow": "06 — APIs & integrations",
    "digital.apis.title": "Connect your systems and services.",
    "digital.apis.lead":
      "Businesses use more platforms than ever. We build API integrations so different systems can talk to each other instead of working in isolation.",
    "digital.apis.item1": "Data synchronization",
    "digital.apis.item2": "Third-party service integration",
    "digital.apis.item3": "Connecting internal systems",
    "digital.apis.item4": "Tools built around existing services",

    "digital.auto.eyebrow": "07 — Business automation",
    "digital.auto.title": "Let technology handle the repetitive work.",
    "digital.auto.lead":
      "We analyze processes that currently require manual work and look for ways to automate them, reducing errors and freeing up your team's time.",
    "digital.auto.item1": "Data processing and management",
    "digital.auto.item2": "Notifications and workflows",
    "digital.auto.item3": "Automatic report generation",
    "digital.auto.item4": "Communication between systems",

    "digital.projects.eyebrow": "08 — Projects & ideas",
    "digital.projects.title": "Have an idea? You don't need an established business.",
    "digital.projects.lead":
      "We also build solutions for personal projects, startups and prototypes. If you have an idea and don't know how to make it real, we'll walk with you from concept to product.",
    "digital.projects.item1": "Ventures and startups",
    "digital.projects.item2": "Prototypes and experimental systems",
    "digital.projects.item3": "School or tech projects",
    "digital.projects.item4": "Your own digital products",

    "digital.process.eyebrow": "How we work",
    "digital.process.title": "From concept to a working product.",
    "digital.process.lead":
      "A clear process, so you always know exactly where your project stands.",
    "digital.process.step1.title": "Diagnosis",
    "digital.process.step1.text": "We understand what you need: the problem to solve, how your business works today, and what should improve.",
    "digital.process.step2.title": "Proposal",
    "digital.process.step2.text": "We propose the best-fit solution — site, system, app or automation — along with scope and timeline.",
    "digital.process.step3.title": "Development",
    "digital.process.step3.text": "We build the solution directly in code, with visible progress throughout.",
    "digital.process.step4.title": "Delivery",
    "digital.process.step4.text": "You get the complete project — source code included — and, if needed, we handle publishing it.",
    "digital.process.step5.title": "Support",
    "digital.process.step5.text": "We stay available for adjustments, improvements, or to scale the solution as your business needs it.",

    "digital.faq.eyebrow": "What do you need to build?",
    "digital.faq.title": "Tell us what you need and we'll figure out the best solution together.",
    "digital.faq.q1": "Need a website?",
    "digital.faq.a1": "We build professional sites from code, tailored to your brand, with your own source code delivered.",
    "digital.faq.q2": "Want an app for your customers?",
    "digital.faq.a2": "We design and build custom mobile apps, for Android, iPhone or both.",
    "digital.faq.q3": "Does your business need its own system?",
    "digital.faq.a3": "We build business systems around your real processes, not the other way around.",
    "digital.faq.q4": "Are there processes you do manually every day?",
    "digital.faq.a4": "We can automate them: from notifications to full workflows.",
    "digital.faq.q5": "Need to connect different platforms?",
    "digital.faq.a5": "We build API integrations so your systems work together.",
    "digital.faq.q6": "Have an idea for a tech product?",
    "digital.faq.a6": "We'll walk with you from concept to a working product, no established business required.",
    "digital.faq.q7": "Want to improve your business's presence online?",
    "digital.faq.a7": "We work on SEO, indexing and visibility strategy so people find you on Google.",

    "digital.growth.eyebrow": "Grow your business with technology",
    "digital.growth.title": "It's not just a tool. It can be a core part of your growth.",
    "digital.growth.lead": "At Valadal we build these solutions with real value for your business in mind.",
    "digital.growth.closing1": "Your business. Your project. Your idea.",
    "digital.growth.closing2": "We bring the technology.",
    "digital.growth.item1.strong": "A website",
    "digital.growth.item1.text": "can help you win customers.",
    "digital.growth.item2.strong": "A system",
    "digital.growth.item2.text": "can help you organize your business.",
    "digital.growth.item3.strong": "An app",
    "digital.growth.item3.text": "can improve your users' experience.",
    "digital.growth.item4.strong": "Automation",
    "digital.growth.item4.text": "can save you hours of work.",
    "digital.growth.item5.strong": "An integration",
    "digital.growth.item5.text": "can connect all your processes.",

    "digital.ctaPage.title": "Need a website, an app, custom software, or want to automate your business?",

    "about.hero.eyebrow": "About",
    "about.hero.title": "Technology learned by doing.",
    "about.hero.lead":
      "VALADAL was born from something simpler than a company: curiosity about how things work. From computers and consoles to smartphones, servers and electronic systems, our experience was built through years of experimenting, repairing, building and learning.",
    "about.hero.lead2":
      "We don't believe technical knowledge is limited to a degree or a manual. Experience is also built through practice, testing, mistakes and real solutions.",

    "about.history.eyebrow": "Our story",
    "about.history.title": "From an amateur project to VALADAL.",
    "about.history.lead":
      "VALADAL started with something very simple: building computers and listing them on Facebook Marketplace. From the start we had one clear idea: a good computer shouldn't depend only on how much money you have.",
    "about.history.quote":
      "\"We didn't just learn technology by studying it. We learned it by building it, repairing it, and, often, getting it wrong.\"",

    "about.tl1.title": "Curiosity",
    "about.tl1.text": "First repairs and experimentation with our own devices.",
    "about.tl2.title": "Building PCs on Facebook Marketplace",
    "about.tl2.text": "We looked for the best possible balance between budget, performance and quality.",
    "about.tl3.title": "Refurbished second-hand components",
    "about.tl3.text":
      "When a client approved it, we sourced used parts —especially GPUs—, inspected, cleaned and tested them before installing them. We cut costs by up to 60% versus equivalent new builds.",
    "about.tl4.title": "Engineering and cooling specialization",
    "about.tl4.text":
      "During our engineering studies we specialized in cooling, thermal dissipation and maintenance of high-performance equipment.",
    "about.tl5.title": "Server maintenance for Coca-Cola",
    "about.tl5.text":
      "We brought our knowledge into a professional, larger-scale environment, reviewing and maintaining server infrastructure.",
    "about.tl6.title": "VALADAL",
    "about.tl6.text": "Repair · Build · Create · Electronics · Servers · Digital.",

    "about.spec.eyebrow": "From experience to specialization",
    "about.spec.title": "Cooling, servers and high performance.",
    "about.spec.text1":
      "Over time, our interest in computers went far beyond building them. We specialized in cooling, thermal dissipation and maintenance of high-performance equipment.",
    "about.spec.text2":
      "This experience led us to review and maintain server infrastructure for Coca-Cola, where we understood something important: technology shouldn't just work — it should work correctly, stay maintained, and be ready to keep working.",

    "about.passion.eyebrow": "A passion that started long before",
    "about.passion.title": "Smartphones, custom ROMs and curiosity.",
    "about.passion.text1":
      "From an early age we started experimenting with smartphones, operating systems and mobile devices — Apple's DFU mode, Android Recovery, modified systems, Custom ROMs and jailbreaking.",
    "about.passion.q1": "How does it work?",
    "about.passion.q2": "Why did it fail?",
    "about.passion.q3": "Can it be modified, repaired or improved?",

    "about.gaming.eyebrow": "Technology we also enjoy",
    "about.gaming.title": "Not everything started as work.",
    "about.gaming.text":
      "The consoles and controllers we used personally were some of our first repair projects. When something broke, we wanted to know what failed, why, and how to fix it. Over time, that hobby became part of the services we offer.",

    "about.phil.eyebrow": "Our philosophy",
    "about.phil.title": "We treat every device like it's our own.",
    "about.phil.quote":
      "We don't see a computer, phone, console or server as just another device. Behind every piece of equipment there's an investment, a project, or something with real value to its owner.",
    "about.phil.cite": "We aim for it to work correctly, look right, and come out right.",

    "about.values.eyebrow": "More than one person",
    "about.values.title": "Everyone at VALADAL shares the same way of working.",
    "about.v1.title": "Curiosity",
    "about.v1.text": "We want to understand how things work.",
    "about.v2.title": "Care",
    "about.v2.text": "We treat our clients' equipment like it's our own.",
    "about.v3.title": "Precision",
    "about.v3.text": "The details matter.",
    "about.v4.title": "Learning",
    "about.v4.text": "There's always something new to learn.",
    "about.v5.title": "Responsibility",
    "about.v5.text": "Every device we receive represents someone's trust.",

    "about.today.eyebrow": "Who we are today",
    "about.today.title": "Repair, maintenance, building and digital development.",
    "about.today.text":
      "But our goal isn't to stop there. We want to keep learning, explore new technologies and expand what we do to solve more problems.",

    "about.vision.eyebrow": "Our vision",
    "about.vision.text":
      "VALADAL exists to turn curiosity, knowledge and experience into real solutions — from a small circuit to a complete server, from a custom computer to a system designed specifically for a business.",
    "about.closing.line1": "Born from passion.",
    "about.closing.line2": "Grew with experience.",
    "about.closing.line3": "And keeps learning.",

    "values.eyebrow": "Why Valadal",
    "values.title": "Built on the same four principles, every time.",
    "values.precision": "Precision",
    "values.precisionDesc":
      "Careful, methodical technical work — nothing rushed.",
    "values.transparency": "Transparency",
    "values.transparencyDesc":
      "Clear communication about what's wrong and what it takes to fix it.",
    "values.quality": "Quality",
    "values.qualityDesc":
      "Solutions built to actually last, not just to pass inspection.",
    "values.innovation": "Innovation",
    "values.innovationDesc":
      "Technology with an eye on where things are headed next.",

    "work.eyebrow": "Selected work",
    "work.title": "Real work. Real solutions.",
    "work.text":
      "We're documenting every project as we complete it. Here's the kind of work you'll find on the full portfolio.",
    "work.gaming": "Gaming",
    "work.computers": "Computers",
    "work.smartphones": "Smartphones",
    "work.digital": "Digital",
    "work.button": "View all work →",

    "about.eyebrow": "About",
    "about.title": "Technology should work for you.",
    "about.text":
      "Valadal is a technology company built on two divisions — repair and digital solutions — and one idea: understand the problem, find the solution, make it work.",
    "about.button": "Learn more →",

    "cta.title": "Let's make it work.",
    "cta.button": "Get a Quote →",

    "footer.tagline": "Technology for the real world.",
    "footer.company": "Company",
    "footer.contact": "Get in touch",
    "footer.location": "Guadalajara, Jalisco, Mexico"
  }
};


// ============================================================
// APPLY LANGUAGE
// ============================================================

function applyLanguage(language, animate = true) {

  if (!translations[language]) {
    language = "es";
  }

  const elements = document.querySelectorAll("[data-i18n]");

  const changeText = () => {

    elements.forEach((element) => {

      const key = element.dataset.i18n;

      if (translations[language][key]) {
        element.textContent = translations[language][key];
      }

    });

    document.documentElement.lang = language;

    localStorage.setItem("valadal-language", language);

    const languageLabel =
      document.getElementById("languageLabel");

    const mobileLanguageLabel =
      document.getElementById("mobileLanguageLabel");

    if (languageLabel) {
      languageLabel.textContent =
        language === "es" ? "EN" : "ES";
    }

    if (mobileLanguageLabel) {
      mobileLanguageLabel.textContent =
        language === "es" ? "English" : "Español";
    }
  };


  if (!animate) {
    changeText();
    return;
  }


  elements.forEach((element) => {
    element.classList.add("language-changing");
  });

  setTimeout(() => {

    changeText();

    elements.forEach((element) => {
      element.classList.remove("language-changing");
    });

  }, 140);
}


// ============================================================
// LANGUAGE BUTTONS
// ============================================================

const languageToggle =
  document.getElementById("languageToggle");

const mobileLanguageToggle =
  document.getElementById("mobileLanguageToggle");

const savedLanguage =
  localStorage.getItem("valadal-language") || "es";

applyLanguage(savedLanguage, false);


function toggleLanguage() {

  const currentLanguage =
    document.documentElement.lang || "es";

  const newLanguage =
    currentLanguage === "es" ? "en" : "es";

  applyLanguage(newLanguage, true);
}


if (languageToggle) {
  languageToggle.addEventListener(
    "click",
    toggleLanguage
  );
}

if (mobileLanguageToggle) {
  mobileLanguageToggle.addEventListener(
    "click",
    toggleLanguage
  );
}


// ============================================================
// 2. THEME SYSTEM
// ============================================================

const themeToggle =
  document.getElementById("themeToggle");

const mobileThemeToggle =
  document.getElementById("mobileThemeToggle");

const themeIcon =
  document.getElementById("themeIcon");

const mobileThemeIcon =
  document.getElementById("mobileThemeIcon");


function getPreferredTheme() {

  const savedTheme =
    localStorage.getItem("valadal-theme");

  if (
    savedTheme === "light" ||
    savedTheme === "dark"
  ) {
    return savedTheme;
  }

  if (
    window.matchMedia &&
    window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
  ) {
    return "dark";
  }

  return "light";
}


function applyTheme(theme) {

  document.documentElement.dataset.theme =
    theme;

  localStorage.setItem(
    "valadal-theme",
    theme
  );

  const isDark =
    theme === "dark";

  if (themeIcon) {
    themeIcon.textContent =
      isDark ? "◐" : "◐";
  }

  if (mobileThemeIcon) {
    mobileThemeIcon.textContent =
      isDark ? "◐" : "◐";
  }

  const mobileThemeText =
    document.querySelector(
      "#mobileThemeToggle [data-i18n='theme.toggle']"
    );

  if (mobileThemeText) {
    mobileThemeText.textContent =
      isDark
        ? "Modo claro"
        : "Modo oscuro";
  }
}


applyTheme(getPreferredTheme());


function toggleTheme() {

  const currentTheme =
    document.documentElement.dataset.theme ||
    "light";

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  applyTheme(newTheme);
}


if (themeToggle) {
  themeToggle.addEventListener(
    "click",
    toggleTheme
  );
}

if (mobileThemeToggle) {
  mobileThemeToggle.addEventListener(
    "click",
    toggleTheme
  );
}


// ============================================================
// 3. NAVBAR — SCROLL
// ============================================================

const navbar =
  document.getElementById("navbar");


function updateNavbarOnScroll() {

  if (!navbar) return;

  if (window.scrollY > 8) {

    navbar.classList.add(
      "is-scrolled"
    );

  } else {

    navbar.classList.remove(
      "is-scrolled"
    );

  }
}


window.addEventListener(
  "scroll",
  updateNavbarOnScroll
);

updateNavbarOnScroll();


// ============================================================
// 4. MOBILE MENU
// ============================================================

const navToggle =
  document.getElementById("navToggle");

const navDrawer =
  document.getElementById("navDrawer");


if (navToggle && navDrawer) {

  function closeMobileMenu() {

    navDrawer.classList.remove("is-open");

    navToggle.classList.remove("is-active");

    navToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.documentElement.classList.remove(
      "menu-open"
    );

    document.body.classList.remove(
      "menu-open"
    );
  }


  navToggle.addEventListener(
    "click",
    () => {

      const isOpen =
        !navDrawer.classList.contains("is-open");

      if (isOpen) {

        navDrawer.classList.add("is-open");

        navToggle.classList.add("is-active");

        navToggle.setAttribute(
          "aria-expanded",
          "true"
        );

        document.documentElement.classList.add(
          "menu-open"
        );

        document.body.classList.add(
          "menu-open"
        );

      } else {

        closeMobileMenu();

      }

    }
  );


  navDrawer
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener(
        "click",
        closeMobileMenu
      );

    });

}

// ============================================================
// 5. LANGUAGE TRANSITION CSS
// ============================================================

const languageTransitionStyle =
  document.createElement("style");

languageTransitionStyle.textContent = `
  .language-changing {
    opacity: 0;
    transform: translateY(4px);
    transition:
      opacity 0.14s ease,
      transform 0.14s ease;
  }

  [data-i18n] {
    transition:
      opacity 0.14s ease,
      transform 0.14s ease;
  }
`;

document.head.appendChild(
  languageTransitionStyle
);


// ============================================================
// 6. REVEAL ON SCROLL
// ============================================================

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


if (
  revealElements.length &&
  "IntersectionObserver" in window
) {

  const revealObserver =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (
            entry.isIntersecting
          ) {

            entry.target.classList.add(
              "is-visible"
            );

            revealObserver.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold: 0.15,
        rootMargin:
          "0px 0px -60px 0px"
      }
    );


  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });

} else {

  revealElements.forEach((el) => {
    el.classList.add(
      "is-visible"
    );
  });

}


// ============================================================
// 7. WORK FILTERS
// ============================================================

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );

const workPieces =
  document.querySelectorAll(
    ".work-piece"
  );


filterButtons.forEach((button) => {

  button.addEventListener(
    "click",
    () => {

      filterButtons.forEach((b) => {
        b.classList.remove(
          "is-active"
        );
      });

      button.classList.add(
        "is-active"
      );

      const filter =
        button.dataset.filter;

      workPieces.forEach((piece) => {

        const category =
          piece.dataset.category;

        const shouldShow =
          filter === "all" ||
          category === filter;

        piece.hidden =
          !shouldShow;
      });

    }
  );

});


// ============================================================
// 8. CONTACT FORM
// ============================================================

const contactForm =
  document.getElementById(
    "contactForm"
  );


if (contactForm) {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const requestedService =
    params.get("service");

  const serviceSelect =
    contactForm.querySelector(
      "#service"
    );


  if (
    requestedService &&
    serviceSelect
  ) {

    const match =
      Array.from(
        serviceSelect.options
      ).find(
        (option) =>
          option.value ===
          requestedService
      );

    if (match) {
      serviceSelect.value =
        requestedService;
    }
  }


  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      const successMessage =
        document.getElementById(
          "formSuccess"
        );

      if (successMessage) {

        successMessage.classList.add(
          "is-visible"
        );

      }

      contactForm.reset();
    }
  );
}


// ============================================================
// 9. HERO FLOAT CARDS
// AUTOMATIC LOOP — MOBILE + DESKTOP
// ============================================================

const floatCards =
  document.querySelectorAll(
    ".float-card"
  );

let floatIndex = 0;
let floatTimer = null;


// ------------------------------------------------------------
// MOBILE
// Abre una tarjeta durante 5 segundos.
// ------------------------------------------------------------

function showMobileFloatCard() {

  if (window.innerWidth > 860) {
    return;
  }

  floatCards.forEach((card) => {
    card.classList.remove(
      "is-expanded"
    );
  });

  if (floatCards.length) {

    floatCards[floatIndex]
      .classList.add(
        "is-expanded"
      );

    floatIndex =
      (floatIndex + 1) %
      floatCards.length;
  }
}


// ------------------------------------------------------------
// DESKTOP
// Hace que una tarjeta destaque cada 5 segundos.
// ------------------------------------------------------------

function showDesktopFloatCard() {

  if (window.innerWidth <= 860) {
    return;
  }

  floatCards.forEach((card) => {
    card.classList.remove(
      "is-active"
    );
  });

  if (floatCards.length) {

    floatCards[floatIndex]
      .classList.add(
        "is-active"
      );

    floatIndex =
      (floatIndex + 1) %
      floatCards.length;
  }
}


// ------------------------------------------------------------
// CICLO AUTOMÁTICO
// ------------------------------------------------------------

function startFloatLoop() {

  clearInterval(
    floatTimer
  );

  if (!floatCards.length) {
    return;
  }

  // Mostrar inmediatamente
  if (window.innerWidth <= 860) {

    showMobileFloatCard();

  } else {

    showDesktopFloatCard();

  }


  // Cambiar cada 5 segundos
  floatTimer =
    setInterval(() => {

      if (
        window.innerWidth <= 860
      ) {

        showMobileFloatCard();

      } else {

        showDesktopFloatCard();

      }

    }, 5000);
}


// ------------------------------------------------------------
// CLICK MANUAL
// Si el usuario toca una tarjeta en móvil,
// el ciclo se pausa.
// ------------------------------------------------------------

floatCards.forEach((card) => {

  card.addEventListener(
    "click",
    () => {

      if (
        window.innerWidth > 860
      ) {
        return;
      }

      clearInterval(
        floatTimer
      );

      floatCards.forEach(
        (other) => {

          if (other !== card) {

            other.classList.remove(
              "is-expanded"
            );

          }

        }
      );

      card.classList.toggle(
        "is-expanded"
      );


      // Reiniciar el ciclo después
      // de 8 segundos.
      clearTimeout(
        card._floatRestartTimer
      );

      card._floatRestartTimer =
        setTimeout(() => {

          floatIndex = 0;

          startFloatLoop();

        }, 8000);

    }
  );

});


// ------------------------------------------------------------
// REINICIAR SI CAMBIA EL TAMAÑO
// ------------------------------------------------------------

let lastWindowWidth = window.innerWidth;

window.addEventListener(
  "resize",
  () => {

    const currentWidth = window.innerWidth;

    if (currentWidth !== lastWindowWidth) {

      lastWindowWidth = currentWidth;

      startFloatLoop();

    }

  }
);

// ------------------------------------------------------------
// INICIAR
// ------------------------------------------------------------

startFloatLoop();

/* ============================================================
   ACCESIBILIDAD
   ============================================================ */

const accessibilityControl =
  document.getElementById("accessibilityControl");

const accessibilityToggle =
  document.getElementById("accessibilityToggle");

if (accessibilityControl && accessibilityToggle) {

  accessibilityToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const isOpen =
      accessibilityControl.classList.toggle("is-open");

    accessibilityToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

  });


  document.addEventListener("click", (event) => {

    if (!accessibilityControl.contains(event.target)) {

      accessibilityControl.classList.remove("is-open");

      accessibilityToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  document
    .querySelectorAll(".accessibility-option")
    .forEach((button) => {

      button.addEventListener("click", () => {

        setTimeout(() => {

          accessibilityControl.classList.remove("is-open");

          accessibilityToggle.setAttribute(
            "aria-expanded",
            "false"
          );

        }, 150);

      });

    });

}
