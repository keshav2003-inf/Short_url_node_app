const shortid = require("shortid")
const URL = require("../models/url");

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ msg: "url is required" });
    }
    const shortId = shortid(); //shortid_package_function
    const newURL=await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
    });

    if (!newURL){
        return res.status(500).json({msg:"internal error"})
    }
    
    return res.render("home",{
        id:shortId
    })
}

module.exports = {
  handleGenerateNewShortUrl,
};
