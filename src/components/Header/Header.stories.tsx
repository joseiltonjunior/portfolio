import { Header } from "./index";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

export const Default: Story = () => {
  return <Header />;
};
