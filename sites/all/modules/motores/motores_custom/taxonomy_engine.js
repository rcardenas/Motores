Drupal.behaviors.motoresTaxo = function (context) {
	if ( $('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').length )
	{
  	var count=0;
  	var valores = [];
  	var alternativo = [];
  	var llave = '';
  	var html = '<select id="valores-primer" size="10" class="primer-nivel" name="primer">'
  
    /** 
     * Configurar datos y arreglos temporales
     */
  	$('#edit-field-marca-value > option, #edit-field-marca-moto-value > option, #edit-field-marca-lancha-value > option, #edit-field-marca-camioneta-value > option, #edit-field-marca-extremo-value > option, #edit-field-marca-otros-value > option').each(function() 
  	{
  	   if($(this).text().charAt(0)!=' ' && $(this).text().charAt(0)!='-')
  	   {
  		    llave=$(this).text();
  		    valores[llave]=[];
  		    html = html + '<option value="'+llave+'">'+llave+'</option>';
  		    var valor_al = new Array();
    			valor_al['text']=$(this).text();
    			valor_al['llave']=$(this).val();
  		    alternativo[llave]=valor_al;
  		    count++;
  	   }	
  	   if($(this).text().charAt(0)==' ')
  	   {
    		 var valor = new Array();
    		 valor['text']=$(this).text();
    		 valor['llave']=$(this).val();
  	     valores[llave].push(valor);	
  	   }
  	});
  	$('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').hide();
  	$('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').attr('size','10');
  	$('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').removeAttr('multiple');
  	html = html + '</select>';
  	$('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').before(html);
  
    /** 
     * Seleccionar la primer opcion al cargarse
     */
    $('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').children().remove();
    var src = $("option:first", '#valores-primer').val();
    var swit = 1;
    
    $.each(valores[src],function(index,value)
    {
    	swit=0;
    	$('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').append('<option value="'+value['llave']+'">'+value['text']+'</option>');	
    });
    
    if(swit==1)
    {
      $('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').append('<option value="'+alternativo[src]['llave']+'">'+alternativo[src]['text']+'</option>');	
    }
    $('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').show();
    
    
    /** 
     * Seleccionar otro menu on change
     */ 
    $('#valores-primer').change(function(i)
    {
  	  $('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').children().remove();
  	  var src = $("option:selected", this).val();
  	  var swit = 1;
  	  
  	  $.each(valores[src],function(index,value)
  	  {
    		swit=0;
    		$('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').append('<option value="'+value['llave']+'">'+value['text']+'</option>');	
  	  });
  	  
  	  if(swit==1)
  	  {
  	    $('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').append('<option value="'+alternativo[src]['llave']+'">'+alternativo[src]['text']+'</option>');	
  	  }
  	  $('#edit-field-marca-value, #edit-field-marca-moto-value, #edit-field-marca-lancha-value, #edit-field-marca-camioneta-value, #edit-field-marca-extremo-value, #edit-field-marca-otros-value').show();
    });
  }
}