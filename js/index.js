$(function(){
  $('.more p').hide();
  $('.more a').click(function(e){e.preventDefault();$(this).parent('.more').children('p').toggle();});
});
