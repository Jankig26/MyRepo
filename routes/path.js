const express = require("express")
const {generatenewurl, getorriginalurl, getdata} = require("../controllers/apis")

const router = express.Router();

router.post("/" , generatenewurl);
router.get("/:id", getorriginalurl);
router.get("/data/:shortID", getdata)

module.exports = router;