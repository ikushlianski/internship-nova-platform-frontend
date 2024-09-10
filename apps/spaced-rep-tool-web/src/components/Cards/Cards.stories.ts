import type { Meta, StoryObj } from "@storybook/react";

import { data } from "../../mocks/mockData";
import { COL_NAMES } from "../../shared/utils/cards/constants";

import { Cards } from "./Cards.component";

const meta: Meta<typeof Cards> = {
  title: "Cards",
  component: Cards,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cards: data.cards,
    colNames: COL_NAMES,
  },
};
