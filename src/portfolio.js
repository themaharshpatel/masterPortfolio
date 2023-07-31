/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Maharsh's Portfolio",
  description:
    "I am a 2022 batch student, have completed my B.Tech in Computer Engineering.\nCurrently working as an Android Developer at Veeksha. I am a 2x Redhat Certified professional.",
  og: {
    title: "Maharsh Patel's Portfolio",
    type: "website",
    url: "https://maharshpatel.dev",
  },
};

//Home Page
const greeting = {
  title: "Maharsh Patel",
  logo_name: "Maharsh Patel",
  nickname: "themaharshpatel",
  subTitle: "SDE - 1 at Adda247. Full Stack Developer",
  resumeLink:
    "https://drive.google.com/file/d/1vKv6aTE9wCpr7QcwWyN17l0jIyeY1fyO/view?usp=sharing",
  portfolio_repository: "https://github.com/themaharshpatel/masterPortfolio",
  githubProfile: "https://github.com/themaharshpatel",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/themaharshpatel",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/themaharshpatel/",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:hey@maharshpatel.dev",
    fontAwesomeIcon: "far fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/themaharshpatel",
    fontAwesomeIcon: "fab fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "📱 Developing Android Applications using Kotlin",
        "👤 Creating application which are more accessiable to users.",
        "🖥️ System Designs which are scalable and roboust",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#6c3fd1",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#CC6699",
          },
        },
      ],
    },
    {
      title: "System Administration and Automation",
      fileName: "SysAdminImg",
      skills: [
        "🖥️ Knowledge of System administration of platforms like Windows and Linux",
        "🖥️ Deployment of Windows Active Directory with tools like Samba and Zentyal",
        "🖥️ Having a good grip on automation tools like Ansible",
        "💾 Setting up and managing open source enterprise storage solutions like TrueNAS",
        "🛡️ Knowledge of managing network infrastructure with open source firewalls like PfSense",
      ],
      softwareSkills: [
        {
          skillName: "Redhat Linux",
          fontAwesomeClassname: "simple-icons:redhat",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "Windows Administration",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#0078D6",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#EE0000",
          },
        },
        {
          skillName: "TrueNAS",
          fontAwesomeClassname: "simple-icons:truenas",
          style: {
            color: "#0095D5",
          },
        },
        {
          skillName: "PfSense",
          fontAwesomeClassname: "simple-icons:pfsense",
          style: {
            color: "#212121",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture And Devops",
      fileName: "CloudInfraImg",
      skills: [
        "☁️ Experience working on GCP and AWS.",
        "📤 Deploying and maintaining the web app on virtual machines along with basic network security by Cloudflare",
        "⚙️ Great experience of Firebase services to deploy and manage apps",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Cloudflare",
          fontAwesomeClassname: "simple-icons:cloudflare",
          style: {
            color: "#F38020",
          },
        },
      ],
    },

    {
      title: "Graphics and UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "🎨 Designing a highly attractive user interface for mobile applications",
        "🖼️ Modifying and creating graphic designs and building designs from the ground",
        "♟️ Take minute things into consideration to improve User Experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#31A8FF",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Silver Oak College of Engineering and Technology",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "socet.png",
      alt_name: "SOCET",
      duration: "2018 - 2022",
      descriptions: [
        "📚 Studied core computer engineering subjects like DS, ADA, CD, CN, etc",
        "🎙️ Delivered some talks to my fellow students to share my knowledge on various tools and technologies. Talks on topics like Computer Hardware Components, Android Development, Designing Workshops, etc.",
        "🧑🏻‍🎓 Led and volunteered in many student-led communities operating globally.",
      ],
      website_link: "https://socet.edu.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Red Hat Certified Engineer",
      subtitle: "- Redhat",
      logo_path: "RHCE.png",
      certificate_link:
        "https://www.credly.com/badges/d4101382-c638-4f42-b55c-043dd5e814b6/public_url",
      alt_name: "RHCE Badge",
      color_code: "#4C4C4C",
    },
    {
      title: "Red Hat Certified System Administrator",
      subtitle: "- Redhat",
      logo_path: "RHCSA.png",
      certificate_link:
        "https://www.credly.com/badges/3a69e6b9-fbf4-448a-a1d3-d0155f519268/public_url",
      alt_name: "RHCSA Badge",
      color_code: "#4C4C4C",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've worked as an Software Engineer, A System Administrator, and A Graphic Designer. I enjoy becoming involved in communities to share and expand my knowledge while also making new connections.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "SDE - 1",
          company: "Adda247",
          company_url: "https://adda247.com",
          logo_path: "adda247-logo.svg",
          duration: "March 2023 - present",
          location: "Gurugram, Haryana",
          description: "",
          color: "#E21221",
        },
        {
          title: "Software Engineer",
          company: "Veeksha",
          company_url: "https://veeksha.app",
          logo_path: "Veeksha-Logo.png",
          duration: "June 2021 - Feburary 2023",
          location: "Ahmedabad, Gujarat",
          description:
            "Created initial documentation for the Veeksha application. " +
            "Made a time plan for Production. " +
            "Communicated Deliverables and time delays to stakeholders. " +
            "Successfully achieved every phase of SDLC. " +
            "From the reviews of the customer, provided updates and patches to the application. " +
            "Evaluating the projects' technological requirements and task scope. " +
            "Enabling the use of open-source software to optimize daily chores. " +
            "Identifying the ideal tool that can help the team save valuable time and money. " +
            "Self-hosted tools and the Firewall's operation and maintenance.",
          color: "#65b8fc",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Graphics Designer Volunteer",
          company: "Google Developers Group Cloud Ahmedabad",
          company_url: "https://www.linkedin.com/company/gdgcloudahm/",
          logo_path: "GDGCloudAHM.svg",
          duration: "January 2022 - present",
          location: "Ahmedabad, Gujarat",
          description: "",
          color: "#00629b",
        },
        {
          title: "Student Advisor and Member",
          company: "Silver Oak University IEEE Student Branch",
          company_url: "http://ieee.silveroakuni.ac.in",
          logo_path: "SOUIEEESB.png",
          duration: "January 2022 - December 2022",
          location: "Ahmedabad, Gujarat",
          description:
            "Advising the Student Branch's new leaders to accomplish greater heights.",
          color: "#00629b",
        },
        {
          title: "Chairperson, WIE AG",
          company: "Silver Oak University IEEE Student Branch",
          company_url: "http://ieee.silveroakuni.ac.in",
          logo_path: "SOUIEEEWIEAG.png",
          duration: "January 2021 - December 2021",
          location: "Ahmedabad, Gujarat",
          description:
            "Got an opportunity to lead internationally recognised Student Branch.",
          color: "#772583",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "maharsh.png",
    description:
      "Please contact me if you have any questions on technological stacks such as Linux, Cloud, Ansible, Android, and so on. Will be delighted to assist and connect with you!!!",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://ashutoshhathidara.wordpress.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8320758513",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
