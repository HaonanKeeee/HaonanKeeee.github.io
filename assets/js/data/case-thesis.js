const L = (en, zh, de) => ({ en, zh, de });

const modelComparison = {
  src: "pic/projects/thesis/model-comparison.webp",
  width: 2400,
  height: 1223,
  alt: L(
    "Original twelve-block visual encoder compared with the compressed eight-block model and spatial token merging",
    "原始十二层视觉编码器与压缩后的八层模型及空间 token 合并结构对比",
    "Vergleich des ursprünglichen visuellen Encoders mit zwölf Blöcken und des komprimierten Modells mit acht Blöcken und räumlicher Token-Zusammenführung"
  ),
  caption: L(
    "Original and compressed visual pipelines, retaining the same output interface.",
    "原始与压缩视觉流程对比，保留相同的输出接口。",
    "Ursprüngliche und komprimierte visuelle Verarbeitung mit gleicher Ausgabeschnittstelle."
  ),
};

const executionFlow = {
  src: "pic/projects/thesis/heterogeneous-flow.webp",
  width: 2200,
  height: 1866,
  alt: L(
    "Final execution flow from camera and language instruction through RK3588 CPU, NPU, and FPGA to a gimbal command",
    "相机与语言指令经过 RK3588 CPU、NPU 和 FPGA 生成云台指令的最终执行流程",
    "Finaler Ablauf von Kamerabild und Sprachanweisung über RK3588-CPU, NPU und FPGA zum Schwenk-Neige-Befehl"
  ),
  caption: L(
    "The final workload partition across the CPU, NPU, and FPGA.",
    "最终系统在 CPU、NPU 与 FPGA 之间的任务划分。",
    "Die finale Aufgabenverteilung zwischen CPU, NPU und FPGA."
  ),
};

const executionTimeline = {
  src: "pic/projects/thesis/fpga-npu-timeline.webp",
  width: 2400,
  height: 1892,
  alt: L(
    "Measured FPGA and NPU timelines before and after encoder segmentation, with frame colors, stage legend, and time in milliseconds",
    "编码器分段前后的 FPGA 与 NPU 实测时序，含帧颜色、阶段图例及毫秒时间轴",
    "Gemessene FPGA- und NPU-Zeitabläufe vor und nach Encoder-Segmentierung, mit Bildfarben, Stufenlegende und Zeitachse in Millisekunden"
  ),
  caption: L(
    "Measured cross-frame execution; segmentation gives the next frame earlier FPGA access.",
    "实测跨帧执行时序：编码器分段让下一帧更早使用 FPGA。",
    "Gemessene bildübergreifende Ausführung: Die Segmentierung gibt dem nächsten Bild früheren FPGA-Zugriff."
  ),
};

const physicalDemo = {
  src: "pic/projects/thesis/gimbal-demo.webp",
  width: 1536,
  height: 752,
  alt: L(
    "Actual camera-mounted gimbal following a cup held in front of the embedded platform",
    "真实相机云台跟踪嵌入式平台前方手持杯子的演示场景",
    "Reales Schwenk-Neige-System mit Kamera, das einer vor der eingebetteten Plattform gehaltenen Tasse folgt"
  ),
  caption: L(
    "Language-guided cup centering on the physical prototype.",
    "实体原型上的语言指令引导杯子回中演示。",
    "Sprachgesteuerte Zentrierung einer Tasse am realen Prototyp."
  ),
};

export const thesisCase = {
  id: "thesis",
  path: "thesis.html",
  title: L(
    "Heterogeneous Edge VLA Acceleration",
    "边缘 VLA 模型的异构加速",
    "Heterogene Beschleunigung von Edge-VLA-Modellen"
  ),
  eyebrow: L("Master's thesis · Edge AI & robotics", "硕士论文 · 边缘 AI 与机器人", "Masterarbeit · Edge AI und Robotik"),
  year: "2026",
  affiliation: "Technical University of Munich · TUM-AIR",
  tags: ["Vision–Language–Action", "Model Compression", "FPGA", "RK3588", "ROS 2"],
  intro: L(
    "This master's project brought a vision–language–action model onto a small robotic platform. It combines a compressed visual model, FPGA acceleration, and the RK3588's NPU in a working ROS 2 prototype. A language instruction selects an object, and a camera-mounted gimbal turns to center it.",
    "这项硕士项目把视觉–语言–动作模型部署到一套小型机器人平台，将视觉模型压缩、FPGA 加速和 RK3588 NPU 整合进可运行的 ROS 2 原型。用户用语言指令指定物体，相机云台再转向目标，使其回到画面中心。",
    "In diesem Masterprojekt kam ein Vision-Language-Action-Modell auf einer kleinen Roboterplattform zum Einsatz. Der funktionierende ROS-2-Prototyp verbindet ein komprimiertes visuelles Modell, FPGA-Beschleunigung und die NPU des RK3588. Eine sprachliche Anweisung wählt das Objekt aus; die Kamera auf einem Schwenk-Neige-System richtet sich darauf aus und zentriert es im Bild."
  ),
  hero: {
    src: "pic/projects/thesis/platform.webp",
    width: 2000,
    height: 1500,
    alt: L(
      "Assembled RK3588 and Kintex-7 platform beside the camera-mounted two-axis gimbal",
      "组装完成的 RK3588 与 Kintex-7 平台，以及搭载相机的双轴云台",
      "Aufgebaute RK3588- und Kintex-7-Plattform neben dem Schwenk-Neige-System mit Kamera"
    ),
    caption: L("The complete experimental platform.", "完整实验平台。", "Die vollständige Versuchsplattform."),
  },
  highlights: [
    {
      value: "2.6×",
      label: L("Command throughput", "指令吞吐率", "Befehlsdurchsatz"),
      detail: L("Versus the original NPU-only model", "相对原始模型仅用 NPU 的方案", "Gegenüber dem ursprünglichen Modell nur auf der NPU"),
    },
    {
      value: "14%",
      label: L("Lower median latency", "中位延迟降低", "Niedrigere mediane Latenz"),
      detail: L("Versus the original NPU-only model", "相对原始模型仅用 NPU 的方案", "Gegenüber dem ursprünglichen Modell nur auf der NPU"),
    },
    {
      value: "ROS 2",
      label: L("Working gimbal prototype", "可运行的云台原型", "Funktionierender Schwenk-Neige-Prototyp"),
      detail: L("Language-guided target selection", "语言指令驱动的目标选择", "Sprachgesteuerte Zielauswahl"),
    },
  ],
  sections: [
    {
      id: "compression",
      title: L("A lighter visual model", "让视觉模型更轻量", "Ein schlankeres visuelles Modell"),
      text: L(
        "The original model spent most of its time processing images. A smaller visual encoder and feature distillation reduced that workload while keeping the existing language model and action head. This gave the hardware less work to do and kept the application interface unchanged.",
        "原始模型的大部分推理时间都花在图像处理上。通过缩小视觉编码器并进行特征蒸馏，项目减少了这部分计算，同时保留原有的语言模型和动作头。这样既减轻了硬件负担，也保留了应用已有的输入输出接口。",
        "Beim ursprünglichen Modell entfiel die meiste Rechenzeit auf die Bildverarbeitung. Ein kleinerer visueller Encoder und Merkmalsdistillation reduzierten diesen Aufwand, während das bestehende Sprachmodell und der Aktionskopf erhalten blieben. So musste die Hardware weniger rechnen, ohne die Ein- und Ausgabeschnittstellen der Anwendung zu ändern."
      ),
      figures: [modelComparison],
    },
    {
      id: "execution",
      title: L("FPGA and NPU, working together", "让 FPGA 与 NPU 协同工作", "FPGA und NPU im Zusammenspiel"),
      text: L(
        "The FPGA and NPU share the visual workload. A reusable FPGA engine handles selected stages, while the NPU completes the remaining visual and language processing. The two devices work on different frames at the same time, and shorter FPGA calls help the next frame get started sooner.",
        "FPGA 与 NPU 共同分担视觉处理。可复用的 FPGA 引擎负责选定阶段，NPU 完成其余视觉计算和语言推理。两类设备同时处理不同帧；缩短 FPGA 的单次任务占用，也让下一帧能更早开始执行。",
        "FPGA und NPU teilen sich die visuelle Verarbeitung. Eine wiederverwendbare FPGA-Einheit übernimmt ausgewählte Schritte; die NPU erledigt die übrige Bildverarbeitung und die Sprachinferenz. Beide Geräte bearbeiten gleichzeitig unterschiedliche Bilder. Kürzere FPGA-Aufrufe sorgen außerdem dafür, dass das nächste Bild früher zum Zug kommt."
      ),
      figures: [executionFlow, executionTimeline],
    },
    {
      id: "results",
      title: L("Compared with the original", "与原始方案相比", "Im Vergleich zum Ausgangsmodell"),
      text: L(
        "The final system delivers about 2.6 times the original NPU-only throughput, with roughly 14% lower median latency. Compression makes a substantial contribution. Compared with the compressed NPU-only model, FPGA–NPU execution adds around 32% more throughput and 170 ms more median latency. It offers the highest update rate; compressed NPU-only inference provides the shortest delay.",
        "最终系统的吞吐率约为原始模型仅用 NPU 方案的 2.6 倍，中位延迟降低约 14%，其中模型压缩贡献了很大一部分提升。与压缩模型仅用 NPU 相比，FPGA–NPU 协同执行又提高约 32% 的吞吐率，中位延迟则增加约 170 ms。异构方案的更新速率最高，压缩模型仅用 NPU 的方案则延迟最低。",
        "Das fertige System erreicht etwa den 2,6-fachen Durchsatz des ursprünglichen NPU-Modells bei rund 14 % niedrigerer medianer Latenz. Die Kompression trägt wesentlich dazu bei. Gegenüber dem komprimierten NPU-Modell liefert die gemeinsame FPGA-NPU-Ausführung etwa 32 % mehr Durchsatz bei rund 170 ms höherer medianer Latenz. Sie bietet die höchste Aktualisierungsrate; die komprimierte NPU-Variante reagiert mit der geringsten Verzögerung."
      ),
      figures: [],
      table: {
        headers: [
          L("Deployment", "部署方案", "Ausführung"),
          L("Commands/s", "指令/秒", "Befehle/s"),
          L("Median latency (ms)", "中位延迟（ms）", "Mediane Latenz (ms)"),
        ],
        rows: [
          { label: L("Original model · NPU", "原始模型 · NPU", "Originalmodell · NPU"), values: ["2.11", "499"] },
          { label: L("Compressed model · NPU", "压缩模型 · NPU", "Komprimiertes Modell · NPU"), values: ["4.19–4.20", "259–262"] },
          { label: L("Compressed model · FPGA + NPU", "压缩模型 · FPGA + NPU", "Komprimiertes Modell · FPGA + NPU"), values: ["5.54–5.55", "430–432"], featured: true },
        ],
      },
      note: L(
        "Matched camera settings; latency runs from camera dequeue to software command reception, before actuator response.",
        "相机设置一致；延迟从相机帧出队计至软件端接收指令，不含执行器响应。",
        "Gleiche Kameraeinstellungen; die Latenz reicht von der Bildentnahme bis zum softwareseitigen Befehlsempfang, vor der Aktuatorreaktion."
      ),
    },
    {
      id: "demonstration",
      title: L("From instructions to motion", "让指令变成动作", "Von der Anweisung zur Bewegung"),
      text: L(
        "On the real gimbal, the system visually recentered a cup after thirty successive repositionings. With both a cup and a palm in view, changing the instruction redirected the camera to the palm. It is a practical demonstration of language-guided interaction, bringing the model and hardware work together in a functioning robot.",
        "在实体云台上，杯子连续三十次改变位置后，系统均经目视判断完成回中。当杯子和手掌同时出现时，改变指令会让相机转向手掌。这个演示把模型与硬件上的工作汇集到可运行的机器人中，也让语言指令驱动的交互变得直观可见。",
        "Am realen Schwenk-Neige-System wurde die Tasse nach dreißig aufeinanderfolgenden Positionsänderungen nach visueller Beurteilung jeweils neu zentriert. Waren Tasse und Handfläche gleichzeitig sichtbar, richtete eine geänderte Anweisung die Kamera auf die Handfläche. Diese praktische Demonstration sprachgesteuerter Interaktion bringt die Arbeit an Modell und Hardware in einem funktionierenden Roboter zusammen."
      ),
      figures: [physicalDemo],
    },
  ],
};
