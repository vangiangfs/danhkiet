
import React, {Component} from 'react';
import {View,Text,ImageBackground,Image,TouchableOpacity,Dimensions}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';

import {getStorage, saveStorage} from '../../src/api/storage';

export default class Home2 extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });
    
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            user: {
                version: 'guest',
                id: 0,
                first_name: '',
                last_name: '',
            },
		}
		
		getStorage('user')
        .then(user => { 
            if(user != ''){
                let arrUser = JSON.parse(user);
                this.setState({user:arrUser, loading: false});
            }
        });
    }

    renderMember(){
        return(
            <View style = {mainStyle.avatar}>
                <TouchableOpacity style = {mainStyle.avatarBound}
                    onPress={()=>this.props.navigation.navigate('MemberInfoScreen', {version: this.state.user.version})}>
                    <Image source = {require('../../assets/no-member.png')} style = {{width: (((width*1280)/ 720) * 180) /1280 , height:(((width*1280)/ 720) * 180) /1280, resizeMode:'contain'}}></Image>
                </TouchableOpacity>
                <TouchableOpacity style = {mainStyle.btnNameUnderAvatar}
                    onPress={()=>this.props.navigation.navigate('MemberInfoScreen', {version: this.state.user.version})}>
                    <Text style = {{fontWeight:'bold', color:'#f42535'}}>{this.state.user.first_name+' '+this.state.user.last_name}</Text>
                </TouchableOpacity>
                {this.state.user.id!=0?<TouchableOpacity style = {mainStyle.btnUnderName}
                    onPress={()=>this.props.navigation.navigate('MemberInfoScreen', {version: this.state.user.version})}>
                    <View style = {{justifyContent:'center'}}>
                        <Image source = {require('../../assets/121.png')} style = {{width:(((width*1280)/ 720) * 35) /1280, height:(((width*1280)/ 720) * 35) /1280, resizeMode:'contain'}}></Image>
                    </View>
                    <View style = {{marginLeft:2,}}>
                        <Text> Thông tin tài khoản</Text>
                    </View>
                </TouchableOpacity>:null}
                {this.state.user.version!='guest'?
                <TouchableOpacity style = {mainStyle.btnUnderName}
                    onPress={()=>this.props.navigation.navigate('TransactionHistoriesScreen')}>
                    <View style = {{justifyContent:'center'}}>
                        <Image source = {require('../../assets/122.png')} style = {{width:(((width*1280)/ 720) * 35) /1280, height:(((width*1280)/ 720) * 35) /1280, resizeMode:'contain'}}></Image>
                    </View>
                    <View style = {{marginLeft:2,}}>
                        <Text> Lịch sử giao dịch</Text>
                    </View>
                </TouchableOpacity>:null}
            </View>
        )
    }

    render(){
        return(
            <View style={{flex:1, backgroundColor: '#f42535'}}>
                <View style = {mainStyle.logoHome}>
                    <TouchableOpacity style = {{justifyContent:'center'}}>
                        <Image source = {require('../../assets/logo.png')} style = {mainStyle.logo_home}></Image>
                    </TouchableOpacity>
                </View>
                <ImageBackground style = {{flex:1}} source = {require('../../assets/backgroundImage5.png')} style = {mainStyle.boundImg}>
                    <View style = {mainStyle.boundBtn_1}>
                        <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}
                            onPress={()=>this.props.navigation.navigate('SearchScreen')}>
                            <Image source = {require('../../assets/search.png')} style = {mainStyle.iconBtn}></Image>
                            <Text style = {mainStyle.redColor}>Tìm kiếm</Text>
                            <Text style = {mainStyle.redColor}>dịch vụ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_2}>
                        <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}
                            onPress={()=>this.props.navigation.navigate('TermsUseScreen', {id:2})}>
                            <Image source = {require('../../assets/12.png')} style = {mainStyle.iconBtn}></Image>
                            <Text style = {mainStyle.redColor}>Máy</Text>
                            <Text style = {mainStyle.redColor}>trắc điạ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_3}>
                        <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}
                            onPress={()=>this.props.navigation.navigate('TermsUseScreen', {id:3})}>
                            <Image source = {require('../../assets/12.png')} style = {mainStyle.iconBtn}></Image>
                            <Text style = {mainStyle.redColor}>Phụ kiên</Text>
                            <Text style = {mainStyle.redColor}>trắc điạ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_4}>
                        <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}
                            onPress={()=>this.props.navigation.navigate('TermsUseScreen', {id:4})}>
                            <Image source = {require('../../assets/12.png')} style = {mainStyle.iconBtn}></Image>
                            <Text style = {mainStyle.redColor}>Phần mềm</Text>
                            <Text style = {mainStyle.redColor}>đo đạc</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_5}>
                        <TouchableOpacity style = {{width:width/4, alignItems:'center', justifyContent:'center'}}
                            onPress={()=>this.props.navigation.navigate('TermsUseScreen', {id:5})}>
                            <Image source = {require('../../assets/12.png')} style = {mainStyle.iconBtn}></Image>
                            <Text style = {mainStyle.redColor}>Dịch vụ</Text>
                            <Text style = {mainStyle.redColor}>Khác</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.boundBtn_6}>
                        <TouchableOpacity style = {{width:width/3, alignItems:'center', justifyContent:'center'}}
                            onPress={()=>this.props.navigation.navigate('RegisterScreen', {version: 'technical'})}>
                            <Image source = {require('../../assets/14.png')} style = {mainStyle.iconBtn}></Image>
                            <Text style = {mainStyle.redColor}>Trở thành TK </Text>
                            <Text style = {mainStyle.redColor}>kỹ thuật</Text>
                        </TouchableOpacity>
                    </View>
                    {this.renderMember()}
                </ImageBackground>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;