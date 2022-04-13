import React from "react";
import {Image, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styled from "styled-components/native";

interface Props {
    BGColor?: string
    TextColor?: string
    onPress?: ()=>void
    Img?: ImageSourcePropType
    text?: string
}


const LoginBox: React.FunctionComponent<Props> = ({BGColor,TextColor, onPress, Img, text}) => {

    return(
        <TouchBox onPress={onPress} BGColor={BGColor}>
            <Image source={Img ?? {uri: ''}} style={{width: 21, height: 21, }} />
            <Text style={{color: TextColor, fontSize: 18, fontFamily: 'NotoSansKR-Bold'}}>{text}</Text>
        </TouchBox>
    )
}

const TouchBox = Styled.TouchableOpacity<{BGColor?: string}>`
    backgroundColor: ${(props)=> props.BGColor ? props.BGColor : '#fff'};
    width: ${wp(84)};
    height: ${hp(6)}; 
    margin-bottom: ${hp(2)};
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    border-radius: 12;
`

export default LoginBox
