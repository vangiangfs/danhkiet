import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, TouchableOpacity, Alert, TextInput, Dimensions}from 'react-native';

import { Notifications } from 'expo';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

import mainStyle from '../../src/styles/mainStyle';

import {saveStorage} from '../../src/api/storage';
import {submitLogin} from '../../src/api/apiMember';

export default class Login extends Component{
    constructor(props) {
        super(props);

        this.state = {
            version: 'guest',
            username: '',
            password: '',
            buttonText: 'ĐĂNG NHẬP',
            token: '',
            longitude: 105.850525,
            latitude: 21.032711,
            errorMessage: '',
            error: 0
		}
    }

    async componentDidMount() {
        const version = this.props.navigation.state.params.version;
        this.setState({version});

        try {
            if (!Constants.isDevice) {
                var token = '';
            }else{
                var token = await Notifications.getExpoPushTokenAsync();
            }

            this.setState({token});
            
        } catch (e) {
            console.log('Error', e);
        }

        try {
            let { status } = await Permissions.askAsync(Permissions.LOCATION);
            if (status !== 'granted') {
                console.log('Error', 'Permission to access location was denied');

                this.setState({
                    errorMessage: 'Permission to access location was denied',
                });
            }
            let location = await Location.getCurrentPositionAsync({});
            this.setState({ longitude: location.coords.longitude, latitude: location.coords.latitude });

            console.log('location', location);

            console.log('state', this.state);

        } catch (e) {
            console.log('Error', e);
        }
    }

    changeVersion(){
        var {version} = this.state;
        if(version == 'guest')
            version = 'technical';
        else
            version = 'guest';
        this.setState({version});
    }

    onSubmit(){
        var {username, password, token, version, latitude, longitude, error } = this.state;

        if(username == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập email.');
            return;
        }

        if(password == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập mật khẩu.');
            return;
        }

        this.setState({ buttonText: 'Đang xử lý...'});

        submitLogin(username, password, token, version, latitude, longitude )
        .then((responseJson) => {
            if(responseJson.error == '0'){
                saveStorage('user', JSON.stringify(responseJson.user));
                this.props.navigation.navigate('MemberScreen');
            }else{
                error++;
                this.setState({error, buttonText: 'ĐĂNG NHẬP'});
                if(error > 3)
                    Alert.alert('Thông báo', responseJson.message+'. Liên hệ 0936.310.222, để được hỗ trợ');
                else
                    Alert.alert('Thông báo', responseJson.message);
            }
        }).done();
    }

    render() {
        return (
            <ImageBackground source = {require('../../assets/backgroundImage.png')} style = {mainStyle.container}>
                <View style = {mainStyle.content_1_LoginClient}>
                    <View style = {mainStyle.content_1a}>
                        <Image source = {require('../../assets/logo.png')} style = {{width:100 * standarWidth/ width , height:100 * standarHeight / height, resizeMode:'contain'}}></Image>
                    </View>
                    <View style = {mainStyle.content_1b}>
                        <Text style = {mainStyle.textContent_1b}>Đăng nhập </Text>
                        <Text style = {mainStyle.textContent_1b}>{this.state.version=='guest'?'tài khoản khách hàng':'tài khoản kỹ thuật'}</Text>
                    </View>
                    <View style = {mainStyle.content_1c_login}>
                        <View style = {mainStyle.inputTaiKhoan}>
                            <Image source={require('../../assets/iconLogin1.png')} style = {mainStyle.imageTextInput}/>
                            <TextInput style={mainStyle.textInputLoginClient} placeholder="Email/Số điện thoại" keyboardType='phone-pad'
                                returnKeyType="next"
                                onSubmitEditing={() =>this.logPassword.focus()}
                                onChangeText={(username) => this.setState({username})} />
                        </View>
                        <View style = {mainStyle.inputMatKhau}>
                            <Image source={require('../../assets/iconLogin2.png')} style = {mainStyle.imageTextInput}/>
                            <TextInput style={mainStyle.textInputLoginClient} secureTextEntry = {true} placeholder="Mật Khẩu"
                                returnKeyType="done"
                                ref={(input) => { this.logPassword = input; }}
                                onChangeText={(password) => this.setState({password})}
                                onSubmitEditing={() =>this.onSubmit()}/>
                        </View>
                    </View>
                </View>
                <View style = {mainStyle.content_2_LoginClient}>
                    <View style = {mainStyle.content_2a_LoginClient}>
                        <TouchableOpacity style = {mainStyle.buttonDangNhap}
                            onPress={() => this.onSubmit()}>
                            <Text style = {{color:'#f42535',fontWeight:'bold'}}>{this.state.buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.content_2b_LoginClient}>
                        <TouchableOpacity 
                            onPress={()=>this.props.navigation.navigate('RegisterScreen', {version: this.state.version})}>
                            <Text style ={{color:'#ffffff'}}>Tạo tài khoản Danh Kiệt</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.content_2c_LoginClient}>
                        <TouchableOpacity style={mainStyle.banLakhachHang_LoginClient}
                            onPress={()=>this.changeVersion()}>
                            <Text style ={{color:'#ffffff'}}>{this.state.version=='guest'?'Bạn là Kỹ thuật':'Bạn là Khách Hàng'}</Text>
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