import React from 'react';
import {Modal, Switch, TouchableOpacity} from 'react-native';
import {useFormik} from 'formik';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  SettingsModal,
  TitleField,
  TitleText,
  FormField,
  LabelText,
  NumberInput,
} from './styles';

function Settings({settingsForm, isModalVisible, setIsModalVisible}) {
  const {values, setFieldValue, handleSubmit, handleChange} = useFormik({
    initialValues: {
      darkMode: false,
      focusLength: 25,
      pomodoros: 3,
      shortBreak: 5,
      longBreak: 10,
      autoResume: true,
      sound: false,
    },
    onSubmit: val => {
      setIsModalVisible(false);
      settingsForm(val);
    },
  });

  return (
    <Modal animationType="slide" transparent={true} visible={isModalVisible}>
      <SettingsModal>
        <TitleField>
          <TitleText>Settings </TitleText>
          <TouchableOpacity onPress={() => handleSubmit()}>
            <MaterialCommunityIcons name="close" color={'#471515'} size={35} />
          </TouchableOpacity>
        </TitleField>

        <FormField>
          <LabelText>Dark mode</LabelText>
          <Switch
            trackColor={{false: '#767577', true: '#b63535'}}
            thumbColor={'#471515'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => setFieldValue('darkMode', value)}
            value={values.darkMode}
          />
        </FormField>
        <FormField>
          <LabelText>Focus length</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={handleChange('focusLength')}
            value={values.focusLength.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Pomodoros until long break</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={handleChange('pomodoros')}
            value={values.pomodoros.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Short break length</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={handleChange('shortBreak')}
            value={values.shortBreak.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Long break length</LabelText>
          <NumberInput
            keyboardType="numeric"
            onChangeText={handleChange('longBreak')}
            value={values.longBreak.toString()}
          />
        </FormField>
        <FormField>
          <LabelText>Auto resume timer</LabelText>
          <Switch
            trackColor={{false: '#767577', true: '#b63535'}}
            thumbColor={'#471515'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => setFieldValue('autoResume', value)}
            value={values.autoResume}
          />
        </FormField>
        <FormField>
          <LabelText>Sound</LabelText>
          <Switch
            trackColor={{false: '#767577', true: '#b63535'}}
            thumbColor={'#471515'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={value => setFieldValue('sound', value)}
            value={values.sound}
          />
        </FormField>
      </SettingsModal>
    </Modal>
  );
}

export default Settings;
