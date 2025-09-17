const express = require("express")
const {handleUserSignup,handleLoginPage} = require("../controllers/user")
const router = express.Router();

router.post("/",handleUserSignup)

router.post("/login",handleLoginPage)

module.exports = router;