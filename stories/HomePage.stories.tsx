import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HomePage from "../pages";

export default {
  title: "Example/Header",
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    name: "Islam Shagaev",
  },
};
