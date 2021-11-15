import React from "react";
import {Text, View} from "react-native";
import NormalInput from "../../components/Input/NormalInput";
import TransColorBox from "../../components/Box/TransColorBox";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const EmailRegister: React.FunctionComponent = () => {
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
            <View style={{marginLeft: wp(8), marginBottom: hp(2)}}>
                <Text>1/3 단계</Text>
                <Text>이메일 입력하기</Text>
            </View>
            <View style={{ alignItems: "center"}}>
                <NormalInput placeholderText={'이메일'}/>
                <TransColorBox text={'계속하기'}/>
            </View>
        </View>
    )
}

export default EmailRegister
