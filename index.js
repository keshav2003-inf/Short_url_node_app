const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const {checkforAuthentication,restrictTo} = require("./middleware/auth") //middleware_to_authenticate_loggedIn_users
const { connectionDB } = require("./connections");
const URL = require("./models/url");

const userRoute = require("./routes/user")
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter")

const app = express();
const PORT = 8001;

connectionDB("mongodb://127.0.0.1:27017/shortURL_app").then(() =>
    console.log("connected to Database")
);

//ViewEngine
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

//Parsing_middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(checkforAuthentication);

//Routes
app.use("/url",restrictTo("[NORMAL, ADMIN]"),urlRoute); 
app.use("/user",userRoute); 
app.use("/",staticRoute);  //this is home page

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
        shortId,
        },
        {
        $push: {
            visitHistory: {
            timestamp: Date.now(),
            },
        },
        }
    );
    if (!entry){
        return res.status(404).json({msg:"ShortUrl not found"});
    }
    res.redirect(entry.redirectURL);
});

app.get("/analytics/:shortId", async(req,res)=>{
    const shortId = req.params.shortId; 
    const result = await URL.findOne({shortId});
    return res.json({totalclicks:result.visitHistory.length, analytics:result.visitHistory})

})

app.listen(PORT, () => console.log("Server Started at PORT 8001"));
