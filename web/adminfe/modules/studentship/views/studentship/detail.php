<?php
$title = @$data ? FSText :: _('Edit'): FSText :: _('Add'); 
global $toolbar;
$toolbar->setTitle($title);
$toolbar->addButton('apply',FSText :: _('Apply'),'','apply.png'); 
$toolbar->addButton('Save',FSText :: _('Save'),'','save.png'); 
$toolbar->addButton('back',FSText :: _('Cancel'),'','back.png');   
$this -> dt_form_begin(0);
?>
<div id="tabs">
    <ul>
        <li><a href="#fragment-1"><span><?php echo FSText::_("Thông tin cơ bản"); ?></span></a></li>
        <li><a href="#fragment-3"><span><?php echo FSText::_("Chi tiết"); ?></span></a></li>
    </ul>
    <div id="fragment-1">
        <table cellspacing="1" class="admintable">
        <?php
        TemplateHelper::dt_edit_selectbox(FSText::_('Categories'),'category_id',@$data -> category_id,0,$categories,$field_value = 'id', $field_label='treename',$size = 1,0);
        TemplateHelper::dt_edit_text(FSText :: _('Title'),'title',@$data -> title);
        TemplateHelper::dt_edit_selectbox(FSText::_('Cấp học'),'level_education',@$data -> level_education,0, $this->level_education, $field_value = 'id', $field_label='title', $size = 1, 0);
        TemplateHelper::dt_edit_text(FSText :: _('Tên trường'),'shool_name',@$data -> shool_name);
        TemplateHelper::dt_checkbox(FSText::_('Học bổng một phần'),'full_scholarship',@$data -> full_scholarship, 0);
        TemplateHelper::dt_edit_text(FSText :: _('Giá trị học bổng'),'scholarship_value',@$data -> scholarship_value);
        // TemplateHelper::dt_edit_selectbox(FSText::_('Giá trị học bổng'),'scholarship_value',@$data -> scholarship_value,0, $this->scholarship_value, $field_value = 'id', $field_label='title', $size = 1, 0);
        TemplateHelper::dt_edit_selectbox(FSText::_('Quốc gia'),'nation',@$data -> nation,0, $this->arr_nations, $field_value = 'id', $field_label='name', $size = 1, 0);
        TemplateHelper::dt_edit_text(FSText :: _('Ordering'),'ordering',@$data -> ordering,@$maxOrdering,'20');
        TemplateHelper::dt_date_pick ( FSText :: _('Published time' ), 'created_time', @$data->created_time?@$data->created_time:date('Y-m-d H:i:s'), FSText :: _('Bạn vui lòng chọn thời gian hiển thị'), 20);
        TemplateHelper::dt_checkbox(FSText::_('Published'),'published',@$data -> published,1);
        ?>
        </table>
    </div><!--end: #fragment-1-->
    <div id="fragment-3">
        <table cellspacing="1" class="admintable" style="width: 100%;">
        <?php
        TemplateHelper::dt_edit_text(FSText :: _('Đối tượng'),'object',@$data -> object,'',100,9);
        TemplateHelper::dt_edit_text(FSText :: _('Lời khuyên'),'advice',@$data -> advice,'',100,9);
        TemplateHelper::dt_edit_text(FSText :: _('Nguồn'),'source',@$data -> source,'',100,9);
        ?>
        </table>
    </div><!--end: #fragment-3-->
</div><!--end: #tabs-->
<?php
$this -> dt_form_end(@$data,0);
?>
<script type="text/javascript">
    $(document).ready(function() {
        $("#tabs").tabs();
    });
</script>