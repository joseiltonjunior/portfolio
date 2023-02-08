import GlobalStyle from "../src/styles/global";
import { themes } from "@storybook/theming";
import { Story } from "@storybook/react";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
};

export const decorators = [
  (Story: Story) => (
    <>
      <GlobalStyle />
      <Story/>
    </>
  ),
];
