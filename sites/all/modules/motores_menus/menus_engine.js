Drupal.behaviors.menus = function()
{
  //
  // 1
  //
  $('#motores-menus #1').hover(function()
  {
    unActivateMenus();
    $('#autos-camionetas').show();
    $(this).addClass('active');
  });
  
  //
  // 3
  //
  $('#motores-menus #3').hover(function()
  {
    unActivateMenus();
    $('#motos').show();
    $(this).addClass('active');
  });
  
  //
  // 4
  //
  $('#motores-menus #4').hover(function()
  {
    unActivateMenus();
    $('#extremo').show();
    $(this).addClass('active');
  });
  
  //
  // 5
  //
  $('#motores-menus #5').hover(function()
  {
    unActivateMenus();
    $('#lanchas').show();
    $(this).addClass('active');
  });
  
  //
  // 6
  //
  $('#motores-menus #6').hover(function()
  {
    unActivateMenus();
    $('#otros').show();
    $(this).addClass('active');
  });
  
  
  
  $('#block-motores_menus-0 .panel').mouseleave(function(){
    unActivateMenus();
  });
}

function unActivateMenus()
{
  $('#motores-menus a').removeClass('active');
  $('#block-motores_menus-0 .panel').hide();
}