/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Helps with WebGL canvas re-mounting smoothly
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

