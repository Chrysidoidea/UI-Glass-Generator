import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --background-color: #2C3E50; 
  --background-gradient: linear-gradient(to bottom, #1c2331, #394867);
  --glass-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.025));
  --glass-color: rgba(255, 255, 255, 0.05);
  --text-color: #FFFFFF;
  --light-blue: #0099ff;
  --dark-blue: #2979AE;

  --dynamic-bg-color: #FFFFFF0E;
  --dynamic-backdrop-filter: blur(.3rem);
  --dynamic-border: 1px solid transparent;
};

body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
    overflow: scroll;
    user-select: none;
};

label {
  text-transform: uppercase;
};
`;
