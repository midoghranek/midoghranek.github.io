// custom javascript

$(".icolor_custom").spectrum({
    preferredFormat: "hex",
    color: "#38c",
    move: function(c) {
        var icolor = $('input.icolor_custom');
        icolor.val(c.toHexString());
    }
});

$(".icolor_custom").show();


$('.inpto select').change(function() {
    var selecto = $(this).val();
	if( selecto.match('style1')) {
	    $('.ifollower,.itext').removeAttr('disabled');
	} else if ( selecto.match('style2')) {
	    $('.itext').attr('disabled','disabled');
	    $('.itext').val('');
	    $('.ifollower').removeAttr('disabled');
	} else if ( selecto.match('style3')) {
	    $('.ifollower,.itext').attr('disabled','disabled');
		$('.ifollower,.itext').val('');
	} else {
	    $('.ifollower,.itext').removeAttr('disabled');
	}
});


$('input.iname').change(function() {
    var icony = $(this).val();
	if(  $(this).val().length != 0 && !icony.substr(0,3).match("fa-") && !icony.substr(0,1).match(" ") ) {
	   $(this).val('fa-'+ icony);
	}
	var F_icony = $(this).val();
	$('.namey .fa').attr('class','').attr('class','fa ' + F_icony);
	
});



$('input.icolor_custom').change(function() {
    $(".icolor_custom").spectrum("set", $(".icolor_custom").val());
});

$('.submit').on('click', function() {
    $('input.button,.result').show();
	var icon_name = $('input.iname').val();
	var icon_color = $('input.icolor_custom').val();
	var follower_number = $('input.ifollower').val();
	var page_text = $('input.itext').val();
	var page_url = $('input.iurl').val();
	$('.result #social').append('<li class="social-item"><a style="background-color:' + icon_color + '" href="' + page_url + '"><div class="link-content"><i class="fa ' + icon_name + '"></i><span class="item-count">' + follower_number + '</span><span class="item-text">' + page_text + '</span></div></a></li>');
	$('.textom').text( $('.result').html() )
});

