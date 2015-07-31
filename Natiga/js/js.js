// custom javascript

$('.submit').click(function() { 
    var url = window.location.href; 
    var id_val = $('input.text').val();
    var new_url = url + 'id/' + id_val;
    $('body').append('<a href="' + new_url + '">link</a>');
});


