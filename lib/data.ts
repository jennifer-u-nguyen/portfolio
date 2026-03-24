export const HERO = {
  name: "Jennifer Nguyen",
  subtext: "I study Mechanical Engineering and Computer Science at Harvard, and I’m interested in designing thoughtful hardware products and systems — from robotics to consumer devices.",
  primaryCTA: "See Projects",
  secondaryCTA: "Contact Me",
  labels: {
    first: "Jennifer",
    second: "Nguyen"
  },
  images: {
    designer: "/headshot-square.png",
    builder: ["/cover-1.jpg", "/cover-2.jpg", "/cover-3.jpg"] // Placeholders for builder icons
  }
};

export const PROJECTS = [
  // images stored in /public
  {
    id: "es51-robot",
    title: "Harvard ES51 —Turf Wars Robot",
    description: "A remote-controlled robot designed for object manipulation and pick-and-place tasks, built to compete in Harvard’s ES51 Turf Wars competition.",
    media: ["/turf-wars-1.mp4", "/turf-wars-5.mp4", "/turf-wars-2.png", "/turf-wars-3.jpeg", "/turf-wars-4.jpeg"],
    tags: ["SOLIDWORKS", "CNC Mill", "Molding", "Lasercutting", "Bandsaw", "Drill Press"],
    problem: "Needed a robot capable of driving up a 15 degree slope and picking up and placing rings, spheres, and cubes to maximize points.",
    approach: "Designed robot body, gripper, arms, wheels, and drivetrain in SOLIDWORKS, prototyped and fabricated with a variety of fabrication techniques from CNC milling to molding custom silicon wheels.",
    validation: "Conducted 20+ successful pick and place cycles with each object type and 20+ successful slope drives on a 15 degree incline.",
    outcome: "Successfully completed all competition tasks and was a finalist in the ES51 Turf Wars competition.",
  },
  {
    id: "keutsch-peapod",
    title: "Keutsch Lab — Stratospheric Particle Exposure Analysis Device",
    description: "A high-altitude balloon payload designed to expose and analyze particle samples under stratospheric UV, pressure, and thermal conditions in support of emerging solar engineering research.",
    media: ["/peapod-1.png", "/peapod-2.png", "/peapod-3.png", "/peapod-4.png", "/peapod-5.JPG"],
    tags: ["SOLIDWORKS", "GD&T", "DFM", "DFA", "Rapid Prototyping", "Electromechanical Integration", "Python", "3D Printing"],
    problem: "Needed a lightweight, pressurized capsule to expose samples to the stratosphere and return to the troposphere safely.",
    approach: "Designed and tested new body in SOLIDWORKS, created GD&T drawings for third-party manufacturing, integrated electrical subsystems with microcontrollers and mechanical actuators.",
    validation: "Performed pressure system bench testing to confirm device's abiility to maintain pressure differential in sample chamber. Tentative thermal testing in lab environment.",
    outcome: "Project is ongoing but expected to achieve its first full flight in Summer 2026.",
  },
  {
    id: "wood-MDEA-gantry",
    title: "Microrobotics Lab — MDEA Gantry",
    description: "A modified gantry system that automates and safely encloses the production of multilayer dielectric elastomer actuators (MDEA) for microelectronics manufacturing.",
    media: ["/mdea-gantry-1.JPG"],
    tags: ["SOLIDWORKS", "Materials Selection", "Gcode", "Waterjet", "Bandsaw", "Drill Press"],
    problem: "Needed an airtight enclosure integrated with prior manual MDEA tools for safe, automated, efficient production of microelectronics.",
    approach: "Modified a 3D printer to design new gantry in SOLIDWORKS, prototyped and fabricated with proper materials, migrated electronics to outside of enclosure, rewrote Gcode to support new automation.",
    validation: "Verified airtightness to lab safety protocols and functionality of newly migrated hardware.",
    outcome: "New prototype put a major step forward in MDEA workflow efficiency and greatly reduced footprint from former manual gantry.",
  },
  {
    id: "glow-grid",
    title: "Harvard ES50 — Glow Grid",
    description: "A reactive, sensor-driven LED dance floor that responds to user interaction and logs engagement metrics, developed for Harvard’s ES51 course.",
    media: ["/glow-grid-1.mp4", "/glow-grid-2.mp4", "/glow-grid-3.mp4", "/glow-grid-4.mp4"],
    tags: ["SOLIDWORKS", "Rapid Prototyping", "Soldering", "Circuit Design", "Lasercutting"],
    problem: "Needed a dance floor that randomly generates new tiles for the user to select, senses user interaction, and tracks metrics such as reaction time, score, and game length.",
    approach: "Designed electric schematics to create custom pressure sensing tiles, wrote micronctroller code to sense user interaction, and fabricated dance board prototype.",
    validation: "Verified functionality of tiles in prototypes by stress testing tiles in 50+ user cycles.",
    outcome: "Danceboard was able to successfully track user interaction and output accurate metrics at the end of each game.",
  }
];

export const EXPERIENCE = {
  industry: [
    {
      company: "Amazon Grocery Robotics & Automation",
      role: "Hardware Development Engineer Intern",
      period: "May - August 2025",
      description: "Developed an autonomous robotic picking system fully integrated with vision, motion control, and end-of-arm tooling",
      bullets: [
        "Designed and developed a custom suction end-effector (EOAT) in SOLIDWORKS, optimizing geometry, materials, and vacuum flow for handling of irregular grocery items",
        "Conducted mechanical validation testing to quantify eligibility (80%), handling accuracy (95%), and throughput improvement (35%), ensuring compliance with performance and reliability targets",
        "Supported iterative design-for-manufacturing (DFM) refinements through rapid prototyping and testing cycles",
        "Partnered with the computer vision team to enhance object recognition and pick-point algorithms, improving system repeatability and mechanical alignment",
        "Coordinated with external vendors to source specialized materials and machine critical components",
      ]
    },
    {
      company: "Harvard Reimagining Experiential Education & Fabrication (REEF) Makerspace",
      role: "Maker Fellow",
      period: "August 2024 - Present",
      description: "Trained and advised others in the Harvard SEAS Reimagining Experiential Education & Fabrication (REEF) Makerspace to machine their academic and personal projects. This includes training in laser cutting, dye sublimation, 3D printing, wood shop machinery, casting, soldering, hand tools, etc.",
    },
    {
      company: "Amazon Robotics & Mechatronics",
      role: "Hardware Development Engineer Intern",
      period: "May - August 2024",
      description: "Designed multi-camera presentation array, replacing previous scan tunnels to increase item eligibility by over 25%.",
      bullets: [
        "Applied DFM/DFA principles to create camera array fixture using SOLIDWORKS adhering to project requirements",
        "Assembled fixture prototype and subsequent design reiterations",
        "Evaluated performance of varying camera arrays by DOE: performing rate tests, creating heat maps of camera blindspots, and measuring item eligibility, eventually recommending a solution to AMAZON fulfillment centers",
        "Collaborated with external vendors to procure materials and machine precision components"]
    },
    {
      company: "Lockheed Martin Aeronautics",
      role: "Product Quality Engineer Intern",
      period: "May - August 2023",
      description: "Revamped radar processing chips manufacturing process for high manufacturing yield and quality.",
      bullets: [
        "Performed a Design of Experiments (DOE) to test different parameters (e.g., pressure, temperature, resin mix)",
        "Used python to analyze wafer-level and package-level test data to identify trends affecting semiconductor yield",
        "Developed automated dashboards which enabled real-time alerts for anomaly detection to flag defective chips early"
      ]
    },
    {
      company: "Lockheed Martin Aeronautics",
      role: "Facility and Plant Engineer Intern",
      period: "August 2021 - August 2022",
      description: "Strategized production reliability by analyzing previous equipment failures and implementing new preventative maintenance strategies.",
      bullets: [
        "Developed mapping system by creating CAD asset map databases in Microstation for over 40 buildings and 300 assets at LMCO Aeronautics Headquarters",
        "Strategized production reliability by analyzing previous equipment failures and implementing new preventative maintenance strategies",
        "Created preventative capital budgets for production line equipment based on analysis of system failures & risks"
      ]
    }
  ],
  research: [
    {
      company: "Harvard Keutsch Lab",
      role: "Undergraduate Researcher",
      period: "Aug 2024 - Present",
      description: "Created an opening/closing capsule for a high-altitude balloon (HAB) system that automates the process of exposing chemical samples to the stratosphere upon ascension and safely returns to the troposphere.",
      bullets: [
        "Qualified materials for UV, temperature, and pressure environments in bench, chamber, and flight tests",
        "Iteratively refined SOLIDWORKS assemblies and manufacturing drawings based on test data and mechanical performance feedback",
        "Applied Design for Assembly (DFA) and Design for Manufacturing (DFM) principles to improve system robustness and simplify fabrication"
      ]
    },
    {
      company: "Harvard Microrobotics Lab",
      role: "Undergraduate Researcher",
      period: "October 2023 - May 2024",
      description: "Modified a 3D printer to automate multi-layered dielectric actuator elastomer (MDEA) production, a process for producing microelectronics currently performed by hand.",
      bullets: [
        "Designed conceptual CAD for modified 3D printer gantry in SOLIDWORKS to account for airtight enclosure, integration of new electronics and pneumatic controls, tray sliding mechanisms, etc.",
        "Prototyped and assembled the modified printer using water jet, laser cutter, vertical and horizontal bandsaws, drill presses, and 3D printers",
        "Modified existing 3D printer Gcode to accommodate new hardware"
      ]
    }
  ]
};

export const SKILLS = [
  {
    category: "Mechanical & CAD",
    items: ["SolidWorks", "Blender", "Fusion 360", "GD&T", "DFM/DFA"]
  },
  {
    category: "Simulation & Analysis",
    items: ["COMSOL", "MATLAB"]
  },
  {
    category: "Robotics & Controls",
    items: ["ROS/ROS2", "Arduino", "Sensors & Actuators"]
  },
  {
    category: "Programming",
    items: ["Python", "C++", "C", "Git"]
  },
  {
    category: "Fabrication",
    items: ["Injection Molding", "3D Printing", "Laser Cutting", "CNC Mill", "Lathe", "Waterjet", "Drill Press", "Bandsaws"]
  }
];

export const COURSEWORK = [
  "ES125: Mechanical Systems",
  "ES181: Engineering Thermodynamics",
  "ES120: Mechanics of Solids",
  "ES183: Heat Transfer",
  "ES51: Computer-Aided Machine Design",
  "ES192: Materials Selection & Design",
  "ES50: Introduction to Electrical Engineering",
  "AP50: Physics as a Foundation for Science and Engineering",
  "ES105: Humanitarian Design Projects",
  "M21A: Multivariable Calculus",
  "M21B: Linear Algebra & Differential Equations",
  "CS79: Design of Useful and Usable Interactive Systems",
];


export const CONTACT = {
  email: "jenniferutnguyen@gmail.com",
  linkedin: "https://www.linkedin.com/in/jennifer-u-nguyen/",
  resume: "#", // Placeholder
};
