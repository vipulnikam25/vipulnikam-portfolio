import {
  Award,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Facebook,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ServerCog,
  Twitter,
  Workflow,
} from "lucide-react";
import csvAnalyticsImage from "@/assets/projects/csv-analytics.svg";
import healthMlImage from "@/assets/projects/health-ml.svg";
import microserviceImage from "@/assets/projects/microservice.svg";
import personaMlImage from "@/assets/projects/persona-ml.svg";
import studentFeedbackImage from "@/assets/projects/student-feedback.svg";

export const profile = {
  name: "Vipul Nikam",
  initials: "VN",
  role: "Associate Data Engineer",
  location: "Pune, Maharashtra, India",
  email: "vipulnikam0925@gmail.com",
  gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=vipulnikam0925@gmail.com",
  phone: "+91 8208106900",
  phoneHref: "tel:+918208106900",
  whatsapp: "https://wa.me/918208106900",
  resumeUrl: "/vipul-nikam-resume-2026-july.pdf",
  imageUrl: "/profile-pic.png",
  avatarUrl: "/avatar-3d.png",
  github: "https://github.com/vipulnikam25",
  linkedin: "https://www.linkedin.com/in/vipul-nikam-b06ab8212/",
  facebook: "https://www.facebook.com/vipul.nikam.526/",
  instagram: "https://www.instagram.com/_.skipperrr._?igsh=MXd4Mnd1ZjQ5NmdnZA==",
  x: "https://x.com/skipperr25",
  headline:
    "I build data pipelines, AI/ML solutions, Python applications, backend APIs, and automation workflows that solve real business problems across cloud and production systems.",
  summary:
    "Data Engineer with 2+ years of hands-on experience across ETL pipelines, AI/ML solutions, Python development, REST APIs, cloud-native services, microservices, multi-tenant systems, and automation workflows using Python, Node.js, FastAPI, Fastify, TypeScript, Go, SQL, AWS, and Azure.",
  speechSummary:
    "Hi, I am Vipul Nikam, a Data Engineer with strong experience in AI, machine learning, Python development, backend APIs, cloud data platforms, and automation. I enjoy building practical systems that turn data, workflows, and business problems into reliable software solutions.",
};

export const openToRoles = [
  "Data Engineering",
  "AI/ML Engineering",
  "Python Development",
  "Backend Engineering",
  "Backend Developer",
  "Software Development",
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "Facebook", href: profile.facebook, icon: Facebook },
  { label: "Instagram", href: profile.instagram, icon: Instagram },
  { label: "X", href: profile.x, icon: Twitter },
  { label: "Email", href: profile.gmailComposeUrl, icon: Mail },
  { label: "Phone", href: profile.phoneHref, icon: Phone },
];

export const heroRoles = [
  "Data Engineer",
  "Backend Developer",
  "AI/ML Engineer",
  "Python Developer",
  "Software Engineer",
];

export const metrics = [
  { value: "2+", label: "Years across data, AI/ML, Python, and backend work" },
  { value: "100+", label: "REST APIs delivered across business modules" },
  { value: "100+", label: "SQL procedures migrated into Go APIs" },
  { value: "6", label: "Business modules shipped for AUTOLINK" },
];

export const focusAreas = [
  {
    icon: Workflow,
    title: "Data Engineering",
    description:
      "ETL pipelines, data cleaning, orchestration, Databricks, Synapse, Redshift, Glue, Athena, and analytics workflows.",
  },
  {
    icon: BrainCircuit,
    title: "AI / ML",
    description:
      "RAG chatbots, LLM integrations, predictive modeling, Scikit-Learn, PyTorch, TensorFlow, and applied ML projects.",
  },
  {
    icon: Code2,
    title: "Python Development",
    description:
      "Python services, FastAPI microservices, Django apps, data processing, automation scripts, and analytics tooling.",
  },
  {
    icon: ServerCog,
    title: "Backend APIs",
    description:
      "Node.js, Fastify, TypeScript, Go, authentication, REST architecture, modular services, and database-backed APIs.",
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    description:
      "Hands-on delivery across Azure and AWS for data storage, job automation, IAM, lakehouse, and serverless flows.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "UiPath bots, KYC workflows, web scraping, data extraction tools, notifications, and business process automation.",
  },
];

export const skillGroups = [
  {
    title: "Data Engineering",
    icon: Workflow,
    skills: ["ETL", "Azure Data Factory", "Databricks", "Synapse", "AWS Glue", "Athena", "Redshift", "Data Lake"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["RAG", "LLMs", "LangChain", "Llama 3.2", "Scikit-Learn", "PyTorch", "TensorFlow", "Predictive Modeling"],
  },
  {
    title: "Python",
    icon: Code2,
    skills: ["Python", "FastAPI", "Django", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Automation Scripts"],
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["Node.js", "Fastify", "Express.js", "TypeScript", "Go", "REST APIs", "JWT", "RBAC"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB", "MySQL", "PostgreSQL", "SQL Server", "Stored Procedures", "Database Migration"],
  },
  {
    title: "Tools + Foundations",
    icon: Cloud,
    skills: ["AWS", "Azure", "UiPath Studio", "Power BI", "OOP", "DSA", "DBMS", "Git"],
  },
];

export const experiences = [
  {
    role: "Associate Data Engineer",
    company: "Plainsurf Solutions PVT",
    companyUrl: "https://plainsurf.com/",
    companyMark: "PS",
    location: "Pune, Maharashtra, India",
    period: "April 2025 - Present",
    type: "Full-time - Backend, Data, Cloud & Automation Projects",
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
    companyUrl: "https://plainsurf.com/",
    companyMark: "PS",
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
    eyebrow: "API Microservice",
    period: "September 2024 - October 2024",
    description:
      "Designed and implemented a production-ready FastAPI service that connects with MySQL, PostgreSQL, and MongoDB through a modular backend structure. The project focuses on secure CRUD operations, consistent API behavior, reusable database configuration, JWT authentication, and role-based access control.",
    impact: "Created a flexible backend foundation for teams that need one secure service layer across multiple database engines.",
    stack: ["FastAPI", "Python", "JWT", "RBAC", "MySQL", "PostgreSQL", "MongoDB"],
    github: "https://github.com/vipulnikam25/Database-Connection-Microservice",
    image: microserviceImage,
    accent: "cyan",
  },
  {
    title: "CSV Analysis Using Django",
    eyebrow: "Data Analytics",
    period: "December 2024 - January 2025",
    description:
      "Built a Django-based analytics application where users can upload CSV datasets, clean missing values, normalize date and numeric fields, generate descriptive statistics, and choose dynamic visualizations. AJAX interactions keep the analysis flow responsive without forcing full page reloads.",
    impact: "Turned raw spreadsheet-style data into a faster browser-based analysis and reporting workflow.",
    stack: ["Django", "Python", "Pandas", "AJAX", "Data Visualization", "Statistics"],
    github: "https://github.com/vipulnikam25/Django-CSV-Analysis-Project",
    image: csvAnalyticsImage,
    accent: "teal",
  },
  {
    title: "Persona Prediction Via Resume Analysis",
    eyebrow: "Machine Learning",
    period: "November 2022 - February 2023",
    description:
      "Created a recruitment-focused ML system that analyzes resume data and online assessment results to forecast candidate personas and suitability. The solution applies preprocessing, feature extraction, Logistic Regression, and Random Forest classification to support more structured screening decisions.",
    impact: "Extended into a published research project on candidate persona forecasting through resume/CV analysis.",
    stack: ["Python", "Machine Learning", "Scikit-Learn", "Logistic Regression", "Random Forest"],
    github: "https://github.com/vipulnikam25/Persona-Prediction-Via-Resume-Analysis-Using-ML",
    image: personaMlImage,
    accent: "lime",
  },
  {
    title: "Parkinson's Disease Detection",
    eyebrow: "Predictive ML",
    period: "June 2022 - August 2022",
    description:
      "Developed a healthcare-oriented machine learning model using Python and XGBoost to classify Parkinson's disease presence from structured biomedical features. The workflow includes data scaling, train-test validation, model fitting, and performance-focused evaluation.",
    impact: "Demonstrated practical AI/ML ability in a sensitive, real-world prediction domain.",
    stack: ["Python", "XGBoost", "Classification", "Feature Scaling"],
    github: profile.github,
    image: healthMlImage,
    accent: "blue",
  },
  {
    title: "Student Feedback System",
    eyebrow: "Full Stack",
    period: "April 2022 - May 2022",
    description:
      "Built a web application for collecting student feedback, organizing structured responses, and generating faculty-level reports. The project helped translate a manual academic feedback workflow into a cleaner browser-based reporting system.",
    impact: "Strengthened early full-stack fundamentals around forms, reporting, and user-facing workflows.",
    stack: ["HTML", "CSS", "JavaScript", "Full Stack"],
    github: profile.github,
    image: studentFeedbackImage,
    accent: "slate",
  },
];

export const education = [
  {
    icon: GraduationCap,
    level: "Bachelor's Degree",
    school: "RMD Sinhgad School of Engineering",
    location: "Pune, Maharashtra, India",
    board: "Savitribai Phule Pune University",
    stream: "Information Technology",
    period: "August 2019 - July 2023",
    detail: "CGPA: 8.45",
  },
  {
    icon: GraduationCap,
    level: "HSC",
    school: "Fellowship Mission School",
    location: "Vapi, Gujarat, India",
    board: "CBSE",
    stream: "Science",
    period: "Higher Secondary",
    detail: "Percentage: 60%",
  },
  {
    icon: GraduationCap,
    level: "SSC",
    school: "Fellowship Mission School",
    location: "Vapi, Gujarat, India",
    board: "CBSE",
    period: "Secondary School",
    detail: "CGPA: 9.6",
  },
];

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
  { label: "Email", value: profile.email, href: profile.gmailComposeUrl, icon: Mail },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
  { label: "Location", value: profile.location, href: "#home", icon: MapPin },
  { label: "GitHub", value: "github.com/vipulnikam25", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "linkedin.com/in/vipul-nikam-b06ab8212", href: profile.linkedin, icon: Linkedin },
  { label: "X", value: "x.com/skipperr25", href: profile.x, icon: Twitter },
];
