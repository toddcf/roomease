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
      firstname: req.session.firstname,
      responses: responses
    });
  });
});

// ???
router.get('/results',function(req,res){


  models.Response.findAll({
    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(responses) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.

      // for(var i=0;i<responses.length;i++){
      //   console.log("id "+i);
      //   console.log(responses[i].getDataValue('id'));
      // }

      var userArr = [];

      models.User.findAll().then(function(usertable){
        for(var i=0;i<responses.length;i++){

          userArr.push({
            user_id: responses[i].dataValues.user_id,
            email: usertable[i].dataValues.email,
            name: "Name goes here",
            photoLink: responses[i].dataValues.imageicon_user,
            scores: [
              [responses[i].dataValues.smoke_user, responses[i].dataValues.smoke_roommate],
              [responses[i].dataValues.schedule_user, responses[i].dataValues.schedule_roommate],
              [responses[i].dataValues.personality_user, responses[i].dataValues.personality_roommate],
              [responses[i].dataValues.parties_user, responses[i].dataValues.parties_roommate],
              [responses[i].dataValues.friends_user, responses[i].dataValues.friends_roommate],
              [responses[i].dataValues.pets_user, responses[i].dataValues.pets_roommate],
              [responses[i].dataValues.cleanliness_user, responses[i].dataValues.cleanliness_roommate],
              [responses[i].dataValues.music_user, responses[i].dataValues.music_roommate]
            ]
          });
        }  

        // If you are the first person to sign up, create dummy data for the results table
        if(responses.length == 1){
          var matchdata = [{
            "friendData": {
              user_id: 0,
              email: "You are the first person to sign up, so no matches!",
              name: "Name goes here",
              photoLink: "https://www.sitebuilderreport.com/assets/facebook-stock-up-08c6c9a855df26a3b13a34ac62bb75cc.jpg"
            },
            "compat": "None yet "}];
        }
        // Otherwise, find matches
        else{
          var matchdata = matchFunc(req.session.user_id, userArr);
        }

        res.render('results', {
          user_id: req.session.user_id,
          email: req.session.user_email,
          logged_in: req.session.logged_in,
          responses: responses,
          matchdata: matchdata
        });

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

    bio_user:req.body.bio_user,
    zipcode_user: req.body.zipcode_user,

    user_id: req.session.user_id
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/index/results');
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

    imageicon_user: req.body.imageicon_user,

    bio_user:req.body.bio_user,
    zipcode_user: req.body.zipcode_user

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
