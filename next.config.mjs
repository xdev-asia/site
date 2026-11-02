/** @type {import('next').NextConfig} */
// Static export: GitHub Pages serves the out/ folder with no server.
export default {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};
