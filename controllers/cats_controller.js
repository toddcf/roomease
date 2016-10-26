var models  = require('../models');
var express = require('express');
var router  = express.Router();
var matchFunc = require('../matchingAlgorithm.js');
var nodeMail = require('nodemailer');


router.get('/', function(req, res) {
    models.Response.findAll({
        include: [ models.User ]
    })

    // connect the findAll to this .then
    .then(function(responses) {
        // Grab the user info from our req.
        res.render('cats/index', {
            user_id: req.session.user_id,
            email: req.session.user_email,
            logged_in: req.session.logged_in,
            firstname: req.session.firstname,
            responses: responses
        });
    });
});

router.get('/results',function(req,res){
    models.Response.findAll({
        include: [ models.User ]
    })

    // connect the findAll to this .then
    .then(function(responses) {
        // Grab the user info from our req.
        var userArr = [];
        models.User.findAll().then(function(usertable){
            for(var i=0;i<responses.length;i++){
                // if(responses[i].dataValues.zip == currentUserZip){
                userArr.push({
                    user_id: responses[i].dataValues.user_id,
                    email: usertable[i].dataValues.email,
                    name: usertable[i].dataValues.firstname,
                    photoLink: responses[i].dataValues.imageicon_user,
                    zip: responses[i].dataValues.zipcode_user,
                    bio: responses[i].dataValues.bio_user,
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
                        photoLink: "http://www.able2uk.com/media/k2/items/cache/6a90cca7c7eb6a9c4add1364d879cbc6_XL.jpg",
                        zip: "Users' zip codes will appear here.",
                        bio: "Users' biographies will appear here."
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
                firstname: req.session.firstname,
                responses: responses,
                matchdata: matchdata
            });
        });
    });
})
// =============================================/

router.put('/results/update/:user_id', function(req,res) {
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
        where: {user_id: req.session.user_id}
    })

    // connect it to this .then.
    .then(function (result) {
        res.redirect('/index/results');
    }, function(rejectedPromiseError){

    });
});



// Post
router.post('/create', function (req, res) {
    console.log("req.session.user_id:");
    console.log(req.session.user_id);

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

    // Connect the .create to this .then
    .then(function() {
        res.redirect('/index/results');
    });
});

// Put
router.put('/update/:id', function(req,res) {
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

// Delete
router.delete('/delete/:id', function(req,res) {
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

// Post
router.post('/results/send', function(req,res) {
    var transporter = nodeMail.createTransport({
        service: 'Gmail',
        auth: {
            user: 'femichelletest@gmail.com',
            pass: 'femichelle'
        }
    })

    var mailOptions = {
        from:     'Noreply',
        to:       req.body.email,
        subject:  'Roomate Request',
        text:     'you have a submission with the following... Name: '+ req.body.name +'Email:'+ req.body.name+'Message: '+req.body.message,
        html:     '<p>you have a submission with the following...</p><ul><li>Name:'+req.body.name+'</li><li>Email:'+req.body.email+'<li>Message:'+ req.body.message+'</li></li></ul>'
    }

    transporter.sendMail(mailOptions, function(err,info) {
        if(err) {
            console.log(err)
            res.redirect('/index/results')
        }else {
            console.log('Message send to '+ req.body.email)
            res.redirect('/index/results')
        }
    })
})

module.exports = router;