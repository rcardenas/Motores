<?php
// $Id: privatemsg.author-pane.inc,v 1.1.2.4 2009/11/06 13:06:26 berdir Exp $

/**
 * @file
 *   Provides a preprocess function on behalf of the privatemsg module.
 */

/**
 * Implements hook_preprocess_author_pane().
 */
function privatemsg_preprocess_author_pane(&$variables) {
  $image_path = $variables['image_path'];
  // Send private message
  if ($url = privatemsg_get_link($variables['account'])) {
    $img = theme('image', "$image_path/private-message.png", t('Send private message'), t('Send private message'), NULL, TRUE);
    $variables['privatemsg'] = l($img, $url, array('absolute' => TRUE, 'html' => TRUE));
    $variables['privatemsg_link'] = l(t('Send PM') . '<span></span>', $url, array('attributes' => array('class' => 'author-privatemsg-icon'), 'html' => TRUE));
  }
}
