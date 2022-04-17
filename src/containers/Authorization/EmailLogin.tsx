import React, {cloneElement} from "react";
import {View} from "react-native";
import NormalInput from "../../components/Input/NormalInput";
import TransColorBox from "../../components/Box/TransColorBox";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import {RegisterStepText, RegisterText} from "../../assets/style/StyledComponents";
import ForgetButton from "../../components/Button/ForgetButton";
import {useNavigation} from "@react-navigation/native";


const EmailLogin: React.FunctionComponent = () => {
    const navigation = useNavigation()
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: '#fff'}}>
            <View style={{marginLeft: wp(8), marginBottom: hp(2),marginTop: 42}}>
                <RegisterText>로그인 하기</RegisterText>
            </View>
            <View style={{ alignItems: "center"}}>
                <NormalInput placeholderText={'example@email.com'}/>
                <NormalInput placeholderText={'소문자, 숫자 포함 6자리 이상'}/>
                <TransColorBox text={'로그인'} onPress={()=>navigation.navigate('HomeMain')} />
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                <ForgetButton title={'이메일을 몰라요'} onPress={()=>''}/>
                <ForgetButton title={'비밀번호를 몰라요'} onPress={()=>''}/>
            </View>
        </View>
    )
}

export default EmailLogin
