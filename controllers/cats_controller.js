var models  = require('../models');
var express = require('express');
var router  = express.Router();
var matchFunc = require('../matchingAlgorithm.js');


router.get('/', function(req, res) {

  // SOLUTION:
  // =========
  // use the Cat model to find all cats,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.Response.findAll({
    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(responses) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('cats/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      responses: responses
    });
  });
});

// ???
router.get('/results',function(req,res){

  var matchdata = matchFunc('colinm');
  console.log(matchdata);

  models.Response.findAll({
    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(responses) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    
    res.render('results', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      responses: responses,
      matchdata: matchdata
    });
  });
})
// ???

router.post('/create', function (req, res) {
  // SOLUTION:
  // =========
  // use the Cat model to create a cat based on what's
  // passed in req.body (name, sleepy, user_id)
  models.Response.create({
    smoke_user: req.body.smoke_user,
    smoke_roommate: req.body.smoke_roommate,

    schedule_user: req.body.schedule_user,
    schedule_roommate: req.body.schedule_roommate,

    personality_user: req.body.personality_user,
    personality_roommate: req.body.personality_roommate,

    parties_user:req.body.parties_user,
    parties_roommate:req.body.parties_roommate,

    friends_user: req.body.friends_user,
    friends_roommate: req.body.friends_roommate,

    pets_user: req.body.pets_user,
    pets_roommate: req.body.pets_roommate,

    cleanliness_user: req.body.cleanliness_user,
    cleanliness_roommate: req.body.cleanliness_roommate,

    music_user: req.body.music_user,
    music_roommate: req.body.music_roommate,

    imageicon_user: req.body.imageicon_user,

    user_id: req.session.user_id
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});

router.put('/update/:id', function(req,res) {
  // SOLUTION:
  // =========
  // use the Cat model to update a cat's sleepy status
  // based on the boolean passed in req.body sleepy
  // and the id of the cat (as passed in the url)
  models.Response.update(
  {
    smoke_user: req.body.smoke_user,
    smoke_roommate: req.body.smoke_roommate,

    schedule_user: req.body.schedule_user,
    schedule_roommate: req.body.schedule_roommate,

    personality_user: req.body.personality_user,
    personality_roommate: req.body.personality_roommate,

    parties_user:req.body.parties_user,
    parties_roommate:req.body.parties_roommate,

    friends_user: req.body.friends_user,
    friends_roommate: req.body.friends_roommate,

    pets_user: req.body.pets_user,
    pets_roommate: req.body.pets_roommate,

    cleanliness_user: req.body.cleanliness_user,
    cleanliness_roommate: req.body.cleanliness_roommate,

    music_user: req.body.music_user,
    music_roommate: req.body.music_roommate,

    imageicon_user: req.body.imageicon_user
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  }, function(rejectedPromiseError){

  });
});


router.delete('/delete/:id', function(req,res) {
  // SOLUTION:
  // =========
  // use the Cat model to delete a cat
  // based on the id passed in the url
  models.Response.destroy({
    where: {
      id: req.params.id
    }
  })
  // connect it to this .then.
  .then(function() {
    res.redirect('/');
  });

});


module.exports = router;
