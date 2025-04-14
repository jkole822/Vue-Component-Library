export enum NumberInputValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type NumberInputValidationState =
  | NumberInputValidationStateEnum.Invalid
  | NumberInputValidationStateEnum.Valid;

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
  id?: string;
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
  validationState?: NumberInputValidationState;
  withField?: boolean;
}
