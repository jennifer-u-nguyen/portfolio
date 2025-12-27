export const HERO = {
  name: "Jennifer Nguyen",
  headline: "Mechanical Engineer focused on Robotics & Autonomous Systems",
  subtext: "I design and validate real-world hardware systems — from robotic end-effectors to high-altitude research platforms.",
  primaryCTA: "View Projects",
  secondaryCTA: "Contact",
};

export const PROJECTS = [
  {
    id: "amazon-grocery",
    title: "Amazon Grocery Robotics — Autonomous Picking System",
    description: "Developing next-generation autonomous grasping solutions for diverse grocery items.",
    image: "/project-placeholder.png",
    // year: "2025", // Removed from card as requested
    // role: "Hardware Development Engineer Intern", // Removed from card as requested
    metric: "Reduced picking error rate by 15% through improved gripper kinematics.",
    tags: ["Mechanical Design", "Robotics", "Prototyping"],
    problem: "Existing picking systems struggled with irregular grocery items, leading to high drop rates.",
    approach: "Designed a new compliant gripper mechanism with adaptive force control.",
    validation: "Conducted 5000+ cycle reliability testing and validated grasp success rate across 50 object types.",
    outcome: "Selected for pilot implementation in next-gen fulfillment centers.",
  },
  {
    id: "keutsch-lab",
    title: "Keutsch Lab — HAB Exposure Capsule",
    description: "A stratospheric research capsule designed for extreme thermal and pressure conditions.",
    image: "/project-placeholder.png",
    metric: "Achieved 100% data recovery in 3 stratospheric flights.",
    tags: ["Mechanical Design", "Thermal Analysis", "Research"],
    problem: "Needed a lightweight, pressurized capsule to house delicate sensors in near-space conditions.",
    approach: "Engineered a carbon-fiber composite shell with active thermal regulation.",
    validation: "Thermal vacuum chamber testing at -60°C and 0.01 atm pressure.",
    outcome: "Successful deployment gathering crucial atmospheric data.",
  },
  {
    id: "amazon-robotics-camera",
    title: "Amazon Robotics — Multi-Camera Array",
    description: "High-precision camera calibration tooling for automated workstation assembly.",
    image: "/project-placeholder.png",
    metric: "Improved calibration speed by 40% with tool-less adjustment mechanism.",
    tags: ["Mechanical Design", "DFM", "Optics"],
    problem: "Camera calibration was a manual, time-consuming process causing production bottlenecks.",
    approach: "Designed a precise 6-DOF adjustment mount with kinematic coupling.",
    validation: "Verified positional repeatability to within 50 microns.",
    outcome: "Standardized across all new workstation builds.",
  },
  {
    id: "lockheed-doe",
    title: "Lockheed Martin — Manufacturing DOE",
    description: "Statistical process control analysis to reduce manufacturing cycle time and defects.",
    image: "/project-placeholder.png",
    metric: "Reduced scrap rate by 12% in composite layup process.",
    tags: ["Data Analysis", "Manufacturing", "Process Improvement"],
    problem: "High variability in composite part thickness led to rework.",
    approach: "Designed and executed a Design of Experiments (DOE) to identify critical process parameters.",
    validation: "Statistical analysis of 100+ samples confirming correlation.",
    outcome: "Implemented new process controls reducing defect rate.",
  }
];

export const EXPERIENCE = [
  {
    company: "Amazon Grocery Robotics & Automation",
    role: "Hardware Development Engineer Intern",
    period: "Summer 2025",
    description: "Developing next-gen autonomous manipulation systems for grocery fulfillment."
  },
  {
    company: "Harvard Keutsch Lab",
    role: "Undergraduate Researcher",
    period: "Aug 2024–Present",
    description: "Designing stratospheric instrumentation payloads for atmospheric research."
  },
  {
    company: "Amazon Robotics & Mechatronics",
    role: "Hardware Development Engineer Intern",
    period: "Summer 2024",
    description: "Engineered sensor integration solutions for mobile robotic units."
  },
  {
    company: "Lockheed Martin Aeronautics",
    role: "Product Quality Intern",
    period: "Summer 2023",
    description: "Analyzed manufacturing quality data to drive process improvements in F-35 production."
  }
];

export const SKILLS = [
  {
    category: "Mechanical & CAD",
    items: ["SolidWorks", "NX", "Fusion 360", "GD&T", "DFM/DFA", "FEA"]
  },
  {
    category: "Simulation & Analysis",
    items: ["ANSYS Mechanical", "COMSOL", "MATLAB", "Thermal Analysis"]
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
    items: ["3D Printing", "Laser Cutting", "Machining (Mill/Lathe)", "Composites"]
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
