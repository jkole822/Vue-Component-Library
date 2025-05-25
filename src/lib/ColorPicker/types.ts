import type { ValidationState } from "../../types";

export enum ColorPickerFormatEnum {
  RGBA = "rgba",
  HSLA = "hsla",
}

export type ColorPickerFormat =
  (typeof ColorPickerFormatEnum)[keyof typeof ColorPickerFormatEnum];

export interface Props {
  asChild?: boolean;
  className?: string;
  closeOnSelect?: boolean;
  defaultFormat?: ColorPickerFormat;
  defaultOpen?: boolean;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  hexInput?: boolean;
  id?: string;
  initialFocusEl?: () => HTMLElement | null;
  label?: string;
  lazyMount?: boolean;
  name?: string;
  openAutoFocus?: boolean;
  positioning?: {
    placement?:
      | "top"
      | "top-start"
      | "top-end"
      | "bottom"
      | "bottom-start"
      | "bottom-end"
      | "left"
      | "left-start"
      | "left-end"
      | "right"
      | "right-start"
      | "right-end";
    flip?: boolean;
    gutter?: number;
    strategy?: "absolute" | "fixed";
  };
  readOnly?: boolean;
  required?: boolean;
  savedColors?: string[];
  unmountOnExit?: boolean;
  validationState?: ValidationState;
  withField?: boolean;
}
