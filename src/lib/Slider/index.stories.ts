// Packages
import { faker } from "@faker-js/faker";

// Components
import Slider from "./story.vue";

// Types
import { SliderDirEnum, SliderOrientationEnum } from "./types";
import { ValidationStateEnum } from "../../types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    description: faker.lorem.sentence(),
    dir: SliderDirEnum.LTR,
    errorMessage: faker.lorem.sentence(),
    markers: [25, 50, 75],
    max: 100,
    min: 0,
    minStepsBetweenThumbs: 0,
    modelValue: [0],
    name: faker.lorem.word(),
    orientation: SliderOrientationEnum.Horizontal,
    step: 1,
    thumbSize: { height: 20, width: 20 },
    validationState: ValidationStateEnum.Valid,
  },
  argTypes: {
    "aria-label": {
      control: "text",
      description:
        "The aria-label of each slider thumb. Useful for providing an accessible name to the slider",
    },
    "aria-labelledby": {
      control: "object",
      description:
        "The `id` of the elements that labels each slider thumb. Useful for providing an accessible name to the slider.",
      table: { type: { summary: "string[]" } },
    },
    asChild: {
      control: "boolean",
      description: "Render the slider as a child of a custom wrapper element.",
    },
    className: {
      control: "text",
      description: "Custom class name for the slider container.",
    },
    dir: {
      control: "select",
      description: "The document's text/writing direction.",
      options: Object.values(SliderDirEnum),
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables interaction with the slider.",
    },
    form: {
      control: "text",
      description: "ID of the form this slider is associated with.",
    },
    getAriaValueText: {
      action: "getAriaValueText",
      description:
        "Function that returns a human readable value for the slider thumb.",
      table: { type: { summary: "(details: ValueTextDetails) => string" } },
    },
    getRootNode: {
      action: "getRootNode",
      description:
        "A root node to correctly resolve document in custom environments. E.x.: Iframes, Electron.",
      table: { type: { summary: "() => Node | Document | ShadowRoot" } },
    },
    id: {
      control: "text",
      description: "Unique identifier for the slider.",
    },
    markers: {
      control: "object",
      description:
        "Places markers on the slider track according to the provided list of numeric values.",
      table: { type: { summary: "number[]" } },
    },
    max: {
      control: "number",
      description: "Maximum value of the slider.",
    },
    min: {
      control: "number",
      description: "Minimum value of the slider.",
    },
    modelValue: {
      control: "object",
      description: "Current value(s) of the slider in controlled mode.",
      table: { type: { summary: "number[]" } },
    },
    name: {
      control: "text",
      description: "Name for the hidden input used in form submissions.",
    },
    orientation: {
      control: "select",
      options: Object.values(SliderOrientationEnum),
      description: "Orientation of the slider track.",
      table: {
        type: { summary: '"horizontal" | "vertical"' },
        defaultValue: { summary: '"horizontal"' },
      },
    },
    step: {
      control: "number",
      description: "Step size between slider values.",
    },
    thumbSize: {
      control: "object",
      description: "The slider thumbs dimensions.",
      table: {
        type: { summary: "{ width: number; height: number }" },
      },
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
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {};

export const Vertical: Story = {
  args: {
    orientation: SliderOrientationEnum.Vertical,
  },
};

export const MultiValue: Story = {
  args: {
    modelValue: [25, 75],
  },
};

export const WithField: Story = {
  args: {
    withField: true,
  },
};
