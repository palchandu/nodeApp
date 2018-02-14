var express=require('express');
var router=express.Router();
//var dataFile=require('../data/data.json');
//all friends info
router.get('/friends',function(req,res){
  //get data from application scope
  var data=req.app.get('appData');
  var pageFriends=data.friends;
  var infos={"pageTitle":"Friends","pageId":"friends","friends":pageFriends}
  res.render('friends',infos);
});
//particular user userInfo
router.get('/friends/:friendid',function(req,res){
  var friends=dataFile.friends[req.params.friendid];
  res.send(`
      <h2>Hi</h2>
      <p>${friends.name}</p>
      <p>${friends.title}</p>
      <script src="/reload/reload.js"></script>
    `);
});

module.exports=router;
