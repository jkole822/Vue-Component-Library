// Packages
import { faker } from "@faker-js/faker";

// Components
import Checkbox from "./story.vue";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    asChild: { control: "boolean" },
    checked: { table: { disable: true } },
    className: { control: "text" },
    validationState: {
      control: "select",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    value: { control: "text" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultChecked: false,
  description: faker.lorem.sentence(),
  disabled: false,
  errorMessage: faker.lorem.sentence(),
  name: faker.lorem.word(),
  readOnly: false,
  required: false,
};

export const Basic: Story = {
  args,
};

export const WithField: Story = {
  args: {
    ...args,
    withField: true,
  },
};
