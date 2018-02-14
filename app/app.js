var express=require('express');
var reload=require('reload');
var app=express();
app.set('port',process.env.PORT || 3000);
//set view engine
app.set('view engine','ejs');
app.set('views','app/views');
app.locals.siteTitle="Chandra Prakash";
var dataFile=require('./data/data.json');
//use middleware
app.use(express.static('app/public'));
//send data from app to routes by save it at application level
app.set('appData',dataFile);
//include the both index.js and friends.js file to use routes
app.use(require('./routers/index'));
app.use(require('./routers/friends'));
app.use(require('./routers/feedback'));
app.use(require('./routers/api'));
var server=app.listen(app.get('port'),function(){
  console.log("go to port "+app.get('port'));
});

reload(server,app);










// var http=require('http');
// var myServer=http.createServer(function(req,res){
//   res.writeHead(200,{"Content-Type":"text/html"});
//   res.write("<h1>connection meetup</h1>");
//   res.end();
// });
// myServer.listen(3000);
// console.log("go to port 3000");
