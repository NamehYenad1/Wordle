import * as Toast from "@radix-ui/react-toast";
import { useSelector, useDispatch } from "react-redux";
import { Toast as ToastType, ToastVariant } from "../../types/toastTypes";
import styled from "styled-components";
import { RootState, AppDispatch } from "../../stores/store";
import { toastRemoved } from "../../stores/slices/toastSlice";

const ToastProvider = () => {
  const toasts = useSelector((state: RootState) => state.toast.toasts);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <Toast.Provider swipeDirection="right">
      {toasts.map((toast: ToastType) => (
        <StyledToastRoot
          key={toast.id}
          open={true}
          onOpenChange={(open: boolean) =>
            !open && dispatch(toastRemoved(toast.id))
          }
          variant={toast.variant}
        >
          <StyledToastTitle>{toast.title}</StyledToastTitle>
          <StyledToastDescription>{toast.description}</StyledToastDescription>
          <StyledToastAction altText="Close">
            <StyledButton onClick={() => dispatch(toastRemoved(toast.id))}>
              Dismiss
            </StyledButton>
          </StyledToastAction>
        </StyledToastRoot>
      ))}
      <StyledToastViewport />
    </Toast.Provider>
  );
};

const StyledToastRoot = styled(Toast.Root)<{ variant: ToastVariant }>`
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  transition: transform 0.2s ease, opacity 0.2s ease;
  background-color: green;
`;
const StyledToastTitle = styled(Toast.Title)``;
const StyledToastDescription = styled(Toast.Description)``;
const StyledToastAction = styled(Toast.Action)``;
const StyledButton = styled.span``;
const StyledToastViewport = styled(Toast.Viewport)`
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 1rem;
  max-width: 100vw;
  width: 320px;
`;

export default ToastProvider;
