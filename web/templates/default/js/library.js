var is_rewrite = 0;
var root = 'http://localhost:3012/';
function fsAlert($option){
    $option = $option||{};
    var box = $("<div></div>");
    box.html($option.msg).dialog({
        modal: true, 
        title: 'Thông báo', 
        buttons: { 
            Ok: function() {
                $.isFunction($option.func) && ($option.func)();
                $(this).dialog('destroy').remove();
            }
        }
    }).dialog('open');
    return false;
}

function changeCaptcha(){
	var date = new Date();
	var captcha_time = date.getTime();
	$("#imgCaptcha").attr({src:root+'libraries/jquery/ajax_captcha/create_image.php?'+captcha_time});
}

function isEmail(email) {
	var re = /^(\w|[^_]\.[^_]|[\-])+(([^_])(\@){1}([^_]))(([a-z]|[\d]|[_]|[\-])+|([^_]\.[^_])*)+\.[a-z]{2,3}$/i
	return re.test(email);
}

function isPhone(elemid){
	elem  = $('#'+elemid);
	var numericExpression = /^[0-9 .]+$/;
	if(elem.val().match(numericExpression) && elem.val().length >7 && elem.val().length < 13){
		return true;
	}else{
		return false;
	}
}

function isEmpty(elemid){
	elem  = $('#'+elemid);
	if(elem.val().length == 0){
		elem.focus(); // set the focus to this input
		return false;
	}
	else
	{
		return true;
	}
}

function submitSearch(){
	url = '';
	var keyword = $('#keyword').val();
	keyword  = keyword.replace(/[ ]/g,'-');
	var link_search = $('#link_search').val();
	if(keyword!= '' && keyword != '')	{
		url += 	'&keyword='+keyword;
		var check = 1;
	}else{
		var check =0;
	}
	if(check == 0){
		alert('Bạn phải nhập tham số tìm kiếm');
		return false;
	}
	if(link_search.indexOf("&") == '-1')
		var link = link_search+'/'+keyword;
	else
		var link = link_search+'&keyword='+keyword;
	    window.location.href=link;
	    return false;
}

function validMCallMe(){
    if(!isPhone('txtmphone')) {
        Boxy.alert('Bạn vui lòng nhập số điện thoại.',function(){ $('#qmobile').focus();},{title:'Thông báo.',afterShow: function() {$('#boxy_button_OK').focus();}});
      	return false;
   	}
    var $data = $('form#frm_call_me').serialize();
	$.ajax({
		type : 'POST',
		url : '/index.php?module=ajax&view=ajax&task=call_me&raw=1',
		dataType : 'json',
		data: $data,
		success : function(data){Boxy.alert(data.message,function(){if (data.error==false) {location.reload(true)}},{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });},
		error : function(XMLHttpRequest, textStatus, errorThrown) {Boxy.alert('Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.',function(){},{title:'Thông báo.',afterShow: function() { $('#boxy_button_OK').focus();} });
		}
	});
    return false;
}

function isInteger(value) {
    for (i = 0; i < value.length; i++) {
        if ((value.charAt(i) < '0') || (value.charAt(i) > '9')) return false
    }
    return true;
}
	
$('a#gotop').click(function(){
    $('html, body').animate({scrollTop:0},'slow');
})

$(document).ready(function() {
    $('ul.cats li.selected').parent().parent('li').addClass('selected');
    
    $('.cart .show-cart').click(function(){
        tb_show('Giỏ hàng', '/index.php?module=product&view=cart&raw=1&task=display_ajax&width=865');
    });

    $('.iseven-item a').click(function(){
        var $id = $(this).attr('data-id');
        get_iseven($id);
    });

    $('#fs-modal .close').click(function(){
        $('#fs-modal').modal('hide');
    });
});

function get_iseven($id){
    $.ajax({
        type : 'POST',
        url : '/index.php?module=iseven&view=home&task=get_iseven&raw=1',
        dataType : 'json',
        data: 'id='+$id,
        success : function($json){
            if($json.error == false){
                $('#fs-modal .modal-body').html($json.html);
                $('#fs-modal').modal({show:true});

                var stateObject = {};
                var title = "";
                history.pushState(stateObject, title, $json.link);
                document.title = $json.title;
                $('meta[name="description"]').attr("content", $json.title);
                $('meta[property="og:title"]').attr("content", $json.title);
                $('meta[property="og:description"]').attr("content", $json.title);
            }
        }
    });
}

function valid_consult_product(){
    if($('#txt_name').val() == ''){
        fsAlert('Bạn vui lòng nhập họ tên.');
        return false;
    }
    if(!isPhone('txt_phone')) {
        fsAlert('Bạn vui lòng nhập số điện thoại.');
        return false;
    }
    var $data = $('form#frm_consult_product').serialize();
    $('.box-addcart .btn-warning').addClass('btn-process');
    $.ajax({
        type : 'POST',
        url : '/index.php?module=product&view=product&task=quick_order&raw=1',
        dataType : 'json',
        data: $data,
        success : function(data){
            fsAlert(data.message);
			if (data.error==false)
                window.location = data.url;
            $('.box-addcart .btn-warning').removeClass('btn-process');
        }
    });
    return false;
}

jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

    $('#collection-detail .detail-video a').click(function(){
        var id = $(this).attr('youtube-id');
        var yt = '<iframe width="700" height="384" src="https://www.youtube.com/embed/'+id+'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
        $(this).parent().append(yt);
        $(this).remove();
    });

    $('.banner-video').click(function(){
        var id = $(this).attr('youtube-id');
        var $width = $(this).width();
        var $height = $(this).height();
        var yt = '<iframe width="'+$width+'" height="'+$height+'" src="https://www.youtube.com/embed/'+id+'?autoplay=1" frameborder="0" allowfullscreen></iframe>';
        $(this).parent().append(yt);
        $(this).remove();
    });

    $('.multi-item-carousel .item').each(function(){
        var itemToClone = $(this);

        for (var i=1; i<4; i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
                .addClass("cloneditem-"+(i))
                .appendTo($(this));
        }
    });

    $('.product-item .colors a').click(function(){
        var $obj = $(this);
        $pID = $(this).attr('product-id');
        $cID = $(this).attr('color-id');
        $obj.parent().parent().addClass('process');
        $.ajax({
            type : 'POST',
            asycn: false,
            url : '/index.php?module=ajax&view=ajax&raw=1&task=product_color_image',
            dataType : 'json',
            data: 'pid='+$pID+'&cid='+$cID,
            success : function($json){
                $obj.parent().parent().removeClass('process');
                if($json.error == false)
                    $obj.parent().parent().find('.thumb').find('img').attr('src', $json.image);
            },
            error : function(XMLHttpRequest, textStatus, errorThrown){
                $obj.parent().parent().removeClass('process');
            }
        });
        return false;
    });

    /* Tính margin */
    /* setTimeout(function(){
        var $height = $('header').height();
        $('nav.navbar').css({'margin-top':$height+'px'});
    }, 100); */
});

function fsAlert($msg){
    $('#fs-alert-msg').html($msg);
    $('#fs-alert').modal();
}

function validNewsletter(){
	if(!isEmail($('#newsletter').val())){
        fsAlert('Địa chỉ email không đúng!');
		return false;
	}
    $("#btn-newsletter").addClass('btn-process');
	$.ajax({
		type : 'POST',
		url : '/index.php?module=ajax&view=ajax&raw=1&task=registerNewsletter',
		dataType : 'json',
		data: 'email='+$('#newsletter').val(),
		success : function(data){
			$('#newsletter').attr('value', '');
            fsAlert(data.message);
            $("#btn-newsletter").removeClass('btn-process');
		},
		error : function(XMLHttpRequest, textStatus, errorThrown){
            fsAlert('Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.');
            $("#btn-newsletter").removeClass('btn-process');
		}
	});
	return false;
}

function goSetIdTop($id){
    offset = $('#'+$id).offset();
    $("html,body").animate({scrollTop:offset.top},"slow");
}

function openPopupWindow(obj) {
    var wID = $(obj).attr('data-id');
    var url = $(obj).attr('data-url')+'&display=popup';
    var width = $(obj).attr('data-width');
    var height = $(obj).attr('data-height');
    var w = window.open(url,wID, 'width='+width+',height='+height+',location=1,status=1,resizable=yes');
    var coords = getCenteredCoords(width,height);
    w.moveTo(coords[0],coords[1]);
}

function setSelectDistricts($id, $city, $value){
    $.ajax({
        type : 'POST',
        sync: false,
        dataType: 'html',
        url : '/index.php?module=ajax&view=ajax&raw=1&task=set_select_land_districts',
        data: 'city='+$city+'&value='+$value,
        success : function($html){
            $id.html($html);
        }
    });
}

function fchat() {
    var tchat= document.getElementById("tchat").value;
    if(tchat==0 || tchat=='0')
    {
        document.getElementById("fchat").style.display = "block";
        document.getElementById("tchat").value=1;
    }else{
        document.getElementById("fchat").style.display = "none";
        document.getElementById("tchat").value=0;
    }
}

if ($('#back-to-top').length) {
    var scrollTrigger = 200, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}