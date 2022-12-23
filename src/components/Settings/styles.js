import styled from 'styled-components/native';

export const SettingsModal = styled.View`
  justify-content: center;
  height: 100%;
  background-color: ${props => props.theme.background};
  padding: 60px 30px;
`;

export const TitleField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 2;
`;

export const TitleText = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${props => props.theme.text};
`;

export const FormField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-height: 85px;
`;

export const LabelText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.text};
`;

export const NumberInput = styled.TextInput`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.border};
  height: 28px;
  width: 40px;
  padding: 0 5px;
  margin-right: 5px;
  text-align: center;
  color: ${props => props.theme.text};
`;
