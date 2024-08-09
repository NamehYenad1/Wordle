import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import { wordsArray } from "../../constants";
import Confetti from "react-confetti";
import Dialog from "../../components/Dialog";

const MainContent = () => {
  const [correctWord, setCorrectWord] = React.useState<string>(
    wordsArray[Math.floor(Math.random() * wordsArray.length)].toUpperCase()
  );
  const [guesses, setGuesses] = React.useState<string[]>([]);
  const [showConfetti, setShowConfetti] = React.useState<boolean>(false);
  const [showDialog, setShowDialog] = React.useState<boolean>(false);

  const addGuess = (guess: string) => {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (guess === correctWord) {
      setShowConfetti(true);
      setShowDialog(true);
    }
    console.log(newGuesses);
  };

  const resetGame = () => {
    setCorrectWord(
      wordsArray[Math.floor(Math.random() * wordsArray.length)].toUpperCase()
    );
    setGuesses([]);
    setShowDialog(false);
    setShowConfetti(false);
  };

  const onOpenChange = (open: boolean) => {
    setShowDialog(open);
    setShowConfetti(false);
  };

  return (
    <Wrapper>
      <InputForm addGuess={addGuess} correctWord={correctWord}></InputForm>

      <Dialog
        open={showDialog}
        onOpenChange={onOpenChange}
        title="congraulation message"
        description="correct answer"
      >
        {" "}
        you have guessed the right answer{" "}
        <button onClick={resetGame}> play again </button>
      </Dialog>
      {showConfetti && <Confetti recycle={true} numberOfPieces={2000} />}
    </Wrapper>
  );
};

const Wrapper = styled.main`
  grid-area: main;
  justify-self: center;
  width: clamp(400px, 50%, 600px);
  max-width: 100%;
`;

export default MainContent;
