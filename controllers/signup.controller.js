const User = require("../model/user.schema");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const tokenSecret = process.env.TOKENSECRET;
const expiresIn = process.env.EXPIRESIN;
const round = 10;

const signup = async (req, res) => {
    try{
        let {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({
              error: true,
              message: "Email or Password is required."
            });
        }
        let userRes = await User.findOne({email})
        if(userRes){
            let result = await bcrypt.compare(password, userRes.password);
            if (result){
                return res.json({message: "User Has Already signup"});
            }
        }
        await bcrypt.hash(password, round, async(error, hash) => {
        if(error) res.send(error).status(400)
        else{
            const newUser = User({email, password: hash})
            await newUser.save()
            .then( user => {
                res.send({token: generateToken(user), message: "Signup successfully."}).status(200)
            })
            .catch(error => {
                res.send(error).status(500)
            })
        }
    })
    }catch(err){
        console.log(err)
    }
}

function generateToken(user){
    return jwt.sign({data: user}, tokenSecret, {expiresIn})
}

module.exports = signup;