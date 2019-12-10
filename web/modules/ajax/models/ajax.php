<?php
class AjaxModelsAjax extends FSModels{
    function __construct(){
        parent::__construct();
    }

    function list_tips($page = 1, $limit = 10, $id = 0){
        global $db;
        $query = "  SELECT id, title, alias, summary, image, created_time
					FROM fs_news
					WHERE published = 1 AND category_id = 1 AND id != ".intval($id)."
					ORDER BY id DESC";
        $db->query_limit($query, $limit, $page);
        return $db->getObjectListByKey('id');
    }

    function list_studentship($category_id, $level_education, $scholarship_value, $nation, $page){
        global $db;
        $where = '';
        if($level_education)
            $where .= ' AND a.level_education = '.$level_education;
        if($category_id)
            $where .= ' AND a.category_id = '.$category_id;
        if($scholarship_value != '')
            $where .= ' AND a.full_scholarship = '.$scholarship_value;
        if($nation)
            $where .= ' AND a.nation = '.$nation;
        $query = "  SELECT a.id, a.title, b.title AS level_education_title, c.title AS scholarship_value_title, a.scholarship_value
					FROM fs_studentship AS a
					  LEFT JOIN fs_studentship_level_education AS b ON a.level_education = b.id
					  LEFT JOIN fs_studentship_scholarship_value AS c ON a.scholarship_value = c.id
					WHERE a.published = 1 ".$where."
					ORDER BY a.ordering DESC";
        $db->query_limit($query, 10, $page);
        return $db->getObjectListByKey('id');
    }
    
    function studentship_detail($id){
        global $db;
        $query = "  SELECT a.id, a.title, a.shool_name, a.object, a.advice, a.source, b.title AS level_education_title, c.title AS scholarship_value_title, d.name AS nation_title
					FROM fs_studentship AS a
					  LEFT JOIN fs_studentship_level_education AS b ON a.level_education = b.id
					  LEFT JOIN fs_studentship_scholarship_value AS c ON a.scholarship_value = c.id
					  LEFT JOIN fs_local_countries AS d ON a.nation = d.id
					WHERE a.published = 1 AND a.id = ".$id."
					LIMIT 1";
        $db->query($query);
        return $db->getObject();
    }

    function list_exams($page = 1, $limit = 10, $id = 0){
        global $db;
        $query = "  SELECT id, title, alias, summary, image, created_time
					FROM fs_news
					WHERE published = 1 AND category_id = 2 AND id != ".intval($id)."
					ORDER BY id DESC";
        $db->query_limit($query, $limit, $page);
        return $db->getObjectListByKey('id');
    }
}