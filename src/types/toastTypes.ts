export type ToastVariant = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  title: string;
  description: string;
  variant: ToastVariant;
}

export interface ToastState {
  toasts: Toast[];
}
