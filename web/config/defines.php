<?php
define('URL_ROOT', "http://" . $_SERVER['HTTP_HOST'] . "/");
if (!defined('DS')){
    define('DS', '/');
}
define('URL_ROOT_REDUCE', '/');
define('IS_REWRITE', 1);
define('MULTI_LANGUAGE', 0);
define('USE_CACHE', 0);
define('USE_BENMARCH', 0);
define('SQL_PUBLISH', ' AND created_time < \''.date('Y-m-d H:i:s').'\'');
define('GOOGLE_MAP_KEY', 'AIzaSyAZ1yFoMsuE8VXV0EqWug1TLa1qQ9rjyC8');
define('USE_MEMCACHED', 0);
define('USE_MEMCACHE_TIME', 600);
define('CACHE_PREFIX', 'elise_');

//ini_set('display_errors', '1');
//ini_set('display_startup_errors', '1');
//error_reporting(E_ALL);

$arrOrderBy = array(
    '0'=>'Tất cả sản phẩm',
    '1'=>'Khuyến mại',
    '2'=>'Mới nhất',
    '3'=>'Giá tăng dần',
    '4'=>'Giá giảm dần',
);

$arrProductLine = array(
    '1'=>'Elise Woman',
    '2'=>'Elise Kids',
    '3'=>'Elise Accessories',
);

$arrProductLineAlias = array(
    '1'=>'elise-woman',
    '2'=>'elise-kids',
    '3'=>'elise-accessories',
);