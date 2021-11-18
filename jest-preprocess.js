const babelOptions = {
  presets: ['babel-preset-gatsby'],
}

module.exports = require('babel-jest').default.createTransformer(babelOptions)
const babelOptions = {
  presets: ['babel-preset-gatsby', '@babel/preset-typescript'],
}
