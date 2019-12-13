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

export default class HinhThucThanhToan_AtmChiTiet extends Component {
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
                        <Text style = {mainStyle.textHeader2}>ATM</Text>
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
                        <View>
                            <Image source = {require('../assets/vietTinBank.png')} style = {{width:100, height:60, resizeMode:'contain'}}></Image>
                        </View>
                        <View style = {mainStyle.inputTheTinDung}>
                            <View style = {{justifyContent:'center', flex:1}}>
                                <Image source = {require('../assets/iconcard.png')} style = {{width:40, height:40, resizeMode:'contain'}}></Image>
                            </View>
                            <TextInput style = {{flex:6}} placeholder = {"Số thẻ"}></TextInput>
                        </View>
                        <View style = {mainStyle.ngayThang}>
                            <TouchableOpacity style = {mainStyle.ngay}>
                                <TextInput  style = {{flex:6}} placeholder={'Tháng'}></TextInput>
                            </TouchableOpacity>
                            <TouchableOpacity style = {mainStyle.ngay}>
                                <TextInput  style = {{flex:6}} placeholder={'Năm'}></TextInput>
                            </TouchableOpacity>
                        </View>
                        <View style = {mainStyle.inputTheTinDung}>
                            <TextInput placeholder = {'Tên in trên thẻ'}></TextInput>
                        </View>
                        <TouchableOpacity style = {mainStyle.button1_TheTinDung}>
                            <Text style = {{color:'white', textAlign:'center',}}>Thanh toán</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.button2_TheTinDung}>
                            <Text style = {{ textAlign:'center'}}>Hủy bỏ</Text>
                        </TouchableOpacity>
                        <View style = {{marginTop:10}}>
                            <Text style = {{fontSize:9, color:'#999999'}}>Hỗ trợ thanh toán bằng thẻ:</Text>
                            <View style = {{flexDirection:'row'}}>
                                <Text style = {{fontSize:9, color:'red'}}>0965 075 088</Text>
                                <Text style = {{fontSize:9, color:'#999999'}}>/1900 633 927 (8h30-18h00)</Text>
                            </View>
                            <Text style = {{fontSize:9, color:'#999999'}}>- Điều kiện sử dụng:</Text>
                            <Text style = {{fontSize:9, color:'#999999'}}>Đăng ký dịch vụ "Thanh toán trực tuyến" tại quầy giao dịch của Ngân hàng</Text>
                            <Text style = {{fontSize:9, color:'#999999'}}>- Hạn mức thanh toán trực tuyến:</Text>
                            <Text style = {{fontSize:9, color:'#999999'}}>30.000.000 VND/ngày/lần và 10 lần/ngày</Text>
                        </View>
                    </View>
                </View>
                <View style = {{flex:1,flexDirection:'column', alignItems:'center', backgroundColor:'#f1f1f1',}}>
                    <View style = {{flexDirection:'row', flex:1,}}>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/onepay.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/norton.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.containImageFooter}>
                            <Image source = {require('../assets/nexttonorton.png')} style = {mainStyle.imagefooter}></Image>
                        </TouchableOpacity>
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