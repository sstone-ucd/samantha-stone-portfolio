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
      name: "Taste The Days",
      description:
        "I found myself unable to commit to meal-prepping and its because I was way overcomplicating it for myself. This web application allows you to plan your meal prep ahead time (or use preloaded templates) so you can commit to your fitness goals!",
      tags: [
        {
          name: "React",
          color: "charcoal",
        },
        {
          name: "restapi",
          color: "herb",
        },
        {
          name: "scss",
          color: "white",
        },
      ],
      image: jobit,
      source_code_link: "https://www.tastethedays.com",
    },
    {
      name: "Container Conscious",
      description:
        "We've all wondered \"Can I recycle this?\" I built container conscious to answer that question using AI and python. My intention with this web app is to make recycling just a little easier to encourage more of us to commit to a smaller carbon footprint. Check out my blog for ideas on upcycling your containers too!",
      tags: [
        {
          name: "A.I.",
          color: "charcoal",
        },
        {
          name: "Python",
          color: "black",
        },
        {
          name: "Django",
          color: "white",
        },
      ],
      image: tripguide,
      source_code_link: "https://containerconscious.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };