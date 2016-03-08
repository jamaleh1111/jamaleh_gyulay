$(document).ready(function() {
//mouse enter overlay
  $('ul#gallery li').on('mouseenter', function() {
    //get data attribute values
    var title = $(this).children().data('title');
    var desc = $(this).children().data('desc');

    //validation
    if(desc == null) {
      desc = 'Click To Enlarge';
    }
    if(title == null) {
      title = '';
    }
    //create overlay div
    $(this).append('<div class="overlay"></div>');
    //get the overlay div
    var overlay = $(this).children('.overlay');
    //add html to overlay
    overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

    //fade in overlay
    overlay.fadeIn(800);
  });

  //mouseleave overlay
  $('ul#gallery li').on('mouseleave', function() {
    //create overlay div
    $(this).append('<div class="overlay"></div>');
    //get the overlay div
    var overlay = $(this).children('.overlay');
    //fade out overlay
    overlay.fadeOut(500);
  });
});
  