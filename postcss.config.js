/* eslint-disable */
const IN_PRODUCTION = process.env.NODE_ENV === 'production';

const autoprefixer = require('autoprefixer');
const purgeCSS = require('@fullhuman/postcss-purgecss');

const config = {
  plugins: [
    autoprefixer,
    IN_PRODUCTION &&
      purgeCSS({
        content: ['./**/*.html', './**/*.tsx'],
        defaultExtractor(content) {
          const contentWithoutStyleBlocks = content.replace(
            /<style[^]+?<\/style>/gi,
            '',
          );
          return (
            contentWithoutStyleBlocks.match(
              /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g,
            ) || []
          );
        },
        whitelist: [],
        whitelistPatterns: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/,
        ],
      }),
  ],
};

module.exports = config;
