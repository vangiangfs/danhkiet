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
    FlatList,
    Dimensions
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';
import Constants from 'expo-constants';

export default class GiaHanTaiKhoan extends Component {
    render(){

        return(
            <View style = {mainStyle.container}>
                <View style = {mainStyle.header4}>
                    <View style = {mainStyle.buttonBack2} >
                        <TouchableOpacity onPress = {() => alert('Icon Back')}>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader2}>
                        <Text style = {mainStyle.textHeader2}>Gia hạn tài khoản</Text>
                    </View>
                </View>
                <View style = {mainStyle.body4}>
                    <View style = {mainStyle.body4_content1}>
                        <Image source = {require('../assets/iconThanhToan.png')} style = {{width:150 * standarWidth/width , height:150 * standarHeight/height, resizeMode:'cover'}}></Image>
                    </View>
                    <View style = {mainStyle.body4_content2}>
                        <View style = {mainStyle.body4_content2a}>
                            <Text style = {{fontWeight:'bold', fontSize:15}}>Chọn gói gia hạn tài khoản:</Text>
                        </View>
                        <View style = {mainStyle.body4_content2b}>
                            <View style = {{flexDirection:'row', justifyContent:'space-between'}}>
                                <TouchableOpacity style = {mainStyle.body4_content2b_1}>
                                    <Text style = {{color:'white'}}>30 ngày</Text>
                                    <Text style = {{color:'white'}}>500.000đ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {mainStyle.body4_content2b_2}>
                                    <Text>60 ngày</Text>
                                    <Text>900.000đ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {mainStyle.body4_content2b_2}>
                                    <Text>90 ngày</Text>
                                    <Text>1.350.000đ</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {{flexDirection:'row', justifyContent:'space-between', marginTop:15,}}>
                                <TouchableOpacity style = {mainStyle.body4_content2b_2}>
                                    <Text>120 ngày</Text>
                                    <Text>2.300.000đ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {mainStyle.body4_content2b_2}>
                                    <Text>150 ngày</Text>
                                    <Text>4.000.000đ</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style = {mainStyle.body4_content2b_2}>
                                    <Text>180 ngày</Text>
                                    <Text>5.200.000đ</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {mainStyle.body4_content2c}>
                            <View style = {{flexDirection:'row', marginBottom:30}}>
                                <Text>Hiệu lực tài khoản: </Text>
                                <Text style = {{color:'red', fontWeight:'bold'}}>20 ngày</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {{justifyContent:'center', alignItems:'center',height:'100%'}}>
                        <Text style = {{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>THANH TOÁN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
        
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const textFontSize = 10/standarWidth * width;
const textName = 12/standarWidth * width;