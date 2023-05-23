const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/e-commerce");
/* `mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");` is establishing a connection to a
MongoDB database named "e-commerce" running on the local machine at the default port 27017. The
`mongoose.connect()` method is provided by the Mongoose library, which is a popular Object Data
Modeling (ODM) library for MongoDB in Node.js. */
mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
