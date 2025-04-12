// Packages
import { faker } from "@faker-js/faker";
import { h } from "vue";

// Components
import Accordion from "./index.vue";

// Styles
import { IconStyles } from "../../styles";

// Types
import { HeadingLevelEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
    headingLevel: {
      control: {
        type: "select",
      },
      options: [
        HeadingLevelEnum.One,
        HeadingLevelEnum.Two,
        HeadingLevelEnum.Three,
        HeadingLevelEnum.Four,
        HeadingLevelEnum.Five,
        HeadingLevelEnum.Six,
      ],
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Single: Story = {
  args: {
    collapsible: false,
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
  },
};

export const SingleWithDefault: Story = {
  args: {
    collapsible: false,
    defaultValue: ["item-1"],
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
  },
};

export const Multiple: Story = {
  args: {
    collapsible: false,
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
    multiple: true,
  },
};

export const MultipleWithDefault: Story = {
  args: {
    collapsible: false,
    defaultValue: ["item-1", "item-2"],
    headingLevel: HeadingLevelEnum.Three,
    items: generateItems(5),
    multiple: true,
  },
};
