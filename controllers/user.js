const User = require("../models/user")
const {v4:uuidv4} = require("uuid");
const {setUser} = require("../services/auth")

async function handleUserSignup(req,res) {
    const {name,email,password} = req.body
    await User.create({
        name,
        email,
        password
    });
    return res.redirect('/');
}

async function handleLoginPage(req,res){
    const {email,password} = req.body
    const user=await User.findOne({
        email,
        password
    });
    if (!user){
        return res.render("login",{
            error:"username or email not found"
        })
    }
    
    const token=setUser(user);
    res.cookie("token",token);
    return res.redirect("/");
}

module.exports = {
    handleUserSignup,
    handleLoginPage
}