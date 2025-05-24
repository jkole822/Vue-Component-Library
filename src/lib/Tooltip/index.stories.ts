// Components
import Tooltip from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    closeDelay: 500,
    closeOnClick: true,
    closeOnEscape: true,
    closeOnPointerDown: true,
    closeOnScroll: true,
    interactive: false,
    lazyMount: false,
    open: false,
    openDelay: 1000,
    unmountOnExit: false,
  },
  argTypes: {
    "aria-label": {
      control: "text",
      description:
        "Accessible label for the tooltip when there is no visible content.",
    },
    closeDelay: {
      control: "number",
      description:
        "Delay in milliseconds before closing the tooltip after trigger leaves.",
    },
    closeOnClick: {
      control: "boolean",
      description: "Close the tooltip when the trigger is clicked.",
    },
    closeOnEscape: {
      control: "boolean",
      description: "Close the tooltip when pressing the Escape key.",
    },
    closeOnPointerDown: {
      control: "boolean",
      description: "Close the tooltip when pointer is pressed down anywhere.",
    },
    closeOnScroll: {
      control: "boolean",
      description: "Close the tooltip when the user scrolls.",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Whether the tooltip is open by default (uncontrolled mode).",
    },
    disabled: {
      control: "boolean",
      description: "Disables the tooltip trigger and behavior.",
    },
    id: {
      control: "text",
      description: "ID attribute for the tooltip component.",
    },
    interactive: {
      control: "boolean",
      description: "Allow pointer events within the tooltip content.",
    },
    lazyMount: {
      control: "boolean",
      description: "Mount tooltip content only on first open.",
    },
    open: {
      control: "boolean",
      description: "Controls tooltip visibility (controlled mode).",
    },
    openDelay: {
      control: "number",
      description:
        "Delay in milliseconds before opening the tooltip after trigger enters.",
    },
    positioning: {
      control: "object",
      description:
        "Positioning configuration for the tooltip (e.g., placement, offset).",
    },
    unmountOnExit: {
      control: "boolean",
      description:
        "Unmount the tooltip content from the DOM when it is not visible.",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
