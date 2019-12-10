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
            name: 'BOOKING 10004',
            money: '500.000đ',
            ID : '1'
        },
        {
            name: 'BOOKING 10004',
            money: '1.500.000đ',
            ID : '2'
        },
        {
            name: 'BOOKING 10004',
            money: '2.500.000đ',
            ID : '3'
        },
        {
            name: 'BOOKING 10004',
            money: '3.500.000đ',
            ID : '4'
        },
        {
            name: 'BOOKING 10004',
            money: '4.500.000đ',
            ID : '5'
        },
        {
            name: 'BOOKING 10004',
            money: '500.000đ',
            ID : '6'
        },
        {
            name: 'BOOKING 10004',
            money: '500.000đ',
            ID : '7'
        },
        {
            name: 'BOOKING 10004',
            money: '500.000đ',
            ID : '8'
        },
    ];
export default class LichSuGiaoDich extends Component {
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
                        <Text style = {mainStyle.textHeader2}>Lịch sử giao dịch</Text>
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
                <View style = {mainStyle.titleFlatList}>
                    <Text>Tháng 9 2019</Text>
                </View>
                <FlatList style = {mainStyle.containerFlatList} data = {DATA} renderItem = {({item}) =>
                        <View style = {mainStyle.row}>
                            <View style = {mainStyle.FlatListContent_1}>
                                <Text style = {mainStyle.textItemName}>{item.name}</Text>
                                <TouchableOpacity style = {mainStyle.buttonChiTiet}>
                                    <Text style = {mainStyle.textButtonChiTiet}>Chi tiết</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {mainStyle.FlatListContent_2}>
                                <Text style = {mainStyle.textItemMoney}>{item.money}</Text>
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
const textName = 12/standarWidth * width;