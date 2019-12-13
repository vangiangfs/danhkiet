import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, ActivityIndicator, KeyboardAvoidingView}from 'react-native';
import { Container, Icon, Picker} from "native-base";

import mainStyle from '../src/styles/Style';
import HeaderBase from '../screens/template/HeaderBase';
import {getStorage} from '../src/api/storage';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {getCountries, getCities, getDistricts, getWards} from '../src/api/apiGlobal';

export default class Search extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            user: {
                version: 'guest',
                id: 0,
                latitude: 21.032711,
                longitude: 105.850525
            },
            countries: [],
            country_id: 66,
            cities: [],
            city_id: 0,
            districts: [],
            district_id: 0,
            wards: [],
            ward_id: 0,
            fullname: '',
            mobile: '',

		}
		
		getStorage('user')
        .then(user => { 
            if(user != ''){
                let arrUser = JSON.parse(user);
                this.setState({user:arrUser, loading: false});
            }else
                this.props.navigation.navigate('HomeScreen');
        });

        getCountries()
        .then(resJSON => {
			const {list, error} = resJSON;
			if(error == false){	
				this.setState({
					countries: list 
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
        this.props.navigation.navigate('SearchResultsScreen');
    }

    render(){
        const {navigation} = this.props; 

        return(
            <Container>
                <HeaderBase page="home" title={'Tìm kiếm dịch vụ'} navigation={navigation} />
                <KeyboardAvoidingView keyboardVerticalOffset='0' behavior="padding" enabled>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style = {mainStyle.body4}>
                            <View style = {mainStyle.content1_body4}>
                                <Image source = {require('../assets/slide.png')} style = {mainStyle.slideShow}></Image>
                                <Text style = {{position:'absolute', bottom:80,left:'40%',color:'#fff',fontSize:20}}>SlideShow</Text>
                            </View>
                            <View style = {mainStyle.content2_body4}>
                                {this.state.loading == false?
                                    <MapView style={mainStyle.mapViewDefault}
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
                                            }}
                                            title={''}
                                            description={''}
                                            />
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
                                <View style = {mainStyle.textArea}>
                                    <TextInput style={{height:150,textAlign:'center'}}
                                        underlineColorAndroid="transparent"
                                        placeholder="Nội dung công việc"
                                        placeholderTextColor="grey"
                                        numberOfLines={10}
                                        multiline={true}
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
                                    <Text style ={mainStyle.textButtonDangKy}>OK</Text>
                                </TouchableOpacity>
                            </View>
                            <View style ={mainStyle.content3_body4}>
                                <Text style ={{fontSize:10,textAlign:'center'}}>ĐÀO TẠO KỸ THUẬT TRẮC ĐỊA CHUYÊN NGHIỆP CHO CÁC CÔNG TY</Text>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </Container>
        );
    }
}