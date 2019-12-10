import React, {Component} from 'react';
import {
	View,
	Text,
	ImageBackground,
	Image,
	TouchableOpacity,
	StyleSheet,
    TextInput,
    ScrollView,
    StatusBar
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';

export default class TimKiem1 extends Component {

    render(){

        return(
            <ScrollView>
                <View style = {mainStyle.header4}>
                    <View style = {mainStyle.buttonBack2} >
                        <TouchableOpacity>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, width:25, resizeMode:'contain',zIndex:1}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader2}>
                        <Text style = {mainStyle.textHeader2}>Tìm kiếm dịch vụ</Text>
                    </View>
                </View>
                <View style = {mainStyle.body4}>
                    <View style = {mainStyle.content1_body4}>
                        <Image source = {require('../assets/slide.png')} style = {mainStyle.slideShow}></Image>
                        <Text style = {{position:'absolute', bottom:80,left:'40%',color:'#fff',fontSize:20}}>SlideShow</Text>
                    </View>
                    <View style = {mainStyle.content2_body4}>
                        <Image source = {require('../assets/map.png')} style = {mainStyle.map}></Image>
                        <Text style = {{position:'absolute', top:150,left:'40%',color:'black',fontSize:25}}>Thiếu map</Text>
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
        );
    }
}