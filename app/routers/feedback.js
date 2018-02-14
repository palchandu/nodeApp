var express=require('express');
var router=express.Router();

router.get('/feedback',function(req,res){
  // res.send(`
  //   <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css">
  //   <link rel="stylesheet" href="css/custom.css" type="text/css">
  //     <h2>Welcome to  User</h2>
  //     <img src='image/Abc.png' />
  //     <script type="text/javascript" src="js/bootstrap.min.js"></script>
  //     <script src="/reload/reload.js"></script>
  //   `);
  var infos={"pageTitle":"Feedback","pageId":"feedback"}
  res.render('feedback',infos);
});

module.exports=router;
