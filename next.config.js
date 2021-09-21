const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
});
module.exports = {
  ...withNextra(),
  env: {
    PUBLIC_URL: 'https://ifpb.github.io/ls',
    assetPrefix: './',
  },
  images: {
    loader: 'imgix',
    path: '',
  },
};
