module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 0,
    'no-unused-vars':0,
    'space-before-function-paren': 0,
    'space-before-blocks': 0,
    'space-infix-ops':0,
    'no-sequences':0,
    'brace-style':0,
    'no-tabs':0,
    'no-mixed-spaces-and-tabs':0,
    'no-trailing-spaces':0,
    'key-spacing':0
  }
}
