import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "lg"],
      },
    },
    className: {
      control: "text",
    },
    asChild: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: "default",
    children: "Default button",
  },
};

export const Secondary: Story = {
  args: {
    size: "default",
    children: "Secondary button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small button",
  },
};
