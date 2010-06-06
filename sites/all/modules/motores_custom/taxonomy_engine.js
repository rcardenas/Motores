Drupal.behaviors.motoresTaxo = function (context) {
	var count=0;
	var valores = [];
	var llave = '';
	var html = '<select id="valores-primer" class="primer-nivel" name="primer">'

	$('#edit-field-marca-value > option').each(function() {
	   if($(this).text().charAt(0)!=' ' && $(this).text().charAt(0)!='-'){
		    llave=$(this).text();
		    valores[llave]=[];
		    html = html + '<option value="'+llave+'">'+llave+'</option>';
		    count++;
	   }	
	   if($(this).text().charAt(0)==' '){
		 var valor = new Array();
		 valor['text']=$(this).text();
		 valor['llave']=$(this).val();
	     valores[llave].push(valor);	
	   }
	});
	
	$('#edit-field-marca-value').hide();
	html = html + '</select>';
	$('#edit-field-marca-value').before(html);

    $('#valores-primer').change(function(i){
	  $('#edit-field-marca-value').children().remove();
	  var src = $("option:selected", this).val();
	  $.each(valores[src],function(index,value){
	    $('#edit-field-marca-value').append('<option value="'+value['llave']+'">'+value['text']+'</option>');
	  });
	  $('#edit-field-marca-value').show();
	  
    });

}