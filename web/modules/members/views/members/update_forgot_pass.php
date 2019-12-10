<?php 
$tmpl->addScript('members','modules/members/assets/js');
?>
<div id="contact" class="container">
    <div class="conttact-form">
        <h2 class="text-center text-uppercase">Đổi mật khẩu</h2>
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <form id="frmLogin" action="<?php echo FSRoute::_('index.php?module=members&view=members&task=do_update_forgot_pass'); ?>" method="post">
                    <div class="form-group">
                        <input class="form-control" type="text" id="activated_code" name="activated_code" value="" placeholder="Mã bảo mật" />
                    </div><!--end: .bound-input-->
                    <div class="form-group">
                        <input class="form-control" type="password" id="password" name="password" value="" placeholder="Nhập mật khẩu mới" />
                    </div><!--end: .bound-input-->
                    <div class="form-group">
                        <input class="form-control" type="password" id="repassword" name="repassword" value="" placeholder="Xác nhận mật khẩu mới" />
                    </div><!--end: .bound-input-->
                    <div class="group-button">
                        <a class="btn btn-success login" onclick="validateForgotUpdate();" href="javascript:void(0);" title="Đổi mật khẩu">Đổi mật khẩu</a>
                    </div><!--end: .bound-input-->
                    <input type="hidden" name="module" value="members"/>
                    <input type="hidden" name="task" value="do_update_forgot_pass"/>
                    <input type="hidden" name="view" value="members"/>
                    <input type="hidden" name="redirect" value="<?php echo FSInput::get('redirect', URL_ROOT); ?>" />
                    <input type="hidden" name="data" value="<?php echo FSInput::get('data', ''); ?>" />
                </form>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</div>