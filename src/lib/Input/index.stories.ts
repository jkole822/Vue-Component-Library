// Packages
import { faker } from "@faker-js/faker";

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
  argTypes: {
    autoComplete: {
      control: {
        type: "select",
      },
      options: [
        AutoCompleteEnum.currentPassword,
        AutoCompleteEnum.email,
        AutoCompleteEnum.name,
        AutoCompleteEnum.newPassword,
        AutoCompleteEnum.off,
        AutoCompleteEnum.username,
      ],
    },
    id: { control: "text" },
    modelValue: { table: { disable: true } },
    type: {
      control: {
        type: "select",
      },
      options: [
        InputTypeEnum.date,
        InputTypeEnum.email,
        InputTypeEnum.password,
        InputTypeEnum.text,
      ],
    },
    validationState: {
      control: "select",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  autoComplete: AutoCompleteEnum.off,
  description: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  name: faker.lorem.word(),
  readOnly: false,
  required: true,
  type: InputTypeEnum.text,
};

export const Basic: Story = {
  args,
};

export const DateField: Story = {
  args: {
    ...args,
    type: InputTypeEnum.date,
  },
};

export const PasswordField: Story = {
  args: {
    ...args,
    autoComplete: AutoCompleteEnum.newPassword,
    type: InputTypeEnum.password,
  },
};
