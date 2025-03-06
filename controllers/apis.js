const  {URL} = require("../models/schema");
const shortid = require("shortid");

async function generatenewurl(req, res) {
    console.log("error")
     const body = req.body;
     if(!body.url)
     {
        return res.status(400).json({error: 'NOT FOUND'})
     }
     const shortId = shortid(6);
     await URL.create({
        shorturl: shortId,
        originalurl: body.url,
        visitingcount: []
     })
     return res.render('render',{
        id: shortId
    })
}

async function getorriginalurl(req, res) {
    const shortId = req.params.id
    const entry = await URL.findOneAndUpdate({shorturl: shortId}, {
        $push: {
            visitingcount: {
                timestamp: Date.now()
            }
        }
    })
    res.redirect(entry.originalurl);
}

async function getdata(req, res) {
    const shortId = req.params.shortId
    const result = await URL.findOne({shortId})
    return res.json({
        clickcount: result.visitingcount.length,
        analysis: result.visitingcount
    })
    
}

module.exports = {generatenewurl,getorriginalurl, getdata}