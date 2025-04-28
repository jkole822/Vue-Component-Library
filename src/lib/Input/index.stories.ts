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
  id: uuid(),
  name: faker.lorem.word(),
  placeholder: faker.lorem.words(2),
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
    minLength: 8,
    maxLength: 16,
    type: InputTypeEnum.password,
  },
};
