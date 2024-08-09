const validateAndSetInput = (
  value: string,
  setInput: (value: string) => void
): void => {
  // Check if the input is empty or contains only letters, and limit the length to 5
  if (/^[a-zA-Z]+$/.test(value) || value === "") {
    if (value.length <= 5) {
      setInput(value.toUpperCase());
    }
  }
};

export default validateAndSetInput;
