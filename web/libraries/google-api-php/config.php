<?php
set_include_path(PATH_BASE."libraries/google-api-php/" . PATH_SEPARATOR . get_include_path());
require_once 'Google/Client.php';
$client_id = '668509068048-se9nml05k34qinstpvn2l0svno68tan8.apps.googleusercontent.com';
$client_secret = 'SVmMypDo6NE8jZlkEbtYl6C_';
$redirect_uri = 'http://'.$_SERVER['HTTP_HOST'].'/oauth2callback';