var bcrypt = require('bcryptjs');
var models  = require('../models');
var express = require('express');
var router  = express.Router();



router.get('/info', function(req,res) {;
  models.Response.findOne({
    where: {user_id: req.session.user_id}
  }).then(function(response) {
    if (response == null){
    	res.redirect('/')
    }else{
      res.render('update/info', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      response: response
    });
    }
  })
});


router.put('/info/update/:user_id', function(req,res) {
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
    where: {user_id: req.session.user_id}
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  }, function(rejectedPromiseError){

  });
});


module.exports = router;


