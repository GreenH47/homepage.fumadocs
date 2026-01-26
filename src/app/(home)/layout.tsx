

import type {ReactNode} from 'react';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions} from '@/app/layout.config';


import {Metadata} from 'next';
// import {Providers} from '@/lib/providers';
// import Footer from '@/components/layout/footer';
import '@/global.css';

const title = "Green Huang | IT support & network engineer From Melbourne Australia.";
const description =
    'I\'m a curious and dedicated IT support & network engineer with a background in full-stack development.';
const url = 'https://greenhuang.com/';

const ogImage = 'https://s3.greenhuang.com/green-opengraph.png';

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title,
    description,
    keywords: [
        'IT support engineer',
        'Network Engineer  ',
        'Next.js Developer',
        'AWS Engineer',
    ],
    creator: 'Green Huang',
    openGraph: {
        type: 'website',
        url,
        title,
        description,
        siteName: title,
        images: [
            {
                url: ogImage, // <- changed
                width: 1200,
                height: 630,
                alt: title,
            },
        ],
    },

    icons: {
        icon: '/icon.png',
        shortcut: 'https://s3.greenhuang.com/favicon.ico',
        apple: 'https://s3.greenhuang.com/favicon.ico',
    },
};

export default function Layout({children}: { children: ReactNode }) {
    return (

            <HomeLayout {...baseOptions}
                        links={[
                            {
                                text: 'Blog',
                                url: '/docs',
                                active: 'nested-url',

                            },

                            {
                                text: 'Resume',
                                url: 'https://download.greenhuang.com/GreenHuang-IT-Support.pdf',
                                active: 'nested-url',
                            },

                            {
                                text: 'About',
                                url: '#about',
                                active: 'nested-url',
                            },

                            {
                                text: 'Employment',
                                url: '#employment',
                                active: 'nested-url',
                            },

                            {
                                text: 'Recommendations',
                                url: '#recommendations',
                                active: 'nested-url',
                            },

                        ]}

            >
                {children}
            </HomeLayout>

    );
}
