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
    StatusBar
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';

export default class DieuKhoan extends Component{
	render() {
		return (
            <View style = {mainStyle.container3}>
                <View style = {mainStyle.header3}>
                    <View style = {mainStyle.buttonBack2} >
                        <TouchableOpacity>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader2}>
                        <Text style = {mainStyle.textHeader2}>Điều khoản sử dụng</Text>
                    </View>
                </View>
                <View style = {mainStyle.body3}>
                    <Text>Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào, 
                        Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào, 
                        Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào</Text>
                </View>
            </View>
		);
	}
}
