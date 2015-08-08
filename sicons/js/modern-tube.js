/*
* ModernTube Jquery plugin v1.1
* re-size youtube videos to container width this make youtube video responsive 
* Author: Mohamed Abo El-Ghranek 
* Author URL: facebook.com/midoghranek
* http://codepen.io/midoghranek/pen/wolxD
*/

(function($) {
  
  $.fn.moderntube = function(tube) {
    
    return this.each(function() {
      
      // select container tag 
      var container = $(this);
      
      // select iframe tag
       var video = container.find('iframe'); 
      
      // empty height and width attributes before get new values      
      video.attr('height','').attr('width','');
      
      // get video container width 
      var videoWidth = $(this).width();
      
      // get video height
      var videoHeight = videoWidth * 480/853;
      
      // add new values for height and width
      video.attr('height',videoHeight).attr('width','100%');
      
      // Window resize to make it responsive and make sure that the video loaded
      $(window).bind('resize load', function() {
        var videoWidth = container.width();
        var videoHeight = videoWidth * 480/853;
        video.attr('height',videoHeight).attr('width','100%');
      });

    });   
    
  };
  
})(jQuery);