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

export default class HinhThucThanhToan_TheTinDung extends Component {
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
                        <Text style = {mainStyle.textHeader2}>Thẻ Tín Dụng</Text>
                    </View>
                </View>
                <View style = {mainStyle.body4}>
                    <View style = {mainStyle.theTinDung}>
                        <View style = {{marginBottom:5}}>
                            <Text style = {{fontWeight:'bold'}}>CÔNG TY CỔ PHẦN DANH KIỆT</Text>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <Text style = {{color:'#999999'}}>Mã thanh toán: </Text>
                            <Text>APP19/00001</Text>
                        </View>
                        <View style = {{marginBottom:10}}>
                            <Text style = {{color:'red', fontWeight:'bold', fontSize:17}}>5.000.000đ</Text>
                        </View>
                        <View style = {mainStyle.inputTheTinDung}>
                            <View style = {{justifyContent:'center', flex:1}}>
                                <Image source = {require('../assets/iconcard.png')} style = {{width:40, height:40, resizeMode:'contain'}}></Image>
                            </View>
                            <TextInput style = {{flex:6}} placeholder = {"Số thẻ"}></TextInput>
                        </View>
                        <View style = {{flexDirection:'row'}}> 
                            <TouchableOpacity style = {mainStyle.containImageVisa}>
                                <Image source = {require('../assets/visa.png')} style = {mainStyle.imageVisa}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style = {mainStyle.containImageVisa}>
                                <Image source = {require('../assets/masterCard.png')} style = {mainStyle.imageVisa}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style = {mainStyle.containImageVisa}>
                                <Image source = {require('../assets/jcb.png')} style = {mainStyle.imageVisa}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity style = {mainStyle.containImageVisa}>
                                <Image source = {require('../assets/americaExpress.png')} style = {mainStyle.imageVisa}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style = {mainStyle.ngayThang}>
                            <TouchableOpacity style = {mainStyle.ngay}>
                                <TextInput  style = {{flex:6}} placeholder={'Tháng'}></TextInput>
                                <View style = {{justifyContent:'center', flex:1}}>
                                    <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style = {mainStyle.ngay}>
                                <TextInput  style = {{flex:6}} placeholder={'Năm'}></TextInput>
                                <View style = {{justifyContent:'center', flex:1}}>
                                <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style = {mainStyle.inputTheTinDung}>
                            <TextInput placeholder = {'CSC'}></TextInput>
                        </View>
                        <TouchableOpacity style = {mainStyle.button1_TheTinDung}>
                            <Text style = {{color:'white', textAlign:'center',}}>Thanh toán</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.button2_TheTinDung}>
                            <Text style = {{ textAlign:'center'}}>Hủy thanh toán</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style = {{flex:1,flexDirection:'column', alignItems:'center', backgroundColor:'#f5f5f5',}}>
                    <View style = {{flexDirection:'row', flex:1,}}>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/onepay.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/verifiedbyvisa.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/secureCode.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/safekey.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/jsecure.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection:'column', flex:1, marginTop:5}}>
                            <View style = {{flexDirection:'row'}}>
                                <TouchableOpacity>
                                    <Text style = {{fontSize:9, color:'#999999'}}>Về OnePay</Text>
                                </TouchableOpacity>
                                <Text style = {{fontSize:9, color:'#999999',marginLeft:3, marginRight:3}}>|</Text>
                                <TouchableOpacity>
                                    <Text style = {{fontSize:9, color:'#999999'}}>Hướng dẫn thanh toán</Text>
                                </TouchableOpacity>
                                <Text style = {{fontSize:9, color:'#999999',marginLeft:3, marginRight:3}}>|</Text>
                                <TouchableOpacity>
                                    <Text style = {{fontSize:9, color:'#999999'}}>Câu hỏi thường gặp</Text>
                                </TouchableOpacity>
                                <Text style = {{fontSize:9, color:'#999999',marginLeft:3, marginRight:3}}>|</Text>
                                <TouchableOpacity>
                                    <Text style = {{fontSize:9, color:'#999999'}}>Liên hệ</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style = {{fontSize:9, color:'#999999', textAlign:'center'}}>Copyright &copy; 2006 - 2019 OnePay. All right reserved</Text>
                    </View>
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