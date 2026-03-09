
import { Resource } from "@/hooks/useFavorites";
import { governmentJobResources } from "./governmentJobs";

export const educationResources: Resource[] = [
  {
    id: "edu-1",
    title: "Google Docs",
    description: "Create and edit documents online, for free. Work with others on shared projects, in real-time.",
    url: "https://docs.google.com",
    category: "Document Editing",
    isPaid: false
  },
  {
    id: "edu-2",
    title: "Canva",
    description: "Design presentations, social media graphics, and more with ready-made templates.",
    url: "https://www.canva.com",
    category: "Design",
    isPaid: false
  },
  {
    id: "edu-3",
    title: "Khan Academy",
    description: "Free world-class education for anyone, anywhere. Learn math, science, and more.",
    url: "https://www.khanacademy.org",
    category: "Learning",
    isPaid: false
  },
  {
    id: "edu-4",
    title: "Grammarly",
    description: "Compose clear, mistake-free writing that makes the right impression with grammar checking.",
    url: "https://www.grammarly.com",
    category: "Writing",
    isPaid: true
  },
  {
    id: "edu-5",
    title: "Quizlet",
    description: "Simple tools for learning anything. Create your own study materials or choose from millions created by other students.",
    url: "https://quizlet.com",
    category: "Study",
    isPaid: false
  },
  {
    id: "edu-6",
    title: "Coursera",
    description: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    url: "https://www.coursera.org",
    category: "Online Courses",
    isPaid: true
  },
  {
    id: "edu-7",
    title: "Microsoft Office 365",
    description: "Productivity suite that includes applications such as Word, Excel, PowerPoint, and OneNote.",
    url: "https://www.office.com",
    category: "Productivity",
    isPaid: true
  },
  {
    id: "edu-8",
    title: "Prezi",
    description: "Create moving, zooming presentations that engage audiences and make your message memorable.",
    url: "https://prezi.com",
    category: "Presentations",
    isPaid: true
  },
  // New resources
  {
    id: "edu-9",
    title: "edX",
    description: "Access 3,000+ courses from 140+ leading institutions including Harvard, MIT, and more.",
    url: "https://www.edx.org",
    category: "Online Courses",
    isPaid: true
  },
  {
    id: "edu-10",
    title: "Duolingo",
    description: "Learn languages for free through fun, bite-sized lessons that feel like playing a game.",
    url: "https://www.duolingo.com",
    category: "Language Learning",
    isPaid: false
  },
  {
    id: "edu-11",
    title: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases - perfect for students and teams.",
    url: "https://www.notion.so",
    category: "Productivity",
    isPaid: false
  },
  {
    id: "edu-12",
    title: "Wolfram Alpha",
    description: "Computational intelligence to provide expert-level answers using breakthrough algorithms.",
    url: "https://www.wolframalpha.com",
    category: "Research",
    isPaid: true
  },
  {
    id: "edu-13",
    title: "Google Scholar",
    description: "Search across many disciplines and sources: articles, theses, books, abstracts, and court opinions.",
    url: "https://scholar.google.com",
    category: "Research",
    isPaid: false
  },
  {
    id: "edu-14",
    title: "Mendeley",
    description: "Reference manager and academic social network that helps organize research and collaborate.",
    url: "https://www.mendeley.com",
    category: "Research",
    isPaid: true
  },
  {
    id: "edu-15",
    title: "Miro",
    description: "Online collaborative whiteboard platform that enables teams to work effectively together.",
    url: "https://miro.com",
    category: "Collaboration",
    isPaid: true
  },
  {
    id: "edu-16",
    title: "TED-Ed",
    description: "Educational videos featuring collaborations between educators and animators.",
    url: "https://ed.ted.com",
    category: "Learning",
    isPaid: false
  },
];

export const careerResources: Resource[] = [
  {
    id: "career-1",
    title: "LinkedIn",
    description: "Manage your professional identity, build your professional network, and apply for jobs.",
    url: "https://www.linkedin.com",
    category: "Networking",
    isPaid: false
  },
  {
    id: "career-2",
    title: "Indeed",
    description: "The #1 job site worldwide, with over 250 million unique visitors every month.",
    url: "https://www.indeed.com",
    category: "Job Search",
    isPaid: false
  },
  {
    id: "career-3",
    title: "Resume.io",
    description: "Create a professional resume with templates that follow the exact 'resume rules' employers look for.",
    url: "https://resume.io",
    category: "Resume Building",
    isPaid: true
  },
  {
    id: "career-4",
    title: "Glassdoor",
    description: "Search jobs and read millions of company reviews & salaries posted anonymously by employees.",
    url: "https://www.glassdoor.com",
    category: "Company Reviews",
    isPaid: false
  },
  {
    id: "career-5",
    title: "Coursera Career Certificates",
    description: "Earn a career credential that helps you stand out and prepares you for an entry-level digital job.",
    url: "https://www.coursera.org/professional-certificates",
    category: "Certification",
    isPaid: true
  },
  {
    id: "career-6",
    title: "Handshake",
    description: "Connect with employers looking to hire students from your school for jobs and internships.",
    url: "https://joinhandshake.com",
    category: "Student Jobs",
    isPaid: false
  },
  {
    id: "career-7",
    title: "AngelList",
    description: "Apply privately to thousands of tech and startup jobs with one application.",
    url: "https://angel.co",
    category: "Startup Jobs",
    isPaid: false
  },
  {
    id: "career-8",
    title: "GitHub",
    description: "Build software better, together. GitHub is where people build software.",
    url: "https://github.com",
    category: "Portfolio",
    isPaid: false
  },
  // New resources
  {
    id: "career-9",
    title: "Monster",
    description: "Find the right job, build your career, and find hiring advice and resources.",
    url: "https://www.monster.com",
    category: "Job Search",
    isPaid: false
  },
  {
    id: "career-10",
    title: "FlexJobs",
    description: "The #1 job site for remote, work from home, and flexible job opportunities since 2007.",
    url: "https://www.flexjobs.com",
    category: "Remote Work",
    isPaid: true
  },
  {
    id: "career-11",
    title: "Fiverr",
    description: "Marketplace for freelance services, from graphic design to digital marketing.",
    url: "https://www.fiverr.com",
    category: "Freelancing",
    isPaid: false
  },
  {
    id: "career-12",
    title: "Upwork",
    description: "World's largest work marketplace connecting businesses with independent talent.",
    url: "https://www.upwork.com",
    category: "Freelancing",
    isPaid: false
  },
  {
    id: "career-13",
    title: "LinkedIn Learning",
    description: "Learn business, creative, and technology skills to achieve your personal and professional goals.",
    url: "https://www.linkedin.com/learning",
    category: "Skill Development",
    isPaid: true
  },
  {
    id: "career-14",
    title: "Behance",
    description: "Showcase and discover creative work from graphic designers, illustrators, and creatives.",
    url: "https://www.behance.net",
    category: "Portfolio",
    isPaid: false
  },
  {
    id: "career-15",
    title: "Hired",
    description: "Matching tech talent with innovative companies through an efficient hiring marketplace.",
    url: "https://hired.com",
    category: "Tech Jobs",
    isPaid: true
  },
  {
    id: "career-16",
    title: "We Work Remotely",
    description: "The largest remote work community in the world with job listings from top remote companies.",
    url: "https://weworkremotely.com",
    category: "Remote Work",
    isPaid: false
  },
];

export const interviewResources: Resource[] = [
  {
    id: "interview-1",
    title: "LeetCode",
    description: "Enhance your skills, expand your knowledge and prepare for technical interviews.",
    url: "https://leetcode.com",
    category: "Technical Interviews",
    isPaid: false
  },
  {
    id: "interview-2",
    title: "HackerRank",
    description: "Practice coding challenges and prepare for interviews with leading companies.",
    url: "https://www.hackerrank.com",
    category: "Coding Challenges",
    isPaid: false
  },
  {
    id: "interview-3",
    title: "InterviewBit",
    description: "Practice problems from the biggest tech companies and land your dream job.",
    url: "https://www.interviewbit.com",
    category: "Technical Interviews",
    isPaid: false
  },
  {
    id: "interview-4",
    title: "Glassdoor Interviews",
    description: "Find interview questions and reviews shared by job candidates.",
    url: "https://www.glassdoor.com/Interview",
    category: "Interview Questions",
    isPaid: false
  },
  {
    id: "interview-5",
    title: "Big Interview",
    description: "Practice interviewing from the comfort of your own home.",
    url: "https://biginterview.com",
    category: "Mock Interviews",
    isPaid: true
  },
  {
    id: "interview-6",
    title: "Pramp",
    description: "Practice mock interviews with peers and get feedback.",
    url: "https://www.pramp.com",
    category: "Peer Interviews",
    isPaid: false
  },
  {
    id: "interview-7",
    title: "Interview Cake",
    description: "Coding interview questions broken down step-by-step.",
    url: "https://www.interviewcake.com",
    category: "Technical Preparation",
    isPaid: true
  },
  {
    id: "interview-8",
    title: "The STAR Method",
    description: "Learn how to answer behavioral interview questions with the STAR method.",
    url: "https://www.themuse.com/advice/star-interview-method",
    category: "Behavioral Interviews",
    isPaid: false
  },
  // New resources
  {
    id: "interview-9",
    title: "AlgoExpert",
    description: "The ultimate resource to prepare for coding interviews with 175+ questions and video explanations.",
    url: "https://www.algoexpert.io",
    category: "Technical Interviews",
    isPaid: true
  },
  {
    id: "interview-10",
    title: "CodeSignal",
    description: "Practice coding tests & assessments used by top companies for technical interviews.",
    url: "https://codesignal.com",
    category: "Coding Challenges",
    isPaid: true
  },
  {
    id: "interview-11",
    title: "Cracking the Coding Interview",
    description: "189 programming questions and solutions to help you ace your programming interviews.",
    url: "https://www.crackingthecodinginterview.com",
    category: "Technical Preparation",
    isPaid: true
  },
  {
    id: "interview-12",
    title: "Mock Interview",
    description: "Practice one-on-one interviews with senior engineers from top tech companies.",
    url: "https://www.mockinterview.com",
    category: "Mock Interviews",
    isPaid: true
  },
  {
    id: "interview-13",
    title: "LinkedIn Interview Prep",
    description: "Interview preparation tools and tips to help you prep for common questions and practice answers.",
    url: "https://www.linkedin.com/interview-prep",
    category: "Interview Preparation",
    isPaid: false
  },
  {
    id: "interview-14",
    title: "Interviewing.io",
    description: "Practice technical interviews with engineers from Google, Facebook, and other top companies.",
    url: "https://interviewing.io",
    category: "Mock Interviews",
    isPaid: true
  },
  {
    id: "interview-15",
    title: "Grokking the System Design Interview",
    description: "Learn how to design large-scale systems to prepare for system design interviews.",
    url: "https://www.educative.io/courses/grokking-the-system-design-interview",
    category: "System Design",
    isPaid: true
  },
  {
    id: "interview-16",
    title: "Exponent",
    description: "Prepare for product management, software engineering, and other tech interviews.",
    url: "https://www.tryexponent.com",
    category: "Interview Preparation",
    isPaid: true
  },
];

export const getAllResources = (): Resource[] => {
  return [...educationResources, ...careerResources, ...interviewResources, ...governmentJobResources];
};
