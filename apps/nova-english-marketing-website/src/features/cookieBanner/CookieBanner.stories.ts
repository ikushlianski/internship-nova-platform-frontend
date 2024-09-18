import type { Meta, StoryObj } from "@storybook/react";
import CookieBanner from "./CookieBanner.component";

const meta: Meta<typeof CookieBanner> = {
  title: "CookieBanner",
  component: CookieBanner,
  tags: ["autodocs"],
} satisfies Meta<typeof CookieBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Banner: Story = {};
