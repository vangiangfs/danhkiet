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
	
	function get_search_results(){
		global $db;
		$country_id = FSInput::get('country_id', 0);
		$city_id = FSInput::get('city_id', 0);
		$district_id = FSInput::get('district_id', 0);
		$ward_id = FSInput::get('ward_id', 0);
		$fullname = FSInput::get('fullname', '');
		$mobile = FSInput::get('mobile', '');

		$where = ' published = 1 AND version = \'technical\'';

		if($city_id)
			$where .= ' AND city_id='.intval($city_id);
		if($district_id)
			$where .= ' AND district_id='.intval($district_id);
		if($mobile)
			$where .= ' AND mobile LIKE \'%'.$mobile.'%\'';

		

		$sql = "SELECT * FROM fs_members 
				WHERE " . $where . "
				ORDER BY id DESC";
		$db->query_limit($sql, $this->limit, $this->page);
		return $db->getObjectList ();
	}

	function save_call_technical(){
		$tech_id = FSInput::get('tech_id', 0);
		$guest_id = FSInput::get('guest_id', 0);
		$country_id = FSInput::get('country_id', 0);
		$city_id = FSInput::get('city_id', 0);
		$district_id = FSInput::get('district_id', 0);
		$ward_id = FSInput::get('ward_id', 0);
		$summary = FSInput::get('summary', '');

		return $this->_add(array(
			'tech_id' => $tech_id,
			'guest_id' => $guest_id,
			'country_id' => $country_id,
			'city_id' => $city_id,
			'district_id' => $district_id,
			'ward_id' => $ward_id,
			'summary' => $summary,
			'created_time' => date('Y-m-d H:i:s')
		), 'fs_works_measure');
	}

	function get_called_list(){
		global $db;
		$guest_id = FSInput::get('guest_id', 0);

		$sql = "SELECT a.id, b.first_name, b.last_name, b.city_name, b.service_charge, b.mobile
				FROM fs_works_measure AS a 
					INNER JOIN fs_members AS b On a.tech_id = b.id
				WHERE a.guest_id = " . intval($guest_id) . "
				ORDER BY a.id DESC";
		$db->query_limit($sql, $this->limit, $this->page);
		return $db->getObjectList ();
	}

	function get_works_measure(){
		global $db;
		$tech_id = FSInput::get('tech_id', 0);

		$sql = "SELECT a.id, b.first_name, b.last_name, a.summary, b.address, b.mobile
				FROM fs_works_measure AS a 
					INNER JOIN fs_members AS b On a.guest_id = b.id
				WHERE a.tech_id = " . intval($tech_id) . "
				ORDER BY a.id DESC";
		$db->query_limit($sql, $this->limit, $this->page);
		return $db->getObjectList ();
	}

	function get_user(){
        global $db;
        $email = FSInput::get('email');
        if (!$email)
            return false;
        $sql = "SELECT *
                FROM fs_members
				WHERE (email = '$email' AND email != '')";
        $db->query($sql);
        return $db->getObject();
    }

    function resetPass($userid){
        $fstring = FSFactory::getClass('FSString', '', '../');
        $newpass = $fstring->generateRandomString(8);
        
        $newpass_encode = md5($newpass);

        global $db;
        $sql = "UPDATE  fs_members SET 
				password = '$newpass_encode'
				WHERE id = $userid";
        $db->query($sql);
        $rows = $db->affected_rows();
        if (!$rows) {
            return false;
        }
        return $newpass;
    }
}                                                                                                                                      