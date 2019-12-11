<?php
class AjaxModelsAjax extends FSModels{
    function __construct(){
        parent::__construct();
    }

    function get_cities(){
        global $db;
		$where = ' published = 1 ';
		$sql = "SELECT id, name FROM fs_local_cities 
				WHERE " . $where . "
				ORDER BY `ordering`";
		$db->query ( $sql );
		return $db->getObjectList ();
    }

    function get_districts($city_id = 0){
        global $db;
		$where = ' published = 1 AND city_id='.intval($city_id);
		$sql = "SELECT id, name FROM fs_local_districts 
				WHERE " . $where . "
				ORDER BY `ordering`";
		$db->query ( $sql );
		return $db->getObjectList ();
    }
}                                                                                                                                      