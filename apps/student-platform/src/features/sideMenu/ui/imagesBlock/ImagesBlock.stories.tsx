import { Meta, StoryObj } from "@storybook/react";
import ImagesBlock from "./ImagesBlock";

const meta = {
  title: "Components/ImagesBlock",
  component: ImagesBlock,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImagesBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
