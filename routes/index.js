var express = require('express');
var models  = require('../models');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });




router.get('/', function(req, res) {

  // SOLUTION:
  // =========
  // use the burgertable model to find all burgers,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.matchtable.findAll({
  })
  // connect the findAll to this .then
  .then(function(matchtable) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('index', {
      // burger_name: req.session.burger_name,
      matchtable:matchtable
    });
  });
});

module.exports = router;
