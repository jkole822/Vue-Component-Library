// Packages
import { faker } from "@faker-js/faker";

// Components
import Popover from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  autoFocus: true,
  closeOnEscape: true,
  closeOnInteractOutside: true,
  description: faker.lorem.paragraph(),
  lazyMount: false,
  modal: true,
  portalled: true,
  title: faker.lorem.words(2),
  unmountOnExit: false,
};

export const Basic: Story = {
  args,
};
