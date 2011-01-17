Drupal.behaviors.filtros = function()
{

	//CAMBIAR EL TIPO DE SORT

	$('#filtrar-usados').change(function(){
		switch($(this).val()){
			case 'precio':
				if($('#orden-b-u').val()=='dsc')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=usados&sorto=1');
				}
				else
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=usados&sorto=2');
				}
			break;
			
			case 'ano':
				if($('#orden-b-u').val()=='dsc')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=usados&sorto=1');
				}
				else
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=usados&sorto=2');
				}
			break;
			
			case 'km':
				if($('#orden-b-u').val()=='dsc')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=usados&sorto=1');
				}
				else
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=usados&sorto=2');
				}
			break;
		
		}
	
	});
	
	$('#filtrar-nuevos').change(function(){
		switch($(this).val()){
			case 'precio':
				if($('#orden-b-n').val()=='dsc')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=nuevos&sorto=1');
				}
				else
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=nuevos&sorto=2');
				}
			break;
			
			case 'ano':
				if($('#orden-b-n').val()=='dsc')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=nuevos&sorto=1');
				}
				else
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=nuevos&sorto=2');
				}
			break;
			
			case 'km':
				if($('#orden-b-n').val()=='dsc')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=nuevos&sorto=1');
				}
				else
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=nuevos&sorto=2');
				}
			break;
		
		}
	
	});
	
	$('#filtrar-motos').change(function(){
		switch($(this).val()){
			case 'precio':
				if($('#orden-b-m').val()=='dsc')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=motos&sorto=1');
				}
				else
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=motos&sorto=2');
				}
			break;
			
			case 'ano':
				if($('#orden-b-m').val()=='dsc')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=motos&sorto=1');
				}
				else
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=motos&sorto=2');
				}
			break;
			
			case 'km':
				if($('#orden-b-m').val()=='dsc')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=motos&sorto=1');
				}
				else
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=motos&sorto=2');
				}
			break;
		
		}
	
	});
	
	$('#filtrar-global').change(function(){
		switch($(this).val()){
			case 'precio':
				if($('#orden-b-g').val()=='dsc')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=global&sorto=1');
				}
				else
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=global&sorto=2');
				}
			break;
			
			case 'ano':
				if($('#orden-b-g').val()=='dsc')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=global&sorto=1');
				}
				else
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=global&sorto=2');
				}
			break;
			
			case 'km':
				if($('#orden-b-g').val()=='dsc')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=global&sorto=1');
				}
				else
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=global&sorto=2');
				}
			break;
		
		}
	
	});
	
	
	//CMBIAR EL ORDEN DEL SORT
	
	$('#orden-b-u').change(function(){
		switch($(this).val()){
			case 'dsc':
				if($('#filtrar-usados').val()=='precio')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=usados&sorto=1');
				}
				else if($('#filtrar-usados').val()=='ano')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=usados&sorto=1');
				}
				else if($('#filtrar-usados').val()=='km')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=usados&sorto=1');
				}
			break;
			
			case 'asc':
				if($('#filtrar-usados').val()=='precio')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=usados&sorto=2');
				}
				else if($('#filtrar-usados').val()=='ano')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=usados&sorto=2');
				}
				else if($('#filtrar-usados').val()=='km')
				{
					$('#usados-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=usados&sorto=2');
				}
			break;
		}
	});
	
	$('#orden-b-n').change(function(){
		switch($(this).val()){
			case 'dsc':
				if($('#filtrar-nuevos').val()=='precio')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=nuevos&sorto=1');
				}
				else if($('#filtrar-nuevos').val()=='ano')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=nuevos&sorto=1');
				}
				else if($('#filtrar-nuevos').val()=='km')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=nuevos&sorto=1');
				}
			break;
			
			case 'asc':
				if($('#filtrar-nuevos').val()=='precio')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=nuevos&sorto=2');
				}
				else if($('#filtrar-nuevos').val()=='ano')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=nuevos&sorto=2');
				}
				else if($('#filtrar-nuevos').val()=='km')
				{
					$('#nuevos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=nuevos&sorto=2');
				}
			break;
		}
	});
	
	$('#orden-b-m').change(function(){
		switch($(this).val()){
			case 'dsc':
				if($('#filtrar-motos').val()=='precio')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=motos&sorto=1');
				}
				else if($('#filtrar-motos').val()=='ano')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=motos&sorto=1');
				}
				else if($('#filtrar-motos').val()=='km')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=motos&sorto=1');
				}
			break;
			
			case 'asc':
				if($('#filtrar-motos').val()=='precio')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=motos&sorto=2');
				}
				else if($('#filtrar-motos').val()=='ano')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=motos&sorto=2');
				}
				else if($('#filtrar-motos').val()=='km')
				{
					$('#motos-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=motos&sorto=2');
				}
			break;
		}
	});
	
	$('#orden-b-g').change(function(){
		switch($(this).val()){
			case 'dsc':
				if($('#filtrar-global').val()=='precio')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=global&sorto=1');
				}
				else if($('#filtrar-global').val()=='ano')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=global&sorto=1');
				}
				else if($('#filtrar-global').val()=='km')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=global&sorto=1');
				}
			break;
			
			case 'asc':
				if($('#filtrar-global').val()=='precio')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=1&type=global&sorto=2');
				}
				else if($('#filtrar-global').val()=='ano')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=2&type=global&sorto=2');
				}
				else if($('#filtrar-global').val()=='km')
				{
					$('#global-submit').attr('href', Drupal.settings.basePath+'sorting?sort=3&type=global&sorto=2');
				}
			break;
		}
	});
	
	
}