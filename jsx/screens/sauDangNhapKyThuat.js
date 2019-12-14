
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
import Constants from 'expo-constants';

export default class SauDangNhapKyThuat extends Component {

    render(){
        return(
            <View style={{flex:1, backgroundColor: '#f42535'}}>
                <View style = {mainStyle.logoHome}>
                       <TouchableOpacity style = {{justifyContent:'center'}}>
                            <Image source = {require('../assets/logo.png')} style = {mainStyle.logo_home}></Image>
                       </TouchableOpacity>
                </View>
                <ImageBackground style = {{flex:1}} source = {require('../assets/backgroundImage5.png')} style = {mainStyle.boundImg}>
                    <View style = {mainStyle.boundBtn_1}>
                            <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}>
                                <Image source = {require('../assets/iconKiThuat1.png')} style = {mainStyle.iconBtn}></Image>
                                <Text style = {mainStyle.redColor}>Thống kê</Text>
                                <Text style = {mainStyle.redColor}>click</Text>
                            </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_2}>
                            <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}>
                                <Image source = {require('../assets/iconKiThuat2.png')} style = {mainStyle.iconBtn}></Image>
                                <Text style = {mainStyle.redColor}>Công trình</Text>
                                <Text style = {mainStyle.redColor}>cần đo</Text>
                            </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_3}>
                            <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}>
                                <Image source = {require('../assets/lock.png')} style = {mainStyle.iconBtn}></Image>
                                <Text style = {mainStyle.redColor}>Đổi mật</Text>
                                <Text style = {mainStyle.redColor}>khẩu</Text>
                            </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_4}>
                            <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}>
                                <Image source = {require('../assets/12.png')} style = {mainStyle.iconBtn}></Image>
                                <Text style = {mainStyle.redColor}>Điều khoản</Text>
                                <Text style = {mainStyle.redColor}>sử dụng</Text>
                            </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_5}>
                            <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}>
                                <Image source = {require('../assets/13.png')} style = {mainStyle.iconBtn}></Image>
                                <Text style = {mainStyle.redColor}>Danh sách </Text>
                                <Text style = {mainStyle.redColor}>đã gọi</Text>
                            </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_6}>
                            <TouchableOpacity style = {{width:width/3, alignItems:'center', justifyContent:'center'}}>
                                <Image source = {require('../assets/iconKiThuat3.png')} style = {mainStyle.iconBtn}></Image>
                                <Text style = {mainStyle.redColor}>Gia hạn</Text>
                                <Text style = {mainStyle.redColor}>tài khoản</Text>
                            </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.avatar}>
                        <TouchableOpacity style = {{marginTop: (((width*1280)/ 720) * 69) /1280, marginLeft:(((width*1280)/ 720) * 89) /1280}}>
                            <Image source = {require('../assets/saudangnhap3.png')} style = {{width: (((width*1280)/ 720) * 180) /1280 , height:(((width*1280)/ 720) * 180) /1280, resizeMode:'contain'}}></Image>
                       </TouchableOpacity>
                       <TouchableOpacity style = {mainStyle.btnNameUnderAvatar}>
                           <Text style = {{fontWeight:'bold', color:'#f42535'}}>Lưu Hoàng Mai Anh</Text>
                       </TouchableOpacity>
                       <TouchableOpacity style = {mainStyle.btnUnderName}>
                            <View style = {{justifyContent:'center'}}>
                                <Image source = {require('../assets/121.png')} style = {{width:(((width*1280)/ 720) * 35) /1280, height:(((width*1280)/ 720) * 35) /1280, resizeMode:'contain'}}></Image>
                            </View>
                            <View style = {{marginLeft:2,}}>
                                <Text>Thông tin tài khoản</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.btnUnderName}>
                            <View style = {{justifyContent:'center'}}>
                                <Image source = {require('../assets/122.png')} style = {{width:(((width*1280)/ 720) * 35) /1280, height:(((width*1280)/ 720) * 35) /1280, resizeMode:'contain'}}></Image>
                            </View>
                            <View style = {{marginLeft:2,}}>
                                <Text>Lịch sử giao dịch</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;