<?php
class ContactControllersContact extends Controllers{
	function __construct(){
		parent::__construct();
		$this->view = 'contact';
	}

	function display()
	{
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
		$sheet->mergeCells("A1:G1");
		$sheet->setCellValue('A1', 'DANH SÁCH ĐĂNG KÝ NHẬN TIN');
		$sheet->getStyle("A1")->getFont()->setSize(15)->setBold(true);
		$sheet->getStyle('A1')->getAlignment()->applyFromArray(
			array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
		);
		$sheet->mergeCells("A2:G2");
		$sheet->getStyle('A2')->getAlignment()->applyFromArray(
			array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
		);
		$sheet->setCellValue('A3', 'STT');
		$sheet->setCellValue('B3', FSText::_('Họ tên'));
		$sheet->setCellValue('C3', FSText::_('Ngày sinh'));
		$sheet->setCellValue('D3', FSText::_('Điện thoại'));
		$sheet->setCellValue('E3', FSText::_('Email'));
		$sheet->setCellValue('F3', FSText::_('Nơi sinh sống'));
		$sheet->setCellValue('G3', FSText::_('Ngày đăng ký'));

		$sheet->getStyle('A3:G3')->getAlignment()->applyFromArray(
			array('horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER)
		);
		$sheet->getStyle("A3:G3")->getFont()->setSize(13);

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
			$sheet->setCellValue('B'.$cCell, $item->fullname);
			$sheet->setCellValue('C'.$cCell, $item->birthday);
			$sheet->setCellValue('D'.$cCell, $item->mobile.' ',  PHPExcel_Cell_DataType::TYPE_STRING);
			$sheet->setCellValue('E'.$cCell, $item->email);
			$sheet->setCellValue('F'.$cCell, $item->address);
			$sheet->setCellValue('G'.$cCell, $item->created_time);
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
		header('Content-Disposition: attachment;filename="Danh-sach-dang-ky-'.date('d-m-Y').'.xls"');
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