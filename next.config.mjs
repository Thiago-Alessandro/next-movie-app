/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns : [
            {
                protocol: "http",
                hostname: "image.tmdb.org",
                pathname: "**"
            },
        ],
    },
};

export default nextConfig;
