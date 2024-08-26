/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/english-for-tech-b1-b2-level',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
