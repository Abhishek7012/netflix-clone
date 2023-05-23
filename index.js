const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require('./db/User');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.set("view engine", "ejs")
app.use(cors());

require('./views/forgotpassword')(app);

// let user =  {
    // id: 'hbwhfwhebfyhewbvbrehb',
    // email: 'abhi12@gmail.com',
    // password : 'hwvbehvbhbwvhbhbhv'
// }
// 

app.post("/register",async (req, res)=> {
   /* `let user = new User(req.body);` is creating a new instance of the `User` model/schema with the
   data from the request body. This is typically used for creating a new user in a database. */
    /* `let user = new User(req.body);` is creating a new instance of the `User` model/schema with the
    data from the request body. This is typically used for creating a new user in a database. */
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password
    res.send(result);
});

app.post("/login", async (req, res) =>{
    console.log(req.body);
    if (req.body.password && req.body.email) {
/* `let user = await User.findOne(req.body).select("-password");` is querying the database to find a
user that matches the data in the request body. The `.select("-password")` part is excluding the
password field from the returned user object for security reasons. */
        let user = await User.findOne({email:req.body.email}).select("-password");
        // console.log('user',user);
        if (user) {
            res.send(user)
        } else {
            res.send({result: "no user found"})
        }
    }else{
        res.send({result: "no user found"})
    }
})

app.listen(5000, () => console.log(`chalu hogya on port ${5000}`));

// app.listen(5000);
module.exports = app;