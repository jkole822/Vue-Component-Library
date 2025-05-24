// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import Input from "./story.vue";

// Types
import { AutoCompleteEnum, InputTypeEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    autoComplete: AutoCompleteEnum.off,
    description: faker.lorem.sentence(),
    disabled: false,
    errorMessage: faker.lorem.sentence(),
    id: uuid(),
    name: faker.lorem.word(),
    readOnly: false,
    required: true,
    type: InputTypeEnum.text,
  },
  argTypes: {
    autoComplete: {
      control: {
        type: "select",
      },
      description:
        "Assists users by offering suggestions based on the type of auto-complete.",
      options: [
        AutoCompleteEnum.currentPassword,
        AutoCompleteEnum.email,
        AutoCompleteEnum.name,
        AutoCompleteEnum.newPassword,
        AutoCompleteEnum.off,
        AutoCompleteEnum.username,
      ],
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    description: {
      control: "text",
      description: "The field description.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the field and its associated input.",
    },
    errorMessage: {
      control: "text",
      description:
        "Field error message displayed when `validationState` is `invalid`.",
    },
    id: {
      control: "text",
      description: "The unique identifier of the machine.",
    },
    modelValue: {
      control: "text",
      description: "The model value of the field.",
    },
    name: {
      control: "boolean",
      description:
        "The `name` attribute of the fields input. Useful for form submission.",
    },
    raiseLabel: {
      control: "boolean",
      description: "Holds the label at the top of the field.",
    },
    readOnly: {
      control: "boolean",
      description: "Marks the field as read-only.",
    },
    required: {
      control: "boolean",
      description: "Marks the field as required.",
    },
    type: {
      control: {
        type: "select",
      },
      description:
        "Informs the input which type of data is expected to be provided by the user.",
      options: [
        InputTypeEnum.date,
        InputTypeEnum.email,
        InputTypeEnum.password,
        InputTypeEnum.text,
      ],
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const DateField: Story = {
  args: {
    type: InputTypeEnum.date,
  },
};

export const PasswordField: Story = {
  args: {
    autoComplete: AutoCompleteEnum.newPassword,
    type: InputTypeEnum.password,
  },
};
