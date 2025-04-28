// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import NumberInput from "./story.vue";

// Types
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    locale: { control: "text" },
    max: { control: "number" },
    min: { control: "number" },
    pattern: { control: "text" },
    validationState: {
      control: "select",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  allowMouseWheel: true,
  allowOverflow: false,
  clampValueOnBlur: true,
  description: faker.lorem.sentence(),
  errorMessage: faker.lorem.sentence(),
  focusInputOnChange: true,
  id: uuid(),
  name: faker.lorem.word(),
  readOnly: false,
  required: true,
  spinOnPress: true,
  step: 1,
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
