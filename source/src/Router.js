import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from './../screens/Home';
import Menu from './../screens/Menu';

export const DKStack = createStackNavigator({
    HomeScreen: {
        screen: Home
    },
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
