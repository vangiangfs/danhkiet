<?php
global $tmpl;
$tmpl->addStylesheet('bootstrap');
$tmpl->addScript('library');
$tmpl->addScript('bootstrap.min');
$tmpl->addScript('jquery-1.11.2.min', null, 'top');
echo $main_content;?>
<div id="fs-alert" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title" id="gridSystemModalLabel">Thông báo</h4>
            </div>
            <div id="fs-alert-msg" class="modal-body"></div>
        </div><!--end: .modal-content-->
    </div><!--end: .modal-dialog-->
</div><!--end: #fs-alert-->