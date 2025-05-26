import type { ValidationState } from "../../types";

export enum AngleSliderDirEnum {
  LTR = "ltr",
  RTL = "rtl",
}

export type AngleSliderDir =
  (typeof AngleSliderDirEnum)[keyof typeof AngleSliderDirEnum];

export interface Props {
  asChild?: boolean;
  className?: string;
  defaultValue?: number;
  description?: string;
  dir?: AngleSliderDir;
  disabled?: boolean;
  errorMessage?: string;
  getRootNode?: () => Node | Document | ShadowRoot;
  id?: string;
  label?: string;
  markers?: number[];
  modelValue?: number;
  name?: string;
  readOnly?: boolean;
  size: number;
  step?: number;
  strokeWidth: number;
  thumbSize: number;
  unit?: string;
  validationState?: ValidationState;
  withField?: boolean;
}
