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
    Dimensions,
    FlatList
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';

const DATA2 = [
    {
        name : 'Lê Thái Bảo',
        address:'Ngõ 23, Hai Bà Trưng, Hà Nội',
        content: 'Mình cần đo khu đất của gia đình (10 giờ ngày mai nhé)'
    },
];
export default class ChiTietCongTrinhCanDo extends Component {

    render(){

        return(
            <View style ={mainStyle.container}>
                <View style = {mainStyle.header4}>
                    <View style = {mainStyle.buttonBack2} >
                        <TouchableOpacity>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader2}>
                        <Text style = {mainStyle.textHeader2}>Chi tiết công trình cần đo</Text>
                    </View>
                </View>
                <View style = {mainStyle.body5}>
                    <View style = {mainStyle.content1_body5}>
                        <Image source = {require('../assets/map.png')} style = {mainStyle.map}></Image>
                        <Text style = {{position:'absolute', top:150,left:'40%',color:'black',fontSize:25}}>Thiếu map</Text>
                    </View>
                    <FlatList style = {mainStyle.chiTietCongTrinh}data = {DATA2} renderItem = {({item}) =>
                            <View>
                                <View>
                                    <Text style = {{color:'#999999',fontSize:12}}>Họ và tên:</Text>
                                    <Text style = {{fontSize:12, marginBottom:10}}>{item.name}</Text>
                                </View>
                                <View>
                                    <Text style = {{color:'#999999',fontSize:12}}>Địa chỉ cần đo:</Text>
                                    <Text style = {{fontSize:12,marginBottom:10}}>{item.address}</Text>
                                </View>
                                <View>
                                    <Text style = {{color:'#999999',fontSize:12}}>Nội dung công việc</Text>
                                    <Text style = {{fontSize:12,marginBottom:10}}>{item.content}</Text>
                                </View>
                            </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    /> 
                </View>
                <View style = {mainStyle.footer4}>
                    <TouchableOpacity style = {mainStyle.buttonDangNhap2} >
                        <Text style ={mainStyle.textButtonDangKy}>GỌI</Text>
                    </TouchableOpacity>
                </View>
                </View>
        );
    }
}