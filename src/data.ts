export const NAME = 'Stefan Luciano Kencana'
export const EMAIL = 'lkencana06@gmail.com'
export const GITHUB = 'github.com/Krozlov'
export const LINKEDIN = 'linkedin.com/in/stefan-luciano'

export const skills = [
  { name: 'Full-Stack Development', tag: 'Next.js, Node.js, TypeScript, Tailwind', pct: 90 },
  { name: 'Databases & Backend', tag: 'PostgreSQL, Firebase, API design', pct: 85 },
  { name: 'Systems & Languages', tag: 'Python, Java, C, C++', pct: 80 },
  { name: 'Security & Networking', tag: 'Ethical hacking, network forensics coursework', pct: 68 },
  { name: 'Mobile Development', tag: 'Flutter', pct: 65 },
  { name: 'Tooling & Design', tag: 'Git, Figma', pct: 78 },
]

export const experience = [
  {
    hash: '#e4a21fc',
    date: 'Jan 2026, present',
    branch: 'activity',
    role: 'Technology Development Associate',
    org: 'Student X, Indonesia',
    bullets: [
      'Collaborated with a founding team to build the organization\'s first generation infrastructure, including the website, API, database, frontend, and backend.',
      'Connected students from 100+ universities across Indonesia with relevant companies, helping them secure internships and job opportunities.',
    ],
  },
  {
    hash: '#a1f9c3d',
    date: 'Sep 2025, Apr 2026',
    branch: 'main',
    role: 'Software Engineer (Contract Based)',
    org: 'Urban Link, Jakarta',
    bullets: [
      'Built a full stack website including database, API, frontend, backend, security, and hosting as part of a freelance engineering team for a startup client.',
      'Boosted the client\'s online visibility by 70% and increased sales by 40%.',
    ],
  },
  {
    hash: '#5c71b02',
    date: 'Jan 2025, present',
    branch: 'activity',
    role: 'Senayan Secretary',
    org: 'HIMTI, Informatics Engineering Student Association',
    bullets: [
      'Organizes events to increase technological awareness among students.',
      'Coordinates activities that help new students navigate college life and curriculum.',
    ],
  },
  {
    hash: '#7b2e881',
    date: 'Jun 2024, Jun 2025',
    branch: 'feature/backend-migration',
    role: 'Software Engineer Intern',
    org: 'PT Multi Indo Citra, Jakarta',
    bullets: [
      'Migrated the company\'s legacy MySQL database, in production since 2010, to PostgreSQL and revamped UI/UX for internal and external users, boosting operational efficiency by 60%.',
      'Built an automated system to sync data across online marketplace platforms, increasing sales by 50%.',
    ],
  },
  {
    hash: '#3d90aa1',
    date: 'Jun 2023, Jun 2024',
    branch: 'feature/ecommerce-sync',
    role: 'Internet and Technology Intern',
    org: 'Digital Niaga Indonesia, Tangerang',
    bullets: [
      'Synced inventory across TikTok, Tokopedia, and Shopee, managing data transfer from databases to e-commerce platforms, and hosted livestream sessions showcasing products.',
      'Drove sales by 12%, boosted brand visibility on marketplaces by 22%, and maintained customer satisfaction through accurate inventory and engaging livestream content.',
    ],
  },
]

export const projects = [
  {
    name: 'indopreter',
    status: 'active' as const,
    desc: 'A custom programming language with a Python-like syntax, featuring a hand-built interpreter and bytecode compiler, with a companion IDE that adds syntax highlighting, autocomplete, and AST visualization.',
    tags: ['Python', 'Language Design', 'IDE'],
    links: [{ label: 'source', href: 'https://github.com/Krozlov' }],
  },
  {
    name: 'studentx-platform',
    status: 'active' as const,
    desc: 'First generation infrastructure for Student X, a platform connecting students from 100+ universities across Indonesia with companies for internships and jobs. Built the website, API, database, frontend, and backend.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    links: [{ label: 'source', href: '#' }],
  },
  {
    name: 'marketplace-sync-engine',
    status: 'production' as const,
    desc: 'An automated system that syncs product and order data across online marketplace platforms, built during a software engineering internship. It increased sales by 50% for the platforms it served.',
    tags: ['PostgreSQL', 'Automation', 'Node.js'],
    links: [{ label: 'write up', href: '#' }],
  },
  {
    name: 'urban-link-client-site',
    status: 'production' as const,
    desc: 'A full stack website built end to end for a startup client as part of a freelance engineering team: database, API, frontend, backend, security, and hosting. It boosted the client\'s online visibility by 70%.',
    tags: ['Full Stack', 'Security', 'Hosting'],
    links: [{ label: 'write up', href: '#' }],
  },
]

export const navTabs = [
  { id: 'hero', label: 'whoami.sh' },
  { id: 'about', label: 'about.tsx' },
  { id: 'skills', label: 'skills.json' },
  { id: 'experience', label: 'experience.log' },
  { id: 'projects', label: 'projects/' },
  { id: 'contact', label: 'contact.sh' },
]
