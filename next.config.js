/** @type {import('next').NextConfig} */
const nextConfig = {
  modularizeImports: {
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },
  env: {
    HOST: process.env.HOST,
    CRYPTO_KEY: process.env.CRYPTO_KEY
  },
};

module.exports = nextConfig;