word24 = function(dom){
  $(dom).mousedown(function(event){
    text = ['富强','民主','文明','和谐','自由','平等','公正','法治','爱国','敬业','诚信','友善'];
    x = event.clientX;
    y = event.clientY;
    ind = Math.floor(12*Math.random());
    color = "#ff"+Math.round(Math.random()*(1<<15));
    console.log(color);
    $('h2').show().html(text[ind]);
    $('h2').css({"left":x-5+"px","top":y-5+"px","color":color}).fadeOut(1000);
  });
}
