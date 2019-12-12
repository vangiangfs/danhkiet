import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView}from 'react-native';
import { Container} from "native-base";

import mainStyle from '../src/styles/Style';
import HeaderBase from '../screens/template/HeaderBase';

import MapView from 'react-native-maps';

export default class Search extends Component {
    


    render(){
        const {navigation} = this.props; 

        return(
            <Container>
                <HeaderBase page="home" title={'Tìm kiếm dịch vụ'} navigation={navigation} />
                <ScrollView>
                    <View style = {mainStyle.body4}>
                        <View style = {mainStyle.content1_body4}>
                            <Image source = {require('../assets/slide.png')} style = {mainStyle.slideShow}></Image>
                            <Text style = {{position:'absolute', bottom:80,left:'40%',color:'#fff',fontSize:20}}>SlideShow</Text>
                        </View>
                        <View style = {mainStyle.content2_body4}>
                            <MapView style={{height: 300}}
                                initialRegion={{
                                    latitude: 37.78825,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}/>
                            <View style = {mainStyle.containTextInput2}>
                                <View style ={mainStyle.containIconTextInput}>
                                    <Image source = {require('../assets/iconLocation2.png')} style = {mainStyle.iconTextInput}></Image>
                                </View>
                                <TextInput style = {mainStyle.inputText} placeholder = {'Chọn quốc qua'}></TextInput>
                                <View style ={mainStyle.containIconTextInput}>
                                    <TouchableOpacity>
                                        <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconTextInput}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {mainStyle.containTextInput2}>
                                <View style ={mainStyle.containIconTextInput}>
                                    <Image source = {require('../assets/iconLocation2.png')} style = {mainStyle.iconTextInput}></Image>
                                </View>
                                <TextInput style = {mainStyle.inputText} placeholder = {'Tỉnh/Thành Phố'}></TextInput>
                                <View style ={mainStyle.containIconTextInput}>
                                    <TouchableOpacity>
                                        <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconTextInput}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {mainStyle.containTextInput2}>
                                <View style ={mainStyle.containIconTextInput}>
                                    <Image source = {require('../assets/iconLocation2.png')} style = {mainStyle.iconTextInput}></Image>
                                </View>
                                <TextInput style = {mainStyle.inputText} placeholder = {'Quận/Huyện'}></TextInput>
                                <View style ={mainStyle.containIconTextInput}>
                                    <TouchableOpacity>
                                        <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconTextInput}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {mainStyle.containTextInput2}>
                                <View style ={mainStyle.containIconTextInput}>
                                    <Image source = {require('../assets/iconLocation2.png')} style = {mainStyle.iconTextInput}></Image>
                                </View>
                                <TextInput style = {mainStyle.inputText} placeholder = {'Phường/Xã'}></TextInput>
                                <View style ={mainStyle.containIconTextInput}>
                                    <TouchableOpacity>
                                        <Image source = {require('../assets/iconDown.png')} style = {mainStyle.iconTextInput}></Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style = {mainStyle.containTextInput2}>
                                <View style ={mainStyle.containIconTextInput}>
                                    <Image source = {require('../assets/iconProfile2.png')} style = {mainStyle.iconTextInput}></Image>
                                </View>
                                <TextInput style = {mainStyle.inputText} placeholder = {'Họ và tên'}></TextInput>
                                <View style ={mainStyle.containIconTextInput}>
                                </View>
                            </View>
                            <View style = {mainStyle.containTextInput2}>
                                <View style ={mainStyle.containIconTextInput}>
                                    <Image source = {require('../assets/iconPhone.png')} style = {mainStyle.iconTextInput}></Image>
                                </View>
                                <TextInput style = {mainStyle.inputText} placeholder = {'Số điện thoại'}></TextInput>
                                <View style ={mainStyle.containIconTextInput}>
                                </View>
                            </View>
                            <View style = {mainStyle.textArea}>
                                <TextInput style={{height:150,textAlign:'center'}}
                                    underlineColorAndroid="transparent"
                                    placeholder="Nội dung công việc"
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}/>
                            </View>
                        </View>
                        <View style ={mainStyle.content4_body4}>
                            <TouchableOpacity style = {mainStyle.buttonYes_TimKiem}>
                                <Text style ={mainStyle.textButtonDangKy}>OK</Text>
                            </TouchableOpacity>
                        </View>
                        <View style ={mainStyle.content3_body4}>
                            <Text style ={{fontSize:10,textAlign:'center'}}>ĐÀO TẠO KỸ THUẬT TRẮC ĐỊA CHUYÊN NGHIỆP CHO CÁC CÔNG TY</Text>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        );
    }
}