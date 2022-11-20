import React, {useState} from 'react';
import {Alert, Modal, Switch, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  SettingsModal,
  TitleField,
  TitleText,
  FormField,
  LabelText,
  NumberInput,
} from './styles';

function Settings({isModalVisible, setIsModalVisible}) {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeTimer, setResumeTimer] = useState(false);
  const [sound, setSound] = useState(false);
  const [focus, setFocus] = useState(25);
  const [pomodoros, setPomodoros] = useState(3);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <SettingsModal>
        <TitleField>
          <TitleText>Settings </TitleText>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <MaterialCommunityIcons name="close" color={'#471515'} size={35} />
          </TouchableOpacity>
        </TitleField>

        <FormField>
          <LabelText>Dark mode</LabelText>
          <Switch
            trackColor={{false: '#767577', true: '#b63535'}}
            thumbColor={'#471515'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setDarkMode(previousState => !previousState)}
            value={darkMode}
          />
        </FormField>
        <FormField>
          <LabelText>Focus length</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={setFocus}
            value={focus.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Pomodoros until long break</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={setPomodoros}
            value={pomodoros.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Short break length</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={setShortBreak}
            value={shortBreak.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Long break length</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={setLongBreak}
            value={longBreak.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Auto resume timer</LabelText>
          <Switch
            trackColor={{false: '#767577', true: '#b63535'}}
            thumbColor={'#471515'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() =>
              setResumeTimer(previousState => !previousState)
            }
            value={resumeTimer}
          />
        </FormField>
        <FormField>
          <LabelText>Sound</LabelText>
          <Switch
            trackColor={{false: '#767577', true: '#b63535'}}
            thumbColor={'#471515'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSound(previousState => !previousState)}
            value={sound}
          />
        </FormField>
      </SettingsModal>
    </Modal>
  );
}

export default Settings;
