import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from "@react-navigation/native";
import HomeMain from "../containers/Home/HomeMain";

const Stack = createStackNavigator();

const HomeNavigation: React.FunctionComponent = () => {

    return(
        <Stack.Navigator  initialRouteName='HomeMain' screenOptions={{title: 'Pafer', headerTitleStyle: { color: '#1a3ac4' }, headerTitleAlign: 'center'}}>
            <Stack.Screen name="HomeMain" component={HomeMain} options={{headerShown: false}} />

        </Stack.Navigator>
    )
}

export default HomeNavigation
