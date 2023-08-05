import {
    SystemAdmin,
    NetworkSpecialist, 
    TeamLeader, 
    WebDeveloper,
    SGLABS,
    mirth, 
    ucdChem, 
    comptia,
    ec2, 
    s3, 
    tfamily,
    o365,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    jobit,
    tripguide,
    threejs,
    portfolio,

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
    },
    {
      name: "B.S. Biochemistry",
      icon: ucdChem,
    },
    {
      name: "Network+",
      icon: comptia,
    },
    {
      name: "Mirth Fundementals",
      icon: mirth,
    },
    {
      name: "HL7",
      icon: html,
    },
    {
      name: "AWS EC2",
      icon: ec2,
    },
    {
      name: "AWS S3",
      icon: s3,
    },
    {
      name: "AWS Transfer Family",
      icon: tfamily,
    },
    {
      name: "Office 365",
      icon: o365,
    },
    {
      name: "C",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "ReactJS",
      icon: reactjs,
    },
    {
      name: "Tailwind",
      icon: tailwind,
    },
    {
      name: "NodeJs",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Github",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "IT Executive Director",
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
      name: "Portfolio",
      description:
        "No, this isnt inception, you're not in a dream within a dream, this is the respository for the very portfolio you see before you now.  There are tons of great 3D and react libraries used here",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/sstone-ucd/samantha-stone-portfolio.git",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };