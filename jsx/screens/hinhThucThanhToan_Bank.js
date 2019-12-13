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

export default class HinhThucThanhToan_Bank extends Component {
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
                        <Text style = {mainStyle.textHeader2}>Chuyển khoản ngân hàng</Text>
                    </View>
                </View>
                <View style = {mainStyle.body4}>
                    <View style = {mainStyle.hinhThuc_bank1}>
                        <Image source = {require('../assets/vietTinBank.png')} style = {{width:100, height:60, resizeMode:'contain'}}></Image>
                        <Text>NGUYEN VIET DANH</Text>
                        <Text>10789880099</Text>
                        <Text>(VietinBanh Đống Đa Hà Nội)</Text>
                    </View>
                    <View style = {mainStyle.hinhThuc_bank2}>
                        <Text style = {{color:'#999999', fontSize:12}}>Nội dung chuyển khoản: </Text>
                        <Text style = {{fontSize:12}}>"Họ và tên" + "Số điện thoại" + "Gói gia hạn"</Text>
                    </View>
                </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {{justifyContent:'center', alignItems:'center',height:'100%'}}>
                        <Text style = {{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>VỀ TRANG CHỦ</Text>
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