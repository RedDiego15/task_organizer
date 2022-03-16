import { ThemeProvider } from "styled-components";
import {GlobalStyle} from './GlobalStyles';
const themes = {
  principal: {
    background_primary: `linear-gradient(#CEE5D0, transparent),
                        linear-gradient(to top left, #F7D59C, transparent),
                        linear-gradient(to top right, #5E454B, transparent)`,
  },
  
};

export const Theme = (props) => (
  <ThemeProvider theme={themes[props.theme]}>
    <GlobalStyle/>
  {props.children}</ThemeProvider>
);
