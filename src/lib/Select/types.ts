import type { ValidationState } from "../../types";

export interface SelectItem {
  id: string;
  description?: string;
  disabled?: boolean;
  label: string;
}

export interface Props {
  asChild?: boolean;
  className?: string;
  closeOnSelect?: boolean;
  composite?: boolean;
  defaultHighlightedValue?: string;
  defaultOpen?: boolean;
  defaultValue?: string[];
  description?: string;
  deselectable?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  highlightedValue?: string;
  id?: string;
  lazyMount?: boolean;
  loopFocus?: boolean;
  multiple?: boolean;
  name?: string;
  options: SelectItem[];
  placeholder?: string;
  positioning?: any;
  readOnly?: boolean;
  required?: boolean;
  scrollToIndexFn?: (details: any) => void;
  unmountOnExit?: boolean;
  validationState?: ValidationState;
  withField?: boolean;
}
