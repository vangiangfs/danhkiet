<?php
/**
 * @author vangiangfly
 * @final 21/04/2013
 */ 
class StudentshipControllersRegisters extends Controllers{
    function __construct(){
        $this->view = 'registers';
        parent::__construct();
    }

    function display(){
        parent::display();
        $sort_field = $this->sort_field;
        $sort_direct = $this->sort_direct;
        $list = $this->model->get_data();
        $pagination = $this->model->getPagination();
        include 'modules/' . $this->module . '/views/' . $this->view . '/list.php';
    }

    function add(){
        $maxOrdering = $this->model->getMaxOrdering();
        include 'modules/' . $this->module . '/views/' . $this->view . '/detail.php';
    }

    function edit(){
        $ids = FSInput::get('id', array(), 'array');
        $id = $ids[0];
        $data = $this->model->get_record_by_id($id);
        include 'modules/' . $this->module . '/views/' . $this->view . '/detail.php';
    }

    function export(){
        ini_set('memory_limit','-1');
        require(PATH_BASE.'libraries/PHPExcel/PHPExcel.php');
        $objPHPExcel = new PHPExcel();
        $objPHPExcel->getProperties()->setCreator("Face")
            ->setLastModifiedBy("Face")
            ->setTitle("Office 2007 XLSX Vietrade Document")
            ->setSubject("Office 2007 XLSX Vietrade Document")
            ->setDescription("Face report ".date('d-m-Y'))
            ->setKeywords("Face report")
            ->setCategory("Face report");

        $objPHPExcel->setActiveSheetIndex(0);
        $sheet = $objPHPExcel->getActiveSheet();
        $sheet->getColumnDimension('A')->setWidth(10);
        $sheet->getColumnDimension('B')->setWidth(15);
        $sheet->getColumnDimension('C')->setWidth(50);
        $sheet->getColumnDimension('D')->setWidth(25);
        $sheet->getColumnDimension('E')->setWidth(25);
        $sheet->getColumnDimension('F')->setWidth(25);
        $sheet->getColumnDimension('G')->setWidth(20);
        $sheet->mergeCells("A1:M1");
        $sheet->setCellValue('A1', 'DANH SÁCH ĐĂNG KÝ HỌC BỔNG');
        $sheet->getStyle("A1")->getFont()->setSize(15)->setBold(true);
        $sheet->getStyle('A1')->getAlignment()->applyFromArray(
            array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
        );
        $sheet->mergeCells("A2:M2");
        $sheet->getStyle('A2')->getAlignment()->applyFromArray(
            array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
        );
        $sheet->setCellValue('A3', 'STT');
        $sheet->setCellValue('B3', FSText::_('Khóa học'));
        $sheet->setCellValue('C3', FSText::_('Họ và tên học sinh'));
        $sheet->setCellValue('D3', FSText::_('Ngày sinh'));
        $sheet->setCellValue('E3', FSText::_('Khóa học đã kết thúc'));
        $sheet->setCellValue('F3', FSText::_('Điểm trung bình học tập (GPA)'));
        $sheet->setCellValue('G3', FSText::_('Điểm IELTS/TOEFL'));
        $sheet->setCellValue('H3', FSText::_('Điểm SAT/ACT'));
        $sheet->setCellValue('I3', FSText::_('Điểm GMAT/GRE'));
        $sheet->setCellValue('J3', FSText::_('Thành tích học tập khá'));
        $sheet->setCellValue('K3', FSText::_('Đôi dòng mô tả hoạt động ngoại khóa'));
        $sheet->setCellValue('L3', FSText::_('Ngành học bạn quan tâm'));
        $sheet->setCellValue('M3', FSText::_('Ngày đăng ký'));
        $sheet->getStyle('A3:M3')->getAlignment()->applyFromArray(
            array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
        );
        $sheet->getStyle("A3:M3")->getFont()->setSize(13);

        $cCell = 3;
        $this->model->limit = 2000;
        $list = $this->model->get_data();
        $i = 0;
        $minDate = 0;
        $maxDate = 0;
        foreach($list as $item){
            $cCell++;
            $i++;
            $time = strtotime($item->created_time);
            if($i==1)
                $minDate = $maxDate = $time;
            if($time>$maxDate)
                $maxDate = $time;
            if($time<$minDate)
                $minDate = $time;
            $sheet->setCellValue('A'.$cCell, $i);
            $sheet->setCellValue('B'.$cCell, $item->studentship_title);
            $sheet->setCellValue('C'.$cCell, $item->fullname);
            $sheet->setCellValue('D'.$cCell, $item->birthday.' ',  PHPExcel_Cell_DataType::TYPE_STRING);
            $sheet->setCellValue('E'.$cCell, $item->ended_course);
            $sheet->setCellValue('F'.$cCell, $item->point_gpa);
            $sheet->setCellValue('G'.$cCell, $item->point_ielts);
            $sheet->setCellValue('H'.$cCell, $item->point_sat);
            $sheet->setCellValue('I'.$cCell, $item->point_gmat);
            $sheet->setCellValue('J'.$cCell, $item->other_learning);
            $sheet->setCellValue('K'.$cCell, $item->active_key);
            $sheet->setCellValue('L'.$cCell, $item->field_study);
            $sheet->setCellValue('M'.$cCell, $item->created_time);
        }

        if(isset($_SESSION[$this -> prefix.'text0']) && strtotime($_SESSION[$this -> prefix.'text0']) > 0)
            $minDate = strtotime($_SESSION[$this -> prefix.'text0']);
        $minDate = date('d/m/Y', $minDate);

        if(isset($_SESSION[$this -> prefix.'text1']) && strtotime($_SESSION[$this -> prefix.'text1']) > 0)
            $maxDate = strtotime($_SESSION[$this -> prefix.'text1']);
        $maxDate = date('d/m/Y', $maxDate);
        $sheet->setCellValue('A2', 'Từ ngày: '.$minDate.' - '.$maxDate);

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
        header('Content-Disposition: attachment;filename="Danh-sach-dang-hoc-bong-'.date('d-m-Y').'.xls"');
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