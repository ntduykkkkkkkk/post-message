const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/postManagerDB', { useNewUrlParser: true, useUnifiedTopology: true}, 
    err => {
        if (!err) {
            console.log('Connected')
        }else {
            console.log('Error while connecting to DB:' + JSON.stringify(err, undefined, 2))
        }
})