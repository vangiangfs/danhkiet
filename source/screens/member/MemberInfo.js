import React, {Component} from 'react';

import {
	View,
	Text,
	KeyboardAvoidingView,
	Image,
	TouchableOpacity,
    TextInput,
    ScrollView,
    Alert,
    Dimensions
} from 'react-native';

import { Picker} from "native-base";

import mainStyle from '../../src/styles/mainStyle';

import DateTimePicker from "react-native-modal-datetime-picker";

import {updateMember} from '../../src/api/apiMember';
import {getCities, getDistricts} from '../../src/api/apiGlobal';
import {getStorage} from '../../src/api/storage';

export default class MemberInfo extends Component{

    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            mobile: '',
            address: '',
            gender: 'male',
            buttonText: 'CẬP NHẬT',
            date: new Date(),
            isDateTimePickerVisible: false,
            version: 'guest',
            cities: [],
            city_id: 0,
            districts: [],
            district_id: 0,
            service_charge: '',
            machine_type: '',
            experience: '',
            work_done: '',
            country_id: 66,
            loading: true,
            user: []
        }
        
        getStorage('user')
        .then(user => { 
            if(user != ''){
                let arrUser = JSON.parse(user);
                console.log('arrUser', arrUser);

                this.setState({
                    user: arrUser, 
                    loading: false,
                    first_name: arrUser.first_name,
                    last_name: arrUser.last_name,
                    email: arrUser.email,
                    mobile: arrUser.mobile,
                    address: arrUser.address,
                    gender: arrUser.gender,
                    version: arrUser.version,
                    city_id: arrUser.city_id,
                    district_id: arrUser.district_id,
                    service_charge: arrUser.service_charge,
                    machine_type: arrUser.machine_type,
                    experience: arrUser.experience,
                    work_done: arrUser.work_done,
                });
            }else
                this.props.navigation.navigate('HomeScreen');
        });
    }

    componentDidMount() {
        const version = this.props.navigation.state.params.version;
        this.setState({version});

        getCities(this.state.country_id)
        .then(resJSON => {
			const {list, error} = resJSON;
			if(error == false){	
				this.setState({
					cities: list 
				});
			}
        });
    }

    onSubmit(){
        var { version, mobile, email, first_name, last_name, birthday, gender, city_id, district_id, address, service_charge, machine_type, experience, work_done } = this.state;

        if(mobile == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập số điện thoại.');
            return;
        }

        if(first_name == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập họ.');
            return;
        }

        if(last_name == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập tên.');
            return;
        }

        if(address == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập địa chỉ.');
            return;
        }

        this.setState({ buttonText: 'Đang xử lý...'});

        updateMember( this.state.user.id, mobile, email, first_name, last_name, birthday, gender, city_id, district_id, address, service_charge, machine_type, experience, work_done )
        .then(responseJson => {
        
			if(responseJson.error == '0'){
                saveStorage('user', JSON.stringify(responseJson.user));
                
                Alert.alert('Thông báo', responseJson.message,[
                  {text: 'OK', onPress: () => this.props.navigation.navigate('MemberScreen')},
                ]);
            }else {
                Alert.alert('Thông báo', responseJson.message);
                this.setState({ buttonText: 'Đăng Ký'});
            }
            
        }).catch(err => {
            Alert.alert('Thông báo!', error.message);

            this.setState({ buttonText: 'Đăng Ký'});
        });
    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true });
	};

	hideDateTimePicker = () => {
		this.setState({ isDateTimePickerVisible: false });
	};

	handleDatePicked = date => {
        // returns the month (from 0 to 11)
        var month = date.getMonth() + 1
        // returns the day of the month (from 1 to 31)
        var day = date.getDate()
        // returns the year (four digits)
        var year = date.getFullYear()
        var birthday = day + "/" + month + "/" + year;
        this.setState({date, birthday});
		// this.setDatePicker(date);
		this.hideDateTimePicker();
	};

    setCityChanged(city_id){
        this.setState({city_id});

        getDistricts(city_id)
        .then(resJSON => {
			const {list, error} = resJSON;
			if(error == false){	
				this.setState({
					districts: list 
				});
			}
        });
    }

	render() {
		return (
            <KeyboardAvoidingView keyboardVerticalOffset='0' behavior="padding" enabled>
                <ScrollView>
                    <View style = {mainStyle.header}>
                        <Image source= {require('../../assets/backgroundImage2.png')} style ={{height:0.3* height,width:'100%',resizeMode:'cover'}}></Image>
                        <View style = {mainStyle.buttonBack}>
                            <TouchableOpacity
                                onPress={()=>this.props.navigation.goBack()}>
                                <Image source = {require('../../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain'}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style = {mainStyle.containTextHeader}>
                            <Text style = {mainStyle.textHeader}>{this.state.version=='guest'?'Tạo tài khoản khách hàng':'Tạo tài khoản kỹ thuật'}</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image source = {require('../../assets/avatar2.png')} 
                                style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                                resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {mainStyle.body}>
                        <View style ={mainStyle.name_taiKhoan}>
                            <Text style = {{textAlign:'center',fontWeight:'bold',fontSize:text16}}>{this.state.first_name+' '+this.state.last_name}</Text>
                        </View>
                        <View style = {mainStyle.phone}>
                            <Text style = {mainStyle.titleInput}>Số điện thoại</Text>
                            <TextInput style = {[mainStyle.input100Percents, {color: '#999999'}]} placeholder="Nhập vào số điện thoại" keyboardType='phone-pad'
                                value={this.state.mobile}
                                editable = {false}
                                returnKeyType="next"
                                onSubmitEditing={() =>this.regPassword.focus()}
                                onChangeText={(mobile) => this.setState({ mobile })}/>
                        </View>
                        <View style = {mainStyle.email}>
                            <Text style = {mainStyle.titleInput}>Email của bạn</Text>
                            <TextInput style = {[mainStyle.input100Percents, {color: '#999999'}]} placeholder="Nhập Email" keyboardType='email-address'
                                value={this.state.email}
                                editable = {false}
                                returnKeyType="next"
                                ref={(input) => { this.regEmail = input; }}
                                onSubmitEditing={() =>this.regFirstName.focus()}
                                onChangeText={(email) => this.setState({ email })}/>
                        </View>
                        <View style = {mainStyle.leftAndRight}>
                            <View style = {mainStyle.left}>
                                <Text style = {mainStyle.titleInput}>Họ</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Họ"
                                    value={this.state.first_name}
                                    returnKeyType="next"
                                    ref={(input) => { this.regFirstName = input; }}
                                    onSubmitEditing={() =>this.regLastName.focus()}
                                    onChangeText={(first_name) => this.setState({ first_name })}/>
                            </View>
                            <View style = {mainStyle.right}>
                                <Text style = {mainStyle.titleInput}>Tên</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Tên"
                                    value={this.state.last_name}
                                    returnKeyType="next"
                                    ref={(input) => { this.regLastName = input; }}
                                    onSubmitEditing={() =>this.regAddress.focus()}
                                    onChangeText={(last_name) => this.setState({ last_name })}/>
                            </View>
                        </View>
                        <View style = {mainStyle.leftAndRight}>
                            <View style = {mainStyle.left}>
                                <Text style = {mainStyle.titleInput}>Sinh Ngày</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Sinh ngày"
                                    value={this.state.birthday}
                                    onFocus={() => this.showDateTimePicker()}/>
                            </View>
                            <View style = {mainStyle.right}>
                                <Text style = {mainStyle.titleInput}>Giới Tính</Text>
                                <Picker
                                    selectedValue={this.state.gender}
                                    style={mainStyle.input100Percents}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({gender: itemValue})
                                    }>
                                    <Picker.Item label="Nam" value="male" />
                                    <Picker.Item label="Nữ" value="female" />
                                </Picker>
                            </View>
                        </View>
                        {this.state.version=='technical'?
                        <View style = {mainStyle.leftAndRight}>
                            <View style = {mainStyle.left}>
                                <Text style = {mainStyle.titleInput}>Tỉnh/Thành phố</Text>
                                <View>
                                <Picker
                                    mode="dropdown"
                                    style={mainStyle.filterPicker}
                                    selectedValue={this.state.city_id}
                                    onValueChange={(city_id) => this.setCityChanged(city_id)}
                                    >
                                    <Picker.Item label="Tỉnh/Thành phố" value="0" />
                                    {this.state.cities.map((e)=>(
                                        <Picker.Item key={e.id} label={e.name} value={e.id} />
                                    ))}
                                </Picker>
                                </View>
                            </View>
                            <View style = {mainStyle.right}>
                                <Text style = {mainStyle.titleInput}>Quận/Huyện</Text>
                                <Picker
                                    mode="dropdown"
                                    style={mainStyle.filterPicker}
                                    selectedValue={this.state.district_id}
                                    onValueChange={(district_id) => this.setState({district_id})}
                                    >
                                    <Picker.Item label="Quận/Huyện" value="0" />
                                    {this.state.districts.map((e)=>(
                                        <Picker.Item key={e.id} label={e.name} value={e.id} />
                                    ))}
                                </Picker>
                            </View>
                        </View>:null}
                        <View style = {mainStyle.address}>
                            <Text style = {mainStyle.titleInput}>Địa Chỉ</Text>
                            <TextInput style = {mainStyle.input100Percents} placeholder="Nhập vào địa chỉ"
                                value={this.state.address}
                                returnKeyType="done"
                                ref={(input) => { this.regAddress = input; }}
                                onSubmitEditing={() =>this.onSubmit()}
                                onChangeText={(address) => this.setState({ address })}/>
                        </View>
                        {this.state.version=='technical'?<View>
                            <View style = {mainStyle.leftAndRight}>
                                <View style = {mainStyle.left}>
                                    <Text style = {mainStyle.titleInput}>Phí Dịch Vụ</Text>
                                    <View>
                                        <TextInput style = {mainStyle.input100Percents} placeholder="Phí Dịch Vụ"
                                            value={this.state.service_charge}
                                            onChangeText={(service_charge) => this.setState({ service_charge })}>
                                        </TextInput>
                                    </View>
                                </View>
                                <View style = {mainStyle.right}>
                                    <Text></Text>
                                    <TextInput style = {mainStyle.input100Percents} placeholder="Loại Máy Sử Dụng"
                                        value={this.state.machine_type}
                                        onChangeText={(machine_type) => this.setState({ machine_type })}/>
                                </View>
                            </View>
                            <View style = {mainStyle.address}>
                                <Text style = {mainStyle.titleInput}>Kinh nghiệm</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Kinh nghiệm"
                                    value={this.state.experience}
                                    onChangeText={(experience) => this.setState({ experience })}/>
                            </View>
                            <View style = {mainStyle.address}>
                                <Text style = {mainStyle.titleInput}>Công việc đã làm</Text>
                                <TextInput style = {mainStyle.input100Percents} placeholder="Công việc đã làm"
                                    value={this.state.work_done}
                                    onChangeText={(work_done) => this.setState({ work_done })}/>
                            </View>
                        </View>:null}
                    </View>
                    <View style = {mainStyle.footer}>
                        <TouchableOpacity style = {mainStyle.buttonDangKy} 
                            onPress={() =>this.onSubmit()}>
                            <Text style ={mainStyle.textButtonDangKy}>{this.state.buttonText}</Text>
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked}
                        onCancel={this.hideDateTimePicker}
                        cancelTextIOS={'Đóng'}
                        confirmTextIOS={'Xác nhận'}
                        date = {this.state.date}
                        />
                </ScrollView>
            </KeyboardAvoidingView>
		);
	}
}

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const boxWidth =  300/standarWidth * width;
const boxHeight = 450/standarHeight * height;
const text10 = 10/standarWidth * width;
const text11 = 11/standarWidth * width;
const text12 = 12/standarWidth * width;
const text13 = 13/standarWidth * width;
const text14 = 14/standarWidth * width;
const text15 = 15/standarWidth * width;
const text16 = 16/standarWidth * width;
const text17 = 17/standarWidth * width;
const buttonTextFontSize = 14/standarWidth * width;
const titleFontSize = 20/standarWidth * width;
const buttonWidth = 150/standarWidth * width;
const buttonHeight = 10/standarHeight * height;
const lineHeight = 25/standarHeight * height;
const marginBottom = 10/standarHeight * height;
const padding = 10/standarWidth * width;
const margin = 20/standarWidth * width;