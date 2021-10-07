// app.js
// require packages used in the project
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs ({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// setting static files 設定Express路由以提供靜態檔案
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
// past the data into 'index' partial template
  res.render('index')
})

//設定動態路由
app.get('/:page', (req, res) => {
  const pageName = req.params.page
  res.render('index', { pageName })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express app is running on the http://localhost:${port}`)
})