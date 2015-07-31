// custom javascript

/* $('.submit').click(function() { 
    var url = window.location.href; 
    var id_val = $('input.text').val();
    var new_url = url + 'id/' + id_val;
    $('body').append('<a href="' + new_url + '">link</a>');
});
*/

$('.submit').click(function() { 
    var url = window.location.href; 
    var id_val = $('input.text').val();
    var new_url = url + 'ids/' + id_val;
    $.get(new_url, function (data) { 
      $('body').append('<div>'+$(data).find('body').html()+'</div>');    
    },"html");
});



