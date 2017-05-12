const path = require('path')

module.exports = async function (options) {

  this.addMiddleware((req, res, next) => {
    console.log('My Middleware')
    next()
  })

  this.addMiddleware({
    path: '/api',
    handler (req, res, next) {
      res.end('It works!')
    }
  })

}
