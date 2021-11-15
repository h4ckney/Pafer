import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


interface Props {
    text: string
    transBoolean?: boolean
}

const TransColorBox: React.FunctionComponent<Props> = ({text, transBoolean}) => {

    return(
         <TouchableOpacity style={{width: wp(84), height: hp(8), backgroundColor: transBoolean ? '#1a3ac4' : '#f5f5f5', borderRadius: 8, justifyContent: "center"}} >
            <Text style={{textAlign: "center", color: '#c2c2c2', fontSize: wp(3.5), fontWeight: "bold"}}>{text}</Text>
         </TouchableOpacity>
    )
}


export default TransColorBox
