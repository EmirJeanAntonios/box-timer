import {FunctionComponent, useCallback} from 'react';
import Divider from '../../components/Divider';
import InputSection from '../../components/InputSection';
import {Button, Div, Icon} from 'react-native-magnus';
import BannerWithText from '../../components/BannerWithText';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {useTimerStore} from '../../store/timer';
import {GestureResponderEvent} from 'react-native';
interface IndexProps {
  navigation: NavigationProp<ParamListBase>;
}

const Index: FunctionComponent<IndexProps> = ({navigation}) => {
  const {
    restPerRound,
    round,
    workoutPerRound,
    setRestPerRound,
    setRound,
    setWorkoutPerRound,
  } = useTimerStore();

  const increaseByType = useCallback(
    (e: GestureResponderEvent, type?: 'work' | 'rest') => {
      switch (type) {
        case 'rest':
          setRestPerRound(5);
          break;
        case 'work':
          setWorkoutPerRound(5);
          break;
        default:
          setRound(1);
          break;
      }
    },
    [],
  );

  const decreaseByType = useCallback(
    (e: GestureResponderEvent, type?: 'work' | 'rest') => {
      switch (type) {
        case 'rest':
          setRestPerRound(-5);
          break;
        case 'work':
          setWorkoutPerRound(-5);
          break;
        default:
          setRound(-1);
          break;
      }
    },
    [],
  );

  return (
    <>
      <InputSection
        value={workoutPerRound}
        onPlusClick={e => increaseByType(e, 'work')}
        onMinusClick={e => decreaseByType(e, 'work')}
        hasInput
        isTime
        subTitle="Round Length"
        icon={
          <Icon
            name="dumbbell"
            fontFamily="FontAwesome5"
            fontSize={35}
            color="blue500"
          />
        }
      />
      <Divider />
      <InputSection
        value={restPerRound}
        hasInput
        isTime
        subTitle="Rest Time"
        onPlusClick={e => increaseByType(e, 'rest')}
        onMinusClick={e => decreaseByType(e, 'rest')}
        icon={
          <Icon
            name="bed"
            fontFamily="FontAwesome5"
            fontSize={35}
            color="blue500"
          />
        }
      />
      <Divider />
      <InputSection
        value={round}
        hasInput
        subTitle="Rounds"
        onPlusClick={e => increaseByType(e)}
        onMinusClick={e => decreaseByType(e)}
        icon={
          <Icon
            name="clock"
            fontFamily="FontAwesome5"
            fontSize={35}
            color="blue500"
          />
        }
      />
      <Divider />
      <Div row justifyContent="center" py={20}>
        <Button
          onPress={() => navigation.navigate('Timer')}
          bg="blue500"
          h={50}
          w={50}
          disabled={restPerRound === 0 || workoutPerRound === 0 || round === 0}
          rounded="circle">
          <Icon name="play" fontFamily="FontAwesome5" color="white" />
        </Button>
      </Div>
    </>
  );
};

export default Index;
