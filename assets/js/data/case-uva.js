// Source and figure provenance: docs/case-studies/lidar.md and takeover.md.

export const lidarCase = {
  "id": "lidar",
  "path": "lidar.html",
  "title": {
    "en": "LiDAR-Based Following on TurtleBot4",
    "zh": "基于 LiDAR 的 TurtleBot4 跟随控制",
    "de": "LiDAR-gestützte Zielverfolgung mit TurtleBot4"
  },
  "eyebrow": {
    "en": "Robotics · Course Project",
    "zh": "机器人 · 课程项目",
    "de": "Robotik · Kursprojekt"
  },
  "year": "2025",
  "affiliation": "University of Virginia",
  "tags": [
    "Robotics",
    "ROS 2",
    "TurtleBot4",
    "LiDAR",
    "Finite-State Control"
  ],
  "intro": {
    "en": "This TurtleBot4 project explores a simple idea: a robot that notices someone approaching, follows along, and returns to its starting point. LiDAR, a camera, and wheel odometry work together in a ROS 2 controller, bringing sensing and everyday gestures into one physical prototype.",
    "zh": "这个 TurtleBot4 项目从一个简单想法出发：让机器人注意到有人靠近，跟着对方走，再回到出发的位置。LiDAR、相机与轮式里程计通过 ROS 2 控制器协同工作，把环境感知和日常手势连接到同一个实物原型中。",
    "de": "Die Idee hinter diesem TurtleBot4-Projekt ist einfach: Der Roboter bemerkt, wenn jemand näher kommt, folgt der Person und kehrt zum Ausgangspunkt zurück. LiDAR, Kamera und Radodometrie arbeiten in einer ROS-2-Steuerung zusammen und verbinden Umgebungswahrnehmung und alltägliche Gesten in einem realen Prototyp."
  },
  "hero": {
    "src": "pic/projects/lidar/robot.webp",
    "width": 1639,
    "height": 721,
    "alt": {
      "en": "TurtleBot4 prototype beside a person, with its sensors and mobile base visible",
      "zh": "TurtleBot4 实验机器人与旁边的人，图中可见传感器和移动底盘",
      "de": "TurtleBot4-Prototyp neben einer Person mit sichtbaren Sensoren und mobiler Basis"
    },
    "caption": {
      "en": "The physical TurtleBot4 platform used for indoor following and interaction demonstrations.",
      "zh": "用于室内跟随与交互演示的 TurtleBot4 实物平台。",
      "de": "Die reale TurtleBot4-Plattform für die Vorführungen zum Folgen und zur Interaktion in Innenräumen."
    }
  },
  "highlights": [
    {
      "value": "ROS 2",
      "label": {
        "en": "Sensing to motion",
        "zh": "从感知到运动",
        "de": "Von Sensoren zu Bewegung"
      },
      "detail": {
        "en": "Sensors, state control, and safety checks in one node.",
        "zh": "在一个节点中整合传感器、状态控制与安全检查。",
        "de": "Sensoren, Zustandssteuerung und Sicherheitsprüfungen in einem Knoten."
      }
    },
    {
      "value": "6",
      "label": {
        "en": "Behavior states",
        "zh": "行为状态",
        "de": "Verhaltenszustände"
      },
      "detail": {
        "en": "From idle and approach to following, retreat, and homing.",
        "zh": "涵盖等待、接近、跟随、退避与返航。",
        "de": "Vom Warten und Annähern bis zum Folgen, Ausweichen und Zurückkehren."
      }
    },
    {
      "value": "3",
      "label": {
        "en": "Sensing sources",
        "zh": "感知来源",
        "de": "Sensorquellen"
      },
      "detail": {
        "en": "LiDAR, RGB camera, and wheel odometry.",
        "zh": "LiDAR、RGB 相机与轮式里程计。",
        "de": "LiDAR, RGB-Kamera und Radodometrie."
      }
    }
  ],
  "sections": [
    {
      "id": "perception-control",
      "title": {
        "en": "How the robot decides what to do",
        "zh": "机器人如何决定下一步",
        "de": "Wie der Roboter seine nächste Aktion auswählt"
      },
      "text": {
        "en": "LiDAR scans help detect an approaching target and estimate its direction and distance. A state controller then decides when to wait, approach, follow, move away, or return home. Before each movement reaches the base, a separate safety layer checks nearby obstacles and adjusts the command. Camera gestures and odometry contribute different pieces of the same loop.",
        "zh": "LiDAR 扫描用于检测靠近的目标，并估计其方向和距离。状态控制器再决定何时等待、接近、跟随、退避或返航。运动指令发送到底盘之前，独立的安全层会检查周围障碍物并作出调整。相机提供手势指令，里程计提供位姿信息，各自参与同一个控制闭环。",
        "de": "LiDAR-Scans erkennen ein näher kommendes Ziel und schätzen dessen Richtung und Abstand. Eine Zustandssteuerung entscheidet, wann der Roboter wartet, sich nähert, folgt, Abstand schafft oder zurückkehrt. Bevor ein Bewegungsbefehl die Basis erreicht, prüft eine separate Sicherheitsschicht nahe Hindernisse und passt den Befehl an. Kameragesten und Odometrie liefern weitere Informationen für denselben Regelkreis."
      },
      "figures": [
        {
          "src": "pic/projects/lidar/system-flow.svg",
          "width": 2200,
          "height": 1080,
          "alt": {
            "en": "Project overview: LiDAR, RGB camera and odometry feed state control, safety checks and the robot base, with sensor feedback",
            "zh": "项目总览：LiDAR、RGB 相机与里程计连接状态控制、安全检查和机器人底盘，传感器反馈形成闭环",
            "de": "Projektübersicht: LiDAR, RGB-Kamera und Odometrie speisen Zustandssteuerung, Sicherheitsprüfungen und Roboterbasis mit Sensorrückkopplung"
          },
          "caption": {
            "en": "Project overview, redrawn from the final report and code.",
            "zh": "项目总览，依据最终报告与代码重新绘制。",
            "de": "Projektübersicht, auf Grundlage des Abschlussberichts und Codes neu gezeichnet."
          }
        }
      ]
    },
    {
      "id": "physical-following",
      "title": {
        "en": "Following in the hallway",
        "zh": "走廊里的跟随演示",
        "de": "Zielverfolgung im Flur"
      },
      "text": {
        "en": "The hallway demo shows the robot following a walking target. It turns toward the target before moving forward, keeps a short following distance, and stops when the person pauses nearby. The video captures this LiDAR-driven behavior. The camera reads hand gestures as a separate command input, while wheel odometry supports the return trip.",
        "zh": "走廊演示展示了机器人跟随行走目标的过程。它先转向目标，再向前移动，保持短距离跟随，并在目标于附近停下时停止。视频呈现的是 LiDAR 驱动的行为；相机读取手势，构成独立的指令输入，轮式里程计则支持返程。",
        "de": "Die Flurvorführung zeigt, wie der Roboter einem gehenden Ziel folgt. Er richtet sich vor der Vorwärtsfahrt auf das Ziel aus, hält einen kurzen Abstand und stoppt, wenn die Person in der Nähe stehen bleibt. Das Video zeigt dieses LiDAR-gesteuerte Verhalten. Die Kamera liest Handgesten als eigenen Befehlskanal; Radodometrie unterstützt die Rückfahrt."
      },
      "figures": [
        {
          "src": "pic/projects/lidar/follow.mp4",
          "width": 540,
          "height": 304,
          "alt": {
            "en": "Video of TurtleBot4 automatically following a walking target in a hallway",
            "zh": "TurtleBot4 在走廊中自动跟随行走目标的演示视频",
            "de": "Video, in dem der TurtleBot4 einem gehenden Ziel im Flur automatisch folgt"
          },
          "caption": {
            "en": "Automatic following during the hallway demo, driven by LiDAR approach detection and target tracking.",
            "zh": "由 LiDAR 接近检测与目标跟踪驱动的走廊自动跟随演示。",
            "de": "Automatisches Folgen im Flur, gesteuert durch LiDAR-basierte Annäherungserkennung und Zielverfolgung."
          },
          "poster": "pic/projects/lidar/follow-poster.webp"
        }
      ]
    },
    {
      "id": "interaction-limits",
      "title": {
        "en": "Simple ways to interact",
        "zh": "用简单手势交流",
        "de": "Mit einfachen Gesten interagieren"
      },
      "text": {
        "en": "A wave from farther away asks the robot to come over. A nearby wave asks it to make room and head home, while thumbs-up brings it to a stop. These commands let us explore both hands-free following and explicit interaction on the same platform. This remains a qualitative indoor prototype: fast targets, clutter, and odometry drift can still interrupt the behavior.",
        "zh": "远处挥手可以呼叫机器人；近处挥手让它退开并返回，竖起拇指则让它停止。同一平台因此既能尝试无需操作设备的自动跟随，也能接受明确的手势指令。这仍是一个定性的室内原型：快速移动的目标、杂乱环境和里程计漂移都可能打断行为。",
        "de": "Winken aus größerer Entfernung ruft den Roboter heran. Winken aus der Nähe fordert ihn auf, Platz zu machen und zurückzukehren; ein erhobener Daumen stoppt ihn. So lassen sich automatisches Folgen und ausdrückliche Gestenbefehle auf derselben Plattform erproben. Es bleibt ein qualitativer Indoor-Prototyp: Schnelle Ziele, unübersichtliche Umgebungen und Odometriefehler können das Verhalten unterbrechen."
      },
      "figures": []
    }
  ]
};

export const takeoverCase = {
  "id": "takeover",
  "path": "takeover.html",
  "title": {
    "en": "Multimodal Takeover Requests",
    "zh": "多模态驾驶接管请求",
    "de": "Multimodale Übernahmeaufforderungen"
  },
  "eyebrow": {
    "en": "Human Factors · Course Project",
    "zh": "人因工程 · 课程项目",
    "de": "Human Factors · Kursprojekt"
  },
  "year": "2025",
  "affiliation": "University of Virginia",
  "tags": [
    "Human Factors",
    "MetaDrive",
    "Multimodal Interaction",
    "User Study"
  ],
  "intro": {
    "en": "How should a car ask a distracted driver to take back control? This MetaDrive study explored visual, sound, vibration, and combined warnings with 14 volunteers. Each person tried five alert types while either chatting or using a phone, so we could compare both their response and how the alerts felt.",
    "zh": "驾驶员分心时，汽车该怎样提醒他们重新接管？这项 MetaDrive 研究邀请了 14 名志愿者，体验视觉、声音、振动及其组合提醒。每人在交谈或使用手机的情境下试用五种提醒方式，让我们能同时观察接管反应和提醒带来的感受。",
    "de": "Wie sollte ein Auto eine abgelenkte Person auffordern, wieder die Kontrolle zu übernehmen? Diese MetaDrive-Studie erprobte visuelle Hinweise, Töne, Vibrationen und kombinierte Warnungen mit 14 Freiwilligen. Jede Person testete fünf Warnformen beim Gespräch oder bei der Handynutzung. So konnten wir sowohl die Reaktion als auch das Erleben der Warnung vergleichen."
  },
  "hero": {
    "src": "pic/projects/takeover/scenario.webp",
    "width": 1684,
    "height": 1015,
    "alt": {
      "en": "MetaDrive highway scene with traffic and an on-screen takeover warning",
      "zh": "包含交通车辆与屏幕接管警告的 MetaDrive 高速公路实验场景",
      "de": "MetaDrive-Autobahnszene mit Verkehr und einer eingeblendeten Übernahmeaufforderung"
    },
    "caption": {
      "en": "The customized MetaDrive scenario presents a visual takeover warning when the driver must resume control.",
      "zh": "定制 MetaDrive 场景在驾驶员需要重新接管时显示视觉警告。",
      "de": "Das angepasste MetaDrive-Szenario zeigt eine visuelle Warnung, sobald die fahrende Person die Kontrolle übernehmen soll."
    }
  },
  "highlights": [
    {
      "value": "14",
      "label": {
        "en": "Participants",
        "zh": "参与者",
        "de": "Teilnehmende"
      },
      "detail": {
        "en": "Each experienced all five alert modalities.",
        "zh": "每人均体验五种提醒方式。",
        "de": "Jede Person erprobte alle fünf Warnformen."
      }
    },
    {
      "value": "5 × 2",
      "label": {
        "en": "Alerts and distractions",
        "zh": "提醒与分心情境",
        "de": "Warnformen und Ablenkungen"
      },
      "detail": {
        "en": "Every alert type, one distraction context per person.",
        "zh": "每人体验全部提醒方式，并保持一种分心情境。",
        "de": "Alle Warnformen, ein Ablenkungskontext pro Person."
      }
    },
    {
      "value": "MetaDrive",
      "label": {
        "en": "Driving simulator",
        "zh": "驾驶模拟器",
        "de": "Fahrsimulator"
      },
      "detail": {
        "en": "Fanatec wheel, pedals, and a fixed-base cockpit.",
        "zh": "Fanatec 方向盘、踏板与固定式座舱。",
        "de": "Fanatec-Lenkrad, Pedale und stationäres Cockpit."
      }
    }
  ],
  "sections": [
    {
      "id": "alert-design",
      "title": {
        "en": "One scenario, five kinds of warning",
        "zh": "一个场景，五种提醒",
        "de": "Ein Szenario, fünf Warnformen"
      },
      "text": {
        "en": "A lead car changed lanes to reveal a stationary obstacle on a highway. The simulator then issued a visual, auditory, haptic, audio-visual, or audio-visual-haptic alert. A large screen message, a disengagement chime, and force-feedback steering-wheel vibration provided the three channels. Combined alerts arrived together, keeping the driving situation consistent while we changed how the request reached the driver.",
        "zh": "实验中的前车变道后，会露出高速公路上的静止障碍物。模拟器随后发出视觉、听觉、触觉、视听组合或视听触组合提醒。三个通道分别通过屏幕大字提示、退出自动驾驶提示音和方向盘力反馈振动实现。组合提醒同步到达，在保持驾驶场景一致的同时，改变接管请求传达给驾驶员的方式。",
        "de": "Ein vorausfahrendes Auto wechselte die Spur und gab ein stehendes Hindernis auf der Autobahn frei. Danach erschien eine visuelle, akustische, haptische, audiovisuelle oder dreifach kombinierte Warnung. Eine große Bildschirmmeldung, ein Hinweiston und die Vibration des Force-Feedback-Lenkrads bildeten die drei Kanäle. Kombinierte Signale kamen gleichzeitig an. Das Fahrszenario blieb gleich, während sich die Art der Übernahmeaufforderung änderte."
      },
      "figures": [
        {
          "src": "pic/projects/takeover/timeline.webp",
          "width": 2400,
          "height": 800,
          "alt": {
            "en": "Diagram of autonomous driving, takeover request, driver intervention, and the remaining time budget",
            "zh": "自动驾驶、接管请求、驾驶员干预与剩余时间窗口的流程图",
            "de": "Diagramm zu automatisierter Fahrt, Übernahmeaufforderung, Fahrereingriff und verbleibendem Zeitbudget"
          },
          "caption": {
            "en": "The study separates warning onset, the first driver intervention, and the remaining time before the system limit.",
            "zh": "实验区分警告出现、首次驾驶干预以及到达系统限制前的剩余时间。",
            "de": "Die Studie unterscheidet Warnbeginn, ersten Fahrereingriff und verbleibende Zeit bis zur Systemgrenze."
          }
        }
      ]
    },
    {
      "id": "study-protocol",
      "title": {
        "en": "Measuring the handover",
        "zh": "记录驾驶员如何接管",
        "de": "Die Übernahme messen"
      },
      "text": {
        "en": "Each person tried all five alerts in a randomized order, staying with either the conversation or smartphone task. Python timestamps captured the time from warning onset to the first steering or braking input. The researcher noted collisions, and short questionnaires asked about clarity, noticeability, urgency, attention, and workload. The wheel and pedals made it possible to connect those ratings with an actual control response.",
        "zh": "每人以随机顺序体验全部五种提醒，全程进行交谈或手机任务。Python 时间戳记录提醒出现到首次转向或制动输入的间隔；研究者记录碰撞，简短问卷询问清晰度、可察觉性、紧迫感、注意力与负荷。方向盘和踏板让这些主观评分能够对应到实际的控制反应。",
        "de": "Jede Person erprobte alle fünf Warnformen in zufälliger Reihenfolge und blieb bei der Gesprächs- oder Smartphone-Aufgabe. Python-Zeitstempel erfassten die Zeit vom Warnbeginn bis zur ersten Lenk- oder Bremseingabe. Die Versuchsleitung notierte Kollisionen; kurze Fragebögen erfassten Klarheit, Wahrnehmbarkeit, Dringlichkeit, Aufmerksamkeit und Belastung. Lenkrad und Pedale ermöglichten es, diese Bewertungen mit einer tatsächlichen Steuerungsreaktion zu verbinden."
      },
      "figures": [
        {
          "src": "pic/projects/takeover/cockpit.webp",
          "width": 1800,
          "height": 1494,
          "alt": {
            "en": "Detail of the fixed-base simulator cockpit, steering-wheel controller, and pedal deck",
            "zh": "固定式驾驶模拟座舱、方向盘控制器和踏板的局部照片",
            "de": "Detailansicht des stationären Simulators mit Lenkradsteuerung und Pedalen"
          },
          "caption": {
            "en": "A fixed-base cockpit with a force-feedback steering wheel and pedals supported the controlled simulator trials.",
            "zh": "固定式座舱、力反馈方向盘与踏板用于受控驾驶模拟实验。",
            "de": "Ein stationäres Cockpit mit Force-Feedback-Lenkrad und Pedalen diente den kontrollierten Simulatorversuchen."
          }
        }
      ]
    },
    {
      "id": "findings",
      "title": {
        "en": "What the study taught us",
        "zh": "这项研究带来的认识",
        "de": "Was wir aus der Studie mitnehmen"
      },
      "text": {
        "en": "The small study found no statistically reliable differences between alert types in reaction time or collision avoidance. Participants’ ratings still varied in perceived effectiveness and mental effort. Together, the measurements and questionnaires offered a starting point for exploring how clarity, comfort, and distraction context fit together. A larger study and a more realistic driving setup would help test those observations.",
        "zh": "这项小样本研究没有发现提醒类型之间在反应时间或避碰上的统计显著差异。参与者对感知有效性和心理负荷的评分仍有所不同。行为测量与问卷共同提供了一个起点，帮助我们继续探索清晰度、舒适度与分心情境之间的关系；这些观察还需要更大样本和更真实的驾驶条件来检验。",
        "de": "Die kleine Studie zeigte keine statistisch belastbaren Unterschiede zwischen den Warnformen bei Reaktionszeit oder Kollisionsvermeidung. Die Bewertungen der wahrgenommenen Wirksamkeit und mentalen Anstrengung variierten dennoch. Messungen und Fragebögen lieferten zusammen einen Ausgangspunkt, um das Zusammenspiel von Klarheit, Komfort und Ablenkungskontext weiter zu untersuchen. Eine größere Studie mit einem realitätsnäheren Fahrszenario könnte diese Beobachtungen prüfen."
      },
      "figures": []
    }
  ]
};
