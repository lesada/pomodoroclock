import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: var(--text);
  }

  :root {
    ${props => {
      const theme = props.theme;
      let append = '';
      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }
  
`;

export default GlobalStyle;
