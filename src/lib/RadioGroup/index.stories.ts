// Packages
import { faker } from "@faker-js/faker";

// Components
import RadioGroup from "./story.vue";

// Types
import { RadioGroupOrientationEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    form: { control: "text" },
    orientation: {
      control: "select",
      options: [
        RadioGroupOrientationEnum.Horizontal,
        RadioGroupOrientationEnum.Vertical,
      ],
    },
    validationState: {
      control: "select",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [faker.lorem.words(2), faker.lorem.word(), faker.lorem.words(3)];

const args = {
  description: faker.lorem.sentence(),
  disabled: false,
  errorMessage: faker.lorem.sentence(),
  items,
  name: faker.lorem.word(),
  onValueChange: () => {},
  orientation: RadioGroupOrientationEnum.Vertical,
  readOnly: false,
  required: true,
  validationState: ValidationStateEnum.Valid,
  value: "",
};

export const Vertical: Story = {
  args,
};

export const Horizontal = {
  args: {
    ...args,
    orientation: RadioGroupOrientationEnum.Horizontal,
  },
};

export const VerticalWithField: Story = {
  args: {
    ...args,
    withField: true,
  },
};

export const HorizontalWithField = {
  args: {
    ...args,
    orientation: RadioGroupOrientationEnum.Horizontal,
    withField: true,
  },
};
