export type PortfolioDocument = {
  id: string;
  title: string;
  displayTitle: string;
  category: string;
  folder: string;
  year?: string;
  issuer?: string;
  description: string;
  image: string;
  type: "award" | "certificate" | "recognition" | "participation";
  featured?: boolean;
};

export const achievements: PortfolioDocument[] = [
  // ACADEMIC HONORS & AWARDS
  {
    id: "academic-honor-1-22-23",
    title: "Academic Honor 1st Semester 2022-2023",
    displayTitle: "Academic Honor — 1st Semester",
    category: "Academic Honors",
    folder: "ACADEMIC HONORS & AWARDS",
    year: "2022–2023",
    issuer: "DNSC",
    description: "Recognized for outstanding academic performance during the semester.",
    image: "/AWARDS %26 CERTIFICATIONS/ACADEMIC HONORS %26 AWARDS/Academic Honor 1st Semester 2022-2023.png",
    type: "award"
  },
  {
    id: "academic-honor-1-23-24",
    title: "Academic Honor 1st Semester 2023-2024",
    displayTitle: "Academic Honor — 1st Semester",
    category: "Academic Honors",
    folder: "ACADEMIC HONORS & AWARDS",
    year: "2023–2024",
    issuer: "DNSC",
    description: "Recognized for outstanding academic performance during the semester.",
    image: "/AWARDS %26 CERTIFICATIONS/ACADEMIC HONORS %26 AWARDS/Academic Honor 1st Semester 2023-2024.png",
    type: "award"
  },
  {
    id: "academic-honor-1-24-25",
    title: "Academic Honor 1st Semester 2024-2025",
    displayTitle: "Academic Honor — 1st Semester",
    category: "Academic Honors",
    folder: "ACADEMIC HONORS & AWARDS",
    year: "2024–2025",
    issuer: "DNSC",
    description: "Recognized for outstanding academic performance during the semester.",
    image: "/AWARDS %26 CERTIFICATIONS/ACADEMIC HONORS %26 AWARDS/Academic Honor 1st Semester 2024-2025.png",
    type: "award",
    featured: true
  },
  {
    id: "academic-honor-1-25-26",
    title: "Academic Honor 1st Semester 2025-2026",
    displayTitle: "Academic Honor — 1st Semester",
    category: "Academic Honors",
    folder: "ACADEMIC HONORS & AWARDS",
    year: "2025–2026",
    issuer: "DNSC",
    description: "Recognized for outstanding academic performance during the semester.",
    image: "/AWARDS %26 CERTIFICATIONS/ACADEMIC HONORS %26 AWARDS/Academic Honor 1st Semester 2025-2026.png",
    type: "award",
    featured: true
  },
  {
    id: "academic-honor-2-22-23",
    title: "Academic Honor 2nd Semester 2022-2023",
    displayTitle: "Academic Honor — 2nd Semester",
    category: "Academic Honors",
    folder: "ACADEMIC HONORS & AWARDS",
    year: "2022–2023",
    issuer: "DNSC",
    description: "Recognized for outstanding academic performance during the semester.",
    image: "/AWARDS %26 CERTIFICATIONS/ACADEMIC HONORS %26 AWARDS/Academic Honor 2nd Semester 2022-2023.png",
    type: "award"
  },
  {
    id: "academic-honor-2-23-24",
    title: "Academic Honor 2nd Semester 2023-2024",
    displayTitle: "Academic Honor — 2nd Semester",
    category: "Academic Honors",
    folder: "ACADEMIC HONORS & AWARDS",
    year: "2023–2024",
    issuer: "DNSC",
    description: "Recognized for outstanding academic performance during the semester.",
    image: "/AWARDS %26 CERTIFICATIONS/ACADEMIC HONORS %26 AWARDS/Academic Honor 2nd Semester 2023-2024.png",
    type: "award"
  },
  {
    id: "academic-honor-2-24-25",
    title: "Academic Honor 2nd Semester 2024-2025",
    displayTitle: "Academic Honor — 2nd Semester",
    category: "Academic Honors",
    folder: "ACADEMIC HONORS & AWARDS",
    year: "2024–2025",
    issuer: "DNSC",
    description: "Recognized for outstanding academic performance during the semester.",
    image: "/AWARDS %26 CERTIFICATIONS/ACADEMIC HONORS %26 AWARDS/Academic Honor 2nd Semester 2024-2025.png",
    type: "award"
  },

  // CAPSTONE & OJT
  {
    id: "capstone-best",
    title: "BEST CAPSTONE PROJECT",
    displayTitle: "Best Capstone Project",
    category: "Capstone",
    folder: "CAPSTONE & OJT",
    description: "Recognized for excellence in capstone development and project innovation.",
    image: "/AWARDS %26 CERTIFICATIONS/CAPSTONE %26 OJT/BEST CAPSTONE PROJECT.jpg",
    type: "award",
    featured: true
  },
  {
    id: "capstone-poster",
    title: "BEST POSTER PRESENTATION",
    displayTitle: "Best Poster Presentation",
    category: "Capstone",
    folder: "CAPSTONE & OJT",
    description: "Recognized for excellence in presentation design and clarity.",
    image: "/AWARDS %26 CERTIFICATIONS/CAPSTONE %26 OJT/BEST POSTER PRESENTATION.jpg",
    type: "award"
  },
  {
    id: "capstone-exhibit",
    title: "BEST PROJECT EXHIBIT DESIGN",
    displayTitle: "Best Project Exhibit Design",
    category: "Capstone",
    folder: "CAPSTONE & OJT",
    description: "Recognized for excellence in exhibit design during the project showcase.",
    image: "/AWARDS %26 CERTIFICATIONS/CAPSTONE %26 OJT/BEST PROJECT EXHIBIT DESIGN.jpg",
    type: "award"
  },
  {
    id: "capstone-binhi",
    title: "BINHI Award",
    displayTitle: "BINHI Award",
    category: "Capstone",
    folder: "CAPSTONE & OJT",
    description: "Special recognition award for outstanding innovation and development.",
    image: "/AWARDS %26 CERTIFICATIONS/CAPSTONE %26 OJT/BINHI Award.jpg",
    type: "award"
  },

  // COMPETITIONS
  {
    id: "comp-sundayag-pitching",
    title: "2nd Place - Start up Sundayag Pitching Competition",
    displayTitle: "2nd Place: Startup Pitching",
    category: "Competitions",
    folder: "COMPETITIONS",
    issuer: "Startup Sundayag",
    description: "Awarded 2nd Place in the Startup Sundayag Pitching Competition.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/2nd Place - Start up Sundayag Pitching Competation.jpg",
    type: "award",
    featured: true
  },
  {
    id: "comp-sundayag-web",
    title: "2nd Place - Start up Sundayag Website Category",
    displayTitle: "2nd Place: Website Category",
    category: "Competitions",
    folder: "COMPETITIONS",
    issuer: "Startup Sundayag",
    description: "Awarded 2nd Place for exceptional web development in the Startup Sundayag competition.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/2nd Place - Start up Sundayag Website Category.jpg",
    type: "award"
  },
  {
    id: "comp-sundayag-brochure",
    title: "3rd Place - Start up Sundayag Brochure Category",
    displayTitle: "3rd Place: Brochure Category",
    category: "Competitions",
    folder: "COMPETITIONS",
    issuer: "Startup Sundayag",
    description: "Awarded 3rd Place for outstanding design in the Brochure Category.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/3rd Place - Start up Sundayag Brochure Category.jpg",
    type: "award"
  },
  {
    id: "comp-pitching-3rd",
    title: "3rd Place Pitching Competition",
    displayTitle: "3rd Place: Pitching Competition",
    category: "Competitions",
    folder: "COMPETITIONS",
    description: "Secured 3rd Place for excellent startup pitching presentation.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/3rd Place Pitching Competation.png",
    type: "award"
  },
  {
    id: "comp-asean-hackathon",
    title: "ASEAN AI HACKATHON 2026",
    displayTitle: "ASEAN AI Hackathon Finalist",
    category: "Competitions",
    folder: "COMPETITIONS",
    year: "2026",
    issuer: "ASEAN",
    description: "Recognized as a competitive participant in the regional ASEAN AI Hackathon.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/ASEAN AI HACKATHON 2026.png",
    type: "award",
    featured: true
  },
  {
    id: "comp-uiux",
    title: "Commendable UI and UX Designer - Start up Sundayag",
    displayTitle: "Commendable UI/UX Designer",
    category: "Competitions",
    folder: "COMPETITIONS",
    issuer: "Startup Sundayag",
    description: "Special recognition for highly commendable user interface and experience design.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Commendable UI and UX Designer - Start up Sundayag.jpg",
    type: "recognition"
  },
  {
    id: "comp-cbms-recog",
    title: "Regional CBMS - Certificate of Recognition",
    displayTitle: "Regional CBMS Recognition",
    category: "Competitions",
    folder: "COMPETITIONS",
    issuer: "CBMS",
    description: "Recognized for valuable contribution to the Regional CBMS initiatives.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Regional CBMS - Certificate of Recognition.jpg",
    type: "recognition"
  },
  {
    id: "comp-cbms-3rd",
    title: "Regional CBMS 3rd Place",
    displayTitle: "3rd Place: Regional CBMS",
    category: "Competitions",
    folder: "COMPETITIONS",
    issuer: "CBMS",
    description: "Awarded 3rd Place in the Regional CBMS competition.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Regional CBMS 3rd Place.jpg",
    type: "award"
  },
  {
    id: "comp-startup-medal",
    title: "Regional Finals Startup Pitching - 2nd Runner Up Medal",
    displayTitle: "2nd Runner Up Medal: Regional Pitching",
    category: "Competitions",
    folder: "COMPETITIONS",
    description: "Medalist for 2nd Runner Up in the Regional Finals Startup Pitching.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Regional Finals Start up Pirching - 2nd Runner Up Medal.jpg",
    type: "award"
  },
  {
    id: "comp-startup-2nd-runner",
    title: "Regional Finals Startup Pitching - 2nd Runner Up",
    displayTitle: "2nd Runner Up: Regional Pitching",
    category: "Competitions",
    folder: "COMPETITIONS",
    description: "Awarded 2nd Runner Up in the Regional Finals Startup Pitching.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Regional Finals Start up Pirching - 2nd Runner Up.jpg",
    type: "award"
  },
  {
    id: "comp-startup-recog",
    title: "Regional Finals Startup Pitching - Certificate of Recognition",
    displayTitle: "Recognition: Regional Pitching",
    category: "Competitions",
    folder: "COMPETITIONS",
    description: "Recognized for outstanding presentation in the Regional Finals Startup Pitching.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Regional Finals Start up Pirching - Certificate of Recognation.jpg",
    type: "recognition"
  },

  // LEADERSHIP
  {
    id: "lead-commendation",
    title: "Certificate of Commendation",
    displayTitle: "Leadership Commendation",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Special commendation for exemplary leadership and service.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Commendation.jpg",
    type: "recognition"
  },
  {
    id: "lead-recog-1",
    title: "Certificate of Recognition 1",
    displayTitle: "Leadership Recognition",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Recognized for dedication and outstanding leadership.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Recognation 1.jpg",
    type: "recognition"
  },
  {
    id: "lead-recog-2",
    title: "Certificate of Recognition 2",
    displayTitle: "Leadership Recognition",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Recognized for dedication and outstanding leadership.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Recognation 2.jpg",
    type: "recognition"
  },
  {
    id: "lead-excel-24",
    title: "Leadership Excellence Award 2024 - 2025",
    displayTitle: "Leadership Excellence Award",
    category: "Leadership",
    folder: "LEADERSHIP",
    year: "2024–2025",
    description: "Awarded for exceptional leadership and impactful organizational contributions.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Leadership Excellence Award 2024 - 2025.jpg",
    type: "award",
    featured: true
  },
  {
    id: "lead-excel-25",
    title: "Leadership Excellence Award 2025 - 2026",
    displayTitle: "Leadership Excellence Award",
    category: "Leadership",
    folder: "LEADERSHIP",
    year: "2025–2026",
    description: "Awarded for exceptional leadership and impactful organizational contributions.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Leadership Excellence Award 2025 - 2026.jpg",
    type: "award",
    featured: true
  },
  {
    id: "lead-legacys",
    title: "LEGACYS Award",
    displayTitle: "LEGACYS Award",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Prestigious recognition for leaving a lasting positive legacy as a student leader.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/LEGACYS Award.png",
    type: "award",
    featured: true
  },

  // SYSTEMS DEVELOPED
  {
    id: "sys-appreciation-1",
    title: "Systems Developed Appreciation 1",
    displayTitle: "Certificate of Appreciation",
    category: "Systems Developed",
    folder: "SYSTEMS DEVELOPED",
    description: "Certificate of appreciation received for contributing to the development and implementation of digital systems.",
    image: "/AWARDS %26 CERTIFICATIONS/SYSTEMS DEVELOPED/Certificate of Appreciation 1.jpg",
    type: "recognition"
  },
  {
    id: "sys-appreciation-2",
    title: "Systems Developed Appreciation 2",
    displayTitle: "Certificate of Appreciation",
    category: "Systems Developed",
    folder: "SYSTEMS DEVELOPED",
    description: "Certificate of appreciation received for contributing to the development and implementation of digital systems.",
    image: "/AWARDS %26 CERTIFICATIONS/SYSTEMS DEVELOPED/Certificate of Appreciation 2.jpg",
    type: "recognition"
  },
  {
    id: "sys-appreciation-3",
    title: "Systems Developed Appreciation 3",
    displayTitle: "Certificate of Appreciation",
    category: "Systems Developed",
    folder: "SYSTEMS DEVELOPED",
    description: "Certificate of appreciation received for contributing to the development and implementation of digital systems.",
    image: "/AWARDS %26 CERTIFICATIONS/SYSTEMS DEVELOPED/Certificate of Appreciation 3.jpg",
    type: "recognition"
  },
  {
    id: "sys-appreciation-4",
    title: "Systems Developed Appreciation 4",
    displayTitle: "Certificate of Appreciation",
    category: "Systems Developed",
    folder: "SYSTEMS DEVELOPED",
    description: "Certificate of appreciation received for contributing to the development and implementation of digital systems.",
    image: "/AWARDS %26 CERTIFICATIONS/SYSTEMS DEVELOPED/Certificate of Appreciation 4.jpg",
    type: "recognition"
  },
  {
    id: "sys-appreciation-5",
    title: "Systems Developed Appreciation 5",
    displayTitle: "Certificate of Appreciation",
    category: "Systems Developed",
    folder: "SYSTEMS DEVELOPED",
    description: "Certificate of appreciation received for contributing to the development and implementation of digital systems.",
    image: "/AWARDS %26 CERTIFICATIONS/SYSTEMS DEVELOPED/Certificate of Appreciation 5.jpg",
    type: "recognition"
  }
];

export const certifications: PortfolioDocument[] = [
  // CAPSTONE & OJT
  {
    id: "cert-capstone-comp",
    title: "Capstone Certificate of Completion",
    displayTitle: "Certificate of Completion",
    category: "Capstone & OJT",
    folder: "CAPSTONE & OJT",
    description: "Certificate earned for successful completion of capstone project requirements.",
    image: "/AWARDS %26 CERTIFICATIONS/CAPSTONE %26 OJT/Certificate of Completion.jpg",
    type: "certificate"
  },
  {
    id: "cert-capstone-part",
    title: "Capstone Certificate of Participation",
    displayTitle: "Certificate of Participation",
    category: "Capstone & OJT",
    folder: "CAPSTONE & OJT",
    description: "Certificate earned for active participation in the capstone exhibition.",
    image: "/AWARDS %26 CERTIFICATIONS/CAPSTONE %26 OJT/Certificate of Participation.jpg",
    type: "participation"
  },
  {
    id: "cert-ojt-comp",
    title: "OJT Certificate of Completion",
    displayTitle: "OJT Completion",
    category: "Capstone & OJT",
    folder: "CAPSTONE & OJT",
    description: "Certificate earned for successful completion of industry On-the-Job Training hours.",
    image: "/AWARDS %26 CERTIFICATIONS/CAPSTONE %26 OJT/OJT - Certificate of Completion.jpg",
    type: "certificate",
    featured: true
  },

  // COMPETITIONS
  {
    id: "cert-asean-part",
    title: "ASEAN AI HACKATHON 2026 Participation",
    displayTitle: "Participation: ASEAN AI Hackathon",
    category: "Competitions",
    folder: "COMPETITIONS",
    year: "2026",
    issuer: "ASEAN",
    description: "Certificate of participation in the prestigious ASEAN AI Hackathon.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Certificate of Participation - ASEAN AI HACKATHON 2026.png",
    type: "participation"
  },
  {
    id: "cert-quizbee-part",
    title: "CS and IT Quiz Bee Participation",
    displayTitle: "Participation: CS & IT Quiz Bee",
    category: "Competitions",
    folder: "COMPETITIONS",
    description: "Certificate of participation in the collegiate computer science and IT quiz bee.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Certificate or Participation - CS and IT Quiz Bee Competation.jpg",
    type: "participation"
  },
  {
    id: "cert-pitching-part",
    title: "Regional Pitching Competition Participation",
    displayTitle: "Participation: Regional Pitching",
    category: "Competitions",
    folder: "COMPETITIONS",
    description: "Certificate of participation in the regional startup pitching competition.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Certificate or Participation - Regional Pitching Competation.jpg",
    type: "participation"
  },
  {
    id: "cert-cbms-part",
    title: "Regional CBMS Participation",
    displayTitle: "Participation: Regional CBMS",
    category: "Competitions",
    folder: "COMPETITIONS",
    issuer: "CBMS",
    description: "Certificate of participation for the Regional CBMS initiative.",
    image: "/AWARDS %26 CERTIFICATIONS/COMPETITIONS/Regional CBMS - Certificate of Participation.jpg",
    type: "participation"
  },

  // LEADERSHIP
  {
    id: "cert-lead-appr-1",
    title: "Leadership Appreciation 1",
    displayTitle: "Certificate of Appreciation",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Appreciation certificate for dedicated leadership service and organizational support.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Appreciation 1.jpg",
    type: "certificate"
  },
  {
    id: "cert-lead-appr-2",
    title: "Leadership Appreciation 2",
    displayTitle: "Certificate of Appreciation",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Appreciation certificate for dedicated leadership service and organizational support.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Appreciation 2.jpg",
    type: "certificate"
  },
  {
    id: "cert-lead-appr-3",
    title: "Leadership Appreciation 3",
    displayTitle: "Certificate of Appreciation",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Appreciation certificate for dedicated leadership service and organizational support.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Appreciation 3.jpg",
    type: "certificate"
  },
  {
    id: "cert-lead-appr-4",
    title: "Leadership Appreciation 4",
    displayTitle: "Certificate of Appreciation",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Appreciation certificate for dedicated leadership service and organizational support.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Appreciation 4.jpg",
    type: "certificate"
  },
  {
    id: "cert-lead-appr-5",
    title: "Leadership Appreciation 5",
    displayTitle: "Certificate of Appreciation",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Appreciation certificate for dedicated leadership service and organizational support.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Appreciation 5.jpg",
    type: "certificate"
  },
  {
    id: "cert-lead-part",
    title: "Leadership Participation",
    displayTitle: "Certificate of Participation",
    category: "Leadership",
    folder: "LEADERSHIP",
    description: "Certificate of participation in leadership training and team building activities.",
    image: "/AWARDS %26 CERTIFICATIONS/LEADERSHIP/Certificate of Participation.jpg",
    type: "participation"
  },

  // PYTHON CERT
  {
    id: "cert-python-1",
    title: "Python Essentials 1",
    displayTitle: "Python Essentials 1",
    category: "Python",
    folder: "PYTHON CERT",
    issuer: "Cisco Networking Academy",
    description: "Completed Python Essentials training focused on programming fundamentals and problem-solving.",
    image: "/AWARDS %26 CERTIFICATIONS/PYTHON CERT/Python Essentials 1.png",
    type: "certificate",
    featured: true
  },
  {
    id: "cert-python",
    title: "Python Essentials",
    displayTitle: "Python Essentials",
    category: "Python",
    folder: "PYTHON CERT",
    issuer: "Cisco Networking Academy",
    description: "Certificate earned for completing Python programming coursework and technical learning activities.",
    image: "/AWARDS %26 CERTIFICATIONS/PYTHON CERT/Python Essentials.png",
    type: "certificate",
    featured: true
  }
];

export type PortfolioProject = {
  id: string;
  title: string;
  shortTitle?: string;
  category: string;
  description: string;
  technologies: string[];
  outcome: string;
  folder: string;
  coverImage: string;
  screenshots: string[];
  documents?: string[];
  featured?: boolean;
};

export const projects: PortfolioProject[] = [
  {
    id: "aquasnap",
    title: "AquaSnap",
    category: "Innovation / Research Project",
    description: "AquaSnap is a digital solution designed to support water-related monitoring, reporting, or analysis through an accessible and user-friendly system interface.",
    technologies: ["Web Development", "UI/UX Design", "Information System", "Database Management"],
    outcome: "Improved digital documentation, monitoring, and user interaction through a clean and structured system interface.",
    folder: "AQUASNAP",
    coverImage: "/PROJECTS %26 RESEARCH/AQUASNAP/Screenshot 2026-06-14 164211.png",
    screenshots: [
      "/PROJECTS %26 RESEARCH/AQUASNAP/Screenshot 2026-06-14 164211.png",
      "/PROJECTS %26 RESEARCH/AQUASNAP/Screenshot 2026-06-14 164232.png",
      "/PROJECTS %26 RESEARCH/AQUASNAP/Screenshot 2026-06-14 164257.png",
      "/PROJECTS %26 RESEARCH/AQUASNAP/Screenshot 2026-06-14 164315.png",
      "/PROJECTS %26 RESEARCH/AQUASNAP/Screenshot 2026-06-14 164343.png",
      "/PROJECTS %26 RESEARCH/AQUASNAP/Screenshot 2026-06-14 164357.png"
    ],
    featured: true
  },
  {
    id: "attendance-tracker",
    title: "Attendance Tracker System",
    category: "Management System",
    description: "A system designed to help track attendance records, manage participant information, and support post-event evaluation processes for organized activities and events.",
    technologies: ["Web Development", "Database Management", "Forms", "Event Management"],
    outcome: "Improved attendance monitoring and simplified event documentation and evaluation.",
    folder: "ATTENDANCE TRACKER SYSTEM",
    coverImage: "/PROJECTS %26 RESEARCH/ATTENDANCE TRACKER SYSTEM/1fb7205a-75a2-470d-99dc-8484b3ba1816.jpg",
    screenshots: [
      "/PROJECTS %26 RESEARCH/ATTENDANCE TRACKER SYSTEM/1fb7205a-75a2-470d-99dc-8484b3ba1816.jpg",
      "/PROJECTS %26 RESEARCH/ATTENDANCE TRACKER SYSTEM/27d808fa-1df4-493e-a6b1-d1cb86c8136d.jpg",
      "/PROJECTS %26 RESEARCH/ATTENDANCE TRACKER SYSTEM/a7299637-547b-4105-b518-37983e4a3e55.jpg",
      "/PROJECTS %26 RESEARCH/ATTENDANCE TRACKER SYSTEM/Copy of POST-EVENT EVALUATION FOR PANAGTAGBO 2024.png",
      "/PROJECTS %26 RESEARCH/ATTENDANCE TRACKER SYSTEM/dbbe5a89-57a6-442e-8a24-14621df73712.jpg",
      "/PROJECTS %26 RESEARCH/ATTENDANCE TRACKER SYSTEM/dc354e74-9c18-4c80-bb4d-d99d81fb68d5.jpg"
    ]
  },
  {
    id: "disaster-alert",
    title: "Disaster Alert & Response Management Website",
    category: "Web-Based Management System",
    description: "A disaster alert and response management website designed to support emergency communication, incident reporting, information dissemination, and disaster preparedness coordination.",
    technologies: ["Web Development", "UI/UX Design", "Information System", "Emergency Response System"],
    outcome: "Supported faster information access, organized disaster response workflows, and improved community preparedness.",
    folder: "DISASTER ALERT & RESPONSE MANAGEMENT WEBSITE",
    coverImage: "/PROJECTS %26 RESEARCH/DISASTER ALERT %26 RESPONSE MANAGEMENT WEBSITE/Screenshot 2026-06-14 165101.png",
    screenshots: [
      "/PROJECTS %26 RESEARCH/DISASTER ALERT %26 RESPONSE MANAGEMENT WEBSITE/Screenshot 2026-06-14 165101.png",
      "/PROJECTS %26 RESEARCH/DISASTER ALERT %26 RESPONSE MANAGEMENT WEBSITE/Screenshot 2026-06-14 165133.png",
      "/PROJECTS %26 RESEARCH/DISASTER ALERT %26 RESPONSE MANAGEMENT WEBSITE/Screenshot 2026-06-14 165154.png",
      "/PROJECTS %26 RESEARCH/DISASTER ALERT %26 RESPONSE MANAGEMENT WEBSITE/Screenshot 2026-06-14 165209.png",
      "/PROJECTS %26 RESEARCH/DISASTER ALERT %26 RESPONSE MANAGEMENT WEBSITE/Screenshot 2026-06-14 165226.png"
    ],
    featured: true
  },
  {
    id: "fsg-website",
    title: "FSG Website",
    category: "Organization Website",
    description: "A professional website created for the Federal Student Government to present organizational information, announcements, initiatives, and student-centered services in a clean digital platform.",
    technologies: ["Web Development", "UI/UX Design", "Responsive Design", "Content Management"],
    outcome: "Improved online visibility, communication, and accessibility of student government information.",
    folder: "FSG WEBSITE",
    coverImage: "/PROJECTS %26 RESEARCH/FSG WEBSITE/Screenshot 2026-05-21 234849.png",
    screenshots: [
      "/PROJECTS %26 RESEARCH/FSG WEBSITE/Screenshot 2026-05-21 234849.png",
      "/PROJECTS %26 RESEARCH/FSG WEBSITE/Screenshot 2026-05-21 235125.png",
      "/PROJECTS %26 RESEARCH/FSG WEBSITE/Screenshot 2026-05-21 235208.png",
      "/PROJECTS %26 RESEARCH/FSG WEBSITE/Screenshot 2026-05-21 235304.png",
      "/PROJECTS %26 RESEARCH/FSG WEBSITE/Screenshot 2026-05-21 235350.png",
      "/PROJECTS %26 RESEARCH/FSG WEBSITE/Screenshot 2026-05-21 235601.png"
    ]
  },
  {
    id: "isdtp-published",
    title: "Information Systems Development and Technology Plan",
    shortTitle: "ISDTP Published",
    category: "Research / Published Output",
    description: "A published Information Systems Development and Technology Plan focused on analyzing organizational needs and recommending technology-based solutions for digital transformation and process improvement.",
    technologies: ["Research", "Systems Analysis", "Information Systems Planning", "Documentation"],
    outcome: "Produced a structured technology plan that supports strategic information systems development and digital innovation.",
    folder: "ISDTP PUBLISHED",
    coverImage: "/PROJECTS %26 RESEARCH/ISDTP PUBLISHED/Screenshot 2026-06-10 012059.png",
    screenshots: [
      "/PROJECTS %26 RESEARCH/ISDTP PUBLISHED/Screenshot 2026-06-10 012059.png",
      "/PROJECTS %26 RESEARCH/ISDTP PUBLISHED/Screenshot 2026-06-10 012146.png"
    ],
    featured: true
  },
  {
    id: "locker-rental",
    title: "Locker Rental Management System",
    category: "Management System",
    description: "A locker rental management system designed to help manage locker availability, rental records, user information, and transaction tracking in an organized digital platform.",
    technologies: ["Web Development", "Database Management", "System Design", "UI/UX Design"],
    outcome: "Improved tracking of locker usage, rental status, and administrative records.",
    folder: "LOCKER RENTAL MANAGEMENT SYSTEM",
    coverImage: "/PROJECTS %26 RESEARCH/LOCKER RENTAL MANAGEMENT SYSTEM/462561112_1604155363519499_18643154311172880_n.jpg",
    screenshots: [
      "/PROJECTS %26 RESEARCH/LOCKER RENTAL MANAGEMENT SYSTEM/462561112_1604155363519499_18643154311172880_n.jpg",
      "/PROJECTS %26 RESEARCH/LOCKER RENTAL MANAGEMENT SYSTEM/462568185_863694972502788_4742674293497248012_n.jpg",
      "/PROJECTS %26 RESEARCH/LOCKER RENTAL MANAGEMENT SYSTEM/462568869_1280113273183468_6445789504608876318_n.jpg",
      "/PROJECTS %26 RESEARCH/LOCKER RENTAL MANAGEMENT SYSTEM/462571770_3536022356696058_4444162508797093987_n.jpg"
    ]
  }
];

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  category?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    id: "gallery-1",
    src: "/Gallery/1fb7205a-75a2-470d-99dc-8484b3ba1816.jpg",
    alt: "Gallery photo 1",
    title: "Event Documentation",
    category: "Event Photo"
  },
  {
    id: "gallery-2",
    src: "/Gallery/27d808fa-1df4-493e-a6b1-d1cb86c8136d.jpg",
    alt: "Gallery photo 2",
    title: "Event Highlights",
    category: "Event Photo"
  },
  {
    id: "gallery-3",
    src: "/Gallery/462568185_863694972502788_4742674293497248012_n.jpg",
    alt: "Gallery photo 3",
    title: "Project Showcase",
    category: "Project Photo"
  },
  {
    id: "gallery-4",
    src: "/Gallery/462568869_1280113273183468_6445789504608876318_n.jpg",
    alt: "Gallery photo 4",
    title: "Project Highlights",
    category: "Project Photo"
  },
  {
    id: "gallery-5",
    src: "/Gallery/462571770_3536022356696058_4444162508797093987_n.jpg",
    alt: "Gallery photo 5",
    title: "System Showcase",
    category: "Project Photo"
  },
  {
    id: "gallery-6",
    src: "/Gallery/dbbe5a89-57a6-442e-8a24-14621df73712.jpg",
    alt: "Gallery photo 6",
    title: "Organization Activity",
    category: "Organization Photo"
  },
  {
    id: "gallery-7",
    src: "/Gallery/dc354e74-9c18-4c80-bb4d-d99d81fb68d5.jpg",
    alt: "Gallery photo 7",
    title: "Documentation Snapshot",
    category: "Documentation"
  }
];
