/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    host: "https://torneoslbdl-backend.onrender.com",
    db_url:
      "mongodb+srv://lolo:<password>@cluster1.1szpisc.mongodb.net/?retryWrites=true&w=majority",
    port: 3001,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
