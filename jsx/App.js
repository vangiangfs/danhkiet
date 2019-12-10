import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar
}
from 'react-native';
import mainStyle from './src/styles/mainStyle';
import Home from './screens/home';
import DangNhapKhachHang from './screens/dangNhapKhachHang';
import DangNhapKyThuat from './screens/dangNhapKyThuat';
import DangKyKhachHang from './screens/dangKyKhachHang';
import DangKyKyThuat from './screens/dangKyKyThuat';
import DangKyKhachHangThanhCong from './screens/dangKyThanhCong_KhachHang';
import DangKyKyThuatThanhCong from './screens/dangKyThanhCong_KyThuat';
import QuenMatKhau from './screens/quenMatKhau';
import TimKiem from './screens/timkiem';
import TimKiem1 from './screens/timKiem1';
import DieuKhoan from './screens/dieuKhoan';
import KetQuaTimKiem from './screens/ketQuaTimKiem';
import DanhSachDaGoi from './screens/danhSachDaGoi';
import DoiMatKhau from './screens/doiMatKhau';
import ThanhToanThanhCong from './screens/thanhToanThanhCong';
import LichSuGiaoDich from './screens/lichSuGiaoDich';
import ThongKe from './screens/thongKe';
import CongTrinhCanDo from './screens/congTrinhCanDo';
import ChiTietCongTrinhCanDo from './screens/chiTietCongTrinhCanDo';
import ThongTinTaiKhoanKhachHang from './screens/thongTinTaiKhoanKhachHang';
import ThongTinTaiKhoanKyThuat from './screens/thongTinTaiKhoanKyThuat';
import ThongTinKyThuat from './screens/thongTinKyThuat';
import ChinhSuaThongTinTaiKhoanKhachHang from './screens/chinhSuaThongTinTaiKhoanKhachHang';
import ChinhSuaThongTinTaiKhoanKyThuat from './screens/chinhSuaThongTinTaiKhoanKyThuat';
import ThongTinKyThuat_Goi from './screens/thongTinKyThuat_Goi';
import ThongTinKyThuat_BatMay from './screens/thongTinKyThuat_BatMay';

export default class App extends Component{
	render(){
		return(
			//<Home></Home>
			//<DangNhapKhachHang></DangNhapKhachHang>
			//<DangNhapKyThuat></DangNhapKyThuat>
			//<DangKyKhachHang></DangKyKhachHang>
			//<DangKyKyThuat></DangKyKyThuat>
			//<TimKiem></TimKiem>
			//<DieuKhoan></DieuKhoan>
			//<TimKiem1></TimKiem1>
			//<KetQuaTimKiem></KetQuaTimKiem>
			//<DanhSachDaGoi></DanhSachDaGoi>
			//<DoiMatKhau></DoiMatKhau>
			//<DangKyKhachHangThanhCong></DangKyKhachHangThanhCong>
			//<DangKyKyThuatThanhCong></DangKyKyThuatThanhCong>
			//<QuenMatKhau></QuenMatKhau>
			//<ThanhToanThanhCong></ThanhToanThanhCong>
			//<LichSuGiaoDich></LichSuGiaoDich>
			//<ThongKe></ThongKe>
			//<CongTrinhCanDo></CongTrinhCanDo>
			//<ChiTietCongTrinhCanDo></ChiTietCongTrinhCanDo>
			//<ThongTinTaiKhoanKhachHang></ThongTinTaiKhoanKhachHang>
			//<ThongTinTaiKhoanKyThuat></ThongTinTaiKhoanKyThuat>
			//<ThongTinKyThuat></ThongTinKyThuat>
			//<ChinhSuaThongTinTaiKhoanKhachHang></ChinhSuaThongTinTaiKhoanKhachHang>
			//<ChinhSuaThongTinTaiKhoanKyThuat></ChinhSuaThongTinTaiKhoanKyThuat>
			<ThongTinKyThuat_Goi></ThongTinKyThuat_Goi>
			//<ThongTinKyThuat_BatMay></ThongTinKyThuat_BatMay>
		);
	}
}