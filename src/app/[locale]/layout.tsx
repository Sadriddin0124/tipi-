import { NextIntlClientProvider } from 'next-intl';
import React, { ReactNode } from 'react';
import "./globals.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

interface RootLayoutProps {
    children: ReactNode;
    params: {
        locale: string;
    };
}

export const metadata = {
    title: 'TIPI',
    description: 'Toshkent Iqtisodiyot va Pedagogika Instituti',
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const { locale } = params;

    // Dynamically load the locale-specific messages
    let messages;
    try {
        messages = await import(`../../../messages/${locale}.json`);
    } catch (error) {
        console.error("Locale file not found:", error);
        messages = {};
    }

    return (
        <html lang={locale}>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
            </head>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages.default || messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
