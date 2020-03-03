import React, {Component} from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
    TextInput,
    Dimensions,
    Alert
}
from 'react-native';
import mainStyle from '../../src/styles/Style';

export default class ForgotPassword extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            buttonText: 'GỬI YÊU CẦU'
        };

    }

    render(){
        const {navigation } = this.props;
        return(
            <View style = {mainStyle.container4}>
                <View style = {mainStyle.header5}>
                    <Image source= {require('../../assets/backgroundImage2.png')} style ={{height:'100%',width:'100%',resizeMode:'cover'}}></Image>
                    <View style = {mainStyle.buttonBack} >
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                            <Image source = {require('../../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader3}>
                        <Text style = {mainStyle.textHeader}>Quên Mật Khẩu</Text>
                    </View>
                    <View>
                        <Image source = {require('../../assets/iconQuenMatKhau.png')} 
                        style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                        resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                    </View>
                </View>
                <View style = {mainStyle.body5}>
                    <View style = {mainStyle.body5_content1}>
                        <Text style = {mainStyle.textBody5_content2}>Hãy điền email đăng ký tài khoản của bạn và</Text>
                        <Text style = {mainStyle.textBody5_content2}>ấn "Quên mật khẩu". Chúng tôi sẽ gửi</Text>
                        <Text style = {mainStyle.textBody5_content2}>email tạo lại mật khẩu cho bạn.</Text>
                    </View>
                    <View style = {mainStyle.body5_content2}>
                        <TextInput style = {mainStyle.buttonNhapEmail} placeholder = {'Email đăng ký tài khoản'} 
                            value={this.state.email} 
                            onChangeText={(email) => this.setState({email})}
                            returnKeyType="done"
                            onSubmitEditing={() => { this.onValidationPress(); }}/>
                    </View>
                </View>
                <View style = {mainStyle.footer5}>
                    <TouchableOpacity style = {{justifyContent:'center', alignItems:'center',height:'100%'}} onPress={()=>this.onValidationPress()}>
                        <Text style = {{color:'#ffffff',fontSize:15,fontWeight:'bold'}}>ĐẶT LẠI MẬT KHẨU</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    onValidationPress(){
        var email = this.state.email;

        if(email == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập email.');
            return;
        }

        this.setState({ buttonText: 'Đang xử lý...'});
        fetch(global.BASE_URL+"/do_forgot_pass.ajax", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        })
        .then((response) => response.json())
          .then((responseJson) => {
              if(responseJson.error == false){
                  Alert.alert('Thông báo', responseJson.message,[
                    {text: 'OK', onPress: () => this.goHomeScreen()},
                  ]);
              }else {
                  Alert.alert('Thông báo', responseJson.message);
              }
          })
          .catch((error) => {
              Alert.alert('Thông báo', error.message);
          });
    }

    goHomeScreen(){
        this.props.navigation.navigate('HomeScreen');
    }
}

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;