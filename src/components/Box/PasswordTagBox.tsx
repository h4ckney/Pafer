import React from "react";
import {Image, Text, View} from "react-native";

interface Props {
    tag: string | undefined
    thumbnail: string | undefined
    title: string
    id: string
}


const PasswordTagBox: React.FunctionComponent = () => {
    return(
        <View style={{display: "flex", flexDirection: "row"}}>
            <View style={{borderStyle: "solid", borderWidth: 1, borderColor: "#efefef", borderRadius: 100}}>
                {
                    // <Image source={""}/>
                    <Text>넷</Text>
                }
            </View>
            <View>
                <Text>넷플릭스</Text>
                <Text>test@gmail.com</Text>
            </View>
            {/*<Image source={""}/>*/}
        </View>
    )
}

export default PasswordTagBox
