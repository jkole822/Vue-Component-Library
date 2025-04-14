// Components
import Collapsible from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    disabled: false,
    lazyMount: false,
    unmountOnExit: false,
  },
};
