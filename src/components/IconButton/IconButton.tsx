import styled from "styled-components";
import UnstyledButton from "../UnstyledButton";

const IconButton = styled(UnstyledButton)` 
  cursor: pointer;
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  background-color:transparent;
  border-radius: 8px;
  transition: transform 200ms,
   background-color 0.2s ease-in-out;;
  &:hover{
  transform: scale(1.1);
    background-color: ${({ theme }) => theme.iconBackground}
    
`;

export default IconButton;
