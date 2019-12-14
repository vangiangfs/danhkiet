import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput, Dimensions, Alert}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';

export default class ChangePassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            re_password: '',
            password: ''
		}
    }

    onSubmit(){
        var { password, re_password } = this.state;

        if(password == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập mật khẩu mới.');
            return;
        }

        if(re_password != password){
            Alert.alert('Thông báo', 'Nhập lại mật khẩu không đúng.');
            return;
        }

        Alert.alert('Thông báo', 'Đổi mật khẩu thành công!',[
            {text: 'OK', onPress: () => this.props.navigation.navigate('MemberScreen')},
        ]);
    }

    render(){
        return(
            <View style = {mainStyle.container4}>
                <View style = {mainStyle.header5}>
                    <Image source= {require('../../assets/backgroundImage2.png')} style ={{height:'100%',width:'100%',resizeMode:'cover'}}></Image>
                    <View style = {mainStyle.buttonBack} >
                        <TouchableOpacity
                            onPress={()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader3}>
                        <Text style = {mainStyle.textHeader}>Đổi Mật Khẩu</Text>
                    </View>
                    <View>
                        <Image source = {require('../../assets/iconResetPassWord.png')} 
                        style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                        resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                    </View>
                </View>
                <View style = {mainStyle.body5}>
                    <View style = {mainStyle.body5_content1}>
                        <Text style = {mainStyle.textBody5_content2}>Hãy điền mật khẩu mới mà bạn muốn thay đổi.</Text>
                        <Text style = {mainStyle.textBody5_content2}>Bạn cần nhập chính xác "Mật khẩu mới" và</Text>
                        <Text style = {mainStyle.textBody5_content2}>"Xác nhận mật khẩu" giống nhau.</Text>
                    </View>
                    <View style = {mainStyle.body5_content2}>
                        <TextInput style = {mainStyle.buttonNhapMatKhau1} placeholder = {'Mật khẩu mới'} secureTextEntry = {true} 
                            value={this.state.password}
                            returnKeyType="next"
                            onSubmitEditing={() =>this.regRePassword.focus()}
                            onChangeText={(password) => this.setState({ password })}/>
                        <TextInput style = {mainStyle.buttonNhapMatKhau1} placeholder = {'Nhập lại mật khẩu mới'} secureTextEntry = {true} placeholderTextColor= {'#d5323c'} 
                            value={this.state.re_password}
                            returnKeyType="done"
                            ref={(input) => { this.regRePassword = input; }}
                            onSubmitEditing={() =>this.onSubmit()}
                            onChangeText={(re_password) => this.setState({ re_password })}/>
                    </View>
                </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {{justifyContent:'center', alignItems:'center',height:'100%'}}
                        onPress={() =>this.onSubmit()}>
                        <Text style = {{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>ĐỔI MẬT KHẨU</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;