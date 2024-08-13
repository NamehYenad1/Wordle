import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";
import { wordsArray, wordsSet } from "../../constants";
import Confetti from "react-confetti";
import Dialog from "../../components/Dialog";
import Grid from "./Grid";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../stores/store";
import { toastAdded } from "../../stores/slices/toastSlice";
import { LETTER_ANIMATION_SPEED } from "../../constants";

interface Props {
  gameKey: number;
  setGameKey: React.Dispatch<React.SetStateAction<number>>;
}
const MainContent = ({ gameKey, setGameKey }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const correctWord = React.useMemo<string>(
    () =>
      wordsArray[Math.floor(Math.random() * wordsArray.length)].toUpperCase(),
    [gameKey]
  );
  const [guesses, setGuesses] = React.useState<string[][]>(
    Array(6).fill(Array(5).fill("")) // Initialize 6 empty guesses
  );

  const [showConfetti, setShowConfetti] = React.useState<boolean>(false);
  const [showDialog, setShowDialog] = React.useState<boolean>(false);
  const [currentGuess, setCurrentGuess] = React.useState<string>(""); // Track current input
  const [animateRow, setAnimateRow] = React.useState<number | null>(null); // Track which row to animate
  const [shakeRow, setShakeRow] = React.useState<number | null>(null); // Track which row to shake

  const addGuess = (guess: string) => {
    // Find the index of the first empty guess
    const latestGuessIndex = guesses.findIndex((g) =>
      g.every((char) => char === "")
    );
    if (!wordsSet.has(guess)) {
      // Trigger shake animation for invalid guess
      setShakeRow(latestGuessIndex);
      setTimeout(() => setShakeRow(null), 500); // Clear shake state after animation
      dispatch(
        toastAdded({
          title: "Invalid guess",
          description: "Guess is not a valid word",
          variant: "error",
        })
      );
      return; // Exit the function if the word is invalid
    }
    const newGuesses = [...guesses];
    // Directly assign the guess to the current row as an array of characters
    newGuesses[latestGuessIndex] = guess.split("");
    setGuesses(newGuesses);
    setAnimateRow(latestGuessIndex); // Set the row to animate

    // Delay showing the dialog until after the animation
    if (guess === correctWord) {
      setTimeout(() => {
        setShowConfetti(true);
        setShowDialog(true);
      }, LETTER_ANIMATION_SPEED * 5); // Adjust this delay based on animation timing later
    }
    handleInputChange("");
    setTimeout(() => setAnimateRow(null), LETTER_ANIMATION_SPEED * 5); // reset animation so it doesnt run again
  };

  const resetGame = () => {
    setGameKey(gameKey + 1);
  };

  const handleInputChange = (value: string) => {
    setCurrentGuess(value.toUpperCase());
  };

  const onOpenChange = (open: boolean) => {
    setShowDialog(open);
    setShowConfetti(false);
  };

  return (
    <Wrapper>
      <Grid
        correctWord={correctWord}
        guesses={guesses}
        animateRow={animateRow}
        shakeRow={shakeRow}
        currentGuess={currentGuess}
      ></Grid>
      <InputForm
        addGuess={addGuess}
        currentGuess={currentGuess}
        handleInputChange={handleInputChange}
      ></InputForm>
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
  padding: 20px;
`;

export default MainContent;
