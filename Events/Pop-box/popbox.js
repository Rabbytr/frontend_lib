window.onload = function(){
  $('#popbox').click(function(){
    $('.modal-wrapper').css('display','flex');
  });
  $('.modal-wrapper').click(function(e){
    var popup = $(".modal");
    if (!popup.is(e.target) && popup.has(e.target).length == 0) {
      $('.modal-wrapper').hide();
    }
  });
}
