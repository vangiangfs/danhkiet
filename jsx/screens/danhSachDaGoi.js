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

    const DATA = [
        {
            name: 'Vũ Ngọc Châm',
            dichVu :'Đo đạc',
            phiDichVu:'200.000đ/ngày',
            diaChi:'Hà Nội',
            ID:'1',

        },
        {
            name: 'Vũ Giáng Ly',
            dichVu :'Đo đạc',
            phiDichVu:'200.000đ/ngày',
            diaChi:'Hà Nội',
            ID:'2'
        },
        {
            name: 'Lưu Thanh Thủy',
            dichVu :'Đo đạc',
            phiDichVu:'200.000đ/ngày',
            diaChi:'Hà Nội',
            ID:'2'
        },
        {
            name: 'Huỳnh Kim Ngân',
            dichVu :'Đo đạc',
            phiDichVu:'200.000đ/ngày',
            diaChi:'Hà Nội',
            ID:'4'
        },
        {
            name: 'Huỳnh Kim Ngân',
            dichVu :'Đo đạc',
            phiDichVu:'200.000đ/ngày',
            diaChi:'Hà Nội',
            ID:'5'
        },
        {
            name: 'Huỳnh Kim Ngân',
            dichVu :'Đo đạc',
            phiDichVu:'200.000đ/ngày',
            diaChi:'Hà Nội',
            ID:'6'
        },
        {
            name: 'Huỳnh Kim Ngân',
            dichVu :'Đo đạc',
            phiDichVu:'200.000đ/ngày',
            diaChi:'Hà Nội',
            ID:'7'
        },
    ];
export default class DanhSachDaGoi extends Component {
    render(){

        return(
            <ScrollView>
                <View style = {mainStyle.header4}>
                    <View style = {mainStyle.buttonBack2} >
                        <TouchableOpacity onPress = {() => alert('Icon Back')}>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader2}>
                        <Text style = {mainStyle.textHeader2}>Danh sách đã gọi</Text>
                    </View>
                </View>
                <FlatList  style = {{marginLeft:20,marginRight:20}} data = {DATA} renderItem = {({item}) =>
                    <View style = {mainStyle.oneLine}>
                        <View style = {mainStyle.oneLine_1}>
                            <TouchableOpacity>
                                <Image source = {require('../assets/avatar.png')} style = {{height:(((width*1280)/ 720) * 125) /1280, width:(((width*1280)/ 720) * 125) /1280 , resizeMode:'cover'}}/>
                            </TouchableOpacity>
                        </View>
                        <View style = {mainStyle.oneLine_2}>
                                <TouchableOpacity onPress= { () => alert(item.name)}>
                                    <Text style = {{fontWeight:'bold',fontSize:textName}}>{item.name}</Text>
                                </TouchableOpacity>
                                <View style = {{flexDirection:'row'}}>
                                    <View style = {{justifyContent:'center'}}>
                                        <Image source = {require('../assets/iconDichVu.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                    </View>
                                    <Text style = {{color:'#999999',fontSize:textFontSize}}> Dịch Vụ: </Text>
                                    <Text style = {{fontSize: textFontSize}}>{item.dichVu}</Text> 
                                </View>
                                <View style = {{flexDirection:'row'}}>
                                    <View style = {{justifyContent:'center'}}>
                                        <Image source = {require('../assets/iconPhiDichVu.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                    </View>
                                    <Text style = {{color:'#999999',fontSize:textFontSize}}> Phí Dịch Vụ: </Text>
                                    <Text style = {{fontSize: textFontSize}}>{item.phiDichVu}</Text>
                                </View>
                                <View style = {{flexDirection:'row'}}>
                                    <View style = {{justifyContent:'center'}}>
                                        <Image source = {require('../assets/iconLocation.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                    </View>
                                    <Text style = {{color:'#999999',fontSize:textFontSize}}> Địa chỉ: </Text>
                                    <Text style = {{fontSize: textFontSize}}>{item.diaChi}</Text>
                                </View>
                                <View style = {{flexDirection:'row'}}>
                                    <View style = {{justifyContent:'center'}}>
                                        <Image source = {require('../assets/iconDanhGia.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                    </View>
                                    <View style = {{flexDirection:'row'}}>
                                        <Image source = {require('../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                        <Image source = {require('../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                        <Image source = {require('../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                        <Image source = {require('../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                        <Image source = {require('../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                    </View>
                                </View>
                        </View>   
                        <View style = {mainStyle.oneLine_3}>
                            <View style = {mainStyle.iconCall}>
                                <TouchableOpacity onPress= { () => alert('Call')}>
                                    <Image source = {require('../assets/iconCall.png')} style = {{width:(((width*1280)/ 720) * 65) /1280, height:(((width*1280)/ 720) * 65) /1280, resizeMode:'cover'}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                    }
                    keyExtractor={(item, index) => index.toString()}
                    />

            </ScrollView>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const textFontSize = 10/standarWidth * width;
const textName = 14/standarWidth * width;