export const profile = {
  name: 'Muhammad Saad Saeed',
  paper: 'The Saad Times',
  role: 'Full Stack Web Developer',
  tagline: 'Software Engineering Graduate',
  motto: 'All the code that\u2019s fit to ship',
  email: 'saadsaeed9877@gmail.com',
  phone: '0330-1967597',
  phoneHref: 'tel:+923301967597',
  location: 'Pakistan',
  summary:
    'Energetic and solution-focused Software Engineering graduate with hands-on experience in full stack web development using the MERN stack. Skilled in building responsive front-end interfaces, integrating RESTful APIs, and developing scalable backend services. Quick to learn and highly adaptable, with strong fundamentals in web systems and a deep interest in building impactful products in dynamic, growth-focused environments.',
}

export type Experience = {
  role: string
  org: string
  period: string
  dateline: string
  headline: string
  bullets: string[]
  current?: boolean
}

export const experience: Experience[] = [
  {
    role: 'Next.js Front-End Developer',
    org: 'Revnix',
    period: 'January 2026 — Present',
    dateline: 'REVNIX BUREAU',
    headline: 'Saeed Joins Revnix, Modernizes Front-End Desk',
    current: true,
    bullets: [
      'Developing modern, responsive front-end applications using Next.js and related technologies.',
      'Building and optimizing user interfaces to ensure high performance and a seamless user experience.',
      'Integrating the company CMS to create and manage dynamic, content-driven websites.',
    ],
  },
  {
    role: 'Web Development Intern',
    org: 'Ezitech',
    period: 'August 2024 — November 2024',
    dateline: 'EZITECH BUREAU',
    headline: 'Intern Dispatch: Full-Stack Training at Ezitech',
    bullets: [
      'Assisted in the development of web applications using React.js, Tailwind CSS, and Node.js.',
      'Supported front-end replication of modern websites to strengthen UI implementation.',
      'Participated in back-end API development and integration with MongoDB.',
      'Gained experience working with Agile teams, version control systems, and managing technical tasks.',
    ],
  },
]

export type Project = {
  name: string
  kicker: string
  headline: string
  standfirst: string
  body: string[]
  tech: string[]
  github: string
}

export const projects: Project[] = [
  {
    name: 'Bug Severity Prediction',
    kicker: 'RESEARCH DESK',
    headline: 'Teaching Machines to Triage: Bug Severity, Predicted',
    standfirst:
      'Comprehensive study on automated bug severity classification using transformer-based deep learning models on 185,000 bug reports.',
    body: [
      'Designed a predictive model to classify software bugs based on severity using state-of-the-art transformer architectures including XLNet, BERT, CNN, LSTM, and RNN.',
      'Trained on real-world bug tracking datasets gathered from multiple open-source projects: Eclipse JDT, Eclipse CDT, Eclipse Platform, Firefox, and Thunderbird, with controlled oversampling to address class imbalance.',
      'Led the effort end-to-end as a research-based final year project: dataset preparation, feature analysis, model evaluation, and reporting. The study demonstrates the effectiveness of transformer-based models in software engineering tasks.',
    ],
    tech: ['Machine Learning', 'Transformer Models', 'Python', 'Deep Learning', 'Data Analysis'],
    github: 'https://github.com/saadsaeed9877-cloud/BSP-V1',
  },
  {
    name: 'Sync Station',
    kicker: 'AUTOMATION DESK',
    headline: 'A Discord Bot That Tracks Your Workbench Hours',
    standfirst:
      'Discord bot for tracking work time, managing productivity, and logging development sessions in real-time.',
    body: [
      'Built a Discord bot that integrates seamlessly into developer workflows, enabling team members to log work sessions and track productivity metrics directly from chat.',
      'The bot records time entries, generates reports, and provides insights into work patterns — turning Discord into a lightweight time-tracking newsroom for engineering teams.',
      'Demonstrates real-time event handling, API integration, and practical automation for distributed development teams.',
    ],
    tech: ['Discord.js', 'Node.js', 'Bot Development', 'API Integration', 'Automation'],
    github: 'https://github.com/saadsaeed9877-cloud/Sync-Station',
  },
  {
    name: 'Eat n Split',
    kicker: 'PRODUCT DESK',
    headline: 'A Bill-Splitting Application: React State Management in Action',
    standfirst:
      'React application for splitting bills and tracking shared expenses among friends with clean, intuitive state management.',
    body: [
      'Designed and built a responsive bill-splitting platform that lets friends easily calculate who owes whom, demonstrating advanced React state management patterns and component design.',
      'Implemented form handling, real-time calculations, and an intuitive UI that makes splitting bills as simple as drafting a letter to the editor.',
      'The application showcases React fundamentals: hooks, conditional rendering, and component composition in a practical, real-world scenario.',
    ],
    tech: ['React', 'JavaScript', 'State Management', 'Responsive Design', 'React Hooks'],
    github: 'https://github.com/saadsaeed9877-cloud/eat-n-split',
  },
  {
    name: 'Worldwise',
    kicker: 'TRAVEL DESK',
    headline: 'A Comprehensive Travel Tracking Application with Advanced React Patterns',
    standfirst:
      'Full-featured travel tracking app demonstrating React Router, Context API, and advanced state management patterns.',
    body: [
      'Built a sophisticated travel tracking platform using React Router for navigation and Context API for global state management, enabling users to log their travels and build a personal travel history.',
      'Implemented geolocation services, interactive maps, and a dynamic UI that responds to real-time user input — turning travel memories into structured data.',
      'Demonstrates advanced React patterns including custom hooks, context consumption, and component composition at scale.',
    ],
    tech: ['React', 'React Router', 'Context API', 'Geolocation', 'Advanced Patterns'],
    github: 'https://github.com/saadsaeed9877-cloud/worldwise',
  },
  {
    name: 'The Wild Oasis',
    kicker: 'PRODUCT DESK',
    headline: 'A Luxury Hotel Management Application: Professional React Development',
    standfirst:
      'Enterprise-grade hotel management system demonstrating React Query, authentication, and advanced development patterns.',
    body: [
      'Designed and developed a comprehensive hotel management application for The Wild Oasis luxury resort, featuring staff dashboards, booking systems, and real-time data synchronization.',
      'Integrated React Query for advanced server-state management, implemented robust authentication systems, and built a responsive interface that handles complex business logic.',
      'The application demonstrates production-ready patterns: error handling, loading states, optimistic updates, and sophisticated component architecture.',
    ],
    tech: ['React', 'React Query', 'Authentication', 'Advanced Patterns', 'Dashboard UI'],
    github: 'https://github.com/saadsaeed9877-cloud/the-wild-oasis',
  },
  {
    name: 'The Wild Oasis Website',
    kicker: 'WEBSITE DESK',
    headline: 'Next.js Hotel Website: App Router, Server Components & Actions',
    standfirst:
      'Modern hotel website built with Next.js App Router, showcasing server-side rendering, server components, and server actions.',
    body: [
      'Built a modern, high-performance website for The Wild Oasis hotel using Next.js App Router and React Server Components, delivering dynamic, content-driven pages optimized for search engines.',
      'Implemented Server Actions for form handling, integrated CMS data, and leveraged Next.js features for automatic code splitting and image optimization.',
      'The website demonstrates next-generation React development: seamless client-server integration, efficient data fetching, and production-ready performance.',
    ],
    tech: ['Next.js', 'React Server Components', 'Server Actions', 'App Router', 'Performance'],
    github: 'https://github.com/saadsaeed9877-cloud/the-wild-oasis-website',
  },
  {
    name: 'Manual SSR',
    kicker: 'RESEARCH DESK',
    headline: 'Demystifying Server-Side Rendering: From Scratch in React',
    standfirst:
      'Deep-dive implementation of manual server-side rendering in React, exploring the fundamentals of SSR without framework abstractions.',
    body: [
      'Implemented server-side rendering from scratch in React, demonstrating how modern frameworks like Next.js work under the hood.',
      'Covered data fetching on the server, hydration on the client, and the careful choreography required to serve pre-rendered HTML efficiently.',
      'This educational project illuminates the technical foundations of SSR and provides a research-backed understanding of how server-driven React applications are built.',
    ],
    tech: ['React', 'Node.js', 'Server-Side Rendering', 'JavaScript', 'Web Architecture'],
    github: 'https://github.com/saadsaeed9877-cloud/manual-ssr',
  },
]

export const education = {
  degree: 'Bachelor in Software Engineering',
  period: 'September 2021 — June 2025',
  points: [
    'Developed strong foundations in systems thinking, project planning, and process improvement alongside core software modules.',
    'Final Year Project: Bug Report Severity Prediction — led a research-based project analyzing and automating software issue prioritization through data-driven methods.',
  ],
  coursework: [
    'Project Management',
    'Software Process Models',
    'Communication Skills',
    'Software Quality Assurance',
  ],
}

export const certifications = [
  'Complete JavaScript Course 2025: From Zero to Expert',
  'Ultimate React Course 2025: React, Next.js, Redux & More',
  'Node.js, Express, MongoDB & More: The Complete Bootcamp',
]

export type Certificate = {
  title: string
  file: string
  issuer: string
}

export const certificates: Certificate[] = [
  {
    title: 'Complete JavaScript Course 2025: From Zero to Expert',
    file: '/certificates/Javascript-Udemy-Bootcamp.pdf',
    issuer: 'Udemy',
  },
  {
    title: 'Ultimate React Course 2025: React, Next.js, Redux & More',
    file: '/certificates/React-Next-Bootcamp-Certificate.pdf',
    issuer: 'Udemy',
  },
  {
    title: 'Node.js, Express, MongoDB & More: The Complete Bootcamp',
    file: '/certificates/Nodejs-Bootcamp-Certificate.pdf',
    issuer: 'Udemy',
  },
]

export const skills = [
  { name: 'MERN Stack', note: 'MongoDB, Express, React, Node — full circuit' },
  { name: 'RESTful API Development', note: 'Design, integration & documentation' },
  { name: 'Git & GitHub', note: 'Version control & collaborative workflows' },
  { name: 'Responsive UI', note: 'React & Tailwind CSS, mobile-first' },
  { name: 'MongoDB Data Modeling', note: 'Schemas, relations & aggregation' },
  { name: 'Agile / Scrum', note: 'Sprints, stand-ups & task management' },
]

export const navSections = [
  { path: '/', label: 'Front Page' },
  { path: '/experience', label: 'Career' },
  { path: '/projects', label: 'Projects' },
  { path: '/education', label: 'Education & Skills' },
  { path: '/contact', label: 'Letters' },
]
