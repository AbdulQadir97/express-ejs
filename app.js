const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
})
app.get('/form', (req, res) => {
    res.render('pages/form');
})

app.listen(process.env.PORT 
    || 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})