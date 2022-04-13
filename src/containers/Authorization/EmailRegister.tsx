import React from "react";
import {Text, View} from "react-native";
import NormalInput from "../../components/Input/NormalInput";
import TransColorBox from "../../components/Box/TransColorBox";
import {RegisterStepText, RegisterText} from "../../assets/style/StyledComponents"
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from "@react-navigation/native";


const EmailRegister: React.FunctionComponent = () => {
    const navigation = useNavigation()

    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
            <View style={{marginLeft: wp(8), marginBottom: hp(2), marginTop: 42.5}}>
                <RegisterStepText>1/3 단계</RegisterStepText>
                <RegisterText>이메일 입력</RegisterText>
            </View>
            <View style={{ alignItems: "center"}}>
                <NormalInput placeholderText={'example@email.com'}/>
                <TransColorBox text={'계속하기'} onPress={()=>navigation.navigate('PasswordRegister')}/>
            </View>
        </View>
    )
}

export default EmailRegister
