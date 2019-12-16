import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,FlatList,Dimensions}from 'react-native';
import mainStyle from '../../src/styles/mainStyle';

const DATA = [
    {
        name: 'Vũ Ngọc Châm',
        dichVu :'Đo đạc',
        phiDichVu:'200.000đ/ngày',
        diaChi:'Hà Nội',
        ID:'1',

    },
    {
        name: 'Vũ Giáng Ly',
        dichVu :'Đo đạc',
        phiDichVu:'200.000đ/ngày',
        diaChi:'Hà Nội',
        ID:'2'
    },
    {
        name: 'Lưu Thanh Thủy',
        dichVu :'Đo đạc',
        phiDichVu:'200.000đ/ngày',
        diaChi:'Hà Nội',
        ID:'2'
    },
    {
        name: 'Huỳnh Kim Ngân',
        dichVu :'Đo đạc',
        phiDichVu:'200.000đ/ngày',
        diaChi:'Hà Nội',
        ID:'4'
    },
    {
        name: 'Huỳnh Kim Ngân',
        dichVu :'Đo đạc',
        phiDichVu:'200.000đ/ngày',
        diaChi:'Hà Nội',
        ID:'5'
    },
    {
        name: 'Huỳnh Kim Ngân',
        dichVu :'Đo đạc',
        phiDichVu:'200.000đ/ngày',
        diaChi:'Hà Nội',
        ID:'6'
    },
    {
        name: 'Huỳnh Kim Ngân',
        dichVu :'Đo đạc',
        phiDichVu:'200.000đ/ngày',
        diaChi:'Hà Nội',
        ID:'7'
    },
];

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
        const {country_id, city_id, district_id, ward_id, fullname, mobile, summary} = this.props.navigation.state.params;

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
		
		getCalledList(this.state.user.id)
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
    
    render(){
        return(
            <ScrollView>
                <View style = {mainStyle.header4}>
                    <View style = {mainStyle.buttonBack2} >
                        <TouchableOpacity onPress = {() => alert('Icon Back')}>
                            <Image source = {require('../../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader2}>
                        <Text style = {mainStyle.textHeader2}>Danh sách đã gọi</Text>
                    </View>
                </View>
                <FlatList  style = {{marginLeft:20,marginRight:20}} data = {DATA} renderItem = {({item}) =>
                    <View style = {mainStyle.oneLine}>
                        <View style = {mainStyle.fCalledItemThumb}>
                            <TouchableOpacity>
                                <Image source = {require('../../assets/avatar.png')} style = {{height:80 , width:80}}/>
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
                                    <Text style = {{fontSize: textFontSize}}>{item.dichVu}</Text> 
                                </View>
                                <View style = {{flexDirection:'row'}}>
                                    <View style = {{justifyContent:'center'}}>
                                        <Image source = {require('../../assets/iconPhiDichVu.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                    </View>
                                    <Text style = {{color:'#999999',fontSize:textFontSize}}> Phí Dịch Vụ: </Text>
                                    <Text style = {{fontSize: textFontSize}}>{item.phiDichVu}</Text>
                                </View>
                                <View style = {{flexDirection:'row'}}>
                                    <View style = {{justifyContent:'center'}}>
                                        <Image source = {require('../../assets/iconLocation.png')} style = {{height:15,width:15,resizeMode:'center'}}></Image>
                                    </View>
                                    <Text style = {{color:'#999999',fontSize:textFontSize}}> Địa chỉ: </Text>
                                    <Text style = {{fontSize: textFontSize}}>{item.diaChi}</Text>
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
                                <TouchableOpacity onPress= { () => alert('Call')}>
                                    <Image source = {require('../../assets/iconCall.png')} style = {{width:35, height:35, resizeMode:'cover'}}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                    }
                    keyExtractor={(item, index) => index.toString()}
                    />
            </ScrollView>
        );
    }
}
const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const textFontSize = 10/standarWidth * width;
const textName = 14/standarWidth * width;