import { useState } from "react";

import GlobalStyle from "./GlobalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../constants";
import styled from "styled-components";
import Header from "../features/Header";
import Footer from "../features/Footer";
import MainContent from "../features/MainContent";
import { Provider } from "react-redux";
import store from "../stores/store";
import ToastProvider from "../components/Toast";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const updateTheme = () => setDarkMode((previousTheme) => !previousTheme);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
          <ToastProvider />
          <GlobalStyle />
          <AppWrapper>
            <Header updateTheme={updateTheme}></Header>
            <MainContent></MainContent>
            <Footer></Footer>
          </AppWrapper>
        </ThemeProvider>
      </Provider>
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
  height: 100%;
`;

export default App;
