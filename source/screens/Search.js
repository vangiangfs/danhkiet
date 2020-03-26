import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, KeyboardAvoidingView, Platform, Alert}from 'react-native';
import { Container, Icon, Picker} from "native-base";

import mainStyle from '../src/styles/Style';
import HeaderBase from '../screens/template/HeaderBase';
import {getStorage, saveStorage} from '../src/api/storage';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
// import { MapView, Marker } from "expo";
import {getCountries, getCities, getDistricts, getWards, getServices} from '../src/api/apiGlobal';

export default class Search extends Component {
    static navigationOptions = ({ navigation }) => ({
        header: null,
    });
    
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: {
                version: 'guest',
                id: 0,
                latitude: 21.032711,
                longitude: 105.850525
            },
            countries: [],
            country_id: '66',
            cities: [],
            city_id: '0',
            districts: [],
            district_id: '0',
            wards: [],
            ward_id: '0',
            fullname: '',
            mobile: '',
            summary: '',
            service_id: '0',
            services: []
		}
		
		/*getStorage('user')
        .then(user => { 
            if(user != ''){
                let arrUser = JSON.parse(user);
                this.setState({user:arrUser, loading: false});
            }else
                this.props.navigation.navigate('HomeScreen');
        });*/

        getServices()
        .then(resJSON => {
			const {list, error} = resJSON;
			if(error == false){	
				this.setState({
                    services: list ,
                    service_id: '0'
				});
			}
        });

        getCountries()
        .then(resJSON => {
			const {list, error} = resJSON;
			if(error == false){	
				this.setState({
                    countries: list ,
                    country_id: '66'
				});
			}
        });

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

    setCountryChanged(country_id){
        this.setState({country_id});

        getCities(country_id)
        .then(resJSON => {
			const {list, error} = resJSON;
			if(error == false){	
				this.setState({
					cities: list 
				});
			}
        });
    }

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

    setDistrictChanged(district_id){
        this.setState({district_id});

        getWards(district_id)
        .then(resJSON => {
			const {list, error} = resJSON;
			if(error == false){	
				this.setState({
					wards: list 
				});
			}
        });
    }

    renderLoading  = () => {
        if (!this.state.loading) return null;

        return (
            <View style={{paddingVertical: 20}}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };
    
    onSubmit(){
        console.log(this.state.summary);

        if(this.state.summary == ''){
            Alert.alert('Thông báo', 'Bạn vui lòng nhập nội dung công việc.');
            return;
        }

        var filters = {
            country_id: this.state.country_id,
            city_id: this.state.city_id,
            district_id: this.state.district_id,
            ward_id: this.state.ward_id,
            fullname: this.state.fullname,
            mobile: this.state.mobile,
            summary: this.state.summary,
        };

        saveStorage('filters', JSON.stringify(filters));
        this.props.navigation.navigate('SearchResultsScreen', filters);
    }

    render(){
        const {navigation} = this.props; 

        return(
            <Container>
                <HeaderBase page="home" title={'Đặt dịch vụ'} navigation={navigation} />
                <KeyboardAvoidingView keyboardVerticalOffset='0' behavior="padding" enabled>
                    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#f1f1f1'}}>
                        <View style = {mainStyle.content1_body4}>
                            <Image source = {require('../assets/slide.png')} style = {mainStyle.slideShow}></Image>
                        </View>
                        <View style = {mainStyle.content2_body4}>
                            {this.state.loading == false?
                                <MapView style={mainStyle.mapViewDefault}
                                    pitchEnabled={false}
                                    initialRegion={{
                                        latitude: parseFloat(this.state.user.latitude),
                                        longitude: parseFloat(this.state.user.longitude),
                                        latitudeDelta: 0.0222,
                                        longitudeDelta: 0.0221,
                                    }}>
                                    <Marker
                                        coordinate={{
                                            latitude: parseFloat(this.state.user.latitude),
                                            longitude: parseFloat(this.state.user.longitude),
                                        }}>
                                        <Image source = {require('../assets/map-center.png')} style={mainStyle.fMapCenter} />
                                    </Marker>
                                </MapView>
                            :null}
                            {this.renderLoading()}
                            <View style = {mainStyle.fContainInput}>
                                <View style={mainStyle.fContainInputIcon}>
                                    <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#BBBBBB', fontSize: 18}} />
                                </View>
                                <Picker
                                    mode="dropdown"
                                    style={mainStyle.fContainPicker}
                                    selectedValue={this.state.country_id}
                                    onValueChange={(country_id) => this.setCountryChanged(country_id)}
                                    >
                                    <Picker.Item label="Chọn Quốc Gia" value="0" />
                                    {this.state.countries.map((e)=>(
                                        <Picker.Item key={e.id} label={e.name} value={e.id} />
                                    ))}
                                </Picker>
                            </View>
                            <View style = {mainStyle.fContainInput}>
                                <View style={mainStyle.fContainInputIcon}>
                                    <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#BBBBBB', fontSize: 18}} />
                                </View>
                                <Picker
                                    mode="dropdown"
                                    style={mainStyle.fContainPicker}
                                    selectedValue={this.state.city_id}
                                    onValueChange={(city_id) => this.setCityChanged(city_id)}
                                    >
                                    <Picker.Item label="Tỉnh/Thành Phố" value="0" />
                                    {this.state.cities.map((e)=>(
                                        <Picker.Item key={e.id} label={e.name} value={e.id} />
                                    ))}
                                </Picker>
                            </View>
                            <View style = {mainStyle.fContainInput}>
                                <View style={mainStyle.fContainInputIcon}>
                                    <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#BBBBBB', fontSize: 18}} />
                                </View>
                                <Picker
                                    mode="dropdown"
                                    style={mainStyle.fContainPicker}
                                    selectedValue={this.state.district_id}
                                    onValueChange={(district_id) => this.setDistrictChanged(district_id)}
                                    >
                                    <Picker.Item label="Quận/Huyện" value="0" />
                                    {this.state.districts.map((e)=>(
                                        <Picker.Item key={e.id} label={e.name} value={e.id} />
                                    ))}
                                </Picker>
                            </View>
                            <View style = {mainStyle.fContainInput}>
                                <View style={mainStyle.fContainInputIcon}>
                                    <Icon type="FontAwesome5" name="map-marker-alt" style={{color:'#BBBBBB', fontSize: 18}} />
                                </View>
                                <Picker
                                    mode="dropdown"
                                    style={mainStyle.fContainPicker}
                                    selectedValue={this.state.ward_id}
                                    onValueChange={(ward_id) => this.setState({ward_id})}
                                    >
                                    <Picker.Item label="Phường/Xã" value="0" />
                                    {this.state.wards.map((e)=>(
                                        <Picker.Item key={e.id} label={e.name} value={e.id} />
                                    ))}
                                </Picker>
                            </View>
                            <View style = {mainStyle.fContainInput}>
                                <View style ={mainStyle.fContainInputIcon}>
                                    <Icon type="FontAwesome5" name="user-circle" style={{color:'#BBBBBB', fontSize: 18}} />
                                </View>
                                <TextInput style = {mainStyle.fInputText} placeholder = {'Họ và tên'}
                                    value={this.state.fullname}
                                    returnKeyType="next"
                                    onSubmitEditing={() =>this.frmMobile.focus()}
                                    onChangeText={(fullname) => this.setState({ fullname })}/>
                            </View>
                            <View style = {mainStyle.fContainInput}>
                                <View style ={mainStyle.fContainInputIcon}>
                                    <Icon type="Foundation" name="telephone" style={{color:'#BBBBBB', fontSize: 20}} />
                                </View>
                                <TextInput style = {mainStyle.fInputText} placeholder = {'Số điện thoại'} keyboardType='phone-pad' 
                                    value={this.state.mobile}
                                    returnKeyType="next"
                                    ref={(input) => { this.frmMobile = input; }}
                                    onSubmitEditing={() =>this.frmSummary.focus()}
                                    onChangeText={(mobile) => this.setState({ mobile })}/>
                            </View>
                            <View style = {mainStyle.fContainInput}>
                                <View style={mainStyle.fContainInputIcon}>
                                    <Icon type="FontAwesome5" name="th-list" style={{color:'#BBBBBB', fontSize: 18}} />
                                </View>
                                <Picker
                                    mode="dropdown"
                                    style={mainStyle.fContainPicker}
                                    selectedValue={this.state.service_id}
                                    onValueChange={(service_id) => this.setState({service_id})}
                                    >
                                    <Picker.Item label="Dịch vụ cần đo" value="0" />
                                    {this.state.services.map((e)=>(
                                        <Picker.Item key={e.id} label={e.name} value={e.id} />
                                    ))}
                                </Picker>
                            </View>
                            <View style = {mainStyle.textArea}>
                                <TextInput style={{height:150,textAlign:'center'}}
                                    underlineColorAndroid="transparent"
                                    placeholder="Nội dung công việc"
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={false}
                                    value={this.state.summary}
                                    returnKeyType="done"
                                    ref={(input) => { this.frmSummary = input; }}
                                    onSubmitEditing={() =>this.onSubmit()}
                                    onChangeText={(summary) => this.setState({ summary })}/>
                            </View>
                        </View>
                        <View style ={mainStyle.content4_body4}>
                            <TouchableOpacity style = {[mainStyle.buttonYes_TimKiem, {marginBottom: 30}]}
                                onPress={() => this.onSubmit()}>
                                <Text style ={mainStyle.textButtonDangKy}>Xác nhận đặt dịch vụ</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style ={mainStyle.content3_body4}>
                                <Text style ={{fontSize:16,textAlign:'center'}}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}