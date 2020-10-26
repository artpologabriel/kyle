const mongoose = require('mongoose')

mongoose.connect('mongodb://3.20.189.143/src-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})