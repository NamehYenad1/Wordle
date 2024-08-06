import React, { useState } from "react";

import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../constants";
import styled from "styled-components";
import Header from "../features/Header";
import Footer from "../features/Footer";
import MainContent from "../features/MainContent";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const updateTheme = () => setDarkMode((previousTheme) => !previousTheme);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <GlobalStyle />
        <AppWrapper>
          <Header updateTheme={updateTheme}></Header>
          <MainContent></MainContent>
          <Footer></Footer>
        </AppWrapper>
      </ThemeProvider>
    </>
  );
}

const AppWrapper = styled.div`
  display: grid;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas:
    "header"
    "main"
    "footer";
`;

export default App;
