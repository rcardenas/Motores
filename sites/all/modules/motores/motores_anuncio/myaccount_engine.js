Drupal.behaviors.myaccount = function()
{
  $('.view-micuenta .borrar').click(function()
  {
    var nids = '';
    $('.view-micuenta table input:checked').each(function()
    {
      nids = nids+$(this).val()+',';
    });
    var simon = confirm('¿Eliminar los anuncios seleccionados?');
    if (simon)
    {
      window.location = Drupal.settings.basePath+'anuncio/borrar?nids='+nids;
    }
  });
}