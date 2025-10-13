
import type { ContactInfo, Experience, EducationInfo, SkillCategory } from './types';

export const name = 'RAKSHIT GOGIA';

export const contactInfo: ContactInfo = {
  email: 'rakgogia@umich.edu',
  phone: '(734) 882-9783',
  linkedin: 'linkedin.com/in/rakshitgogia',
};

export const summary = 'Software Engineer with expertise in large-scale search and LLM-powered chat systems. Lead contributor to Microsoft Copilot and Microsoft Search, with expertise in Gen AI, Machine Learning, and .NET development.';

export const workExperience: Experience[] = [
  {
    role: 'Software Engineer II – Microsoft Search, Assistant, and Intelligence (MSAI)',
    company: 'Microsoft',
    duration: 'Jul 2021 – Present',
    description: [
      'Engineered LLM-powered query understanding for third-party data (including Salesforce, ServiceNow, Jira) in Copilot, improving trigger rates by 300% and enabling Copilot extensibility, a multi-billion-dollar business.',
      'Architected and developed the capability to search for content in SharePoint folders/sites in M355 Copilot, resolving 40% of top customer pain points and boosting retention for key Fortune Global 500 customers.',
      'Led live site readiness effort, establishing processes that cut incident resolution time from weeks to hours.',
      'Enhanced M365 file search ranker with new features, improving search relevance (NDCG@3) by >3%.',
      'Developed service for human-readable query understanding signals, improving search comprehension.',
    ],
    logo: 'microsoft',
  },
];

export const researchExperience: Experience[] = [
  {
    role: 'Computational Human Artificial Intelligence (CHAI) Lab',
    company: 'University of Michigan',
    duration: 'Aug 2020 – Feb 2021',
    description: [
      "Researched word embedding methods to predict mood and valence bipolar disorder patients' conversations.",
      'Fine-tuned BERT for mood prediction tasks, leveraging a leave-one-subject-out method for mood inference.',
    ],
    logo: 'umich',
  },
  {
    role: 'Sentiment Analysis Research',
    company: 'ProQuest',
    duration: 'Jan 2020 – Dec 2020',
    description: [
      'Fine-tuned XLNet and SBERT models, achieving strong F1-scores on various sentiment analysis tasks.',
      'Engineered custom word embeddings trained on >1B words outperforming Google News embeddings in multiple analogy and categorization benchmarks.',
      'Designed intrinsic evaluation pipeline to benchmark embedding quality against state-of-the-art baselines.',
      'Integrated pipelines into ProQuest Text Data Mining Studio, enabling researchers to generate contextual embeddings and run sentiment analysis on custom corpora.',
    ],
    logo: 'proquest',
  },
];

export const internships: Experience[] = [
  {
    role: 'AI Chatbot Development Intern',
    company: 'Bank of America',
    duration: 'Summer 2020',
    description: ['Built AI chatbot for Global Markets risk reporting (NLP, Flask + ReactJS).'],
    logo: 'boa',
  },
  {
    role: 'Product Recommendation System Intern',
    company: 'Shopee',
    duration: 'Summer 2020',
    description: ['Developed product recommendation evaluation system; deployed FP-Growth algorithm for ad recommendations using Spark.'],
    logo: 'shopee',
  },
  {
    role: 'Cybersecurity Anomaly Detection Intern',
    company: 'Infosys',
    duration: 'Summer 2019',
    description: ['Evaluated various anomaly detection techniques; Integrated HTM anomaly detection into cybersecurity platform using PySpark.'],
    logo: 'infosys',
  },
];

export const education: EducationInfo = {
  institution: 'University of Michigan, Ann Arbor',
  degree: 'B.S. Computer Science, Minor in Business',
  duration: 'Aug 2017 – May 2021',
  gpa: '3.84/4.00 (Summa Cum Laude)',
  honors: ['Angell Scholar', "Dean's List", 'HKN Honor Society', 'President of Singapore Students Association'],
};

export const skills: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'C#', 'JavaScript', 'Java', 'SQL', 'Bash'],
  },
  {
    title: 'ML/AI',
    skills: ['LLMs', 'PyTorch', 'scikit-learn', 'Spark', 'Hadoop'],
  },
  {
    title: 'Systems/Tools',
    skills: ['.NET', 'ReactJS', 'Flask', 'Git', 'MapReduce', 'Docker', 'Azure'],
  },
];