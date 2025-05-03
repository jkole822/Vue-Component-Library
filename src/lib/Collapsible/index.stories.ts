// Components
import Collapsible from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {
    asChild: { control: "boolean" },
    className: { control: "text" },
    open: { table: { disable: true } },
  },
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  defaultOpen: false,
  disabled: false,
  lazyMount: false,
  unmountOnExit: false,
};

export const Basic: Story = {
  args,
};

export const DefaultOpen: Story = {
  args: {
    ...args,
    defaultOpen: true,
  },
};
