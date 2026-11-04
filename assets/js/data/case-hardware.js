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
    "The final refinement: classification accuracy against HSPICE-estimated energy per vector comparison. The red star marks the selected setting.",
    "最终细化搜索：分类准确率与 HSPICE 估算的单次向量比较能耗。红星为选定配置。",
    "Die letzte Verfeinerung: Klassifikationsgenauigkeit und mit HSPICE geschätzte Energie je Vektorvergleich. Der rote Stern markiert die gewählte Einstellung."
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
    "The initial sweep exposed the design space and guided the subsequent refinement. Energy values are circuit-simulation estimates.",
    "初始扫描呈现了设计空间，并为后续细化搜索提供依据。能耗数值来自电路仿真估算。",
    "Der erste Sweep machte den Entwurfsraum sichtbar und leitete die weitere Suche. Die Energiewerte stammen aus Schaltungssimulationen."
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
    "Workflow summary created for this page from the project report.",
    "根据项目报告为本页绘制的流程概括。",
    "Für diese Seite erstellte Ablaufübersicht auf Grundlage des Projektberichts."
  ),
};

export const hdcCase = {
  id: "hdc",
  path: "hdc.html",
  title: L("Hardware-aware Hyperdimensional Computing", "面向硬件的超维计算", "Hardwarebewusstes Hyperdimensional Computing"),
  eyebrow: L("Brain-inspired Computing · Lab project", "脑启发计算 · 实验项目", "Brain-inspired Computing · Laborprojekt"),
  year: "2025",
  affiliation: "TUM",
  tags: ["HDC", "HSPICE", "CAM", "Hardware–software co-design"],
  intro: L(
    "I wanted to see how much a classifier’s hardware could change its answers. This brain-inspired computing project brought text encoding and circuit simulation together, looking for HDC designs that reached at least 95% accuracy with low comparison energy. It connected prediction quality with the less visible cost of each comparison.",
    "这个项目让我把分类器的准确率和底层电路放到一起看：同样的任务，换一组硬件参数，结果会怎样？我结合文本编码与电路仿真，寻找准确率至少达到 95%、比较能耗更低的 HDC 配置，把算法表现与每一次比较背后的硬件代价联系起来。",
    "Ich wollte herausfinden, wie stark die Hardware die Antworten eines Klassifikators verändert. In diesem Projekt brachte ich Textkodierung und Schaltungssimulation zusammen und suchte nach HDC-Konfigurationen mit mindestens 95 % Genauigkeit bei geringer Vergleichsenergie. So wurde neben der Vorhersagequalität auch der weniger sichtbare Energiebedarf jedes Vergleichs greifbar."
  ),
  hero: hdcFinal,
  highlights: [
    {
      value: "96.73%",
      label: L("Selected accuracy", "选定配置准确率", "Genauigkeit der gewählten Konfiguration"),
      detail: L("Final simulation-based trade-off point.", "最终仿真搜索中的折中点。", "Gewählter Kompromiss der abschließenden Simulationssuche."),
    },
    {
      value: "49.6 fJ",
      label: L("Simulated comparison energy", "仿真比较能耗", "Simulierte Vergleichsenergie"),
      detail: L("HSPICE estimate per vector comparison at 25°C.", "25°C 下 HSPICE 估算的单次向量比较能耗。", "HSPICE-Schätzung je Vektorvergleich bei 25 °C."),
    },
    {
      value: L("Co-design", "软硬协同", "Co-Design"),
      label: L("Circuits + classifier", "电路与分类器一起看", "Schaltung und Klassifikator"),
      detail: L("Text encoding and circuit choices explored together.", "联合探索文本编码与电路参数。", "Textkodierung und Schaltungsparameter gemeinsam untersucht."),
    },
  ],
  sections: [
    {
      id: "hardware",
      title: L("Text becomes a hardware comparison", "文本如何变成硬件比较", "Vom Text zum Hardwarevergleich"),
      text: L(
        "HDC turns groups of characters into long vectors, then compares those vectors to make a prediction. Here, a content-addressable memory uses discharge timing to represent their distance. If those timings overlap, the comparison can become ambiguous. I varied the text representation and circuit settings together, so their effects on accuracy and energy could be seen in the same experiment.",
        "HDC 先把字符分组编码为高维向量，再通过向量比较完成分类。这里的内容寻址存储器用放电时间表示向量距离；如果时间分布重叠，比较就可能产生歧义。我把文本表示和电路参数一起调整，在同一套实验里观察它们怎样影响准确率与能耗。",
        "HDC kodiert Zeichengruppen als lange Vektoren und vergleicht diese für eine Vorhersage. Hier stellt ein inhaltsadressierbarer Speicher ihren Abstand durch Entladezeiten dar. Überlappen diese Zeiten, kann der Vergleich mehrdeutig werden. Ich variierte Textdarstellung und Schaltungsparameter gemeinsam, um ihre Auswirkungen auf Genauigkeit und Energie im selben Versuch zu sehen."
      ),
      figures: [hdcWorkflow],
    },
    {
      id: "search",
      title: L("Finding a sensible balance", "逐步找到合适的平衡", "Eine passende Balance finden"),
      text: L(
        "The first sweep covered vector length, character-group size, voltage and several circuit parameters. It showed that stronger transistors or a larger representation did not automatically give the best balance. Two refinement rounds narrowed the search toward smaller comparison blocks with full distance precision, then tested voltage more closely around the promising region.",
        "第一轮扫描覆盖向量维度、字符分组长度、供电电压和多项电路参数。结果说明，晶体管更强、向量更大，并不一定带来更好的整体取舍。接下来两轮细化把范围缩小到保留完整距离精度的小型比较模块，再围绕有潜力的区间更仔细地调整电压。",
        "Der erste Sweep umfasste Vektorlänge, Zeichengruppengröße, Spannung und mehrere Schaltungsparameter. Stärkere Transistoren oder größere Vektoren lieferten dabei nicht automatisch die beste Balance. Zwei Verfeinerungsrunden konzentrierten die Suche auf kleinere Vergleichsblöcke mit voller Distanzauflösung und untersuchten anschließend die Spannung im vielversprechenden Bereich genauer."
      ),
      figures: [hdcSearch],
    },
    {
      id: "trade-off",
      title: L("What the final choice buys", "最终选择换来了什么", "Was die gewählte Einstellung bringt"),
      text: L(
        "The selected setting used 2,000-dimensional vectors at 0.58 V. The highest-accuracy setting is included below to show what the extra accuracy costs in this comparison. For me, the useful lesson was to choose an operating point that fits the task, while keeping the model and circuit in the same conversation.",
        "最终选定配置采用 2,000 维向量与 0.58 V 供电。下表也列出了最高准确率配置，方便看清多争取一点准确率需要付出多少比较能耗。对我来说，这个项目最有价值的收获是：先选适合任务的工作点，并始终把模型和电路放在一起考虑。",
        "Die gewählte Konfiguration nutzt Vektoren mit 2.000 Dimensionen bei 0,58 V. Daneben steht die Konfiguration mit der höchsten Genauigkeit, damit deren zusätzlicher Energiebedarf sichtbar wird. Für mich war die wichtigste Erkenntnis, einen zur Aufgabe passenden Arbeitspunkt zu wählen und Modell und Schaltung dabei immer gemeinsam zu betrachten."
      ),
      figures: [],
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
          "Energy is estimated with HSPICE at 25°C for one vector comparison. Whole-system inference energy was not measured.",
          "能耗为 25°C 下 HSPICE 对单次向量比较的估算；未测量整机推理能耗。",
          "Die Energie wird mit HSPICE bei 25 °C für einen Vektorvergleich geschätzt. Die Energie einer vollständigen Systeminferenz wurde nicht gemessen."
        ),
      },
    },
  ],
};

const pcbBoard = {
  src: "pic/projects/pcb/reference-board.webp",
  width: 2400,
  height: 1301,
  alt: L(
    "Assembled reference PCB with an OLED display, power electronics, selectable resistive loads and an external coil",
    "已组装的参考电路板，包括 OLED、电力电子电路、可选电阻负载及外接线圈",
    "Bestückte Referenzplatine mit OLED-Anzeige, Leistungselektronik, schaltbaren Widerstandslasten und externer Spule"
  ),
  caption: L(
    "The assembled reference board used for bench-powered electrical and thermal validation.",
    "用于台式电源供电下电气与热像验证的实物参考板。",
    "Die bestückte Referenzplatine für elektrische und thermische Tests mit Labornetzteil."
  ),
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
    "The PCB layout integrates load control, measurement circuits and the microcontroller.",
    "PCB 布局将负载控制、测量电路与微控制器集成在同一块板上。",
    "Das Platinenlayout integriert Laststeuerung, Messschaltungen und Mikrocontroller."
  ),
};

const pcbDisplay = {
  src: "pic/projects/pcb/firmware-display.webp",
  width: 2000,
  height: 816,
  alt: L(
    "Two OLED display states showing measured electrical quantities and commanded PWM duty cycles",
    "OLED 的两种显示状态：测量得到的电气量及设定的 PWM 占空比",
    "Zwei OLED-Anzeigen mit gemessenen elektrischen Größen und eingestellten PWM-Tastverhältnissen"
  ),
  caption: L(
    "Live measurements and PWM settings displayed directly on the board.",
    "在电路板上直接查看实时测量值与 PWM 设置。",
    "Messwerte und PWM-Einstellungen werden direkt auf der Platine angezeigt."
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
    "One channel on, all off, all on. Frames use different automatic temperature scales.",
    "单通道开启、全部关闭、全部开启。各帧使用不同的自动温标。",
    "Ein Kanal an, alle aus, alle an. Die Bilder verwenden unterschiedliche automatische Temperaturskalen."
  ),
};

export const pcbCase = {
  id: "pcb",
  path: "pcb.html",
  title: L("Reference PCB for Thermal Power-Loss Analysis", "用于热像损耗分析的参考电路板", "Referenzplatine für thermografische Verlustleistungsanalyse"),
  eyebrow: L("Bachelor’s thesis · Hardware and firmware", "本科毕业论文 · 硬件与固件", "Bachelorarbeit · Hardware und Firmware"),
  year: "2024",
  affiliation: "TUM",
  tags: ["PCB design", "ATmega328PB", "C", "UART / SPI", "Thermography"],
  intro: L(
    "Thermal images show where a circuit gets warm, but turning that picture into a power-loss estimate needs a useful reference. For my bachelor’s thesis, I designed, assembled and programmed a PCB that creates selectable heating scenarios. The project took me through the whole process, from the first schematic to firmware and tests on the finished board.",
    "热像能看出电路哪里发热，但要进一步估算损耗，还需要合适的参考对象。在本科毕业论文中，我设计、组装并编程实现了一块能切换不同发热场景的 PCB，从最初的原理图一路做到固件和实物测试，完整走过了硬件落地的过程。",
    "Wärmebilder zeigen, wo eine Schaltung warm wird. Um daraus Verlustleistung abzuschätzen, braucht es eine passende Referenz. Für meine Bachelorarbeit entwarf, bestückte und programmierte ich eine Platine mit wählbaren Erwärmungsszenarien. Dabei durchlief ich den gesamten Prozess, vom ersten Schaltplan über die Firmware bis zu Tests an der fertigen Platine."
  ),
  hero: pcbBoard,
  highlights: [
    {
      value: "8",
      label: L("Individually controlled resistors", "独立控制的电阻通道", "Einzeln steuerbare Widerstände"),
      detail: L("SPI selection verified in thermal images.", "通过热像验证 SPI 通道选择。", "SPI-Auswahl durch Wärmebilder überprüft."),
    },
    {
      value: L("Built", "实物实现", "Aufgebaut"),
      label: L("Design to hardware", "从设计到硬件", "Vom Entwurf zur Hardware"),
      detail: L("Schematic, layout, assembly and firmware.", "原理图、布局、组装与固件。", "Schaltplan, Layout, Bestückung und Firmware."),
    },
    {
      value: L("Tested", "台架验证", "Getestet"),
      label: L("Electrical + thermal", "电气与热像验证", "Elektrisch und thermisch"),
      detail: L("Bench power, oscilloscope checks and thermal images.", "台式电源供电、示波器检查与热像观察。", "Labornetzteil, Oszilloskopmessungen und Wärmebilder."),
    },
  ],
  sections: [
    {
      id: "design",
      title: L("A board for controlled heating", "让发热条件可控", "Eine Platine für kontrollierte Erwärmung"),
      text: L(
        "The board brings independently controlled resistors and an external coil into one setup. MOSFETs, H-bridges and switching logic create different heating patterns, while voltage, current and temperature measurements help explain what is happening. I also separated the analog and digital supplies so the sensing circuits had their own supply path.",
        "电路板把可独立控制的电阻和外接线圈放进同一套实验装置。MOSFET、H 桥与开关逻辑产生不同的发热模式，电压、电流和温度测量则帮助观察实际发生了什么。我还把模拟与数字供电分开，为测量电路保留独立的供电路径。",
        "Die Platine vereint unabhängig steuerbare Widerstände und eine externe Spule in einem Aufbau. MOSFETs, H-Brücken und Schaltlogik erzeugen unterschiedliche Wärmemuster. Spannungs-, Strom- und Temperaturmessungen helfen dabei, das Verhalten nachzuvollziehen. Analoge und digitale Versorgungen habe ich getrennt, damit die Messschaltungen einen eigenen Versorgungspfad haben."
      ),
      figures: [pcbLayout],
    },
    {
      id: "firmware",
      title: L("Adjust it, then see what changes", "调一调，再看发生了什么", "Einstellen und die Wirkung sehen"),
      text: L(
        "C firmware on the ATmega328PB turns commands from a computer into PWM settings and SPI outputs. Each command picks a component and gives it a setting. The firmware also converts ADC readings into physical values. An OLED switches between measurements and duty cycles, making it easier to adjust an experiment and see the response straight away.",
        "ATmega328PB 上的 C 固件把电脑发来的指令转换为 PWM 设置和 SPI 输出：先选器件，再给参数。固件也会把 ADC 读数换算成物理量。OLED 可以在测量值和占空比之间切换，方便边调整实验、边直接查看反馈。",
        "C-Firmware auf dem ATmega328PB setzt PC-Befehle in PWM-Einstellungen und SPI-Ausgaben um: Bauteil auswählen, Wert übertragen. Außerdem rechnet sie ADC-Werte in physikalische Größen um. Das OLED wechselt zwischen Messwerten und Tastverhältnissen. So lässt sich ein Versuch einstellen und die Reaktion direkt beobachten."
      ),
      figures: [pcbDisplay],
    },
    {
      id: "validation",
      title: L("Seeing the result on the bench", "在实验台上看到结果", "Das Ergebnis auf dem Labortisch"),
      text: L(
        "With a bench supply powering the board, I checked that commands produced the intended behavior. Eight resistor channels switched independently, and thermal images showed one on, all off and all on. Oscilloscope checks confirmed the coil driver’s dead time and phase offset. The finished setup gives later thermal-estimation work something physical to test against.",
        "接上台式电源后，我逐项检查指令是否带来了预期行为。八个电阻通道可以独立切换，热像能看到单通道开启、全部关闭和全部开启的区别。示波器也确认了线圈驱动的死区和相位偏移。完成后的装置，为后续热损耗估算研究提供了可以直接测试的实物参考。",
        "Mit einem Labornetzteil prüfte ich, ob die Befehle das gewünschte Verhalten auslösen. Acht Widerstandskanäle ließen sich einzeln schalten; Wärmebilder zeigten einen aktiven Kanal sowie alle Kanäle aus und an. Oszilloskopmessungen bestätigten Totzeit und Phasenversatz der Spulenansteuerung. Der fertige Aufbau bietet eine physische Referenz für spätere Arbeiten zur thermografischen Verlustleistungsschätzung."
      ),
      figures: [pcbThermal],
    },
  ],
};
