import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
    weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-outfit',
    weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
    title: 'Concepto - AI-Powered Learning Platform | Transform How You Learn',
    description: 'Concepto transforms videos and documents into personalized audio explanations, visual stories, and smart quizzes. AI-powered learning for individuals and enterprises.',
    keywords: ['AI learning', 'education technology', 'audio learning', 'visual stories', 'smart quizzes', 'EdTech', 'online learning', 'personalized learning', 'enterprise training', 'e-learning platform'],
    authors: [{ name: 'Concepto' }],
    creator: 'Concepto',
    publisher: 'Concepto',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://concepto.app',
        siteName: 'Concepto',
        title: 'Concepto - AI-Powered Learning Platform',
        description: 'Transform how you learn with AI-powered audio, visuals, and quizzes. Join 50,000+ learners today.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Concepto - AI Learning Platform',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Concepto - AI-Powered Learning Platform',
        description: 'Transform how you learn with AI-powered audio, visuals, and quizzes.',
        images: ['/og-image.png'],
        creator: '@concepto',
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#0a0a0f',
    manifest: '/manifest.json',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon-16x16.png',
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            try {
                                const theme = localStorage.getItem('theme');
                                if (theme === 'dark') {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark');
                                }
                            } catch (e) {}
                        `,
                    }}
                />
            </head>
            <body className={`${inter.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
