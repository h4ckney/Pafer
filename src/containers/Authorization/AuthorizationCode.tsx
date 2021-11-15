import React from "react";
import {Text, View} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import NormalInput from "../../components/Input/NormalInput";
import TransColorBox from "../../components/Box/TransColorBox";
import LoginBox from "../../components/Box/LoginBox";
import TimerInput from "../../components/Input/TimerInput";

const AuthorizationCode: React.FunctionComponent = () => {
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
            <View style={{marginLeft: wp(8), marginBottom: hp(2)}}>
                <Text>3/3 단계</Text>
                <Text>메일함을 확인해주세요!</Text>
            </View>
            <View style={{ alignItems: "center"}}>
                <TimerInput placeholderText={'인증 코드'}/>
                <TransColorBox text={'확인'}/>
                <LoginBox text={"이메일 재전송"} BGColor={"#f6f6ff"}/>
            </View>
        </View>
    )
}

export default AuthorizationCode
