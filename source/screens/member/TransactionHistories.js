import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';

import HeaderBase from '../../screens/template/HeaderBase';
import { Container, Picker} from "native-base";

const DATA = [
    
];

export default class TransactionHistories extends Component {
    render(){
        const {navigation} = this.props; 

        return(
            <Container>
                <HeaderBase page="home" title={'Lịch sử giao dịch'} navigation={navigation} />
                <ScrollView showsVerticalScrollIndicator={false} style = {mainStyle.lichSuGiaoDich}> 
                    <View style = {mainStyle.monthYear}>
                        <TouchableOpacity style = {mainStyle.month}>
                            <Text>Tháng 9</Text>
                            <View style = {{justifyContent:'center'}}>
                                <Image source = {require('../../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.year}>
                            <Text>2019</Text>
                            <View style = {{justifyContent:'center'}}>
                                <Image source = {require('../../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
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
            </Container>
        );
        
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const textFontSize = 10/standarWidth * width;
const textName = 12/standarWidth * width;