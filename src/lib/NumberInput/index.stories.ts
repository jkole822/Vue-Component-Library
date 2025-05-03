// Packages
import { faker } from "@faker-js/faker";

// Components
import NumberInput from "./story.vue";

// Types
import { NumberInputModeEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
  argTypes: {
    asChild: { control: "boolean" },
    disabled: { control: "boolean" },
    formatOptions: { control: "object" },
    id: { control: "text" },
    inputMode: {
      control: "select",
      options: [
        NumberInputModeEnum.Decimal,
        NumberInputModeEnum.Number,
        NumberInputModeEnum.Phone,
        NumberInputModeEnum.Text,
      ],
    },
    locale: { control: "text" },
    max: { control: "number" },
    min: { control: "number" },
    modelValue: { table: { disable: true } },
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
  inputMode: NumberInputModeEnum.Decimal,
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
