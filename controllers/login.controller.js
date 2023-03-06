const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

const login = async(req, res) => {
  try{
    let {password, token} = req.body;
    if (!token || !password) {
      return res.status(400).json({
        error: true,
        message: "Token or password is required."
      });
    }
    await jwt.verify(token, process.env.TOKENSECRET, async function (err, user) {
      if (err) return res.status(401).json({
        error: true,
        message: "Invalid token."
      });
      let result = await bcrypt.compare(password, user.data.password);
      if (!result){
        return res.status(401).json({error: true,message: "wrong password"})
      }else{
        return res.status(200).json({error: null,message: "login successfully."})
      }
    })
  }catch(err){
    console.log(err);
  }
}

module.exports = login;