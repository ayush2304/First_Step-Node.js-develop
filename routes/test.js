var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    var data = {
        name: "testrout",
        age:34
    }
    res.send(data);
});

router.post('/', function (req, res, next) {
    
    res.send("recieved");
});
module.exports = router;