const express = require("express");
const URL = require("../models/url")
const {restrictTo} = require("../middleware/auth")
const router = express.Router();

router.get("/admin/url", restrictTo(["ADMIN"]), async(req,res)=>{
    const allurls = await URL.find({});
    return res.render("admin",{
        urls:allurls,
    })
})

router.get("/",restrictTo(["NORMAL","ADMIN"]),async(req,res)=>{
    const allurls = await URL.find({createdBy:req.user._id});
    return res.render("home",{
        urls:allurls,
    })
})

router.get("/signup",(req,res)=>{
    res.render("signup");
});

router.get("/login",(req,res)=>{
    res.render("login")
})

module.exports=router;