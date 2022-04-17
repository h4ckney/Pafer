import React from "react";
import {Image, Text, View} from "react-native";
import LoginBox from "../../components/Box/LoginBox";
import logo from "../../assets/img/logo.png";
import icon from '../../assets/img/blue_icon.png';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from "@react-navigation/native";

const Login: React.FunctionComponent = () => {
     const navigation = useNavigation()

    return(
        <View style={{ alignItems: "center", backgroundColor: '#fff', width: '100%', height:'100%'}}>
                <Image source={logo} style={{marginTop: 175}}/>
                <Text style={{textAlign: "center", fontSize: 21, marginTop: 20, fontWeight: '500'}}>{'비밀번호를 효율적으로 \n관리하세요!'}</Text>
            <View style={{marginTop: 278, alignItems: "center"}}>
                <LoginBox BGColor={'#1a3ac4'} TextColor={'white'} onPress={()=>navigation.navigate('EmailRegister')} Img={icon} text={'이메일로 가입하기'} />
                <Text style={{color: 'black'}}>이미 계정이 있으신가요? 이메일로 <Text style={{color:'blue'}} onPress={()=>navigation.navigate('EmailLogin')}>로그인</Text> 하기</Text>
            </View>
        </View>
    )
}

export default Login
