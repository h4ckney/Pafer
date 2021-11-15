import React from "react";
import {TextInput, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
    placeholderText?: string
    text?: string
    onChange?: () => void
}

const NormalInput: React.FunctionComponent<Props> = ({placeholderText, text, onChange}) => {

    return(
        <TextInput style={{width: wp(84), height: hp(9), backgroundColor: '#f8f8fb', marginBottom: hp(2), borderRadius: 8, padding: wp(4)}} placeholder={placeholderText}/>
    )
}

export default NormalInput
