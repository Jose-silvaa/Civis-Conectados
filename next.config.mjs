import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack : (config) =>{
    config.resolve.alias['@'] = path.resolve('src');
    return config;
  },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/**',
        },
      ],
    },
  };
  
export default nextConfig;
