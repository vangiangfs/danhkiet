
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

export default class SauDangNhapKhachHang extends Component {

    render(){
        return(
           <ImageBackground style = {{flex:1}} source = {require('../assets/backgroundImage5.png')} style = {{width:'100%', height:'100%',resizeMode:'cover'}}>
               <View style = {mainStyle.row_1}>
                   <View style = {mainStyle.column_1}>
                   <TouchableOpacity  style = {{width:'80%', height:'100%',position:'absolute',justifyContent:'flex-end', marginLeft:22}}>
                           <View style = {{alignItems:'center'}}>
                                <View>
                                    <Image source = {require('../assets/sauDangNhap1.png')} style = {{width: 70 * standarWidth/ width , height:70 * standarHeight/height, resizeMode:'contain'}}></Image>
                                </View>
                                <Text style = {mainStyle.redColor}>Danh sách</Text>
                                <Text style = {mainStyle.redColor}>đã gọi</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
                   <View style = {mainStyle.column_2}></View>
                   <View style = {mainStyle.logoHome}>
                       <TouchableOpacity style = {{justifyContent:'center'}}>
                            <Image source = {require('../assets/logo.png')} style = {mainStyle.logo_home}></Image>
                       </TouchableOpacity>
                   </View>
               </View>
               <View style = {mainStyle.row_2}>
                    <View style = {mainStyle.column_1}></View>
                   <View style = {mainStyle.column_2}>
                    <TouchableOpacity style = {{alignItems:'center'}}>
                            <View>
                                    <Image source = {require('../assets/search.png')} style = {{width: 60* standarWidth/ width , height:70 * standarHeight/height, resizeMode:'contain'}}></Image>
                            </View>
                            <Text style = {{textAlign:'center',color:'red'}}>Tìm kiếm dịch vụ</Text>
                       </TouchableOpacity>
                    </View>
                   <View style = {mainStyle.column_3}></View>
               </View>
               <View style = {mainStyle.row_3}>
                    <View style = {mainStyle.column_1}>
                    <TouchableOpacity  style = {{width:'80%', height:'100%',marginLeft:22,}}>
                           <View style = {{alignItems:'center'}}>
                                <View>
                                    <Image source = {require('../assets/lock.png')} style = {{width: 70 * standarWidth/ width , height:70 * standarHeight/height, resizeMode:'contain'}}></Image>
                                </View>
                                <Text style = {mainStyle.redColor}>Đổi</Text>
                                <Text style = {mainStyle.redColor}>mật khẩu</Text>
                           </View>
                       </TouchableOpacity>
                    </View>
                   <View style = {mainStyle.column_2}></View>
                   <View style = {mainStyle.column_3}>
                        <TouchableOpacity  style = {{width:'80%', height:'100%',marginLeft:7,}}>
                           <View style = {{alignItems:'center'}}>
                                <View>
                                    <Image source = {require('../assets/12.png')} style = {{width: 70 * standarWidth/ width , height:70 * standarHeight/height, resizeMode:'contain'}}></Image>
                                </View>
                                <Text style = {mainStyle.redColor}>Điều khoản</Text>
                                <Text style = {mainStyle.redColor}>sử dụng</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
               </View>
               <View style = {mainStyle.row_4}>
                    <View style = {mainStyle.column_1}></View>
                   <View style = {mainStyle.column_2}>
                       <TouchableOpacity style = {{alignItems:'center'}}>
                            <View>
                                    <Image source = {require('../assets/13.png')} style = {{width: 60* standarWidth/ width , height:70 * standarHeight/height, resizeMode:'contain'}}></Image>
                            </View>
                            <Text style = {{textAlign:'center',color:'red'}}>Đăng xuất</Text>
                       </TouchableOpacity>
                   </View>
                   <View style = {mainStyle.column_3}></View>
               </View>
               <View style = {mainStyle.row_5}>
                    <TouchableOpacity style = {mainStyle.avatar}>
                        <View >
                            <Image source = {require('../assets/saudangnhap3.png')} style = {{width: 150 * standarWidth/ width , height:150 * standarHeight/height, resizeMode:'contain'}}></Image>
                       </View>
                    </TouchableOpacity>
                   <View style = {mainStyle.column_2}></View>
                   <View style = {mainStyle.column_3}>
                       <TouchableOpacity  style = {{width:'80%', height:'100%',marginLeft:7,}}>
                           <View style = {{alignItems:'center'}}>
                                <View>
                                    <Image source = {require('../assets/14.png')} style = {{width: 70 * standarWidth/ width , height:70 * standarHeight/height, resizeMode:'contain'}}></Image>
                                </View>
                                <Text style = {mainStyle.redColor}>Trở thành TK</Text>
                                <Text style = {mainStyle.redColor}>kỹ thuật</Text>
                           </View>
                       </TouchableOpacity>
                   </View>
               </View>
               <View style = {mainStyle.row_6}>
                   <TouchableOpacity>
                        <Text style = {{color:'red', fontWeight:'bold', fontSize:16}}>Lưu Hoàng Mai Anh</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style = {{flexDirection:'row'}}>
                        <View style = {{justifyContent:'center'}}>
                            <Image source = {require('../assets/121.png')} style = {{width:20, height:20, resizeMode:'contain'}}></Image>
                        </View>
                        <View style = {{marginLeft:5,}}>
                            <Text>Thông tin tài khoản</Text>
                        </View>
                   </TouchableOpacity>
               </View>
           </ImageBackground>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;