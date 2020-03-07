import React, {Component} from 'react';
import {View,Text,ScrollView}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';
import { WebView } from 'react-native-webview';
import {getStaticsDetail} from '../../src/api/apiMember';

import HeaderBase from '../../screens/template/HeaderBase';
import { Container, Picker} from "native-base";

export default class TermsUse extends Component{

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            detail: {
                title: '',
                content: ''
            }
		}
    }

    componentDidMount() {
        const id = this.props.navigation.state.params.id;

        getStaticsDetail(id)
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

	render() {
        const {navigation} = this.props; 
		return (
            <Container>
                <HeaderBase page="home" title={this.state.detail.title==''?'Điều khoản sử dụng':this.state.detail.title} navigation={navigation} />
                <WebView style={mainStyle.WebView}
                    originWhitelist={['*']}
                    source={{html: this.state.detail.content}}
                />
            </Container>
		);
	}
}
