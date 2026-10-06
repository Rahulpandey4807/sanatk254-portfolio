export const nav = ["Home", "About", "Skills", "Experience", "Projects", "Achievements", "Education", "Contact"] as const;

export const summary = "Versatile Design Engineer with over two years of experience across the automotive and metal-section industries. Expert in Cold Roll Forming (CRF) design, GA/manufacturing/fabrication drawings, mill arrangement, stand and layout drawings, and 3D modelling. Proven record of improving operational efficiency through SAP automation, having led an auto-amendment project at Eicher Motors. Skilled at bridging design, technical feasibility, and procurement data management to deliver cost-effective engineering solutions.";

export const skills = [
  { group: "CAD and Design", items: ["AutoCAD 2D", "SolidWorks (Part Modelling, Assembly, Drawing)", "PTC Creo", "Copra", "IDM"] },
  { group: "Engineering and Analysis", items: ["GD&T", "Feasibility Analysis", "Ansys"] },
  { group: "ERP and Procurement", items: ["SAP (MM Module)", "ERP"] },
  { group: "Productivity Tools", items: ["MS Excel", "MS Word", "PowerPoint"] },
];

export const experience = [
  { role: "Jr. Engineer — Design & Development", company: "Dewas Metal Section Limited", dates: "February 2026 – Present", place: "Dewas", points: [
    "Engineered custom Cold Roll Formed (CRF) profiles using AutoCAD/SolidWorks, ensuring 100% adherence to client-specific structural requirements.",
    "Prepared GA (General Arrangement) drawings for roll set and structural assemblies.",
    "Prepared manufacturing drawings for machine components as per design specifications.",
    "Developed detailed 2D/3D technical drawings and BOMs in compliance with ISO and industry-specific quality standards for automotive and railway sectors.",
    ] },
  { role: "Assistant Purchase — Purchase", company: "VE Commercial Vehicles Limited", dates: "February 2025 – January 2026", place: "Pithampur, Indore", points: [
    "Prepared cost sheets to verify supplier costs and balanced prices to optimize sourcing.",
    "Implemented strategic PO cost alignment to improve purchasing accuracy and cost transparency.",
    "Skilled in sheet metal nesting via Form Suite, driving cost savings through precision layout and scrap reduction."] },
  { role: "Design & Drafting", company: "Hindustan Equipment Pvt. Ltd.", dates: "August 2024 – January 2025", place: "Indore", points: [
    "Worked on nesting and Bill of Materials (BOM) creation to optimize material usage and reduce waste.",
    "Prepared scrap sheet reports to analyse material usage and ensure efficient disposal of scrap.",
    "Contributed to improvement of engineering designs through CAD modelling and technical documentation."] },
  { role: "Industrial Training", company: "VE Commercial Vehicles Limited", dates: "July 2023 – August 2023", place: "Pithampur, Indore", points: [
    "Conducted engine station mapping to analyse workflow and improve operational efficiency.",
    "Developed strategies to enhance productivity on the assembly line."] },
];

export const projects = [
  { name: "Auto-Amendment Implementation", year: "2025", tech: ["SAP Automation", "Procurement Process Improvement"],
    desc: "Executed a project for Volvo Eicher Commercial Vehicles, Pithampur, Indore, to automate the amendment process for Purchase Orders (POs) and Scheduling Agreements using a digital SAP solution.",
    details: ["Developed and implemented a digital SAP solution to automate the amendment process for POs and Scheduling Agreements.", "Reduced manual intervention and streamlined the procurement cycle."] },
  { name: "Portable Bio Gas Digester", year: "2024", tech: ["Anaerobic Digestion", "Thermal Insulation"],
    desc: "Developed a small-scale plastic biogas digester for converting cow dung into biogas for cooking and heating purposes.",
    details: ["Anaerobic digestion: microbes break down organic matter without oxygen, producing biogas.", "Thermal insulation is treated as a design consideration.", "Renewable energy application: cooking and heating."] },
  { name: "Multi-Purpose Floor Cleaning Machine", year: "2023", tech: ["Mechanical Design", "Automation Systems"],
    desc: "Designed and built a machine capable of sweeping, mopping, and drying floors simultaneously. Focused on optimizing time and effort for cleaning in large spaces.",
    details: ["Three functions in one pass: sweeping, mopping, drying.", "Aim: save time and effort when cleaning large spaces."] },
  { name: "Portable Air Conditioner", year: "2023", tech: ["Thermodynamics", "Heat Transfer"],
    desc: "Developed a compact, energy-efficient air conditioning system suitable for personal use. Integrated eco-friendly cooling technologies for better energy conservation.",
    details: ["Cooling principle: heat is moved from the cooled space to the surroundings.", "Objectives: compact design and energy conservation."] },
  { name: "Multi-Use Cutting Tool", year: "2022", tech: ["CAD Modelling", "Fabrication Tools", "Welding Machine"],
    desc: "Designed and fabricated a portable zigzag cutting machine for precise cutting operations. The project focused on reducing manual effort in small-scale industries.",
    details: ["Designed in CAD, then fabricated.", "Purpose: reduce manual effort in small-scale operations."] },
  
];

export const drawings = ["GA (General Arrangement) Drawing", "Manufacturing Drawing of Machine", "Mill Arrangement Drawing", "Stand Drawing", "Layout Drawing", "Fabrication Drawing"];

export const achievements = [
  { big: "15%", text: "Optimized sheet metal usage, saving 15% through precision nesting and reduced scrap." },
  { big: "20%", text: "Increased purchasing accuracy by 20% through strategic cost alignment for purchase orders." },
  { big: "15%", text: "Reduced design-to-production lead time by 15% through standardization of fabrication drawing templates." },
  { big: "", text: "Optimized material utilization for packaging dies by refining drafting tolerance, cutting material scrap significantly." },
];

export const education = [
  { title: "Bachelor of Technology in Mechanical Engineering", school: "Govt. Engineering College, Nowgong", years: "2020 – 2024", result: "CGPA: 7.46" },
  { title: "Class XII", school: "Saraswati Hr. Sec. School, Satna", years: "2019 – 2020", result: "85%" },
  { title: "Class X", school: "Saraswati Hr. Sec. School, Satna", years: "2017 – 2018", result: "80.4%" },
];
