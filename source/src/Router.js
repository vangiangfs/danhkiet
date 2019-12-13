import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './../screens/Home';
import Menu from './../screens/Menu';
import Register from './../screens/member/Register';
import RegisterSuccess from './../screens/member/RegisterSuccess';
import Login from './../screens/member/Login';
import Search from './../screens/Search';
import SearchResults from './../screens/SearchResults';

export const DKStack = createStackNavigator({
    HomeScreen: {
        screen: Home
    },
    RegisterScreen: {
        screen: Register
    },
    RegisterSuccessScreen: {
        screen: RegisterSuccess
    },
    LoginScreen: {
        screen: Login
    },
    SearchScreen: {
        screen: Search
    },
    SearchResultsScreen: {
        screen: SearchResults
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