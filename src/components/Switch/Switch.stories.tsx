import { Swicth } from "./index";
import { Meta, Story } from "@storybook/react";
import { useState } from "react";

export default {
  title: "Components/Swicth",
  component: Swicth,
} as Meta;

export const Default: Story = () => {
  const [value, setValue] = useState<boolean>(false);

  return <Swicth checked={value} onChange={() => setValue(!value)} />;
};
