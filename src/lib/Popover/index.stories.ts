// Packages
import { faker } from "@faker-js/faker";

// Components
import Popover from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {
    autoFocus: true,
    closeOnEscape: true,
    closeOnInteractOutside: true,
    description: faker.lorem.paragraph(),
    lazyMount: false,
    modal: true,
    portalled: true,
    title: faker.lorem.words(2),
    unmountOnExit: false,
  },
  argTypes: {
    autoFocus: {
      control: "boolean",
      description:
        "Automatically focus the first focusable element within the popover when it opens.",
    },
    closeOnEscape: {
      control: "boolean",
      description: "Closes the popover when the Escape key is pressed.",
    },
    closeOnInteractOutside: {
      control: "boolean",
      description:
        "Closes the popover when a user clicks or interacts outside of it.",
    },
    contentClass: {
      control: "text",
      description:
        "Additional class names to apply to the popover content container.",
    },
    contentStyles: {
      control: "object",
      description: "Inline styles to apply to the popover content container.",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Sets the initial open state of the popover in uncontrolled mode.",
    },
    description: {
      control: "text",
      description: "Optional description text for accessibility purposes.",
    },
    id: {
      control: "text",
      description: "Unique identifier for the popover component.",
    },
    initialFocusEl: {
      control: false,
      description:
        "Function returning the element to focus when the popover opens.",
      table: {
        type: { summary: "() => HTMLElement | null" },
      },
    },
    lazyMount: {
      control: "boolean",
      description: "Mount the popover content only on first open.",
    },
    modal: {
      control: "boolean",
      description:
        "When true, disables interactions with elements outside the popover.",
    },
    open: {
      control: "boolean",
      description: "Whether the popover is open (controlled mode).",
    },
    persistentElements: {
      control: false,
      description:
        "Elements that should not be hidden from screen readers even when modal is active.",
      table: {
        type: { summary: "(() => Element | null)[]" },
      },
    },
    portalled: {
      control: "boolean",
      description: "Render the popover content inside a portal (teleport).",
    },
    positioning: {
      control: "object",
      description:
        "Popover positioning configuration (placement, offset, etc.).",
      table: {
        type: { summary: "any (Placement options)" },
      },
    },
    title: {
      control: "text",
      description: "Accessible name for the popover used as a label.",
    },
    unmountOnExit: {
      control: "boolean",
      description: "Whether to unmount the popover from the DOM when closed.",
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
