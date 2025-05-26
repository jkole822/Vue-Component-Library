// Packages
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Components
import AngleSlider from "./story.vue";

// Types
import { AngleSliderDirEnum } from "./types.ts";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "AngleSlider",
  component: AngleSlider,
  tags: ["autodocs"],
  args: {
    defaultValue: 90,
    description: faker.lorem.sentence(),
    dir: AngleSliderDirEnum.LTR,
    errorMessage: faker.lorem.sentence(),
    id: uuid(),
    label: faker.lorem.words(2),
    markers: [0, 45, 90, 135, 180, 225, 270, 315],
    modelValue: 90,
    size: 200,
    step: 1,
    strokeWidth: 20,
    thumbSize: 20,
    unit: "°",
  },
  argTypes: {
    asChild: {
      control: "boolean",
      description:
        "Use the provided child element as the default rendered element, combining their props and behavior.",
    },
    className: {
      control: "text",
      description: "Custom class name for the slider container.",
    },
    defaultValue: {
      control: "number",
      description:
        "The initial value of the slider. Use when you don't need to control the value of the slider.",
    },
    description: {
      control: "text",
      description:
        "Description text displayed below the radio group (often for accessibility).",
    },
    dir: {
      control: "select",
      description: "The document's text/writing direction.",
      options: Object.values(AngleSliderDirEnum),
    },
    disabled: {
      control: "boolean",
      description: "Whether the slider is disabled.",
    },
    errorMessage: {
      control: "text",
      description: "Error message displayed if validation fails.",
    },
    getRootNode: {
      control: false,
      description:
        "A root node to correctly resolve document in custom environments. (e.g. iframes, Electron)",
      table: { type: { summary: "() => Node | Document | ShadowRoot" } },
    },
    id: {
      control: "text",
      description: "The unique identifier of the machine.",
    },
    label: {
      control: "text",
      description: "Visible label of the slider.",
    },
    modelValue: {
      control: "number",
      description: "The v-model value of the angle slider.",
    },
    name: {
      control: "text",
      description: "The name of the slider. Useful for form submission.",
    },
    readOnly: {
      control: "boolean",
      description: "Whether the slider is read-only.",
    },
    size: {
      control: "number",
      description: "Width and height of the slider.",
    },
    step: {
      control: "number",
      description: "The step value for the slider.",
    },
    strokeWidth: {
      control: "number",
      description: "Thickness of the slider.",
    },
    thumbSize: {
      control: "number",
      description: "Width and height of the slider thumb.",
    },
    unit: {
      control: "text",
      description:
        "Text appended after the value text within the angle slider.",
    },
    validationState: {
      control: "select",
      options: Object.values(ValidationStateEnum),
      description: "Controls the visual validation state.",
      table: {
        type: { summary: '"valid" | "invalid"' },
      },
    },
    withField: {
      control: "boolean",
      description: "Wraps the select in a labeled form field.",
    },
  },
} satisfies Meta<typeof AngleSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const WithField: Story = {
  args: {
    withField: true
  }
};
