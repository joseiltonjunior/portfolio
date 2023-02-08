import { Section } from "./index";
import { Meta, Story } from "@storybook/react";
import { FaDatabase } from "react-icons/fa";

export default {
  title: "Components/Section",
  component: Section,
} as Meta;

export const Default: Story = () => {
  return (
    <Section title="Default">
      <div style={{ height: "100vh" }} />
    </Section>
  );
};

export const Expansive: Story = () => {
  return (
    <Section title="Expansive" show>
      <div style={{ height: "100vh" }} />
    </Section>
  );
};
