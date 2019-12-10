<?php
$title = @$data ? FSText :: _('Edit'): FSText :: _('Add'); 
global $toolbar;
$toolbar->setTitle($title);
$toolbar->addButton('apply',FSText :: _('Apply'),'','apply.png'); 
$toolbar->addButton('Save',FSText :: _('Save'),'','save.png'); 
$toolbar->addButton('back',FSText :: _('Cancel'),'','back.png');
$this -> add_params_form('table_name',$table_name);

$this -> dt_form_begin();
$fields = array_reverse($fields);
foreach($fields  as $field){
    $fieldname  = $field -> field_name;
    $field_display  = $field -> field_name_display;
    $fieldtype  = $field -> field_type;
    if($fieldname == 'alias'){
        TemplateHelper::dt_edit_text(FSText :: _('Alias'),'alias',@$data -> alias,'',60,1,0," ".FSText::_("Can auto generate"));
        continue;
    }

    if(in_array($fieldname, array('created_time', 'edited_time', 'published', 'ordering')))
        continue;

    switch ($fieldtype){
        case "image":
            TemplateHelper::dt_edit_image(FSText :: _('Image'),'image',URL_ROOT.str_replace('/original/', '/tiny/', @$data->image));
            break;
        case "text":
            TemplateHelper::dt_edit_text(FSText :: _('Summary'),'summary',@$data -> summary,'',100,9);
            break;
        default:
            TemplateHelper::dt_edit_text($field_display,$fieldname,@$data -> $fieldname);
            break;
    }
}
TemplateHelper::dt_edit_text(FSText :: _('Ordering'),'ordering',@$data -> ordering,@$maxOrdering,'20');
TemplateHelper::dt_checkbox(FSText::_('Published'),'published',@$data -> published,1);
$this -> dt_form_end(@$data);