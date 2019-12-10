<?php
$title = @$data ? FSText :: _('Edit'): FSText :: _('Add');
global $toolbar;
$toolbar->setTitle($title);
$toolbar->addButton('apply',FSText :: _('Apply'),'','apply.png');
$toolbar->addButton('Save',FSText :: _('Save'),'','save.png');
$toolbar->addButton('back',FSText :: _('Cancel'),'','back.png');
$this -> dt_form_begin(1);
TemplateHelper::dt_edit_text(FSText :: _('Họ tên'),'fullname',@$data -> fullname);
TemplateHelper::dt_edit_text(FSText :: _('Ngày sinh'),'birthday',@$data -> birthday);
TemplateHelper::dt_edit_text(FSText :: _('Điện thoại'),'mobile',@$data -> mobile);
TemplateHelper::dt_edit_text(FSText :: _('Email'), 'email', @$data->email);
TemplateHelper::dt_edit_text(FSText :: _('Nơi sinh sống'),'address',@$data -> address);
TemplateHelper::dt_checkbox(FSText::_('Published'),'published',@$data -> published,1);
$this -> dt_form_end(@$data,1);