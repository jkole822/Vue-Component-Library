import type { HeadingLevels } from "../../types";
import type { VNode } from "vue";

export interface AccordionItem {
  id: string;
  content?: VNode | (() => VNode) | VNode[] | (() => VNode[]);
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
