<?php
class MembersControllersMembers extends FSControllers{
    function __construct(){
        global $user;
        parent::__construct();
    }
    
    public function display(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $cities = $this->model->get_records('', 'fs_local_cities');
        $breadcrumbs = array(array(0=>'Thông tin cá nhân', 1 => ''));
		$tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/default.php');
    }

    function inbox(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $breadcrumbs = array(array(0=>'Hộp thư', 1 => ''));
        $tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/inbox.php');
    }

    function promotion(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $breadcrumbs = array(array(0=>'Thông tin khuyến mãi', 1 => ''));
        $tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/promotion.php');
    }

    function change_pass(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $breadcrumbs = array(array(0=>'Thay đổi mật khẩu', 1 => ''));
        $tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/change_pass.php');
    }

    public function info(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $breadcrumbs = array(array(0=>'Thông tin cá nhân', 1 => ''));
        $tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/default.php');
    }
    
    function register(){
        global $tmpl,$user;
        if($user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&Itemid=10'), 'Bạn đã đăng nhập!');
        $breadcrumbs = array(array(0=>'Đăng ký tài khoản mới', 1 => ''));
		$tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/register.php');
    }
    
    function do_register(){
        global $tmpl, $user, $config;
        $data = array();
        $data['username'] = FSInput::get('username', '', 'str');
        $data['password'] = FSInput::get('password', '', 'str'); 
        $data['fullname'] = FSInput::get('fullname', '', 'str');
        $data['email'] = FSInput::get('email', '', 'str');
        $data['mobile'] = FSInput::get('mobile', '', 'str');
        $data['address'] = FSInput::get('address', '', 'str');
        $birth_day = FSInput::get('birth_day', 0);
        $birth_month = FSInput::get('birth_month', 0);
        $birth_year = FSInput::get('birth_year', 0);
        $data['birthday'] = $birth_year.'-'.$birth_month.'-'.$birth_day.' '.'09:00:00';
        $data['created_time'] = date('Y-m-d H:i:s');
        $data['point'] = intval($config['point_member']);
        $data['number_occurrences'] = intval($config['number_occurrences']); 
        $data['level_text'] = 'Tức Đồng';
        $data['published'] = 1;
        $user_id = $user->insertUser($data);
        if($user_id){
            // $this->sendActivateMail($user_id, $data['fullname'], $data['email']);
            $user->updateUser(array('code' => 'M'.str_pad($user_id, 6, "0", STR_PAD_LEFT)), $user_id);
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn đã đăng ký thành công!');
        }else
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=register&Itemid=10'), 'Bạn đăng ký chưa thành công!');
    }
    
    function do_bregister(){
        global $tmpl, $user, $config;
        $json = array(
            'error' => true,
            'message' => 'Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.',
            'redirect' => FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10')
        );
        
        $data = array();
        $data['fullname'] = FSInput::get('fullname', '', 'str');
        $data['password'] = FSInput::get('password', '', 'str'); 
        $data['email'] = FSInput::get('email', '', 'str');
        $data['mobile'] = FSInput::get('mobile', '', 'str');
        $data['created_time'] = date('Y-m-d H:i:s');
        $data['published'] = 1;
        $data['address'] = FSInput::get('address', '');
        $data['sex'] = FSInput::get('sex', '');

        if($user->checkExitsEmail($data['email'])){
            $json['message'] = 'Email này đã có người sử dụng';
            echo json_encode($json);exit();
        }

        if($user->checkExitsMobileVerify($data['mobile'])){
            $json['message'] = 'Số điện thoại này đã có người sử dụng';
            echo json_encode($json);exit();
        }

        if($user->checkExitsMobile($data['mobile'])){
            $data['duplicate'] = 1;
            $this->model->_update(array('duplicate'=>1), 'fs_members', 'mobile=\''.$data['mobile'].'\'');
        }

        $user_id = $user->insertUser($data);
        
        if($user_id){
            // $this->sendActivateMail($user_id, $data['email'], $data['email']);
            $user->updateUser(array('code' => 'M'.str_pad($user_id, 6, "0", STR_PAD_LEFT)), $user_id);
            $json['error'] = false;
            $json['message'] = 'Bạn đã đăng ký thành công! Click <a href="'.$json['redirect'].'">vào đây để đăng nhập</a>';
        }
        echo json_encode($json);exit();
    }
    
    function sendActivateMail($id, $name, $mail){
        $title = 'Kích hoạt tài khoản tại '.$_SERVER['HTTP_HOST'];
        $link = 'http://'.$_SERVER['HTTP_HOST'].'/kich-hoat-tai-khoan?id='.fsEncode($id);
        $body = '<p>Chào <b>'.$name.'</b></p>';
        $body .= '<p>Bạn đã đăng ký tài khoản thành công tại Face.edu.vn, vui lòng click vào đây để <a href="'.$link.'">kích hoạt</a>.</p>';
        $body .= '<p>Xin cảm ơn!</p>';
        sendMailFS($title, $body, $name, $mail);
    }
    
    function login(){
        global $tmpl, $user;
        if($user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&Itemid=10'), 'Bạn đã đăng nhập!');
        $breadcrumbs = array(array(0=>'Đăng nhập tài khoản', 1 => ''));
		$tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/login.php');
    }
    
    function do_login(){
        global $user;
        $json = array(
            'error' => true,
            'message' => 'Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.',
            'redirect' => URL_ROOT
        );
        $username = FSInput::get('username', '', 'str');
        $password = FSInput::get('password', '', 'str');
        $redirect = FSInput::get('redirect', '');
        $loged = $user->login($username, $password);
        if($loged){
            $json['error'] = false;
            $json['message'] = 'Bạn đã đăng nhập thành công.';
            if($redirect != '')
                $json['redirect'] = fsDecode($redirect);
        }else{
            $json['message'] = 'Tên đăng nhập hoặc mật khẩu không đúng.';
        }
        echo json_encode($json);exit();
    }
    
    function do_update(){
        global $tmpl, $user;
        $data = array();
        $data['fullname'] = FSInput::get('fullname', '', 'str');
        $data['sex'] = FSInput::get('sex', 'male', 'str');
        $data['mobile'] = FSInput::get('mobile', '', 'str');
        $data['address'] = FSInput::get('address', '', 'str');
        $data['city_id'] = FSInput::get('city_id', 0);
        $data['district_id'] = FSInput::get('district_id', 0);
        //testVar($data);die;
        $user_id = $user->updateUser($data);
        if($user_id)
            setRedirect(FSRoute::_('index.php?module=members&view=members&Itemid=10'), 'Bạn đã cập nhất thành công!');
        else
            setRedirect(FSRoute::_('index.php?module=members&view=members&Itemid=10'), 'Bạn chưa cập nhất thành công!');
    }
    
    function changepass(){ 
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $breadcrumbs = array(array(0=>'Trang cá nhân', 1 => ''), array(0=>'Đổi mật khẩu', 1 => ''));
		$tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/changepass.php');
    }
    
    function do_changepass(){
        global $user;
        $password = FSInput::get('cpassword', '', 'str'); 
        if(!$user->checkCurrentPassword($password)){
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=changepass&Itemid=10'), 'Mật khẩu hiện tại không đúng!');
            return;
        }
        $data['password'] = FSInput::get('password', '', 'str');
        $user_id = $user->updateUser($data);
        setRedirect(FSRoute::_("index.php?module=members&Itemid=10"), 'Thay đổi mật khẩu thành công');
        /*if($user_id)
            setRedirect(FSRoute::_("index.php?module=members&Itemid=10"), 'Thay đổi mật khẩu thành công');
        else
            setRedirect(FSRoute::_("index.php?module=members&task=changepass&Itemid=10"), 'Thay đổi mật khẩu không thành công');*/
    }
    
    function forgot_pass(){
        global $tmpl, $user;
        if($user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&Itemid=10'), 'Bạn đã đăng nhập!');
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/forgot_pass.php');
    }
    
    function do_forgot_pass(){
        ob_start();
        global $user;
        $json = array(
            'error' => true,
            'message' => 'Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.',
            'redirect' => URL_ROOT
        );
        $username = FSInput::get('username', '', 'str');
        $email = FSInput::get('email', '', 'str');
        $redirect = FSInput::get('redirect', '', 'str');
        $forgot = $user->forgot($username, $email);
        if($forgot){
            $activated_code = rand(100000, 999999);
            $user->updateUser(array('activated_code' => $activated_code), $forgot->id);
            $json['error'] = false;
            $json['message'] = 'Bạn đã gửi <b>yêu cầu đổi mật khẩu</b> thành công.<br />Bạn vui lòng <b>kiểm tra email</b> để thực hiện tiếp theo.';
            $msg = 'Chào <b>'.$forgot->fullname.'</b><br /><br />
                    Yêu cầu đổi mật khẩu của bạn đã được gửi đi. Vui lòng <a href="'.FSRoute::_('index.php?module=members&view=members&task=update_forgot_pass').'?data='.fsEncode($forgot->id).'">click vào đây</a>, để thực hiện bước tiếp theo.<br /><br />
                    Mã bảo mật của bạn: <b>'.$activated_code.'</b><br /><br />
                    Cảm ơn!';
            sendMailFS('Yêu cầu đổi mật khẩu tại Face.edu.vn', $msg, $forgot->fullname, $forgot->email);
        }else{
            $json['message'] = 'Tên đăng nhập hoặc email không đúng.';
        }
        ob_end_clean();
        echo json_encode($json);
    }
    
    function update_forgot_pass(){
        global $tmpl, $user;
        if($user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&Itemid=10'), 'Bạn đã đăng nhập!');
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/update_forgot_pass.php');
    }
    
    function do_update_forgot_pass(){
        ob_start();
        global $user;
        $json = array(
            'error' => true,
            'message' => 'Có lỗi trong quá trình đưa lên máy chủ. Xin bạn vui lòng kiểm tra lại kết nối.',
            'redirect' => URL_ROOT
        );
        $id = fsDecode(FSInput::get('data', '', 'str'));
        $activated_code = FSInput::get('activated_code', '', 'str');
        $check = $user->check_forgot($id, $activated_code);
        if($check){
            $password = FSInput::get('password', '', 'str');
            $user->updateUser(array('password' => $password), $id);
            $json['error'] = false;
            $json['message'] = 'Bạn đã đổi mật khẩu thành công!';
            $json['redirect'] = FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10');
        }else{
            $json['message'] = 'Mã bảo mật không đúng.';
        }
        ob_end_clean();
        echo json_encode($json);exit();
    }
    
    function logout(){
        global $user;
        $user->logout(URL_ROOT);
    }
    
    function check_logged(){
        global $user;
        $result = 0;
        if($user->userID)
            $result = 1;
        echo $result; exit;
    }
    
    function activate(){
        global $tmpl, $user;
        $id = fsDecode(FSInput::get('id', '', 'str'));
        $data = array('published'=>1);
        $user_id = $user->updateUser($data, $id);
        setRedirect(URL_ROOT, 'Bạn đã kích hoạt tài khoản thành công!');
    }

    function google_login(){
        global $user;
        $strHTML = '';
        require(PATH_BASE.'libraries/google-api-php/config.php');
        //$redirect_uri = URL_ROOT.'oauth2callback';
        $client = new Google_Client();
        $client->setClientId($client_id);
        $client->setClientSecret($client_secret);
        $client->setRedirectUri($redirect_uri);
        $client->setScopes('email');
        if (isset($_GET['code'])) {
            $client->authenticate($_GET['code']);
            $_SESSION['access_token']  = $client->getAccessToken();
            $access_token = json_decode($_SESSION['access_token']);
            $token_url = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='.$access_token->access_token;
            $token_data = curlGetPageContent($token_url);
            $guser = json_decode($token_data);
            if (!empty($guser)){
                $data = $user->checkExitsEmail($guser->email);
                if ($data){
                    $user->loginMailOnly($guser->email);
                    $return['error'] 	= true;
                    $return['url']		=  URL_ROOT;
                    $return['msg']		=  "Bạn đã đăng nhập thành công";
                    $strHTML  = '<script type="text/javascript">';
                    $strHTML .= '	self.opener.location.reload();';
                    $strHTML .= '	window.close();';
                    $strHTML .= '</script>';
                }else{
                    $row['fullname'] = $guser->name;
                    $row['email'] = $guser->email;
                    $row['password'] = '123456';
                    //$row['type'] = '2';
                    $id = $user->insertUser($row);
                    if($id){
                        $user->updateUser(array('code' => 'CVN'.str_pad($id, 6, "0", STR_PAD_LEFT)), $id);
                        $user->loginMailOnly($guser->email);
                        $return['error'] 	= true;
                        $return['url']		=  URL_ROOT;
                        $return['msg']		=  "Lưu Thành viên thành công";
                        $strHTML  = '<script type="text/javascript">';
                        $strHTML .= '	self.opener.location.reload();';
                        $strHTML .= '	window.close();';
                        $strHTML .= '</script>';
                    }//end: if($id)
                }//end: if ($data)
            }else{
                unset($_SESSION['access_token']);
            }//end: if (!empty($guser))
        }//end: if (isset($_GET['code']))
        if (isset($_SESSION['access_token']) && $_SESSION['access_token']) {
            /* $client->setAccessToken($_SESSION['access_token']);
            unset($_SESSION['access_token']);
            $this->google_login(); */
            unset($_SESSION['access_token']);
        } else {
            $authUrl = $client->createAuthUrl();
            $strHTML  = '<script type="text/javascript">';
            $strHTML .= '	top.location.href="'.$authUrl.'"';
            $strHTML .= '</script>';
        }
        echo $strHTML;
    }

    function face_login(){
        global $user;
        $app_id = "730722177133592";
        $app_secret = "47f44fac8ba771cb3b28188d6226d2d9";
        $permission = "email,public_profile,user_friends";
        $my_url = FSRoute::_('index.php?module=members&view=members&raw=1&task=face_login&Itemid=10');
        $strHTML = '';
        $code = isset($_REQUEST['code'])?$_REQUEST['code']:'';
        if(empty($code)) {
            $strHTML = '';
            $_SESSION['state'] = md5(uniqid(rand(), TRUE)); // CSRF protection
            $dialog_url = "http://www.facebook.com/dialog/oauth?client_id=".$app_id."&redirect_uri=".urlencode($my_url) ."&scope=".$permission."&state=" . $_SESSION['state'];
            $strHTML  = '<script type="text/javascript">';
            $strHTML .= '	top.location.href="'.$dialog_url.'"';
            $strHTML .= '</script>';
        }
        $S_State =isset($_SESSION['state'])?$_SESSION['state']:'';
        $R_State = isset($_REQUEST['state'])?$_REQUEST['state']:'';
        if( $S_State && ($S_State == $R_State)) {
            $token_url = 'https://graph.facebook.com/oauth/access_token?client_id='.$app_id.'&redirect_uri='.urlencode($my_url).'&client_secret='.$app_secret.'&code='.$code;
            $response = curlGetPageContent($token_url);
            $response = json_decode($response);
            $params = null;
            $_SESSION['access_token'] = $response->access_token;
            $graph_url = "https://graph.facebook.com/me?fields=email,id,name,gender&access_token=" . $response->access_token;
            $data = curlGetPageContent($graph_url);
            $fuser = json_decode($data);
            if (!empty($fuser)){
                $data = $user->checkExitsFacebookID($fuser->id);
                if ($data){
                    $user->loginFacebookID($fuser->id);
                    $return['error'] 	= true;
                    $return['url']		=  URL_ROOT;
                    $return['msg']		=  "Bạn đã đăng nhập thành công";
                    $strHTML  = '<script type="text/javascript">';
                    $strHTML .= '	self.opener.location.reload();';
                    $strHTML .= '	window.close();';
                    $strHTML .= '</script>';
                }else{
                    $row['fullname'] = $fuser->name;
                    $row['facebook_id'] = $fuser->id;
                    $row['password'] = '123456';
                    $id = $user->insertUser($row);
                    if($id){
                        $user->updateUser(array('code' => 'CVN'.str_pad($id, 6, "0", STR_PAD_LEFT)), $id);
                        $user->loginFacebookID($fuser->id);
                        $return['error'] 	= true;
                        $return['url']		=  URL_ROOT;
                        $return['msg']		=  "Lưu Thành viên thành công";
                        $strHTML  = '<script type="text/javascript">';
                        $strHTML .= '	self.opener.location.reload();';
                        $strHTML .= '	window.close();';
                        $strHTML .= '</script>';
                    }
                }
            }else {
                $strHTML = '';
                $_SESSION['state'] = md5(uniqid(rand(), TRUE)); // CSRF protection
                $dialog_url = "http://www.facebook.com/dialog/oauth?client_id=".$app_id."&redirect_uri=".urlencode($my_url) ."&scope=".$permission."&state=" . $_SESSION['state'];
                $strHTML  = '<script type="text/javascript">';
                $strHTML .= 'top.location.href="'.$dialog_url.'"';
                $strHTML .= '</script>';
            }
        }else {
            $strHTML = '';
            $_SESSION['state'] = md5(uniqid(rand(), TRUE)); // CSRF protection
            $dialog_url = "http://www.facebook.com/dialog/oauth?client_id=".$app_id."&redirect_uri=".urlencode($my_url) ."&scope=".$permission."&state=" . $_SESSION['state'];
            $strHTML  .= '<script type="text/javascript">';
            $strHTML .= 'top.location.href="'.$dialog_url.'"';
            $strHTML .= '</script>';
        }
        echo $strHTML;
    }

    function transaction_history(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $list = $this->model->getOrders();
        $breadcrumbs = array(array(0=>'Thông tin cá nhân', 1 => ''));
        $breadcrumbs = array(array(0=>'Lịch sử giao dịch', 1 => ''));
        $tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/transaction_history.php');
    }

    function member_level(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $levels = $this->model->get_records('', 'fs_members_level');
        $breadcrumbs = array(array(0=>'Thông tin cá nhân', 1 => ''));
        $breadcrumbs = array(array(0=>'Cấp thành viên', 1 => ''));
        $tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/member_level.php');
    }

    function promotion_information(){
        global $tmpl, $user;
        if(!$user->userID)
            setRedirect(FSRoute::_('index.php?module=members&view=members&task=login&Itemid=10'), 'Bạn chưa đăng nhập!');
        $breadcrumbs = array(array(0=>'Thông tin cá nhân', 1 => ''));
        $breadcrumbs = array(array(0=>'Thông tin khuyến mại', 1 => ''));
        $tmpl -> assign('breadcrumbs', $breadcrumbs);
        require(PATH_BASE.'modules/'.$this->module.'/views/'.$this->view.'/promotion_information.php');
    }
}