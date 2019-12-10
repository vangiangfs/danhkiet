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

export default class ThanhToanThanhCong extends Component {

    render(){
        return(
            <View style = {mainStyle.container4}>
                <View style = {mainStyle.header5}>
                    <Image source= {require('../assets/backgroundImage2.png')} style ={{height:'100%',width:'100%',resizeMode:'cover'}}></Image>
                    <View style = {mainStyle.containTextHeader4}>
                        <Text style = {mainStyle.textHeader}>THANH TOÁN THÀNH CÔNG</Text>
                    </View>
                    <View>
                        <Image source = {require('../assets/iconResetPassWord.png')}
                        style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                        resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                    </View>
                </View>
                <View style = {mainStyle.body5}>
                    <View style = {mainStyle.body5_content1}>
                            <Text style = {mainStyle.textBody5_content1}>CHÚC MỪNG BẠN ĐÃ</Text>
                            <Text style = {mainStyle.textBody5_content1}>THANH TOÁN THÀNH CÔNG</Text>
                        </View>
                        <View style = {mainStyle.body5_content2}>
                            <Text style = {mainStyle.textBody5_content2}>Tài khoản của quý khách đã được gia hạn</Text>
                            <View style = {{flexDirection:'row',}}>
                                <Text style = {mainStyle.textBody5_content2}>thành công gói </Text>
                                <Text style = {mainStyle.textBody5_content3}>30 ngày</Text>
                            </View>
                            <Text style = {{marginTop:10},[mainStyle.textBody5_content2]}>Hiệu lực tài khoản của quý khách:</Text>
                            <Text style = {mainStyle.textBody5_content3}>50 ngày</Text>
                        </View>
                    </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {{justifyContent:'center', alignItems:'center',height:'100%'}}>
                        <Text style = {{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>TRỞ VỀ TRANG CHỦ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;