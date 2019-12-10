<?php 
$system_path = $_SERVER['DOCUMENT_ROOT'];
if (realpath($system_path) !== FALSE){
    $system_path = realpath($system_path).'/';
}
// ensure there's a trailing slash
$system_path = rtrim($system_path, '/').'/';
define('PATH_BASE', str_replace("\\", "/", $system_path));
//require(PATH_BASE.'libraries/antiddos.php');
if (!isset($_SESSION)){
    session_start();
}

require(PATH_BASE.'config/config.php');
require(PATH_BASE.'config/defines.php');
require(PATH_BASE.'libraries/functions.php');
require(PATH_BASE.'libraries/fsfactory.php');
require(PATH_BASE.'libraries/fsinput.php');
require(PATH_BASE.'libraries/fstext.php');
require(PATH_BASE.'libraries/fstable.php');
require(PATH_BASE.'libraries/fsrouter.php');
require(PATH_BASE.'libraries/fscontrollers.php');
require(PATH_BASE.'libraries/fsmodels.php');
require(PATH_BASE.'libraries/database/mysql.php');
require(PATH_BASE.'libraries/Mobile_Detect.php');
require(PATH_BASE.'libraries/fsuser.php');

//sendMailFS('fs', 'vangiangfly', 'vangiangfly', 'vangiangfly@gmail.com');
/* Phiên bản mobile */
/* $detect = new Mobile_Detect;
if($detect->isMobile() || $detect->isTablet())
    define('IS_MOBILE', 1);
else
    define('IS_MOBILE', 1);*/

define('IS_MOBILE', 0);
/* Kiểm tra tốc độ website */
if(USE_BENMARCH){
	require(PATH_BASE.'libraries/Benchmark.class.php');
	Benchmark::startTimer();
}
//set_error_handler("custom_error_handler");
/* Ngôn ngữ website */
$lang_request = FSInput::get('lang'); 
if($lang_request){
	$_SESSION['lang']  = $lang_request;
} else {
	$_SESSION['lang'] = isset($_SESSION['lang'])?$_SESSION['lang']:'vi';
}
if(MULTI_LANGUAGE){
    define('URL_LANG', URL_ROOT.$_SESSION['lang'] . "/");
}else{
    define('URL_LANG', URL_ROOT);
}

if(USE_MEMCACHED){
    $mcache = new Memcache();
    $mcache->addServer("localhost", 11211);
}

$raw = FSInput::get('raw');
$print = FSInput::get('print');
$db = new Mysql_DB();
$module = FSInput::get('module', 'home');
$user = new FSUser();
$translate = FSText::load_languages('fontend', $_SESSION['lang'], $module);
$global_class = FSFactory::getClass('FsGlobal');
$config = $global_class->get_all_config();

if(!isset($_SESSION['type'] ))
    $_SESSION['type'] = 'home';
if(!isset($_SESSION['type_line']))
    $_SESSION['type_line'] = 0;

$type_alias = FSInput::get('type_alias', '');
if($type_alias) {
    $key = array_search($type_alias, $arrProductLineAlias);
    if ($key) {
        $_SESSION['type'] = $_REQUEST['type'] = 'line';
        $_SESSION['type_line'] = $_REQUEST['line'] = $key;
    }
}

if ($raw){
    ob_start();
    loadMainContent($module);
    $main_content = ob_get_contents();
    ob_end_clean();
    echo $main_content;
}else{
    /* Sản phẩm đã xem */
    $view = FSInput::get('view', $module);
    if($module == 'product' && $view == 'product'){
        $id = FSInput::get('id', 0, 'int');
        if(isset($_SESSION['products-viewed'])){
            $products_viewed = explode(',', $_SESSION['products-viewed']);
            if(!in_array($id, $products_viewed))
                $_SESSION['products-viewed'] .= ','.$id;
        }else
            $_SESSION['products-viewed'] = $id;
    }
    /* Đếm số người truy cập */
    require(PATH_BASE.'libraries/counter.php');
    $createCache = false; 
    if(USE_CACHE && !isset($_SESSION['cart'])){
        $requestUri = $_SERVER['REQUEST_URI'];
        $fileCache = PATH_BASE.'cache/'.$module.(IS_MOBILE?'-m':'').'-'.md5($module.'-'.$requestUri).'.html';
        if(file_exists($fileCache) && ((time() - filemtime($fileCache)) < 600)){ 
            require($fileCache);die;
        }else{
            $createCache = true;
        }
    }
    require(PATH_BASE.'libraries/templates.php');
    global $tmpl;
    $tmpl = new Templates();
    $tmpl->tmpl_name = 'default';
    /* Phiên bản mobile */
    if(IS_MOBILE)
        $tmpl->tmpl_name = 'mobile';
    ob_start();
    loadMainContent($module);
    $main_content = ob_get_contents();
    ob_end_clean();
    if ($print){
        require(PATH_BASE.'templates/'.$tmpl->tmpl_name.'/print.php');
        die;
    }
    ob_start();
    require(PATH_BASE.'templates/'.$tmpl->tmpl_name.'/index.php');
    $all_website_content = ob_get_contents();
    ob_end_clean();
    ob_start();
    $tmpl->loadHeader();
    echo $all_website_content;
    if(USE_BENMARCH){
		echo '<div class="benmarch tCenter">';
      	echo Benchmark::showTimer(5) . ' sec | ';
		echo Benchmark::showMemory('kb') . ' kb' ;
		echo '</div>';
	}
    $tmpl->loadFooter();
    /* tạo file cache. */
    if($createCache){
        $cacheContent = ob_get_contents();
        writeFile($fileCache, $cacheContent);
    }
}
?>