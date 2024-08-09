import React from "react";
import styled from "styled-components";
import validateAndSetInput from "../../../helpers/validateInput";

interface Props {
  addGuess: (guess: string) => void;
  correctWord: string;
}
const InputForm = ({ addGuess }: Props) => {
  const [input, setInput] = React.useState<string>("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addGuess(input);
        setInput("");
      }}
    >
      <InputWrapper>
        <label htmlFor="guess-input">Enter guess:</label>
        <StyledInput
          id="guess-input"
          value={input}
          onChange={(event) => {
            validateAndSetInput(event.target.value, setInput);
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
