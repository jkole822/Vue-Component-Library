import type { ValidationState } from "../../types";

export interface Props {
  className?: string;
  description?: string;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  name: string;
  readOnly?: boolean;
  required?: boolean;
  validationState?: ValidationState;
  value?: boolean;
  withField?: boolean;
}
