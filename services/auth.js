const jwt = require("jsonwebtoken");
const secret = "keshav@#11(*";

//setUser_function_generates_tokens
function setUser(user){
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
    },secret)
};

//verifies_token_with_the_secret_key
function getUser(token){
    if(!token) return null;
    return jwt.verify(token,secret)
};

module.exports={
    setUser,
    getUser,
}


