const Express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const compression = require('compression')

const app = new Express()

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(Express.static('./dist'))

app.use('/', Express.static(path.join(__dirname, 'dist')))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

const port = 6868

app.listen(port, error => {
  if (error) {
    console.error('err:', error)
  }
})
