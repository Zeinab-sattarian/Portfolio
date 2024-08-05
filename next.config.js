/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/json",
          },
        ],
      },
    ];
  },
};
