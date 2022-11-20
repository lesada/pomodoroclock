import React, {useState} from 'react';
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
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <State>
        <MaterialCommunityIcons name="brain" color={'#471515'} size={15} />
        <StateText>Focus</StateText>
      </State>
      <Time>25</Time>
      <Time>00</Time>
      <WrapperButtons>
        <SecondaryButton onPress={() => setModalVisible(true)}>
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
      <Settings />
    </Container>
  );
}

export default Timer;
