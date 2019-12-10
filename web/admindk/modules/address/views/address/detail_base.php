<table cellspacing="1" class="admintable">
<?php TemplateHelper::dt_edit_text(FSText :: _('Name'),'name',@$data -> name);
	TemplateHelper::dt_edit_text(FSText :: _('Địa chỉ'),'address',@$data -> address,'',60,1,0,'');
//	TemplateHelper::dt_edit_selectbox('Khu vực','region',@$data -> region,0,$arr_region,'id', 'name',$size = 1,0,1);
	TemplateHelper::dt_edit_text(FSText :: _('Điện thoại'),'phone',@$data -> phone);
	//TemplateHelper::dt_edit_text(FSText :: _('Email'),'email',@$data -> email);
//	TemplateHelper::dt_edit_text(FSText :: _('Thêm thông tin'),'more_info',@$data -> more_info,'',80,4,1);
	//TemplateHelper::dt_edit_image(FSText :: _('Image'),'image',str_replace('/original/','/resized/',URL_ROOT.@$data->image));
	TemplateHelper::dt_checkbox(FSText::_('Published'),'published',@$data -> published,1);
	TemplateHelper::dt_edit_text(FSText :: _('Ordering'),'ordering',@$data -> ordering,@$maxOrdering,'20');
		?>
 <tr>
        <td class="label key"><?php echo FSText :: _('Tỉnh/thành phố'); ?></td>
        <td class="value"  valign="top" >
            <select name="province" id="province"  onchange="changeCity22(this.value,'district');" style="width: 200px;">
					<option value="">--Chọn tỉnh/thành phố--</option>
                    <?php  foreach($dataCity as $province){ 
                            ?>
                                <option <?php if(@$data->province==$province->id) echo 'selected="selected"';?> value="<?php echo $province->id;?>">
                                    <?php  echo $province->name;?>
                                </option>
                        <?php }?>
                
            </select>                  
        </td>
    </tr>
	 <tr>
        <td class="label key"><?php echo FSText :: _('Huyện'); ?></td>
        <td class="value"  valign="top" >
            <select name="district" id="district"  style="width: 200px;">
                
                    <?php  foreach($categories as $city){ 
                            ?>
                                <option <?php if(@$data -> district==$city->id) echo 'selected="selected"';?> value="<?php echo $city->id;?>">
                                    <?php  echo $city->name;?>
                                </option>
                        <?php }?>
                
            </select>                  
        </td>
    </tr>
		<tr>
			<td valign="top" class="key">
				<?php echo FSText :: _('Bản đồ'); ?>
			</td>
			<td>
                            <input id="pac-input" class="controls" value='<?php echo @$data -> address2;?>' name='address2' type="text" placeholder="search your location..." />
					<div id="gmap"></div>
					<input type="hidden" name="latitude" id="latitude" value="<?php echo @$data -> latitude? $data -> latitude:'21.037834051277333'?>"  />
					<input type="hidden" name="longitude" id="longitude" value="<?php echo @$data -> longitude? $data -> longitude:'105.8411953210175'?>"  />
			</td>
		</tr>
                </table>