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
  argTypes: {
    className: { control: "text" },
    size: { control: "number" },
    thickness: { control: "number" },
  },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  label: faker.lorem.word(),
  min: 0,
  max: 100,
  value: 0,
};

export const Linear: Story = {
  args,
};

export const Circular: Story = {
  args: {
    ...args,
    variant: ProgressVariantEnum.Circular,
  },
};
