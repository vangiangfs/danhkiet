import React, {Component} from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	StyleSheet,
    TextInput,
    ScrollView,
    StatusBar,
    Dimensions
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';

export default class ThongTinTaiKhoanKhachHang extends Component{
	render() {
		return (
            <View style = {mainStyle.container}>
                <View style = {mainStyle.header}>
                    <Image source= {require('../assets/backGroundImage3.png')} style ={{height:0.3* height,width:'100%',resizeMode:'cover'}}></Image>
                    <View style = {mainStyle.buttonBack}>
                        <TouchableOpacity>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader}>
                        <Text style = {mainStyle.textHeader}>Thông tin khách hàng</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Image source = {require('../assets/avatar2.png')} 
                            style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                            resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {mainStyle.body6}>
                    <View style ={mainStyle.name_taiKhoan}>
                        <Text style = {{textAlign:'center',fontWeight:'bold',fontSize:text16}}>Nguyễn Bích Vân</Text>
                    </View>
                    <View style = {mainStyle.phone}>
                        <Text style = {mainStyle.titleInput}>Số điện thoại</Text>
                        <TextInput style = {mainStyle.input100Percents} value="0373160139"/>
                    </View>
                    <View style = {mainStyle.email}>
                        <Text style = {mainStyle.titleInput}>Email của bạn</Text>
                        <TextInput style = {mainStyle.input100Percents} value="nguyenbichvan@gmail.com"/>
                    </View>
                    <View style = {mainStyle.leftAndRight}>
                        <View style = {mainStyle.left}>
                            <Text style = {mainStyle.titleInput}>Sinh Ngày</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "11/09/1996"/>
                        </View>
                        <View style = {mainStyle.right}>
                            <Text style = {mainStyle.titleInput}>Giới Tính</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "Nữ"/>
                        </View>
                    </View>
                    <View style = {mainStyle.address}>
                        <Text style = {mainStyle.titleInput}>Địa Chỉ</Text>
                        <TextInput style = {mainStyle.input100Percents} value="Ngõ 66, Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội"/>
                    </View>
                </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {mainStyle.buttonDangKy} >
                        <Text style ={mainStyle.textButtonDangKy}>CHỈNH SỬA</Text>
                    </TouchableOpacity>
                </View>
            </View>
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