import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const State = styled.View`
  width: 125px;
  height: 35px;
  background-color: ${props => props.theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme.text};
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const StateIcon = styled(MaterialCommunityIcons).attrs({size: 15})`
  color: ${props => props.theme.text};
`;

export const StateText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.text};
  margin-left: 5px;
`;

export const Time = styled.Text`
  font-weight: 200;
  font-size: 150px;
  line-height: 150px;
  color: ${props => props.theme.text};
`;

export const WrapperButtons = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

export const ButtonIcon = styled(MaterialCommunityIcons).attrs({size: 35})`
  color: ${props => props.theme.text};
`;

export const PrimaryButton = styled.TouchableOpacity`
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary};
  height: 80px;
  width: 100px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.secondary};
  height: 60px;
  width: 80px;
`;
