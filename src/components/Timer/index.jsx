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

    focusLength: 25,
    pomodoros: 3,
    shortBreak: 5,
    longBreak: 10,
  });

  return (
    <Container>
      <State>
        <MaterialCommunityIcons name="brain" color={'#471515'} size={15} />
        <StateText>Focus</StateText>
      </State>
      <Time>25</Time>
      <Time>00</Time>
      <WrapperButtons>
        <SecondaryButton onPress={() => setIsModalVisible(true)}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            color={'#471515'}
            size={35}
          />
        </SecondaryButton>
        <PrimaryButton onPress={() => console.log('play')}>
          <MaterialCommunityIcons name="play" color={'#471515'} size={35} />
        </PrimaryButton>
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
