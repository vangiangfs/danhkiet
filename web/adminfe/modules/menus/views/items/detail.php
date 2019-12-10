<?php 
$title = @$data ? FSText :: _('Edit'): FSText :: _('Add'); 
global $toolbar;
$toolbar->setTitle($title);
$toolbar->addButton('Save',FSText :: _('Save'),'','save.png'); 
$toolbar->addButton('cancel',FSText :: _('Cancel'),'','cancel.png'); 
?>
<div class="form_body">
	<form action="index.php?module=menus&view=items" name="adminForm" method="post" enctype="multipart/form-data">
		<?php global $position; ?>
        <div id="tabs">
            <ul>
                <li><a href="#fragment-1"><span><?php echo FSText::_("Thông tin cơ bản"); ?></span></a></li>
                <li><a href="#fragment-2"><span><?php echo FSText::_("Liên kêt"); ?></span></a></li>
            </ul>
            <div id="fragment-1">
        		<table cellspacing="1" class="admintable">
        			<tr>
        				<td valign="top" class="key">
        					<?php echo FSText :: _('Group'); ?>
        				</td>
        				<td>
        					<select name="group_id">
        						<option value=""><?php echo FSText :: _('Group'); ?>
        						<?php for ($i = 0 ; $i< count($groups) ;$i ++ ){?>
        							<option value="<?php echo $groups[$i]->id; ?>" <?php if(@$data->group_id == $groups[$i]->id) echo "selected=\"selected\""; ?> ><?php echo $groups[$i]->group_name;  ?> </option>	
        						<?php }?>
        					</select>
        				</td>
        			</tr>
                    <tr>
        				<td valign="top" class="key">
        					<?php echo FSText :: _('Parent'); ?>
        				</td>
        				<td>
        					<select id="parent_id" name="parent_id">
        						<option value=""><?php echo FSText :: _('Parent'); ?></option>
        					   <?php 
        						if($list){
        							foreach ($list as $item) {
        								$selected =  (@$data->parent_id == $item->id) ? "selected=\"selected\"":"";					
        								echo "<option value='".$item->id ."' ".$selected." >".$item -> treename ." </option>";
        							}
        						}
        						?>
        					</select>
        				</td>
        			</tr>
                    <?php TemplateHelper::dt_edit_text(FSText :: _('Name'),'name',@$data -> name); ?>
                    <?php TemplateHelper::dt_edit_image(FSText :: _('Image'),'image',URL_ROOT.@$data->image); ?>
                    <?php TemplateHelper::dt_checkbox(FSText::_('Default'),'default',@$data->default, 0); ?>
                    <?php TemplateHelper::dt_checkbox(FSText::_('Published'),'published',@$data -> published,1); ?>
                    <?php TemplateHelper::dt_edit_text(FSText :: _('Ordering'),'ordering',@$data -> ordering,@$maxOrdering,'20'); ?>
                    <tr class="category_banner">
        				<td valign="top" class="key">
        					<?php echo FSText :: _('Danh mục QC'); ?>
        				</td>
        				<td>
        					<select name="category_banner">
        						<option value="0"><?php echo FSText :: _('--Chọn danh mục--'); ?>
        						<?php foreach($cats as $item){?>
        							<option value="<?php echo $item->id; ?>" <?php if(@$data->category_banner == $item->id) echo "selected=\"selected\""; ?> ><?php echo $item->name;  ?> </option>	
        						<?php }?>
        					</select>
        				</td>
        			</tr>
        		</table>
            </div><!--end: #fragment-1-->
            <div id="fragment-2">
                <table cellspacing="1" class="admintable">
        			<tr>
        				<td valign="top" class="key">
        					<?php echo FSText :: _('Link'); ?>
        				</td>
        				<td>
        					<input type="text" name='link' id="menu_link"  value="<?php echo @$data->link; ?>"  size="50">
        				</td>
        			</tr>
        			<tr>
        				<td valign="top" class="key">
        					<?php echo FSText :: _('Create link'); ?>
        				</td>
        				<td>
        					<div class='option_module'>
        						<ul>
        							<?php 
        							if($create_link){
        								foreach ($create_link as $item) { 
        									if(!$item -> link_menu){
        										echo '<li><strong>'.$item -> treename.'</strong><li>'; 
        									} else {
        										if($item -> add_parameter){
        											echo '<li><a href="javascript: created_indirect(\''.$item -> link_menu.'\',\''.$item->id.'\');">'.$item -> treename .'</a><li>'; 
        										} else {
        											echo '<li><a href="javascript: created_direct(\''.$item -> link_menu.'\');">'.$item -> treename .'</a><li>';
        										}
        									}
        									
        									
        								}
        							}
        							?>
        						</ul>
        					</div>
        				</td>
        			</tr>
        			<tr>
        				<td valign="top" class="key">
        					<?php echo FSText :: _('Target'); ?>
        				</td>
        				<td>
        					<select name="target">
                                <option value="_self" <?php if(@$data->target =='_self') echo "selected=\"selected\""; ?> >
                                    <?php echo FSText :: _("Current window")?>
                                </option>
        						<option value="_blank" <?php if(@$data->target =='_blank') echo "selected=\"selected\""; ?> >
        							<?php echo FSText :: _("New window")?>
        						</option>
        					</select>
        				</td>
        			</tr>
        		</table>
            </div><!--end: #fragment-2-->
        </div><!--end: #tabs-->
		<?php if(@$data->id) { ?>
		<input type="hidden" value="<?php echo $data->id; ?>" name="id"/>
		<?php }?>
		<input type="hidden" value="items" name="view"/>
		<input type="hidden" value="menus" name="module"/>
		<input type="hidden" value="" name="task"/>
		<input type="hidden" value="0" name="boxchecked"/>
	</form>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        $("#tabs").tabs();
    });
</script>
<script type="text/javascript">
    $('select[name="group_id"]').change(function(){
        getMenuParent($(this).val());
        setCategoryBannerStatus($(this).val());
    })
	function created_direct(link){
		$('#menu_link').val(link);
	}
	function created_indirect(link,created_link_id){
		$('#menu_link').val(link);
		window.open("index2.php?module=menus&view=items&task=add_param&id="+created_link_id, "","height=600,width=700,menubar=0,resizable=1,scrollbars=1,statusbar=0,titlebar=0,toolbar=0");
	}
    function getMenuParent($group_id){
        <?php if(@$data->parent_id){?>
            var $parent_id = '<?php echo $data->parent_id?>';
        <?php }else{?>
            var $parent_id = '0';
        <?php }?>
        $.ajax({
    		type : 'POST',
    		url : 'index.php?module=menus&view=items&task=getMenuParent&raw=1',
    		dataType : 'html',
    		data: 'group_id='+$group_id+'&parent_id='+$parent_id,
    		success : function($html){
                $('#parent_id').html($html);
            }
    	});
    }
    function setCategoryBannerStatus($value){
        if($value == '7')
            $('tr.category_banner').show();
        else
            $('tr.category_banner').hide();
    }
    $(document).ready(function(){
        <?php if(@$data->group_id){?>
            getMenuParent(<?php echo $data->group_id; ?>);
            setCategoryBannerStatus(<?php echo $data->group_id; ?>);
        <?php }?>
    });
</script>