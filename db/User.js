/* This is a code snippet for defining a Mongoose schema for a user model in a Node.js application. */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     name : String,
     email : String,
     password : String

});

/* `module.exports` is a special object in Node.js that determines what should be exported from a
module. In this case, `mongoose.model("user", userSchema)` creates a Mongoose model named "user"
based on the `userSchema` schema, and `module.exports` is used to export this model so that it can
be used in other parts of the application. */
module.exports = mongoose.model("users", userSchema);
