import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  title?: string;
}

const UnstyledButton = ({
  children,
  onClick,
  title,
  ...delegated
}: ButtonProps) => {
  return (
    <Button type="button" title={title} onClick={onClick} {...delegated}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  all: unset;
  cursor: pointer;
  &:focus {
    outline: revert;
  }
`;

export default UnstyledButton;
