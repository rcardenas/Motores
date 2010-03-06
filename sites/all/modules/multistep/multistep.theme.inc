<?php
// $Id: multistep.theme.inc,v 1.1.2.1 2009/07/20 21:16:35 vkareh Exp $

/**
 * Block Theme function that displays the default output of a progress bar.
 * Use this theme function to override the output / display of this block.
 */
function theme_multistep_progress_bar($progress) {
  $output = '<div class="multistep-progress-bar-wrapper">';
  $output .= '<div class="multistep-progress-bar multistep-progress-bar-' . $progress . '" style="width: ' . $progress . '%">' . $progress . '%</div>';
  $output .= '</div>';
  return $output;
}
