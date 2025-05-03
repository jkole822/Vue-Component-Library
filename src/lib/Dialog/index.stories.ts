// Packages
import { faker } from "@faker-js/faker";

// Components
import Dialog from "./story.vue";

// Types
import { DialogRoleEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    "aria-label": { control: "text" },
    id: { control: "text" },
    open: { table: { disabled: true } },
    role: {
      control: "select",
      options: [DialogRoleEnum.Alert, DialogRoleEnum.Dialog],
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    closeOnEscape: true,
    closeOnInteractOutside: true,
    description: faker.lorem.paragraph(),
    lazyMount: false,
    modal: true,
    preventScroll: true,
    restoreFocus: true,
    role: DialogRoleEnum.Dialog,
    title: faker.lorem.words(2),
    trapFocus: true,
    unmountOnExit: false,
  },
};
