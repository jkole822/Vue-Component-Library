// Components
import Tabs from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";
import { TabsActivationModeEnum, TabsOrientationEnum } from "./types";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    activationMode: {
      control: "select",
      options: [
        TabsActivationModeEnum.Automatic,
        TabsActivationModeEnum.Manual,
      ],
    },
    orientation: {
      control: "select",
      options: [TabsOrientationEnum.Horizontal, TabsOrientationEnum.Vertical],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  activationMode: TabsActivationModeEnum.Automatic,
  disabled: false,
  items: [],
  orientation: TabsOrientationEnum.Horizontal,
};

export const Horizontal: Story = {
  args: {
    ...args,
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
  },
};

export const Vertical: Story = {
  args: {
    ...args,
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
    orientation: TabsOrientationEnum.Vertical,
  },
};
