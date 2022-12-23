import React, {useState, useEffect} from 'react';
import Sound from 'react-native-sound';
import Settings from '../Settings';
import {
  Container,
  State,
  StateIcon,
  StateText,
  Time,
  WrapperButtons,
  ButtonIcon,
  PrimaryButton,
  SecondaryButton,
} from './styles';

function Timer({setDarkMode}) {
  Sound.setCategory('Playback', true); // true = mixWithOthers
  const ding = new Sound('beep.mp3', Sound.MAIN_BUNDLE);

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
  const [count, setCount] = useState(0);
  const [state, setState] = useState('Focus');
  const [timeRemaining, setTimeRemaining] = useState(form.focusLength * 60);

  const interval = React.useRef();

  useEffect(() => {
    setTimeRemaining(form.focusLength * 60);
  }, [form.focusLength]);

  useEffect(() => {
    setDarkMode(form.darkMode);
  }, [form.darkMode]);

  useEffect(() => {
    if (timeRemaining === 0) {
      stopTimer();
      skipTimer();
    }
  }, [timeRemaining]);

  const startTimer = () => {
    setIsPaused(false);
    interval.current = setInterval(function () {
      setTimeRemaining(prev => {
        if (prev - 1 <= 0) {
          return 0;
        } else return prev - 1;
      });
    }, 100);
  };

  const stopTimer = () => {
    clearInterval(interval.current);
    setIsPaused(true);
    if (form.sound) ding.play();
  };

  const skipTimer = () => {
    stopTimer();

    if (count < form.pomodoros) {
      if (state === 'Focus') {
        setTimeRemaining(form.shortBreak * 60);
        setState('Short Break');
      } else {
        setTimeRemaining(form.focusLength * 60);
        setState('Focus');
        setCount(count + 1);
      }
    } else {
      setTimeRemaining(form.longBreak * 60);
      setState('Long Break');
      setCount(0);
    }

    if (form.autoResume) startTimer();
  };

  const resetTimer = () => {
    clearInterval(interval.current);
    setIsPaused(true);
    setTimeRemaining(form.focusLength * 60);
    setState('Focus');
  };

  const openModal = () => {
    resetTimer();
    setIsModalVisible(true);
  };

  return (
    <Container>
      <State>
        <StateIcon name={state == 'Focus' ? 'brain' : 'coffee'} />
        <StateText>{state}</StateText>
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
          <ButtonIcon name="dots-horizontal" color={'#471515'} size={35} />
        </SecondaryButton>
        {isPaused ? (
          <PrimaryButton onPress={() => startTimer()}>
            <ButtonIcon name="play" color={'#471515'} size={35} />
          </PrimaryButton>
        ) : (
          <PrimaryButton onPress={() => stopTimer()}>
            <ButtonIcon name="pause" color={'#471515'} size={35} />
          </PrimaryButton>
        )}
        <SecondaryButton onPress={() => skipTimer()}>
          <ButtonIcon name="skip-next" color={'#471515'} size={35} />
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
