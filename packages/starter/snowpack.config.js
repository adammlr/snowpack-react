/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
    '../ui': { url: '/dist/ui' }
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-typescript'],

  packageOptions: {
    sourcemap: true
  },
  buildOptions: {
    sourcemap: true
  },
  alias: {
    '@invision/ui': '../ui'
  }
};
