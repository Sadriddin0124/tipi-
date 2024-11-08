import { NextIntlClientProvider } from 'next-intl';
import React, { ReactNode } from 'react';
import "./globals.css"
import Navbar from '../components/Navbar';
import Loader from '../components/ui/loader';
import Footer from '../components/Footer';
import 'aos/dist/aos.css';  

interface RootLayoutProps {
    children: ReactNode;
    params: {
        locale: string;
    };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
    const { locale } = params;

    let messages;
    try {
        messages = require(`../../../messages/${locale}.json`);
    } catch (error) {
        console.error("Locale file not found:", error);
        messages = {};
    }

    return (
        <html lang={locale}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar/>
                    <Loader/>
                    {children}
                    <Footer/>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
