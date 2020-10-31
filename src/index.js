const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('hello world')
})

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
})