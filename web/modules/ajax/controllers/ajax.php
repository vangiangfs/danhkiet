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
        $data['poster_name'] = $_POST['poster_name'];
        $data['password'] = $_POST['password'];
        $data['email'] = FSInput::get('email', '', 'str');
        $data['poster_mobile'] = $_POST['poster_mobile'];
        $data['poster_address'] = $_POST['poster_address'];
        $data['username'] = $_POST['email'];
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

    function get_list_tips(){
        $json = array(
            'error' => false,
            'list' => array(),
            'loadMore' => true
        );

        $page = FSInput::get('page', 1);
        $limit = FSInput::get('limit', 10);
        $id = FSInput::get('id', 0);
        $list = $this->model->list_tips($page, $limit, $id);

        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['list'][] = array(
                    'id' => $item->id,
                    'title' => $item->title,
                    'image' => URL_ROOT . str_replace('/original/', '/resized/', $item->image),
                    'summary' => $item->summary,
                );
            }
        }else
            $json['loadMore'] = false;

        echo json_encode($json);
    }

    function get_tip_detail(){
        $json = array(
            'error' => false,
            'detail' => array(
                'title' => '',
                'summary' => '',
                'content' => ''
            ),
        );

        $id = FSInput::get('id', 0);
        $faq = $this->model->get_record('id='.intval($id), 'fs_news');
        if($faq){
            $json['detail']['title'] = $faq->title;
            $json['detail']['summary'] = $faq->summary;
            $json['detail']['content'] = '<div class="container">'.$faq->content.'</div>';
        }
        echo json_encode($json);
    }

    function get_list_countries(){
        $json = array(
            'error' => false,
            'list' => array()
        );
        $list = $this->model->get_records('published = 1', 'fs_local_countries');

        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['list'][] = array(
                    'id' => $item->id,
                    'title' => $item->name,
                );
            }
        }

        echo json_encode($json);
    }

    function get_search_option(){
        $json = array(
            'error' => false,
            'filter_categories' => array(),
            'filter_level_education' => array(),
            'filter_scholarship_value' => array(),
            'filter_nation' => array(),
            'filter_ended_course' => array(),
        );

        $list = $this->model->get_records('published = 1', 'fs_studentship_categories');
        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['filter_categories'][] = array(
                    'id' => $item->id,
                    'title' => $item->name,
                );
            }
        }

        $list = $this->model->get_records('published = 1', 'fs_studentship_level_education');
        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['filter_level_education'][] = array(
                    'id' => $item->id,
                    'title' => $item->title,
                );
            }
        }

        // $list = $this->model->get_records('published = 1', 'fs_studentship_scholarship_value');
        $list = json_decode(
            json_encode(
                array(
                    array('id' => 0, 'title' => 'Học bổng toàn phần'),
                    array('id' => 1, 'title' => 'Học bổng một phần'),
                )
            )
        );
        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['filter_scholarship_value'][] = array(
                    'id' => $item->id,
                    'title' => $item->title,
                );
            }
        }

        $list = $this->model->get_records('published = 1', 'fs_local_countries');
        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['filter_nation'][] = array(
                    'id' => $item->id,
                    'title' => $item->name,
                );
            }
        }

        $list = json_decode(
            json_encode(
                array(
                    array('id' => 1, 'title' => 'Trung học phổ thông'),
                    array('id' => 2, 'title' => 'Tiếng Anh'),
                    array('id' => 3, 'title' => 'Dự bị Đại học'),
                    array('id' => 4, 'title' => 'Đại học'),
                    array('id' => 5, 'title' => 'Thạc sĩ'),
                    array('id' => 6, 'title' => 'Tiến Sĩ'),
                )
            )
        );
        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['filter_ended_course'][] = array(
                    'id' => $item->id,
                    'title' => $item->title,
                );
            }
        }

        echo json_encode($json);
    }

    function get_list_studentship(){
        $json = array(
            'error' => false,
            'list' => array(),
            'loadMore' => true
        );

        $page = FSInput::get('page', 1);
        $category_id = FSInput::get('category_id', 0);
        $level_education = FSInput::get('level_education', 0);
        $scholarship_value = FSInput::get('scholarship_value', 0);
        $nation = FSInput::get('nation', 0);
        $list = $this->model->list_studentship($category_id, $level_education, $scholarship_value, $nation, $page);

        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['list'][] = array(
                    'id' => $item->id,
                    'title' => $item->title,
                    'level_education' => $item->level_education_title,
                    'scholarship_value' => $item->scholarship_value
                );
            }
        }else
            $json['loadMore'] = false;

        echo json_encode($json);
    }

    function get_studentship_detail(){
        $json = array(
            'error' => false,
            'detail' => array(),
        );

        $id = FSInput::get('id', 0);
        $faq = $this->model->studentship_detail($id);
        if($faq){
            $json['detail']['title'] = $faq->title;
            $json['detail']['shool_name'] = $faq->shool_name;
            $json['detail']['object'] = $faq->object;
            $json['detail']['advice'] = $faq->advice;
            $json['detail']['source'] = $faq->source;
            $json['detail']['level_education'] = $faq->level_education_title;
            $json['detail']['scholarship_value'] = $faq->scholarship_value;
            $json['detail']['nation'] = $faq->nation_title;
        }
        echo json_encode($json);
    }

    function get_list_exams(){
        $json = array(
            'error' => false,
            'list' => array(),
            'loadMore' => true
        );

        $page = FSInput::get('page', 1);
        $limit = FSInput::get('limit', 10);
        $id = FSInput::get('id', 0);
        $list = $this->model->list_exams($page, $limit, $id);

        if($list){
            $json['error'] = false;
            foreach($list as $item){
                $json['list'][] = array(
                    'id' => $item->id,
                    'title' => $item->title,
                    'image' => URL_ROOT . str_replace('/original/', '/resized/', $item->image),
                    'summary' => $item->summary,
                );
            }
        }else
            $json['loadMore'] = false;

        echo json_encode($json);
    }

    function do_studentship_register() {
        $json = array(
            'error' => 1,
            'message' => 'Có lỗi trong quá trình xử lý, vui lòng kiểm tra lại kết nối!'
        );

        $data = array();
        $data['studentship_id'] = FSInput::get('studentship_id', '', 'str');
        $data['studentship_title'] = FSInput::get('studentship_title', '', 'str');
        $data['fullname'] = FSInput::get('fullname', '', 'str');
        $data['email'] = FSInput::get('email', '', 'str');
        $data['mobile'] = FSInput::get('mobile', '', 'str');
        $data['birthday'] = FSInput::get('birthday', '', 'str');
        $data['ended_course'] = FSInput::get('ended_course', '', 'str');
        $data['point_gpa'] = FSInput::get('point_gpa', '', 'str');
        $data['point_ielts'] = FSInput::get('point_ielts', '', 'str');
        $data['point_sat'] = FSInput::get('point_sat', '', 'str');
        $data['point_gmat'] = FSInput::get('point_gmat', '', 'str');
        $data['other_learning'] = FSInput::get('other_learning', '', 'str');
        $data['active_key'] = FSInput::get('active_key', '', 'str');
        $data['field_study'] = FSInput::get('field_study', '', 'str');
        $data['created_time'] = date('Y-m-d H:i:s');
        $data['published'] = 1;

        $insert_id = $this->model->_add($data, 'fs_studentship_registers');

        if ($insert_id) {
            $json['error'] = 0;
            $json['message'] = 'Cảm ơn bạn đã đăng ký nộp đơn xin học bổng tại FACE Education Việt Nam. Vui lòng gửi CV cập nhật nhất của bạn tới hello@face.edu.vn; chúng tôi sẽ liên hệ với bạn sớm nhất có thể!';
        }

        json_encode:
        echo json_encode($json);
    }

    function do_subscribe() {
        $json = array(
            'error' => 1,
            'message' => 'Có lỗi trong quá trình xử lý, vui lòng kiểm tra lại kết nối!'
        );

        $data = array();
        $data['fullname'] = FSInput::get('fullname', '', 'str');
        $data['birthday'] = FSInput::get('birthday', '', 'str');
        $data['mobile'] = FSInput::get('mobile', '', 'str');
        $data['email'] = FSInput::get('email', '', 'str');
        $data['address'] = FSInput::get('address', '', 'str');
        $data['created_time'] = date('Y-m-d H:i:s');
        $data['published'] = 1;

        $insert_id = $this->model->_add($data, 'fs_contact');

        if ($insert_id) {
            sendMailFS('Đăng ký nhận thông tin thành công Face.edu.vn', 'Cảm ơn bạn đã đăng ký nhận thông tin/thành viên/nộp đơn. Chúc bạn có trải nghiệm tuyệt vời với "Scholarship Hunt"', $data['fullname'], $data['email']);

            $json['error'] = 0;
            $json['message'] = 'Cảm ơn bạn đã đăng ký nhận thông tin học bổng tại FACE Education Việt Nam. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể!';
        }

        json_encode:
        echo json_encode($json);
    }

    function do_forgot_pass(){
        ob_start();
        global $user;
        $json = array(
            'error' => 1,
            'message' => 'Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.',
            'redirect' => URL_ROOT
        );
        $username = FSInput::get('email', '', 'str');
        $email = FSInput::get('email', '', 'str');
        $forgot = $user->forgot($username, $email);
        if($forgot){
            $activated_code = rand(100000, 999999);
            $user->updateUser(array('activated_code' => $activated_code), $forgot->id);
            $json['error'] = 0;
            $json['message'] = 'Bạn đã gửi yêu cầu đổi mật khẩu thành công. Bạn vui lòng kiểm tra email để thực hiện tiếp theo.';
            $msg = 'Chào <b>'.$forgot->fullname.'</b><br /><br />
                    Yêu cầu đổi mật khẩu của bạn đã được gửi đi. Vui lòng <a href="'.FSRoute::_('index.php?module=members&view=members&task=update_forgot_pass').'?data='.fsEncode($forgot->id).'">click vào đây</a>, để thực hiện bước tiếp theo.<br /><br />
                    Mã bảo mật của bạn: <b>'.$activated_code.'</b><br /><br />
                    Cảm ơn!';
            sendMailFS('Yêu cầu đổi mật khẩu tại Face.edu.vn', $msg, $forgot->fullname, $forgot->email);
        }else{
            $json['message'] = 'Tên đăng nhập hoặc email không đúng.';
        }
        return_json:
        ob_end_clean();
        echo json_encode($json);
    }
}