import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
    Dimensions} from 'react-native';

import mainStyle from '../../src/styles/mainStyle';

export default class RegisterSuccess extends Component {
    constructor(props) {
        super(props);

        this.state = {
            version: 'guest',
		}
    }

    componentDidMount() {
        const version = this.props.navigation.state.params.version;
        this.setState({version});
    }

    gotoLogin(){
		this.props.navigation.navigate('LoginScreen', {version: this.state.version});
	}

    render(){
        return(
            <View style = {mainStyle.container4}>
                <View style = {mainStyle.header5}>
                    <Image source= {require('../../assets/backgroundImage2.png')} style ={{height:'100%',width:'100%',resizeMode:'cover'}}></Image>
                    <View style = {mainStyle.buttonBack} >
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                            <Image source = {require('../../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader}>
                        <Text style = {mainStyle.textHeader}>{this.state.version=='guest'?'Tạo tài khoản khách hàng':'Tạo tài khoản kỹ thuật'}</Text>
                    </View>
                    <View>
                        <Image source = {require('../../assets/iconCheck.png')} 
                        style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                        resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                    </View>
                </View>
                <View style = {mainStyle.body5}>
                    <View style = {mainStyle.body5_content1}>
                        <Text style = {mainStyle.textBody5_content1}>CHÚC MỪNG BẠN!</Text>
                    </View>
                    {this.state.version=='guest'?
                    <View style = {mainStyle.body5_content2}>
                        <Text style = {mainStyle.textBody5_content2}>Tài khoản Khách hàng đã được tạo thành công.</Text>
                        <Text style = {mainStyle.textBody5_content2}>Bạn có thể đăng nhập và sử dụng dịch vụ</Text>
                        <Text style = {mainStyle.textBody5_content2}>của chúng tôi ngay</Text>
                    </View>:
                    <View style = {mainStyle.body5_content2}>
                        <Text style = {mainStyle.textBody5_content2}>Tài khoản Kỹ thuật đã được tạo thành công.</Text>
                        <Text style = {mainStyle.textBody5_content2}>Bạn có thể đăng nhập và sử dụng dịch vụ</Text>
                        <Text style = {mainStyle.textBody5_content2}>của chúng tôi ngay</Text>
                    </View>}
                </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {{justifyContent:'center', alignItems:'center',height:'100%'}}
                        onPress={()=>this.gotoLogin()}>
                        <Text style = {{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;