const express = require('express');
const viewrouter = express.Router();
const {URL} = require('../models/schema')

viewrouter.get('/', async (req,res) => {
    const allUrls = await URL.find({})
    return res.render('render', {
        url: allUrls
    })
})


module.exports = {viewrouter} 