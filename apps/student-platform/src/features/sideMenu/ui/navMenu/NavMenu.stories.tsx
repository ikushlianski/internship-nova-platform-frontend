import { Meta, StoryObj } from "@storybook/react";
import NavMenu from "./NavMenu";

const meta = {
  title: "Components/NavMenu",
  component: NavMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
