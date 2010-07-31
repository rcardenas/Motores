<div id="node-<?php print $node->nid; ?>" class="anuncio600 <?php print $classes; ?>"><div class="node-inner">
  
  <h2><?=t('Paso 5: Revisi&oacute;n')?></h2>
  <p><?=t('Revise que toda la informaci&oacute;n proporcionada sea la correcta.')?></p>

  <fieldset class="clear-block">
    <div class="nn"><p>Datos generales del veh&iacute;culo</p></div>
    <div class="preview-block fl">
      <?=$field_anio_rendered?>
      <?=$field_marca_rendered?>
    </div>
    <div class="change">
      <?=t('Si buscas cambiar algo, puedes hacerlo ').
      l('aqu&iacute;','node/'.$node->nid.'/edit/1',array('html'=>true))?>
    </div>
  </fieldset>
  
  <fieldset class="clear-block">
    <div class="nn"><p>Detalles del veh&iacute;culo</p></div>
    <div class="preview-block fl">
      <?=$field_ciudad_rendered?>
      <?=$field_precio_rendered?>
      <?=$field_km_rendered?>
      <?=$field_color_rendered?>
      <?=$field_interior_rendered?>
      <?=$field_vestiduras_rendered?>
      <?=$field_uso_rendered?>
      <?=$field_transmision_rendered?>
    </div>
    <div class="change">
      <?=t('Si buscas cambiar algo, puedes hacerlo ').
      l('aqu&iacute;','node/'.$node->nid.'/edit/3',array('html'=>true))?>
    </div>
  </fieldset>
  
  <fieldset class="clear-block">
    <div class="nn"><p>Equipo</p></div>
    <div class="preview-block">
      <?=$field_cristales_rendered?>
      <?=$field_confort_rendered?>
      <?=$field_equipo_rendered?>
      <?=$field_sonido_rendered?>
      <?=$field_proteccion_rendered?>
      <?=$field_seguridad_rendered?>
      <?=$field_otro_rendered?>
    </div>
    <div class="change">
      <?=t('Si buscas cambiar algo, puedes hacerlo ').
      l('aqu&iacute;','node/'.$node->nid.'/edit/3',array('html'=>true))?>
    </div>
  </fieldset>
  
  <? if ($field_especiales_rendered): ?>
  <fieldset class="clear-block">
    <div class="nn"><p>Opciones especiales de venta</p></div>
    <div class="preview-block">
      <?=$field_especiales_rendered?>
    </div>
    <div class="change">
      <?=t('Si buscas cambiar algo, puedes hacerlo ').
      l('aqu&iacute;','node/'.$node->nid.'/edit/3',array('html'=>true))?>
    </div>
  </fieldset>
  <? endif; ?>
  
  <fieldset class="clear-block">
    <div class="nn"><p>Descripci&oacute;n</p></div>
    <div class="preview-block">
      <?=$node->body?>
    </div>
    <div class="change">
      <?=t('Si buscas cambiar algo, puedes hacerlo ').
      l('aqu&iacute;','node/'.$node->nid.'/edit/3',array('html'=>true))?>
    </div>
  </fieldset>

  <fieldset class="clear-block">
    <div class="nn"><p>Fotos de tu veh&iacute;culo</p></div>
    <div class="preview-block">
      <?=$imagenes?>
    </div>
    <div class="change">
      <?=t('Si buscas cambiar algo, puedes hacerlo ').
      l('aqu&iacute;','node/'.$node->nid.'/edit/4',array('html'=>true))?>
    </div>
  </fieldset>
  
  <?=l( 'Continuar', '', array('attributes'=>array('class'=>'form-submit')) )?>

</div></div> <!-- /node-inner, /node -->
