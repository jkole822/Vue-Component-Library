// Packages
import { faker } from "@faker-js/faker";

// Components
import ColorPicker from "./story.vue";

// Types
import { ColorPickerFormatEnum } from "./types.ts";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "ColorPicker",
  component: ColorPicker,
  tags: ["autodocs"],
  args: {
    defaultFormat: ColorPickerFormatEnum.RGBA,
    description: faker.lorem.sentence(),
    errorMessage: faker.lorem.sentence(),
    label: faker.lorem.word(),
    name: faker.lorem.word(),
    savedColors: [
      "rgb(251, 44, 54)",
      "rgb(255, 105, 0)",
      "rgb(253, 154, 0)",
      "rgb(239, 177, 0)",
      "rgb(0, 201, 81)",
      "rgb(0, 188, 125)",
      "rgb(0, 187, 167)",
      "rgb(0, 184, 219)",
      "rgb(0, 166, 244)",
      "rgb(43, 127, 255)",
      "rgb(97, 95, 255)",
      "rgb(142, 81, 255)",
      "rgb(173, 70, 255)",
      "rgb(225, 42, 251)",
      "rgb(246, 51, 154)",
      "rgb(255, 32, 86)",
    ],
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Use the provided child element as the default rendered element, combining their props and behavior.",
    },
    className: {
      control: "text",
      description: "Class that is applied to top level element.",
    },
    closeOnSelect: {
      control: "boolean",
      description:
        "Whether to close the color picker when a swatch is selected.",
      table: { defaultValue: { summary: "false" } },
    },
    defaultFormat: {
      control: "select",
      description:
        "The initial color format when rendered. Use when you don't need to control the color format of the color picker.",
      options: Object.values(ColorPickerFormatEnum),
      table: { defaultValue: { summary: `${ColorPickerFormatEnum.RGBA}` } },
    },
    defaultOpen: {
      control: "boolean",
      description:
        "The initial open state of the color picker when rendered. Use when you don't need to control the open state of the color picker.",
    },
    description: {
      control: "text",
      description: "The field description.",
    },
    disabled: {
      control: "boolean",
      description: "Disables the field and its associated input.",
    },
    errorMessage: {
      control: "text",
      description:
        "Field error message displayed when `validationState` is `invalid`.",
    },
    hexInput: {
      control: "boolean",
      description: "Displays hexadecimal input instead of default RGBA or HSLA channels",
    },
    id: {
      control: "text",
      description: "The unique identifier of the machine.",
    },
    initialFocusEl: {
      control: false,
      description: "The initial focus element when the color picker is opened.",
      table: { type: { summary: "() => HTMLElement | null" } },
    },
    label: {
      control: "text",
      description: "Field label text",
    },
    lazyMount: {
      control: "boolean",
      description: "Whether to enable lazy mounting.",
      table: { defaultValue: { summary: "false" } },
    },
    name: {
      control: "boolean",
      description: "The name for the form input.",
    },
    openAutoFocus: {
      control: "boolean",
      description: "Whether to auto focus the color picker when it is opened.",
      table: { defaultValue: { summary: "true" } },
    },
    positioning: {
      control: "object",
      description: "The positioning options for the color picker.",
      table: { type: { summary: "PositioningOptions" } },
    },
    readOnly: {
      control: "boolean",
      description: "Marks the field as read-only.",
    },
    required: {
      control: "boolean",
      description: "Marks the field as required.",
    },
    savedColors: {
      control: "object",
      description:
        "List of saved colors (e.g. 'red', 'rgb(251 44 54)', 'hsl(345.32 100% 56%)'",
    },
    unmountOnExit: {
      control: "boolean",
      description: "Whether to unmount on exit.",
      table: { defaultValue: { summary: "false" } },
    },
    validationState: {
      control: "select",
      description: "Indicates whether field is `valid` or `invalid`",
      options: [ValidationStateEnum.Valid, ValidationStateEnum.Invalid],
    },
    withField: {
      control: "boolean",
      description:
        "Wraps the color picker in a field container with label, description, etc.",
    },
  },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RGBA: Story = {};

export const HSLA: Story = {
  args: {
    defaultFormat: ColorPickerFormatEnum.HSLA,
  },
};

export const RGBAWithHexInput: Story = {
  args: {
    hexInput: true,
  },
};

export const HSLAWithHexInput: Story = {
  args: {
    defaultFormat: ColorPickerFormatEnum.HSLA,
    hexInput: true,
  },
};

export const WithField: Story = {
  args: {
    withField: true,
  },
};
