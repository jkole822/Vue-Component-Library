// Packages
import { faker } from "@faker-js/faker";

// Components
import Dialog from "./story.vue";

// Types
import { DialogRoleEnum } from "./types";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta = {
  title: "Dialog",
  component: Dialog,
  tags: ["autodocs"],
  args: {
    closeOnEscape: true,
    closeOnInteractOutside: true,
    description: faker.lorem.paragraph(),
    lazyMount: false,
    modal: true,
    preventScroll: true,
    restoreFocus: true,
    role: DialogRoleEnum.Dialog,
    title: faker.lorem.words(2),
    trapFocus: true,
    unmountOnExit: false,
  },
  argTypes: {
    "aria-label": {
      control: "text",
      description:
        "Accessible label for the dialog when no visible label is provided.",
    },
    closeOnEscape: {
      control: "boolean",
      description: "Whether pressing Escape should close the dialog.",
    },
    closeOnInteractOutside: {
      control: "boolean",
      description: "Whether clicking outside the dialog should close it.",
    },
    description: {
      control: "text",
      description:
        "Descriptive text for the dialog content, used for accessibility.",
    },
    finalFocusEl: {
      control: false,
      description:
        "Function returning the element that should receive focus after dialog closes.",
      table: {
        type: { summary: "() => HTMLElement | null" },
      },
    },
    id: {
      control: "text",
      description: "ID attribute to uniquely identify the dialog.",
    },
    initialFocusEl: {
      control: false,
      description:
        "Function returning the element that should be focused when the dialog opens.",
      table: {
        type: { summary: "() => HTMLElement | null" },
      },
    },
    lazyMount: {
      control: "boolean",
      description: "Mount dialog content only when open for the first time.",
    },
    modal: {
      control: "boolean",
      description:
        "Whether the dialog should behave modally (disabling outside interaction).",
    },
    open: {
      control: "boolean",
      description: "Whether the dialog is open (controlled mode).",
    },
    persistentElements: {
      control: false,
      description:
        "Array of functions returning elements that should not be hidden to screen readers.",
      table: {
        type: { summary: "(() => Element | null)[]" },
      },
    },
    preventScroll: {
      control: "boolean",
      description: "Prevent scrolling of the document when the dialog is open.",
    },
    restoreFocus: {
      control: "boolean",
      description:
        "Whether to restore focus to the element that was focused before the dialog opened.",
    },
    role: {
      control: "select",
      options: Object.values(DialogRoleEnum),
      description:
        "ARIA role of the dialog for accessibility (`dialog` or `alertdialog`).",
      table: {
        type: { summary: "DialogRole" },
        defaultValue: { summary: '"dialog"' },
      },
    },
    title: {
      control: "text",
      description: "Title of the dialog (used as the accessible name).",
    },
    trapFocus: {
      control: "boolean",
      description: "Trap keyboard focus inside the dialog while it is open.",
    },
    unmountOnExit: {
      control: "boolean",
      description: "Unmount the dialog content from the DOM when closed.",
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
