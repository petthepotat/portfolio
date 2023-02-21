/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['cdn-icons-png.flaticon.com'],
        path: '/_next/image',
        loader: 'default',
    }
}

module.exports = nextConfig