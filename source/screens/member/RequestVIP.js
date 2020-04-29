import React, {Component} from 'react';
import {View, Text, TouchableOpacity}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';
import { WebView } from 'react-native-webview';
import {getStaticsDetail} from '../../src/api/apiMember';

import HeaderBase from '../../screens/template/HeaderBase';
import { Container, Picker} from "native-base";

import {requestVIP} from '../../src/api/apiMember';
import {getStorage} from '../../src/api/storage';

export default class RequestVIP extends Component{

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            detail: {
                title: '',
                content: ''
            },
            user_id: 0,
            user: []
        }
        
        getStorage('user')
        .then(user => { 
            if(user != ''){
                let arrUser = JSON.parse(user);
                this.setState({user:arrUser});
            }
        });
    }

    componentDidMount() {
        const user_id = this.props.navigation.state.params.user_id;
        this.setState({user_id});

        getStaticsDetail(6)
        .then(resJSON => {
            const {error, detail } = resJSON;

			if(error == false){
				this.setState({
                    detail: detail
				});
            }
            
        }).catch(err => {
			this.setState({ loading: false });
        });
    }

    requestVIP(){
        requestVIP(this.state.user_id)
        .then((responseJson) => {
            Alert.alert('Thông báo', responseJson.message);

            if(responseJson.error == '0'){
                var arrMember = {
                    ...user,
                    vip: 2
                }
                saveStorage('user', JSON.stringify(arrMember));

                this.props.navigation.goBack();
                this.props.navigation.navigate('HomeScreen');
            }
        }).done();
    }

	render() {
        const {navigation} = this.props; 
		return (
            <Container>
                <HeaderBase page="home" title={this.state.detail.title==''?'Điều khoản VIP':this.state.detail.title} navigation={navigation} />
                <WebView style={mainStyle.WebView}
                    originWhitelist={['*']}
                    source={{html: this.state.detail.content}}
                />
                <View style = {mainStyle.footer}>
                    <TouchableOpacity style = {mainStyle.buttonDangKy} 
                        onPress={() =>this.requestVIP()}>
                        <Text style ={mainStyle.textButtonDangKy}>Đăng ký VIP</Text>
                    </TouchableOpacity>
                </View>
            </Container>
		);
	}
}
