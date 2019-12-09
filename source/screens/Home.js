import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';

export default class Home extends Component{
  render() {

    return (
		<ImageBackground source = {require('../assets/backgroundImage.png')} style = {mainStyle.container}>
			<View style = {mainStyle.content_1}>
				<View style = {mainStyle.content_1a}>
					<Image source = {require('../assets/logo.png')} style = {mainStyle.logo_home}></Image>
				</View>
				<View style = {mainStyle.content_1b}>
					<Text style = {mainStyle.textContent_1b}>Chào mừng bạn, </Text>
					<Text style = {mainStyle.textContent_1b}>đã đến với App Trắc Địa</Text>
				</View>
				<View style = {mainStyle.content_1c}>
					<TouchableOpacity style = {mainStyle.button_1__Content_1c}>
						<Text style = {mainStyle.home_banLaKhachHang}>Bạn là Khách Hàng</Text>
					</TouchableOpacity>
					<View style = {mainStyle.empty}></View>
					<TouchableOpacity style = {mainStyle.button_2__Content_1c}>
						<Text style ={mainStyle.home_banLaKyThuat}>Bạn là Kỹ thuật</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style = {mainStyle.content_2}>
				<View style = {mainStyle.content_2a}>
					<TouchableOpacity style = {mainStyle.buttonSignIn}>
						<Text style = {mainStyle.textButtonSignIn}>ĐĂNG NHẬP NGAY</Text>
					</TouchableOpacity>
				</View>
				<View style = {mainStyle.content_2b}>
					<TouchableOpacity style = {mainStyle.buttonSignUp}>
						<Text style = {mainStyle.textButtonSignUp}>TẠO TÀI KHOẢN</Text>
					</TouchableOpacity>
				</View>
				<View style = {mainStyle.content_2c}>
                    <TouchableOpacity>
                        <Text style ={{color:'#ffffff'}}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
    );
  }
}