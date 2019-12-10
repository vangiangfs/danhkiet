<?php  
	global $toolbar;
	$toolbar->setTitle(FSText :: _('Cities') );
	$toolbar->addButton('save_all',FSText :: _('Save'),'','save.png'); 
	$toolbar->addButton('add',FSText :: _('Add'),'','add.png'); 
	$toolbar->addButton('edit',FSText :: _('Edit'),FSText :: _('You must select at least one record'),'edit.png'); 
	$toolbar->addButton('remove',FSText :: _('Remove'),FSText :: _('You must select at least one record'),'remove.png'); 
	$toolbar->addButton('published',FSText :: _('Published'),FSText :: _('You must select at least one record'),'published.png');
	$toolbar->addButton('unpublished',FSText :: _('Unpublished'),FSText :: _('You must select at least one record'),'unpublished.png');
?>
<div class="form_body">
	<form action="index.php?module=<?php echo $this -> module;?>&view=<?php echo $this -> view;?>" name="adminForm" method="post">
		
		<!--	FILTER	-->
		<?php 
			$filter_config  = array();
			$fitler_config['search'] = 1; 
			$fitler_config['filter_count'] = 1;

			$filter_categories = array();
			$filter_categories['title'] = FSText::_('Countries'); 
			$filter_categories['list'] = @$countries; 
			$filter_categories['field'] = 'name'; 
			
			$fitler_config['filter'][] = $filter_categories;																																																																																																																																																																																																																																																																																																																																																																																																																						
			
			echo $this -> create_filter($fitler_config);
		?>
		<!--	END FILTER	-->
		
		<div class="form-contents">
			<table border="1" class="tbl_form_contents" cellpadding="5">
				<thead>
					<tr>
					<th width="3%">
						#
					</th>
					<th width="3%">
						<input type="checkbox" onclick="checkAll(<?php echo count($list); ?>);" value="" name="toggle">
					</th>
					<th class="title">
						<?php echo  TemplateHelper::orderTable(FSText::_('Name'), 'name',@$sort_field,@$sort_direct) ; ?>
					</th>
					<th class="title" width="3%">
						<?php echo  TemplateHelper::orderTable(FSText :: _('Ordering'), 'a.ordering',@$sort_field,@$sort_direct) ; ?>
					</th>
					<th class="title" width="3%">
						<?php echo  TemplateHelper::orderTable(FSText :: _('Published'), 'published',@$sort_field,@$sort_direct) ; ?>
					</th>
					<th class="title" width="7%">
						<?php echo FSText :: _('Edit'); ?>
					</th>
					<th class="title" width="7%">
						<?php echo  TemplateHelper::orderTable(FSText :: _('Id'), 'id',@$sort_field,@$sort_direct) ; ?>
					</th>
				</thead>
				<tbody>
					
					<?php $i = 0; ?>
					<?php if(@$list){?>
						<?php foreach ($list as $row) { ?>
							<?php $link_view = "index.php?module=".$this -> module."&view=".$this -> view."&task=edit&id=".$row->id; ?>
							<tr class="row<?php echo $i%2; ?>">
								<td><?php echo $i+1; ?>
								    <input type="hidden" name='<?php echo "id_".$i; ?>' value="<?php echo $row->id; ?>"/>
								</td>
								<td>
									<input type="checkbox" onclick="isChecked(this.checked);" value="<?php echo $row->id; ?>"  name="id[]" id="cb<?php echo $i; ?>">
								</td>
								<td align="left">
									<?php echo TemplateHelper::edit_text('name',$row->name,$i,50); ?>
								</td>
								<td>
									<?php echo TemplateHelper::edit_text('ordering',$row->ordering,$i,3); ?>
								</td>
								<td><?php echo TemplateHelper::published("cb".($i),$row->published?"unpublished":"published"); ?></td>
								<td> <?php echo TemplateHelper::edit($link_view); ?></td>
								<td><?php echo $row->id; ?></td>
							</tr>
							<?php $i++; ?>
						<?php }?>
					<?php }?>
				</tbody>
			</table>
		</div>
		<div class="footer_form">
			<?php if(@$pagination) {?>
			<?php echo $pagination->showPagination();?>
			<?php } ?>
		</div>
		
		<input type="hidden" value="<?php echo @$sort_field; ?>" name="sort_field">
		<input type="hidden" value="<?php echo @$sort_direct; ?>" name="sort_direct">
		<input type="hidden" value="<?php echo $this -> module;?>" name="module">
		<input type="hidden" value="<?php echo $this -> view;?>" name="view">
		<input type="hidden" value="<?php echo ($i+1);?>" name="total">
		<input type="hidden" value="<?php echo FSInput::get('page',0,'int');?>" name="page">
		<input type="hidden" value="<?php echo 'name,ordering,country_id';?>" name="field_change">
		<input type="hidden" value="" name="task">
		<input type="hidden" value="0" name="boxchecked">
	</form>
</div>