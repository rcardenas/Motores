Drupal.behaviors.frontPage = function()
{
  var h = $('#block-motores_search-1').height();
  $('#sidebar-right #block-block-5 .content').css('height',h+15);
  
  $('#edit-submit-1').clone().appendTo('#edit-keywords-1-wrapper');
  $('#edit-submit-2').clone().appendTo('#edit-keywords-2-wrapper');
  $('#edit-submit-3').clone().appendTo('#edit-keywords-3-wrapper');
  
  $('#search-tabs a.usados').click(function(){
  	$('#search-tabs a').removeClass('active');
  	$(this).addClass('active');
  	$('.front #motores-search-refine-nuevos-form, .front #motores-search-refine-motos-form').hide();
  	$('.front #motores-search-refine-form').show();
  });
  
   $('#search-tabs a.nuevos').click(function(){
   	$('#search-tabs a').removeClass('active');
  	$(this).addClass('active');
  	$('.front #motores-search-refine-form, .front #motores-search-refine-motos-form').hide();
  	$('.front #motores-search-refine-nuevos-form').show();
  });
  
  $('#search-tabs a.motos').click(function(){
 	$('#search-tabs a').removeClass('active');
  	$(this).addClass('active');
  	$('.front #motores-search-refine-form, .front #motores-search-refine-nuevos-form').hide();
  	$('.front #motores-search-refine-motos-form').show();
  });
  
}