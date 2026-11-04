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
    "LiDAR",
    "ROS 2",
    "TurtleBot4"
  ],
  "intro": {
    "en": "This indoor TurtleBot4 prototype notices someone approaching, follows along, and returns to its starting point, bringing hands-free interaction onto a real mobile robot.",
    "zh": "这个室内 TurtleBot4 原型能注意到有人靠近，跟着对方走，再回到起点，让无需操作设备的交互成为真实机器人的一部分。",
    "de": "Dieser TurtleBot4-Prototyp für Innenräume bemerkt, wenn jemand näher kommt, folgt der Person und kehrt zum Ausgangspunkt zurück. So wird freihändige Interaktion auf einem echten mobilen Roboter erlebbar."
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
      "en": "The TurtleBot4 indoor prototype.",
      "zh": "室内 TurtleBot4 实物原型。",
      "de": "Der TurtleBot4-Prototyp für Innenräume."
    }
  },
  "highlights": [
    {
      "value": {
        "en": "Follow",
        "zh": "跟随",
        "de": "Folgen"
      },
      "label": {
        "en": "Hands-free movement",
        "zh": "无需操作设备",
        "de": "Freihändig unterwegs"
      }
    },
    {
      "value": {
        "en": "Return",
        "zh": "返航",
        "de": "Zurück"
      },
      "label": {
        "en": "Back to the start",
        "zh": "回到起点",
        "de": "Zum Ausgangspunkt"
      }
    },
    {
      "value": {
        "en": "Gestures",
        "zh": "手势",
        "de": "Gesten"
      },
      "label": {
        "en": "Wave or thumbs-up",
        "zh": "挥手与竖拇指",
        "de": "Winken oder Daumen hoch"
      }
    }
  ],
  "sections": [
    {
      "id": "perception-control",
      "title": {
        "en": "From seeing to moving",
        "zh": "从观察到行动",
        "de": "Vom Wahrnehmen zum Handeln"
      },
      "text": {
        "en": "Perception connects nearby movement to following and return-to-home behavior, with obstacle checks helping shape the robot's next action.",
        "zh": "机器人把对周围运动的感知连接到跟随和返航，并通过障碍检查调整下一步行动。",
        "de": "Die Wahrnehmung verbindet Bewegungen in der Umgebung mit Folgen und Rückkehr; Hindernisprüfungen helfen, die nächste Aktion anzupassen."
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
            "en": "Project overview, redrawn from report and code.",
            "zh": "依据报告与代码重绘的项目总览。",
            "de": "Projektübersicht, nach Bericht und Code neu gezeichnet."
          }
        }
      ]
    },
    {
      "id": "physical-following",
      "title": {
        "en": "Following in practice",
        "zh": "实际跟随体验",
        "de": "Zielverfolgung in der Praxis"
      },
      "text": {
        "en": "The hallway clip shows automatic following, while wave and thumbs-up commands offer a simple way to call or stop the robot.",
        "zh": "走廊视频展示自动跟随；挥手与竖拇指则提供了呼叫或停止机器人的简单方式。",
        "de": "Der Flurclip zeigt das automatische Folgen; Winken und Daumen hoch bieten einfache Möglichkeiten, den Roboter heranzurufen oder zu stoppen."
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
            "en": "Automatic following in the hallway.",
            "zh": "走廊中的自动跟随演示。",
            "de": "Automatisches Folgen im Flur."
          },
          "poster": "pic/projects/lidar/follow-poster.webp"
        }
      ],
      "aliases": [
        "interaction-limits"
      ]
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
    "User Study",
    "Multimodal Alerts"
  ],
  "intro": {
    "en": "Fourteen participants tried five takeover alerts in two distraction contexts, conversation and smartphone use, to explore how a car can help drivers refocus.",
    "zh": "14 名参与者在交谈和使用手机两种分心情境下体验五种接管提醒，探索汽车如何帮助驾驶员重新集中注意力。",
    "de": "Vierzehn Personen erprobten fünf Übernahmeaufforderungen bei zwei Ablenkungen: Gespräch und Handynutzung. Untersucht wurde, wie ein Auto die Aufmerksamkeit wieder aufs Fahren lenken kann."
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
      "en": "Takeover warning in the simulator.",
      "zh": "模拟器中的接管提醒。",
      "de": "Übernahmeaufforderung im Simulator."
    }
  },
  "highlights": [
    {
      "value": "14",
      "label": {
        "en": "Participants",
        "zh": "参与者",
        "de": "Teilnehmende"
      }
    },
    {
      "value": "5",
      "label": {
        "en": "Alert types",
        "zh": "提醒方式",
        "de": "Warnformen"
      }
    },
    {
      "value": "2",
      "label": {
        "en": "Distraction contexts",
        "zh": "分心情境",
        "de": "Ablenkungskontexte"
      }
    }
  ],
  "sections": [
    {
      "id": "study-protocol",
      "title": {
        "en": "Study at a glance",
        "zh": "实验一览",
        "de": "Die Studie auf einen Blick"
      },
      "text": {
        "en": "Each person experienced every alert type in one distraction context, combining a repeatable driving scenario with reaction-time, collision, and experience measures.",
        "zh": "每人在一种分心情境下体验全部提醒方式，以同一驾驶场景记录反应、碰撞与主观感受。",
        "de": "Jede Person erprobte alle Warnformen bei einer Ablenkungsart; dasselbe Fahrszenario verband Reaktionszeit, Kollisionen und subjektives Erleben."
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
            "en": "From warning to driver response.",
            "zh": "从提醒出现到驾驶员响应。",
            "de": "Von der Warnung zur Fahrerreaktion."
          }
        },
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
            "en": "The study's driving setup.",
            "zh": "实验使用的驾驶装置。",
            "de": "Der Fahrsimulator der Studie."
          }
        }
      ],
      "aliases": [
        "alert-design"
      ]
    },
    {
      "id": "findings",
      "title": {
        "en": "What we learned",
        "zh": "得到的认识",
        "de": "Was wir mitnehmen"
      },
      "text": {
        "en": "Within this small sample, no alert showed a reliable performance advantage, highlighting the need to weigh clarity, comfort, and distraction context together.",
        "zh": "在这个小样本中，没有哪种提醒表现出可靠的性能优势，设计仍需综合权衡清晰度、舒适度与分心情境。",
        "de": "In dieser kleinen Stichprobe zeigte keine Warnform einen belastbaren Leistungsvorteil; Klarheit, Komfort und Ablenkungskontext müssen gemeinsam abgewogen werden."
      },
      "figures": []
    }
  ]
};
