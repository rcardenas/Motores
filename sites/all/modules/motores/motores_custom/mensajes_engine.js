Drupal.behaviors.mensajes = function()
{
	var user=$('#edit-nuevo-field').val();
	$('#edit-field-inbox-0-uid-uid').val(user);
	$('#edit-field-inbox-0-uid-uid-wrapper').hide();
	$('#edit-preview').hide();
	
	var nid=$('#edit-nuevo-nid-field').val();
	$('#edit-field-inbox-node-0-nid-nid').val(nid);
	$('#edit-field-inbox-node-0-nid-nid-wrapper').hide();
};