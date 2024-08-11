import styled, { css, keyframes } from "styled-components";
import Letterbox from "./Letterbox";

interface Props {
  guesses: string[][];
  animateRow: number | null;
  correctWord: string;
  shakeRow: number | null;
  currentGuess: string;
}
const Grid = ({
  guesses,
  animateRow,
  shakeRow,
  correctWord,
  currentGuess,
}: Props) => {
  const latestGuessIndex = guesses.findIndex((g) =>
    g.every((char) => char === "")
  );
  return (
    <OuterWrapper>
      <Wrapper>
        {guesses.map((guess, guessIndex) => (
          <RowWrapper
            key={crypto.randomUUID()}
            $animateShake={shakeRow === guessIndex}
          >
            {Array.from({ length: 5 }, (_, index) =>
              latestGuessIndex === guessIndex ? (
                <Letterbox
                  key={crypto.randomUUID()}
                  guess={currentGuess[index] || ""}
                  index={index}
                  animate={guessIndex === animateRow}
                  correctLetter={correctWord[index]}
                  showStyling={false}
                />
              ) : (
                <Letterbox
                  key={crypto.randomUUID()}
                  guess={guess[index] || ""}
                  index={index}
                  animate={guessIndex === animateRow}
                  correctLetter={correctWord[index]}
                  showStyling={true}
                />
              )
            )}
          </RowWrapper>
        ))}
      </Wrapper>
    </OuterWrapper>
  );
};

// Define the shake animation using keyframes
const shakeAnimation = keyframes`
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
`;
const OuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;
const Wrapper = styled.div`
  width: 100%;
  aspect-ratio: calc(300 / 360);
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  gap: 1rem;
  margin-top: 2rem;
`;

const RowWrapper = styled.div<{ $animateShake: boolean }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  animation: ${(props) =>
    props.$animateShake
      ? css`
          ${shakeAnimation} 0.5s ease
        `
      : "unset"};
`;

export default Grid;
