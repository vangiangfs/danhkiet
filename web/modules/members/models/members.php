<?php
class MembersModelsMembers extends FSModels{

    function __construct(){
        parent::__construct();
        $this->img_folder = 'images/members/'.date('Y/m');

        $this->avatar_paths = array(
            array('avatar', 60, 60, 'resize_image_fix')
        );
    }

    /**
     * Lấy danh đơn hàng
     * @return Object list
     */
    function getOrders(){
        global $db, $user;
        $query = '  SELECT *
                    FROM fs_order
                    WHERE user_id = '.$user->userID.'
                    ORDER BY id DESC';
        $db->query_limit($query, $this->limit, $this->page);
        return $db->getObjectList();
    }
}