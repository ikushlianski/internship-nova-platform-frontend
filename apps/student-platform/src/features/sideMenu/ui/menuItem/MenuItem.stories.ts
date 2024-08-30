import { Meta, StoryObj } from "@storybook/react";
import MenuItem from "./MenuItem";
//add import
import {MenuItemProps} from "../../types/types"

const meta: Meta<MenuItemProps> = {
  title: "Components/MenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<MenuItemProps>;

export const GeneralMenuItem: Story = {
  args: {
    img: "/#",
    title: "Settings",
    link: "/settings",
  },
};
