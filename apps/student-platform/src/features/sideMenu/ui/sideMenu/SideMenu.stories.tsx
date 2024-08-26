import type { Meta, StoryObj } from "@storybook/react";
import SideMenu from "./SideMenu";
import NavMenu from "../navMenu/NavMenu";
import ImagesBlock from "../imagesBlock/ImagesBlock";
import Settings from "../settings/Settings";

const meta = {
  title: "Components/SideMenu",
  component: SideMenu,
  subcomponents: { NavMenu, ImagesBlock, Settings },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SideMenuWithItems: Story = {};
