import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import { LETTER_ANIMATION_SPEED } from "../../../../constants";

interface Props {
  guess: string;
  index: number;
  animate: boolean;
  correctLetter: string;
  showStyling: boolean;
  correctWord: string;
}

const Letterbox = ({
  guess,
  index,
  animate,
  correctLetter,
  correctWord,
}: Props) => {
  const isCorrect = guess === correctLetter;
  const isMisplaced = !isCorrect && correctWord.includes(guess);
  const isIncorrect = !isCorrect && !isMisplaced;
  const [flipped, setFlipped] = useState(false);
  const [showStyling, setShowStyling] = useState(false);
  // Trigger flip animation on guess submission
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setFlipped(true);
        setShowStyling(true);
      }, index * LETTER_ANIMATION_SPEED); // Stagger the animation based on the index
      return () => clearTimeout(timer);
    } else {
      setFlipped(false); // Reset flip state when not animating
    }
  }, [animate, index]);

  return (
    <Wrapper
      $flipped={flipped}
      $isCorrect={isCorrect}
      $isMisplaced={isMisplaced}
      $isIncorrect={isIncorrect}
      $showStyling={showStyling}
    >
      {guess}
    </Wrapper>
  );
};

const flip = keyframes`
   0% {
    transform: scaleY(1);
  }

  50% {
    background: white;
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(1);
  }
  `;

const Wrapper = styled.div<{
  $flipped: boolean;
  $isCorrect: boolean;
  $isMisplaced: boolean;
  $isIncorrect: boolean;
  $showStyling: boolean;
}>`
  display: grid;
  place-items: center;
  border: 1px solid #000;
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  border: 3px solid ${({ theme }) => theme.inputBorder};
  transition: background-color 0.3s ease, transform 0.3s ease;
  background-color: ${(props) =>
    !props.$showStyling
      ? "transparent"
      : props.$isCorrect
      ? props.theme.correctInput
      : props.$isMisplaced
      ? props.theme.misplacedInput
      : props.$isIncorrect
      ? props.theme.inputBorder
      : "transparent"};
  animation: ${(props) =>
    props.$flipped
      ? css`
          ${flip} 0.5s ease forwards
        `
      : "none"};
`;

export default Letterbox;
