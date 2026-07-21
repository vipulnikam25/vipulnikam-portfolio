import {
  Award,
  BrainCircuit,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  Workflow,
} from "lucide-react";

export const profile = {
  name: "Vipul Nikam",
  initials: "VN",
  role: "Backend & Data Engineer",
  location: "Pune, Maharashtra, India",
  email: "vipulnikam0925@gmail.com",
  phone: "+91 8208106900",
  phoneHref: "tel:+918208106900",
  whatsapp: "https://wa.me/918208106900",
  resumeUrl: "/vipul-nikam-resume-2026-july.pdf",
  github: "https://github.com/vipulnikam25",
  linkedin: "https://www.linkedin.com/in/vipul-nikam-b06ab8212/",
  headline:
    "I build production-grade APIs, cloud data pipelines, and automation systems that turn scattered business data into reliable products.",
  summary:
    "Backend and Data Engineer with 2+ years of hands-on experience building REST APIs, ETL pipelines, cloud-native services, microservices, multi-tenant systems, and automation workflows across Python, Node.js, FastAPI, Fastify, TypeScript, Go, SQL, AWS, and Azure.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Proof", href: "#proof" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", href: profile.phoneHref, icon: Phone },
];

export const heroRoles = [
  "Backend Engineer",
  "Data Engineer",
  "Cloud ETL Builder",
  "Microservices Developer",
  "Automation Engineer",
];

export const metrics = [
  { value: "2+", label: "Years building production systems" },
  { value: "50+", label: "REST APIs delivered across modules" },
  { value: "100+", label: "SQL procedures migrated into Go APIs" },
  { value: "6", label: "Business modules shipped for AUTOLINK" },
];

export const focusAreas = [
  {
    icon: ServerCog,
    title: "Backend Systems",
    description:
      "FastAPI, Node.js, Fastify, TypeScript, Go, authentication, REST architecture, and modular services.",
  },
  {
    icon: Workflow,
    title: "Data Engineering",
    description:
      "ETL pipelines, data cleaning, orchestration, Databricks, Synapse, Redshift, Glue, Athena, and analytics workflows.",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description:
      "Hands-on delivery across Azure and AWS for data storage, job automation, IAM, lakehouse, and serverless flows.",
  },
  {
    icon: BrainCircuit,
    title: "AI + Automation",
    description:
      "RAG chatbots, LLM integrations, predictive modeling, UiPath bots, web scraping, and business process automation.",
  },
];

export const skillGroups = [
  {
    title: "Backend",
    icon: Code2,
    skills: ["Python", "Node.js", "FastAPI", "Fastify", "Express.js", "TypeScript", "Go", "REST APIs"],
  },
  {
    title: "Data Engineering",
    icon: Workflow,
    skills: ["ETL", "Azure Data Factory", "Databricks", "Synapse", "AWS Glue", "Athena", "Redshift", "Data Lake"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB", "MySQL", "PostgreSQL", "SQL Server", "Stored Procedures", "Database Migration"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["RAG", "LLMs", "LangChain", "Llama 3.2", "Scikit-Learn", "PyTorch", "TensorFlow", "Predictive Modeling"],
  },
  {
    title: "Automation",
    icon: Workflow,
    skills: ["UiPath Studio", "UiPath Orchestrator", "KYC Bots", "Web Scraping", "Data Extraction", "Power BI"],
  },
  {
    title: "Foundations",
    icon: ServerCog,
    skills: ["OOP", "DSA", "DBMS", "Machine Learning", "Deep Learning", "Git", "VS Code", "Jupyter"],
  },
];

export const experiences = [
  {
    role: "Associate Data Engineer",
    company: "Plainsurf Solutions PVT",
    location: "Pune, Maharashtra, India",
    period: "April 2025 - Present",
    type: "Full-time",
    highlights: [
      "Enhanced the RAK-Mustawi platform by implementing multi-tenant architecture and optimizing Node.js backend services with React.js frontend improvements.",
      "Introduced WhatsApp notifications into the ECOEFX backend, automating customer communication workflows using Go.",
      "Modernized PARCOMOTOR by migrating Express.js to Fastify, building REST APIs, and managing database migrations.",
      "Migrated 100+ SQL Server stored procedures into Go APIs while supporting HOSTNSELL backend modernization, architecture documentation, and .NET services.",
      "Developed 50+ REST APIs across six business modules for AUTOLINK, including authentication, customer management, invoicing, and payment processing.",
    ],
    stack: ["Node.js", "React.js", "Fastify", "TypeScript", "Go", "SQL Server", ".NET"],
  },
  {
    role: "Data Engineer Intern",
    company: "Plainsurf Solutions PVT",
    location: "Pune, Maharashtra, India",
    period: "September 2024 - March 2025",
    type: "Internship",
    highlights: [
      "Used Azure Data Factory, Databricks, and Synapse Analytics for ETL, data cleaning, and pipeline orchestration.",
      "Engineered ETL workflows and automated data processing using AWS S3, Glue, Athena, IAM, and Redshift.",
      "Constructed a FastAPI microservice for CRUD operations across MySQL, PostgreSQL, and MongoDB.",
      "Built a RAG-powered chatbot with LangChain and Llama 3.2 for flight and restaurant booking automation.",
      "Streamlined banking workflows with UiPath bots, web scraping, KYC automation, and data extraction tools.",
    ],
    stack: ["Azure", "AWS", "FastAPI", "LangChain", "Llama", "UiPath", "Python"],
  },
];

export const projects = [
  {
    title: "Multi-Database CRUD Microservice",
    eyebrow: "Production Backend",
    period: "September 2024 - October 2024",
    description:
      "FastAPI microservice supporting MySQL, PostgreSQL, and MongoDB operations with JWT authentication, RBAC, modular configuration, and integration tests.",
    impact: "Built as a scalable backend foundation for secure multi-database business workflows.",
    stack: ["FastAPI", "Python", "JWT", "RBAC", "MySQL", "PostgreSQL", "MongoDB"],
    github: "https://github.com/vipulnikam25/Database-Connection-Microservice",
    accent: "cyan",
    featured: true,
  },
  {
    title: "CSV Analysis Using Django",
    eyebrow: "Data Product",
    period: "December 2024 - January 2025",
    description:
      "Django app for uploading CSV files, cleaning datasets, generating statistics, and rendering six interactive chart types with AJAX interactions.",
    impact: "Turned raw CSV data into quick, browser-based analysis and visualization flows.",
    stack: ["Django", "Python", "Pandas", "AJAX", "Data Visualization", "Statistics"],
    github: "https://github.com/vipulnikam25/Django-CSV-Analysis-Project",
    accent: "teal",
    featured: true,
  },
  {
    title: "Persona Prediction Via Resume Analysis",
    eyebrow: "Machine Learning",
    period: "November 2022 - February 2023",
    description:
      "Recruiting system that analyzes resumes and online assessment data to predict candidate suitability using Logistic Regression and Random Forest models.",
    impact: "Published research-backed project for candidate persona forecasting and automated screening.",
    stack: ["Python", "Machine Learning", "Scikit-Learn", "Logistic Regression", "Random Forest"],
    github: "https://github.com/vipulnikam25/Persona-Prediction-Via-Resume-Analysis-Using-ML",
    accent: "lime",
    featured: true,
  },
  {
    title: "Parkinson's Disease Detection",
    eyebrow: "Predictive ML",
    period: "June 2022 - August 2022",
    description:
      "Python ML model using XGBoost to predict Parkinson's disease presence from scaled features with strong classification performance.",
    impact: "Demonstrated applied ML for healthcare-oriented prediction.",
    stack: ["Python", "XGBoost", "Classification", "Feature Scaling"],
    github: profile.github,
    accent: "blue",
    featured: false,
  },
  {
    title: "Student Feedback System",
    eyebrow: "Full Stack",
    period: "April 2022 - May 2022",
    description:
      "Web application for collecting student feedback and generating faculty reports from structured responses.",
    impact: "Built an early full-stack workflow for academic reporting.",
    stack: ["HTML", "CSS", "JavaScript", "Full Stack"],
    github: profile.github,
    accent: "slate",
    featured: false,
  },
];

export const education = {
  icon: GraduationCap,
  school: "RMD Sinhgad School of Engineering",
  location: "Pune, Maharashtra, India",
  degree: "Bachelor of Engineering in Information Technology",
  period: "August 2019 - July 2023",
  detail: "CGPA: 8.45",
};

export const certifications = [
  {
    title: "UiPath Automation Associate Developer",
    issuer: "UiPath Academy",
    date: "January 2025",
    badge: "RPA",
    featured: true,
  },
  {
    title: "Data Analytics and Visualization",
    issuer: "Accenture",
    date: "March 2024",
    badge: "Analytics",
    featured: true,
  },
  {
    title: "Introduction To Data Science",
    issuer: "Cisco",
    date: "October 2023",
    badge: "Data Science",
    featured: true,
  },
  {
    title: "Data Analytics Essential",
    issuer: "Cisco",
    date: "September 2023",
    badge: "Analytics",
  },
  {
    title: "Introduction To Machine Learning",
    issuer: "Kaggle",
    date: "December 2022",
    badge: "ML",
  },
  {
    title: "SQL Basic",
    issuer: "HackerRank",
    date: "September 2022",
    badge: "SQL",
  },
  {
    title: "Introduction to Programming Using Python",
    issuer: "HackerRank",
    date: "August 2022",
    badge: "Python",
  },
];

export const publication = {
  icon: Award,
  title: "Decoding Job Candidates: Forecasting Personas Using Resume/Curriculum Vitae Analysis",
  publisher: "International Journal of Scientific Development and Research",
  date: "May 2023",
  description:
    "Research on automated candidate screening and persona forecasting using resume analysis, assessment workflows, Logistic Regression, and Random Forest classification.",
  link: "https://ijsdr.org/papers/IJSDR2305267.pdf",
};

export const contactCards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: "Location", value: profile.location, href: "#home", icon: MapPin },
  { label: "GitHub", value: "github.com/vipulnikam25", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/vipul-nikam-b06ab8212", href: profile.linkedin, icon: Linkedin },
];
