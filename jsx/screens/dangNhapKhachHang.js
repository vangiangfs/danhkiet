import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';

export default class DangNhapKhachHang extends Component{
  render() {

    return (
		<ImageBackground source = {require('../assets/backgroundImage.png')} style = {mainStyle.container}>
			<View style = {mainStyle.content_1_LoginClient}>
				<View style = {mainStyle.content_1a}>
					<Image source = {require('../assets/logo.png')} style = {mainStyle.logo_home}></Image>
				</View>
				<View style = {mainStyle.content_1b}>
					<Text style = {mainStyle.textContent_1b}>Đăng nhập </Text>
					<Text style = {mainStyle.textContent_1b}>tài khoản khách hàng</Text>
				</View>
				<View style = {mainStyle.content_1c_login}>
          <View style = {mainStyle.inputTaiKhoan}>
            <Image source={require('../assets/iconLogin1.png')} style = {mainStyle.imageTextInput}/>
            <TextInput style={mainStyle.textInputLoginClient} placeholder="Tài khoản/SĐT" />
          </View>
            <View style = {mainStyle.inputMatKhau}>
                <Image source={require('../assets/iconLogin2.png')} style = {mainStyle.imageTextInput}/>
                <TextInput style={mainStyle.textInputLoginClient} secureTextEntry = {true} placeholder="Mật Khẩu"/>
            </View>
				</View>
			</View>
            <View style = {mainStyle.content_2_LoginClient}>
                <View style = {mainStyle.content_2a_LoginClient}>
                    <TouchableOpacity style = {mainStyle.buttonDangNhap}>
						<Text style = {{color:'#f42535',fontWeight:'bold'}}>ĐĂNG NHẬP</Text>
					</TouchableOpacity>
                </View>
                <View style = {mainStyle.content_2b_LoginClient}>
                    <TouchableOpacity>
                        <Text style ={{color:'#ffffff'}}>Tạo tài khoản Danh Kiệt</Text>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyle.content_2c_LoginClient}>
                    <TouchableOpacity style = {mainStyle.banLaKyThuat_LoginClient}>
						<Text style ={{color:'#ffffff',}}>Bạn là Kỹ thuật</Text>
					</TouchableOpacity>
                </View>
            </View>
		</ImageBackground>
    );
  }
}
