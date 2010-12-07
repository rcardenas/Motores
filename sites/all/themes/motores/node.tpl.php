<?php
// $Id: node.tpl.php,v 1.4.2.1 2009/05/12 18:41:54 johnalbin Exp $

/**
 * @file node.tpl.php
 *
 * Theme implementation to display a node.
 *
 * Available variables:
 * - $title: the (sanitized) title of the node.
 * - $content: Node body or teaser depending on $teaser flag.
 * - $picture: The authors picture of the node output from
 *   theme_user_picture().
 * - $date: Formatted creation date (use $created to reformat with
 *   format_date()).
 * - $links: Themed links like "Read more", "Add new comment", etc. output
 *   from theme_links().
 * - $name: Themed username of node author output from theme_user().
 * - $node_url: Direct url of the current node.
 * - $terms: the themed list of taxonomy term links output from theme_links().
 * - $submitted: themed submission information output from
 *   theme_node_submitted().
 *
 * Other variables:
 * - $node: Full node object. Contains data that may not be safe.
 * - $type: Node type, i.e. story, page, blog, etc.
 * - $comment_count: Number of comments attached to the node.
 * - $uid: User ID of the node author.
 * - $created: Time the node was published formatted in Unix timestamp.
 * - $zebra: Outputs either "even" or "odd". Useful for zebra striping in
 *   teaser listings.
 * - $id: Position of the node. Increments each time it's output.
 *
 * Node status variables:
 * - $teaser: Flag for the teaser state.
 * - $page: Flag for the full page state.
 * - $promote: Flag for front page promotion state.
 * - $sticky: Flags for sticky post setting.
 * - $status: Flag for published status.
 * - $comment: State of comment settings for the node.
 * - $readmore: Flags true if the teaser content of the node cannot hold the
 *   main body content.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 *
 * @see template_preprocess()
 * @see template_preprocess_node()
 */
?>
<div id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> <?=($anuncio)? 'anuncio':''?>">
  <div class="node-inner">

  <?php print $picture; ?>

  <?php if (!$page): ?>
    <h2 class="title">
      <a href="<?php print $node_url; ?>" title="<?php print $title ?>"><?php print $title; ?></a>
    </h2>
  <?php endif; ?>

  <?php if ($unpublished): ?>
    <div class="unpublished"><?php print t('Unpublished'); ?></div>
  <?php endif; ?>

  <?php if (!$page && ($submitted || $terms) ): ?>
    <div class="meta">
      <?php if ($submitted): ?>
        <div class="submitted">
          <?php print $submitted; ?>
        </div>
      <?php endif; ?>

      <?php if ($terms): ?>
        <div class="terms terms-inline"><?php print t(' in ') . $terms; ?></div>
      <?php endif; ?>
    </div>
  <?php endif; ?>

  <? if ($page && $anuncio): ?>
  <div id="main-desc" class="ha">
    
    <div class="desc-inner">
      <div class="precio-fecha">
        <?=$field_precio_rendered?>
        <div class="fecha">
          <div class="field-label"><?=t('Fecha de anuncio').': '?></div><?=format_date($created, 'custom', 'd/m/Y')?>
        </div>
      </div>
      <h1><?=$node->nombre?></h1>
      <div class="ubicacion"><?=t('Ubicación').': '.$field_anuncio_estado[0]['view']?></div>
    </div>
    
    <div id="scrollable-big" class="scrollable">
      <?=$field_imagenes_rendered?>
    </div>
    <div id="scrollable-small" class="scrollable clearfix">
      <a class="prevPage">&nbsp;</a>
      <div class="field">
        <div class="field-items">
        <? foreach ( $small_scrollable as $s ): ?>
          <div class="field-item"><?=$s?></div>
        <? endforeach; ?>
        </div>
      </div>
      <a class="nextPage">&nbsp;</a>
    </div>
    
    
    <div class="additional-details">
      <div class="thelinks">
        <div class="print"><?=$node->content['print_links']['#value']?></div>
        <div class="facebook"><?=$node->content['facebookshare']['#value']?></div>
      </div>
      
      <?=$field_version_rendered?>
      <?=$field_km_rendered?>
      <?=$field_color_rendered?>
      <?=$field_vestiduras_rendered?>
      <?=$field_transmision_rendered?>
    </div>
  
  </div>
  
  <div class="content greybox">
    <h2><?=t('Descripción')?></h2>
    <div class="descripcion"><?php print $content; ?></div>
  </div>
  
  <div id="vehiculo-detalles" class="greybox">
    <h2><?=t('Detalles y Equipamiento')?></h2>
    <div class="detalles-inner">
      <div class="detalles-row clearfix">
        <?=$field_confort_rendered?>
        <?=$field_cristales_rendered?>
        <?=$field_sonido_rendered?>
      </div>
      <div class="detalles-row clearfix">
        <?=$field_equipo_rendered?>
        <?=$field_proteccion_rendered?>
        <?=$field_seguridad_rendered?>
      </div>
       <div class="detalles-row clearfix">
        <?=$field_blindaje_rendered?>
        <?=$field_performance_rendered?>
        <?=$field_documentacion_rendered?>
      </div>
      <div class="detalles-row clearfix">
        <?=$field_extra_rendered?>
        <?=$field_gadgets_rendered?>
        <?=$field_otro_rendered?>
      </div>
    </div>
  </div>
  
  <? else: ?>
  
  <div class="content">
    <?php print $content; ?>
  </div>
  
  <? endif; ?>
  
  <?php print $links; ?>

</div></div> <!-- /node-inner, /node -->
