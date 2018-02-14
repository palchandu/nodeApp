var express=require('express');
var router=express.Router();
var feedbackData=require('../data/feedback.json');
router.get('/feed',function(req,res){
res.send(feedbackData);
});

module.exports=router;
