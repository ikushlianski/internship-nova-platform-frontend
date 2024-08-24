import { Meta, StoryObj } from "@storybook/react";
import NavLink, { NavLinkProps } from "./NavLink";

const meta: Meta<NavLinkProps> = {
  title: "Components/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<NavLinkProps>;

export const Active: Story = {
  args: {
    href: "/",
    children: "Home",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};

export const Inactive: Story = {
  args: {
    href: "/about",
    children: "About",
  },
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: "/",
      },
    },
  },
};
