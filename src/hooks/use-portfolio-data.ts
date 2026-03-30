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
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export function usePortfolioData() {
  const personalInfo = {
    name: "Dhanush Mathivanan",
    title: "Data Science & Cloud Engineer",
    location: "Arlington, VA",
    phone: "240-385-2816",
    email: "dhanush.mathivanan@gwu.edu",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    summary: "Data Science graduate student at The George Washington University, specializing in Machine Learning, Deep Learning, NLP, Generative AI, and large-scale data systems. AWS Certified cloud engineer with 9+ years of experience building distributed microservices, event-driven architectures, and scalable serverless data platforms on AWS for global enterprise systems, Fullstack web application development. Experienced in developing end-to-end machine learning pipelines using TensorFlow, Scikit-Learn, and FastAPI."
  };

  const skills: SkillCategory[] = [
    {
      name: "Programming",
      skills: ["Python", "R Studio", "SQL", "TypeScript", "JavaScript", "ActionScript"]
    },
    {
      name: "Machine Learning",
      skills: ["TensorFlow", "Scikit-Learn", "Hugging Face", "Matplotlib", "Seaborn"]
    },
    {
      name: "Web Frameworks",
      skills: ["Node.js", "Express.js", "Angular", "FastAPI", "Streamlit", "Terraform", "Electron", "Redis", "Ngrx Redux"]
    },
    {
      name: "Databases",
      skills: ["DynamoDB", "MySQL", "MongoDB", "SQLite"]
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
      skills: ["Git", "SVN", "Tableau Desktop", "VS-Code", "PyCharm"]
    }
  ];

  const experience: Experience[] = [
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
      location: "Washington DC",
      degree: "Master of Science in Data Science",
      duration: "Aug 2025 - May 2027",
      coursework: "Data Analytics, Machine Learning, Deep Learning, NLP, Data Warehousing"
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
    { name: "Global Leaders Fellowship recipient", issuer: "George Washington University", year: "2025" },
    { name: "Introduction to R", issuer: "DataCamp", year: "2025" },
    { name: "AWS Certified Solutions Architect, Associate - SAA-C03", issuer: "AWS", year: "2024" },
    { name: "AWS Certified Developer, Associate - DVA-C02", issuer: "AWS", year: "2023" },
    { name: "Green Software for Practitioners - LFC131", issuer: "Linux Foundation", year: "2023" },
    { name: "Client Value Creation Award, Best People Award", issuer: "Accenture", year: "2022" },
  ];

  const projects: Project[] = [
    {
      title: "Heart Disease Prediction (US CDC Survey Data)",
      year: "2024",
      description: "Machine Learning Trained Predictor with an interactive Web App interface to analyze heart disease risk factors.",
      link: "https://github.com/"
    },
    {
      title: "Health Status Prediction (Income Factors)",
      year: "2024",
      description: "ML classification model predicting health status based on income factors in US Population CDC Survey Data.",
      link: "https://github.com/"
    }
  ];

  return { personalInfo, skills, experience, education, certifications, projects };
}
