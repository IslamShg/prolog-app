// const { config } = require('process')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(ts|tsx)',
    '../**/'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  // webpackFinal: async () => {
  //   // config.resolve.alias['next/router'] = require.resolve('../__mocks__/next/router.tsx')
  //   // return config
  // }
}
