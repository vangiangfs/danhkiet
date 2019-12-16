import React, {Component} from 'react';
import {View,Text,Image,TouchableOpacity,ScrollView,FlatList,Dimensions,ActivityIndicator} from 'react-native';
import mainStyle from '../../src/styles/mainStyle';
import { Container } from "native-base";

import HeaderBase from '../../screens/template/HeaderBase';
import {getStorage} from '../../src/api/storage';
import {getWorksMeasure} from '../../src/api/apiMember';

const DATA2 = [
    {
        name : 'Lê Thái Bảo',
        address:'Ngõ 23, Hai Bà Trưng, Hà Nội',
        content: 'Mình cần đo khu đất của gia đình (10 giờ ngày mai nhé)'
    },
    {
        name : 'Lưu Thanh Thủy',
        address:'Ngõ 23, Hai Bà Trưng, Hà Nội',
        content: 'Mình cần đo khu đất của gia đình (10 giờ ngày mai nhé)'
    },
    {
        name : 'Trần Thị Mai Anh',
        address:'Ngõ 23, Hai Bà Trưng, Hà Nội',
        content: 'Mình cần đo khu đất của gia đình (10 giờ ngày mai nhé)'
    },
];
const DATA1 = [
    {
        title:'Ngày 20 tháng 9 2019',
    },
    {
        title:'Ngày 19 tháng 9 2019',
    },
];



export default class WorksMeasure extends Component {
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
                console.log(arrUser);
                this.setState({user:arrUser}, this.makeRemoteRequest);
            }else
                this.props.navigation.navigate('HomeScreen');
        });
    }

    makeRemoteRequest = () => {
        if(this.state.allow_more == false)
            return false;
    
        this.setState({ loading: true});
        
        getWorksMeasure(this.state.user.id, this.state.page)
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
                <HeaderBase page="home" title={'Công trình cần đo'} navigation={navigation} />
                <ScrollView style = {mainStyle.lichSuGiaoDich}> 
                    <View style = {mainStyle.monthYear}>
                        <TouchableOpacity style = {mainStyle.month}>
                            <Text>Tháng</Text>
                            <View style = {{justifyContent:'center'}}>
                                <Image source = {require('../../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {mainStyle.year}>
                            <Text>Năm</Text>
                            <View style = {{justifyContent:'center'}}>
                                <Image source = {require('../../assets/iconDown.png')} style = {mainStyle.iconDown}></Image>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <FlatList style = {mainStyle.containerFlatList} data = {this.state.list} renderItem = {({item}) =>
                        <View style = {mainStyle.row1}>
                            <View>
                                <Text style = {{color:'#999999',fontSize:12}}>Họ và tên:</Text>
                                <Text style = {{fontSize:12}}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style = {{color:'#999999',fontSize:12}}>Địa chỉ cần đo:</Text>
                                <Text style = {{fontSize:12}}>{item.address}</Text>
                            </View>
                            <View>
                                <Text style = {{color:'#999999',fontSize:12}}>Nội dung công việc</Text>
                                <Text style = {{fontSize:12}}>{item.summary}</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style = {{color:'#00aeef',fontSize:12}}>Xem chi tiết</Text>
                            </TouchableOpacity>
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