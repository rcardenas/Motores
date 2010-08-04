<?php
// $Id: template.php,v 1.17.2.1 2009/02/13 06:47:44 johnalbin Exp $

/**
 * @file
 * Contains theme override functions and preprocess functions for the theme.
 *
 * ABOUT THE TEMPLATE.PHP FILE
 *
 *   The template.php file is one of the most useful files when creating or
 *   modifying Drupal themes. You can add new regions for block content, modify
 *   or override Drupal's theme functions, intercept or make additional
 *   variables available to your theme, and create custom PHP logic. For more
 *   information, please visit the Theme Developer's Guide on Drupal.org:
 *   http://drupal.org/theme-guide
 *
 * OVERRIDING THEME FUNCTIONS
 *
 *   The Drupal theme system uses special theme functions to generate HTML
 *   output automatically. Often we wish to customize this HTML output. To do
 *   this, we have to override the theme function. You have to first find the
 *   theme function that generates the output, and then "catch" it and modify it
 *   here. The easiest way to do it is to copy the original function in its
 *   entirety and paste it here, changing the prefix from theme_ to motores_.
 *   For example:
 *
 *     original: theme_breadcrumb()
 *     theme override: motores_breadcrumb()
 *
 *   where motores is the name of your sub-theme. For example, the
 *   zen_classic theme would define a zen_classic_breadcrumb() function.
 *
 *   If you would like to override any of the theme functions used in Zen core,
 *   you should first look at how Zen core implements those functions:
 *     theme_breadcrumbs()      in zen/template.php
 *     theme_menu_item_link()   in zen/template.php
 *     theme_menu_local_tasks() in zen/template.php
 *
 *   For more information, please visit the Theme Developer's Guide on
 *   Drupal.org: http://drupal.org/node/173880
 *
 * CREATE OR MODIFY VARIABLES FOR YOUR THEME
 *
 *   Each tpl.php template file has several variables which hold various pieces
 *   of content. You can modify those variables (or add new ones) before they
 *   are used in the template files by using preprocess functions.
 *
 *   This makes THEME_preprocess_HOOK() functions the most powerful functions
 *   available to themers.
 *
 *   It works by having one preprocess function for each template file or its
 *   derivatives (called template suggestions). For example:
 *     THEME_preprocess_page    alters the variables for page.tpl.php
 *     THEME_preprocess_node    alters the variables for node.tpl.php or
 *                              for node-forum.tpl.php
 *     THEME_preprocess_comment alters the variables for comment.tpl.php
 *     THEME_preprocess_block   alters the variables for block.tpl.php
 *
 *   For more information on preprocess functions and template suggestions,
 *   please visit the Theme Developer's Guide on Drupal.org:
 *   http://drupal.org/node/223440
 *   and http://drupal.org/node/190815#template-suggestions
 */


/*
 * Add any conditional stylesheets you will need for this sub-theme.
 *
 * To add stylesheets that ALWAYS need to be included, you should add them to
 * your .info file instead. Only use this section if you are including
 * stylesheets based on certain conditions.
 */
/* -- Delete this line if you want to use and modify this code
// Example: optionally add a fixed width CSS file.
if (theme_get_setting('motores_fixed')) {
  drupal_add_css(path_to_theme() . '/layout-fixed.css', 'theme', 'all');
}
// */

// Hack para clearfix en todas las views
drupal_add_js('$(document).ready(function(){$(".view").addClass("clearfix")});','inline');

/**
 * Implementation of HOOK_theme().
 */
function motores_theme(&$existing, $type, $theme, $path) {
  $hooks = zen_theme($existing, $type, $theme, $path);
  // Add your theme hooks like this:
  /*
  $hooks['hook_name_here'] = array( // Details go here );
  */
  // @TODO: Needs detailed comments. Patches welcome!
  return $hooks;
}

/**
 * Override or insert variables into all templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered (name of the .tpl.php file.)
 */
/* -- Delete this line if you want to use this function
function motores_preprocess(&$vars, $hook) {
  $vars['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the page templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("page" in this case.)
 */
function motores_preprocess_page(&$vars, $hook) {
	global $user;
	
  switch ( $vars['node']->type )
  {
    case 'vehiculo':
    case 'carro':
    unset($vars['title']);
    unset($vars['tabs']);
    
    // Si se esta editando el nodo, poner body classes del multistep
    if ( arg(2) == 'edit' )
    {
      $step = ( arg(3) ) ? arg(3) : '1';
      $vars['body_classes'] .= ' multistep multistep-'.$step;
      unset($vars['breadcrumb']);
    }
    
    break;
  }
  
  // Agregar body class para multistep en node creation y otras ondas
  if ( $_GET['q'] == 'node/add/carro' )
  {
    $vars['body_classes'] .= ' multistep multistep-1';
    unset($vars['title']);
  }
  // if this node is being previewed
  if ( arg(0) == 'anuncio_preview' )
  {
    $vars['body_classes'] .= ' multistep multistep-5';
    unset($vars['breadcrumb']);
  }
  // if we're at the cart
  if ( arg(0) == 'cart' )
  {
    unset($vars['title']);
    $vars['body_classes'] .= ' multistep multistep-7';
    unset($vars['breadcrumb']);
  }
}
// */

function motores_uc_cart_checkout_review( $panes, &$form )
{
  global $user;
  $anuncio = node_load( $_SESSION['anuncio'] );
  $cart = uc_cart_get_contents();
  //print_r($cart);
  //$normal = theme_uc_cart_checkout_review( $panes, &$form );
  
  $r = '<div class="anuncio600">
    <h2>'.t('Paso 7: Pago: Revisi&oacute;n de datos').'</h2>
    <p>'.t('Su pedido est&aacute; casi completo. Por favor revise los datos abajo y pulse "Pagar" si toda la informaci&oacute;n es correcta.
    ').'</p>
    <fieldset>
    <h3>Datos de pago</h3>
    
    <table>
    <thead>
      <tr>
      <th colspan="2">Datos del Servicio</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="strong">Datos del anuncio</td>
        <td>'.$anuncio->nombre.', A-'.$anuncio->nid.'</td>
      </tr>
      <tr>
        <td class="strong">Servicio</td>
        <td>'.$cart[0]->title.' $'.number_format($cart[0]->price,2).' MXN</td>
      </tr>
      <tr>
        <td class="strong">Correo electr&oacute;nico</td>
        <td>'.$user->mail.'</td>
      </tr>
    </tbody>
    </table>
    <table>
    <thead>
      <tr>
      <th colspan="2">Datos de Pago</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="strong">Total a pagar</td>
        <td>$'.number_format($cart[0]->price,2).' MXN</td>
      </tr>
      <tr>
        <td class="strong">Inicio de vigencia</td>
        <td>'.'0'.'</td>
      </tr>
      <tr>
        <td class="strong">Pagando con</td>
        <td>'.$panes['Forma de pago'][2]['data'].'</td>
      </tr>
    </tbody>
    </table>
    
    </fieldset>';
  
  // si estamos pagando con deposito bancario
  if ( $panes['Forma de pago'][3]['data'] == 'Santander' )
  {
    $r .= 
    '<fieldset>
    <h3>Datos del dep&oacute;sito bancario</h3>
    
    <table>
    <thead>
      <tr>
      <th colspan="2">Santander</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="strong">Banco</td>
        <td>BBVA Bancomer</td>
      </tr>
      <tr>
        <td class="strong">Nombre del servicio</td>
        <td>AUTOMATIVE INTERNET SERVICES S.A. DE C.V.</td>
      </tr>
      <tr>
        <td class="strong">Convenio</td>
        <td>83 38 35</td>
      </tr>
      <tr>
        <td class="strong">Referencia</td>
        <td>712183573</td>
      </tr>
      <tr>
        <td class="strong">Total a pagar</td>
        <td>'.$panes['Forma de pago'][4]['data'].'</td>
      </tr>
      <tr>
        <td class="strong">CLABE</td>
        <td>012180001625361293 (Transferencias interbancarias)</td>
      </tr>
    </tbody>
    </table>
    
    <p class="description">Una vez realizado el pago, su anuncio ser&aacute; publicado al d&iacute;a h&aacute;bil siguiente.<br/>Te recomendamos conservar unos d&iacute;as su comprobante de pago, e imprimir esta hoja para cualquier duda o aclaraci&oacute;n.</p>
    <p class="description2">Si tienes alguna duda o aclaraci&oacute;n, hazla saber '.l('aqu&iacute;','ayuda',array('html'=>true,'attributes'=>array('target'=>'_blank'))).'</p>
    
    </fieldset>';
  }
  
  $r .= $form.'</div>';
  
  return $r;
}

/**
 * Override or insert variables into the node templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("node" in this case.)
 */

function motores_preprocess_node(&$vars, $hook) 
{
  
  switch ( $vars['node']->type )
  {
    case 'page':
    case 'accesorio':
    case 'talleres':
    case 'tarifa':
    case 'product':
      break;
    default:
    
      // nombre del vehiculo
      $vars['nombre'] = $vars['field_anio'][0]['value'];
      $vars['nombre_sin_anio'] = '';
      $carro = taxonomy_get_parents_all( $vars['field_marca'][0]['value'] );
      $carro = array_reverse($carro);
      foreach ( $carro as $c )
      {
        $vars['nombre'] .= ' '.$c->name;
        $vars['nombre_sin_anio'] .= $c->name.' ';
      }

      if ( $vars['page'] )
      {
        // este es un anuncio
        $vars['anuncio'] = 1;
      
        // small scrollable
        foreach ( $vars['field_imagenes'] as $i )
        {
          $vars['small_scrollable'][] = theme( 'imagecache', 'slideshow_small', $i['filepath'] );
        }
      
        drupal_add_js( path_to_theme(). '/js/scrollable.min.js', 'theme' );
        // JS engine
        drupal_add_js( path_to_theme(). '/js/anuncio_engine.js', 'theme' );  
      }
      
      // if this node is being previewed
      if ( $vars['view']->name == 'anuncio_preview' )
      {
        // las fotos
        foreach ( $vars['field_imagenes'] as $img )
        {
          $vars['imagenes'] .= theme('imagecache', 'preview_thumb', $img['filepath'] );
        }
        
        // link a donde vas despues
        $cart = uc_cart_get_contents();
        // si el anuncio no es gratis, a pagar se ha dicho.
        if ( $cart[0]->model != 1 )
        {
          $vars['next'] = 'cart/checkout';
          $vars['query'] = 'anuncio='.$vars['node']->nid;
        }
        else
        {
          $vars['next'] = 'anuncio/procesar/'.$vars['node']->nid;
        }
      }
      
      break;
  }
  
  // If this node is being searched
  if ( $vars['view']->name == 'busqueda' )
  {
    $vars['search_image'] = l(theme('imagecache', 'search_result', $vars['field_imagenes'][0]['filepath'] ),
                              'node/'.$vars['nid'],
                              array('html'=>true));
  }
}
// */

/**
 * Override or insert variables into the comment templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("comment" in this case.)
 */
/* -- Delete this line if you want to use this function
function motores_preprocess_comment(&$vars, $hook) {
  $vars['sample_variable'] = t('Lorem ipsum.');
}
// */

/**
 * Override or insert variables into the block templates.
 *
 * @param $vars
 *   An array of variables to pass to the theme template.
 * @param $hook
 *   The name of the template being rendered ("block" in this case.)
 */
/* -- Delete this line if you want to use this function
function motores_preprocess_block(&$vars, $hook) {
  $vars['sample_variable'] = t('Lorem ipsum.');
}
// */

/*function motores_preprocess_views_view( $vars )
{
  print_r($vars);
}*/
