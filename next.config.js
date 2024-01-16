/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // serverActions: {
    //   bodySizeLimit: "3,145,728 || 3mb ",
    // },
    mdxRs: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

module.exports = nextConfig;
