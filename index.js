const express=require('express');
const app=express();
app.set("view engine", "ejs");
const path=require('path');


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

const userRoutes = require("./routes/user");
// app.use("/libs", express.static(path.join(__dirname, "node_modules")));
app.use(userRoutes); 
app.listen(3000, function() {
    console.log("listening on port 3000");
});