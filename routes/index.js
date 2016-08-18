var express = require('express');
var router = express.Router();
var dotenv = require('dotenv').config();
var superagent = require('superagent')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Wow App' });
});



module.exports = router;
