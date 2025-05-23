import type { ValidationState } from "../../types";

export interface Props {
  asChild?: boolean;
  checked?: boolean;
  className?: string;
  defaultChecked?: boolean;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  validationState?: ValidationState;
  value?: string;
  withField?: boolean;
}
