const TreatPlugin = require('treat/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  webpack: (config) => {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();

      const keys = Object.keys(entries);
      keys.forEach(key => {
        if (key.includes('/__generated__/')) {
          delete entries[key];
        }
      });

      return entries;
    };

    return config;
  },
};