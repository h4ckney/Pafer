import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styled from "styled-components/native";

interface Props {
    text: string
    transBoolean?: boolean
    onPress?: ()=>void
}

const TransColorBox: React.FunctionComponent<Props> = ({text, transBoolean,onPress}) => {

    return(
         <ColorTouchBox style={{backgroundColor: transBoolean ? '#1a3ac4' : '#92a6f8', borderRadius: 12, justifyContent: "center"}} onPress={onPress} >
            <Text style={{textAlign: "center", color: transBoolean ? '#c2c2c2' : `rgba(255,255,255,8)`, fontSize: 18, fontWeight: "bold"}}>{text}</Text>
         </ColorTouchBox>
    )
}

const ColorTouchBox = Styled.TouchableOpacity<{BGColor?: string}>`
    backgroundColor: ${(props)=> props.BGColor ? props.BGColor : '#fff'};
    width: ${wp(84)};
    height: ${hp(6)}; 
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center;
    border-radius: 12;
`


export default TransColorBox
