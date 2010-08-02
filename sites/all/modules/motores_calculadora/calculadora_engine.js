Drupal.behaviors.motoresCalculadora = function (context) {

  $('#precio').keyup(function(i){

    var aforo = parseFloat($(this).val())-parseFloat($('#enganche').val());
    $('#aforo').text(formatCurrency(aforo));

    $.ajax({
	  url: 'calcular/seguros?aforo='+aforo,
	  success: function(data) {
		var obj = $.parseJSON(data);
	    $('#valor-seguro-dano').html(formatCurrency(obj.seguro));
	    $('#valor-vida').html(formatCurrency(obj.vida));
	    $('#seguro-total').html(formatCurrency(obj.total));
	
	    $('#aforo-seguro').html(formatCurrency(aforo+parseFloat(obj.total)));
	
	  }
	});
	
  });

  $('#enganche').keyup(function(i){

    var aforo = parseFloat($('#precio').val())-parseFloat($(this).val());
    $('#aforo').text(formatCurrency(aforo));
    $.ajax({
	  url: 'calcular/seguros?aforo='+aforo,
	  success: function(data) {
		var obj = $.parseJSON(data);
	    $('#valor-seguro-dano').html(formatCurrency(obj.seguro));
	    $('#valor-vida').html(formatCurrency(obj.vida));
	    $('#seguro-total').html(formatCurrency(obj.total));
	
	    $('#aforo-seguro').html(formatCurrency(aforo+parseFloat(obj.total)));
	  }
	});
  });

}

function CurrencyFormatted(amount)
{
	var i = parseFloat(amount);
	if(isNaN(i)) { i = 0.00; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	i = parseInt((i + .005) * 100);
	i = i / 100;
	s = new String(i);
	if(s.indexOf('.') < 0) { s += '.00'; }
	if(s.indexOf('.') == (s.length - 2)) { s += '0'; }
	s = minus + s;
	return s;
}

function formatCurrency(strValue)
{
	strValue = strValue.toString().replace(/\$|\,/g,'');
	dblValue = parseFloat(strValue);

	blnSign = (dblValue == (dblValue = Math.abs(dblValue)));
	dblValue = Math.floor(dblValue*100+0.50000000001);
	intCents = dblValue%100;
	strCents = intCents.toString();
	dblValue = Math.floor(dblValue/100).toString();
	if(intCents<10)
		strCents = "0" + strCents;
	for (var i = 0; i < Math.floor((dblValue.length-(1+i))/3); i++)
		dblValue = dblValue.substring(0,dblValue.length-(4*i+3))+','+
		dblValue.substring(dblValue.length-(4*i+3));
	return (((blnSign)?'':'-') + '$' + dblValue + '.' + strCents);
}
