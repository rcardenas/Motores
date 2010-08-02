Drupal.behaviors.checkboxes = function()
{
  $('#edit-field-anio-value').attr('size','10');
}

Drupal.behaviors.eula = function()
{
  $('.multistep-1 #edit-next').click(function()
  {
    if ( $('input:checked').length == 0 )
    {
      alert('Debe aceptar los terminos');
      return false;
    }
  });
}