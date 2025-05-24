// Components
import Pagination from "./story.vue";

// Types
import type { Meta, StoryObj } from "@storybook/vue3";
import { PaginationTypeEnum } from "./types.ts";

const meta = {
  title: "Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    count: 100,
    hideNextButton: false,
    hidePreviousButton: false,
    page: 1,
    pageSize: 10,
    siblingCount: 1,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Render the pagination as a child component, enabling flexible wrappers.",
    },
    className: {
      control: "text",
      description: "Custom class name(s) for the pagination container.",
    },
    count: {
      control: "number",
      description: "Total number of items across all pages.",
    },
    defaultPage: {
      control: "number",
      description: "Initial page index when the component is uncontrolled.",
    },
    defaultPageSize: {
      control: "number",
      description: "Initial number of items per page when uncontrolled.",
    },
    hideNextButton: {
      control: "boolean",
      description: 'Hide the "Next" pagination button.',
    },
    hidePreviousButton: {
      control: "boolean",
      description: 'Hide the "Previous" pagination button.',
    },
    id: {
      control: "text",
      description: "Unique identifier for the pagination component.",
    },
    page: {
      control: "number",
      description: "Current page number (controlled mode).",
    },
    pageSize: {
      control: "number",
      description: "Number of items per page (controlled mode).",
    },
    siblingCount: {
      control: "number",
      description:
        "Number of sibling page buttons to show around the current page.",
    },
    type: {
      control: "select",
      options: Object.values(PaginationTypeEnum),
      description:
        'The rendering type of the page buttons: "button" or "link".',
      table: {
        type: { summary: "PaginationType" },
        defaultValue: { summary: '"button"' },
      },
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const HiddenPreviousNextButtons: Story = {
  args: {
    hideNextButton: true,
    hidePreviousButton: true,
    siblingCount: 3,
  },
};
