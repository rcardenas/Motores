Drupal.behaviors.myaccountAgencia = function()
{
  var rowspan = $('.view-micuenta tbody tr').length;
  $('td.views-field-phpcode-1:first').attr('rowspan',rowspan);
  $('td.views-field-phpcode-1:not(td.views-field-phpcode-1:first)').remove();
  
  $('td.views-field-phpcode-2:first').attr('rowspan',rowspan);
  $('td.views-field-phpcode-2:not(td.views-field-phpcode-2:first)').remove();
}