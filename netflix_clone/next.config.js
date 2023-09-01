/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    //? farklı domainlerden alınan image'ler için ilgili domainler config dosyasında belirtilmelidir.
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
      ],
    },
}

module.exports = nextConfig
