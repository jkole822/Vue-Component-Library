export enum CheckboxValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type CheckboxValidationState =
  | CheckboxValidationStateEnum.Invalid
  | CheckboxValidationStateEnum.Valid;

export interface Props {
  className?: string;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  validationState?: CheckboxValidationState;
  value?: boolean;
  withField?: boolean;
}
