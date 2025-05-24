// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Select from "./story.vue";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    id: uuid(),
    label: faker.lorem.words(2),
    description: faker.lorem.sentence(),
    disabled: index === 2,
  }));

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    closeOnSelect: true,
    composite: false,
    description: faker.lorem.sentence(),
    deselectable: true,
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    lazyMount: false,
    loopFocus: true,
    multiple: false,
    name: faker.lorem.word(),
    options: generateItems(10),
    placeholder: faker.lorem.words(2),
    readOnly: false,
    required: true,
    unmountOnExit: false,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Render the select as a child (useful for custom wrappers).",
    },
    className: {
      control: "text",
      description: "CSS class name to apply to the root element.",
    },
    closeOnSelect: {
      control: "boolean",
      description: "Whether to close the dropdown when an item is selected.",
    },
    composite: {
      control: "boolean",
      description:
        "Enable composite behavior (keyboard navigation enhancements).",
    },
    defaultHighlightedValue: {
      control: "text",
      description: "ID of the item to highlight by default.",
    },
    defaultOpen: {
      control: "boolean",
      description:
        "Whether the select dropdown is open by default (uncontrolled mode).",
    },
    defaultValue: {
      control: "object",
      description: "Initial selected value(s) in uncontrolled mode.",
      table: {
        type: { summary: "string[]" },
      },
    },
    description: {
      control: "text",
      description: "Helper text shown below the select for accessibility.",
    },
    deselectable: {
      control: "boolean",
      description: "Allows the user to deselect a selected item.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the entire select component.",
    },
    errorMessage: {
      control: "text",
      description: "Error message to display under the field.",
    },
    form: {
      control: "text",
      description: "The form ID the select is associated with.",
    },
    highlightedValue: {
      control: "text",
      description:
        "The ID of the currently highlighted item (controlled mode).",
    },
    id: {
      control: "text",
      description: "Unique ID for the select element.",
    },
    lazyMount: {
      control: "boolean",
      description: "Mount the dropdown content only on first open.",
    },
    loopFocus: {
      control: "boolean",
      description: "Loops keyboard focus at the end of the list.",
    },
    multiple: {
      control: "boolean",
      description: "Enable multiple selection.",
    },
    name: {
      control: "text",
      description: "The name of the form field.",
    },
    options: {
      control: "object",
      description:
        "Array of selectable items with `id`, `label`, and optional `description` and `disabled`.",
      table: {
        type: { summary: "SelectItem[]" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text shown when no value is selected.",
    },
    positioning: {
      control: "object",
      description:
        "Popover positioning configuration (placement, offset, etc.).",
    },
    readOnly: {
      control: "boolean",
      description: "Prevents the user from changing the value.",
    },
    required: {
      control: "boolean",
      description: "Marks the field as required for form validation.",
    },
    scrollToIndexFn: {
      control: false,
      description: "Custom function to scroll to a specific item by index.",
      table: {
        type: { summary: "(details: any) => void" },
      },
    },
    unmountOnExit: {
      control: "boolean",
      description: "Unmount dropdown from DOM when closed.",
    },
    validationState: {
      control: "select",
      options: Object.values(ValidationStateEnum),
      description: "Controls the visual validation state.",
      table: {
        type: { summary: '"valid" | "invalid"' },
      },
    },
    withField: {
      control: "boolean",
      description: "Wraps the select in a labeled form field.",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {};

export const Basic: Story = {
  args,
};

export const WithField: Story = {
  args: {
    ...args,
    withField: true,
  },
};
