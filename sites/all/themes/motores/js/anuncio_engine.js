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
   
  $('#scrollable-small .field-item img').each(
  	function()
  	{
  		var source = $(this).attr('src');
  		
  		var parts = source.split('slideshow_small');
  		
  		if(parts[1] == '/')
  		{
  			$(this).parent().detach();
  		}
  	}
  );
  
  
}