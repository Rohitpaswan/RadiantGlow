/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jppjdhftxjmxeuglmnna.supabase.co',
        pathname: '/storage/v1/**', // Adjust the pathname as needed
      },
    ],
    domains: ['lh3.googleusercontent.com'], // Correctly placed domains configuration
  },
};

export default nextConfig;
