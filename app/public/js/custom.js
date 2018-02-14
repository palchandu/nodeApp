$(function(){
$.getJSON('feed',updateFeedback);
function updateFeedback(data)
{
  var output='';
  $.each(data,function(key,item){
    output +='<div><h2>'+item.name+'</h2><h2>'+item.message+'</h2></div>';
  });
  $("#feed_contents").html(output);
}

$('#feedback-form').submit(function(e){
  e.preventDefault();
  $.post('api',{
    
  })
})
});
