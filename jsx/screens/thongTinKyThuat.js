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

export default class ThongTinKyThuat extends Component{
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
                        <Text style = {mainStyle.textHeader}>Thông tin kỹ thuật viên</Text>
                    </View>
                    <View>
                        <Image source = {require('../assets/avatar2.png')} 
                        style = {{position:'absolute', height: 150* standarHeight/height, width:150* standarWidth/width,
                        resizeMode : 'contain',left: (width - 150* standarWidth/width) /2 ,bottom:-70* standarHeight/height }}></Image>
                    </View>
                </View>
                <View style = {mainStyle.body7}>
                    <View style ={mainStyle.name_taiKhoan2}>
                        <Text style = {{textAlign:'center',fontWeight:'bold',fontSize:text16,marginTop:15,marginBottom:15,}}>Nguyễn Bích Vân</Text>
                        <View style = {mainStyle.leftAndRight}>
                            <View style = {mainStyle.left}>
                                <TouchableOpacity style = {mainStyle.buttonGoiDien}>
                                    <View>
                                        <Image source = {require('../assets/iconPhone2.png')} style = {{width:25, height:25, resizeMode:'contain'}}></Image>
                                    </View>
                                    <Text style= {{color:'#ffffff',fontWeight:'bold'}}>Gọi Điện</Text>
                                </TouchableOpacity>
                            </View>
                            <View style = {mainStyle.right}>
                                <TouchableOpacity style = {mainStyle.buttonDanhGia}>
                                    <View>
                                        <Image source = {require('../assets/iconEdit.png')} style = {{width:25, height:25, resizeMode:'contain'}}></Image>
                                    </View>
                                    <Text style= {{}}>Đánh giá</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style = {{flexDirection:'row', marginBottom:5}}>
                            <View>
                                <Image source = {require('../assets/cole.png')} style = {{width:25, height:25, resizeMode:'contain', marginRight:5,}}></Image>
                            </View>
                            <Text style = {{color:'#666666'}}>Dịch vụ: </Text>
                            <Text>Đo đạc, Đo đạc công trình</Text>
                        </View>
                        <View style = {{flexDirection:'row', marginTop:5}}>
                            <View>
                                <Image source = {require('../assets/iconLocation2.png')} style = {{width:25, height:25, resizeMode:'contain', marginRight:5,}}></Image>
                            </View>
                            <Text style = {{color:'#666666'}}>Địa chỉ: </Text>
                            <Text>Lô 2bx3, Mỹ Đình 1, Tp. Hà Nội</Text>
                        </View>
                        <View style = {{flexDirection:'column', justifyContent:'center',alignItems:'center',marginTop:10,}}>
                            <View style = {{flexDirection:'row',}}>
                                <Image source = {require('../assets/iconStar2.png')} style = {{width:25, height:25, resizeMode:'contain', marginRight:5,}}></Image>
                                <Image source = {require('../assets/iconStar2.png')} style = {{width:25, height:25, resizeMode:'contain', marginRight:5,}}></Image>
                                <Image source = {require('../assets/iconStar2.png')} style = {{width:25, height:25, resizeMode:'contain', marginRight:5,}}></Image>
                                <Image source = {require('../assets/iconStar2.png')} style = {{width:25, height:25, resizeMode:'contain', marginRight:5,}}></Image>
                                <Image source = {require('../assets/iconStar2.png')} style = {{width:25, height:25, resizeMode:'contain', marginRight:5,}}></Image>
                            </View>
                            <View style = {{flexDirection:'row', marginTop:5}}>
                                <Text style = {{color:'#666666'}}>(Có </Text>
                                <Text>280</Text>
                                <Text style = {{color:'#666666'}}> đánh giá)</Text>
                            </View>
                            <View style = {{marginTop:10}}>
                                <Text style = {{fontWeight:'bold'}}>Phí dịch vụ: 500.000/ngày</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {{backgroundColor:'#f0f0f0',marginTop:10,paddingLeft:20,paddingRight:20,paddingTop:10,paddingBottom:10,}}>
                        <Text style = {{fontWeight:'bold'}}>GIỚI THIỆU NHÀ CUNG CẤP</Text>
                    </View>
                    <View style = {{marginTop:10,paddingLeft:20}}>
                    <View style = {mainStyle.leftAndRight}>
                        <View style = {mainStyle.left}>
                            <Text style = {mainStyle.titleInput}>Sinh Ngày</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "11/09/1996"/>
                        </View>
                        <View style = {mainStyle.right}>
                            <Text style = {mainStyle.titleInput}>Loại máy sử dụng</Text>
                            <TextInput style = {mainStyle.input100Percents} value = "Geomax ZAL20"/>
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
                            <View style = {{width:'100%',height:100 * standarHeight/height, backgroundColor:'#f0f0f0'}}>
                                <Image source = {require('../assets/image1_signUp.png')} style = {{height:'100%', resizeMode:'contain'}}></Image>
                            </View>
                        </View>
                        <View style = {mainStyle.right}>
                            <View style = {{width:'100%',height:100 * standarHeight/height,backgroundColor:'#f0f0f0'}}>
                                <Image source = {require('../assets/image2_signUp.png')} style = {{height:'100%', resizeMode:'contain'}}></Image>
                            </View>
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