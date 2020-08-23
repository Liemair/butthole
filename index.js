const express = require('express')
const cool = require('cool-ascii-faces');
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  // todo: fix this later "//" this is commented out.
  .get('/cool', (req, res) => res.send(cool()))
  .get('/idiot', (req, res) => res.send("spencer's  a fucking idiot"))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
