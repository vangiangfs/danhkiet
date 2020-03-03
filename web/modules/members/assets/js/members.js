function validateBRegister(){
    if($('#breg_username').val()==''){
        fsAlert('Bạn vui lòng nhập địa chỉ tên đăng nhập.');
		return false;
	}
    if($('#breg_email').val()==''){
        fsAlert('Bạn vui lòng nhập địa chỉ email.');
		return false;
	}
    if(!isEmail($('#breg_email').val())){
        fsAlert('Địa chỉ email không đúng.');
		return false;
	}
    if($('#breg_password').val()==''){
        fsAlert('Bạn vui lòng nhập mật khẩu.');
		return false;
	}
    if($('#breg_name').val()==''){
        fsAlert('Bạn vui lòng nhập họ và tên.');
        return false;
    }
    if(!isPhone('breg_phone')){
        fsAlert('Số điện thoại không đúng.');
		return false;
	}

    var $data = $('form#frmBRegister').serialize();

    $.ajax({
		type : 'POST',
        dataType: 'json',
		url : '/index.php?module=members&view=members&raw=1&task=do_bregister',
		data: $data,
        success : function($json){
            fsAlert($json.message);
            if($json.error == false) {
                $('#modal-register').modal('toggle');
                $('#modal-login').modal('toggle');
                document.getElementById("frmBRegister").reset();
                $(window.location).attr('href', data.redirect);
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            fsAlert('Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.');
        }
	});
    return false;
}

function validateBLogin(){
    if($('#blog_username').val()==''){
        fsAlert('Bạn vui lòng nhập tên đăng nhập.');
        $('#blog_username').focus();
		return false;
	}
    if($('#blog_password').val()==''){
        fsAlert('Bạn vui lòng nhập mật khẩu.');
        $('#blog_password').focus();
		return false;
	}
    var $data = $('form#frmBLogin').serialize();
    $.ajax({
		type : 'POST',
        dataType: 'json',
		url : '/index.php?module=members&view=members&raw=1&task=do_login',
		data: $data,
        success : function(data){
            if (data.error == true){
                fsAlert(data.message);
            }else{
                $(window.location).attr('href', data.redirect);
            }
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {
            fsAlert('Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.');
        }
	});
    return false;
}

function validateChangepass(){
    if($('#cpassword').val()==''){
		Boxy.alert('Bạn vui lòng nhập mật khẩu hiện tại.',function(){$('#cpassword').focus();},{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });
		return false;
	}
    if($('#password').val()==''){
		Boxy.alert('Bạn vui lòng nhập mật khẩu mới.',function(){$('#password').focus();},{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });
		return false;
	}
    if($('#password').val()!=$('#repassword').val()){
		Boxy.alert('Bạn vui lòng nhập mật khẩu.',function(){$('#repassword').focus();},{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });
		return false;
	}
    document.forms['frmChangepass'].submit();
}

function validateForgot(){
    if($('#username').val()=='' && $('#email').val()==''){
		Boxy.alert('Bạn vui lòng nhập <b>tên đăng nhập</b> hoặc <b>email</b>.',function(){$('#username').focus();},{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });
		return false;
	}
    if($('#email').val()!='' && !isEmail($('#email').val())){
		Boxy.alert('Địa chỉ email không đúng.',function(){$('#email').focus();},{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });
		return false;
	}
    var $data = $('form#frmLogin').serialize();
    $.ajax({
		type : 'POST',
        dataType: 'json',
		url : '/index.php?module=members&view=members&raw=1&task=do_forgot_pass',
		data: $data,
        success : function(data){
            Boxy.alert(data.message,function(){
                if (data.error==false)
                    $(window.location).attr('href', data.redirect);
            },{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {Boxy.alert('Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.',function(){ },{title:'Thông báo.',afterShow: function() {$('#boxy_button_OK').focus();}});}
	});
    return false;
}

function validateEditUser(){
    if($('#fullname').val()==''){
        fsAlert('Bạn vui lòng nhập tên đầy đủ.');
        $('#fullname').focus();
        return false;
    }
    if($('#mobile').val()==''){
        fsAlert('Bạn vui lòng nhập số điện thoại.');
        $('#mobile').focus();
        return false;
    }
    if($('#address').val()==''){
        fsAlert('Bạn vui lòng nhập địa chỉ.');
        $('#address').focus();
        return false;
    }
    document.forms['frmEditUser'].submit();
}

$('#city_id').change(function(){
    setSelectDistricts($('#district_id'), $(this).val(), 0);
});

$(document).ready(function(){
    $('#frmBRegister').keypress(function (e) {
        if (e.which == 13) {
            validateBRegister();
            return false;
        }
    });

    $('#frmBLogin').keypress(function (e) {
        if (e.which == 13) {
            validateBLogin();
            return false;
        }
    });

    if( $('.datepicker').length)
        $('.datepicker').datepicker({
            showOn: 'button',
            buttonImageOnly: true,
            changeMonth: true,
            changeYear: true,
            buttonImage: '/templates/default/scss/images/ui-icon-calendar.png'
        });

    if( $('select#district_id').length)
        setSelectDistricts($('#district_id'), $('#city_id').val(), $('#district_id').attr('data-id'));
});

function validateForgotUpdate(){
    if($('#activated_code').val()==''){
        fsAlert('Bạn vui lòng nhập mã bảo mật (trong email của bạn).');
        return false;
    }
    if($('#password').val()==''){
        fsAlert('Bạn vui lòng nhập mật khẩu mới.');
        return false;
    }
    if($('#password').val()!=$('#repassword').val()){
        fsAlert('Bạn vui lòng nhập mật khẩu.');
        return false;
    }
    var $data = $('form#frmLogin').serialize();
    $.ajax({
        type : 'POST',
        dataType: 'json',
        url : '/index.php?module=members&view=members&raw=1&task=do_update_forgot_pass',
        data: $data,
        success : function(data){
            fsAlert(data.message)
            /* if (data.error==false)
             $(window.location).attr('href', data.redirect);*/
        },
        error : function(XMLHttpRequest, textStatus, errorThrown) {fsAlert('Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.');}
    });
    return false;
}