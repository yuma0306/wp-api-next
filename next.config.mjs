// const isProd = process.env.NODE_ENV === 'production'
// const prefixPath = isProd ? '/docs' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath: prefixPath,
  // assetPrefix: prefixPath,
};

export default nextConfig;
