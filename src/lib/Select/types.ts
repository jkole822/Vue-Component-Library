import type { ValidationState } from "../../types";

export interface SelectItem {
  id: string;
  description?: string;
  disabled?: boolean;
  label: string;
}

export interface Props {
  className?: string;
  closeOnSelect?: boolean;
  composite?: boolean;
  defaultHighlightedValue?: string;
  description?: string;
  deselectable?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  highlightedValue?: string;
  lazyMount?: boolean;
  loopFocus?: boolean;
  multiple?: boolean;
  name?: string;
  options: SelectItem[];
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  scrollToIndexFn?: (details: any) => void;
  unmountOnExit?: boolean;
  validationState?: ValidationState;
  withField?: boolean;
}
