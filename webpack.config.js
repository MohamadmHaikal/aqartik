// webpack.config.js
module.exports = {
  // ...other webpack config options
  module: {
    rules: [
      // ...other rules
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
        options: {
          throwIfNamespace: false,
        },
      },
    ],
  },
};
