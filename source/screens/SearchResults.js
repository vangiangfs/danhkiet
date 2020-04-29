import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Dimensions, ActivityIndicator, Linking, Platform }from 'react-native';
import { Container } from "native-base";

import HeaderBase from '../screens/template/HeaderBase';
import {getStorage} from '../src/api/storage';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
// import { MapView, Marker } from "expo";
import mainStyle from '../src/styles/Style';
import {getSearchResults, saveCallTechnical} from '../src/api/apiGlobal';

export default class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isMapReady: false,
            list: [],
            page: 1,
            refreshing: false,
            allow_more: true,
            loading: true,
            user: {
                version: 'guest',
                id: 0,
                latitude: 21.032711,
                longitude: 105.850525
            },
            country_id: 66,
            city_id: 0,
            district_id: 0,
            ward_id: 0,
            fullname: '',
            mobile: '',
            summary: '',
        }
        
        this.arr = [];
    }

    componentDidMount(){
        const {country_id, city_id, district_id, ward_id, fullname, mobile, summary} = this.props.navigation.state.params;

        getStorage('user')
        .then(user => { 
            if(user != ''){
                let arrUser = JSON.parse(user);
                this.setState({user:arrUser, isMapReady: true, country_id, city_id, district_id, ward_id, fullname, mobile, summary}, this.makeRemoteRequest);
            }else
                this.props.navigation.navigate('HomeScreen');
        });
    }

    makeRemoteRequest = () => {
		if(this.state.allow_more == false)
			return false;

		const {country_id, city_id, district_id, ward_id, fullname, mobile} = this.state;

        this.setState({ loading: true});
		
		getSearchResults(country_id, city_id, district_id, ward_id, fullname, mobile, this.state.page)
        .then(resJSON => {
			const {list, error } = resJSON;

			if(error == false){
				this.arr = this.arr.concat(list);
				this.setState({
					list: this.arr, 
					loading: false, 
					refreshing: false, 
				});
			}else{
				this.setState({ 
					loading: false, 
					allow_more: false,
					refreshing: false
				});
			}
        }).catch(err => {
			this.setState({ loading: false });
		});
    }

    handleLoadMore = () => {
		if(this.state.allow_more == false)
			return false;

        this.setState({
            page: this.state.page + 1
        },
        () => {
            this.makeRemoteRequest();
        });
    };
    
    renderLoading  = () => {
        if (!this.state.loading) {
			if(this.state.list.length > 0)
				return null;
			else{
				return (
					<View style={{paddingVertical: 20, alignItems: 'center'}}>
						<Text>Chưa có dữ liệu...</Text>
					</View>
				);
			}
		}

        return (
            <View style={{paddingVertical: 20}}>
                <ActivityIndicator animating size="large" />
            </View>
        );
	};

    callTechnical(tech_id, tech_mobile){
        const {country_id, city_id, district_id, ward_id, fullname, mobile, summary} = this.state;

        saveCallTechnical(this.state.user.id, tech_id, country_id, city_id, district_id, ward_id, fullname, mobile, summary).then((json) => {
            console.log(json);
        }).done();

        Linking.openURL(`tel:${tech_mobile}`);

        return false;
    }

    render(){
        const {navigation} = this.props; 

        return(
            <Container>
                <HeaderBase page="home" title={'Tìm kiếm dịch vụ'} navigation={navigation} />
                <ScrollView showsVerticalScrollIndicator={false}>
                    {this.state.isMapReady?
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
                                }}>
                                    <Image source = {require('../assets/map-center.png')} style={mainStyle.fMapCenter} />
                                </Marker>
                                {this.state.list.map((item, index)=>{ return(
                                    <Marker key={index}
                                    coordinate={{
                                        latitude: parseFloat(item.latitude),
                                        longitude: parseFloat(item.longitude),
                                    }}>
                                        <Image source = {require('../assets/map-point.png')} style={mainStyle.fMapPoint} />
                                    </Marker>
                                    )})
                                }
                        </MapView>
                    :null}
                    <FlatList  style = {{margin:10}} 
                        data = {this.state.list} 
                        renderItem = {({item}) =>
                            <View key={item.id} style = {mainStyle.oneLine}>
                                <View style = {mainStyle.oneLine_left}>
                                    <TouchableOpacity
                                        onPress= { () => this.callTechnical(item.id, item.mobile)}>
                                        <Image source={require('../assets/no-avatar.png')} style={mainStyle.fSRAvatar} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={mainStyle.fSRNameBtn} 
                                        onPress= { () => this.callTechnical(item.id, item.mobile)}>
                                        <Text style={mainStyle.fSRNameText}>{item.name}</Text>
                                        {item.vip=='1'?<Text style={mainStyle.fSRNameVip}>Đã xác thực</Text>:null}
                                    </TouchableOpacity>    
                                </View>
                                <View style = {mainStyle.oneLine_right}>
                                    <View style = {mainStyle.khoangcach} >
                                        <Text style = {{textAlign:'center', color:'#999999', fontSize:11}}>Khoảng cách</Text>
                                        <Text style = {{textAlign:'center', fontSize: 11}}>{item.distance} km</Text>
                                    </View>
                                    <View style = {mainStyle.iconCall}>
                                        <TouchableOpacity onPress= { () => this.callTechnical(item.id, item.mobile)}>
                                            <Image source = {require('../assets/iconCall.png')} style = {{width:35, height:35, resizeMode:'cover'}}></Image>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                        }
                        keyExtractor={(item, index) => index.toString()}
                        refreshing={this.state.refreshing}
						ListFooterComponent={this.renderLoading}  
						keyExtractor={item => item.id}
						onEndReached={this.handleLoadMore}
						onEndReachedThreshold={0.25}
                    />
                </ScrollView>
            </Container>
        );
    }
}

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const textFontSize = 10/standarWidth * width;
const textName = 12/standarWidth * width;