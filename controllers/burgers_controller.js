var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//Setup Routes

// Index Page 
router.get('/', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});

// Create a New Burger
router.post('/burgers', function (req, res) {
  burger.insertOne([
    "name", "devoured"], [
    req.body.name, req.body.devoured], function(result) {
    res.json({id: result.insertId});
  });
});

// Devour a Burger
router.put('/burgers/:id', function (req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne({
    devoured: true}, 
    condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    res.redirect('/');
  });
});

// Export routes
module.exports = router;
