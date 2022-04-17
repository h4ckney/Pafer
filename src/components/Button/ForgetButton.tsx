import React from 'react';
import Styled from "styled-components/native";

interface Props {
    title: string
    onPress: () => void
}


const ForgetButton: React.FunctionComponent<Props> = ({title, onPress}) => {
    return (
        <RadiusBox onPress={onPress}>
            <TitleText>{title}</TitleText>
        </RadiusBox>
    );
};

const RadiusBox = Styled.TouchableOpacity`
  width: 141px;
  height: 32px;
  margin-left: 6px;
  border-radius: 12px;
  background-color: #f6f6ff;
  justify-content: center;
`

const TitleText = Styled.Text`
    font-family: NotoSansKR-Regular;
    font-size: 13px;
    color: #1a3ac4;
    text-align: center;
`


export default ForgetButton;