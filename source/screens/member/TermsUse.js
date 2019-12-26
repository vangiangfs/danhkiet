import React, {Component} from 'react';
import {View,Text,ScrollView}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';

import HeaderBase from '../../screens/template/HeaderBase';
import { Container, Picker} from "native-base";

export default class TermsUse extends Component{
	render() {
        const {navigation} = this.props; 
		return (
            <Container>
                <HeaderBase page="home" title={'Điều khoản sử dụng'} navigation={navigation} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style = {mainStyle.body3}>
                        <Text>Chưa có dữ liệu...</Text>
                    </View>
                </ScrollView>
            </Container>
		);
	}
}
