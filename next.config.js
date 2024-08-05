/** @type {import('next').NextConfig} */

const isProd = true;
const repoName = "Portfolio"; // replace with your repository name

module.exports = {
  output: "export",
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  publicRuntimeConfig: {
    basePath: isProd ? `/${repoName}` : "",
  },
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
