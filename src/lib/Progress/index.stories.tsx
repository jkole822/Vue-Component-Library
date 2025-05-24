// Packages
import { faker } from "@faker-js/faker";

// Components
import Progress from "./story.vue";

// Types
import { ProgressVariantEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Progress",
  component: Progress,
  tags: ["autodocs"],
  args: {
    label: faker.lorem.word(),
    min: 0,
    max: 100,
    modelValue: 0,
  },
  argTypes: {
    className: {
      control: "text",
      description: "Custom CSS class names applied to the progress container.",
    },
    label: {
      control: "text",
      description:
        "Accessible label for the progress bar, used by screen readers.",
    },
    max: {
      control: "number",
      description: "Maximum progress value.",
    },
    min: {
      control: "number",
      description: "Minimum progress value.",
    },
    modelValue: {
      control: "number",
      description: "Current progress value.",
    },
    size: {
      control: "number",
      description: "Size of the progress component (applies to circular only).",
    },
    thickness: {
      control: "number",
      description: "Thickness of the stroke for the circular progress variant.",
    },
    variant: {
      control: "select",
      options: Object.values(ProgressVariantEnum),
      description: "Choose between linear or circular progress indicator.",
      table: {
        type: { summary: "ProgressVariant" },
        defaultValue: { summary: '"linear"' },
      },
    },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Linear: Story = {};

export const Circular: Story = {
  args: {
    variant: ProgressVariantEnum.Circular,
  },
};
