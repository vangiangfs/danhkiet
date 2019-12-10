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
    StatusBar,
    Dimensions
}
from 'react-native';
import mainStyle from '../src/styles/mainStyle';

export default class ThongTinTaiKhoanKyThuat extends Component{
	render() {
		return (
            <ScrollView>
                <View style = {mainStyle.header}>
                    <Image source= {require('../assets/backGroundImage3.png')} style ={{height:0.3* height,width:'100%',resizeMode:'cover'}}></Image>
                    <View style = {mainStyle.buttonBack}>
                        <TouchableOpacity>
                            <Image source = {require('../assets/iconBack.png')} style = {{width:25, height:25, resizeMode:'contain'}}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.containTextHeader}>
                        <Text style = {mainStyle.textHeader}>Thông tin tài khoản</Text>
                    </View>
                    <View>
                        <Image source = {require('../assets/avatar2.png')} 
                        style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                        resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                    </View>
                </View>
                <View style = {mainStyle.body}>
                    <View style ={mainStyle.name_taiKhoan}>
                        <Text style = {{textAlign:'center',fontWeight:'bold',fontSize:text16}}>Nguyễn Bích Vân</Text>
                        <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <Text style = {{textAlign:'center'}}>Hiệu lực tài khoản:  </Text>
                                <Text style = {{textAlign:'center', color:'#f42535'}}>30 ngày</Text>
                        </View>
                        <TouchableOpacity style = {{alignItems:'center',justifyContent:'center'}}>
                            <Text style= {{color:'#00aeef'}}>Gia hạn tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {mainStyle.phone}>
                        <Text style = {mainStyle.titleInput}>Số điện thoại</Text>
                        <TextInput style = {mainStyle.input100Percents} value="0373160139"/>
                    </View>
                    <View style = {mainStyle.email}>
                        <Text style = {mainStyle.titleInput}>Email của bạn</Text>
                        <TextInput style = {mainStyle.input100Percents} value="nguyenbichvan@gmail.com"/>
                    </View>
                    <View style = {mainStyle.leftAndRight}>
                        <View style = {mainStyle.left}>
                            <Text style = {mainStyle.titleInput}>Tỉnh/Thành Phố</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "Hà Nội"/>
                        </View>
                        <View style = {mainStyle.right}>
                            <Text style = {mainStyle.titleInput}>Quận/Huyện</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "Quận Cầu Giấy"/>
                        </View>
                    </View>
                    <View style = {mainStyle.address}>
                        <Text style = {mainStyle.titleInput}>Địa Chỉ</Text>
                        <TextInput style = {mainStyle.input100Percents} value="Ngõ 66, Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội"/>
                    </View>
                    <View style = {mainStyle.leftAndRight}>
                        <View style = {mainStyle.left}>
                            <Text style = {mainStyle.titleInput}>Sinh Ngày</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "11/09/1996"/>
                        </View>
                        <View style = {mainStyle.right}>
                            <Text style = {mainStyle.titleInput}>Giới Tính</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "Nữ"/>
                        </View>
                    </View>
                    <View style = {mainStyle.leftAndRight}>
                        <View style = {mainStyle.left}>
                            <Text style = {mainStyle.titleInput}>Phí dịch vụ</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "11/09/1996"/>
                        </View>
                        <View style = {mainStyle.right}>
                            <Text style = {mainStyle.titleInput}>Loại máy sử dụng</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "Nữ"/>
                        </View>
                    </View>
                    <View style = {mainStyle.leftAndRight}>
                        <View style = {mainStyle.left}>
                            <View>
                            <Text style = {mainStyle.titleInput}>Bằng cấp, giấy chứng chỉ</Text>
                            </View>
                        </View>
                        <View style = {mainStyle.right}>
                            <View>
                            <Text style = {mainStyle.titleInput}>Giấy chứng nhận</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {mainStyle.leftAndRight}>
                        <View style = {mainStyle.left}>
                            <TouchableOpacity style = {{width:'100%',height:100 * standarHeight/height, backgroundColor:'#f0f0f0'}}>
                                <Image source = {require('../assets/image1_signUp.png')} style = {{height:'100%', resizeMode:'contain'}}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style = {mainStyle.right}>
                            <TouchableOpacity style = {{width:'100%',height:100 * standarHeight/height,backgroundColor:'#f0f0f0'}}>
                                <Image source = {require('../assets/image2_signUp.png')} style = {{height:'100%', resizeMode:'contain'}}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {mainStyle.address}>
                        <Text style = {mainStyle.titleInput}>Kinh nghiệm làm việc</Text>
                        <View style = {mainStyle.backGroundGrey}>
                            <Text>Có kinh nghiệm 20 năm trong ngành đo đạc và xây dựng các công trình đo đạc và xây dựng các công trình lớn trong và ngoài nước.</Text>
                        </View>
                    </View>
                    <View style = {mainStyle.address}>
                        <Text style = {mainStyle.titleInput}>Công trình đã làm</Text>
                        <View style = {mainStyle.backGroundGrey}>
                            <Text>Nhà Quốc Hội, Trung tâm Hội nghị Quốc gia Việt Nam, Sân vận động quốc gia Mỹ Đình, Keangnam Hanoi Landmark Tower, Lotte Center Hanoi, Bitexco Financial Tower.</Text>
                        </View>
                    </View>
                </View>
                <View style = {mainStyle.footer}>
                    <TouchableOpacity style = {mainStyle.buttonDangKy} >
                        <Text style ={mainStyle.textButtonDangKy}>CHỈNH SỬA</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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