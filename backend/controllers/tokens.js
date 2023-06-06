const User = require("../models/user");
const TokenGenerator = require("../models/token_generator")

const SessionsController = {

  Create: (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);
    
    User.findOne({ email: email }).then(async (user) => {
      if (!user) {
        console.log("auth error: user not found")
        res.status(401).json({ message: "auth error" });
      } else if (user.password !== password) {
        console.log("auth error: passwords do not match")
        res.status(401).json({ message: "auth error" });
      } else {
        const token = await TokenGenerator.jsonwebtoken(user.id)
        res.status(201).json({
          token: token,
          message: "OK",
          id: user.id, 
          usertype: user.usertype,
          location: user.location,
          username: user.name
        });
      }
    });
  }
};

module.exports = SessionsController;