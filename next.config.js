const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development",
  workboxOptions: {
    disableDevLogs: true,
  },
  buildExcludes: [/middleware-manifest.json$/], // ✅ helps static export
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ✅ static export enabled
  images: {
    domains: [
      "s4.anilist.co",
      "artworks.thetvdb.com",
      "media.kitsu.io",
      "image.tmdb.org",
    ],
    unoptimized: true, // ✅ required for export if using next/image
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withPWA(nextConfig);
