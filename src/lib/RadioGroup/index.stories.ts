// Packages
import { faker } from "@faker-js/faker";

// Components
import RadioGroup from "./story.vue";

// Types
import { RadioGroupOrientationEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const items = [faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)];

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    items,
    name: faker.lorem.word(),
    orientation: RadioGroupOrientationEnum.Vertical,
    readOnly: false,
    required: true,
    validationState: ValidationStateEnum.Valid,
    withField: false
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Render the component as a child (custom wrapper).",
    },
    className: {
      control: "text",
      description: "Custom class name for the component.",
    },
    defaultValue: {
      control: "text",
      description: "Default selected value in uncontrolled mode.",
    },
    description: {
      control: "text",
      description:
        "Description text displayed below the radio group (often for accessibility).",
    },
    disabled: {
      control: "boolean",
      description: "Disables the entire radio group.",
    },
    errorMessage: {
      control: "text",
      description: "Error message displayed if validation fails.",
    },
    form: {
      control: "text",
      description: "The form element the radio group is associated with.",
    },
    id: {
      control: "text",
      description: "ID attribute for the radio group.",
    },
    items: {
      control: "object",
      description: "Array of strings to display as radio options.",
      table: {
        type: { summary: "string[]" },
      },
    },
    modelValue: {
      control: "text",
      description: "Selected value in controlled mode.",
    },
    name: {
      control: "text",
      description:
        "Name attribute for the group (useful for form submissions).",
    },
    orientation: {
      control: "select",
      options: Object.values(RadioGroupOrientationEnum),
      description: "Layout direction of the radio buttons.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"vertical"' },
      },
    },
    readOnly: {
      control: "boolean",
      description: "Prevents changing the selection but keeps the form data.",
    },
    required: {
      control: "boolean",
      description: "Marks the radio group as required for form submission.",
    },
    validationState: {
      control: { type: "select" },
      options: Object.values(ValidationStateEnum),
      description: "Displays a visual cue for the validation state.",
      table: {
        type: { summary: '"valid" | "invalid"' },
      },
    },
    withField: {
      control: "boolean",
      description:
        "Wraps the radio group in a field container with label, description, etc.",
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {};

export const Horizontal = {
  args: {
    orientation: RadioGroupOrientationEnum.Horizontal,
  },
};

export const VerticalWithField: Story = {
  args: {
    withField: true,
  },
};

export const HorizontalWithField = {
  args: {
    orientation: RadioGroupOrientationEnum.Horizontal,
    withField: true,
  },
};
