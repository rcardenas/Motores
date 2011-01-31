//cuenta, clabe, fecha y numero de anuncio
Drupal.behaviors.checkboxes = function()
{
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1
	var day = currentTime.getDate()
	var year = currentTime.getFullYear()


	var hoy = month + "/" + day + "/" + year;


	$('.pane-title-row').after(
	'<tr valign="top"><td class="title-col" nowrap="">Anuncio:</td><td class="data-col">'+Drupal.settings.anuncio+'</td></tr><tr valign="top"><td class="title-col" nowrap="">Fecha:</td><td class="data-col">'+hoy+'</td></tr>'
	);
	
	$('.data-col').each(
		function()
		{
			if( $(this).text()=='Santander')
			{
				$('.review-button-row').before(
				'<tr valign="top"><td class="title-col" nowrap="">No. de Cuenta:</td><td class="data-col">'+Drupal.settings.cuenta+'</td></tr><tr valign="top"><td class="title-col" nowrap="">Clabe:</td><td class="data-col">'+Drupal.settings.clabe+'</td></tr>'
				)
			} 
		}
	);
	
	}