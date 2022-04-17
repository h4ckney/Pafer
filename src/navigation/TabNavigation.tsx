import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from "./HomeNavigation";
import {NavigationContainer} from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={'Home'}>
            <Tab.Screen name="Home" component={HomeNavigation} />
            {/*<Tab.Screen name="Field" component={F}/>*/}
            {/*<Tab.Screen name="Settings" component={Settin?} />*/}
        </Tab.Navigator>
    );
};

export default TabNavigation;