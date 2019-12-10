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


export default class DangNhapKyThuat extends Component{
  render() {
    return (
		<ImageBackground source = {require('../assets/backgroundImage.png')} style = {mainStyle.container}>
			<View style = {mainStyle.content_1_LoginClient}>
				<View style = {mainStyle.content_1a}>
					<Image source = {require('../assets/logo.png')} style = {{width:100 * standarWidth/ width , height:100 * standarHeight / height, resizeMode:'contain'}}></Image>
				</View>
				<View style = {mainStyle.content_1b}>
					<Text style = {mainStyle.textContent_1b}>Đăng nhập </Text>
					<Text style = {mainStyle.textContent_1b}>tài khoản kỹ thuật</Text>
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
                    <TouchableOpacity style = {mainStyle.banLakhachHang_LoginClient}>
						<Text style ={{color:'#ffffff',}}>Bạn là Khách Hàng</Text>
					</TouchableOpacity>
                </View>
            </View>
		</ImageBackground>
    );
  }
}

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const text12 = 12/standarWidth * width;
const text14 = 14/standarWidth * width;
const text17 = 17/standarWidth * width;
const buttonWidth = 150/standarWidth * width;
const buttonHeight = 10/standarHeight * height;
const marginBottom = 10/standarHeight * height;
const padding = 10/standarWidth * width;
const margin = 20/standarWidth * width;