import type { ValidationState } from "../../types";

export enum NumberInputModeEnum {
  Decimal = "decimal",
  Number = "numeric",
  Phone = "tel",
  Text = "text",
}

export type NumberInputMode =
  | NumberInputModeEnum.Decimal
  | NumberInputModeEnum.Number
  | NumberInputModeEnum.Phone
  | NumberInputModeEnum.Text;

export interface Props {
  allowMouseWheel?: boolean;
  allowOverflow?: boolean;
  asChild?: boolean;
  clampValueOnBlur?: boolean;
  className?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  focusInputOnChange?: boolean;
  form?: string;
  formatOptions?: Intl.NumberFormatOptions;
  id?: string;
  inputMode?: NumberInputMode;
  locale?: string;
  max?: number;
  min?: number;
  modelValue?: string;
  name?: string;
  pattern?: string;
  readOnly?: boolean;
  required?: boolean;
  spinOnPress?: boolean;
  step?: number;
  validationState?: ValidationState;
  withField?: boolean;
}
