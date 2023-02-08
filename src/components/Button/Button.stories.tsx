import { Button } from "./index";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Primary: Story = () => {
  return <Button title="Primary" style={{ maxWidth: "18.75rem" }} />;
};

export const Secondary: Story = () => {
  return (
    <Button
      typeButton="secondary"
      title="Secondary"
      style={{ maxWidth: "18.75rem" }}
    />
  );
};
