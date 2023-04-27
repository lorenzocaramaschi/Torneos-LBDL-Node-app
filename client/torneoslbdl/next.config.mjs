/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    host: "https://torneoslbdl-backend.onrender.com",
  },
  // IMPORTANT: IF YOU WANT TO ADD IMAGES YOU HAVE TO REGISTER THEM HERE
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // THIS IS AN EXAMPLE, I TOOK MY IMAGES FROM IMGUR, SO I HAD TO PUT THE LINK LIKE THIS
        hostname: "**i.imgur.com",
      },
    ],
  },
};

export default nextConfig;
