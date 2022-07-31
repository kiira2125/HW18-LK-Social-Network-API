// create my connection ot mongoose

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://192.0.0.1:27017/social-network', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


module.exports = mongoose.connections;