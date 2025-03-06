const express = require("express");
const {connectmongodb} = require("./connection.js")
const router = require("./routes/path.js")
const {viewrouter} = require("./routes/viewrouter.js")
const path = require("path")


const app = express();
const port = 8000;

app.use(express.json())
app.use(express.urlencoded({extended: false}))

connectmongodb("mongodb://localhost:27017/urlshortner")
.then(() => console.log("connected successfully"))
.catch((err) => console.log("error occurd", err));

app.set("view engine", "ejs")
app.set('views', path.resolve("./view"))

app.use("/url", router)
app.use("/", viewrouter)




    
app.listen(port, () => {
    console.log(`Started server on this  ${port}`);
});