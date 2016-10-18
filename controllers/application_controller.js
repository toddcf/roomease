var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/index');
});

// router.get('/', function(req, res) {
//   res.redirect('/stephindex');
// });

module.exports = router;
