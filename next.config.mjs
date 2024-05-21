

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
  },
};

export default nextConfig;

