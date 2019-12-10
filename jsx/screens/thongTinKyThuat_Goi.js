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

export default class ThongTinKyThuat_Goi extends Component {

    render(){
        return(
            <ImageBackground source = {require('../assets/backgroundImage4.png')} style = {mainStyle.container}>
                <View style = {mainStyle.content_goi_1}>
                    <View>
                        <Image source = {require('../assets/goi.png')} style = {{width:250, height:250, resizeMode:'contain'}}></Image>
                    </View>
                </View>
                <View style = {mainStyle.content_goi_2}>
                    <Text style = {{color:'#ffffff', fontWeight:'bold',fontSize:16}}>NGUYỄN BÍCH VÂN</Text>
                    <Text style = {{color:'#ffffff'}}>Đang gọi...</Text>
                </View>
                <View style = {mainStyle.content_goi_3}>
                    <View style = {mainStyle.content_goi_3a}>
                        <TouchableOpacity style = {mainStyle.iconGoi}>
                            <Image source={require('../assets/iconAdd.png')} style = {{width:30, height:30, resizeMode:'stretch'}}></Image>
                        </TouchableOpacity>
                        <View style = {{flex:2, marginTop:5}}>
                            <Text style = {{textAlign:'center', fontSize:12, color:'rgba(255,255,255,0.6)'}}>Tăng âm lượng</Text>
                        </View>
                    </View>
                    <View style = {mainStyle.content_goi_3b}>
                        <TouchableOpacity style = {mainStyle.iconGoi}>
                            <Image source={require('../assets/iconLoaNgoai.png')} style = {{width:30, height:30, resizeMode:'stretch'}}></Image>
                        </TouchableOpacity>
                        <View style = {{flex:2,marginTop:5}}>
                            <Text style = {{textAlign:'center', fontSize:12, color:'rgba(255,255,255,0.6)'}}>Loa Ngoài</Text>
                        </View>
                    </View>
                    <View style = {mainStyle.content_goi_3c}>
                        <TouchableOpacity style = {mainStyle.iconGoi}>
                            <Image source={require('../assets/iconTatTieng.png')} style = {{width:30, height:30, resizeMode:'stretch'}}></Image>
                        </TouchableOpacity>
                        <View style = {{flex:2,marginTop:5}}>
                            <Text style = {{textAlign:'center', fontSize:12, color:'rgba(255,255,255,0.6)'}}>Tắt tiếng</Text>
                        </View>
                    </View>
                </View>
                <View style = {mainStyle.content_goi_4}>
                    <TouchableOpacity style = {mainStyle.iconGoi2}>
                        <Image source = {require('../assets/iconPhone3.png')} style = {{width:30, height:30, resizeMode:'contain'}}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;