import React from "react";
import {Text, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import NormalInput from "../../components/Input/NormalInput";
import TransColorBox from "../../components/Box/TransColorBox";
import LoginBox from "../../components/Box/LoginBox";
import {RegisterStepText, RegisterText} from "../../assets/style/StyledComponents"
import TimerInput from "../../components/Input/TimerInput";

const AuthorizationCode: React.FunctionComponent = () => {
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff',}}>
            <View style={{marginLeft: wp(8), marginBottom: hp(2),marginTop: 42.5}}>
                <RegisterStepText>3/3 단계</RegisterStepText>
                <RegisterText>인증번호 입력</RegisterText>
            </View>
            <View style={{ alignItems: "center"}}>
                <TimerInput placeholderText={'인증번호'}/>
                <TransColorBox text={'확인'}/>
                <LoginBox text={"이메일 재전송"} BGColor={"#f6f6ff"} TextColor={'#1a3ac4'}/>
            </View>
        </View>
    )
}

export default AuthorizationCode
