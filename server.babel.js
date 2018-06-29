const fs = require('fs')

const config = JSON.parse(fs.readFileSync('./.babelrc'))

require('core-js')
require('core-js/es6/promise').default = require('bluebird')
require('babel-register')(config)