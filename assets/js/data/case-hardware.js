const L = (en, zh, de) => ({ en, zh, de });

const hdcFinal = {
  src: "pic/projects/hdc/pareto-final.webp",
  width: 2000,
  height: 1200,
  alt: L(
    "Final HDC accuracy–energy plot with evaluated configurations, a Pareto frontier and the selected trade-off point",
    "HDC 最终准确率与能耗关系图，展示已评估配置、帕累托前沿及选定折中点",
    "Abschließendes HDC-Diagramm zu Genauigkeit und Energie mit untersuchten Konfigurationen, Paretofront und gewähltem Kompromiss"
  ),
  caption: L(
    "Final accuracy–energy trade-off.",
    "最终准确率与能耗取舍。",
    "Die abschließende Abwägung von Genauigkeit und Energie."
  ),
};

const hdcSearch = {
  src: "pic/projects/hdc/design-space.webp",
  width: 2000,
  height: 1200,
  alt: L(
    "Initial HDC parameter sweep showing a broad cloud of configurations and the accuracy–energy Pareto frontier",
    "HDC 初始参数扫描，展示大量配置及准确率与能耗的帕累托前沿",
    "Erster HDC-Parametersweep mit vielen Konfigurationen und der Paretofront zwischen Genauigkeit und Energie"
  ),
  caption: L(
    "Initial sweep of simulated configurations.",
    "初始仿真配置扫描。",
    "Erste Simulationsreihe mit verschiedenen Konfigurationen."
  ),
};

const hdcWorkflow = {
  src: "pic/projects/hdc/pipeline.svg",
  width: 1800,
  height: 780,
  alt: L(
    "Text and N-grams become a hypervector, CAM comparison produces a classification, and circuit settings are evaluated for their accuracy–energy trade-off",
    "文本与 N-gram 编码为高维向量，经 CAM 比较得到分类，同时评估电路参数对准确率与能耗取舍的影响",
    "Text und N-Gramme werden zu einem Hypervektor; der CAM-Vergleich führt zur Klassifikation, während Schaltungsparameter hinsichtlich Genauigkeit und Energie bewertet werden"
  ),
  caption: L(
    "Workflow summary created for this page.",
    "为本页绘制的流程概括。",
    "Für diese Seite erstellte Ablaufübersicht."
  ),
};

export const hdcCase = {
  id: "hdc",
  path: "hdc.html",
  title: L("Hardware-aware Hyperdimensional Computing", "面向硬件的超维计算", "Hardwarebewusstes Hyperdimensional Computing"),
  eyebrow: L("Brain-inspired Computing · Lab project", "脑启发计算 · 实验项目", "Brain-inspired Computing · Laborprojekt"),
  year: "2025",
  affiliation: "TUM",
  tags: ["HDC", "HSPICE", "Co-design"],
  intro: L(
    "I explored how circuit choices change a text classifier’s accuracy and energy, bringing hardware and software into the same design process.",
    "我把硬件和软件放在一起设计，探索电路选择如何改变文本分类器的准确率与能耗。",
    "Ich untersuchte, wie Schaltungsparameter Genauigkeit und Energie eines Textklassifikators beeinflussen, und betrachtete Hardware und Software dabei gemeinsam."
  ),
  hero: hdcFinal,
  highlights: [
    {
      value: "96.73%",
      label: L("Selected accuracy", "选定配置准确率", "Genauigkeit der gewählten Konfiguration"),
    },
    {
      value: "49.6 fJ",
      label: L("Simulated comparison energy", "仿真比较能耗", "Simulierte Vergleichsenergie"),
    },
    {
      value: L("Co-design", "软硬协同", "Co-Design"),
      label: L("Circuits + classifier", "电路与分类器一起看", "Schaltung und Klassifikator"),
    },
  ],
  sections: [
    {
      id: "hardware",
      title: L("Model meets circuit", "把模型与电路连起来", "Modell trifft Schaltung"),
      text: L(
        "Text becomes a long vector, then a memory circuit compares it; I tuned both parts together to understand their effect on classification.",
        "文本先编码为高维向量，再由存储电路比较。我同时调整这两部分，观察它们对分类结果的影响。",
        "Text wird als langer Vektor kodiert und von einer Speicherschaltung verglichen. Ich stimmte beide Teile gemeinsam ab und beobachtete ihre Wirkung auf die Klassifikation."
      ),
      figures: [hdcWorkflow],
    },
    {
      id: "trade-off",
      aliases: ["search"],
      title: L("Accuracy and energy, together", "一起权衡准确率与能耗", "Genauigkeit und Energie gemeinsam abwägen"),
      text: L(
        "Simulation sweeps found a useful balance between accuracy and energy, showing why the most accurate setting is not always the most practical choice.",
        "通过仿真搜索，我找到了准确率与能耗之间的合适平衡：准确率最高的配置，不一定就是最实用的选择。",
        "Die Simulationsreihen zeigten eine passende Balance zwischen Genauigkeit und Energie: Die genaueste Konfiguration ist nicht immer die praktischste Wahl."
      ),
      figures: [hdcSearch],
      table: {
        headers: [
          L("Configuration", "配置", "Konfiguration"),
          L("Accuracy", "准确率", "Genauigkeit"),
          L("Energy / comparison", "单次比较能耗", "Energie je Vergleich"),
        ],
        rows: [
          { label: L("Selected trade-off", "选定折中配置", "Gewählter Kompromiss"), values: ["96.73%", "49.6 fJ"], featured: true },
          { label: L("Highest observed accuracy", "最高观测准确率", "Höchste beobachtete Genauigkeit"), values: ["98.4%", "726 fJ"], featured: false },
        ],
        note: L(
          "HSPICE estimate per vector comparison at 25°C; not full-system inference energy.",
          "能耗为 25°C 下 HSPICE 对单次向量比较的估算，不含整机推理。",
          "Die Energieangaben sind HSPICE-Schätzungen je Vektorvergleich bei 25 °C, ohne den Energiebedarf der gesamten Inferenz."
        ),
      },
    },
  ],
};

const pcbLayout = {
  src: "pic/projects/pcb/pcb-layout.webp",
  width: 2400,
  height: 1527,
  alt: L(
    "Top view of the reference PCB layout, showing the placement of control, sensing and load circuits",
    "参考电路板布局顶视图，展示控制、测量和负载电路的位置",
    "Draufsicht des Platinenlayouts mit der Anordnung von Steuerung, Messschaltungen und Lasten"
  ),
  caption: L(
    "Custom PCB layout for controlled heating.",
    "用于可控发热实验的自制 PCB 布局。",
    "Eigenes Platinenlayout für kontrollierte Erwärmung."
  ),
};

const pcbThermal = {
  src: "pic/projects/pcb/thermal-states.webp",
  width: 2198,
  height: 573,
  alt: L(
    "Three thermal images of the resistor array: one channel active, all channels off and all channels active",
    "电阻阵列的三幅热像：单通道开启、全部关闭及全部开启",
    "Drei Wärmebilder des Widerstandsarrays: ein Kanal aktiv, alle Kanäle aus und alle Kanäle aktiv"
  ),
  caption: L(
    "Bench-powered validation, with different temperature scales.",
    "台式电源供电验证，各帧温标不同。",
    "Prüfung mit Labornetzteil; unterschiedliche Temperaturskalen."
  ),
};

export const pcbCase = {
  id: "pcb",
  path: "pcb.html",
  title: L("Reference PCB for Thermal Power-Loss Analysis", "用于热像损耗分析的参考电路板", "Referenzplatine für thermografische Verlustleistungsanalyse"),
  eyebrow: L("Bachelor’s thesis · Hardware and firmware", "本科毕业论文 · 硬件与固件", "Bachelorarbeit · Hardware und Firmware"),
  year: "2024",
  affiliation: "TUM",
  tags: ["PCB design", "Firmware", "Thermography"],
  intro: L(
    "I designed and built a reference board that creates controlled heating patterns, giving thermal power-loss research a practical starting point.",
    "我设计并制作了一块能产生可控发热模式的参考板，为热像损耗研究提供可直接使用的实验起点。",
    "Ich entwarf und baute eine Referenzplatine mit steuerbaren Wärmemustern als praktischen Ausgangspunkt für die thermografische Untersuchung elektrischer Verluste."
  ),
  hero: pcbLayout,
  highlights: [
    {
      value: "8",
      label: L("Independent loads", "独立控制负载", "Einzeln steuerbare Lasten"),
    },
    {
      value: L("Built", "实物实现", "Aufgebaut"),
      label: L("Design to hardware", "从设计到硬件", "Vom Entwurf zur Hardware"),
    },
    {
      value: L("Tested", "台架验证", "Getestet"),
      label: L("Electrical + thermal", "电气与热像验证", "Elektrisch und thermisch"),
    },
  ],
  sections: [
    {
      id: "design",
      aliases: ["firmware"],
      title: L("Make heating controllable", "让发热可控", "Erwärmung gezielt steuern"),
      text: L(
        "I combined circuit design, board assembly and control software so heating conditions could be changed deliberately and checked directly on the bench.",
        "从电路设计、PCB 组装到控制软件，我把整套流程连起来，让发热条件可以主动调整，并在实验台上直接检查效果。",
        "Ich verband Schaltungsentwurf, Bestückung und Steuersoftware, damit sich die Erwärmung gezielt verändern und direkt auf dem Labortisch überprüfen ließ."
      ),
      figures: [],
    },
    {
      id: "validation",
      title: L("See the heat", "在热像里看结果", "Wärme sichtbar machen"),
      text: L(
        "Eight resistor loads switched independently, and thermal images confirmed the heating patterns, turning software commands into visible behavior on the finished board.",
        "八个电阻负载可以独立切换，热像确认了不同发热模式，让软件指令在完成的电路板上变成看得见的变化。",
        "Acht Widerstandslasten ließen sich einzeln schalten. Wärmebilder bestätigten die Wärmemuster und machten die Wirkung der Softwarebefehle auf der fertigen Platine sichtbar."
      ),
      figures: [pcbThermal],
    },
  ],
};
