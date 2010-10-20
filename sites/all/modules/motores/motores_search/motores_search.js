Drupal.behaviors.searchEngine = function()
{
  var form = $('#motores-search-refine-form');
  $('#edit-submit',form).click(function()
  {
    $.post(Drupal.settings.basePath+'motores_search/submit',
    {
      keywords:           $('#edit-keywords',form).val(),
      estado:             $('#edit-estado',form).val(),
      marcas:             $('#edit-marcas',form).val(),
      precio_min:         $('#edit-precio-min',form).val(),
      precio_max:         $('#edit-precio-max',form).val(),
      anio_min:           $('#edit-year-min',form).val(),
      anio_max:           $('#edit-year-max',form).val(),
      km_min:             $('#edit-km-min',form).val(),
      km_max:             $('#edit-km-max',form).val(),
    },
    function(data)
    {
      //alert(data);
      if (data)
      {
        $('#content-area').html(data);
      }
      else
      {
        alert('no results');
      }
    }
    );
  return false;
  });
}