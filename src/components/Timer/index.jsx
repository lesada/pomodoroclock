import React, {useState, useEffect} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  State,
  StateText,
  Time,
  WrapperButtons,
  PrimaryButton,
  SecondaryButton,
} from './styles';

import Settings from '../Settings';

function Timer() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [form, setForm] = useState({
    darkMode: false,
    autoResume: false,
    sound: false,

    focusLength: 1,
    pomodoros: 3,
    shortBreak: 5,
    longBreak: 10,
  });

  const [isPaused, setIsPaused] = useState(true);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(form.focusLength);
  const [customInterval, setCustomInterval] = useState();

  useEffect(() => {
    setMinutes(form.focusLength);
  }, [form]);

  const startTimer = () => {
    setIsPaused(false);
    setCustomInterval(() =>
      setInterval(() => {
        changeTimer();
      }, 100),
    );
  };

  const stopTimer = () => {
    setIsPaused(true);
    if (customInterval) clearInterval(customInterval);
  };

  const openModal = () => {
    stopTimer();
    setIsModalVisible(true);
    setSeconds(0);
  };

  const changeTimer = () => {
    setSeconds(prevSec => {
      if (prevSec - 1 < 0) {
        setMinutes(prevMin => {
          if (prevMin - 1 < 0) return 0;
          else return prevMin - 1;
        });
        return 59;
      } else return prevSec - 1;
    });
  };

  return (
    <Container>
      <State>
        <MaterialCommunityIcons name="brain" color={'#471515'} size={15} />
        <StateText>Focus</StateText>
      </State>
      <Time>{minutes < 10 ? '0' + minutes : minutes}</Time>
      <Time>{seconds < 10 ? '0' + seconds : seconds}</Time>
      <WrapperButtons>
        <SecondaryButton onPress={openModal}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            color={'#471515'}
            size={35}
          />
        </SecondaryButton>
        {isPaused ? (
          <PrimaryButton onPress={() => startTimer()}>
            <MaterialCommunityIcons name="play" color={'#471515'} size={35} />
          </PrimaryButton>
        ) : (
          <PrimaryButton onPress={() => stopTimer()}>
            <MaterialCommunityIcons name="pause" color={'#471515'} size={35} />
          </PrimaryButton>
        )}
        <SecondaryButton onPress={() => console.log('skip')}>
          <MaterialCommunityIcons
            name="skip-next"
            color={'#471515'}
            size={35}
          />
        </SecondaryButton>
      </WrapperButtons>
      <Settings
        settingsForm={setForm}
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
      />
    </Container>
  );
}

export default Timer;
