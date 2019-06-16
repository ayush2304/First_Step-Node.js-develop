var express = require('express');
var router = express.Router();

var Programs = [
    "NURSERY",
    "PLAY GROUP",
    "PRE-NURSERY",
    "KG",
    "DAY CARE"
]
router.get('/', function (req, res, next) {
var data={
    centres:Programs
};
//console.log("this is the data"+JSON.stringify(data));
    res.send(Programs);
});

module.exports = router;