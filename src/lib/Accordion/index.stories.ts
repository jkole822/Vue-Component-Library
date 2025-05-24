// Packages
import { faker } from "@faker-js/faker";
import { h } from "vue";

// Components
import Accordion from "./story.vue";

// Styles
import { IconStyles } from "../../styles";

// Types
import { HeadingLevelEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const AccordionContent = () => [
  h("span", { class: "mr-2" }, "Content"),
  h("i", { class: IconStyles, "aria-hidden": "true" }),
];

const generateItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    content: AccordionContent,
    description: faker.lorem.sentence(),
    disabled: index === 2,
    id: `item-${index + 1}`,
    title: faker.lorem.words(3),
  }));

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    collapsible: false,
    disabled: false,
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
    lazyMount: false,
    unmountOnExit: false,
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Whether to render the accordion as a child component (e.g., within a custom wrapper).",
    },
    className: {
      control: "text",
      description:
        "Additional CSS class names to apply to the accordion container.",
    },
    collapsible: {
      control: "boolean",
      description: "Allow closing all items so that none are expanded.",
    },
    defaultValue: {
      control: "object",
      description:
        "The keys of the items that should be expanded by default (uncontrolled mode).",
      table: {
        type: { summary: "string[]" },
        defaultValue: { summary: "[]" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disable the entire accordion.",
    },
    headingLevel: {
      control: "select",
      description: "The heading level to use for accessibility (e.g., h2, h3).",
      options: [
        HeadingLevelEnum.One,
        HeadingLevelEnum.Two,
        HeadingLevelEnum.Three,
        HeadingLevelEnum.Four,
        HeadingLevelEnum.Five,
        HeadingLevelEnum.Six,
      ],
    },
    items: {
      control: "object",
      description:
        "Array of accordion item data including value, trigger, and content.",
      table: {
        type: { summary: "AccordionItem[]" },
      },
    },
    lazyMount: {
      control: "boolean",
      description:
        "Whether to mount the content only when the item is expanded for the first time.",
    },
    modelValue: {
      control: "object",
      description:
        "The keys of the items that are currently expanded (controlled mode).",
    },
    multiple: {
      control: "boolean",
      description:
        "Allow multiple accordion items to be open at the same time.",
    },
    unmountOnExit: {
      control: "boolean",
      description: "Whether to unmount content when the item is collapsed.",
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {};

export const SingleWithDefault: Story = {
  args: {
    defaultValue: ["item-1"],
  },
};

export const Multiple: Story = {
  args: {
    multiple: true,
  },
};

export const MultipleWithDefault: Story = {
  args: {
    defaultValue: ["item-1", "item-2"],
    multiple: true,
  },
};
