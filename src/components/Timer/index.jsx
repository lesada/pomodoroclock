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
  const [timeRemaining, setTimeRemaining] = useState(form.focusLength * 60);
  const [customInterval, setCustomInterval] = useState();

  useEffect(() => {
    setTimeRemaining(form.focusLength * 60);
  }, [form]);

  const startTimer = () => {
    setIsPaused(false);
    setCustomInterval(() =>
      setInterval(() => {
        setTimeRemaining(prev => {
          if (prev - 1 > 0) return prev - 1;
          else return 0;
        });
      }, 1000),
    );
  };

  const stopTimer = () => {
    setIsPaused(true);
    if (customInterval) clearInterval(customInterval);
  };

  const openModal = () => {
    stopTimer();
    setIsModalVisible(true);
    setTimeRemaining(0);
  };

  return (
    <Container>
      <State>
        <MaterialCommunityIcons name="brain" color={'#471515'} size={15} />
        <StateText>Focus</StateText>
      </State>
      <Time>
        {Math.floor(timeRemaining / 60) > 9
          ? Math.floor(timeRemaining / 60)
          : '0' + Math.floor(timeRemaining / 60)}
      </Time>
      <Time>
        {Math.floor(timeRemaining % 60) > 9
          ? Math.floor(timeRemaining % 60)
          : '0' + Math.floor(timeRemaining % 60)}
      </Time>
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
