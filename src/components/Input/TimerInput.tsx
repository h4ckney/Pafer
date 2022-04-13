import React, {useState} from "react";
import {Text, TextInput, View} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface Props {
    placeholderText?: string
    text?: string
    onChange?: () => void
}

const TimerInput: React.FunctionComponent<Props> = ({placeholderText, text, onChange}) => {
    const [minutes, setMinutes] = useState<number>(3);
    const [seconds, setSeconds] = useState<number>(0);

    React.useEffect(() => {
        const countdown = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(countdown);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000);
        return () => clearInterval(countdown);
    }, [minutes, seconds]);

    return(
        <View>
            <TextInput style={{width: wp(84), height: hp(6), backgroundColor: '#f8f8fb', marginBottom: hp(2), borderRadius: 8, padding: wp(4)}} placeholder={placeholderText} />
            {/*<Text>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</Text>*/}
        </View>
    )
}

export default TimerInput
