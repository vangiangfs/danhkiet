import React, {Component} from 'react';

import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native';

import mainStyle from '../src/styles/Style';
import {getStorage, saveStorage} from '../src/api/storage';

import {getMemberInfo} from '../src/api/apiMember';

export default class Home extends Component{
	static navigationOptions = ({ navigation }) => ({
        header: null,
	});

	constructor(props) {
        super(props);

        this.state = {
            version: 'guest', // guest, technical
		}
		
		getStorage('user')
        .then(user => { 
            if(user != ''){
				let arrUser = JSON.parse(user);

				getMemberInfo(arrUser.id)
                .then((responseJson) => {
                    if(responseJson.error == '0'){
                        saveStorage('user', JSON.stringify(responseJson.user));
                    }
				}).done();
				
				if(arrUser.version=='guest')
					this.props.navigation.navigate('Home2Screen');
				else
					this.props.navigation.navigate('MemberScreen');

			}else
				this.props.navigation.navigate('Home2Screen');
        });
    }
	
	gotoRegister(){
		this.props.navigation.navigate('RegisterScreen', {version: this.state.version});
	}

	gotoLogin(){
		this.props.navigation.navigate('LoginScreen', {version: this.state.version});
	}

	gotoForgot(){
		this.props.navigation.navigate('ForgotPasswordScreen', {version: this.state.version});
	}

	render() {
		return (
			<ImageBackground source = {require('../assets/backgroundImage.png')} style = {mainStyle.container}>
				<View style = {mainStyle.content_1}>
					<View style = {mainStyle.content_1a}>
						<Image source = {require('../assets/logo.png')} style = {mainStyle.logo_home}></Image>
					</View>
					<View style = {mainStyle.content_1b}>
						<Text style = {mainStyle.textContent_1b}>Chào mừng bạn, </Text>
						<Text style = {mainStyle.textContent_1b}>đã đến với App đo đạc và máy trắc địa</Text>
					</View>
					<View style = {mainStyle.content_1c}>
						<TouchableOpacity style = {this.state.version=='guest'?mainStyle.button_1__Content_1c:mainStyle.button_2__Content_1c}
							onPress={()=>this.setState({version: 'guest'})}>
							<Text style = {this.state.version=='guest'?mainStyle.home_banLaKhachHang:mainStyle.home_banLaKyThuat}>Bạn là Khách Hàng</Text>
						</TouchableOpacity>
						<View style = {mainStyle.empty}></View>
						<TouchableOpacity style = {this.state.version=='guest'?mainStyle.button_2__Content_1c:mainStyle.button_1__Content_1c}
							onPress={()=>this.setState({version: 'technical'})}>
							<Text style ={this.state.version=='guest'?mainStyle.home_banLaKyThuat:mainStyle.home_banLaKhachHang}>Bạn là Kỹ thuật</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style = {mainStyle.content_2}>
					<View style = {mainStyle.content_2a}>
						<TouchableOpacity style = {mainStyle.buttonSignIn}
							onPress={()=>this.gotoLogin()}>
							<Text style = {mainStyle.textButtonSignIn}>ĐĂNG NHẬP NGAY</Text>
						</TouchableOpacity>
					</View>
					<View style = {mainStyle.content_2b}>
						<TouchableOpacity style = {mainStyle.buttonSignUp}
							onPress={()=>this.gotoRegister()}>
							<Text style = {mainStyle.textButtonSignUp}>TẠO TÀI KHOẢN</Text>
						</TouchableOpacity>
					</View>
					<View style = {mainStyle.content_2c}>
						<TouchableOpacity onPress={()=>this.gotoForgot()}>
							<Text style ={{color:'#ffffff'}}>Quên mật khẩu?</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		);
	}
}