// import 
const express = require("express"); // pour importer express
const connectDB = require('./config/connectDB');
require("dotenv").config ({path:"./config/.env"});

// initialisation de express
app = express(); 

//middleware global body-parser
app.use(express.json());
connectDB(); //Connceting Mongoose to mongodb

//Routing
app.use("/api/contact",require("./routes/userRoute"));
  
//Server Creating 
const port = 5000;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(
        "The server is running, " +
          " please, open your browser at http://localhost:%s",
        port
      );
});
