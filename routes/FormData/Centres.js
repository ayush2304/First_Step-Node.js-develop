var express = require('express');
var router = express.Router();


var Centres = [
    "GAUR SAUNDARYAM",
    "SEC-122, NOIDA",
    "CROSSING REPUBLIC",
    "NEW DELHI",
    "HYDERABAD",
    "BANGALOREYES"
]
/* GET home page. */
router.get('/', function (req, res, next) {
    var data={
        centres:Centres
    };
        res.send(Centres);
    });
module.exports = router;