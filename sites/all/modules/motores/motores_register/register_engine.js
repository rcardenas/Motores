Drupal.behaviors.register = function()
{
  var u = $('#usa').detach();
  $('#edit-pass-pass1-wrapper').after(u);
  
  $('#edit-borrar').click(function(){
    $('#user-register .form-text').val('');
    return false;
  });
  
  $('h1.title').html('&iexcl;Hola! Reg&iacute;strate aqu&iacute; por favor');
}