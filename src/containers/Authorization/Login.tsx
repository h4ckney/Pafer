import React from "react";
import {Image, Text, View} from "react-native";
import LoginBox from "../../components/Box/LoginBox";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Login: React.FunctionComponent = () => {


    return(
        <View style={{ alignItems: "center", backgroundColor: '#fff', width: '100%', height:'100%'}}>
                <Text style={{color: '#1a3ac4'}}>Pafer</Text>
                <Text style={{textAlign: "center"}}>{'비밀번호를 효율적으로 \n관리하세요!'}</Text>
                <Image source={{uri:'https://swtpumpkin.github.io/image/reactNative-navigation-header-hide-2.png'}} style={{width: wp(20), height: hp(10)}} />
                <LoginBox BGColor={'#1a3ac4'} text={'이메일로 로그인'}/>
                <LoginBox BGColor={'#f6f6ff'} text={'생체로 로그인'}/>
                <Text>첫 방문이신가요? 이메일로 <Text style={{color:'blue'}}>회원가입</Text> 하기</Text>
                <LoginBox text={'구글로 시작하기'} />
                <LoginBox text={'카카오로 시작하기'}/>
        </View>
    )
}

export default Login
