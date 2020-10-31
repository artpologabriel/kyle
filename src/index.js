const path = require('path')
const express = require('express')

const app = express()

app.get('', (req, res) => {
    res.render('hello world')
})

app.listen(3001, () => {
    console.log('Server is up on port 3001.')
})