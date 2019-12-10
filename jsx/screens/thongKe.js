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
            ID : '100',
            address:'Ngõ 23, Hai Bà Trưng, Hà Nội'
        },
        {
            ID : '101',
            address:'Số 3 Ngõ 77 Phố Ngọc Trục, Đại Mỗ, Nam Từ Liêm, Hà Nội'
        },
        {
            ID : '102',
            address:'Số 3 Ngõ 77 Phố Ngọc Trục, Đại Mỗ, Nam Từ Liêm, Hà Nội'
        },
        {
            ID : '103',
            address:'Ngõ 23, Hai Bà Trưng, Hà Nội'
        },
        {
            ID : '104',
            address:'Ngõ 23, Hai Bà Trưng, Hà Nội'
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
export default class ThongKe extends Component {
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
                        <Text style = {mainStyle.textHeader2}>Thống kê click</Text>
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
                                <View style = {mainStyle.row1a}>
                                    <View><Text style = {{color:'#999999',fontSize:10}}>ID click</Text></View>
                                    <Text style = {mainStyle.itemIDClick}>{item.ID}</Text>
                                </View>
                                <View style= {mainStyle.row1b}>
                                    <View style = {mainStyle.row1b_left}><Text style = {{color:'#999999',fontSize:10}}>Vị trí</Text></View>
                                    <View style = {mainStyle.row1b_right}><Text style = {mainStyle.itemAddress}>{item.address}</Text></View>
                                    
                                </View>
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