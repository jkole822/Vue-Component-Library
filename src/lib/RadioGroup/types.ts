import type { RadioGroupValueChangeDetails } from "@ark-ui/vue";
import type { ValidationState } from "../../types";

export enum RadioGroupOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type RadioGroupOrientation =
  | RadioGroupOrientationEnum.Horizontal
  | RadioGroupOrientationEnum.Vertical;

export interface Props {
  className?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  items: string[];
  name: string;
  onValueChange: (details: RadioGroupValueChangeDetails) => void;
  orientation?: RadioGroupOrientation;
  readOnly?: boolean;
  required?: boolean;
  validationState?: ValidationState;
  value: string;
  withField?: boolean;
}
