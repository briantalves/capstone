const express = require("express");
const app = express();
const cors = require("cors");

//middleware - this gets run on each call
app.use(express.json()); // this is so we can access req.body
app.use(cors());

//routes
app.use(express.urlencoded({ extended: true }));
const contactI = require("./routes/api/contact.js");

//URLs to access each API
app.use("/api/contact", contactI);
//localhost:5000/api/contact/createnew

http: app.listen(5500, () => {
  console.log("listening on port 5000");
});
