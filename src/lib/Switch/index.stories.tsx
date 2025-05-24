// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Switch from "./story.vue";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    checked: false,
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    id: uuid(),
    name: faker.lorem.word(),
    required: false,
    value: "on",
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description: "Renders the component as a child element.",
    },
    checked: {
      control: "boolean",
      description: "The controlled checked state.",
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    defaultChecked: {
      control: "boolean",
      description: "The initial checked state when rendered.",
    },
    description: {
      control: "text",
      description: "Field description displayed when `withField` is `true`.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox.",
    },
    errorMessage: {
      control: "text",
      description:
        "Field error message displayed when `withField` is true and `validationState` is `invalid`.",
    },
    form: {
      control: "text",
      description: "The id of the form that the checkbox belongs to.",
    },
    id: {
      control: "text",
      description: "The unique identifier of the machine.",
    },
    name: {
      control: "text",
      description: "Name attribute for form submission.",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the checkbox is read-only.",
    },
    required: {
      control: "boolean",
      description: "Marks the checkbox as required.",
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: {
      control: "text",
      description: "Value attribute for form submission.",
    },
    withField: {
      control: "boolean",
      description:
        "Use label, description, and error message with validation state.",
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithField: Story = {
  args: {
    withField: true,
  },
};
