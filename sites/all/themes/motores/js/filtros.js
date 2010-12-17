Drupal.behaviors.filtros = function()
{
	$('#filtrar-usados').change(function(){
		switch($(this).val()){
			case 'precio':
				$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=usados');
			break;
			
			case 'ano':
				$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=usados');
			break;
			
			case 'km':
				$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=usados');
			break;
		
		}
	
	});
	
	$('#filtrar-nuevos').change(function(){
		switch($(this).val()){
			case 'precio':
				$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=nuevos');
			break;
			
			case 'ano':
				$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=nuevos');
			break;
			
			case 'km':
				$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=nuevos');
			break;
		
		}
	
	});
	
	$('#filtrar-motos').change(function(){
		switch($(this).val()){
			case 'precio':
				$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=motos');
			break;
			
			case 'ano':
				$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=motos');
			break;
			
			case 'km':
				$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=motos');
			break;
		
		}
	
	});
	
	$('#filtrar-global').change(function(){
		switch($(this).val()){
			case 'precio':
				$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=global');
			break;
			
			case 'ano':
				$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=global');
			break;
			
			case 'km':
				$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=global');
			break;
		
		}
	
	});
}