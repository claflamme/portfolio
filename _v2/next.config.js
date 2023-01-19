const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      loader: "yaml-loader",
    });
    return config;
  },
};

module.exports = nextConfig;
