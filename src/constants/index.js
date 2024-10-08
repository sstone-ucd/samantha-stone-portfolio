import {
    SystemAdmin,
    NetworkSpecialist, 
    TeamLeader, 
    WebDeveloper,
    SGLABS,
    mirth, 
    ucdChem, 
    comptia,
    prepsit,
    sglaboratories,
    family,
    fizz,
    travel,
    food, 
    sgclinical,
    flowers
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "System Administrator",
      icon: SystemAdmin,
    },
    {
      title: "Team Leader",
      icon: TeamLeader,
    },
    {
      title: "Network Specialist",
      icon: NetworkSpecialist,
    },
    {
      title: "Web Developer",
      icon: WebDeveloper,
    },
  ];
  
  const technologies = [
    {
      name: "B.A. Computer Science",
      icon: ucdChem,
      description:"Special Honors - Univeristy of Colorado Denver",
      date: "May 2023"
    },
    {
      name: "B.S. Biochemistry",
      icon: ucdChem,
      description:"Cum Laude - Univeristy of Colorado Denver",
      date: "May 2023"
    },
    {
      name: "Network+",
      icon: comptia,
      description: "Certificate Number: COMP001021065158 ", 
      date: "August 2023"
    },
    {
      name: "Mirth Fundementals",
      icon: mirth,
      description: "Certificate Number: MC01579",
      date: "November 2022"
    },

  ];
  
  const experiences = [
    {
      title: "Executive Director of Operations and Information Technology",
      company_name: "S&G Labs",
      icon: SGLABS,
      iconBg: "#ffffff",
      date: "Jan 2016 - Current",
      points: [
        "IT Strategy and Planning: Develop and implement an IT strategy aligned with the lab's overall business objectives. Identify opportunities to leverage technology to enhance lab efficiency, accuracy, and compliance.",
        "Technology Infrastructure Management: Oversee the lab's technology infrastructure, including servers, networking equipment, storage systems, and backup solutions. Ensure the availability, reliability, and security of all IT systems.", 
        "Data Security and Compliance: Implement and maintain robust data security measures to protect sensitive patient information and ensure compliance with relevant regulations (e.g., HIPAA, GDPR).",
        "Software and Application Management: Evaluate, select, and manage the deployment of software applications relevant to the lab's operations including laboratory information management systems (LIMS), website/apps, and data analysis tools.",
        "IT Policy Development and Enforcement: Establish and enforce IT policies, procedures, and best practices to maintain a secure and compliant technology environment.",
        "Data Analytics and Reporting: Work with data analysts to generate meaningful insights from lab data and develop customized reports for stakeholders.",
        "Team Leadership: Manage the IT team, including hiring, training, and performance management. Foster a collaborative and supportive work environment."
      ],
    },
    {
      title: "Laboratory Technician",
      company_name: "S&G Labs",
      icon: SGLABS,
      iconBg: "#ffffff",
      date: "Jan 2014 - Jan 2016",
      points: [
        "Laboratory Testing and Sample Processing: Perform immunoassay toxicology tests on patient samples following standard operating procedures (SOPs) and safety guidelines.",
        "Instrument Calibration and Maintenance: Calibrate and maintain laboratory instruments regularly to ensure accurate and reliable test results.",
        "Data Entry and Management: Record and manage test results, patient information, and other laboratory data accurately and securely using laboratory information management systems (LIMS)",
        "IT Support for Lab Staff: Provide technical support and assistance to lab staff regarding hardware, software, and network issues.",
        "Troubleshooting and Issue Resolution: Diagnose and resolve technical problems related to laboratory equipment, computers, and software applications.", 
        "Training and User Education: Conduct training sessions for lab staff on using laboratory equipment, LIMS, and other IT tools effectively and securely."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "PrepsIt",
      description:
        "Import, organize, and enjoy your recipes as you plan your meals for the week ahead.",
      tags: [
        {
          name: "React-Native",
          color: "charcoal",
        },
        {
          name: "Restful API",
          color: "herb",
        },
        {
          name: "Django",
          color: "white",
        },
      ],
      image: prepsit,
      source_code_link: "https://www.prepsit.com",
    },
    {
      name: "S&G Clinical",
      description:
        "Your trusted partner for clinical compliance and cost-saving solutions – SG Clinical keeps your practice running smoothly.",
      tags: [
        {
          name: "React",
          color: "charcoal",
        },
        {
          name: "TailwindCSS",
          color: "black",
        },
      ],
      image: sgclinical,
      source_code_link: "https://sgclinical.com/",
    },
    {
      name: "S&G Laboratories",
      description:
        "Precision diagnostics and reliable solutions – SG Laboratories, where accuracy meets innovation.",
      tags: [
        {
          name: "WordPress",
          color: "charcoal",
        },
        {
          name: "CSS",
          color: "black",
        },
      ],
      image: sglaboratories,
      source_code_link: "https://sglaboratories.com/",
    },
  ];

const hobbies = [
  {
    hobby: "Picking up new skills at work",
    note:"I’m an IT executive and a chemist! I love that every day is challenging and different!",
  },  
  { 
    hobby:"Trying new recipes", 
    note: "My NYT Cooking subscription is a lifeline for this"
  },
  {
    hobby: "I’ve started learning how to play the piano", 
    note: "The apps available these days are a game changer"
  },
  { 
    hobby: "Traveling", 
    note:"I’ve been to a handful of countries now, each one has been special and unique"
  }
];

const favorites = [

  {
    fav:"My cat",
    pic: fizz
  },
  {
    fav:"Traveling",
    pic: travel
  },
  {
    fav:"Good food",
    pic: food
  },
  {
    fav:"Nature", 
    pic: flowers,
  }
];

const skills = [
  {
    name: "Office 365"
  },
  {
    name: "VMWare"
  },
  {
    name: "MSSQL"
  },
  {
    name: "Microsoft Server"
  },
  {
    name: "MongoDB"
  },
  {
    name: "Docker"
  },
  {
    name: "GitHub"
  },
  {
    name: "Transfer Family"
  },
  {
    name: "WordPress"
  },
  {
    name: "RDP"
  },
  {
    name: "Price Negotiation"
  },
  {
    name: "PostgreSQL"
  },
  {
    name: "Mirth"
  },
  {
    name: "SciexOS"
  },
  {
    name: "Python"
  },
  {
    name: "Django"
  },
  {
    name: "HL7"
  },
  {
    name: "C/C++"
  },
  {
    name: "C#"
  },
  {
    name: "JavaScript"
  },
  {
    name: "NodeJS"
  },
  {
    name: "Tailwind"
  },
  {
    name: "SQL"
  },
  {
    name: "MERN Stack"
  },
  {
    name: "Firewalls"
  },
  {
    name: "HTML"
  },
  {
    name: "AWS"
  },
  {
    name: "RDS"
  },
  {
    name: "EC2"
  },
  {
    name: "S3"
  },
  {
    name: "CSS"
  },
  {
    name: "Git"
  },
  {
    name: "React"
  },
  {
    name: "Management"
  },
  {
    name: "System Automation"
  },
  {
    name: "Liquid Extraction"
  },
  {
    name: "Training"
  },
  {
    name: "Vendor/Client Relations"
  },
  {
    name: "Field Marketing"
  },
  {
    name: "DevOps"
  },
  {
    name: "Web Development"
  },
  {
    name: "EMR & LIS Systems"
  }, 
  {
    name: "Liquid Chromatography Mass Spectrometry (LCMS)"
  },
  {
    name: "Sonicwall"
  },
  {
    name: "SFTP"
  },
  {
    name: "TCP/IP"
  },
  {
    name: "Software Validation"
  },
  {
    name: "SOP Documentation"
  }, 
];
  
export { services, technologies, experiences, testimonials, projects, hobbies, skills, favorites };