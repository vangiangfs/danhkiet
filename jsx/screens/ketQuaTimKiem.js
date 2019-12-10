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
            km: '2',
            ID:'1'
        },
        {
            name: 'Vũ Giáng Ly',
            km: '12',
            ID:'2'
        },
        {
            name: 'Lưu Thanh Thủy',
            km: '22',
            ID:'2'
        },
        {
            name: 'Huỳnh Kim Ngân',
            km: '32',
            ID:'4'
        },
        {
            name: 'Huỳnh Kim Ngân',
            km: '32',
            ID:'5'
        },
    ];
export default class KetQuaTimKiem extends Component {
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
                        <Text style = {mainStyle.textHeader2}>Tìm kiếm dịch vụ</Text>
                    </View>
                </View>
                <View style = {mainStyle.body4}>
                    <Image source = {require('../assets/map2.png')} style = {mainStyle.map2}></Image>
                </View>
                <FlatList  style = {{margin:10,}} data = {DATA} renderItem = {({item}) =>
                    <View style = {mainStyle.oneLine}>
                        <View style = {mainStyle.oneLine_left}>
                            <TouchableOpacity>
                                <Image source = {require('../assets/avatar.png')} style = {{height:70 * standarHeight/height, width:70 * standarWidth / width , resizeMode:'cover'}}/>
                            </TouchableOpacity>
                            <TouchableOpacity style = {{justifyContent:'center',alignItems:'center'}} onPress= { () => alert(item.name)}>
                                <Text style = {{fontWeight:'bold',fontSize:textName,textAlign:'center',marginLeft:2}}>{item.name}</Text>
                            </TouchableOpacity>    
                                
                        </View>
                        <View style = {mainStyle.oneLine_right}>
                            <View style = {mainStyle.khoangcach} >
                                <Text style = {{textAlign:'center',color:'#999999',fontSize:10}}>Khoảng cách</Text>
                                <Text style = {{textAlign:'center',fontSize:10}}>{item.km}km</Text>
                            </View>
                            <View style = {mainStyle.iconCall}>
                                <TouchableOpacity onPress= { () => alert('Call')}>
                                    <Image source = {require('../assets/iconCall.png')} style = {{width:35, height:35, resizeMode:'cover'}}></Image>
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
const textName = 12/standarWidth * width;