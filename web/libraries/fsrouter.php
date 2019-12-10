<?php
/**
 * FSRoute
 * 
 * @package fs_thoitranghanquoc24h.com
 * @author vangiangfly
 * @copyright 2013
 * @version $Id$
 * @access public
 */
class FSRoute
{
    var $url;
    function __construct($url)
    {
    }
    public static function _($url)
    {
        return FSRoute::enURL($url);
    }
    public static function addParameters($params, $value, $arr_request_need = array())
    {
        // only filter
        $module = FSInput::get('module');
        $view = FSInput::get('view');
        if ($view == 'cat')
        {
            $arr_request_need[] = 'ccode';
            $arr_request_need[] = 'id';
            $arr_request_need[] = 'Itemid';
            $url = 'index.php?module=' . $module . '&view=' . $view;
            foreach ($arr_request_need as $item)
            {
                $item_request = FSInput::get($item);
                if ($item_request)
                {
                    $url .= '&' . $item . '=' . $item_request;
                }
            }
            if ($value && $params)
            {
                $url .= '&' . $params . '=' . $value;
            }
            return FSRoute::_($url);
        } else
        {
            $ccode = FSInput::get('ccode');
            $url = 'index.php?module=' . $module . '&view=' . $view;
            $url .= '&ccode=' . $ccode;
            $url .= '&filter=' . $value;
            if(isset($Itemid))$url .= '&Itemid='.$Itemid;
            return FSRoute::_($url);
        }
        return FSRoute::_($_SERVER['REQUEST_URI']);
    }
    public static function addParameters1($params, $value)
    {
        // only filter
        $module = FSInput::get('module');
        $view = FSInput::get('view');
        if ($module == 'products' && $view == 'categories')
        {
            $ccode = FSInput::get('ccode');
            $filter = FSInput::get('filter');
            $manu = FSInput::get('manu');
            $pmodel = FSInput::get('pmodel');
            //			$Itemid = FSInput::get('Itemid');
            $Itemid = 7;
            $url = 'index.php?module=' . $module . '&view=' . $view;
            if ($ccode)
            {
                $url .= '&ccode=' . $ccode;
            }
            // manufactory
            if ($params == 'manu')
            {
                $url .= '&manu=' . $value;
            } else
            {
                $url .= '&manu=' . $manu;
            }
            // product_model
            if ($params == 'pmodel')
            {
                $url .= '&pmodel=' . $value;
            } else
            {
                $url .= '&pmodel=' . $pmodel;
            }
            if ($params == 'filter')
            {
                $url .= '&filter=' . $value;
            } else
            {
                $url .= '&filter=' . $filter;
            }
            $url .= '&Itemid=' . $Itemid;
            return FSRoute::_($url);
        }
        if ($module == 'products' && $view = 'product')
        {
            $ccode = FSInput::get('ccode');
            $code = FSInput::get('code');
            //			$Itemid = FSInput::get('Itemid');
            $Itemid = 7;
            $url = 'index.php?module=' . $module . '&view=' . $view;
            if ($ccode)
            {
                $url .= '&ccode=' . $ccode;
            }
            if ($code)
            {
                $url .= '&code=' . $code;
            }
            // manufactory
            if ($params == 'layout')
            {
                $url .= '&layout=' . $value;
            }
            $url .= '&Itemid=' . $Itemid;
            return FSRoute::_($url);
        }
        return FSRoute::_($_SERVER['REQUEST_URI']);
    }
    /*
    * For product filter
    */
    public static function removeParameters($params)
    {
        // only filter
        $module = FSInput::get('module');
        $view = FSInput::get('view');
        $ccode = FSInput::get('ccode');
        $filter = FSInput::get('filter');
        $manu = FSInput::get('manu');
        $pmodel = FSInput::get('pmodel');
        $Itemid = FSInput::get('Itemid');
        $url = 'index.php?module=' . $module . '&view=' . $view;
        if ($ccode)
        {
            $url .= '&ccode=' . $ccode;
        }
        if ($manu)
        {
            $url .= '&manu=' . $manu;
        }
        if ($pmodel && ($params != 'manu'))
        {
            $url .= '&pmodel=' . $pmodel;
        }
        if ($filter)
        {
            $url .= '&filter=' . $filter;
        }
        $url .= '&Itemid=' . $Itemid;
        $url = trim(preg_replace('/&' . $params . '=[0-9a-zA-Z_-]+/i', '', $url));
        return FSRoute::_($url);
    }
    /*
    * rewrite
    */
    public static function enURL($url)
    {	
        if (!$url)
            $url = $_SERVER['REQUEST_URI'];
        if (!IS_REWRITE)
            return URL_LANG . $url;
        if (strpos($url, 'http://') !== false || strpos($url, 'https://') !== false)
            return $url;
        $link_estore = 0;
        $pos1 = strpos($url, 'index.php?');
        $pos2 = strpos($url, 'estores.php?');
        if ($pos1 !== false)
        {
            $url_reduced = substr($url, ($pos1 + 10));
        } else
            if ($pos2 !== false)
            {
                $url_reduced = substr($url, ($pos2 + 12));
                $link_estore = 1;
            } else
            {
                return URL_LANG . $url;
            }
            $array_buffer = explode('&', $url_reduced);
        $array_params = array();
        for ($i = 0; $i < count($array_buffer); $i++)
        {
            $item = $array_buffer[$i];
            $pos_sepa = strpos($item, '=');
            $array_params[substr($item, 0, $pos_sepa)] = substr($item, $pos_sepa + 1);
        }
        $module = isset($array_params['module']) ? $array_params['module'] : '';
        $view = isset($array_params['view']) ? $array_params['view'] : $module;
        $task = isset($array_params['task']) ? $array_params['task'] : 'display';
        $Itemid = isset($array_params['Itemid']) ? $array_params['Itemid'] : 0;
        $url_uri = '';
        foreach($array_params as $key=>$value){
			if($key == 'module' || $key == 'view' || $key == 'Itemid' || $key == 'ccode' || $key == 'id' || $key == 'filter')
				continue;
			$url_uri .= '&'.$key.'='.$value;
		}
        if (!$link_estore) {
            switch ($module) {
                case 'videos':
                    switch ($view) {
                        case 'home':
                            return URL_LANG.'video';
                        case 'videos':
                            if($task== 'display'){
								$id  = isset($array_params['id'])?$array_params['id']: 0;
								$ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'video';
                                $code  = isset($array_params['code'])?$array_params['code']: 'video';
								return URL_LANG.'video/'.$code.'-v'.$id.'.html';
							}else{
								return URL_ROOT.$url;
							}
                        case 'cat':
                            if($task== 'display'){
                                $ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'video';
                                return URL_LANG.'video/'.$ccode;
                            }else{
                                return URL_ROOT.$url;
                            }
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'news':
                    switch ($view) {
                        case 'home':
                            return URL_LANG.'tin-tuc';
                        case 'news':
                            if($task== 'display'){
                                $id  = isset($array_params['id'])?$array_params['id']: 0;
                                $ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'tin-tuc';
                                $code  = isset($array_params['code'])?$array_params['code']: 'tin-tuc';
                                return URL_LANG.'tin-tuc/'.$code.'-n'.$id.'.html';
                            }else{
                                return URL_ROOT.$url;
                            }
                        case 'cat':
                            if($task== 'display'){
                                $ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'tin-tuc';
                                return URL_LANG.'tin-tuc/'.$ccode;
                            }else{
                                return URL_ROOT.$url;
                            }
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'collection':
                    switch ($view) {
                        case 'home':
                            return URL_LANG.'bo-suu-tap';
                        case 'collection':
                            if($task== 'display'){
                                $id  = isset($array_params['id'])?$array_params['id']: 0;
                                $code  = isset($array_params['code'])?$array_params['code']: 'bo-suu-tap';
                                return URL_LANG.'bo-suu-tap/'.$code.'-c'.$id.'.html';
                            }else{
                                return URL_ROOT.$url;
                            }
                        case 'cat':
                            if($task== 'display'){
                                $ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'bo-suu-tap';
                                return URL_LANG.'bo-suu-tap/'.$ccode;
                            }else{
                                return URL_ROOT.$url;
                            }
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'jobs':
                    switch ($view) {
                        case 'home':
                            return URL_LANG.'tuyen-dung';
                        case 'cat':
                            if($task== 'display'){
                                $id  = isset($array_params['id'])?$array_params['id']: 0;
                                $ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'tuyen-dung';
                                return URL_LANG.'tuyen-dung/'.$ccode;
                            }else{
                                return URL_ROOT.$url;
                            }
                        case 'jobs':
                            if($task== 'display'){
                                $id  = isset($array_params['id'])?$array_params['id']: 0;
                                $code  = isset($array_params['code'])?$array_params['code']: 'tuyen-dung';
                                return URL_LANG.'tuyen-dung/'.$code.'-j'.$id.'.html';
                            }else{
                                return URL_ROOT.$url;
                            }
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'address':
                    switch ($view) {
                        case 'address':
                            if($task== 'detail'){
                                $id  = isset($array_params['id'])?$array_params['id']: 0;
                                $code  = isset($array_params['code'])?$array_params['code']: 'showroom';
                                return URL_LANG.'showroom/'.$code.'-'.$id.'.html';
                            }else
                                return URL_LANG.'showroom';
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'statics':
                    switch ($view) {
                        case 'home':
                            return URL_LANG.'trang-tinh';
                        case 'statics':
                            if($task== 'display'){
								$id  = isset($array_params['id'])?$array_params['id']: 0;
                                $code  = isset($array_params['code'])?$array_params['code']: 'trang-tinh';
								return URL_LANG.$code.'-st'.$id.'';
							}else{
								return URL_ROOT.$url;
							}
                        case 'cat':
                            $id  = isset($array_params['id'])?$array_params['id']: 0;
							$ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'danh-muc-trang-tinh';
							return URL_LANG.$ccode.'-s'.$id.'';
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'product':
                    global $arrProductLineAlias;
                    switch ($view) {
                        case 'home':
                            switch($task){
                                case 'display':
                                    $type  = isset($array_params['type'])?$array_params['type']: '';
                                    if($type == '')
                                        $type = isset($_SESSION['type'])?$_SESSION['type']: '';
                                    $url = URL_LANG.'san-pham';
                                    switch($type){
                                        case 'line':
                                            $line  = isset($array_params['line'])?$array_params['line']: 0;
                                            if($line == 0)
                                                $line  = isset($_SESSION['type_line'])?$_SESSION['type_line']: 0;
                                            $url = URL_LANG.$arrProductLineAlias[$line];
                                            break;
                                        case 'sales':
                                            $url = URL_LANG.'khuyen-mai';
                                            break;
                                        case 'online':
                                            $url = URL_LANG.'gia-soc-online';
                                            break;
                                        case 'showroom':
                                            $url = URL_LANG.'gia-soc-showroom';
                                            break;
                                        default:
                                            $url = URL_LANG.'san-pham';
                                    }
                                    $filter =  isset($array_params['filter'])?$array_params['filter']: '';
                                    if($filter)
                                        return $url.'/loc-san-pham:'.$filter;
                                    else
                                        return $url;
                                case 'home':
                                    return URL_LANG.'shop-online';
                                default:
                                    return URL_ROOT.$url;
                            }
                        case 'product':
                            switch($task){
                                case 'display':
                                    $id  = isset($array_params['id'])?$array_params['id']: 0;
                                    $ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'chi-tiet-san-pham';
                                    $code  = isset($array_params['code'])?$array_params['code']: 'san-pham';
                                    return URL_LANG.$code.'-pd'.$id;
                                    break;
                                case 'shopcart':
                                    return URL_LANG.'gio-hang';
                                    break;
                                default:
                                    return URL_ROOT.$url;
                            }
                        case 'cat':
                            $typeAlias = 'san-pham';
                            if(isset($_SESSION['type'])){
                                switch($_SESSION['type']){
                                    case 'line':
                                        if(isset($_SESSION['type_line'])) {
                                            $typeAlias = $arrProductLineAlias[$_SESSION['type_line']];
                                        }
                                        break;
                                    case 'sales':
                                        $typeAlias = 'gia-soc-online';
                                        break;
                                    case 'showroom':
                                        $typeAlias = 'gia-soc-showroom';
                                        break;
                                }
                            }
                            $id  = isset($array_params['id'])?$array_params['id']: 0;
							$ccode  = isset($array_params['ccode'])?$array_params['ccode']: 'danh-muc-san-pham';
                            $filter =  isset($array_params['filter'])?$array_params['filter']: '';
                            if($filter)
    							return URL_LANG.$typeAlias.'/'.$ccode.'/loc-san-pham:'.$filter;
    						else 
    							return URL_LANG.$typeAlias.'/'.$ccode;
                        case 'cart':
                            switch($task){
                                case 'payment':
                                    return URL_LANG.'dat-hang';
                                    break;
                                case 'payment_success':
                                    return URL_LANG.'dat-hang-thanh-cong';
                                    break;
                                case 'addCart':
                                    $id  = isset($array_params['id'])?$array_params['id']: 0;
                                    return URL_LANG.'dat-mua-'.$id;
                                    break;
                                default:
                                    return URL_ROOT.$url;
                            }
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'planner':
                    switch ($view)
                    {
                        case 'diet':
                            return URL_LANG.'thuc-don-cua-ban';
                        case 'fitness':
                            return URL_LANG.'hoat-dong-cua-ban';
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'members':
                    switch ($view){
                        case 'members':
                            switch($task){
                                case 'login':
                                    return URL_LANG.'dang-nhap';
                                    break;
                                case 'register':
                                    return URL_LANG.'dang-ky';
                                    break;
                                case 'display':
                                    return URL_LANG.'trang-ca-nhan';
                                    break;
                                case 'changepass':
                                    return URL_LANG.'trang-ca-nhan/doi-mat-khau';
                                    break;
                                case 'logout':
                                    return URL_LANG.'trang-ca-nhan/thoat';
                                    break;
                                case 'update_forgot_pass':
                                    return URL_LANG.'doi-mat-khau';
                                    break;
                                case 'forgot_pass':
                                    return URL_LANG.'quen-mat-khau';
                                    break;
                                case 'transaction_history':
                                    return URL_LANG.'trang-ca-nhan/lich-su-giao-dich';
                                    break;
                                case 'member_level':
                                    return URL_LANG.'trang-ca-nhan/cap-thanh-vien';
                                    break;
                                case 'promotion_information':
                                    return URL_LANG.'trang-ca-nhan/thong-tin-khuyen-mai';
                                    break;
                                default:
                                    return URL_ROOT . $url;
                            }
                        default:
                            return URL_ROOT . $url;
                    }
                    break;
                case 'contact':
                    return URL_LANG . 'lien-he';
                case 'home':
                    return URL_LANG;
                default:
                    return URL_ROOT . $url;
            }
        }

        return URL_ROOT . $url;
    }
}