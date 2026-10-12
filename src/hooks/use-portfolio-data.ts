export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  company: string;
  client?: string;
  role: string;
  duration: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  coursework: string;
}

export interface Project {
  title: string;
  year: string;
  description: string;
  link: string;
  liveLink?: string;
  tags?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export function usePortfolioData() {
  const personalInfo = {
    name: "Dhanush Mathivanan",
    title: "Data Science & Cloud Engineer",
    location: "Arlington, VA",
    phone: "240-385-2816",
    email: "dhanush.mathivanan@gwu.edu",
    github: "https://github.com/DhanushGWU1995",
    linkedin: "https://www.linkedin.com/in/dhanush-mathivanan-a65202120/",
    handshake: "https://gwu.joinhandshake.com/profiles/5kmn84",
    blog: "https://techwithdhanush.blogspot.com/",
    summary: "Data Science graduate student and Technical AWS Support Assistant at The George Washington University, specializing in data and cloud engineering, machine learning, deep learning, NLP, generative AI, and large-scale data systems. AWS certified cloud engineer with 9.7+ years building distributed microservices, event-driven architectures, and serverless data platforms on AWS for global enterprises, plus full-stack applications in TypeScript, Node.js, and Angular. Recent work includes grounded LLM assistants that answer only from retrieved source text, using hybrid search, Qwen2.5, and an entailment check that withholds unsupported procedures."
  };

  const skills: SkillCategory[] = [
    {
      name: "Programming",
      skills: ["Python", "SQL", "TypeScript", "JavaScript", "Linux", "R Studio", "ActionScript"]
    },
    {
      name: "LLMs & Generative AI",
      skills: ["RAG", "Qwen2.5", "BGE Embeddings", "BM25", "DeBERTa", "Hugging Face", "DistilBERT", "T5"]
    },
    {
      name: "Machine Learning",
      skills: ["TensorFlow", "Scikit-Learn", "Pandas", "Polars", "Matplotlib", "Seaborn"]
    },
    {
      name: "Web Frameworks",
      skills: ["Node.js", "Express.js", "Angular", "FastAPI", "Streamlit", "Kafka", "Terraform", "Electron", "Redis", "Ngrx Redux"]
    },
    {
      name: "Databases",
      skills: ["DynamoDB", "MySQL", "MongoDB", "SQLite", "DuckDB"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS Lambda", "AWS CDK", "S3", "API Gateway", "CloudFormation", "Cognito", "SQS/SNS", "Jenkins", "Docker"]
    },
    {
      name: "Web Technologies",
      skills: ["HTML5", "CSS3", "JSON", "XML", "Bootstrap", "jQuery"]
    },
    {
      name: "Testing & Monitoring",
      skills: ["AWS CloudWatch", "Dynatrace", "Mocha/Chai", "Jasmine/Karma", "Chrome DevTools"]
    },
    {
      name: "Tools & Version Control",
      skills: ["Git", "SVN", "Tableau Desktop", "VS Code", "PyCharm", "PySpark"]
    }
  ];

  const experience: Experience[] = [
    {
      company: "The George Washington University",
      role: "Technical Support Assistant",
      duration: "Aug 2026 - Present",
      highlights: [
        "Support campus voice, collaboration, and physical security systems, integrating unified communications, networking, and AWS services",
        "Triage Splunk alerts for phishing, suspicious logins, anomalous geolocation, and compromised accounts",
        "Support the migration of 1,000+ users from Cisco CUCM to Zoom Phone and E911 validation for 400+ voice devices"
      ]
    },
    {
      company: "Probability Solutions LLC",
      role: "Data Science Intern",
      duration: "Jun 2026 - Aug 2026",
      highlights: [
        "Studied binary search tree algorithms and how they apply to modern database engines",
        "Built prototypes and measured tree-based algorithms on large inputs",
        "Compared search, insert, delete, and update cost across search-tree implementations"
      ]
    },
    {
      company: "Bosch Global Software Technologies",
      client: "MHP Porsche (Audi AG), Germany",
      role: "Technical Project Specialist / Lead Engineer",
      duration: "Mar 2024 - Aug 2025",
      highlights: [
        "Built Porsche MBP workforce planning platform using AWS serverless microservices (CDKTF, Lambda, API Gateway, DynamoDB, Cognito)",
        "Developed automated event-driven data ingestion pipelines with JSON schema validation (JOI), S3-triggered Lambda processing",
        "Integrated legacy enterprise systems with modern cloud infrastructure through asynchronous event orchestration (SNS, SQS, Lambda)"
      ]
    },
    {
      company: "Accenture Technologies",
      client: "Educational Testing Service (ETS), USA",
      role: "Custom Software Engineering Team Lead",
      duration: "Sep 2021 - Mar 2024",
      highlights: [
        "Reduced candidate exam result processing time by 50% using AWS serverless data pipelines (Lambda, DynamoDB, SNS/SQS, CloudFormation)",
        "Designed secure event ingestion architecture with AJV schema validation and SQS-triggered Lambda workflows",
        "Improved data platform efficiency with automated DynamoDB maintenance scripts and reusable TypeScript service components"
      ]
    },
    {
      company: "HCL Technologies",
      client: "Roche Holding AG, Switzerland",
      role: "Lead Engineer - Full Stack Cloud Development",
      duration: "Nov 2020 - Sep 2021",
      highlights: [
        "Accelerated healthcare diagnostic reporting workflows by 40% using RESTful APIs (Node.js, Express.js, Angular, MySQL)",
        "Automated enterprise reporting pipelines with dynamic PDF and Excel generation (ExcelJS, PDF-node)",
        "Implemented OAuth/JWT authenticated REST APIs and AWS S3-based storage pipelines"
      ]
    },
    {
      company: "Object Frontier Software Pvt Ltd",
      client: "International Flavours Fragrance (IFF), USA",
      role: "Software Engineer - Full Stack Development",
      duration: "Aug 2018 - Nov 2020",
      highlights: [
        "Developed offline-first enterprise desktop application using Electron framework with SQLite/MySQL sync architecture",
        "Implemented Angular ngrx-redux state architecture with reducer-action data flow patterns",
        "Integrated Node.js microservices with MySQL through Sequelize ORM and structured logging using Winston"
      ]
    },
    {
      company: "V2Soft Pvt Ltd",
      client: "Fiat Chrysler Automobiles (FCA), USA",
      role: "Software Engineer - HMI S/W Development",
      duration: "Oct 2016 - Aug 2018",
      highlights: [
        "Developed responsive automotive Human-Machine Interface dashboards (Angular, HTML5, Bootstrap)",
        "Enabled scalable vehicle telemetry data processing with MongoDB batch jobs and Node.js backend APIs",
        "Implemented real-time event communication using Socket.IO between backend services and frontend dashboards"
      ]
    }
  ];

  const education: Education[] = [
    {
      institution: "The George Washington University",
      location: "Washington, DC",
      degree: "Master of Science in Data Science",
      duration: "Aug 2025 - May 2027",
      coursework: "Big Data Analytics, Cloud Computing, Machine Learning, Deep Learning, NLP, Data Warehousing"
    },
    {
      institution: "Anna University",
      location: "Chennai, India",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "Aug 2012 - May 2016",
      coursework: "Data Structures, Algorithms, Operating Systems, Database Management, Computer Networks, Software Engineering"
    }
  ];

  const certifications: Certification[] = [
    { name: "Phi Delta Gamma Fellowship recipient", issuer: "George Washington University", year: "2026"},
    { name: "Global Leaders Fellowship recipient", issuer: "George Washington University", year: "2025" },
    { name: "Introduction to R", issuer: "DataCamp", year: "2025" },
    { name: "AWS Certified Solutions Architect, Associate - SAA-C03", issuer: "AWS", year: "2024" },
    { name: "AWS Certified Developer, Associate - DVA-C02", issuer: "AWS", year: "2023" },
    { name: "Green Software for Practitioners - LFC131", issuer: "Linux Foundation", year: "2023" },
    { name: "Client Value Creation Award, Best People Award", issuer: "Accenture", year: "2022" },
    { name: "Blockchain Essentials", issuer: "Pluralsight", year: "2021", credentialId: "REP ID 4127" },
  ];

  const projects: Project[] = [
    {
      title: "Torque Diagnostics — Grounded Manual Assistant",
      year: "2026",
      description: "Technician assistant for ABB drive manuals. Hybrid search (BM25 plus BAAI/bge-base-en-v1.5) retrieves the top pages, Qwen2.5-7B-Instruct drafts an answer, and a DeBERTa entailment model keeps a claim only when a manual line supports it. Unsupported procedures are withheld instead of invented. The repository is private while the manual library stays off the public internet.",
      link: "https://github.com/DhanushGWU1995/torque-diagnostics",
      tags: ["LLMs", "RAG", "Qwen2.5", "DeBERTa", "BM25", "BGE Embeddings", "DuckDB", "Polars", "AWS S3"]
    },
    {
      title: "Enterprise Customer Risk Intelligence System (ECRIS)",
      year: "2026",
      description: "A real-time NLP application that automatically analyzes and prioritizes customer complaints using DistilBERT for complaint classification and T5 for automated response generation. Processes CFPB consumer finance complaints with sentiment analysis, urgency detection, and escalation risk scoring. Achieves ~85–90% accuracy with a weighted F1 of ~0.87, deployed as an interactive Streamlit dashboard on Hugging Face Spaces.",
      link: "https://github.com/DhanushGWU1995/6202-machine-learning-project",
      liveLink: "https://huggingface.co/spaces/DhanushGWU1995/ECRIS",
      tags: ["NLP", "DistilBERT", "T5", "Hugging Face", "Streamlit", "Python", "CFPB Dataset"]
    },
    {
      title: "US Unemployment vs Job Postings Analysis",
      year: "2026",
      description: "Interactive Tableau dashboard exploring the relationship between US unemployment rates and job postings across five key economic sectors — Information Technology, Finance & Insurance, Professional & Business Services, Manufacturing, and Non-Farming. Integrates Kaggle's state-level unemployment data with FRED/BLS job posting series to reveal sector-specific hiring trends and economic patterns.",
      link: "https://github.com/DhanushGWU1995/6401-data-visualization-project",
      tags: ["Tableau", "Data Visualization", "FRED / BLS", "Kaggle", "Labor Economics", "Dashboard Design"]
    },
    {
      title: "Role Matrix — AI-Powered Resume Screening System",
      year: "2026",
      description: "An AI-powered hiring intelligence platform that moves beyond keyword matching to evaluate real skills, projects, and experience. Processes multiple PDF/DOCX resumes simultaneously, extracts 300+ technical and soft skills, scores candidates against job descriptions with a confidence formula, and auto-categorizes them as Interview, Maybe, or Not Now. Surfaces alternate role suggestions for low-match candidates and exports structured JSON profiles via a color-coded Streamlit dashboard.",
      link: "https://github.com/DhanushGWU1995/role-matrix",
      tags: ["Python", "Streamlit", "NLP", "Skill Extraction", "Resume Parsing", "AI Hiring", "PDF/DOCX Processing"]
    },
    {
      title: "Health Status Predictor — CDC BRFSS Data Mining",
      year: "2024",
      description: "Full-stack web app predicting general health outcomes from 17 socioeconomic and lifestyle factors using a CatBoost classifier trained on 400,000+ CDC BRFSS 2024 survey responses. Top predictors include mental health days (13.7%), BMI (10.1%), income (9.4%), and employment status (7.9%). Achieves ~78% accuracy and AUC-ROC of 0.85. Built with an Angular 16 frontend and a Flask REST API backend, featuring a multi-step assessment form with real-time health risk feedback.",
      link: "https://github.com/DhanushGWU1995/6103-data-mining-project",
      tags: ["Python", "CatBoost", "Flask", "Angular 16", "CDC BRFSS", "Data Mining", "Health Analytics", "REST API"]
    },
    {
      title: "Heart Disease Predictor — CDC BRFSS",
      year: "2024",
      description: "Coronary heart disease predictor trained on U.S. CDC BRFSS survey responses. The pipeline covers cleanup of the annual LLCP extract in R and Python and a deployed scoring app for the trained model.",
      link: "https://github.com/DhanushGWU1995/6101-mid-term-project",
      liveLink: "https://dhanushgwu1995.github.io/6101-mid-term-project/predict",
      tags: ["Python", "R", "CDC BRFSS", "Classification", "Predictive Modeling"]
    },
    {
      title: "AI Course Creator — Multi-Agent GCP System",
      year: "2026",
      description: "A multi-agent AI application deployed on Google Cloud Run that turns any topic into a fully structured course in seconds. An orchestrated squad of specialized AI agents works in sequence — a Researcher gathers and synthesizes information, a Fact-Checker validates accuracy, and a Writer produces polished, comprehensive course content. Built and deployed on Google Cloud Platform using Cloud Run for serverless scalability.",
      link: "https://course-creator-626594108279.us-central1.run.app/",
      liveLink: "https://course-creator-626594108279.us-central1.run.app/",
      tags: ["Google Cloud", "Cloud Run", "Multi-Agent AI", "Generative AI", "GCP", "Serverless", "Python"]
    },
    {
      title: "PartSelect AI Chat Assistant",
      year: "2025",
      description: "An intelligent e-commerce chatbot for an appliance parts platform, helping customers find compatible refrigerator and dishwasher parts, get installation instructions, and troubleshoot issues in real time. Features intent classification, context-aware responses, and entity extraction (part numbers, model numbers). Supports swappable AI backends — DeepSeek, OpenAI GPT, or a built-in Mock AI mode requiring no API key. Built with Angular 17 (standalone components), Node.js/Express API, and an SQLite database storing parts, compatibility mappings, installation guides, and chat history.",
      link: "https://github.com/DhanushGWU1995/sample-chat-bot",
      tags: ["TypeScript", "Angular 17", "Node.js", "Express", "SQLite", "DeepSeek", "OpenAI", "Chatbot", "NLP"]
    }
  ];

  return { personalInfo, skills, experience, education, certifications, projects };
}
