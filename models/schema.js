const mongoose = require("mongoose");

const urlschema = new mongoose.Schema({
    shorturl: {
        type: String,
        required: true,
        unique: true,
    },
    originalurl: {
        type: String,
        required: true,
        unique: true,
    },
    visitingcount: [{ timestamp: { type: Number } }],
}, { timestamps: true });

const URL = mongoose.model("URL", urlschema); // Model name corrected to "URL"
module.exports = { URL };
