/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/main/index.html", destination: "/", permanent: true },
      {
        source: "/main/private-tour.html",
        destination: "/private",
        permanent: true,
      },
      { source: "/main/golf-tour.html", destination: "/golf", permanent: true },
      { source: "/main/eos-info.html", destination: "/info", permanent: true },
      {
        source: "/main/private/private-:slug.html",
        destination: "/private/:slug",
        permanent: true,
      },
      {
        source: "/main/golf/golf-:slug.html",
        destination: "/golf/:slug",
        permanent: true,
      },
      {
        source: "/gallery/:slug.html",
        destination: "/gallery/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
