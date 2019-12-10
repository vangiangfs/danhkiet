import React, {Component} from 'react';
import {
	View,
	Text,
	KeyboardAvoidingView,
	Image,
	TouchableOpacity,
	StyleSheet,
    TextInput,
    ScrollView,
    StatusBar,
    Dimensions
}
from 'react-native';
import mainStyle from '../../src/styles/mainStyle';

export default class QuestRegister extends Component{
	render() {
		return (
            <KeyboardAvoidingView keyboardVerticalOffset='0' behavior="padding" enabled>
                <ScrollView>
                    <View style = {mainStyle.header}>
                        <Image source= {require('../../assets/backgroundImage2.png')} style ={{height:0.3* height,width:'100%',resizeMode:'cover'}}></Image>
                        <View style = {mainStyle.buttonBack}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}>
                                <Image source = {require('../../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain'}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style = {mainStyle.containTextHeader}>
                            <Text style = {mainStyle.textHeader}>Tạo tài khoản khách hàng</Text>
                        </View>
                        <View>
                            <Image source = {require('../../assets/iconProfile12.png')} 
                            style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                            resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                        </View>
                    </View>
                    <View style = {mainStyle.body}>
                        <View style = {mainStyle.phone}>
                            <Text style = {mainStyle.titleInput}>Số điện thoại</Text>
                            <TextInput style = {mainStyle.input100Percents} placeholder="Nhập vào số điện thoại"/>
                        </View>
                        <View style = {mainStyle.password}>
                            <Text style = {mainStyle.titleInput}>Mật Khẩu</Text>
                            <TextInput style = {mainStyle.input100Percents} secureTextEntry = {true} placeholder="Nhập vào mật khẩu"/>
                        </View>
                        <View style = {mainStyle.againPassword}>
                            <TextInput style = {mainStyle.input100Percents} secureTextEntry = {true} placeholder="Xác nhận mật khẩu"/>
                        </View>
                        <View style = {mainStyle.email}>
                            <Text style = {mainStyle.titleInput}>Email của bạn</Text>
                            <TextInput style = {mainStyle.input100Percents} placeholder="Nhập Email"/>
                        </View>
                        <View style = {mainStyle.leftAndRight}>
                            <View style = {mainStyle.left}>
                                <Text style = {mainStyle.titleInput}>Họ</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Họ"/>
                            </View>
                            <View style = {mainStyle.right}>
                                <Text style = {mainStyle.titleInput}>Tên</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Tên"/>
                            </View>
                        </View>
                        <View style = {mainStyle.leftAndRight}>
                            <View style = {mainStyle.left}>
                                <Text style = {mainStyle.titleInput}>Sinh Ngày</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Sinh ngày"/>
                            </View>
                            <View style = {mainStyle.right}>
                                <Text style = {mainStyle.titleInput}>Giới Tính</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Giới tính"/>
                            </View>
                        </View>
                        <View style = {mainStyle.address}>
                            <Text style = {mainStyle.titleInput}>Địa Chỉ</Text>
                            <TextInput style = {mainStyle.input100Percents} placeholder="Nhập vào địa chỉ"/>
                        </View>
                    </View>
                    <View style = {mainStyle.footer}>
                        <TouchableOpacity style = {mainStyle.buttonDangKy} >
                            <Text style ={mainStyle.textButtonDangKy}>Đăng Ký</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
		);
	}
}

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const boxWidth =  300/standarWidth * width;
const boxHeight = 450/standarHeight * height;
const text10 = 10/standarWidth * width;
const text11 = 11/standarWidth * width;
const text12 = 12/standarWidth * width;
const text13 = 13/standarWidth * width;
const text14 = 14/standarWidth * width;
const text15 = 15/standarWidth * width;
const text16 = 16/standarWidth * width;
const text17 = 17/standarWidth * width;
const buttonTextFontSize = 14/standarWidth * width;
const titleFontSize = 20/standarWidth * width;
const buttonWidth = 150/standarWidth * width;
const buttonHeight = 10/standarHeight * height;
const lineHeight = 25/standarHeight * height;
const marginBottom = 10/standarHeight * height;
const padding = 10/standarWidth * width;
const margin = 20/standarWidth * width;