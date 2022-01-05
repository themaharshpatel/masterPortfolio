/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Maharsh's Portfolio",
  description:
    "A final-year technology-oriented student pursuing a Bachelor's degree in Computer Engineering who enjoys figuring out how to solve any problem using open-source technologies.",
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
  subTitle:
    "A final-year technology-oriented student pursuing a Bachelor's degree in Computer Engineering who enjoys figuring out how to solve any problem using open-source technologies.",
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
        "📱 Developing Android Applications using Java",
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
      duration: "2018 - Present",
      descriptions: [
        "📚 Studied core computer engineering subjects like DS, ADA, CD, CN, etc",
        "🎙️ Delivered some talks to my fellow students to share my knowledge on various technologies.",
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
        "https://rhtapps.redhat.com/certifications/badge/verify/SM6ZWSVNGL32EC7ONRIRY3CJS4AEQU3CUPSQX2KSDXT6RW46LQ3XCZJWRJNV7ILTXVE4I6VB7OTCG4U5NQYTCNA62RUWOCM34WWBUYQ=",
      alt_name: "RHCE Badge",
      color_code: "#4C4C4C",
    },
    {
      title: "Red Hat Certified System Administrator",
      subtitle: "- Redhat",
      logo_path: "RHCSA.png",
      certificate_link:
        "https://www.redhat.com/rhtapps/services/certifications/badge/verify/SM6ZWSVNGL32EC7ONRIRY3CJS4AEQU3CUPSQX2KSDXT6RW46LQ3T7ULZ55KZZ56SKO7EQ3ETTLYZQ4U5NQYTCNA62RUWOCM34WWBUYQ=",
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
    "I've worked as an Android developer, A System Administrator, and A Graphic Designer in the past. I enjoy becoming involved in communities to share and expand my knowledge while also making new connections.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Android Developer",
          company: "Feeltech Digivation Pvt. Ltd.",
          company_url:
            "https://www.linkedin.com/company/feeltech-digivation/about/",
          logo_path: "FTD-logo.png",
          duration: "Jun 2021 - Present",
          location: "Ahmedabad, Gujarat",
          description:
            "Feeltech Digivation offers AR/VR-based services. As I joined the company while it was in its beginnings, I was able to work in a variety of capacities, including System Administration, Network Administration, Graphics Designing, and Android Development. This exposed me to a lot of other tools, such as PfSense, Truenas, Gitea, and so on.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Advisor and Member",
          company: "Silver Oak University IEEE Student Branch",
          company_url: "http://ieee.silveroakuni.ac.in",
          logo_path: "SOUIEEESB.png",
          duration: "January 2022 - Present",
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
