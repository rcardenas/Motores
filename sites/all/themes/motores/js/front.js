Drupal.behaviors.frontPage = function()
{
  var h = $('#block-motores_search-1').height();
  $('#sidebar-right #block-block-5 .content').css('height',h+15);
  
  $('#edit-submit-1').clone().appendTo('#edit-keywords-wrapper');
}