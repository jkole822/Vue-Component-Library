// Components
import Collapsible from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  args: {
    defaultOpen: false,
    disabled: false,
    lazyMount: false,
    unmountOnExit: false,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Renders the component as a child element.",
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    defaultOpen: {
      control: "boolean",
      description: "The initial open state when rendered.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the collapsible component.",
    },
    lazyMount: {
      control: "boolean",
      description:
        "Whether to mount the content only when the item is expanded for the first time.",
    },
    open: {
      control: "boolean",
      description: "The controlled open state of the collapsible.",
    },
    unmountOnExit: {
      control: "boolean",
      description: "Whether to unmount content when the item is collapsed.",
    },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DefaultOpen: Story = {
  args: {
    defaultOpen: true,
  },
};
