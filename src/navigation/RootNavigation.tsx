import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import Login from "../containers/Authorization/Login";
import {NavigationContainer} from "@react-navigation/native";
import EmailLogin from "../containers/Authorization/EmailLogin";
import EmailRegister from "../containers/Authorization/EmailRegister";
import PasswordRegister from "../containers/Authorization/PasswordRegister";
import AuthorizationCode from "../containers/Authorization/AuthorizationCode";

const Stack = createStackNavigator();

const RootNavigation: React.FunctionComponent = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator  initialRouteName='Login' screenOptions={{title: 'Pafer', headerTitleStyle: { color: '#1a3ac4' }, headerTitleAlign: 'center'}}>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="EmailLogin" component={EmailLogin}/>
                <Stack.Screen name="EmailRegister" component={EmailRegister}/>
                <Stack.Screen name="PasswordRegister" component={PasswordRegister}/>
                <Stack.Screen name="AuthorizationCode" component={AuthorizationCode}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation
