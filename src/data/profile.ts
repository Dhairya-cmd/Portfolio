export const profile = {
  name: 'Dhairya Upadhyaya',
  title: 'IT Support Specialist & iOS Developer',
  citizenship: 'Canadian Citizen',
  email: 'dhairyaupadhyaya2@gmail.com',
  phone: '+91 81414 34121',
  linkedin: 'https://linkedin.com/in/dhairya-upadhyaya-4395aa197',
  linkedinLabel: 'linkedin.com/in/dhairya-upadhyaya-4395aa197',
  summary:
    'Results-driven IT Support Specialist and iOS Developer with hands-on experience in enterprise IT operations, technical troubleshooting, mobile application development, and end-user support. Skilled in Swift, UIKit, Firebase, REST API integration, and cross-platform technical environments. Experienced in configuring and supporting enterprise laptops, resolving software and hardware issues, and collaborating with cross-functional teams to deliver reliable technical solutions. Strong analytical and problem-solving abilities with a proven capability to adapt quickly in fast-paced environments. Open to remote, international, and hybrid technical opportunities.',
  heroLine: 'Enterprise IT support and iOS craftsmanship for reliable product teams.',
  heroSupport:
    'From service-desk operations to Swift/UIKit apps — troubleshooting, shipping, and collaborating across stacks.',
} as const

export const experience = [
  {
    role: 'IT Support Specialist',
    company: 'Dar Al-Handasah',
    period: 'September 2024 – May 2026',
    location: 'Pune',
    bullets: [
      'Prepared, configured, and allocated enterprise laptops and systems for organizational users.',
      'Resolved hardware, software, OS, and technical issues through structured troubleshooting processes.',
      'Managed IT service desk tickets and ensured timely issue resolution and end-user support.',
      'Provided installation, maintenance, and configuration support for operating systems and software applications.',
      'Collaborated with internal teams to maintain operational continuity and technical reliability.',
    ],
  },
  {
    role: 'iOS Developer',
    company: 'iMobile Designs',
    period: 'July 2023 – May 2024',
    location: 'Ahmedabad',
    bullets: [
      'Developed and maintained scalable iOS applications using Swift and UIKit.',
      'Integrated REST APIs and optimized application performance and UI responsiveness.',
      'Collaborated with backend and design teams to deliver intuitive user experiences.',
      'Participated in debugging, testing, and deployment activities across the application lifecycle.',
    ],
  },
  {
    role: 'JR. iOS Developer',
    company: 'Flitzen Technologies',
    period: 'February 2023 – July 2023',
    location: 'Rajkot',
    bullets: [
      'Contributed to the development and maintenance of mobile applications.',
      'Worked on the EMS RV e-commerce application featuring luxury product management.',
      'Implemented user profile and product browsing functionalities.',
    ],
  },
  {
    role: 'Android Application Development — Internship',
    company: 'IIT Bombay',
    period: 'May 2021 – June 2021',
    location: 'Remote',
    bullets: [
      'Developed Inventory Manager Android application for inventory and client management.',
      'Gained hands-on experience across design, development, testing, and deployment phases.',
      'Worked in a collaborative technical environment focused on innovative mobile solutions.',
    ],
  },
] as const

export const projects = [
  {
    name: 'DChat',
    subtitle: 'An iOS Chat Application',
    bullets: [
      'Developed a real-time messaging application supporting multimedia and location sharing.',
      'Integrated Firebase Realtime Database for real-time communication.',
      'Implemented authentication using Facebook and email login systems.',
      'Added dark theme support and optimized application responsiveness.',
    ],
    tags: ['Swift', 'UIKit', 'Firebase', 'iOS'],
  },
] as const

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Engineering',
    school: 'RK University',
    period: 'August 2020 – May 2023',
    location: 'India',
    detail: '7.75 CGPA',
  },
  {
    degree: 'Diploma in Computer Engineering',
    school: 'Darshan Institute of Engineering and Technology',
    period: 'August 2016 – August 2020',
    location: 'India',
    detail: '7.75 CGPA',
  },
] as const

export const achievements = [
  {
    title: 'Winner at Ideation March',
    period: 'March 2021',
    description:
      'Secured victory in an inter-university innovation competition, presenting a groundbreaking solution poised to catalyze positive societal transformation. Awarded first prize and 10,000 INR cash reward for pioneering an impactful and innovative approach to addressing pressing real-world challenges.',
  },
  {
    title: 'Certificate of completion in Intel OpenVINO Training',
    org: 'Intel',
    period: '2021',
    description:
      'Gained practical experience with Intel OpenVINO™ Toolkit involving AI workflow optimization, inference acceleration, and deployment of deep learning models for scalable intelligent applications.',
  },
] as const

export const skillGroups = [
  {
    label: 'Programming',
    items: ['Swift', 'JAVA', 'HTML', 'CSS', 'SQL'],
  },
  {
    label: 'Mobile',
    items: ['iOS Development', 'UIKit', 'API Integration', 'Firebase', 'Mobile App Lifecycle'],
  },
  {
    label: 'Backend & Tools',
    items: [
      'REST APIs',
      'Firebase Realtime Database',
      'Android Studio',
      'Xcode',
      'IntelliJ IDEA',
      'Visual Studio Code',
      'Postman',
    ],
  },
  {
    label: 'IT Support',
    items: [
      'Technical Troubleshooting',
      'Laptop Configuration',
      'OS Installation',
      'Ticketing Systems',
    ],
  },
  {
    label: 'Concepts',
    items: ['Debugging', 'UI Implementation', 'Code Compatibility Control'],
  },
  {
    label: 'AI & Soft Skills',
    items: [
      'AI Tools',
      'AI Agents',
      'Prompt Engineering',
      'Workflow Optimization',
      'Communication',
      'Leadership',
      'Problem Solving',
      'Team Collaboration',
      'Statistical Analysis',
      'Risk Assessment',
      'Project Management',
    ],
  },
] as const

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
] as const
