import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../containers/Authorization/Login";
import {NavigationContainer} from "@react-navigation/native";
import EmailLogin from "../containers/Authorization/EmailLogin";
import EmailRegister from "../containers/Authorization/EmailRegister";
import PasswordRegister from "../containers/Authorization/PasswordRegister";
import AuthorizationCode from "../containers/Authorization/AuthorizationCode";
import logo from "../assets/img/logo.png"
import {Image} from "react-native";

const Stack = createStackNavigator();

const RootNavigation: React.FunctionComponent = () => {

    return(
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerTitle: ()=> <Image source={logo}></Image>, headerTitleStyle: { color: '#1a3ac4' }, headerTitleAlign: 'center'}}>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="EmailLogin" component={EmailLogin}/>
            <Stack.Screen name="EmailRegister" component={EmailRegister}/>
            <Stack.Screen name="PasswordRegister" component={PasswordRegister}/>
            <Stack.Screen name="AuthorizationCode" component={AuthorizationCode}/>
        </Stack.Navigator>
    )
}

export default RootNavigation
