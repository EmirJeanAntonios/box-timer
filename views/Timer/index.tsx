import {FunctionComponent, useEffect, useMemo, useState} from 'react';

import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {Div, Text} from 'react-native-magnus';
import {useTimerStore} from '../../store/timer';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface TimerProps {
  navigation: NavigationProp<ParamListBase>;
}

const Timer: FunctionComponent<TimerProps> = ({navigation}) => {
  const {restPerRound, round: totalRound, workoutPerRound} = useTimerStore();

  const [round, setRound] = useState(0);
  const [timer, setTimer] = useState(3);
  const [isFightMode, setIsFightMode] = useState(true);

  const [isTrainingStarted, setIsTrainingStarted] = useState(false);

  const onCountDownTimerUpdate = (remainingTime: number) => {
    if (round == 0 && remainingTime == 0) {
      setIsTrainingStarted(true);
      setRound(prev => prev + 1);
      setTimer(workoutPerRound);
      return;
    }

    if (remainingTime == 0) {
      if (totalRound === round) {
        navigation.navigate('Home');
      }

      if (totalRound > 1) {
        if (isFightMode) {
          setTimer(restPerRound);
        } else {
          setRound(prev => prev + 1);
          setTimer(workoutPerRound);
        }
        setIsFightMode(!isFightMode);
      }
    }
  };

  return (
    <Div my={20} h={'100%'}>
      <Div style={{alignItems: 'center'}}>
        {isTrainingStarted ? (
          <>
            <Text fontSize={25}>{isFightMode ? 'Fight' : 'Rest'}</Text>
            <Text fontSize={20}>
              {round} / {totalRound}
            </Text>
          </>
        ) : (
          <Text fontSize={25}>Get Ready!</Text>
        )}
      </Div>
      <Div mt={40} justifyContent="center" alignItems="center">
        <CountdownCircleTimer
          key={Math.random()}
          isPlaying
          onUpdate={onCountDownTimerUpdate}
          duration={timer}
          colors={['#004777', '#F7B801', '#A30000', '#A30000']}
          colorsTime={[7, 5, 2, 0]}
          size={300}>
          {({remainingTime}) => <Text fontSize={50}>{remainingTime}</Text>}
        </CountdownCircleTimer>
      </Div>
    </Div>
  );
};

export default Timer;
