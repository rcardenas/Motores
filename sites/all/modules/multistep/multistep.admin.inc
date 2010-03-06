<?php
// $Id: multistep.admin.inc,v 1.1.2.5 2009/09/08 13:30:40 vkareh Exp $

/**
 * Displays the administrative settings page
 */
function multistep_admin_settings() {
  return drupal_get_form('multistep_admin_settings_form');
}

/**
 * Creates the form used for admin settings.
 */
function multistep_admin_settings_form(&$form_state) {
  $form = array();
  // Revisions and Publishing
  $form['multistep']['status'] = array(
    '#type' => 'fieldset',
    '#title' => t('Revisioning and publishing'),
    '#description' => t('These settings will change how multistep interacts with node revisioning and publishing.'),
    '#weight' => -1,
  );
  $form['multistep']['status']['multistep_status_revisions'] = array(
    '#type' => 'radios',
    '#title' => t('Revisions'),
    '#description' => t('Sets how multistep will interact with node revisioning, <em>if revisioning is enabled for the content type</em>.
      <ul><li><strong>Any step</strong> will follow the standard revision settings
      (i.e. new revisions will be created after each successful submission, regardless of the step).</li>
      <li><strong>Any step, after node completion</strong> will create new revisions after each successful submission, regardless of the step, only after all steps have been submitted successfully at least once
      (i.e. after the node is considered <em>complete</em>).</li>
      <li><strong>Last step</strong> will create new revisions whenever you submit the last step of the form, regardless of whether the node is considered <em>complete</em> or not.
      (i.e. it will create a new revision after the last step even if some steps were skipped).</li>
      <li><strong>Last step, after node completion</strong> will create a new revision only when subitting the last step of the form, and only if all the steps have been successfully submitted at least once
      (i.e. after the node is considered <em>complete</em>).</li></ul>'
    ),
    '#default_value' => variable_get('multistep_status_revisions', 'default'),
    '#options' => array(
      'default' => t('Any step (Default)'),
      'complete' => t('Any step, after node completion'),
      'last' => t('Last step'),
      'last-complete' => t('Last step, after node completion'),
    ),
    '#weight' => -10,
  );
  $form['multistep']['status']['multistep_status_publishing'] = array(
    '#type' => 'radios',
    '#title' => t('Publishing'),
    '#description' => t('Sets how multistep will interact with the node published status, <em>if publishing is enabled for the content type</em>.
      <ul><li><strong>At node creation</strong> will follow the standard workflow settings
      (i.e. the node will be published when created).</li>
      <li><strong>At node completion</strong> will hold off publishing the node until all steps have been successfully submitted
      (i.e. when the node is considered <em>complete</em>).</li></ul>'
    ),
    '#default_value' => variable_get('multistep_status_publishing', 'default'),
    '#options' => array(
      'default' => t('At node creation (Default)'),
      'complete' => t('At node completion'),
    ),
    '#weight' => -9,
  );
  $form['multistep']['status']['multistep_submit_status'] = array(
    '#type' => 'submit',
    '#value' => t('Save'),
    '#weight' => 1,
    '#access' => user_access('administer multistep'),
    '#submit' => array('multistep_admin_settings_status_form_submit'),
  );
  // Navigation buttons
  $form['multistep']['buttons'] = array(
    '#type' => 'fieldset',
    '#title' => t('Navigation button labels'),
    '#description' => t('These settings will change the text displayed on each of the submit buttons on multistep forms.'),
    '#weight' => 0,
  );
  $form['multistep']['buttons']['multistep_button_prev'] = array(
    '#type' => 'textfield',
    '#title' => t('Previous button'),
    '#default_value' => variable_get('multistep_button_prev', '< Previous'),
    '#description' => t('This button will bring you back one step.'),
    '#weight' => -10,
  );
  $form['multistep']['buttons']['multistep_button_next'] = array(
    '#type' => 'textfield',
    '#title' => t('Next button'),
    '#default_value' => variable_get('multistep_button_next', 'Next >'),
    '#description' => t('This button will move you forward one step.'),
    '#weight' => -9,
  );
  $form['multistep']['buttons']['multistep_button_save'] = array(
    '#type' => 'textfield',
    '#title' => t('Save button'),
    '#default_value' => variable_get('multistep_button_save', 'Save'),
    '#description' => t('This button will save the form while remaining in the current step.'),
    '#weight' => -8,
  );
  $form['multistep']['buttons']['multistep_button_done'] = array(
    '#type' => 'textfield',
    '#title' => t('Done button'),
    '#default_value' => variable_get('multistep_button_done', 'Done'),
    '#description' => t('This button will save the form and redirect you to the node view.'),
    '#weight' => -7,
  );
  $form['multistep']['buttons']['multistep_submit_buttons'] = array(
    '#type' => 'submit',
    '#value' => t('Save button labels'),
    '#weight' => 1,
    '#access' => user_access('administer multistep'),
    '#validate' => array('multistep_admin_settings_buttons_form_validate'),
    '#submit' => array('multistep_admin_settings_buttons_form_submit'),
  );
  // Reset data
  $form['multistep']['reset'] = array(
    '#type' => 'fieldset',
    '#title' => t('Reset data'),
    '#description' => t('This form will reset all the step data for the selected content type. Use this if you just enabled multistep for a content type that already contained nodes.') . '<br /><strong>' . t('Warning! Resetting the tables for a content type that already had multistep enabled could result in the loss of the step data!') . '</strong>',
    '#weight' => 1,
  );
  $content_types = content_types();
  $options = array('' => '- Select -');
  foreach ($content_types as $content_type) {
    if (variable_get('multistep_expose_' . $content_type['type'], 'disabled') == 'enabled') {
      $options[$content_type['type']] = $content_type['name'];
    }
  }
  $form['multistep']['reset']['multistep_type'] = array(
    '#type' => 'select',
    '#title' => t('Content type'),
    '#options' => $options,
    '#weight' => -1,
  );
  // Show reset button if multistep is enabled for this content type.
  $form['multistep']['reset']['multistep_reset'] = array(
    '#type' => 'submit',
    '#value' => t('Reset data'),
    '#weight' => 1,
    '#access' => user_access('administer multistep'),
    '#validate' => array('multistep_admin_settings_reset_form_validate'),
    '#submit' => array('multistep_admin_settings_reset_form_submit'),
  );
  return $form;
}

/**
 * Saves the revision and publishing settings.
 */
function multistep_admin_settings_status_form_submit($form, &$form_state) {
  variable_set('multistep_status_revisions', $form_state['values']['multistep_status_revisions']);
  variable_set('multistep_status_publishing', $form_state['values']['multistep_status_publishing']);
  drupal_set_message(t('Settings saved successfully.'));
}

/**
 * Validates the navigation button labels form to make sure they contain text.
 */
function multistep_admin_settings_buttons_form_validate($form, &$form_state) {
  if (empty($form_state['values']['multistep_button_prev']) || !isset($form_state['values']['multistep_button_prev'])) {
    form_set_error('multistep_button_prev', 'You need to enter a label for the <em>Previous</em> button.');
  }
  if (empty($form_state['values']['multistep_button_next']) || !isset($form_state['values']['multistep_button_next'])) {
    form_set_error('multistep_button_next', 'You need to enter a label for the <em>Next</em> button.');
  }
  if (empty($form_state['values']['multistep_button_save']) || !isset($form_state['values']['multistep_button_save'])) {
    form_set_error('multistep_button_save', 'You need to enter a label for the <em>Save</em> button.');
  }
  if (empty($form_state['values']['multistep_button_done']) || !isset($form_state['values']['multistep_button_done'])) {
    form_set_error('multistep_button_done', 'You need to enter a label for the <em>Done</em> button.');
  }
}

/**
 * Saves the navigation button labels.
 */
function multistep_admin_settings_buttons_form_submit($form, &$form_state) {
  variable_set('multistep_button_prev', $form_state['values']['multistep_button_prev']);
  variable_set('multistep_button_next', $form_state['values']['multistep_button_next']);
  variable_set('multistep_button_save', $form_state['values']['multistep_button_save']);
  variable_set('multistep_button_done', $form_state['values']['multistep_button_done']);
  drupal_set_message(t('Button labels saved successfully.'));
}

/**
 * Validates the reset data form to make sure a content type was selected.
 */
function multistep_admin_settings_reset_form_validate($form, &$form_state) {
  if (empty($form_state['values']['multistep_type']) || !isset($form_state['values']['multistep_type'])) {
    form_set_error('multistep_type', 'You need to select which content type you want to reset the data for.');
  }
}

/**
 * Resets the multistep table data for the selected content type.
 */
function multistep_admin_settings_reset_form_submit($form, &$form_state) {
  _multistep_reset_data($form_state['values']['multistep_type']);
  drupal_set_message(t('Data was reset successfully.'));
}
