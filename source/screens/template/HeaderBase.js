import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, PixelRatio } from 'react-native';
import mainStyle from '../../src/styles/Style';

export default class HeaderBase extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const { navigation, page, title } = this.props;

        return(
            <View style = {[mainStyle.header4, mainStyle.headerBase]}>
                <View style = {mainStyle.buttonBack2} >
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}>
                        <Image source = {require('../../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                    </TouchableOpacity>
                </View>
                <View style = {mainStyle.containTextHeader2}>
                    <Text style = {mainStyle.textHeader2}>{title}</Text>
                </View>
            </View>
        );
    }
}