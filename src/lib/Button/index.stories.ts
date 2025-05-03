// Packages
import { h } from "vue";
import { fn } from "@storybook/test";

// Components
import Button from "./index.vue";

// Styles
import { IconStyles } from "../../styles";

// Types
import { ButtonVariantsEnum } from "./types";
import type { Props } from "./types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    ariaControls: { control: "text" },
    ariaExpanded: { control: "boolean" },
    ariaHaspopup: {
      control: "select",
      options: [
        undefined,
        true,
        false,
        "dialog",
        "menu",
        "grid",
        "listbox",
        "tree",
        "false",
        "true",
      ],
    },
    ariaHidden: { control: "boolean" },
    ariaLabel: { control: "text" },
    className: { control: "text" },
    href: { control: "text" },
    showBottomGlow: { control: "boolean" },
    tabIndex: {
      control: "select",
      options: [undefined, 0, -1],
    },
    target: {
      control: "select",
      options: ["_blank", "_self", "_parent", "_top", "framename"],
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: [
        ButtonVariantsEnum.fill,
        ButtonVariantsEnum.outline,
        ButtonVariantsEnum.lineOne,
        ButtonVariantsEnum.lineTwo,
      ],
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonContent = () => [
  h("span", { class: "mr-2" }, "Button"),
  h("i", { class: IconStyles, "aria-hidden": "true" }),
];

const args = {
  ariaControls: "aria-controls",
  disabled: false,
  id: "button-story-id",
  variant: ButtonVariantsEnum.fill,
};

const render = (storyArgs: Props) => ({
  components: { Button },
  setup() {
    return { args: storyArgs, ButtonContent };
  },
  render() {
    return h(Button, storyArgs, {
      default: () => ButtonContent(),
    });
  },
});

export const Fill: Story = {
  args,
  render,
};

export const Outline: Story = {
  args: {
    ...args,
    variant: ButtonVariantsEnum.outline,
  },
  render,
};

export const LineOne: Story = {
  args: {
    ...args,
    href: "https://vuejs.org/",
    target: "_self",
    variant: ButtonVariantsEnum.lineOne,
  },
  render,
};

export const LineTwo: Story = {
  args: {
    ...args,
    href: "https://vuejs.org/",
    target: "_blank",
    variant: ButtonVariantsEnum.lineTwo,
  },
  render,
};
