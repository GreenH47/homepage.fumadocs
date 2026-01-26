import {Github, Linkedin, Mail, PhoneCall} from 'lucide-react';

// https://www.svgrepo.com/vectors/bash/
//https://worldvectorlogo.com/

import WechatIcon from '/public/images/logos/wechat.svg';

/*
* skills section
*
* */
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';


import LogoSkillsAws from '/public/images/skills-logo/logo-aws.svg';

import LogoSkillsPython from '/public/images/skills-logo/logo-python.svg';
import LogoSkillsKubernetes from '/public/images/skills-logo/logo-kubernetes.svg';
import LogoSkillsDocker from '/public/images/skills-logo/logo-docker.svg';
import LogoSkillsWordpress from '/public/images/skills-logo/logo-wordpress.svg';
import LogoSkillsShopify from '/public/images/skills-logo/logo-shopify.svg';
import LogoSkillsLinux from '/public/images/skills-logo/logo-linux.svg';

import LogoSkillsPCrepair from '/public/images/skills-logo/logo-pc-repair.png'


import LogoSkillsBash from '/public/images/skills-logo/logo-bash.svg';

import LogoSkillsProxmox from '/public/images/skills-logo/logo-proxmox.svg';
import LogoSkillsNetworking from '/public/images/skills-logo/logo-networking.svg';

import LogoSkillsActiveDirectory from '/public/images/skills-logo/logo-active-directory.svg';
import LogoSkillsDocumentation from '/public/images/skills-logo/logo-documentation.svg';
import LogoSkillsEntra from '/public/images/skills-logo/logo-entra.svg';
import LogoSkillsExchange from '/public/images/skills-logo/logo-exchange.svg';
import LogoSkillsM365 from '/public/images/skills-logo/logo-m365.svg';
import LogoSkillsN8n from '/public/images/skills-logo/logo-n8n.svg';
import LogoSkillsRmm from '/public/images/skills-logo/logo-rmm.svg';
import LogoSkillsTicketing from '/public/images/skills-logo/logo-ticketing.svg';
import LogoSkillsWindows from '/public/images/skills-logo/logo-windows.svg';
import LogoSkillsWinServer from '/public/images/skills-logo/logo-winserver.svg';

import LogoSkills from '/public/images/skills-logo/logo-.svg';
/*
* working section
*
* */

import LogoWorkKingdomTechnology from '/public/images/work-logo/KingdomTechnology.png';

import LogoWorkRans from '/public/images/work-logo/rans.png';
import LogoWorkOzworld from '/public/images/work-logo/ozworld.jpg';
import LogoWorkJinhuan from '/public/images/work-logo/jinhuan.png';
import LogoWorkNaton from '/public/images/work-logo/naton.jpg';
import LogoWorkSwazzy from '/public/images/work-logo/swazzy.png';

/*
* Project section
*
* */

import ProjectHomelab from '/public/images/project/project-proxmox.png';

/*
* Recommendation section
*
* */
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
    sagarshah_dev: 'https://github.com/shahsagarm/sagarshah.dev',
    fumadocs: 'https://github.com/fuma-nama/fumadocs'

};


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
        url: 'mailto:admin@greenhuang.com',
    },
    // {
    //     icon: PhoneCall,
    //     url: 'tel:+61478395855',
    // },

    {
        img: WechatIcon,
        url: 'https://s3.greenhuang.com/wechat-card.png',
    },

];

export const TECHNOLOGIES: TechDetails[] = [
    // Core Microsoft / IT Support
    {
        label: 'Windows',
        logo: LogoSkillsWindows,
        url: 'https://learn.microsoft.com/en-us/windows/',
    },
    {
        label: 'Windows Server',
        logo: LogoSkillsWinServer,
        url: 'https://learn.microsoft.com/en-us/windows-server/',
    },
    {
        label: 'Active Directory',
        logo: LogoSkillsActiveDirectory,
        url: 'https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview',
    },
    {
        label: 'Entra ID',
        logo: LogoSkillsEntra,
        url: 'https://learn.microsoft.com/en-us/entra/identity/',
    },
    {
        label: 'Microsoft 365',
        logo: LogoSkillsM365,
        url: 'https://learn.microsoft.com/en-us/microsoft-365/?view=o365-worldwide',
    },
    {
        label: 'Exchange Online',
        logo: LogoSkillsExchange,
        url: 'https://learn.microsoft.com/en-us/exchange/exchange-online',
    },

    // ITSM / MSP tooling
    {
        label: 'Ticketing',
        logo: LogoSkillsTicketing,
        url: 'https://www.atlassian.com/software/jira/service-management/ticketing-software',
    },
    {
        label: 'RMM',
        logo: LogoSkillsRmm,
        url: 'https://en.wikipedia.org/wiki/Remote_monitoring_and_management',
    },
    {
        label: 'Documentation',
        logo: LogoSkillsDocumentation,
        url: 'https://www.atlassian.com/software/confluence',
    },
    {
        label: 'n8n',
        logo: LogoSkillsN8n,
        url: 'https://docs.n8n.io/',
    },

    // Infrastructure / Cloud
    {
        label: 'Networking',
        logo: LogoSkillsNetworking,
        url: 'https://learn.microsoft.com/en-us/training/modules/network-fundamentals/',
    },
    {
        label: 'Linux',
        logo: LogoSkillsLinux,
        url: 'https://www.linuxfoundation.org/',
    },
    {
        label: 'Proxmox',
        logo: LogoSkillsProxmox,
        url: 'https://www.proxmox.com/en/',
    },
    {
        label: 'Docker',
        logo: LogoSkillsDocker,
        url: 'https://docs.docker.com/',
    },
    {
        label: 'Kubernetes',
        logo: LogoSkillsKubernetes,
        url: 'https://kubernetes.io/docs/home/',
    },
    {
        label: 'PostgreSQL',
        logo: LogoPostgreSQL,
        url: 'https://www.postgresql.org/docs/',
    },
    {
        label: 'AWS',
        logo: LogoSkillsAws,
        url: 'https://docs.aws.amazon.com/',
    },

    // Scripting
    {
        label: 'Bash',
        logo: LogoSkillsBash,
        url: 'https://www.gnu.org/software/bash/',
    },
    {
        label: 'Python',
        logo: LogoSkillsPython,
        url: 'https://docs.python.org/',
    },

    // Web / Platforms
    {
        label: 'Next.js',
        logo: LogoNextjs,
        url: 'https://nextjs.org/docs',
    },
    {
        label: 'WordPress',
        logo: LogoSkillsWordpress,
        url: 'https://developer.wordpress.org/',
    },
    {
        label: 'Shopify',
        logo: LogoSkillsShopify,
        url: 'https://shopify.dev/docs',
    },

    // Hardware
    {
        label: 'PC Repair',
        logo: LogoSkillsPCrepair,
        url: 'https://www.comptia.org/en/certifications/a/',
    },
];


export const EXPERIENCES: ExperienceDetails[] = [
    {
        logo: LogoWorkSwazzy,
        logoAlt: 'Swazzy Synergy logo',
        position: 'Swazzy Synergy – IT Support Engineer',
        companyUrl: 'https://swazzy.support/',
        startDate: new Date(2025, 7, 14), // 0-indexed month: 7 = August
        currentlyWorkHere: true,
        summary: [
            'Provide deskside and remote L1/L2 support across multiple client sites, resolving Windows, Microsoft 365, and networking incidents within SLA targets.',
            'Onboard and offboard staff end-to-end: configure AD/Entra ID accounts, assign/revoke Microsoft 365 licenses, and manage Exchange Online mailboxes, shared access, and permissions.',
            'Deploy and troubleshoot Windows 11 endpoints: imaging, driver/firmware updates, BitLocker enablement, and resolving BSODs or hardware faults (RAM/SSD replacements).',
            'Investigate and resolve connectivity issues: trace patch panel to switch mappings, restore LAN/print access, verify VLAN/port status, and assist with Wi-Fi/VPN triage.',
            'Monitor RMM alerts and event logs; apply OS/app/firmware patches, remediate update failures, and escalate complex issues under change control.',
            'Maintain clear documentation in ServiceNow/Jira tickets and Hudu KB, including port mapping diagrams, how-to notes, and offboarding checklists.',
            'Coordinate with vendors for warranty claims and replacements; assist with small deployments and after-hours cutovers to minimize downtime.',
            'Contribute to root cause analysis (e.g., diagnosing faulty RAM causing WHEA logger errors) and share solutions to prevent recurring incidents.'
        ],
    },


    {
        logo: LogoWorkKingdomTechnology,
        logoAlt: 'Kingdom Technology logo',
        position: 'Kingdom Technology - Front-End Developer Intern',
        companyUrl: 'https://kingdomtechnology.framer.website/',
        startDate: new Date(2025, 4),
        endDate: new Date(2025, 7),
        summary: [
            'Collaborating on building MVPs for startups using Next.js, Tailwind CSS Integrating Strapi CMS for dynamic content management.',
            'Implementing complex forms with React Hook Form and Zod for robust validation.\n',
            'Working with webhooks and API integrations to enhance application functionality.\n',
            'Utilising Supabase for backend services and real-time data handling\n',
        ],
    },


    {
        logo: LogoWorkRans,
        logoAlt: 'Rans logo',
        position: 'RANS Australia - Website Development and Maintenance Intern',
        companyUrl: 'https://rans.com.au',
        startDate: new Date(2025, 1),
        endDate: new Date(2025, 4),
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
        companyUrl: 'https://ozworld.com.au',
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