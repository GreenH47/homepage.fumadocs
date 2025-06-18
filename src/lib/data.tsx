import {Github, Linkedin, Mail, PhoneCall} from 'lucide-react';

// https://www.svgrepo.com/vectors/bash/
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';

import LogoGit from '/public/images/logos/icon-git.svg';

import LogoSkillsAws from '/public/images/skills-logo/logo-aws.svg';
import LogoSkillsCsharp from '/public/images/skills-logo/logo-csharp.svg';
import LogoSkillsPython from '/public/images/skills-logo/logo-python.svg';
import LogoSkillsKubernetes from '/public/images/skills-logo/logo-kubernetes.svg';
import LogoSkillsDocker from '/public/images/skills-logo/logo-docker.svg';
import LogoSkillsWordpress from '/public/images/skills-logo/logo-wordpress.svg';
import LogoSkillsShopify from '/public/images/skills-logo/logo-shopify.svg';
import LogoSkillsLinux from '/public/images/skills-logo/logo-linux.svg';
//import LogoSkillsPCrepair from '/public/images/skills-logo/logo-pcrepair.svg';
import LogoSkillsPCrepair from '/public/images/skills-logo/logo-pc-repair.png'

import LogoSkillsSEO from '/public/images/skills-logo/logo-seo.svg';
import LogoSkillsBash from '/public/images/skills-logo/logo-bash.svg';
import LogoSkillsPrometheus from '/public/images/skills-logo/logo-prometheus.svg';
import LogoSkillsProxmox from '/public/images/skills-logo/logo-proxmox.svg';
import LogoSkillsNetworking from '/public/images/skills-logo/logo-networking.svg';


import LogoWorkRans from '/public/images/work-logo/rans.png';
import LogoWorkOzworld from '/public/images/work-logo/ozworld.jpg';
import LogoWorkJinhuan from '/public/images/work-logo/jinhuan.png';
import LogoWorkNaton from '/public/images/work-logo/naton.jpg';


import ProjectHomelab from '/public/images/project/project-proxmox.png';


import Avator_Jingsheng_Chang from '/public/images/reference-logo/jingsheng-chang.jpg';
import Avator_Daniel_Miao from '/public/images/reference-logo/daniel-miao.jpg';
import Avator_Raj from '/public/images/reference-logo/raj-sachdev.jpg';


import {
    ExperienceDetails,
    ProjectDetails,
    TechDetails,
    TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
    GITHUB: 'https://github.com/GreenH47',
    GITHUB_REPO: 'https://github.com/GreenH47/Green.homepage',
    sagarshah_dev:'https://github.com/shahsagarm/sagarshah.dev',
    fumadocs:'https://github.com/fuma-nama/fumadocs'

    };

export const NAV_LINKS = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Work',
        href: '#employment',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Skills',
        href: '#Skills',
    },
    {
        label: 'References',
        href: '#references',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
];

export const SOCIAL_LINKS = [
    {
        icon: Github,
        url: 'https://github.com/GreenH47',
    },
    {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/greenhuang/',
    },
    {
        icon: Mail,
        url: 'mailto:greenhuang47@gmail.com',
    },
    {
        icon: PhoneCall,
        url: 'tel:+61478395855',
    },
];

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: 'Javascript',
        logo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        label: 'Typescript',
        logo: LogoTypescript,
        url: 'https://www.typescriptlang.org/',
    },
    {
        label: 'React',
        logo: LogoReact,
        url: 'https://react.dev/',
    },
    {
        label: 'Next.js',
        logo: LogoNextjs,
        url: 'https://nextjs.org/',
    },
    {
        label: 'Node.js',
        logo: LogoNodejs,
        url: 'https://nodejs.org/en',
    },

    {
        label: 'PostgreSQL',
        logo: LogoPostgreSQL,
        url: 'https://www.postgresql.org/',
    },
    {
        label: 'MongoDB',
        logo: LogoMongoDB,
        url: 'https://www.mongodb.com/',
    },

    {
        label: 'Tailwindcss',
        logo: LogoTailwindcss,
        url: 'https://tailwindcss.com/',
    },


    {
        label: 'Git',
        logo: LogoGit,
        url: 'https://github.com/GreenH47',
    },

    {
        label: 'AWS',
        logo: LogoSkillsAws,
        url: 'https://aws.amazon.com/',
    },

    {
        label: 'C#',
        logo: LogoSkillsCsharp,
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },

    {
        label: 'Python',
        logo: LogoSkillsPython,
        url: 'https://www.python.org/',
    },

    {
        label: 'Kubernetes',
        logo: LogoSkillsKubernetes,
        url: 'https://kubernetes.io/',
    },

    {
        label: 'Docker',
        logo: LogoSkillsDocker,
        url: 'https://www.docker.com/',
    },

    {
        label: 'Wordpress',
        logo: LogoSkillsWordpress,
        url: 'https://wordpress.org/',
    },

    {
        label: 'Shopify',
        logo: LogoSkillsShopify,
        url: 'https://www.shopify.com/',
    },

    {
        label: 'Linux',
        logo: LogoSkillsLinux,
        url: 'https://www.linux.org/',
    },

    {
        label: 'proxmox',
        logo: LogoSkillsProxmox,
        url: 'https://www.proxmox.com/en/',
    },

    {
        label: 'Networking',
        logo: LogoSkillsNetworking,
        url: 'https://learn.microsoft.com/en-us/training/modules/network-fundamentals/',
    },



    {
        label: 'Bash',
        logo: LogoSkillsBash,
        url: 'https://www.gnu.org/software/bash/',
    },


    {
        label: 'Prometheus',
        logo: LogoSkillsPrometheus,
        url: 'https://prometheus.io/',
    },

    {
        label: 'PC Repair',
        logo: LogoSkillsPCrepair,
        url: 'https://www.seek.com.au/career-advice/role/computer-technician',
    },

    {
        label: 'SEO',
        logo: LogoSkillsSEO,
        url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    },



];

export const EXPERIENCES: ExperienceDetails[] = [
    {
        logo: LogoWorkRans,
        logoAlt: 'Rans logo',
        position: 'RANS Australia - Website Development and Maintenance Intern',
        startDate: new Date(2025, 1),
        currentlyWorkHere: true,
        summary: [
            'Optimised website (rans.com.au) with Canva & WooCommerce, boosting mobile Lighthouse scores by 18 %.',
            'Diagnosed and repaired office PC hardware (HDD swaps, RAM upgrades) and resolved Wi-Fi dropouts by re-configuring Telstra/Optus routers and replacing faulty AP modules, restoring 100 % uptime for staff devices.',
            'Offload media from the server to CDN, which cuts page-load times by 35 %.',
            'Conducted SEO research (SEMrush), rewrote meta-tags, and lifted organic search traffic by 22 %.',
            'Authored step-by-step knowledge-base articles for non-technical staff, reducing repetitive tickets by 40 %. ',
        ],
    },
    {
        logo: LogoWorkOzworld,

        logoAlt: 'Ozworld logo',
        position: 'Ozworld Timber Flooring - Warehouse Assistant',
        startDate: new Date(2024, 3),
        endDate: new Date(2025, 1),
        summary: [
            'Managed customer inquiries, providing information on products and resolving issues',
            'Prepared invoices and weekly budget reports, ensuring zero discrepancies across one year. ',
            'Maintained and updated the official website (ozworld.com.au) and monitored daily records.',
            'Managed daily stock movements with forklifts; improved stock accuracy' +
            'Fixed security-camera DVR and stabilised warehouse Wi-Fi by repositioning APs and upgrading POE switch firmware—eliminating weekly camera dropouts.'
        ],
    },

    {
        logo: LogoWorkJinhuan,

        logoAlt: 'Jinhuan logo',
        position: 'Jinhuan Construction Group - Executive Assistant to the Manager',
        startDate: new Date(2021, 3),
        endDate: new Date(2021, 10),
        summary: [
            'Created presentations, reports, and meeting minutes for the department.',
            'Distributed communications regarding important announcements and events.',
            'Collaborated with the admin team to ensure smooth departmental operations',
        ],
    },

    {
        logo: LogoWorkNaton,

        logoAlt: 'Naton logo',
        position: 'Beijing Naton Technology Group - Test Engineer of Biomechanics',
        startDate: new Date(2020, 8),
        endDate: new Date(2021, 1),
        summary: [
            'Reviewed specifications with the design team and conducted thorough testing',
            'Planned and executed testing phases and compiled final reports.',
            'Optimized design plans through component and design testing.',
        ],
    },

];

// uncomment WorkSection in src/app/page.tsx to display this section

export const PROJECTS: ProjectDetails[] = [

    {
        name: 'Dell PowerEdge Homelab',
        description:
            'Deployed Proxmox VE on a Dell R740 hosting a three-node k3s Kubernetes cluster ' +
            'for continuous-integration pipelines (Jenkins) and full-stack monitoring ' +
            '(Prometheus + Grafana). Automated nightly backups to backblaze B2 with Restic; ' +
            'achieved <30 min RTO. Implemented WireGuard VPN in router and role-based access ' +
            'for secure remote management.\n',
        url: 'https://www.linkedin.com/posts/greenhuang_homelab-proxmox-activedirectory-activity-7328042741685202944-O529',
        previewImage: ProjectHomelab,
        technologies: [
            'Proxmox',
            'Kubernetes',
            'Prometheus',
            'Grafana',
            'Hardware',
            'Jenkins',
        ],
    },
];

export const TESTIMONIALS: TestimonialDetails[] = [
    {
        personName: 'jingsheng-chang',
        personAvatar: Avator_Jingsheng_Chang,
        link: 'https://www.linkedin.com/in/jingsheng-chang-2216381b4/',
        title: 'CoFounder - cpu-education',
        testimonial:
            'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Green and will rehire in the future for Frontend development.',
    },
    {
        personName: 'Daniel Miao',
        personAvatar: Avator_Daniel_Miao,
        link: 'https://www.linkedin.com/in/daniel-miao-4aa82515a/',
        title: 'Managing Director - Ozworld Timber Flooring',
        testimonial:
            'During this time, Shixin demonstrated excellent organizational skills, ' +
            'a strong work ethic, and an unwavering commitment to safety. ' +
            'They managed customer inquiries efficiently and provided clear product information, ' +
            'contributing significantly to positive customer experiences. ' +
            'Shixin also played a vital role in administrative tasks, ' +
            'including invoicing and budget reporting, and maintained our official website, ' +
            'ensuring that daily records were accurate and up-to-date.',
    },

    {
        personName: 'raj-sachdev',
        personAvatar: Avator_Raj,
        link: 'https://www.linkedin.com/in/raj-sachdev-9997b0120/',
        title: 'Business Development Manager - RANS Australia ',
        testimonial:
            'During their internship, Shixin consistently demonstrated strong technical skills in web development, ' +
            'UI/UX optimization, and troubleshooting. Their contributions to maintaining and enhancing our ' +
            'website have been both innovative and reliable, positively impacting our online presence.',
    },

];
