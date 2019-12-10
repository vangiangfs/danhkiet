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

    const DATA2 = [
        {
            name : 'Lê Thái Bảo',
            address:'Ngõ 23, Hai Bà Trưng, Hà Nội',
            content: 'Mình cần đo khu đất của gia đình (10 giờ ngày mai nhé)'
        },
        {
            name : 'Lưu Thanh Thủy',
            address:'Ngõ 23, Hai Bà Trưng, Hà Nội',
            content: 'Mình cần đo khu đất của gia đình (10 giờ ngày mai nhé)'
        },
        {
            name : 'Trần Thị Mai Anh',
            address:'Ngõ 23, Hai Bà Trưng, Hà Nội',
            content: 'Mình cần đo khu đất của gia đình (10 giờ ngày mai nhé)'
        },
    ];
    const DATA1 = [
        {
            title:'Ngày 20 tháng 9 2019',
        },
        {
            title:'Ngày 19 tháng 9 2019',
        },
    ];
export default class CongTrinhCanDo extends Component {
    render(){

        return(
            <ScrollView style = {mainStyle.lichSuGiaoDich}> 
                <View style = {mainStyle.header4}>
                    <View style = {mainStyle.buttonBack2} >
                        <TouchableOpacity onPress = {() => alert('Icon Back')}>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader2}>
                        <Text style = {mainStyle.textHeader2}>Công trình cần đo</Text>
                    </View>
                </View>
                <View style = {mainStyle.monthYear}>
                    <TouchableOpacity style = {mainStyle.month}>
                        <Text>Tháng 9</Text>
                        <View style = {{justifyContent:'center'}}>
                            <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style = {mainStyle.year}>
                        <Text>2019</Text>
                        <View style = {{justifyContent:'center'}}>
                            <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
                <FlatList data = {DATA1} renderItem = {({item}) =>

                    <View>
                        <View style = {mainStyle.containItemTitle}><Text style = {mainStyle.ItemTitle}>{item.title}</Text></View>
                        <FlatList style = {mainStyle.containerFlatList} data = {DATA2} renderItem = {({item}) =>
                            <View style = {mainStyle.row1}>
                                <View>
                                    <Text style = {{color:'#999999',fontSize:12}}>Họ và tên:</Text>
                                    <Text style = {{fontSize:12}}>{item.name}</Text>
                                </View>
                                <View>
                                    <Text style = {{color:'#999999',fontSize:12}}>Địa chỉ cần đo:</Text>
                                    <Text style = {{fontSize:12}}>{item.address}</Text>
                                </View>
                                <View>
                                    <Text style = {{color:'#999999',fontSize:12}}>Nội dung công việc</Text>
                                    <Text style = {{fontSize:12}}>{item.content}</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style = {{color:'#00aeef',fontSize:12}}>Xem chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                    }
                    keyExtractor={(item, index) => index.toString()}
                    /> 
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
const textName = 12/standarWidth * width;