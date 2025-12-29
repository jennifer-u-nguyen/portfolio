export const HERO = {
  name: "Jennifer Nguyen",
  headline: "Mechanical Engineer focused on Robotics & Autonomous Systems",
  subtext: "I design and validate real-world hardware systems — from robotic end-effectors to high-altitude research platforms.",
  primaryCTA: "View Projects",
  secondaryCTA: "Contact",
};

export const PROJECTS = [
  // images stored in /public
  {
    id: "es51-robot",
    title: "Harvard ES51 - Turf Wars Robot",
    description: "Developing next-generation autonomous grasping solutions for diverse grocery items.",
    images: ["/project-placeholder.png", "/demo-2.svg", "/demo-3.svg"],
    metric: "Reduced picking error rate by 15% through improved gripper kinematics.",
    tags: ["Mechanical Design", "Robotics", "Prototyping"],
    problem: "Existing picking systems struggled with irregular grocery items, leading to high drop rates.",
    approach: "Designed a new compliant gripper mechanism with adaptive force control.",
    validation: "Conducted 5000+ cycle reliability testing and validated grasp success rate across 50 object types.",
    outcome: "Selected for pilot implementation in next-gen fulfillment centers.",
  },
  {
    id: "keutsch-peapod",
    title: "Keutsch Lab — Stratospheric Particle Exposure Analysis Device",
    description: "A stratospheric research capsule designed for extreme thermal and pressure conditions.",
    images: ["/project-placeholder.png"],
    metric: "Achieved 100% data recovery in 3 stratospheric flights.",
    tags: ["Mechanical Design", "Thermal Analysis", "Research"],
    problem: "Needed a lightweight, pressurized capsule to house delicate sensors in near-space conditions.",
    approach: "Engineered a carbon-fiber composite shell with active thermal regulation.",
    validation: "Thermal vacuum chamber testing at -60°C and 0.01 atm pressure.",
    outcome: "Successful deployment gathering crucial atmospheric data.",
  },
  {
    id: "wood-MDEA-gantry",
    title: "Microrobotics Lab — MDEA Gantry",
    description: "High-precision camera calibration tooling for automated workstation assembly.",
    images: ["/project-placeholder.png"],
    metric: "Improved calibration speed by 40% with tool-less adjustment mechanism.",
    tags: ["Mechanical Design", "DFM", "Optics"],
    problem: "Camera calibration was a manual, time-consuming process causing production bottlenecks.",
    approach: "Designed a precise 6-DOF adjustment mount with kinematic coupling.",
    validation: "Verified positional repeatability to within 50 microns.",
    outcome: "Standardized across all new workstation builds.",
  },
  {
    id: "glow-grid",
    title: "Harvard ES50 — Glow Grid",
    description: "Statistical process control analysis to reduce manufacturing cycle time and defects.",
    images: ["/project-placeholder.png"],
    metric: "Reduced scrap rate by 12% in composite layup process.",
    tags: ["Data Analysis", "Manufacturing", "Process Improvement"],
    problem: "High variability in composite part thickness led to rework.",
    approach: "Designed and executed a Design of Experiments (DOE) to identify critical process parameters.",
    validation: "Statistical analysis of 100+ samples confirming correlation.",
    outcome: "Implemented new process controls reducing defect rate.",
  }
];

export const EXPERIENCE = {
  industry: [
    {
      company: "Amazon Grocery Robotics & Automation",
      role: "Hardware Development Engineer Intern",
      period: "May - August 2025",
      description: "Developed an autonomous robotic picking system fully integrated with vision, motion control, and end-of-arm tooling"
    },
    {
      company: "Harvard Reimagining Experiential Education & Fabrication (REEF) Makerspace",
      role: "Maker Fellow",
      period: "August 2024 - Present",
      description: "Trained and advised others in the Harvard SEAS Reimagining Experiential Education & Fabrication (REEF) Makerspace to machine their academic and personal projects. This includes training in laser cutting, dye sublimation, 3D printing, wood shop machinery, casting, soldering, hand tools, etc."
    },
    {
      company: "Amazon Robotics & Mechatronics",
      role: "Hardware Development Engineer Intern",
      period: "May - August 2024",
      description: "Designed multi-camera presentation array, replacing previous scan tunnels to increase item eligibility by over 25%."
    },
    {
      company: "Lockheed Martin Aeronautics",
      role: "Product Quality Intern",
      period: "May - August 2023",
      description: "Revamped radar processing chips manufacturing process for high manufacturing yield and quality."
    },
    {
      company: "Lockheed Martin Aeronautics",
      role: "Facility Engineer Intern",
      period: "August 2021 - August 2022",
      description: "Strategized production reliability by analyzing previous equipment failures and implementing new preventative maintenance strategies."
    }
  ],
  research: [
    {
      company: "Harvard Keutsch Lab",
      role: "Undergraduate Researcher",
      period: "Aug 2024 - Present",
      description: "Created an opening/closing capsule for a high-altitude balloon (HAB) system that automates the process of exposing chemical samples to the stratosphere upon ascension and safely returns to the troposphere."
    },
    {
      company: "Harvard Microrobotics Lab",
      role: "Undergraduate Researcher",
      period: "October 2023 - May 2024",
      description: "Modified a 3D printer to automate multi-layered dielectric actuator elastomer (MDEA) production, a process for producing microelectronics currently performed by hand."
    }
  ]
};

export const SKILLS = [
  {
    category: "Mechanical & CAD",
    items: ["SolidWorks", "Fusion 360", "GD&T", "DFM/DFA"]
  },
  {
    category: "Simulation & Analysis",
    items: ["COMSOL", "MATLAB", "Thermal Analysis"]
  },
  {
    category: "Robotics & Controls",
    items: ["ROS/ROS2", "Arduino", "Mechatronics", "Sensors & Actuators"]
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
