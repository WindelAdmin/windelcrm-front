/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  env: {
    HOST: process.env.HOST,
    SECRET_KEY: process.env.SECRET_KEY
  },
};

module.exports = nextConfig;