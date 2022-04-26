var express = require("express");
var mongoose = require("mongoose");
var cors = require('cors');
var app = express();
app.use(cors());
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

//environment variables
require('dotenv').config();

//database connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, 
                      useUnifiedTopology: true });
const connection = mongoose.connection;

app.use(express.json())
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

connection.once('open', () => {
  console.log("Connected Database Successfully");
});
app.listen(3000,function(req,res){
  console.log("Server is started on port 3000");
}
);