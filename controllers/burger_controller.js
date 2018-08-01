var express = require("express");

var burger = require("../models/burger");
var router = express.Router();

router.get('/', function (req, res) {
    res.redirect('/burgers')
});

router.get('/burgers', function (req, res) {
    burger.selectAll('burgers', function (data) {
        var hbsObject = { burgers: data }
        res.render('index', hbsObject);
    });
});

router.post('/burgers/create', function (req, res) {
    console.log(req.body.burger_name);
    burger.create('burgers', req.body.burger_name, req.body.devoured, function (data) {
        res.redirect('/burgers')
    });
});

router.put('/burgers/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    burger.update('burgers', { 'devoured': req.body.devoured }, condition, function (data) {
        res.redirect('/burgers');
    });
});

module.exports = router;