export type ProjectCategory = "AI & LLMs" | "Machine Learning" | "Data & Analytics" | "Cloud & Software";

export interface Project {
  title: string;
  subtitle: string;
  year: string;
  categories: ProjectCategory[];
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface Highlight {
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  pipeline: string[];
  points: string[];
  github: string;
  live?: string;
}

export interface Job {
  company: string;
  client?: string;
  location?: string;
  role: string;
  duration: string;
  highlights: string[];
}

export interface SkillGroup {
  name: string;
  skills: string[];
}

const BASE = import.meta.env.BASE_URL;

export const profile = {
  name: "Dhanush Mathivanan",
  roles: ["Data Scientist", "Machine Learning Engineer", "Data & Cloud Engineer"],
  location: "Arlington, VA",
  email: "dhanush.mathivanan@gwu.edu",
  phone: "240-385-2816",
  github: "https://github.com/DhanushGWU1995",
  linkedin: "https://www.linkedin.com/in/dhanush-mathivanan-a65202120/",
  handshake: "https://gwu.joinhandshake.com/profiles/5kmn84",
  blog: "https://techwithdhanush.blogspot.com/",
  resume: `${BASE}Dhanush_Mathivanan_Resume.pdf`,
  photo: `${BASE}images/headshot.jpg`,
  intro:
    "I build data pipelines, machine learning models, and LLM applications on AWS. I spent 9+ years in industry shipping serverless backends and data systems for Porsche, ETS, and Roche, and I'm now finishing an M.S. in Data Science at The George Washington University.",
  about: [
    "Before graduate school, I spent most of my career on the backend: AWS data pipelines, event-driven microservices, and serverless platforms that handled millions of records. I led small engineering teams at Accenture and Bosch, and cut exam result processing time at Educational Testing Service by 50%.",
    "At GWU I've moved further into data science and AI. My coursework and projects cover machine learning, deep learning and neural networks, NLP, big data, data warehousing, and retrieval-augmented generation (RAG). I like work where good data engineering and good models meet: getting the data right, then building something people can rely on.",
  ],
};

export const quickFacts = [
  { label: "Graduating", value: "M.S. Data Science, Spring 2027" },
  { label: "Experience", value: "9+ years in industry" },
  { label: "Location", value: "Arlington, VA. Open to relocating anywhere in the US" },
  { label: "Work authorization", value: "OPT + 24-month STEM OPT (3 years), H-1B eligible" },
];

export const stats = [
  { value: "9+", label: "Years in industry" },
  { value: "2×", label: "AWS Certified" },
  { value: "50%", label: "Faster exam scoring at ETS" },
  { value: "2027", label: "M.S. Data Science, GWU" },
];

export const clients = ["Porsche", "Educational Testing Service", "Roche", "IFF", "Fiat Chrysler"];

export const focusAreas = [
  {
    title: "Data Engineering",
    description: "ETL/ELT pipelines, data modeling, batch and real-time processing, data warehousing.",
    icon: "database",
  },
  {
    title: "AI & LLMs",
    description: "RAG systems, hybrid search, embeddings, and LLM apps that cite their sources.",
    icon: "sparkles",
  },
  {
    title: "Machine Learning",
    description: "Deep learning, neural networks, NLP, computer vision, and predictive modeling.",
    icon: "brain",
  },
  {
    title: "Cloud",
    description: "AWS serverless and event-driven architectures, infrastructure as code.",
    icon: "cloud",
  },
  {
    title: "Software Engineering",
    description: "REST APIs, microservices, system design, and full-stack applications.",
    icon: "code",
  },
];

export const highlights: Highlight[] = [
  {
    label: "Torque Diagnostics",
    eyebrow: "RAG · Big Data · NLP",
    title: "An assistant that answers from the manual, and says so when it can't.",
    description:
      "Technicians ask questions about ABB drives and get answers grounded in the official manuals, with the page cited. If the manuals don't support an answer, the assistant withholds it instead of guessing.",
    pipeline: ["PDFs to S3", "Polars + DuckDB", "BM25 + embeddings", "Qwen LLM", "DeBERTa check"],
    points: [
      "Hybrid retrieval combines keyword (BM25) and semantic (embedding) search",
      "Evaluated with precision, recall, F1, and MRR",
      "Streamlit chat app running on a GPU EC2 instance",
    ],
    github: "https://github.com/DhanushGWU1995/torque-diagnostics",
  },
  {
    label: "ECRIS",
    eyebrow: "NLP · Transformers",
    title: "Ranking customer complaints so the urgent ones get handled first.",
    description:
      "Enterprise Customer Risk Intelligence System reads complaints from the CFPB Consumer Complaint Database, classifies them, scores urgency and escalation risk, and drafts a response.",
    pipeline: ["CFPB complaints", "DistilBERT classifier", "Urgency + risk scoring", "T5 responses", "Streamlit app"],
    points: [
      "About 85–90% accuracy, weighted F1 around 0.87",
      "Sentiment, urgency, and escalation risk for each complaint",
      "Deployed on Hugging Face Spaces",
    ],
    github: "https://github.com/DhanushGWU1995/6202-machine-learning-project",
    live: "https://huggingface.co/spaces/DhanushGWU1995/ECRIS",
  },
  {
    label: "Facial Pain Detection",
    eyebrow: "Deep Learning · Computer Vision",
    title: "Classifying pain levels from facial images, and showing why.",
    description:
      "PyTorch models classify facial images into four pain levels. I compared a custom CNN against transfer learning on pretrained networks, then used Grad-CAM to show which facial regions drove each prediction.",
    pipeline: ["Face images", "Custom CNN", "VGG-16 / ResNet-50", "EfficientNet-B3", "Grad-CAM"],
    points: [
      "Custom CNN versus transfer learning on three pretrained models",
      "Grad-CAM heatmaps make predictions explainable",
      "Built in PyTorch",
    ],
    github: "https://github.com/DhanushGWU1995/6303-deep-learning-project",
  },
];

export const experience: Job[] = [
  {
    company: "The George Washington University",
    location: "Washington, DC",
    role: "Technical Support Assistant",
    duration: "Aug 2026 – Present",
    highlights: [
      "Built a contact center for university IT support on Amazon Connect, Amazon Lex, and AWS Lambda that lets callers resolve common requests through self-service; it cut Tier 1 manual escalations by an estimated 42%.",
      "Set up an event-driven pipeline with Amazon EventBridge, S3, Amazon Bedrock, and Amazon Q that publishes support updates every 15 minutes and lets staff search internal documentation.",
      "Supported device administration for 10,000+ users and 5,000+ network endpoints on Cisco CUCM and RedSky, and moved logs into Splunk Cloud to speed up root-cause analysis.",
      "Led planning, testing, and cutover for 2N IP intercoms integrated with Cisco VoIP; each go-live finished without disruption.",
    ],
  },
  {
    company: "Probability Solutions LLC",
    location: "Virginia",
    role: "Data Science Intern",
    duration: "Jun 2026 – Aug 2026",
    highlights: [
      "Researched how binary search trees and other tree-based index structures perform in database systems at scale.",
      "Wrote Python prototypes to benchmark search, insert, update, and delete operations on large inputs, and used statistical analysis to compare implementations.",
    ],
  },
  {
    company: "Bosch Global Software Technologies",
    client: "MHP Porsche (Audi AG), Germany",
    role: "Technical Project Specialist / Lead Engineer",
    duration: "Mar 2024 – Aug 2025",
    highlights: [
      "Built and deployed a workforce planning platform for Porsche on AWS serverless microservices (Lambda, API Gateway, DynamoDB, Cognito), with infrastructure as code in CDKTF and CloudFormation.",
      "Wrote the data ingestion pipelines for enterprise HR files: uploads to S3 trigger Lambda functions that validate each record against a JSON schema and process it in real time.",
      "Connected legacy HR systems to the platform through SNS/SQS queues and Lambda to keep data in sync.",
    ],
  },
  {
    company: "Accenture",
    client: "Educational Testing Service (ETS), USA",
    role: "Custom Software Engineering Team Lead",
    duration: "Sep 2021 – Mar 2024",
    highlights: [
      "Cut exam result processing time by 50% by redesigning the scoring pipeline as serverless AWS services for a platform that handles millions of exam records a year.",
      "Designed how score events enter the system: each event is checked with AJV schema validation, then processed by SQS-triggered Lambda functions, which kept high-volume scoring runs stable.",
      "Wrote DynamoDB maintenance scripts in Python and Node.js and built reusable TypeScript service components shared across the platform's APIs.",
    ],
  },
  {
    company: "HCL Technologies",
    client: "Roche Holding AG, Switzerland",
    role: "Lead Engineer, Full Stack Cloud Development",
    duration: "Nov 2020 – Sep 2021",
    highlights: [
      "Built REST APIs and reporting services in Node.js, Express.js, Angular, and MySQL that made diagnostic reporting workflows 40% faster.",
      "Replaced manual lab reporting with automatically generated PDF and Excel reports built from streamed data.",
      "Secured APIs with OAuth/JWT and set up AWS S3 storage for exchanging medical data between clinical systems.",
    ],
  },
  {
    company: "Object Frontier Software",
    client: "International Flavors & Fragrances (IFF), USA",
    role: "Software Engineer, Full Stack Development",
    duration: "Aug 2018 – Nov 2020",
    highlights: [
      "Built an offline-first desktop app with Electron and an embedded Node.js server that syncs SQLite and MySQL data, so manufacturing staff could keep working without a connection.",
      "Implemented NgRx (Redux) state management in Angular for undo/redo on complex transactions, and wrote Node.js microservices on MySQL with Sequelize ORM.",
    ],
  },
  {
    company: "V2Soft",
    client: "Fiat Chrysler Automobiles (FCA), USA",
    role: "Software Engineer, HMI Software Development",
    duration: "Oct 2016 – Aug 2018",
    highlights: [
      "Built HMI dashboards for vehicle infotainment and diagnostics in Angular, HTML5, Bootstrap, and JavaScript.",
      "Wrote MongoDB batch jobs and Node.js APIs to ingest vehicle telemetry, with real-time Socket.IO messaging for live monitoring.",
    ],
  },
];

export const projectCategories: ProjectCategory[] = ["AI & LLMs", "Machine Learning", "Data & Analytics", "Cloud & Software"];

export const projects: Project[] = [
  {
    title: "Torque Diagnostics",
    subtitle: "Grounded RAG assistant for equipment manuals",
    year: "2026",
    categories: ["AI & LLMs", "Data & Analytics"],
    description:
      "Answers technician questions from ABB drive manuals and cites the page. Hybrid search (BM25 plus embeddings) finds the right pages, a Qwen LLM writes the answer, and a DeBERTa check withholds anything the manuals don't support.",
    tags: ["RAG", "Qwen", "DeBERTa", "BM25", "DuckDB", "Polars", "AWS S3", "EC2"],
    github: "https://github.com/DhanushGWU1995/torque-diagnostics",
  },
  {
    title: "ECRIS",
    subtitle: "Enterprise Customer Risk Intelligence System",
    year: "2026",
    categories: ["AI & LLMs", "Machine Learning"],
    description:
      "Classifies CFPB consumer complaints with DistilBERT, scores urgency and escalation risk, and drafts responses with T5. About 85–90% accuracy with a weighted F1 around 0.87.",
    tags: ["NLP", "DistilBERT", "T5", "Hugging Face", "Streamlit"],
    github: "https://github.com/DhanushGWU1995/6202-machine-learning-project",
    live: "https://huggingface.co/spaces/DhanushGWU1995/ECRIS",
  },
  {
    title: "Facial Pain Detection",
    subtitle: "Deep learning and computer vision",
    year: "2026",
    categories: ["Machine Learning"],
    description:
      "Classifies facial images into four pain levels, comparing a custom CNN with transfer learning on VGG-16, ResNet-50, and EfficientNet-B3. Grad-CAM shows which regions drove each prediction.",
    tags: ["PyTorch", "CNN", "Transfer Learning", "Grad-CAM"],
    github: "https://github.com/DhanushGWU1995/6303-deep-learning-project",
  },
  {
    title: "Role Matrix",
    subtitle: "AI-assisted resume screening",
    year: "2026",
    categories: ["AI & LLMs"],
    description:
      "Parses batches of PDF and DOCX resumes, extracts 300+ technical and soft skills, scores each candidate against a job description, and sorts them into Interview, Maybe, or Not Now.",
    tags: ["Python", "NLP", "Streamlit", "Resume Parsing"],
    github: "https://github.com/DhanushGWU1995/role-matrix",
  },
  {
    title: "AI Course Creator",
    subtitle: "Multi-agent app on Google Cloud Run",
    year: "2026",
    categories: ["AI & LLMs", "Cloud & Software"],
    description:
      "Turns a topic into a structured course. A researcher agent gathers material, a fact-checker validates it, and a writer agent produces the final content. Deployed serverless on Cloud Run.",
    tags: ["Multi-Agent AI", "GCP", "Cloud Run", "Python"],
    live: "https://course-creator-626594108279.us-central1.run.app/",
  },
  {
    title: "US Unemployment vs Job Postings",
    subtitle: "Interactive Tableau dashboard",
    year: "2026",
    categories: ["Data & Analytics"],
    description:
      "Compares state-level unemployment with job postings across five sectors, combining Kaggle data with FRED/BLS series to show sector-specific hiring trends.",
    tags: ["Tableau", "Data Visualization", "FRED / BLS"],
    github: "https://github.com/DhanushGWU1995/6401-data-visualization-project",
  },
  {
    title: "Health Status Predictor",
    subtitle: "Data mining on CDC BRFSS",
    year: "2025",
    categories: ["Machine Learning", "Data & Analytics"],
    description:
      "A CatBoost model trained on 400,000+ CDC BRFSS responses predicts general health from 17 lifestyle and socioeconomic factors (about 78% accuracy, AUC 0.85), served through an Angular and Flask web app.",
    tags: ["CatBoost", "Python", "Flask", "Angular"],
    github: "https://github.com/DhanushGWU1995/6103-data-mining-project",
  },
  {
    title: "Heart Disease Predictor",
    subtitle: "Classification on CDC BRFSS 2024",
    year: "2025",
    categories: ["Machine Learning", "Data & Analytics"],
    description:
      "Cleaned and analyzed CDC BRFSS 2024 survey data in Python and R to predict coronary heart disease risk, and published a web app that scores new inputs.",
    tags: ["Python", "R", "Classification"],
    github: "https://github.com/DhanushGWU1995/6101-mid-term-project",
    live: "https://dhanushgwu1995.github.io/6101-mid-term-project/predict",
  },
  {
    title: "AI Parts Support Chatbot",
    subtitle: "Generative AI for appliance parts",
    year: "2025",
    categories: ["AI & LLMs", "Cloud & Software"],
    description:
      "Helps customers find compatible appliance parts and installation steps. Classifies intent, extracts part and model numbers, and can switch between OpenAI and DeepSeek backends.",
    tags: ["TypeScript", "Angular", "Node.js", "SQLite", "OpenAI"],
    github: "https://github.com/DhanushGWU1995/sample-chat-bot",
  },
];

export const skills: SkillGroup[] = [
  { name: "Languages", skills: ["Python", "SQL", "TypeScript", "JavaScript", "R", "Linux"] },
  {
    name: "Data Engineering",
    skills: ["ETL/ELT", "Data modeling", "Apache Airflow", "PySpark", "Kafka", "AWS EMR", "Data warehousing", "Pandas", "Polars", "NumPy", "DuckDB"],
  },
  {
    name: "Machine Learning & AI",
    skills: ["PyTorch", "TensorFlow", "Keras", "scikit-learn", "CatBoost", "Hugging Face", "Neural networks", "NLP", "Computer vision", "RAG", "Embeddings", "A/B testing", "Amazon Bedrock"],
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS Lambda", "S3", "API Gateway", "DynamoDB", "SQS / SNS", "EventBridge", "EC2", "CloudFormation", "CDK / CDKTF", "Terraform", "Docker", "Kubernetes", "Jenkins"],
  },
  {
    name: "Software Engineering",
    skills: ["System design", "REST APIs", "Microservices", "OOP", "Node.js", "Express.js", "FastAPI", "React", "Angular", "Agile"],
  },
  {
    name: "Databases & Analytics",
    skills: ["Amazon Redshift", "MySQL", "MongoDB", "SQLite", "Redis", "Tableau", "Splunk", "CloudWatch"],
  },
];

export const education = [
  {
    school: "The George Washington University",
    degree: "Master of Science in Data Science",
    location: "Washington, DC",
    duration: "Aug 2025 – Spring 2027",
    detail: "Big Data Analytics, Cloud Computing, Machine Learning, Deep Learning, NLP, Data Warehousing",
  },
  {
    school: "Anna University",
    degree: "Bachelor of Engineering in Computer Science",
    location: "Tiruchirappalli, India",
    duration: "2012 – 2016",
    detail: "Computer Programming, Software Development, Algorithm Design, Web Application Development",
  },
];

export const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services · SAA-C03", year: "2024", kind: "cert" },
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services · DVA-C02", year: "2023", kind: "cert" },
  { name: "Phi Delta Gamma Fellowship", issuer: "The George Washington University", year: "2026", kind: "award" },
  { name: "Global Leaders Fellowship", issuer: "The George Washington University", year: "2025", kind: "award" },
  { name: "Client Value Creation Award and Best People Award", issuer: "Accenture", year: "2022", kind: "award" },
] as const;
