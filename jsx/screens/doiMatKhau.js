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

export default class DoiMatKhau extends Component {

    render(){
        return(
            <View style = {mainStyle.container4}>
                <View style = {mainStyle.header5}>
                    <Image source= {require('../assets/backgroundImage2.png')} style ={{height:'100%',width:'100%',resizeMode:'cover'}}></Image>
                    <View style = {mainStyle.buttonBack} >
                        <TouchableOpacity>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader3}>
                        <Text style = {mainStyle.textHeader}>Đổi Mật Khẩu</Text>
                    </View>
                    <View>
                        <Image source = {require('../assets/iconResetPassWord.png')} 
                        style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                        resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                    </View>
                </View>
                <View style = {mainStyle.body5}>
                    <View style = {mainStyle.body5_content1}>
                        <Text style = {mainStyle.textBody5_content2}>Hãy điền mật khẩu mới mà bạn muốn thay đổi.</Text>
                        <Text style = {mainStyle.textBody5_content2}>Bạn cần nhập chính xác "Mật khẩu mới" và</Text>
                        <Text style = {mainStyle.textBody5_content2}>"Xác nhận mật khẩu" giống nhau.</Text>
                    </View>
                    <View style = {mainStyle.body5_content2}>
                        <TextInput style = {mainStyle.buttonNhapMatKhau1} placeholder = {'Mật khẩu mới'} secureTextEntry = {true}></TextInput>
                        <TextInput style = {mainStyle.buttonNhapMatKhau1} placeholder = {'Nhập lại mật khẩu mới'} secureTextEntry = {true}
                        placeholderTextColor= {'#d5323c'}></TextInput>
                    </View>
                </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {{justifyContent:'center', alignItems:'center',height:'100%'}}>
                        <Text style = {{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>ĐỔI MẬT KHẨU</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;