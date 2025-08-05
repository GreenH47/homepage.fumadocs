//src/app/docs/layout.tsx
import {DocsLayout, type DocsLayoutProps} from 'fumadocs-ui/layouts/docs';
import type {ReactNode} from 'react';
import {baseOptions, logo} from '@/app/layout.config';
import {source} from '@/lib/source';


const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: source.pageTree,
    sidebar: {
    },
};


export default function Layout({children}: { children: ReactNode }) {
    return <DocsLayout
        {...docsOptions}
        nav={{
            ...baseOptions.nav,
            title: (
                <>
                    {logo}
                    <span className="font-medium [.uwu_&]:hidden max-md:hidden">
              Green Huang's homepage
            </span>
                </>
            ),
            transparentMode: 'top',

        }}
    >

        {children}
    </DocsLayout>;
}
