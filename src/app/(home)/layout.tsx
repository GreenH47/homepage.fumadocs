

import type {ReactNode} from 'react';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions} from '@/app/layout.config';


import {Metadata} from 'next';
// import {Providers} from '@/lib/providers';
// import Footer from '@/components/layout/footer';
import '@/global.css';

const title = 'Green Huang | Full Stack Developer From Melbourne Australia.';
const description =
    'A self-proclaimed programmer who specializes in full stack develop and deployment.';
const url = 'https://greenhuang.com/';

export const metadata: Metadata = {
    metadataBase: new URL(url),
    title,
    description,
    keywords: [
        'Full Stack Developer',
        'C# Developer',
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
                url: '/images/open-graph-sagar.png',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: '@shahsagarm',
        images: '/images/open-graph-sagar.png',
    },
    icons: {
        icon: '/icon.png',
        shortcut: 'https://s3.greenhuang.com/favicon.ico',
        apple: 'https://s3.greenhuang.com/favicon.ico',
    },
};

export default function Layout({children}: { children: ReactNode }) {
    return (

            <HomeLayout {...baseOptions}>{children}</HomeLayout>

    );
}
