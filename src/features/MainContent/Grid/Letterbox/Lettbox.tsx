import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

interface Props {
  guess: string;
  index: number;
  animate: boolean;
  correctLetter: string;
  showStyling: boolean;
}

const Letterbox = ({
  guess,
  index,
  animate,
  correctLetter,
  showStyling,
}: Props) => {
  const isCorrect = guess === correctLetter;
  const isMisplaced = !isCorrect && correctLetter.includes(guess);
  const isIncorrect = !isCorrect && !isMisplaced;
  const [flipped, setFlipped] = useState(false);
  // Trigger flip animation on guess submission
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setFlipped(true);
      }, index * 150); // Stagger the animation based on the index
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
    from {
      transform: var(--flip, rotateY(0deg));
    }
    to {
      transform: rotateY(180deg);
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
      ? props.theme.correctColor
      : props.$isMisplaced
      ? props.theme.misplacedColor
      : props.$isIncorrect
      ? props.theme.inputBorder
      : "transparent"};
  animation: ${(props) =>
    props.$flipped ? `${flip} 0.5s ease forwards` : "none"};
`;

export default Letterbox;
