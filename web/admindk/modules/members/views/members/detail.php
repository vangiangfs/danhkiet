<?php
$title = @$data ? FSText::_('Sửa thông tin thành viên'): FSText::_('Thêm thành viên');
global $toolbar;
$toolbar->setTitle($title);
$toolbar->addButton('apply',FSText::_('Apply'),'','apply.png');
$toolbar->addButton('save',FSText::_('Save'),'','save.png');
$toolbar->addButton('back',FSText :: _('Cancel'),'','back.png');
$arrVersion = array(
    'guest' => 'Khách hàng',
    'technical' => 'Kỹ thuật viên'
);
?>
<div class="form_body">
<div id="msg_error"></div>
    <form action="index.php?module=<?php echo $this -> module;?>&view=<?php echo $this -> view;?>" name="adminForm" method="post" enctype="multipart/form-data">
        <table cellpadding="6" cellspacing="0" class="admintable">
            <tr>
                <td class="label key"><span>Email</span></td>
                <td class="value">
                    <input type="text" name="email" id="email" value="<?php echo @$data-> email; ?>" />
                </td>
            </tr>
            <tr>
                <td class="label key"><span>First name </span></td>
                <td class="value">
                        <input type="text" name="first_name" id="first_name" value="<?php echo @$data->first_name; ?>" />
                </td>
            </tr>
            <tr>
                <td class="label key"><span>Last name </span></td>
                <td class="value">
                    <input type="text" name="last_name" id="last_name" value="<?php echo @$data->last_name; ?>" />
                </td>
            </tr>
            <tr>
                <td class="label key"><span>Địa chỉ</span></td>
                <td class="value">
                    <input type="text" name="address" id="address" value="<?php echo @$data->address; ?>" />
                </td>
            </tr>
            <tr>
                <td class="label key"><span>Điện thoại</span></td>
                <td class="value">
                    <input type="text" name="mobile" id="mobile"  value="<?php echo @$data-> mobile; ?>" />
                </td>
            </tr>
            <tr>
                <td class="label key"><span>Tiền tích lũy</span></td>
                <td class="value">
                    <input type="text" name="money" id="money"  value="<?php echo @$data-> money; ?>" /><br />
                </td>
            </tr>
            <tr>
                <td class="label key"><span>Loại thành viên</span></td>
                <td class="value">
                    <select id="version" name="version">
                        <?php foreach($arrVersion as $key=>$val){ ?>
                            <option <?php if($key==@$data->version) echo 'selected'; ?> value="<?php echo $key ?>"><?php echo $val?></option>
                        <?php } ?>
                    </select>
                </td>
            </tr>
            <tr>
                <td class="label key"><span><?php echo FSText::_('Loại')?></span></td>
                <td class="value">
                    <input type="radio" name="vip" id="vip0" class='edit_pass'  value="0" <?php if(@$data->vip==0) echo 'checked="checked"'; ?>/> Thường
                    <input type="radio" name="vip" id="vip2" class='edit_pass'  value="2" <?php if(@$data->vip==2) echo 'checked="checked"'; ?>/> Yêu cầu VIP
                    <input type="radio" name="vip" id="vip1" class='edit_pass' value="1" <?php if(@$data->vip==1) echo 'checked="checked"'; ?> /> VIP
                </td>
            </tr>
            <?php
            //TemplateHelper::dt_checkbox(FSText::_('Verify'), 'verify', @$data -> verify, 0);
            TemplateHelper::dt_checkbox(FSText::_('Published'), 'published', @$data -> published, 1);
            ?>
            <tr class='password_area'>
                <td class='label key'><font>*</font><?php echo FSText::_("Password")?></td>
                <td class='value'>
                    <input type="password" name="password1" id="password" />
                </td>
            </tr>
            <tr class='password_area'>
                <td class='label key'><font>*</font><?php echo FSText::_("Re-Password")?></td>
                <td class='value'>
                    <input type="password" name="re-password1" id="re-password" />
                </td>
            </tr>
        </table>
        <?php if(@$data->id) { ?>
        <input type="hidden" value="<?php echo @$data->id; ?>" name="id">
        <?php }?>
        <input type="hidden" value="members" name="view">
        <input type="hidden" value="members" name="module">
        <input type="hidden" value="" name="task">
        <input type="hidden" value="0" name="boxchecked">
    </form>
</div>

<script  type="text/javascript" language="javascript">
$(function(){
	$("select#city_id").change(function(){
		$.getJSON("index.php?module=members&task=district&raw=1",{cid: $(this).val()}, function(j){
			var options = '';
			for (var i = 0; i < j.length; i++) {
				options += '<option value="' + j[i].id + '">' + j[i].name + '</option>';
				
			}
			$("#district_id").html(options);
			$('#district_id option:first').attr('selected', 'selected');
		})
	});
	$('.password_area').hide();
	$('#edit_pass0').click(function(){
		$('.password_area').hide();
	});
	$('#edit_pass1').click(function(){
		$('.password_area').show();
	});
})

function view_order_fast(id){
	if(id)
        window.open("index2.php?module=order&view=order_fast&uid="+id, "","height=600,width=900,menubar=0,resizable=1,scrollbars=1,statusbar=0,titlebar=0,toolbar=0");
}
</script>
