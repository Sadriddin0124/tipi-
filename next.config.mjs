import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.tipi.sectorsoft.uz'], // Add your image domains here
  },
};

// Wrap nextConfig with the next-intl plugin
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
