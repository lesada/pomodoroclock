import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const State = styled.View`
  width: 100px;
  height: 35px;
  background-color: rgba(255, 76, 76, 0.15);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #471515;
  border-radius: 50px;
  margin-bottom: 24px;
`;

export const StateText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #471515;
  margin-left: 5px;
`;

export const Time = styled.Text`
  font-weight: 200;
  font-size: 150px;
  line-height: 150px;
  color: #471515;
`;

export const WrapperButtons = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 80%;
`;

export const PrimaryButton = styled.TouchableOpacity`
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 76, 76, 0.7);
  height: 80px;
  width: 100px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 76, 76, 0.15);
  height: 60px;
  width: 80px;
`;
