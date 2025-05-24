// Components
import Tabs from "./story.vue";

// Types
import { TabsActivationModeEnum, TabsOrientationEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    activationMode: TabsActivationModeEnum.Automatic,
    className: "mx-auto overflow-hidden rounded-md sm:w-[500px]",
    lazyMount: false,
    loopFocus: true,
    orientation: TabsOrientationEnum.Horizontal,
    unmountOnExit: false,
  },
  argTypes: {
    activationMode: {
      control: { type: "select" },
      options: Object.values(TabsActivationModeEnum),
      description:
        "Determines how the tab is activated: automatically on focus or manually on click.",
      table: {
        type: { summary: '"automatic" | "manual"' },
        defaultValue: { summary: '"automatic"' },
      },
    },
    asChild: {
      control: "boolean",
      description:
        "Render the component as a child, useful for custom wrapper components.",
    },
    className: {
      control: "text",
      description: "CSS class applied to the root element of the tabs.",
    },
    composite: {
      control: "boolean",
      description: "Enables composite keyboard navigation behavior.",
    },
    defaultValue: {
      control: "text",
      description: "ID of the tab to select initially in uncontrolled mode.",
    },
    deselectable: {
      control: "boolean",
      description: "Whether all tabs can be deselected (no tab active).",
    },
    id: {
      control: "text",
      description: "ID attribute for the tab group root element.",
    },
    items: {
      control: "object",
      description:
        "Array of tab definitions with `id`, `label`, `content`, and `disabled`.",
      table: {
        type: { summary: "TabItem[]" },
      },
    },
    lazyMount: {
      control: "boolean",
      description: "Mount tab content only when the tab is first activated.",
    },
    loopFocus: {
      control: "boolean",
      description: "Whether keyboard focus should loop from last to first tab.",
    },
    modelValue: {
      control: "text",
      description: "The v-model value of the tabs.",
    },
    navigate: {
      control: false,
      description: "Callback triggered when a tab is navigated to.",
      table: {
        type: { summary: "(details: any) => void" },
      },
    },
    orientation: {
      control: { type: "select" },
      options: Object.values(TabsOrientationEnum),
      description: "Layout direction of the tab list.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    unmountOnExit: {
      control: "boolean",
      description: "Whether to unmount tab content when a tab is hidden.",
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: TabsOrientationEnum.Vertical,
  },
};
