<?php
class AjaxControllersAjax extends FSControllers{
    function __construct(){
        parent::__construct();
        $_POST = json_decode(file_get_contents('php://input'), true);
    }

    function do_register() {
        global $user;
        $json = array(
            'error' => 1,
            'message' => 'Có lỗi trong quá trình xử lý, vui lòng kiểm tra lại kết nối!'
        );

        $data = array();
        $data['mobile'] = FSInput::get('mobile', '', 'str');
        $data['password'] = FSInput::get('password', '', 'str');
        $data['email'] = FSInput::get('email', '', 'str');
        $data['first_name'] = FSInput::get('first_name', '', 'str');
        $data['last_name'] = FSInput::get('last_name', '', 'str');
        $data['gender'] = FSInput::get('gender', '', 'str');
        $data['birthday'] = FSInput::get('birthday', '', 'str');
        $data['address'] = FSInput::get('address', '', 'str');
        $data['created_time'] = date('Y-m-d H:i:s');
        $data['published'] = 1;
        if ($user->checkExitsEmail($data['email'])) {
            $json['message'] = 'Email này đã có người sử dụng';
            goto json_encode;
        }
        $user_id = $user->insertUser($data);
        if ($user_id) {
            $user->updateUser(array('code' => 'M' . str_pad($user_id, 6, "0", STR_PAD_LEFT)), $user_id);
            $json['error'] = 0;
            $json['message'] = 'Bạn đã đăng ký thành công!';
        }

        json_encode:
        echo json_encode($json);
    }

    function do_login() {
        global $user;
        $json = array(
            'error' => 1,
            'user_id' => 0,
            'message' => 'Có lỗi trong quá trình xử lý, vui lòng kiểm tra lại kết nối!'
        );

        $email = FSInput::get('email');
        $password = FSInput::get('password');
        $loged = $user->login($email, $password);
        if ($loged) {
            $json['error'] = 0;
            $json['message'] = 'Bạn đã đăng nhập thành công.';
            $json['token'] = $user->userInfo->id;

            $json['user'] = array(
                'id' => $user->userInfo->id,
                'email' => $user->userInfo->email,
                'poster_mobile' => $user->userInfo->poster_mobile,
                'poster_address' => $user->userInfo->poster_address,
                'poster_name' => $user->userInfo->poster_name,
            );

        } else {
            $json['message'] = 'Tên đăng nhập hoặc mật khẩu không đúng.';
        }
        json_encode:
        echo json_encode($json);
    }
}