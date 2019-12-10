<?php
class OrderControllersOrder extends Controllers{
    function __construct(){
        parent::__construct();

        $this->view = 'order';

        $this->arr_status = array(
            array('id'=>1, 'name' => 'Chờ xử lý'),
            array('id'=>2, 'name' => 'Hủy'),
            array('id'=>3, 'name' => 'Nhận đơn'),
            array('id'=>4, 'name' => 'Chốt đơn')
        );
        $this->arr_status = json_decode(json_encode($this->arr_status));


        $this->arr_payments = array(
            array('id'=>1, 'name' => 'Chưa thanh toán'),
            array('id'=>2, 'name' => 'Đã chuyển chờ nhận'),
            array('id'=>3, 'name' => 'Đã nhận')
        );
        $this->arr_payments = json_decode(json_encode($this->arr_payments));

        $this->arr_transport = array(
            array('id'=>1, 'name' => 'Chờ lấy hàng'),
            array('id'=>2, 'name' => 'Chờ giao hàng'),
            array('id'=>3, 'name' => 'Đang giao hàng'),
            array('id'=>4, 'name' => 'Đã giao hàng'),
            array('id'=>5, 'name' => 'Chuyển hoàn')
        );
        $this->arr_transport = json_decode(json_encode($this->arr_transport));
    }

    function display()
    {
        parent::display();
        $sort_field = $this->sort_field;
        $sort_direct = $this->sort_direct;
        $model = $this->model;
        $list = $this->model->get_data();

        $pagination = $this->model->getPagination();
        include 'modules/' . $this->module . '/views/' . $this->view . '/list.php';
    }
    function showStatus($status)
    {
        echo $this->arr_status[$status]->name;
    }
    function edit()
    {
        $model = $this->model;
        $order = $model->getOrderById();
        $data = $model->get_data_order();
        $order->status--;
        include 'modules/' . $this->module . '/views/' . $this->view . '/detail.php';
    }
    function cancel_order()
    {
        $model = $this->model;
        $rs = $model->cancel_order();
        $Itemid = 61;
        $id = FSInput::get('id');
        $link = 'index.php?module=order&view=order&task=edit&id=' . $id;
        if (!$rs) {
            $msg = 'Không hủy được đơn hàng';
            setRedirect($link, $msg, 'error');
        } else {
            $msg = 'Đã hủy được đơn hàng';
            setRedirect($link);
        }
    }
    function finished_order()
    {
        $model = $this->model;
        $rs = $model->finished_order();
        $Itemid = 61;
        $id = FSInput::get('id');
        $link = 'index.php?module=order&view=order&task=edit&id=' . $id;
        if (!$rs) {
            $msg = 'Không hoàn tất được đơn hàng';
            setRedirect($link, $msg, 'error');
        } else {
            $msg = 'Đã hoàn tất được đơn hàng thành công';
            setRedirect($link);
        }
    }
}
?>