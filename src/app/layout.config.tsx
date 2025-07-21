import { BookIcon, Linkedin, Mail, PhoneCall } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import InlineSVG from 'react-inlinesvg';
import Logo from '@/public/images/favicon.ico';


/**
 * This file contains the configuration for the base layout of the application.
 * It includes links to social media, documentation, and other resources.
 * The configuration is used by the BaseLayout component.
 * https://fumadocs.dev/docs/ui/navigation/links
 */

export const baseOptions: BaseLayoutProps = {
    githubUrl: 'https://github.com/GreenH47',
    links: [
        {
            text: 'Blog',
            url: '/docs',
        },

        {
            text: 'Resume',
            url: 'https://download.greenhuang.com/GreenHuang-IT-Support.pdf',
        },

        {
            type: 'icon',
            label: 'Linkedin', // `aria-label`
            icon: <Linkedin />,
            text: 'Linkedin',
            url: 'http://linkedin.com/in/greenhuang',
        },

        {
            type: 'icon',
            label: 'Email', // `aria-label`
            icon: <Mail />,
            text: 'Mail',
            url: 'mailto:greenhuang47@gmail.com',
        },

        {
            type: 'icon',
            label: 'PhoneCall', // `aria-label`
            icon: <PhoneCall />,
            text: 'PhoneCall',
            url: 'tel:+610478395855',
        },

        {
            type: 'icon',
            label: 'Wechat', // `aria-label`
            icon: <InlineSVG src="/images/logos/wechat.svg" className="h-6 w-6" />,
            text: 'Wechat',
            url: 'https://s3.greenhuang.com/wechat-card.png',
        },
    ],
};

