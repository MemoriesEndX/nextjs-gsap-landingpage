/** @type {import('next').NextConfig} */
const nextConfig = {
  // TypeScript configuration
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Production optimizations
  reactStrictMode: true,
  
  // Ensure proper SSR handling
  experimental: {
    // Remove any Turbopack-related experimental features
  },
  
  // Webpack configuration (stable fallback)
  webpack: (config, { isServer }) => {
    // Ensure proper handling of animation libraries
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
}

export default nextConfig
