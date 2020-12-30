/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
    '../ui': { url: '/dist/ui' }
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],
  install: [
    /* ... */
  ],
  installOptions: {
    sourceMap: true
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    sourceMaps: true
  },
  alias: {
    '@invision/ui': '../ui'
  }
};
