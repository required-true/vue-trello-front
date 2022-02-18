/* eslint-disable @typescript-eslint/no-var-requires */

var express = require('express')
var serveStatic = require('serve-static')

const app = express()
app.use(serveStatic(__dirname))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
