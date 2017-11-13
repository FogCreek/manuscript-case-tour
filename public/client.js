/* global Feature */

$(function() {
  $('.feature-box').click(teach);
  $('.feature-box').hover(tutor, stopTutoring);
  $('#hyperdev-link').hover(heartRed, heartWhite);
  explainerListeners();
  mouseListeners();
});

function explainerListeners () {
  $('#what-is-this').click(function(){
    $('#explainer').slideToggle();
  });
  $('#hide-explainer').click(function(){
    $('#explainer').slideUp();
  });
}

function mouseListeners () {
  $('#kakapo-case-image-wrapper').mousemove(function(e){
    $('#kakapo-bubble').css({top:e.pageY - 195 ,left:e.pageX - 55});
  });  
  $(document).mousemove(function(e){
    removeBubble()
  });
}

function teach(feature) {
  var name = feature.currentTarget.id;
  (new Feature(name)).teach();
}

function tutor(feature) {
  var name = feature.currentTarget.id;
  var lesson = new Feature(name);
  lesson.tutor();
  lesson.highlightLinked();
  setTimeout(function (){
    removeBubble(); 
  }, 400);
}

function stopTutoring(){
  $('#kakapo-bubble-wrapper').hide();
  $('.feature-box').removeClass('feature-box-hover');
}

function mouseOnFeature () {
  return $(".feature-box:hover").length > 0;
}

function removeBubble () {
  if (!mouseOnFeature()){
    stopTutoring();
  }
}

function heartRed () {
  $('.glyphicon-heart').addClass('red-heart');
}

function heartWhite () {
  $('.glyphicon-heart').removeClass('red-heart');
}

