export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'OnePiece-Pokedex - An anime webapp',
      desc: 'OnePiece-Pokedex is an anime webapp that provides information about the anime and its related characters, with great design and user expience.',
      subdesc:
        'It is built with Next.js 14, Tailwind CSS, TypeScript, Prisma and Cloudflare.',
      href: 'https://onepiece-pokedex-jayant-issars-projects.vercel.app/',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/prisma.png',
        },
        {
          id: 5,
          name: 'Next.js',
          path: '/assets/next.png',
        }
      ],
    },
    {
      title: 'Story Vault - A webapp for your story',
      desc: 'Story Vault is a webapp that allows you to create and share your own story.',
      subdesc:
        'It is built with Next.js 14, Tailwind CSS, TypeScript, Prisma and Cloudflare',
      href: 'https://story-vault-jayant.vercel.app',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        }
        
      ],
    },
    {
      title: 'Countries Fast API - Super Fast Countries API',
      desc: 'Countries Fast API is a super fast REST API searches for a countries you are looking for.',
      subdesc:
        'It is built with Next.js 14, Tailwind CSS, TypeScript, Redis and Cloudflare',
      href: 'https://countries-fast-api.vercel.app/',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/project-logo3.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Redis',
          path: '/assets/redis.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.0, 0] : [0.25, -4.7, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [7, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5.7, 1.95, 0] : isTablet ? [7, 1.5, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-11, 8, 0] : isTablet ? [-16, 6, 0] : [-26, 12, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-8, -9, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Egio Paathshala',
      pos: 'Software Devloper Intern',
      duration: 'SEP-2024 - Present',
      title: "Our team works on revamping of the whole webapp of the organisation which is its backbone and we are elevating the website in terms if design, technology and User experience",
      icon: '/assets/egiop5.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'University of Delhi, SVC',
      pos: 'IoT Intern',
      duration: 'JUN/2024 - SEP/2024',
      title: " This was a IoT Research Project Where I colabrated with hardware team to design a biosessor",
      icon: '/assets/svc2.png',
      animation: 'clapping',
    },
    
  ];