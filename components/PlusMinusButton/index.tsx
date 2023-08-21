import React from 'react';
import {GestureResponderEvent} from 'react-native';
import {Button, Div, Icon} from 'react-native-magnus';

type PlusMinusButtonProps = {
  onPlusClick: (event: GestureResponderEvent) => void;
  onMinusClick: (event: GestureResponderEvent) => void;
  plusDisabled?: boolean;
  minusDisabled?: boolean;
};

function PlusMinusButton(props: PlusMinusButtonProps) {
  return (
    <Div
      row
      style={{
        gap: 5,
      }}>
      <Button
        onPress={props.onPlusClick}
        bg="blue500"
        h={40}
        w={40}
        disabled={props.plusDisabled}
        rounded="circle">
        <Icon name="plus" fontFamily="FontAwesome5" color="white" />
      </Button>
      <Button
        bg="blue500"
        onPress={props.onMinusClick}
        h={40}
        w={40}
        disabled={props.minusDisabled}
        rounded="circle">
        <Icon name="minus" fontFamily="FontAwesome5" color="white" />
      </Button>
    </Div>
  );
}

export default PlusMinusButton;
