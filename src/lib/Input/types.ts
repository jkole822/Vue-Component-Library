import type { ValidationState } from "../../types";

export enum AutoCompleteEnum {
  name = "name",
  email = "email",
  currentPassword = "current-password",
  newPassword = "new-password",
  off = "off",
  username = "username",
}

export type AutoCompleteType =
  | AutoCompleteEnum.name
  | AutoCompleteEnum.email
  | AutoCompleteEnum.currentPassword
  | AutoCompleteEnum.newPassword
  | AutoCompleteEnum.off
  | AutoCompleteEnum.username;

export enum InputTypeEnum {
  date = "date",
  email = "email",
  password = "password",
  text = "text",
}

export type InputType =
  | InputTypeEnum.date
  | InputTypeEnum.email
  | InputTypeEnum.password
  | InputTypeEnum.text;

export interface Props {
  autoComplete?: AutoCompleteType;
  className?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  id?: string;
  modelValue?: string;
  name?: string;
  raiseLabel?: boolean;
  readOnly?: boolean;
  required?: boolean;
  type?: InputType;
  validationState?: ValidationState;
}
