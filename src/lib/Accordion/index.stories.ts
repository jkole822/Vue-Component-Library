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

const meta = {
  title: "Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    asChild: { control: "boolean" },
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
    items: { table: { disable: true } },
    modelValue: { table: { disable: true } },
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

const args = {
  collapsible: false,
  disabled: false,
  headingLevel: HeadingLevelEnum.Three,
  items: generateItems(5),
  lazyMount: false,
  unmountOnExit: false,
};

export const Single: Story = {
  args,
};

export const SingleWithDefault: Story = {
  args: {
    ...args,
    defaultValue: ["item-1"],
  },
};

export const Multiple: Story = {
  args: {
    ...args,
    multiple: true,
  },
};

export const MultipleWithDefault: Story = {
  args: {
    ...args,
    defaultValue: ["item-1", "item-2"],
    multiple: true,
  },
};
