/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'codeup.in' },
      { protocol: 'https', hostname: 'show.codeup.in' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'github.com' },
      { protocol: 'https', hostname: 'wso2.com' },
      { protocol: 'https', hostname: 'zordial.com' },
      { protocol: 'https', hostname: 'www.horizontaldigital.com' },
    ],
  },
};

module.exports = nextConfig;
