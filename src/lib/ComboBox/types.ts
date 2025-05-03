import { Combobox } from "@ark-ui/vue/combobox";
import type { ValidationState } from "../../types";

export enum ComboBoxInputBehaviorEnum {
  None = "none",
  AutoHighlight = "autohighlight",
  AutoComplete = "autocomplete",
}

export type ComboBoxInputBehavior =
  | ComboBoxInputBehaviorEnum.None
  | ComboBoxInputBehaviorEnum.AutoHighlight
  | ComboBoxInputBehaviorEnum.AutoComplete;

export enum ComboBoxSelectionBehaviorEnum {
  Replace = "replace",
  Clear = "clear",
  Preserve = "preserve",
}

export type ComboBoxSelectionBehavior =
  | ComboBoxSelectionBehaviorEnum.Replace
  | ComboBoxSelectionBehaviorEnum.Clear
  | ComboBoxSelectionBehaviorEnum.Preserve;

export interface ComboBoxItem {
  id: string;
  description?: string;
  disabled?: boolean;
  label: string;
}

export interface Props {
  allowCustomValue?: boolean;
  asChild?: boolean;
  autoFocus?: boolean;
  className?: string;
  closeOnSelect?: boolean;
  composite?: boolean;
  defaultHighlightedValue?: string;
  defaultInputValue?: string;
  defaultOpen?: boolean;
  defaultValue?: string[];
  description?: string;
  disableLayer?: boolean;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  highlightedValue?: string;
  id?: string;
  inputBehavior?: ComboBoxInputBehavior;
  inputValue?: string;
  items: ComboBoxItem[];
  lazyMount?: boolean;
  loopFocus?: boolean;
  multiple?: boolean;
  name?: string;
  navigate?: (details: any) => void;
  open?: boolean;
  openOnChange?:
    | boolean
    | ((details: Combobox.InputValueChangeDetails) => boolean);
  openOnClick?: boolean;
  openOnKeyPress?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  scrollToIndexFn?: (details: any) => void;
  selectionBehavior?: ComboBoxSelectionBehavior;
  unmountOnExit?: boolean;
  validationState?: ValidationState;
  withField?: boolean;
}
