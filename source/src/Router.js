import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './../screens/Home';
import Menu from './../screens/Menu';
import Register from './../screens/member/Register';
import RegisterSuccess from './../screens/member/RegisterSuccess';
import ForgotPassword from './../screens/member/ForgotPassword';
import Login from './../screens/member/Login';
import Member from './../screens/member/Member';
import Home2 from './../screens/member/Home2';
import MemberInfo from './../screens/member/MemberInfo';
import TransactionHistories from './../screens/member/TransactionHistories';
import ChangePassword from './../screens/member/ChangePassword';
import ClickStatistics from './../screens/member/ClickStatistics';
import WorksMeasure from './../screens/member/WorksMeasure';
import TermsUse from './../screens/member/TermsUse';
import AccountExtension from './../screens/member/AccountExtension';
import CalledList from './../screens/member/CalledList';
import Search from './../screens/Search';
import SearchResults from './../screens/SearchResults';
import RequestVIP from './../screens/member/RequestVIP';

export const DKStack = createStackNavigator({
    HomeScreen: {
        screen: Home
    },
    Home2Screen: {
        screen: Home2
    },
    RegisterScreen: {
        screen: Register
    },
    ForgotPasswordScreen: {
        screen: ForgotPassword
    },
    RegisterSuccessScreen: {
        screen: RegisterSuccess
    },
    MemberScreen: {
        screen: Member
    },
    MemberInfoScreen: {
        screen: MemberInfo
    },
    TransactionHistoriesScreen: {
        screen: TransactionHistories
    },
    ChangePasswordScreen: {
        screen: ChangePassword
    },
    ClickStatisticsScreen: {
        screen: ClickStatistics
    },
    WorksMeasureScreen: {
        screen: WorksMeasure
    },
    TermsUseScreen: {
        screen: TermsUse
    },
    AccountExtensionScreen: {
        screen: AccountExtension
    },
    CalledListScreen: {
        screen: CalledList
    },
    LoginScreen: {
        screen: Login
    },
    SearchScreen: {
        screen: Search
    },
    SearchResultsScreen: {
        screen: SearchResults
    },
    RequestVIPScreen: {
        screen: RequestVIP
    }
}, {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    navigationOptions: {
        headerStyle: {
            shadowOpacity: 0,
            shadowOffset: {
              height: 0
            },
            shadowRadius: 0,
            borderBottomWidth: 0,
            elevation: 0
        }
    }
   }
);

export const DKMenu = createDrawerNavigator({
    Tabbar: {
        screen: DKStack,
    }
},{
    drawerWidth: 300,
    drawerPosition: 'left',
    contentComponent: props => <Menu {...props} />
});