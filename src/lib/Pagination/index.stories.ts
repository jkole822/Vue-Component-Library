// Components
import Pagination from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";
import { PaginationTypeEnum } from "./types.ts";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
  argTypes: {
    asChild: { control: "boolean" },
    className: { control: "text" },
    defaultPage: { control: "number" },
    defaultPageSize: { control: "number" },
    id: { control: "text" },
    page: { table: { disable: true } },
    pageSize: { table: { disable: true } },
    type: {
      control: "select",
      options: [PaginationTypeEnum.Button, PaginationTypeEnum.Link],
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

const args = {
  count: 100,
  hideNextButton: false,
  hidePreviousButton: false,
  page: 1,
  pageSize: 10,
  siblingCount: 1,
};

export const Basic: Story = {
  args,
};

export const HiddenPreviousNextButtons: Story = {
  args: {
    ...args,
    hideNextButton: true,
    hidePreviousButton: true,
    siblingCount: 3,
  },
};
