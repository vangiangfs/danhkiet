<?php
class AjaxModelsAjax extends FSModels{
    function __construct(){
        parent::__construct();
    }

	function get_countries(){
		global $db;
		$where = ' published = 1';
		$sql = "SELECT id, name FROM fs_local_countries 
				WHERE " . $where . "
				ORDER BY `ordering`";
		$db->query ( $sql );
		return $db->getObjectList ();
    }
	
    function get_cities(){
		global $db;
		$country_id = FSInput::get('country_id', 66);
		$where = ' published = 1 AND country_id='.intval($country_id);
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
	
	function get_wards($district_id = 0){
        global $db;
		$where = ' published = 1 AND district_id='.intval($district_id);
		$sql = "SELECT id, name FROM fs_local_ward 
				WHERE " . $where . "
				ORDER BY `ordering`";
		$db->query ( $sql );
		return $db->getObjectList ();
    }
}                                                                                                                                      