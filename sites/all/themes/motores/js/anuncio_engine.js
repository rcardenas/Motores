Drupal.behaviors.anuncio = function()
{
  var big = $('#scrollable-big .field-field-imagenes').scrollable({
    size: 1,
    api: true
  });
  var scroll = $('#scrollable-small .field').scrollable({
    size: 4,
    api: true,
    clickable: true
  });
  
  $('#scrollable-small .field-item').click(function(){
    big.setPage( scroll.getClickIndex() );
  });
}