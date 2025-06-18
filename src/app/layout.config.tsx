import { BookIcon, Linkedin, Mail, PhoneCall } from 'lucide-react';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

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
            icon: <BookIcon />,
            text: 'Blog',
            url: '/docs',
            // secondary items will be displayed differently on navbar
            secondary: false,
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
    ],
};
