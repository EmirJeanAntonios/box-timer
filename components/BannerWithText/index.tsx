import {FunctionComponent} from 'react';
import {Div, Text} from 'react-native-magnus';

type BannerWithTextProps = {
  title: string;
  backgroundColor: string | "blue500";
  color: 'white' | string;
};

const BannerWithText: FunctionComponent<BannerWithTextProps> = props => {
  return (
    <Div bg={props.backgroundColor} py={10} px={20}>
      <Text fontSize={25} color={props.color}>
        {props.title}
      </Text>
    </Div>
  );
};

export default BannerWithText;
