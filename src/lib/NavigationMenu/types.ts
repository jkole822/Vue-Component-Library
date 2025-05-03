import type { ImageProps } from "../../types";

export enum NavigationMenuOrientationEnum {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

export type NavigationMenuOrientation =
  | NavigationMenuOrientationEnum.Horizontal
  | NavigationMenuOrientationEnum.Vertical;

export interface NavigationMenuItem {
  description?: string;
  disabled?: boolean;
  href: string;
  image?: ImageProps;
  title: string;
}

export interface NavigationMenuMenu {
  disabled?: boolean;
  href?: string;
  items: NavigationMenuItem[];
  target?: "_blank" | "_self" | "_parent" | "_top" | "_unfencedTop";
  title: string;
}

export interface Props {
  className?: string;
  homeHref?: string;
  icon?: ImageProps;
  items: NavigationMenuMenu[];
  orientation?: NavigationMenuOrientation;
  title?: string;
}
