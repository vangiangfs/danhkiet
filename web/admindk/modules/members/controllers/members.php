<?php
	
class MembersControllersMembers extends Controllers
{
    function __construct()
    {
        $this->view = 'members';
        parent::__construct();
    }

    function display()
    {
        parent::display();
        $sort_field = $this->sort_field;
        $sort_direct = $this->sort_direct;

        if (isset($_POST['city'])) {
            $_SESSION[$this->prefix . 'city'] = $_POST['city'];
            $ss_city = $_POST['city'];
        }
        if (isset($_POST['published'])) {
            $_SESSION[$this->prefix . 'published'] = $_POST['published'];
            $ss_published = $_SESSION[$this->prefix . 'published'];
        }

        $model = $this->model;

        $list = $model->getMembers();
        $arr_level = $model->get_level();
        $pagination = $model->getPagination();
        include 'modules/' . $this->module . '/views/' . $this->view . '/list.php';
    }

    function add()
    {
        $model = $this->model;
        $cities = $model->getCity();
        $districts = $model->getDistricts();
        $maxOrdering = $model->getMaxOrdering();
        $arr_level = $model->get_level();


        include 'modules/' . $this->module . '/views/' . $this->view . '/detail.php';
    }

    function edit()
    {
        $model = $this->model;
        $data = $model->getMemberById();
        if (!$data)
            die('Not found url');
        $cities = $model->getCity();
        if (@$data->city_id) {
            $districts = $model->getDistricts(@$data->city_id);
        } else {
            $districts = $model->getDistricts();
        }
        $arr_level = $model->get_level();
        include 'modules/' . $this->module . '/views/' . $this->view . '/detail.php';
    }

    function apply()
    {
        $model = $this->model;
        if (!$this->check_save()) {
            $link = "index.php?module=members";
            $msg = FSText::_("Sorry! Ban khong luu duoc");
            setRedirect($link, $msg, 'error');
        } else {
            $id = $model->save();
            if ($id) {
                // create folder
//	            	$model -> create_folder_upload($id);

                $link = "index.php?module=members&view=members&task=edit&id=$id";
                $msg = FSText::_("Ban da thay doi thanh cong");
                setRedirect($link, $msg);
            } else {
                $link = "index.php?module=members&view=members";
                $msg = FSText::_("Sorry! You can not change infomation");
                setRedirect($link, $msg, 'error');
            }
        }

    }

    function save()
    {
        $model = $this->model;

        if (!$this->check_save()) {
            $link = "index.php?module=members&view=members";
            $msg = FSText::_("Sorry! Ban khong luu duoc");
            setRedirect($link, $msg, 'error');
        } else {
            $id = $model->save();

            if ($id) {
                // create folder
//	            	$model -> create_folder_upload($id);

                $link = "index.php?module=members&view=members";
                $msg = "B&#7841;n &#273;&atilde; thay &#273;&#7893;i th&agrave;nh c&ocirc;ng";
                setRedirect($link, $msg);
            } else {
                $link = "index.php?module=members&view=members";
                $msg = FSText::_("Sorry! You can not change infomation");
                setRedirect($link, $msg, 'error');
            }
        }

    }

    function check_save()
    {
        $id = FSInput::get('cid');
        $email = FSInput::get("email");
//			$re_email = FSInput::get("re_email");
        if (!$email) {
            Errors::setError(FSText::_("Ch&#432;a nh&#7853;p Email"));
            return false;
        }
//			if($email != $re_email)
//			{
//				Errors::setError(FSText::_("Email kh&ocirc;ng tr&ugrave;ng nhau"));
//				return false;
//			}	


        $model = $this->model;
        $edit_pass = FSInput::get('edit_pass');

        if ($edit_pass) {
            // check pass
            $password = FSInput::get("password1");
            $re_password = FSInput::get("re-password1");
            if (!$id && !$password) {
                Errors::setError("Y&#234;u c&#7847;u nh&#7853;p password");
                return false;
            }
            if ($password) {
                if ($password != $re_password) {
                    Errors::setError("Password khong khop voi Re-password");
                    return false;
                }
            }
        }

        // edit

        return true;
    }


    /*
 * load District by city id.
 * Use Ajax
 */
    function district()
    {
        $model = $this->model;
        $cid = FSInput::get('cid');
        $rs = $model->getDistricts($cid);

        $json = '['; // start the json array element
        $json_names = array();
        foreach ($rs as $item) {
            $json_names[] = "{id: $item->id, name: '$item->name'}";
        }
        $json .= implode(',', $json_names);
        $json .= ']'; // end the json array element
        echo $json;
    }

    // Excel toàn bộ danh sách copper ra excel
    function export_excel()
    {
        FSFactory::include_class('excel', 'excel');
//			require_once 'excel.php';
        $model = $this->model;
        $start = FSInput::get('start');
        $start = (isset($start) && !empty($start)) ? $start : 1;
        $start = $start - 1;
        $end = FSInput::get('end');
        $end = (isset($end) && !empty($end)) ? $end : 10;
        $list = $model->get_member_info($start, $end);
        if (empty($list)) {
            echo 'error';
            exit;
        } else {
            $excel = FSExcel();
            $excel->set_params(array('out_put_xls' => 'export/excel/' . 'danh_sach_' . date('H-i_j-n-Y', time()) . '.xls', 'out_put_xlsx' => 'export/excel/' . 'danh_sach_' . date('j-n-Y', time()) . '.xlsx'));
            $style_header = array(
                'fill' => array(
                    'type' => PHPExcel_Style_Fill::FILL_SOLID,
                    'color' => array('rgb' => 'ffff00'),
                ),
                'font' => array(
                    'bold' => true,
                )
            );
            $style_header1 = array(
                'font' => array(
                    'bold' => true,
                )
            );
            $excel->obj_php_excel->getActiveSheet()->getColumnDimension('A')->setWidth(20);
            $excel->obj_php_excel->getActiveSheet()->getColumnDimension('B')->setWidth(30);
            $excel->obj_php_excel->getActiveSheet()->getColumnDimension('C')->setWidth(30);
            $excel->obj_php_excel->getActiveSheet()->getColumnDimension('D')->setWidth(30);
            $excel->obj_php_excel->getActiveSheet()->getColumnDimension('E')->setWidth(30);
            $excel->obj_php_excel->getActiveSheet()->setCellValue('A1', 'Tên truy cập');
            $excel->obj_php_excel->getActiveSheet()->setCellValue('B1', 'Họ và tên');
            $excel->obj_php_excel->getActiveSheet()->setCellValue('C1', 'Địa chỉ');
            $excel->obj_php_excel->getActiveSheet()->setCellValue('D1', 'Email');
            $excel->obj_php_excel->getActiveSheet()->setCellValue('E1', 'Điện thoại');
            foreach ($list as $item) {
                $key = isset($key) ? ($key + 1) : 2;
                $excel->obj_php_excel->getActiveSheet()->setCellValue('A' . $key, $item->username);
                $excel->obj_php_excel->getActiveSheet()->setCellValue('B' . $key, $item->full_name);
                $excel->obj_php_excel->getActiveSheet()->setCellValue('C' . $key, $item->address);
                $excel->obj_php_excel->getActiveSheet()->setCellValue('D' . $key, $item->email);
                $excel->obj_php_excel->getActiveSheet()->setCellValue('E' . $key, $item->mobilephone);
            }
            $excel->obj_php_excel->getActiveSheet()->getRowDimension(1)->setRowHeight(20);
            $excel->obj_php_excel->getActiveSheet()->getStyle('A1')->getFont()->setSize(12);
            $excel->obj_php_excel->getActiveSheet()->getStyle('A1')->getFont()->setName('Arial');
            $excel->obj_php_excel->getActiveSheet()->getStyle('A1')->applyFromArray($style_header);
            $excel->obj_php_excel->getActiveSheet()->duplicateStyle($excel->obj_php_excel->getActiveSheet()->getStyle('A1'), 'B1:E1');
            $output = $excel->write_files();
            echo URL_ROOT . LINK_AMIN . '/' . $output['xls'];
        }
    }

    function quality_export()
    {
        $html = '<form id="form1" name="form1" method="post" >';
        $html .= '<h1 style="color:#FF0000; text-align:center">Bạn hãy điền số thứ tự của bản ghi muốn export</h1>';
        $html .= '<p style="text-align:center"><label>Bắt đầu :</label>';
        $html .= '<input type="text" name="start_at" id="start_at" /><br />';
        $html .= '<label>Kết thúc: </label><input type="text" name="end_at" id="end_at" /><br><span>Nếu bạn không nhập số thứ tự thì hệ thống sẽ tự export từ 1 - 10</span></p>';
        $html .= '<p style="text-align:center">';
        $html .= '<label>';
        $html .= '<input onclick="javascript:configClickExport();" type="submit" name="submit_quality" id="submit_quality" value="Ok" />';
        $html .= '</label>';
        $html .= '</p>';
        $html .= '</form>';
        print_r($html);
    }

    function import(){
        include 'modules/'.$this->module.'/views/'.$this -> view.'/import.php';
    }

    function do_import(){
        if(empty($_FILES['import']["name"])) {
            setRedirect('index.php?module=members&view=members&task=import', FSText :: _('Bạn vui lòng chọn file excel'));
            return false;
        }
        require(PATH_BASE.'libraries/PHPExcel/PHPExcel.php');
        $objPHPExcel = PHPExcel_IOFactory::load($_FILES['import']['tmp_name']);
        $objPHPExcel->setActiveSheetIndex(0);
        $sheet = $objPHPExcel->getActiveSheet();
        $numberRow = $sheet->getHighestRow();
        $i = 0;
        for($row = 3; $row <= $numberRow; $row++){
            $data = array(
                'fullname' => $sheet->getCell('A'.$row)->getValue(),
                'mobile' => '0'.ltrim($sheet->getCell('B'.$row)->getValue(), '0'),
                'money' => $sheet->getCell('D'.$row)->getValue()
            );
            if($this->model->checkMobileExists($data['mobile'])){
                $this->model->updateMemberMoney($data);
            }else{
                $data['created_time'] = date('Y-m-d H:i:s');
                $data['published'] =  1;
                $this->model->_add($data, 'fs_members');
            }
            $i++;
        }
        setRedirect('index.php?module=members&view=members&task=import', FSText :: _('Bạn đã cập nhật <b>'.$i.'</b> bản ghi'));
    }

    function export(){
        ini_set('memory_limit','-1');
        require(PATH_BASE.'libraries/PHPExcel/PHPExcel.php');
        $objPHPExcel = new PHPExcel();
        $objPHPExcel->getProperties()->setCreator("Sevenam")
            ->setLastModifiedBy("Sevenam")
            ->setTitle("Office 2007 XLSX Vietrade Document")
            ->setSubject("Office 2007 XLSX Vietrade Document")
            ->setDescription("Sevenam report ".date('d-m-Y'))
            ->setKeywords("Sevenam report")
            ->setCategory("Sevenam report");

        $objPHPExcel->setActiveSheetIndex(0);
        $sheet = $objPHPExcel->getActiveSheet();
        $sheet->getColumnDimension('A')->setWidth(10);
        $sheet->getColumnDimension('B')->setWidth(15);
        $sheet->getColumnDimension('C')->setWidth(50);
        $sheet->getColumnDimension('D')->setWidth(25);
        $sheet->getColumnDimension('E')->setWidth(25);
        $sheet->mergeCells("A1:E1");
        $sheet->setCellValue('A1', 'DANH SÁCH THÀNH VIÊN');
        $sheet->getStyle("A1")->getFont()->setSize(15)->setBold(true);
        $sheet->getStyle('A1')->getAlignment()->applyFromArray(
            array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
        );
        $sheet->mergeCells("A2:E2");
        $sheet->getStyle('A2')->getAlignment()->applyFromArray(
            array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
        );
        $sheet->setCellValue('A3', 'ID');
        $sheet->setCellValue('B3', FSText::_('Họ & Tên'));
        $sheet->setCellValue('C3', FSText::_('Email'));
        $sheet->setCellValue('D3', FSText::_('Điện thoại'));
        $sheet->setCellValue('E3', FSText::_('Ngày đăng ký'));
        $sheet->getStyle('A3:E3')->getAlignment()->applyFromArray(
            array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
        );
        $sheet->getStyle("A3:E3")->getFont()->setSize(13);

        $cCell = 3;
        $this->model->limit = 10000;
        $list = $this->model->get_data();
        foreach($list as $item){
            $cCell++;
            $sheet->setCellValue('A'.$cCell, $item->id);
            $sheet->setCellValue('B'.$cCell, $item->poster_name);
            $sheet->setCellValue('C'.$cCell, $item->email);
            $sheet->setCellValue('D'.$cCell, $item->poster_mobile);
            $sheet->setCellValue('E'.$cCell, $item->created_time);
        }

        $sheet->getStyle('C2:C'.$cCell)
            ->getAlignment()
            ->setVertical(PHPExcel_Style_Alignment::VERTICAL_TOP)
            ->setWrapText(true);

        $styleArray = array(
            'borders' => array(
                'allborders' => array(
                    'style' => PHPExcel_Style_Border::BORDER_THIN
                )
            )
        );

        $sheet->getStyle(
            'A1:' .
            $sheet->getHighestColumn() .
            $sheet->getHighestRow()
        )->applyFromArray($styleArray);

        // Redirect output to a client’s web browser (Excel2007)
        header('Content-Type: application/vnd.ms-excel');
        header('Content-Disposition: attachment;filename="Danh-sach-san-pham-'.date('d-m-Y').'.xls"');
        header('Cache-Control: max-age=0');
        // If you're serving to IE 9, then the following may be needed
        header('Cache-Control: max-age=1');

        // If you're serving to IE over SSL, then the following may be needed
        header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
        header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
        header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
        header ('Pragma: public'); // HTTP/1.0

        $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel5');
        $objWriter->save('php://output');
        exit;
    }
}