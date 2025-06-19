//src/app/layout.tsx
import '@/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
// import { ThemeProvider } from 'next-themes'
import {Metadata} from 'next';


export const metadata: Metadata = {
    icons: {
        icon: '/icon.png',
        shortcut: 'https://s3.greenhuang.com/favicon.ico',
        apple: 'https://s3.greenhuang.com/favicon.ico',
    },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-gray text-gray-600 antialiased flex flex-col min-h-screen">
        <RootProvider
            theme={{
                defaultTheme: 'light',
            }}
        >
            {children}
        </RootProvider>
      </body>
    </html>
  );
}
