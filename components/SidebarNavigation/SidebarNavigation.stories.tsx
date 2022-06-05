import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SidebarNavigation } from "./SidebarNavigation";

export default {
  title: "UI/SidebarNavigation",
  component: SidebarNavigation,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof SidebarNavigation>;

const Template: ComponentStory<typeof SidebarNavigation> = () => (
  <SidebarNavigation />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    name: "Islam Shagaev",
  },
};
