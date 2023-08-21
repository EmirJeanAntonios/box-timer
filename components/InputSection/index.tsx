import React, {useState} from 'react';
import {Div, Text} from 'react-native-magnus';
import PlusMinusButton from '../PlusMinusButton';
import {numberToTime} from '../../utils/numberToTimeConverter';
import {GestureResponderEvent} from 'react-native-modal';

type InputSectionProps = {
  subTitle: string;
  icon?: JSX.Element;
  hasInput: boolean;
  isTime?: boolean;
  onPlusClick: (event: GestureResponderEvent) => void;
  onMinusClick: (event: GestureResponderEvent) => void;
  value: number;
};

function InputSection({value = 0, ...props}: InputSectionProps): JSX.Element {
  return (
    <Div row justifyContent="space-between" p={16}>
      <Div alignItems="center" row style={{gap: 10}} justifyContent="center">
        <Div style={{flexBasis: 50}}>{props.icon}</Div>
        <Div>
          <Text fontSize={25}>
            {props.isTime ? numberToTime(value) : value}
          </Text>
          <Text fontSize={15} m={0}>
            {props.subTitle}
          </Text>
        </Div>
      </Div>
      <Div>
        <PlusMinusButton
          onMinusClick={props.onMinusClick}
          onPlusClick={props.onPlusClick}
          minusDisabled={value == 0}
        />
      </Div>
    </Div>
  );
}

export default InputSection;
