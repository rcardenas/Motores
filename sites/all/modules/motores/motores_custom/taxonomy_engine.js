Drupal.behaviors.motoresTaxo = function (context) {
	if ( $('#edit-field-marca-value').length )
	{
  	var count=0;
  	var valores = [];
  	var alternativo = [];
  	var llave = '';
  	var html = '<select id="valores-primer" size="10" class="primer-nivel" name="primer">'
  
    /** 
     * Configurar datos y arreglos temporales
     */
  	$('#edit-field-marca-value > option').each(function() 
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
  	$('#edit-field-marca-value').hide();
  	$('#edit-field-marca-value').attr('size','10');
  	$('#edit-field-marca-value').removeAttr('multiple');
  	html = html + '</select>';
  	$('#edit-field-marca-value').before(html);
  
    /** 
     * Seleccionar la primer opcion al cargarse
     */
    $('#edit-field-marca-value').children().remove();
    var src = $("option:first", '#valores-primer').val();
    var swit = 1;
    
    $.each(valores[src],function(index,value)
    {
    	swit=0;
    	$('#edit-field-marca-value').append('<option value="'+value['llave']+'">'+value['text']+'</option>');	
    });
    
    if(swit==1)
    {
      $('#edit-field-marca-value').append('<option value="'+alternativo[src]['llave']+'">'+alternativo[src]['text']+'</option>');	
    }
    $('#edit-field-marca-value').show();
    
    
    /** 
     * Seleccionar otro menu on change
     */ 
    $('#valores-primer').change(function(i)
    {
  	  $('#edit-field-marca-value').children().remove();
  	  var src = $("option:selected", this).val();
  	  var swit = 1;
  	  
  	  $.each(valores[src],function(index,value)
  	  {
    		swit=0;
    		$('#edit-field-marca-value').append('<option value="'+value['llave']+'">'+value['text']+'</option>');	
  	  });
  	  
  	  if(swit==1)
  	  {
  	    $('#edit-field-marca-value').append('<option value="'+alternativo[src]['llave']+'">'+alternativo[src]['text']+'</option>');	
  	  }
  	  $('#edit-field-marca-value').show();
    });
  }
}