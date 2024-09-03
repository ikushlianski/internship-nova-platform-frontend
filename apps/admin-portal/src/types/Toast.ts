export interface IToast {
  message: string;
  type: "success" | "error" | "warning" | "info";
  onClose: () => void;
}
