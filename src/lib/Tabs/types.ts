import type { VNode } from "vue";

export enum TabsActivationModeEnum {
  Automatic = "automatic",
  Manual = "manual",
}

export type TabsActivationMode =
  | TabsActivationModeEnum.Automatic
  | TabsActivationModeEnum.Manual;

export enum TabsOrientationEnum {
  Vertical = "vertical",
  Horizontal = "horizontal",
}

export type TabsOrientation =
  | TabsOrientationEnum.Horizontal
  | TabsOrientationEnum.Vertical;

export interface TabItem {
  content?: VNode | (() => VNode) | VNode[] | (() => VNode[]);
  disabled?: boolean;
  id: string;
  label: string;
}

export interface Props {
  activationMode?: TabsActivationMode;
  asChild?: boolean;
  className?: string;
  composite?: boolean;
  defaultValue?: string;
  deselectable?: boolean;
  id?: string;
  items: TabItem[];
  lazyMount?: boolean;
  loopFocus?: boolean;
  modelValue?: string;
  navigate?: (details: any) => void;
  orientation?: TabsOrientation;
  unmountOnExit?: boolean;
}
