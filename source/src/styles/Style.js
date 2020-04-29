import { StyleSheet, PixelRatio, Dimensions, Platform, StatusBar } from 'react-native';
import mainStyle from './mainStyle';
import Constants from 'expo-constants';

const {height, width} = Dimensions.get('window');
const standarWidth = 360;
const standarHeight = 592;

const buttonHeight = 10/standarHeight * height;

export default { 
    ...mainStyle,
    headerBase:{
        paddingTop: Constants.statusBarHeight,
        height: buttonHeight * 5 + Constants.statusBarHeight,
    },
    mapViewDefault: {
        height: width*9/16,
    },
    fContainInput:{
        flexDirection:'row',
        backgroundColor:'#ffffff',
        width:'100%',
        height:buttonHeight * 4,
        borderRadius:30,
        justifyContent:'space-between',
        paddingRight:20,
        marginTop:10,
        marginBottom:5,
        paddingLeft: 12,
    },
    fContainInputIcon:{
        height: buttonHeight * 4,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        width: 20
    },
    fContainPicker:{
        height:buttonHeight * 4,
        paddingLeft: 0,
    },
    fContainPickerItem:{
        alignItems:'center',
        textAlign: 'center'
    },
    fInputText:{
        height: buttonHeight * 4,
        textAlign: 'left',
        width:'90%',
    },
    fMapCenter:{
        height: 32,
        width: 32
    },
    fMapPoint:{
        height: 35,
        width: 35*61/70
    },
    fSRAvatar:{
        height: 70 , 
        width: 70
    },
    fSRNameBtn:{
        justifyContent:'center',
        alignItems:'center'
    },
    fSRNameText:{
        fontWeight:'bold',
        fontSize: 14,
        textAlign:'center',
        marginLeft:2
    },
    fSRNameVip:{
        fontSize: 14,
        textAlign:'center',
        marginLeft: 10,
        color: '#f42535'
    },
    fCalledItemThumb:{
        justifyContent:'center',
        width: 95
    },
    im:{
        color: '#f42535'
    }
}
