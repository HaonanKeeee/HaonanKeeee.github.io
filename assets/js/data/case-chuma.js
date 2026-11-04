const L = (en, zh, de) => ({ en, zh, de });

export const chumaCase = {
  id: "chuma",
  path: "chuma.html",
  title: L("Chuma · A Student Marketplace", "出吗 · 留学生闲置物品平台", "Chuma · Ein Marktplatz für Studierende"),
  eyebrow: L("Personal project · Product & engineering", "个人项目 · 产品设计与全栈开发", "Eigenes Projekt · Produkt und Entwicklung"),
  year: "2026",
  affiliation: "WeChat Mini Program",
  tags: ["Product Design", "WeChat", "JavaScript", "CloudBase", "UX"],
  intro: L(
    "Moving abroad often means finding a desk, passing on a bicycle, or giving useful things a second home. Chuma brings these everyday exchanges into a WeChat mini program for students. I developed the product from its matching flows and interface through to cloud services, with a focus on clear choices, local discovery, and careful handling of contact information. The project is in beta development.",
    "留学生活常常意味着找一张书桌、转让一辆自行车，或把仍然好用的物品送给下一个需要的人。出吗将这些日常交换整合进微信小程序。我从撮合流程和界面设计出发，完成前端与云端服务开发，围绕清晰的操作选择、同城物品发现和联系方式的审慎展示打磨产品。项目目前处于 Beta 开发阶段。",
    "Ein Studium im Ausland bedeutet oft, einen Schreibtisch zu finden, ein Fahrrad weiterzugeben oder brauchbaren Dingen ein zweites Zuhause zu geben. Chuma bündelt solche alltäglichen Austausche in einem WeChat-Mini-Programm für Studierende. Ich entwickelte das Produkt von Vermittlungsabläufen und Oberfläche bis zu Cloud-Diensten – mit klaren Entscheidungen, lokaler Suche und einem sorgfältigen Umgang mit Kontaktdaten. Das Projekt befindet sich in der Beta-Entwicklung."
  ),
  hero: {
    screenshots: [
      { src: "pic/projects/chuma/home.webp", width: 589, height: 1088, alt: L("Chuma development home screen with local listings and four navigation tabs", "出吗开发版本首页，展示附近物品与底部导航", "Chuma-Startseite im Entwicklungsstand mit lokalen Angeboten und Navigation"), label: L("Local discovery", "发现附近好物", "Lokale Angebote") },
      { src: "pic/projects/chuma/discovery.webp", width: 589, height: 1088, alt: L("Chuma development search screen with filters, prices, and listing types", "出吗开发版本搜索界面，展示筛选、价格与物品类型", "Chuma-Suchansicht im Entwicklungsstand mit Filtern, Preisen und Angebotsarten"), label: L("Search & filter", "搜索与筛选", "Suchen und filtern") },
    ],
    caption: L("Home and discovery interfaces from a development build, shown with test listings.", "开发版本的首页与寻好物界面，展示内容为测试物品。", "Start- und Suchansicht eines Entwicklungsstands mit Testangeboten."),
  },
  highlights: [
    { value: "4", label: L("Matching modes", "撮合模式", "Vermittlungsarten"), detail: L("Fixed price, bidding, free items, and wanted posts", "一口价、竞价、免费送与求购", "Festpreis, Gebote, Verschenken und Gesuche") },
    { value: L("Full-stack", "全栈实现", "Full-Stack"), label: L("Product to cloud", "从产品到云端", "Vom Produkt bis zur Cloud"), detail: L("Native mini-program interface and server-side workflows", "原生小程序界面与服务端业务流程", "Native Oberfläche und serverseitige Abläufe") },
    { value: L("Your choice", "由你选择", "Du entscheidest"), label: L("Contact sharing", "联系方式展示", "Kontaktfreigabe"), detail: L("Publisher selection comes before contact release", "发布者确定交接对象后再开放联系方式", "Kontaktdaten erst nach Auswahl einer Person") },
  ],
  sections: [
    {
      id: "journey",
      title: L("One journey, four ways to exchange", "一条流程，四种交换方式", "Ein Ablauf, vier Arten des Austauschs"),
      text: L(
        "The same core journey supports selling, bidding, giving away, and asking for an item. Students discover relevant listings, send a request, and wait for the publisher to choose a match. Local filters, familiar price cues, and a dedicated request inbox keep the next step visible. The product coordinates discovery and matching; students arrange payment and handover themselves.",
        "出售、竞价、赠送和求购共享一条清晰的核心流程：发现物品、表达意向，再由发布者选择交接对象。地点筛选、明确的价格提示与独立的请求管理入口，让用户始终知道下一步该做什么。产品负责信息发现与撮合，付款和交接由双方自行安排。",
        "Verkaufen, Bieten, Verschenken und Gesuche folgen einem gemeinsamen Kernablauf: passende Angebote entdecken, Interesse äußern und auf die Auswahl durch die veröffentlichende Person warten. Ortsfilter, klare Preishinweise und ein eigener Anfragebereich machen den nächsten Schritt sichtbar. Das Produkt vermittelt Kontakte; Zahlung und Übergabe vereinbaren die Beteiligten selbst."
      ),
      figures: [{ src: "pic/projects/chuma/matching-flow.svg", width: 1600, height: 670, alt: L("Four listing modes feed into discovery, requests, publisher selection, gated contact, and local handover", "四种发布模式进入发现、请求、发布者选择、联系方式解锁与线下交接流程", "Vier Angebotsarten führen über Suche, Anfrage und Auswahl zur Kontaktfreigabe und lokalen Übergabe"), caption: L("The shared matching journey, summarized from the implemented product flows.", "基于已实现产品流程整理的统一撮合路径。", "Gemeinsamer Vermittlungsablauf auf Basis der implementierten Produktlogik.") }],
    },
    {
      id: "trust",
      title: L("Trust built into the interaction", "把信任融入交互", "Vertrauen im Interaktionsablauf"),
      text: L(
        "Contact information is released only after a publisher selects a match, giving both sides a deliberate transition from browsing to direct conversation. Display-name choices, favourites, request history, and reporting flows support the surrounding experience. Important decisions are checked in cloud functions rather than entrusted to the client interface, connecting a simple user journey to a controlled backend.",
        "联系方式仅在发布者选定交接对象后开放，让双方从浏览进入直接沟通时有明确的边界。身份展示选择、收藏、请求记录与反馈举报流程共同支撑使用体验。关键业务判断由云函数校验，将简洁的前端交互与受控的服务端流程连接起来。",
        "Kontaktdaten werden erst freigegeben, nachdem die veröffentlichende Person eine Person ausgewählt hat. So entsteht ein bewusster Übergang vom Stöbern zum direkten Gespräch. Anzeigenamen, Favoriten, Anfrageverlauf und Meldefunktionen ergänzen die Nutzung. Wichtige Entscheidungen werden in Cloud-Funktionen geprüft; ein einfacher Ablauf trifft auf eine kontrollierte Backend-Logik."
      ),
      figures: [],
    },
    {
      id: "engineering",
      title: L("A product shaped through iteration", "在迭代中形成完整产品", "Ein Produkt, das durch Iteration entsteht"),
      text: L(
        "Building the entire stack made it possible to refine details across interface and backend together: preserve an interrupted request through login, prevent duplicate actions on retries, and keep search results consistent as filters change. These small interactions are central to making a marketplace feel dependable. The result is a working beta that brings interface design, everyday use, and cloud services together.",
        "端到端开发让界面与后端能够一起迭代：登录后继续之前的操作、重试时避免重复提交、筛选变化时保持搜索结果一致。这些细小交互决定了平台用起来是否可靠。最终形成了一套把界面设计、日常使用和云端服务连接起来的 Beta 产品。",
        "Die Entwicklung des gesamten Stacks erlaubte gemeinsame Verbesserungen an Oberfläche und Backend: unterbrochene Anfragen nach dem Login fortsetzen, doppelte Aktionen bei Wiederholungen vermeiden und Suchergebnisse bei Filterwechseln konsistent halten. Solche Details entscheiden über die Verlässlichkeit eines Marktplatzes. Entstanden ist eine funktionsfähige Beta, die Oberflächengestaltung, alltägliche Nutzung und Cloud-Dienste zusammenführt."
      ),
      figures: [],
    },
  ],
};
