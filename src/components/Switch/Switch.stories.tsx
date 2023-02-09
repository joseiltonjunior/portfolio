import { Swicth } from "./index";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Swicth",
  component: Swicth,
  args: {
    checked: false,
  },
  argTypes: {
    checked: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

export const Default: StoryObj = {};
