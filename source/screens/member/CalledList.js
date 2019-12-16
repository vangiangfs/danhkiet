import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,FlatList,Dimensions,ActivityIndicator}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';
import { Container } from "native-base";

import {getStorage} from '../../src/api/storage';
import {getCalledList} from '../../src/api/apiMember';
import HeaderBase from '../../screens/template/HeaderBase';

export default class CalledList extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        }
        
        this.arr = [];
    }

    componentDidMount(){
        getStorage('user')
        .then(user => { 
            if(user != ''){
                let arrUser = JSON.parse(user);
                this.setState({user:arrUser}, this.makeRemoteRequest);
            }else
                this.props.navigation.navigate('HomeScreen');
        });
    }

    makeRemoteRequest = () => {
		if(this.state.allow_more == false)
			return false;

        this.setState({ loading: true});
		
		getCalledList(this.state.user.id, this.state.page)
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
        Linking.openURL(`tel:${tech_mobile}`);
        return false;
    }

    render(){
        const {navigation} = this.props;
        return(
            <Container>
                <HeaderBase page="home" title={'Danh sách đã gọi'} navigation={navigation} />
                <ScrollView>
                    <FlatList  style = {{marginLeft:20,marginRight:20}} data = {this.state.list} renderItem = {({item}) =>
                        <View style = {mainStyle.oneLine}>
                            <View style = {mainStyle.fCalledItemThumb}>
                                <TouchableOpacity>
                                    <Image source = {require('../../assets/no-avatar.png')} style = {{height:80 , width:80}}/>
                                </TouchableOpacity>
                            </View>
                            <View style = {mainStyle.oneLine_2}>
                                    <TouchableOpacity onPress= { () => alert(item.name)}>
                                        <Text style = {{fontWeight:'bold',fontSize:textName}}>{item.name}</Text>
                                    </TouchableOpacity>
                                    <View style = {{flexDirection:'row'}}>
                                        <View style = {{justifyContent:'center'}}>
                                            <Image source = {require('../../assets/iconDichVu.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                        </View>
                                        <Text style = {{color:'#999999',fontSize:textFontSize}}> Dịch Vụ: </Text>
                                        <Text style = {{fontSize: textFontSize}}>Đo đạc</Text> 
                                    </View>
                                    <View style = {{flexDirection:'row'}}>
                                        <View style = {{justifyContent:'center'}}>
                                            <Image source = {require('../../assets/iconPhiDichVu.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                        </View>
                                        <Text style = {{color:'#999999',fontSize:textFontSize}}> Phí Dịch Vụ: </Text>
                                        <Text style = {{fontSize: textFontSize}}>{item.service_charge}</Text>
                                    </View>
                                    <View style = {{flexDirection:'row'}}>
                                        <View style = {{justifyContent:'center'}}>
                                            <Image source = {require('../../assets/iconLocation.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                        </View>
                                        <Text style = {{color:'#999999',fontSize:textFontSize}}> Địa chỉ: </Text>
                                        <Text style = {{fontSize: textFontSize}}>{item.city_name}</Text>
                                    </View>
                                    <View style = {{flexDirection:'row'}}>
                                        <View style = {{justifyContent:'center'}}>
                                            <Image source = {require('../../assets/iconDanhGia.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                        </View>
                                        <View style = {{flexDirection:'row'}}>
                                            <Image source = {require('../../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                            <Image source = {require('../../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                            <Image source = {require('../../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                            <Image source = {require('../../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                            <Image source = {require('../../assets/iconStar.png')} style = {{height:15,width:15,resizeMode:'stretch'}}></Image>
                                        </View>
                                    </View>
                            </View>   
                            <View style = {mainStyle.oneLine_3}>
                                <View style = {mainStyle.iconCall}>
                                    <TouchableOpacity onPress= { () => this.callTechnical(item.id, item.mobile)}>
                                        <Image source = {require('../../assets/iconCall.png')} style = {{width:35, height:35, resizeMode:'cover'}}></Image>
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
const textName = 14/standarWidth * width;