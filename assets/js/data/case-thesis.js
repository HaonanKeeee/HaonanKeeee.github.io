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
    "Original and compressed visual models.",
    "原始与压缩视觉模型。",
    "Ursprüngliches und komprimiertes visuelles Modell."
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
    "Shared execution across CPU, NPU, and FPGA.",
    "CPU、NPU 与 FPGA 协同执行。",
    "Gemeinsame Ausführung auf CPU, NPU und FPGA."
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
    "Different frames, working in parallel.",
    "不同帧的并行处理。",
    "Verschiedene Bilder, parallel verarbeitet."
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
    "Language-guided target selection in action.",
    "语言指令驱动的实体目标选择。",
    "Sprachgesteuerte Zielauswahl in der Praxis."
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
  tags: ["Vision–Language–Action", "FPGA + NPU", "ROS 2"],
  intro: L(
    "A compressed visual model and FPGA–NPU execution turn language instructions into camera movement on a working ROS 2 gimbal.",
    "压缩视觉模型与 FPGA–NPU 协同执行，让语言指令变成 ROS 2 云台上的真实相机动作。",
    "Ein komprimiertes visuelles Modell und gemeinsame FPGA-NPU-Ausführung setzen sprachliche Anweisungen auf einem funktionierenden ROS-2-Schwenk-Neige-System in Kamerabewegungen um."
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
    caption: L("The working gimbal and computing platform.", "可运行的云台与计算平台。", "Das funktionierende Schwenk-Neige-System mit Rechenplattform."),
  },
  highlights: [
    {
      value: "2.6×",
      label: L("Throughput vs original NPU-only", "相对原始 NPU 方案的吞吐率", "Durchsatz gegenüber dem ursprünglichen NPU-Modell"),
    },
    {
      value: "≈14%",
      label: L("Lower median latency vs original NPU-only", "相对原始 NPU 方案的中位延迟降低", "Niedrigere mediane Latenz gegenüber dem ursprünglichen NPU-Modell"),
    },
    {
      value: "ROS 2",
      label: L("Language-guided gimbal", "语言指令驱动云台", "Sprachgesteuertes Schwenk-Neige-System"),
    },
  ],
  sections: [
    {
      id: "execution",
      aliases: ["compression"],
      title: L("Compress and share the workload", "压缩模型，协同计算", "Komprimieren und gemeinsam rechnen"),
      text: L(
        "Model compression reduces visual work. The FPGA and NPU then process different frames together, giving the robot a higher command update rate.",
        "模型压缩先减少视觉计算，再由 FPGA 与 NPU 同时处理不同帧，提高机器人的指令更新速率。",
        "Modellkompression reduziert die Bildberechnung. Anschließend verarbeiten FPGA und NPU unterschiedliche Bilder gleichzeitig, sodass der Roboter häufiger neue Befehle erhält."
      ),
      figures: [modelComparison, executionFlow, executionTimeline],
    },
    {
      id: "results",
      aliases: ["demonstration"],
      title: L("Faster updates, language-guided motion", "更快更新，按指令选目标", "Häufigere Updates, sprachgesteuerte Bewegung"),
      text: L(
        "The combined design reaches 2.6× the original NPU-only throughput, with about 14% lower median latency. The physical gimbal retains language-guided target selection.",
        "组合方案达到原始模型仅用 NPU 时约 2.6 倍的吞吐率，中位延迟降低约 14%，实体云台仍能根据语言指令选择目标。",
        "Der kombinierte Ansatz erreicht den 2,6-fachen Durchsatz des ursprünglichen NPU-Modells bei etwa 14 % niedrigerer medianer Latenz. Das reale Schwenk-Neige-System behält die sprachgesteuerte Zielauswahl bei."
      ),
      figures: [physicalDemo],
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
        "Timing runs from camera dequeue to the software command sink, excluding actuator response; gains combine compression and hardware.",
        "计时从相机帧出队至软件指令接收，不含执行器响应；增益来自模型压缩与硬件协同。",
        "Gemessen wird von der Bildentnahme bis zum Software-Befehlsempfang, ohne Aktuatorreaktion; die Gewinne entstehen gemeinsam durch Kompression und Hardware."
      ),
    },
  ],
};
