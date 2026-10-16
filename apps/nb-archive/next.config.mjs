/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nb-archive',
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  typedRoutes: false,
  turbopack: { root: process.cwd() }
};
export default nextConfig;
