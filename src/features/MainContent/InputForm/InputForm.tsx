import React from "react";
import styled from "styled-components";

interface Props {
  addGuess: (guess: string) => void;
  currentGuess: string;
  handleInputChange: (value: string) => void;
}
const InputForm = ({ addGuess, currentGuess, handleInputChange }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(currentGuess);
      }}
    >
      <InputWrapper>
        <label htmlFor="guess-input">Enter guess:</label>
        <StyledInput
          id="guess-input"
          type="text"
          value={currentGuess}
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            handleInputChange(nextGuess);
          }}
        />
      </InputWrapper>
    </form>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  font-size: ${20 / 16}rem;
`;
const StyledInput = styled.input`
  height: 48px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  color: inherit;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.focusRing};
  }
`;

export default InputForm;
