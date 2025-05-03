import type { ValidationState } from "../../types";

export enum RadioGroupOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type RadioGroupOrientation =
  | RadioGroupOrientationEnum.Horizontal
  | RadioGroupOrientationEnum.Vertical;

export interface Props {
  asChild?: boolean;
  className?: string;
  defaultValue?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  id?: string;
  items: string[];
  modelValue?: string;
  name?: string;
  orientation?: RadioGroupOrientation;
  readOnly?: boolean;
  required?: boolean;
  validationState?: ValidationState;
  withField?: boolean;
}
