import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./../Toast/Toast.component";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  component: Toast,
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const ToastWarning: Story = {
  args: {
    type: "warning",
    children: "This toast appears to alert a warning",
  },
};

export const ToastError: Story = {
  args: {
    type: "error",
    children: "This toast appears to alert an error",
  },
};

export const ToastSuccess: Story = {
  args: {
    type: "success",
    children: "This toast appears when everything is fine",
  },
};
