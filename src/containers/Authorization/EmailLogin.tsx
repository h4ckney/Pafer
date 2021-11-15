import React from "react";
import {View} from "react-native";
import NormalInput from "../../components/Input/NormalInput";
import TransColorBox from "../../components/Box/TransColorBox";


const EmailLogin: React.FunctionComponent = () => {
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff', alignItems: "center"}}>
            <NormalInput placeholderText={'이메일'}/>
            <NormalInput placeholderText={'비밀번호'}/>
            <TransColorBox text={'로그인'}/>
        </View>
    )
}

export default EmailLogin
