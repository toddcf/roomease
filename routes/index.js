var express = require('express');
var models  = require('../models');
var router = express.Router();


router.get('/', function(req, res) {
  models.matchtable.findAll({
  })
  .then(function(matchtable) {
    res.render('index', {
      matchtable:matchtable
    });
  });
});


router.post('/create', function(req, res){
  models.matchtable.create({
    matchname:req.body.name,
    smoke:req.body.smoke,
    smokerate:req.body.smokerate
  })
.then(function(){

  res.redirect('/');
  });
});


router.put('/update/:id',function(req,res){

  models.matchtable.update(
  {
    smoke: req.body.smoke,
    smokerate:req.body.smokerate
  },
  {
    where: { id : req.params.id }
  })
  .then(function (result) {
    res.redirect('/');
  }, function(rejectedPromiseError){

  });
});


router.delete('/delete/:id', function(req,res) {
  models.matchtable.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function() {
    res.redirect('/');
  });
});


module.exports = router;
