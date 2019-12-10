<?php
$title = @$data ? FSText :: _('Edit'): FSText :: _('Add'); 
global $toolbar;
$toolbar->setTitle($title);
$toolbar->addButton('apply',FSText :: _('Apply'),'','apply.png'); 
$toolbar->addButton('Save',FSText :: _('Save'),'','save.png'); 
$toolbar->addButton('back',FSText :: _('Cancel'),'','back.png');   
$this -> dt_form_begin(1);
TemplateHelper::dt_edit_text(FSText :: _('Khóa học'),'studentship_title',@$data -> studentship_title);
TemplateHelper::dt_edit_text(FSText :: _('Họ và tên học sinh'),'fullname',@$data -> fullname);
TemplateHelper::dt_edit_text(FSText :: _('Ngày sinh'),'birthday',@$data -> birthday);
TemplateHelper::dt_edit_text(FSText :: _('Khóa học đã kết thúc'),'ended_course',@$data -> ended_course);
TemplateHelper::dt_edit_text(FSText :: _('Điểm trung bình học tập (GPA)'), 'point_gpa', @$data->point_gpa);
TemplateHelper::dt_edit_text(FSText :: _('Điểm IELTS/TOEFL'),'point_ielts',@$data -> point_ielts);
TemplateHelper::dt_edit_text(FSText :: _('Điểm SAT/ACT'),'point_sat',@$data -> point_sat);
TemplateHelper::dt_edit_text(FSText :: _('Điểm GMAT/GRE'),'point_gmat',@$data -> point_gmat);
TemplateHelper::dt_edit_text(FSText :: _('Thành tích học tập khá'),'other_learning',@$data -> other_learning);
TemplateHelper::dt_edit_text(FSText :: _('Đôi dòng mô tả hoạt động ngoại khóa'),'active_key',@$data -> active_key);
TemplateHelper::dt_edit_text(FSText :: _('Ngành học bạn quan tâm'),'field_study',@$data -> field_study);
TemplateHelper::dt_checkbox(FSText::_('Published'),'published',@$data -> published,1);
$this -> dt_form_end(@$data,1);