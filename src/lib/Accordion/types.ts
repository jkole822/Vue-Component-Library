import type { HeadingLevels } from "../../types";
import type { JSX } from "vue/jsx-runtime";

export interface AccordionItem {
  id: string;
  content?: JSX.Element;
  description?: string;
  disabled?: boolean;
  title: string;
}

export interface Props {
  className?: string;
  collapsible?: boolean;
  defaultValue?: string[];
  disabled?: boolean;
  headingLevel: HeadingLevels;
  items: AccordionItem[];
  lazyMount?: boolean;
  modelValue?: string[];
  multiple?: boolean;
  unMountOnExit?: boolean;
}
