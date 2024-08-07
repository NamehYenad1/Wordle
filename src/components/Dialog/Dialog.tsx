import * as RadixDialog from "@radix-ui/react-dialog";

import styled, { keyframes } from "styled-components";
import { X } from "lucide-react";
import IconButton from "../IconButton";
import { IconSize } from "../../constants";

import React from "react";
import UnstyledButton from "../UnstyledButton";

interface Props {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title: string;
  description: string;
}
const Dialog = ({ trigger, title, description, children }: Props) => {
  return (
    <RadixDialog.Root>
      <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
      <RadixDialog.Portal>
        <StyledOverlay className="dialog-overlay" />
        <StyledContent className="dialog-content">
          <RadixDialog.Title>{title}</RadixDialog.Title>
          <RadixDialog.Description>{description}</RadixDialog.Description>
          {children}
          <StyledCloseButton asChild>
            <UnstyledButton>
              <X size={IconSize.sm} />
            </UnstyledButton>
          </StyledCloseButton>
        </StyledContent>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  );
};

const overlayShow = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledOverlay = styled(RadixDialog.Overlay)`
  background-color: ${({ theme }) => theme.overlayColors};
  animation: ${overlayShow} 150ms ease;
  position: fixed;
  inset: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledContent = styled(RadixDialog.Content)`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  width: clamp(min(85%, 500px), 50%, 800px);
  padding: 16px;
  margin: 0 auto;
  background-color: #191919;
  /* display: flex; */
  position: fixed;
  background-color: ${({ theme }) => theme.overlayContentBackground};
`;

const StyledCloseButton = styled(RadixDialog.Close)`
  position: absolute;
  top: 16px;
  right: 16px;
  transition: transform 50ms;
  &:hover {
    transform: scale(1.1);
    transition: transform 100ms;
  }
`;

export default Dialog;
