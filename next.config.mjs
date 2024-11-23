import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.tipi.sectorsoft.uz'], // Add your image domains here
  },
};

export default withNextIntl(nextConfig);
