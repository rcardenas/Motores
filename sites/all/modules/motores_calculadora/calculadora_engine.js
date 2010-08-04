Drupal.behaviors.mensajes = function()
{
	$('#submit-calc').click(function(){
		$('#calcu-form').addClass('loading-calc');
		var anio = $('#anio').val();
		var linea = $('#version').val();
		var marca = $('#marca').val();
		var precio = $('#precio').val();
		var enganche = $('#enganche').val();
		dataString='anio='+anio+'&precio='+precio+'&enganche='+enganche+'&marca='+marca+'&linea='+linea;
		$.ajax({  
		   type: "GET",  
		   url: Drupal.settings.basePath+"sites/all/modules/motores_calculadora/google/demos/Zend/Gdata/Docs.php",  
		   data: dataString,  
		   success: function(dat) {
			$('#calcu-form').removeClass('loading-calc'); 
			$('#result').html(dat);
		     //display message back to user here  
		   }  
		 });	
	});
};