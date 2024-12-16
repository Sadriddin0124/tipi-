import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Supported locales
const locales = ['en', 'ru', 'uz'];

export default getRequestConfig(async ({ locale }) => {
  // Validate the incoming locale
  if (!locales.includes(locale as any)) notFound();

  // Dynamically import messages based on the locale
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
