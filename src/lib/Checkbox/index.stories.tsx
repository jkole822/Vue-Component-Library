// Packages
import { faker } from "@faker-js/faker";

// Components
import Checkbox from "./story.vue";

// Types
import { CheckboxValidationStateEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    validationState: {
      control: "select",
      options: [
        CheckboxValidationStateEnum.Valid,
        CheckboxValidationStateEnum.Invalid,
      ],
    },
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

export const DefaultChecked: Story = {
  args: {
    ...args,
    defaultChecked: true,
  },
};

export const WithField: Story = {
  args: {
    ...args,
    withField: true,
  },
};
