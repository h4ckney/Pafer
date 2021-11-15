import React from "react";
import {Image, Text, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
    BGColor?: string
    Img?: string
    text?: string
}


const LoginBox: React.FunctionComponent<Props> = ({BGColor, Img, text}) => {

    return(
        <View style={{width: wp(84), height: hp(8),  backgroundColor: BGColor ? BGColor : '#fff', marginBottom: hp(2), display: 'flex', flexDirection: 'row', justifyContent: "center", alignItems: "center", borderRadius: 8 }}>
            <Image source={{uri:'https://swtpumpkin.github.io/image/reactNative-navigation-header-hide-2.png'}} style={{width: 15, height: 15}} />
            <Text>{text}</Text>
        </View>
    )
}

export default LoginBox
