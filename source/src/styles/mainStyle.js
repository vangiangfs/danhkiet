import {StyleSheet,Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;
const text10 = 10/standarWidth * width;
const text12 = 12/standarWidth * width;
const text14 = 14/standarWidth * width;
const text17 = 17/standarWidth * width;
const buttonWidth = 150/standarWidth * width;
const buttonHeight = 10/standarHeight * height;
const marginBottom = 10/standarHeight * height;
const padding = 10/standarWidth * width;
const margin = 20/standarWidth * width;

const heightBound = (height > heightBound)?(heightBound):height;
const widthBound = (height == heightBound)?((height*720)/ 1280):width;

export default StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    container4:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#f0f0f0',
    },
    logo_home:{
        width:(((width*1280) / 720) * 200) /1280, 
        height:(((width*1280) / 720) * 250) /1280,
        resizeMode:'contain'
    },
    content_1:{     
        flex:5,
        flexDirection:'column',
        margin:margin,
    },
    content_2:{
        flex:3,
        marginTop:margin*2,
        marginLeft:margin,
        marginRight:margin,
        marginBottom:margin,
        flexDirection:'column',
        justifyContent:'space-around'
    },
    content_1a:{
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    content_1b:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:margin,
    },
    textContent_1b:{
        color:'#ffffff',
        fontSize: text14,
    },
    home_banLaKhachHang:{
        color:'#000000',
        fontSize:text12
    },
    home_banLaKyThuat:{
        color:'#ffffff',
        fontSize:text12
    },
    content_1c:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    content_1c_login:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
    },
    button_1__Content_1c:{
        width:'49%',
        height:buttonHeight*4,
        borderRadius:30,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginRight:3,
    },
    button_2__Content_1c:{
        width:'49%',
        height:buttonHeight *4,
        borderRadius:30,
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        marginLeft:3,
        justifyContent:'center',
    },
    content_2a:{
        width:'100%',
    },
    content_2b:{
        width:'100%',
    },
    content_2c:{
        width:'100%',
        alignItems:'center'
    },
    buttonSignIn:{
        borderRadius:30,
        backgroundColor:'white',
        alignItems:'center',
        padding:15
    },
    textButtonSignIn:{
        color:'#f42535',fontWeight:'bold',
        fontSize:text14,
    },
    buttonSignUp:{
        borderRadius:30,
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        padding:15,
    },
    textButtonSignUp:{
        color:'#ffffff',fontWeight:'bold',
        fontSize:text14,
    },
    inputTaiKhoan:{
        backgroundColor:'#ffffff',
        borderRadius:30,
        flexDirection:'row',
        padding:10,
        marginBottom:5,
        justifyContent:'flex-start',
    },
    inputMatKhau:{
        marginTop:5,
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:30,
        flexDirection:'row',
        justifyContent:'flex-start',
        padding:10,
    },
    imageTextInput:{
        flex:1,
        height:20,
        width:20,
        resizeMode:'contain',

    },
    textInputLoginClient:{
        flex:10,
        textAlign:'center'
    },
    content_1_LoginClient:{
        flex:5,
        flexDirection:'column',
        margin:margin,
    },
    content_2_LoginClient:{
        flex:4,
        marginTop:60,
        marginLeft:margin,
        marginRight:margin,
        marginBottom:margin,
        flexDirection:'column',
        justifyContent:'space-around'
    },
    content_2a_LoginClient:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    content_2b_LoginClient:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:margin,
    },
    buttonDangNhap:{
        width:'60%',
        backgroundColor:'white',
        alignItems:'center',
        borderRadius:30,
        padding:10,
    },
    content_2c_LoginClient:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    banLaKyThuat_LoginClient:{
        borderRadius:30,
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        width:'60%' ,
        padding:10
    },
    banLakhachHang_LoginClient:{
        borderRadius:30,
        backgroundColor:'rgba(0,0,0,0.3)',
        alignItems:'center',
        width:'60%',
        padding:10
    },
    header:{
        marginTop:0,
    },
    header5:{
        marginTop:0,
        flex:3,
    },
    body5:{
        flex:6,
        justifyContent:'flex-start',
    },
    body6:{
        flex:6,
        justifyContent:'flex-start',
        padding:padding,
        marginTop:margin,
    },
    body5_content1:{
        marginTop:margin*3,
        marginBottom:margin,
        alignItems:'center'
    },
    textBody5_content2:{
        textAlign:'center',
        fontSize:text10,
    },
    textBody5_content3:{
        textAlign:'center',
        fontSize:text10,
        color:'red',
        fontWeight:'bold'
    },
    body5_content2:{
        alignItems:'center'
    },
    textBody5_content1:{
        textAlign:'center',
        fontWeight:'bold',
        fontSize:text17,
    },
    footer5:{
        flex:1,
        backgroundColor:'#f42535',
    },
    buttonBack:{
        position: 'absolute',
        top:30,
        left:20,
        flexDirection:'row',
        width:'100%',
    },
    containTextHeader:{
        position:'absolute',
        top:30,
        left:'25%',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    containTextHeader3:{
        position:'absolute',
        top:30,
        left:'30%',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    containTextHeader4:{
        position:'absolute',
        top:30,
        left:'15%',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    },
    containTextHeader2:{
        alignItems:'center',
        flex:9,
        marginTop:35,
    },
    textHeader2:{
        color:'#ffffff',
        fontSize:text14,
        fontWeight:'bold',
        textAlign:'center'
    },
    textHeader:{
        color:'#ffffff',
        fontSize:text14,
        fontWeight:'bold',
        textAlign:'center'
    },
    body:{
        marginTop:25,
        padding:20
    },
    body7:{
        marginTop:30,
    },
    titleInput:{
        color:'#999999',
        margin:0,
        padding:0,
        fontSize:12,
    },
    input100Percents:{
        borderBottomColor: '#999999',
        borderBottomWidth:1,
        width:'100%',
        height:50,
        margin:0,
    },
    phone:{
        marginTop:10,
        marginBottom:10,
    },
    password:{
        marginTop:10,
        marginBottom:10,
    },
    againPassword:{
        marginTop:10,
        marginBottom:10,
    },
    address:{
        marginTop:10,
        marginBottom:10,
    },
    left:{
        width:'45%' ,
    },
    right:{
        width :'45%'
    },
    buttonDangKy:{
        backgroundColor:'#f42535',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonDangNhap2:{
        backgroundColor:'#f42535',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    textButtonDangKy:{
        color:'#ffffff',
        fontSize:text17,
        fontWeight:'bold',
    },
    email:{
        marginTop:10,
        marginBottom:10,
    },
    leftAndRight:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:10,
    },
    container2:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#f0f0f0'
    },
    buttonBack2:{
        marginTop:35,
        marginLeft:20,
    },
    container3:{
        flex:1,
        backgroundColor:'#ffffff',
        flexDirection:'column'
    },
    header2:{
        flex:3,
        backgroundColor:'red',
        margin:0,padding:0,
    },
    header3:{
        flex:1,
        backgroundColor:'#f42535',
        margin:0,
        flexDirection:'row'
    },
    body2:{
        flex:7,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingTop:buttonHeight*100,
    },
    body3:{
        flex:7,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:padding*4,
    },
    footer2:{
        flex:1,
        width:'100%',
        height:'100%'
    },
    footer:{
        width:'100%',
        height:80 * standarHeight/height,
        justifyContent:'center',
        alignItems:'center',

    },
    footer4:{
        width:'100%',
        height:buttonHeight * 5,
        justifyContent:'center',
        alignItems:'center',
        marginTop:0
    },
    buttonNhapEmail:{
        width:'70%',
        borderRadius:30,
        backgroundColor:"#ffffff",
        textAlign:'center',
        height:buttonHeight * 4,
        marginTop:20,
    },
    buttonNhapMatKhau1:{
        width:'70%',
        borderRadius:30,
        backgroundColor:"#ffffff",
        textAlign:'center',
        height:buttonHeight * 4,
        marginTop:20,
    },
    header4:{
        width:'100%',
        height:buttonHeight* 7,
        backgroundColor:'#f42535',
        margin:0,
        flexDirection:'row'
    },
    body4:{
        flex:7,
        flexDirection:'column',
        backgroundColor:'#f1f1f1',
    },
    content1_body4:{
        padding:0,
        margin:0,
    },
    content2_body4:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
    },
    content3_body4:{
        backgroundColor:'#ffffff',
        borderRadius:30,
        height:margin*2,
        borderColor:'red',
        borderWidth:1,
        marginTop:10,
        marginLeft:20,
        marginRight:20,
        paddingLeft:10,
        paddingRight:10,
        justifyContent:'center',
        marginBottom:20,
    },
    content4_body4:{
        marginTop:10,
        marginBottom:10,
        justifyContent:'center',
        alignItems:'center'
    },
    slideShow:{
        width:'100%',
        height:200,
        resizeMode:'stretch',
    },
    map:{
        width:'100%',
        height:250 * standarHeight/height,
        resizeMode:'stretch',
        marginBottom:10,
    },
    iconTextInput:{
        width:20,
        height:20,
        resizeMode:'center',
        alignItems:'center'
    },
    inputText:{
        width:'80%',
        textAlign:'center'
    },
    containTextInput2:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        width:'100%',
        height:buttonHeight * 4,
        borderRadius:30,
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        marginTop:10,
        marginBottom:5,
   },
    textArea:{
        backgroundColor:'#ffffff',
        width:'100%',
        borderRadius:30,
        justifyContent:'flex-start',
        marginTop:10,
        marginBottom:5,
    },
    textArea2:{
        backgroundColor:'#ffffff',
        width:'100%',
        justifyContent:'flex-start',
        marginTop:10,
        marginBottom:5,
        borderWidth:1,
        borderColor:'red'
    },
    containIconTextInput:{
        justifyContent:'center',
        width:'5%'
    },
    buttonYes_TimKiem:{
        justifyContent:'center',
        width:'30%',
        backgroundColor:'#f42535',
        alignItems:'center',
        padding:10,
        borderRadius:30,
    },
    map2:{
        width:'100%',
        height: 0.3 * height,
        resizeMode:'stretch',
    },
    oneLine:{
        borderBottomWidth:1,
        borderBottomColor:'#dddddd',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:15,
        paddingBottom:15
    },
    oneLine_left:{
        width:'50%',
        flexDirection:'row',

    },
    oneLine_right:{
        width:'40%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    khoangcach:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    iconCall:{
        justifyContent:'center',
        alignItems:'center'
    },
    oneLine_1:{
        width:((heightBound) * 138) /1280,
        justifyContent:'center'
    },
    oneLine_2:{
        width:((heightBound) * 430) /1280,
        flexDirection:'column'
    },
    oneLine_3:{
        width:((heightBound) * 70) /1280,
        justifyContent:'center'
    },
    lichSuGiaoDich:{
        backgroundColor: '#f1f1f1'
    },
    monthYear:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:margin /2 ,
    },
    month:{
        width:'49%',
        backgroundColor:'#ffffff',
        flexDirection : 'row',
        justifyContent:'space-between',
        padding:padding,
        borderRadius:5
    },
    year:{
        width:'49.5%',
        backgroundColor:'#ffffff',
        flexDirection : 'row',
        justifyContent:'space-between',
        padding:padding,
        borderRadius:5
    },
    iconDown:{
        width:15* standarWidth/width,
        height:15*standarHeight/height,
        resizeMode:'contain'
    },
    titleFlatList:{
        borderBottomWidth :1,
        borderColor:'#dddddd',
        backgroundColor:'#ffffff',
        padding:padding,
        marginLeft:margin/2,
        marginRight:margin/2,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    containerFlatList:{
        backgroundColor:'#ffffff',
        marginLeft:margin/2,
        marginRight:margin/2,
        marginBottom:margin,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    row:{
        flexDirection:'row',
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        marginLeft:margin/2,
        marginRight:margin/2,
        paddingTop:padding,
        paddingBottom:padding,
        justifyContent:'space-between',
    },
    row1:{
        flexDirection:'column',
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        marginLeft:margin/2,
        marginRight:margin/2,
        paddingTop:padding,
        paddingBottom:padding,
    },
    row1a:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    row1b:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    itemIDClick:{
        fontSize:text10,
    },
    itemAddress:{
        fontSize:text10,
        textAlign:'right'
    },
    FlatListContent_1:{
        width:'50%',
        flexDirection:'column',
    },
    row1b_left:{
        flex:2,
    },
    row1b_right:{
        flex:8,
    },
    containItemTitle:{
        borderBottomWidth :1,
        borderColor:'#dddddd',
        backgroundColor:'#ffffff',
        padding:padding,
        marginLeft:margin/2,
        marginRight:margin/2,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    ItemTitle:{
        fontWeight:'bold',
        fontSize:15
    },
    FlatListContent_2:{
        
    },
    textButtonChiTiet:{
        color:'red',
        fontSize:text12,
    },
    textItemName:{
        color:'#999999',
        fontSize:text14,
    },
    textItemMoney:{
        fontWeight:'bold',
        fontSize:text14,
    },
    chiTietCongTrinh:{
        marginTop:8 * buttonHeight,
        marginLeft:margin,
        marginRight:margin,
    },
    name_taiKhoan:{
        justifyContent:'center',
        flex:1
    },
    name_taiKhoan2:{
        justifyContent:'center',
        flex:1,
        marginLeft:20,
        marginRight:20,
    },
    backGroundGrey:{
        backgroundColor:'#f0f0f0',
        padding:padding,
        marginTop:5,
    },
    buttonGoiDien:{
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'red',
        padding:padding,
        borderRadius:30,
        flexDirection:'row'
    },
    buttonDanhGia:{
        alignItems:'center',
        justifyContent:'space-around',
        borderColor:'#d5d5d5',
        borderWidth:2,
        padding:padding,
        borderRadius:30,
        flexDirection:'row'
    },
    content_goi_1:{
        flex:5, 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    content_goi_2:{
        flex:2,
        justifyContent:'flex-start',
        alignItems:'center'
    },
    content_goi_3:{
        flex:2,
        flexDirection:'row',
        marginLeft:20,
        marginRight:20,
        justifyContent:'space-between',
        alignItems:'center'
    },
    content_goi_4:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
    },
    iconGoi2:{
        width:'40%',
        height:60,
        backgroundColor:'#ffffff',
        borderRadius:30,
        alignItems:'center',
        justifyContent:'center'

    },
    content_goi_3a:{
        width:'30%',
        alignItems:'center'
    },
    content_goi_3b:{
        width:'30%',
        alignItems:'center'
    },
    content_goi_3c:{
        width:'30%',
        alignItems:'center'
    },
    iconGoi:{
        backgroundColor:'rgba(0,0,0,0.8)',justifyContent:'center', alignItems:'center', 
        width:80, height:80,
        borderRadius:40,
    },
    iconGoi_checked:{
        backgroundColor:'#ffffff',justifyContent:'center', alignItems:'center', 
        width:80, height:80,
        borderRadius:40,
    },
    body4_content1:{
        flex:4,
        justifyContent:'center',
        alignItems:'center'
    },
    body4_content2:{
        flex:6,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'column'
    },
    body4_content2b_1:{
        backgroundColor:'red', width:'31%', height:0.12*height, justifyContent:'center',alignItems:'center',
        borderRadius:5
    },
    body4_content2b_2:{
        backgroundColor:'white', width:'31%', height:0.12*height, justifyContent:'center',alignItems:'center',
        borderRadius:5,
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
    },
    hinhThuc_bank1:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffffff',
        margin:20,
        padding:20,
    },
    hinhThuc_bank2:{
        justifyContent:'center',
        alignItems:'center',
    },
    theTinDung:{
        backgroundColor:'#ffffff',
        margin:10,
        padding:10,
    },
    ngayThang:{
        height: 60 * standarHeight/height,flexDirection:'row', marginTop:10, marginBottom:10, justifyContent:'space-between',
    },
    ngay:{
        flexDirection:'row', height:60* standarHeight/height, width:'49%', borderColor:'#999999', borderWidth:1, borderRadius :5,
        paddingLeft:10, paddingRight:10,
    },
    inputTheTinDung:{
        flexDirection:'row', width:'100%', height: 60 * standarHeight/height, borderColor:'#999999', borderWidth:1, borderRadius :5,
        paddingLeft:10,paddingRight:10,
    },
    button1_TheTinDung:{
        width:'100%', backgroundColor:'red', height: 60 * standarHeight/height, justifyContent:'center', borderRadius:5, marginTop:10
    },
    button2_TheTinDung:{
        width:'100%', backgroundColor:'white', height: 60 * standarHeight/height, justifyContent:'center'
    },
    imageVisa:{
        width:60* standarWidth/width,
        height:50 * standarHeight/height,
        resizeMode:'contain'
    },
    containImageVisa:{
        marginTop:10,
        marginRight:10,
    },
    imagefooter:{
        width:'100%', height:'100%', resizeMode:'contain'
    },
    containImageFooter:{
        width:'15%', height:'100%', marginLeft:5, marginRight:5,
    },
    avatar:{
        position:'absolute',
        height: ((heightBound) * 500) /1280,
        width: widthBound/2,
        top: ((heightBound) * 362) /640 + ((heightBound) * 110) /1280, left:0,
        zIndex:1,
    },
    redColor:{
        color:'#f42535'
    },
    logoHome:{
        alignItems:'center',
        position:'absolute', top:((heightBound) * 100) /1280, right:0,
        height:  ((heightBound) * 500) /1280,
        width: width /2,
        zIndex:3
    },
    boundImg:{
        width: widthBound,
        height: heightBound,
        position: 'absolute',
        bottom: 0,
        left:0 ,
        resizeMode:'stretch',
        zIndex:2
    },
    boundBtn_1:{
        marginTop: ((heightBound) * 110) /1280,
        height: ((heightBound) * 362) /1280,
        width: widthBound / 2,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        top:0, left:0,
    },
    boundBtn_2:{
        position:'absolute',
        height: ((heightBound) * 362) /1280,
        width: widthBound / 2,
        top:((heightBound) * 362) /2560 + ((heightBound) * 110) /1280, left:((heightBound) * 360) /2560,
        alignItems:'center',
        justifyContent:'center',
    },
    boundBtn_3:{
        position:'absolute',
        height: ((heightBound) * 362) /1280,
        width: widthBound / 2,
        top:((heightBound) * 362) /1280 + ((heightBound) * 110) /1280, left:0,
        alignItems:'center',
        justifyContent:'center',
    },
    boundBtn_4:{
        position:'absolute',
        height: ((heightBound) * 362) /1280,
        width: widthBound / 2,
        top:((heightBound) * 362) /1280 + ((heightBound) * 110) /1280, left: ((heightBound) * 360) /1280,
        alignItems:'center',
        justifyContent:'center',
    },
    boundBtn_5:{
        position:'absolute',
        height: ((heightBound) * 362) /1280,
        width: widthBound / 2,
        top: 3*((heightBound) * 362) /2560 + ((heightBound) * 110) /1280, left:((heightBound) * 360) /2560,
        alignItems:'center',
        justifyContent:'center',
    },
    boundBtn_6:{
        position:'absolute',
        height: ((heightBound) * 362) /1280,
        width: widthBound / 2,
        top: ((heightBound) * 355) /640 + ((heightBound) * 110) /1280, left: ((heightBound) * 360) /1280,
        alignItems:'center',
        justifyContent:'center',
    },
    iconBtn:{
        width:((heightBound) * 66)/1280, height:((heightBound) * 66)/1280, resizeMode:'contain'
    },
    btnNameUnderAvatar:{
        marginLeft:((heightBound) * 35) /1280, marginTop:5
    },
    btnUnderName:{
        flexDirection:'row',marginLeft:((heightBound) * 35) /1280, marginTop:5
    },
    avatarBound:{
        marginTop: ((heightBound) * 69) /1280, 
        marginLeft:((heightBound) * 89) /1280
    }
});