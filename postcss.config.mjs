/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    'postcss-px-to-viewport-8-plugin': {
      unitToConvert: 'px',
      viewportWidth: 390,
      unitPrecision: 10,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 0,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
    },
  },
};

export default config;