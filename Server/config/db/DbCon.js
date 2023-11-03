const mongoose = require("mongoose");
require("dotenv").config();

const DbCon = async () => {
  
// const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/todo');
const db=mongoose.connection;

db.on('connected', () => {
    console.log('====================================');
    console.log('Connected to MongoDB');
    console.log('====================================');

})
db.on('error', (err) => {
    console.log('====================================');
    console.log(err.message,'err');
    console.log('====================================');
})
};

module.exports = DbCon;
