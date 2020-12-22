const mongoose = require('mongoose');// Referencing Mongoose
//*******Connecting to DB */
function connectDB() {
    mongoose.connect(process.env.URL_connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, ()=>{
      console.log("connected to db with success");
  });
 }

 module.exports = connectDB;