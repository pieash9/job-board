/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "l65tuhhdqv3zqkao.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
