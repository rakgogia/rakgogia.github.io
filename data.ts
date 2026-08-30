
import type { ContactInfo, Experience, EducationInfo, GitHubProject, HighSchoolInfo, MicrosoftProduct, PersonalProject, SkillCategory } from './types';

export const name = 'RAKSHIT GOGIA';

export const contactInfo: ContactInfo = {
  email: 'rakgogia@umich.edu',
  phone: '(734) 882-9783',
  linkedin: 'linkedin.com/in/rakshitgogia',
  github: 'github.com/rakgogia',
};

export const summary = 'Software Engineer with expertise in large-scale search and LLM-powered chat systems. Lead contributor to Microsoft Copilot and Microsoft Search, with expertise in Gen AI, Machine Learning, and .NET development.';

export const microsoftSearchProducts: MicrosoftProduct[] = [
  { name: 'Outlook', logo: 'outlook' },
  { name: 'Teams', logo: 'teams' },
  { name: 'SharePoint', logo: 'sharepoint' },
  { name: 'Copilot', logo: 'copilot' },
  { name: 'Copilot Search', logo: 'copilot-search' },
];

export const personalProjects: PersonalProject[] = [
  {
    title: 'MapReduce Server',
    duration: 'Mar 2019',
    description: [
      'Developed a MapReduce server that executes distributed jobs across a cluster while ensuring fault tolerance.',
      'Used multiprocessing, multithreading, and sockets to run mapping, grouping, and reducing jobs in parallel.',
    ],
    technologies: ['Python', 'Distributed Systems', 'Sockets'],
  },
  {
    title: 'Michigan DataHack',
    duration: 'Jan 2019',
    description: [
      'Analyzed sports performance tracking data and developed a model to predict the best position for a player.',
      'Won third place as the only undergraduate team to receive a prize.',
    ],
    technologies: ['Machine Learning', 'Data Analysis', 'Python'],
  },
  {
    title: 'Maker Faire Singapore',
    duration: 'May – Jul 2017',
    description: [
      'Collaborated on a programmable laser engraver built from recycled instruments for Maker Faire Singapore, an annual science fair organized by Science Centre Singapore.',
      'Built a working prototype with a laser diode mounted on two motors and controlled by an Arduino, capable of engraving complex drawings on materials of varying hardness.',
      'Learned Arduino programming, circuit design, and end-to-end prototype development; the device drew strong interest from visitors.',
    ],
    technologies: ['Arduino', 'Circuit Design', 'Prototyping'],
  },
];

export const githubProjects: GitHubProject[] = [
  {
    name: 'India Visa Bulletin Tracker',
    description: 'Tracks employment-based visa filing and final action dates, compares monthly movement, and scrapes live data from the U.S. Department of State.',
    language: 'JavaScript',
    topics: ['React', 'Express', 'Cheerio', 'Cloud Run'],
    url: 'https://github.com/rakgogia/visa-bulletin-tracker',
  },
  {
    name: 'MCP Server',
    description: 'A lightweight Python implementation exploring Model Context Protocol client and server communication.',
    language: 'Python',
    topics: ['MCP', 'Client–Server', 'AI'],
    url: 'https://github.com/rakgogia/mcp-server',
  },
  {
    name: 'AI Trip Planner',
    description: 'An AI-powered trip planning experience that generates itineraries and restaurant recommendations with Gemini.',
    language: 'TypeScript',
    topics: ['React', 'Gemini', 'Google Cloud', 'GenAI'],
    url: 'https://github.com/rakgogia/AI-trip-planner',
  },
  {
    name: 'Agentic Wedding Planner',
    description: 'An AI-assisted wedding planning application built as an interactive TypeScript experience with Gemini.',
    language: 'TypeScript',
    topics: ['React', 'Gemini', 'Google Cloud', 'GenAI', 'Agents'],
    url: 'https://github.com/rakgogia/Agentic-Wedding-Planner',
  },
];

export const travelMapUrl = 'https://maps.app.goo.gl/MxJC1NbA7TL7Bsz3A';
export const travelMapEmbedUrl = 'https://www.google.com/maps/d/embed?mid=1cBddpnBndkQ_5VHqnL02dkazEC02ROo&ehbc=2E312F';
export const travelMapKmlUrl = 'https://www.google.com/maps/d/kml?mid=1cBddpnBndkQ_5VHqnL02dkazEC02ROo&forcekml=1';

export const visitedCountries = [
  { name: 'Australia', flag: '🇦🇺', region: 'Oceania' },
  { name: 'Austria', flag: '🇦🇹', region: 'Europe' },
  { name: 'Brunei', flag: '🇧🇳', region: 'Asia' },
  { name: 'Cambodia', flag: '🇰🇭', region: 'Asia' },
  { name: 'Canada', flag: '🇨🇦', region: 'North America' },
  { name: 'China', flag: '🇨🇳', region: 'Asia' },
  { name: 'Hungary', flag: '🇭🇺', region: 'Europe' },
  { name: 'India', flag: '🇮🇳', region: 'Asia' },
  { name: 'Indonesia', flag: '🇮🇩', region: 'Asia' },
  { name: 'Italy', flag: '🇮🇹', region: 'Europe' },
  { name: 'Japan', flag: '🇯🇵', region: 'Asia' },
  { name: 'Malaysia', flag: '🇲🇾', region: 'Asia' },
  { name: 'Singapore', flag: '🇸🇬', region: 'Asia' },
  { name: 'South Korea', flag: '🇰🇷', region: 'Asia' },
  { name: 'Taiwan', flag: '🇹🇼', region: 'Asia' },
  { name: 'Thailand', flag: '🇹🇭', region: 'Asia' },
  { name: 'United Arab Emirates', flag: '🇦🇪', region: 'Asia' },
  { name: 'United States', flag: '🇺🇸', region: 'North America' },
  { name: 'Vietnam', flag: '🇻🇳', region: 'Asia' },
] as const;

export const countriesLivedIn = [
  { name: 'India', flag: '🇮🇳' },
  { name: 'Singapore', flag: '🇸🇬' },
  { name: 'United States', flag: '🇺🇸' },
] as const;

export const usStatesLivedIn = [
  { name: 'Michigan', abbreviation: 'MI' },
  { name: 'Washington', abbreviation: 'WA' },
] as const;

export const usStatesVisited = [
  { name: 'Arizona', abbreviation: 'AZ', region: 'West' },
  { name: 'Arkansas', abbreviation: 'AR', region: 'South' },
  { name: 'California', abbreviation: 'CA', region: 'West' },
  { name: 'Colorado', abbreviation: 'CO', region: 'West' },
  { name: 'Georgia', abbreviation: 'GA', region: 'South' },
  { name: 'Idaho', abbreviation: 'ID', region: 'West' },
  { name: 'Illinois', abbreviation: 'IL', region: 'Midwest' },
  { name: 'Indiana', abbreviation: 'IN', region: 'Midwest' },
  { name: 'Kentucky', abbreviation: 'KY', region: 'South' },
  { name: 'Maryland', abbreviation: 'MD', region: 'South' },
  { name: 'Massachusetts', abbreviation: 'MA', region: 'Northeast' },
  { name: 'Michigan', abbreviation: 'MI', region: 'Midwest' },
  { name: 'Missouri', abbreviation: 'MO', region: 'Midwest' },
  { name: 'Montana', abbreviation: 'MT', region: 'West' },
  { name: 'Nevada', abbreviation: 'NV', region: 'West' },
  { name: 'New Jersey', abbreviation: 'NJ', region: 'Northeast' },
  { name: 'New York', abbreviation: 'NY', region: 'Northeast' },
  { name: 'North Carolina', abbreviation: 'NC', region: 'South' },
  { name: 'Ohio', abbreviation: 'OH', region: 'Midwest' },
  { name: 'Oregon', abbreviation: 'OR', region: 'West' },
  { name: 'Pennsylvania', abbreviation: 'PA', region: 'Northeast' },
  { name: 'Tennessee', abbreviation: 'TN', region: 'South' },
  { name: 'Texas', abbreviation: 'TX', region: 'South' },
  { name: 'Utah', abbreviation: 'UT', region: 'West' },
  { name: 'Virginia', abbreviation: 'VA', region: 'South' },
  { name: 'Washington', abbreviation: 'WA', region: 'West' },
  { name: 'West Virginia', abbreviation: 'WV', region: 'South' },
  { name: 'Wyoming', abbreviation: 'WY', region: 'West' },
] as const;

export const indianStatesLivedIn = [
  { name: 'Delhi' },
  { name: 'Karnataka' },
] as const;

export const indianStatesVisited = [
  { name: 'Chandigarh' },
  { name: 'Delhi' },
  { name: 'Haryana' },
  { name: 'Karnataka' },
  { name: 'Kerala' },
  { name: 'Maharashtra' },
  { name: 'Puducherry' },
  { name: 'Punjab' },
  { name: 'Rajasthan' },
  { name: 'Tamil Nadu' },
  { name: 'Uttar Pradesh' },
  { name: 'Uttarakhand' },
] as const;

export const workExperience: Experience[] = [
  {
    role: 'Software Engineer II',
    company: 'Microsoft',
    duration: 'Jul 2021 – Present',
    description: [
      'Engineered LLM-powered query understanding for third-party data (including Salesforce, ServiceNow, Jira) in Copilot, improving trigger rates by 300% and enabling Copilot extensibility, a multi-billion-dollar business.',
      'Architected and developed the capability to search for content in SharePoint folders/sites in M365 Copilot, resolving 40% of top customer pain points and boosting retention for key Fortune Global 500 customers.',
      'Led live site readiness effort, establishing processes that cut incident resolution time from weeks to hours.',
      'Enhanced M365 file search ranker with new features, improving search relevance (NDCG@3) by >3%.',
      'Developed service for human-readable query understanding signals, improving search comprehension.',
    ],
    logo: 'microsoft',
  },
  {
    role: 'Infanteer',
    company: 'Singapore Armed Forces',
    duration: 'May 2015 – Mar 2017',
    description: [
      'Completed field training in Singapore, Brunei, and Taiwan, executing challenging missions in adverse conditions.',
    ],
    logo: 'saf',
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
    role: 'Software Engineering Intern',
    company: 'Bank of America',
    duration: 'Summer 2020',
    description: ['Built AI chatbot for Global Markets risk reporting (NLP, Flask + ReactJS).'],
    logo: 'boa',
  },
  {
    role: 'Software Engineering Intern (Machine Learning)',
    company: 'Shopee',
    duration: 'Summer 2020',
    description: ['Developed product recommendation evaluation system; deployed FP-Growth algorithm for ad recommendations using Spark.'],
    logo: 'shopee',
  },
  {
    role: 'Software Engineering Intern (Machine Learning)',
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
  gpa: '3.84/4.00',
  graduationHonor: 'Summa Cum Laude',
  honors: ['Angell Scholar', "Dean's List", '3rd Place in Michigan Data Science Hackathon'],
  societies: [
    'Eta Kappa Nu (HKN) Honor Society',
    'Michigan Community Scholars Program',
    'President of Singapore Students Association',
    'Michigan FinTech Team',
    'Michigan Data Science Team',
    'Michigan Ballroom Dance Team',
  ],
};

export const highSchool: HighSchoolInfo = {
  institution: 'Raffles Institution',
  location: 'Singapore',
  classYear: 'Class of 2014',
  honors: [
    'SINDA Excellence Award',
    'Singapore Ministry of Education Merit Scholarship',
  ],
  societies: [
    'Hullett House Executive Committee',
    'Peer Support Leader',
    'Raffles Symphonic Band',
  ],
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