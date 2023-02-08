import { Button } from "./index";
import { Box } from "./styles";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => {
      return <Box>{Story()}</Box>;
    },
  ],
  args: {
    children: "Button",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta;

export const Default: StoryObj = {};
