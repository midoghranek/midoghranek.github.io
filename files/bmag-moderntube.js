// ModernTube Jquery plugin v1.1 - https://github.com/midoghranek/ModernTube
!function(t){t.fn.moderntube=function(){return this.each(function(){var i=t(this),r=i.find('iframe[src*="youtube.com"]');r.attr("height","").attr("width","");var h=t(this).width(),n=480*h/853;r.attr("height",n).attr("width","100%"),t(window).bind("resize load",function(){var t=i.width(),h=480*t/853;r.attr("height",h).attr("width","100%")})})}}(jQuery);

// calling for bmag artice tag
$('article').moderntube();