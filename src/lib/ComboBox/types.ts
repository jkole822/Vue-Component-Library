import { Combobox } from "@ark-ui/vue/combobox";

export enum ComboBoxInputBehaviorEnum {
  None = "none",
  AutoHighlight = "autohighlight",
  AutoComplete = "autocomplete",
}

export enum ComboBoxSelectionBehaviorEnum {
  Replace = "replace",
  Clear = "clear",
  Preserve = "preserve",
}

export enum ComboBoxValidationStateEnum {
  Valid = "valid",
  Invalid = "invalid",
}

export type ComboBoxInputBehavior =
  | ComboBoxInputBehaviorEnum.None
  | ComboBoxInputBehaviorEnum.AutoHighlight
  | ComboBoxInputBehaviorEnum.AutoComplete;

export type ComboBoxSelectionBehavior =
  | ComboBoxSelectionBehaviorEnum.Replace
  | ComboBoxSelectionBehaviorEnum.Clear
  | ComboBoxSelectionBehaviorEnum.Preserve;

export type ComboBoxValidationState =
  | ComboBoxValidationStateEnum.Valid
  | ComboBoxValidationStateEnum.Invalid;

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
  description?: string;
  disabled?: boolean;
  disableLayer?: boolean;
  errorMessage?: string;
  form?: string;
  id?: string;
  immediate?: boolean;
  items: ComboBoxItem[];
  inputBehavior?: ComboBoxInputBehavior;
  inputValue?: string;
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
  validationState?: ComboBoxValidationState;
  withField?: boolean;
}
