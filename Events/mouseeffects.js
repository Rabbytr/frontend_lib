mouseword = function(dom,texts
   = ['富强','民主','文明','和谐','自由','平等',
  '公正','法治','爱国','敬业','诚信','友善']){
    //two params,the first is the dom you wanted to effect
    //the second one is the texts that you wanted to show
  $(dom).mousedown(function(event){
    x = event.clientX;
    y = event.clientY;
    ind = Math.floor(texts.length*Math.random());
    color = ""+Math.round(Math.random()*(1<<20));
    var showtext = $('<span>').html(texts[ind]);
    showtext.css({
      "top":(y-15),
      "left":x,
      "position":"absolute",
      "color":color,
      "font-weight":"bold"
    });
    $(this).append(showtext);
    showtext.animate(
      {"top": y - 180,"opacity": 0},
      1000,
      function(){
        this.remove();
      });
    });
  }
