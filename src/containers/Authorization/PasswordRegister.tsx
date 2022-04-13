import React from "react";
import {Text, View} from "react-native";
import NormalInput from "../../components/Input/NormalInput";
import TransColorBox from "../../components/Box/TransColorBox";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {RegisterStepText, RegisterText} from "../../assets/style/StyledComponents"
import {useNavigation} from "@react-navigation/native";

const PasswordRegister: React.FunctionComponent = () => {
    const navigation = useNavigation()

    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
            <View style={{marginLeft: wp(8), marginBottom: hp(2),marginTop: 42.5}}>
                <RegisterStepText>2/3 단계</RegisterStepText>
                <RegisterText>비밀번호 입력하기</RegisterText>
            </View>
            <View style={{ alignItems: "center"}}>
                <NormalInput placeholderText={'이메일'}/>
                <NormalInput placeholderText={'비밀번호'}/>
                <NormalInput placeholderText={'비밀번호 확인'}/>
                <TransColorBox text={'이메일 전송'} onPress={()=>navigation.navigate('AuthorizationCode')}/>
            </View>
        </View>
    )
}

export default PasswordRegister
