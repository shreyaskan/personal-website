import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from '@mui/icons-material/School';

const laptopIcon = <LaptopMacIcon sx={{ color: '#03001C' }} />
const schoolIcon = <SchoolIcon sx={{ color: '#03001C' }} />

export const experienceInfo = [
  {
    jobRole: "Software Engineer",
    companyName: "Scayla Apps",
    jobDescription: "Developing features and fixing bugs of a Shopify application. Built the entire front end using Preact.js. Tech stack: TypeScript, React.js, Supabase, Drizzle ORM",
    tenure: "June 2025 - Present",
    icon: laptopIcon,
  },
  {
    jobRole: "Solutions Architect",
    companyName: "Halo Service Solutions",
    jobDescription: "Responsible for onboarding new clients onto HaloPSA. Built custom integrations via REST APIs to allow for data sync between software.",
    tenure: "July 2023 - April 2025",
    icon: laptopIcon,
  },
  {
    jobRole: "Data Analyst Intern",
    companyName: "Wyntra Pharmaceuticals",
    jobDescription: "Built an optimisation model, using Python, to identify the most attractive drugs in the market. Designed an application, using Deepnote, to visualise the data.",
    tenure: "March 2023 - June 2023",
    icon: laptopIcon,
  },
  {
    jobRole: "MSc Theoretical Physics and Applied Mathematics",
    companyName: "University of Birmingham",
    jobDescription: "2:1 overall with a 76% in my Master's project (Exporing high temperature superconductors in Cuprate Compounds). Covered several modules including Quantum Mechanics,General Relativity, Relativistic Astrophysics, Quantum Field Theory.",
    tenure: "October 2018 - July 2022",
    icon: schoolIcon,
  },
  {
    jobRole: "A Levels - Maths, Further Maths, Physics",
    companyName: "The Henley College, Henley-on-Thames",
    jobDescription: "A*, A*, A respectively. I achieved the 2nd highest grade in my college.",
    tenure: "September 2016 - July 2018",
    icon: schoolIcon,
  },
];
