const mongoose = require('mongoose');

const ConnectDB = async()=> {
    mongoose.connect('mongodb://localhost:27017/SAC');
}




module.exports = ConnectDB;