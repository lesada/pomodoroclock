import React, {useState, useEffect} from 'react';
import Timer from './src/components/Timer';
import styled, {ThemeProvider} from 'styled-components/native';
import {lightTheme, darkTheme} from './styles/themes';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <PomodoroWrapper>
        <Timer setDarkMode={setDarkMode} />
      </PomodoroWrapper>
    </ThemeProvider>
  );
};

export default App;

const PomodoroWrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.background};
`;
