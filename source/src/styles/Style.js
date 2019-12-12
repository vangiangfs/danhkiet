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
    }
}
