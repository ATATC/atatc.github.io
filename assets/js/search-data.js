// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "working on a secret.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "open-source and maintained by me. discontinued projects are not listed.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "your stars can be extremely meaningful to us :).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "may not be up-to-date.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-lab",
          title: "lab",
          description: "where you realize your innovational ideas",
          section: "Navigation",
          handler: () => {
            window.location.href = "/lab/";
          },
        },{id: "dropdown-steven-chen",
              title: "Steven Chen",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://stevenchen.site";
              },
            },{id: "dropdown-project-neura",
              title: "Project Neura",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://projectneura.org";
              },
            },{id: "dropdown-vector-institute",
              title: "Vector Institute",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://vectorinstitute.ai";
              },
            },{id: "dropdown-utmist",
              title: "UTMIST",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "https://www.utmist.ca";
              },
            },{id: "post-i-built-a-pendulum-phy180-pendulum-project",
        
          title: "I built a pendulum - PHY180 Pendulum Project",
        
        description: "some reflections on the lab report",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/pendulum/";
          
        },
      },{id: "post-we-built-a-bridge-civ102-bridge-project",
        
          title: "we built a bridge - CIV102 Bridge Project",
        
        description: "a story about how we made it into the podium in the CIV102 term project",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/bridge/";
          
        },
      },{id: "post-lab-39-s-recruiting",
        
          title: "lab&#39;s recruiting!",
        
        description: "apply anytime for these open positions",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/recruitment/";
          
        },
      },{id: "news-founded-project-neura",
          title: 'Founded Project Neura.',
          description: "",
          section: "News",},{id: "news-moved-to-richmond-hill-ontario-canada",
          title: 'Moved to Richmond Hill, Ontario, Canada.',
          description: "",
          section: "News",},{id: "news-joined-villanova-college-as-a-grade-10-student",
          title: 'Joined Villanova College as a Grade 10 student.',
          description: "",
          section: "News",},{id: "news-launched-the-leads-project",
          title: 'Launched the LEADS project.',
          description: "",
          section: "News",},{id: "news-open-sourced-mip-candy",
          title: 'Open-sourced MIP Candy.',
          description: "",
          section: "News",},{id: "news-joined-vector-institute-as-an-intern-in-bo-wang-lab",
          title: 'Joined Vector Institute as an intern in Bo Wang Lab.',
          description: "",
          section: "News",},{id: "news-4th-in-the-segstrong-c-challenge",
          title: '4th in the SegSTRONG-C challenge.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20241012_0/";
            },},{id: "news-4th-in-the-panorama-challenge",
          title: '4th in the PANORAMA Challenge.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/20250301_0/";
            },},{id: "news-graduated-from-villanova-college-with-an-ontario-secondary-school-diploma-and-an-ontario-scholar",
          title: 'Graduated from Villanova College with an Ontario Secondary School Diploma and an Ontario...',
          description: "",
          section: "News",},{id: "news-joined-university-of-toronto-as-an-undergraduate-student-in-2t9-engineering-science-pey-co-op-faculty-of-applied-science-and-engineering",
          title: 'Joined University of Toronto as an undergraduate student in 2T9 Engineering Science (PEY...',
          description: "",
          section: "News",},{id: "news-joined-utmist-as-an-internal-research-team-lead",
          title: 'Joined UTMIST as an internal research team lead.',
          description: "",
          section: "News",},{id: "projects-leads",
          title: 'LEADS',
          description: "Lightweight Embedded Assisted Driving System",
          section: "Projects",handler: () => {
              window.location.href = "/projects/leads/";
            },},{id: "projects-mip-candy",
          title: 'MIP Candy',
          description: "A Candy for Medical Image Processing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mipcandy/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%65%72%72%79.%66%75@%70%72%6F%6A%65%63%74%6E%65%75%72%61.%6F%72%67", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ATATC", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/tianhao-fu-957188279", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0007-2342-5350", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=_-yZgZ4AAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ATATC_A", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
