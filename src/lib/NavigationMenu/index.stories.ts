// Packages
import { faker } from "@faker-js/faker";

// Components
import NavigationMenu from "./index.vue";

// Types
import { NavigationMenuOrientationEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/vue3";

const generateItems = (length: number, addImage?: boolean) =>
  Array.from({ length }).map((_, index) => ({
    description: faker.lorem.sentence(),
    disabled: index === 1,
    href: "#",
    image:
      addImage && index === 0
        ? {
            alt: faker.lorem.words(3),
            src: faker.image.url({ height: 48, width: 48 }),
            title: faker.lorem.sentence(),
          }
        : undefined,
    title: faker.lorem.words(2),
  }));

const generateMenuItems = (length: number) =>
  Array.from({ length }).map((_, index) => ({
    disabled: index === 1,
    href: index === length - 1 ? "https://www.solidjs.com/" : undefined,
    items:
      index === length - 1
        ? []
        : index === 0
          ? generateItems(4, true)
          : generateItems(6),
    target: index === length - 1 ? ("_blank" as const) : undefined,
    title: faker.lorem.word(),
  }));

const meta = {
  title: "NavigationMenu",
  component: NavigationMenu,
  tags: ["autodocs"],
  args: {
    className:
      "bg-neutral-secondary-950 flex fixed items-center justify-between p-4 w-screen",
    homeHref: "#",
    icon: {
      alt: faker.lorem.words(3),
      src: faker.image.url({ height: 80, width: 80 }),
    },
    items: generateMenuItems(5),
    orientation: NavigationMenuOrientationEnum.Horizontal,
    title: faker.lorem.word(),
  },
  argTypes: {
    className: {
      control: "text",
      description: "Custom class applied to the root menu container.",
    },
    homeHref: {
      control: "text",
      description: 'Optional link used for the "Home" or brand area.',
    },
    icon: {
      control: "object",
      description:
        "Optional image/icon displayed next to the title or home link. Should match `ImageProps`.",
    },
    items: {
      control: "object",
      description:
        "Array of trigger items. Each contains a title, optional href, and child items.",
    },
    orientation: {
      control: "select",
      description: "The orientation of the navigation menu.",
      options: [
        NavigationMenuOrientationEnum.Horizontal,
        NavigationMenuOrientationEnum.Vertical,
      ],
    },
    title: {
      control: "text",
      description: "Optional menu title (e.g. app or site name).",
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof NavigationMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    className:
      "bg-neutral-secondary-950 inline-flex fixed items-center justify-between p-4 w-screen sm:[&_nav]:w-full sm:[&_.navigation-menu-root]:items-stretch sm:[&_.navigation-menu-root]:w-full sm:[&_.navigation-menu-trigger]:w-full sm:flex-col sm:gap-4 sm:h-screen sm:items-start sm:justify-stretch sm:w-auto",
    orientation: NavigationMenuOrientationEnum.Vertical,
  },
};
