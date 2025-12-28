import {
  excel,
  trading,
  ai,
  dice,
  tutor,
  plate,
  javascript,
  html,
  css,
  jb,
  bdo,
  bright,
  bath,
  tableau,
  age,
  mna,
  piano,
  fxalgo,
  option,
  poker,
  monty,
  housing,
  powerpoint,
  python,
  R,
  sql,
  tplink,
  word,
  amplify,
  jpmorgan,
  Leeds,
  network,
  isthisadeal,
  golf,
  macro,
  breakin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "other_experience",
    title: "Other Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
];

const services = [
  {
    title: "Probability & Stochastic Modelling",
    icon: dice,
  },
  {
    title: "Exploratory Data Analysis",
    icon: excel,
  },
  {
    title: "Machine Learning",
    icon: ai,
  },
  {
    title: "Resistence Training",
    icon: plate,
  },
  {
    title: "Strategic Games",
    icon: poker,
  },
  {
    title: "Golf",
    icon: golf,
  },
  {
    title: "Piano",
    icon: piano,
  },
];

const technologies = [
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  { name: "Tableau",
    icon: tableau,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Word",
    icon: word,
  },
  {
    name: "Powerpoint",
    icon: powerpoint,
  },
];

const experiences = [
  {
    title: "Technical Lead (Intern)",
    company_name: "Bath Enterprise",
    icon: bath,
    iconBg: "#E6DEDD",
    date: "Jan 2025",
    points: [
      "Designed a secure and scalable attendance tracking system for the University of Bath's entrepreneurial community, enhancing student engagement and data accessibility. ",
      "Utilised cloud-based technologies and authored detailed documentation to facilitate maintenance and long-term system usability. ",
      "Developed a GDPR-compliant PostgreSQL database to ensure efficient storage and management of attendance records.",
    ],
  },
  {
    title: "Technical Intern",
    company_name: "IsThisADeal.ai",
    icon: isthisadeal,
    iconBg: "#E6DEDD",
    date: "Nov 2024",
    points: [
      "Designed and implemented a web scraping script to extract and analyse product data from e-commerce websites.",
      "Built a UI/UX mock-up and implemented psychological principles to minimise users' cognitive load & enhance user experience.",
      // "Leveraged knowledge in Python, HTML, JavaScript, BeautifulSoup, Automated Web-Scraping, Canva, Excel, PowerPoint"
    ],
  },
  {
    title: "Faculty of Science & MSc Data Science Course Representative",
    company_name: "University of Bath",
    icon: bath,
    iconBg: "#E6DEDD",
    date: "Sep 2024 - June 2025",
    points: [
      "Advocated for the interests and welfare of Postgraduate students within the Science Department.",
      "Facilitated communication and collaboration between students, faculty, and administration to address student concerns and contribute to departmental improvements.",
    ],
  },
];

const education = [
  {
    school: "University of Bath",
    course: "MSc Data Science",
    grades: "Distinction",
    icon: bath,
    iconBg: "#E6DEDD",
    date: "2024-2025",
    points: [
      "Elected Faculty of Science & Course Representative, representing the student body.",
      "Applied Data Science (81%), Reinforcement Learning (82%), Machine Learning (74%), Statistics (70%), Software Technologies (Python and SQL) (71%),  Dissertation (75%)",
    ],
  },
  {
    school: "University of Leeds",
    course: "MEng Aerospace Engineering (Hons)",
    grades: "Second-Upper Class (2:1)",
    icon: Leeds,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "Engineering Mathematics Distinct Honor (full-mark achieved)"
    ],
  },
];

const projects = [
  {
    name: "Housing Prices Forecast",
    description:
      "My family has recently relocated to the UK and is currently exploring housing options in the Southeast. As with any major purchase, the process has presented its challenges. To support this decision, I have taken the initiative to conduct additional research into the areas we are considering.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Exploratory Data Analysis (EDA)",
        color: "green-text-gradient",
      },
      {
        name: "Regression Modelling",
        color: "pink-text-gradient",
      },
    ],
    image: housing,
    source_code_link: "https://github.com/plato852/housing-price-forecast-with-regression-modelling",
  },
  {
    name: "Technology News Network Narrative Analysis",
    description:
      "Natural Language Processing implementation in Python using a parser to extract subjects, verbs and objects triplets from news articles. Also included is the document of the steps I took to filter the effective triplets, and what I learnt.",
    tags: [
      {
        name: "NLP",
        color: "blue-text-gradient",
      },
      {
        name: "Sentiment Network",
        color: "green-text-gradient",
      },
      {
        name: "Big Data Processing",
        color: "pink-text-gradient",
      },
    ],
    image: network,
    source_code_link: "https://github.com/plato852/Narrative-Network-Analysis",
  },
  {
    name: "Age Gender Estimator",
    description:
      "This project explores the development of a machine learning pipeline for predicting age and gender from data inputs, which covers data preprocessing, model training, and evaluation, with a focus on assessing predictive performance and analysing results.",
    tags: [
      {
        name: "CNN",
        color: "blue-text-gradient",
      },
      {
        name: "Facial Recognition",
        color: "green-text-gradient",
      },
      {
        name: "Python",
        color: "pink-text-gradient",
      },
    ],
    image: age,
    source_code_link: "https://github.com/plato852/Age-Gender-Estimator-CNN",
  },
  {
    name: "Monty Hall Website Entrance",
    description:
      "While wanting to create this portfolio website to improve and showcase my programming skills, I also wanted to personalise it by creating a 'gateway' that only allowed access if the user understands one of my favourite probability questions - the Monty Hall problem! Well done for getting this far. (By the way, the game was rigged to promote correct reasoning rather than luck).",
    tags: [
      {
        name: "Probability",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "orange-text-gradient",
      },
    ],
    image: monty,
    source_code_link: "https://github.com/joelb1401/MHgame",
  },
  // {
  //   name: "BreakIn",
  //   description:
  //     "As of July 2024, I saw a gap in the student/professional networking market. I realised, from my own experience, that finding the right people to connect with is time-consuming, even with LinkedIn. I thought of creating a service that could quickly find the professionals most relevant to someone, use an algorithm to rank them from most to least relevant, then use AI to write the best connection message for them. This could provide a quick and easy way to help students break into industry. However, unless I pay tens-of-thousands for the LinkedIn database, there is no legal way to search for professionals via code. See hiQ Labs, Inc. v. LinkedIn Corp., 938 F.3d 985 (9th Cir. 2019).",
  //   tags: [
  //     {
  //       name: "AI",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Entrepreneurial",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "HTML",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "JavaScript",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: breakin,
  //   source_code_link: "https://joelb1401.github.io/BreakIn/",
  // },
];

 const other_experience = [
  // {
  //   name: "JP Morgan Chase Quantitative Research Job Simulation - Forage",
  //   description:
  //     "This simulation focused on quantitative research  and machine learning methods to analyse a book of loans and estimate a customer's probability of default. I also used dynamic programming to convert FICO scores into categorical data to predict defaults. I have included the code I produced as well as the documentation of the steps I took.",
  //   tags: [
  //     {
  //       name: "Quantitative Research",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Machine Learning",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Default Prediction",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jpmorgan,
  //   source_code_link: "https://github.com/joelb1401/JPMquantsim",
  // },
  // {
  //   name: "AmplifyME M&A Finance Accelerator Simulation",
  //   description:
  //     "Before knowing much about investment banking or M&A, I completed this simulation and achieved a 96% score. It required successful completion of an entire DCF analysis with a recommendation in under 45 minutes.",
  //   tags: [
  //     {
  //       name: "M&A",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "DCF Analysis",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Financial Statements",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: amplify,
  //   source_code_link: "https://github.com/joelb1401/AMdcf",
  // },
  // {
  //   name: "JP Morgan Chase Investment Banking Job Simulation - Forage",
  //   description:
  //     "This simulation introduced me to DCF analysis, target company research and identification, and the auction process. After completing the DCF model, I crafted a concise 2-pager to inform a client's decision-making.",
  //   tags: [
  //     {
  //       name: "M&A",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "DCF Analysis",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Due Diligence",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jpmorgan,
  //   source_code_link: "https://github.com/joelb1401/JPMibsim",
  // },
  // {
  //   name: "MacroVoices Podcast",
  //   description:
  //     "To keep up-to-date on the current relevant macroeconomic events and learn about how they affect the markets, I listen to the weekly podcast by Erik Townsend and Patrick Ceresna.",
  //   tags: [
  //     {
  //       name: "Macroeconomics",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Investment",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Politics",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: macro,
  //   source_code_link: "https://www.macrovoices.com/",
  // },
 ];

export { services, technologies, experiences, education, projects, other_experience };
