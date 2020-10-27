const mongoose = require('mongoose')

mongoose.connect('mongodb://3.20.189.143:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})