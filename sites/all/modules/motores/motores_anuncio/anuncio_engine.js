Drupal.behaviors.checkboxes = function()
{
  $('#edit-field-anio-value').attr('size','10');
  
  var x = 1;
  $('.multistep .group-equipo').children('.form-item').each(function(){
  	if(x%2 == 0){
  		$(this).addClass('even');
  	}
  	x++;
  $(this).addClass('clearfix');
  });
  
  $('.multistep .group-equipo .form-checkboxes .form-item').removeClass('even');
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

Drupal.behaviors.borraimgs = function()
{
	$('.preview-block img.imagecache').each(
  	function()
  	{
  		var source = $(this).attr('src');
  		
  		var parts = source.split('preview_thumb');
  		
  		if(parts[1] == '/')
  		{
  			$(this).detach();
  		}
  	}
  );

}