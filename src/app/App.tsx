import { useState } from "react";
import styled from "styled-components";
import Header from "../features/Header";
import Footer from "../features/Footer";
import MainContent from "../features/MainContent";
import { useSelectorWithType, useDispatchWithType } from "../hooks/reduxHooks";
import Confetti from "react-confetti";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "../constants";
import { themeToggled } from "../stores/slices/themeSlice";
import GlobalStyle from "../app/GlobalStyles";
import { useWindowSize } from "react-use";

function App() {
  const [gameKey, setGameKey] = useState<number>(0);
  const dispatch = useDispatchWithType();
  const showConfetti = useSelectorWithType((state) => state.confetti.isVisible);
  const darkMode = useSelectorWithType((state) => state.theme.darkMode);
  const { width, height } = useWindowSize();

  const toggleTheme = () => {
    dispatch(themeToggled(!darkMode));
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <GlobalStyle />
        <AppWrapper>
          {showConfetti && (
            <Confetti
              recycle={true}
              numberOfPieces={2000}
              width={width}
              height={height}
            />
          )}
          <Header updateTheme={toggleTheme}></Header>
          <MainContent
            key={gameKey}
            gameKey={gameKey}
            setGameKey={setGameKey}
          ></MainContent>
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
  height: 100%;
`;

export default App;
