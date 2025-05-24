import type { ValidationState } from "../../types";

export enum SliderDirEnum {
  LTR = "ltr",
  RTL = "rtl",
}

export enum SliderOrientationEnum {
  Horizontal = "horizontal",
  Vertical = "vertical",
}

type SliderDir = (typeof SliderDirEnum)[keyof typeof SliderDirEnum];

type SliderOrientation =
  (typeof SliderOrientationEnum)[keyof typeof SliderOrientationEnum];

export interface Props {
  "aria-label"?: string[];
  "aria-labelledby"?: string[];
  asChild?: boolean;
  className?: string;
  description?: string;
  dir?: SliderDir;
  disabled?: boolean;
  errorMessage?: string;
  form?: string;
  getAriaValueText?: (details: any) => string;
  getRootNode?: () => Node | Document | ShadowRoot;
  id?: string;
  markers?: number[];
  max?: number;
  min?: number;
  minStepsBetweenThumbs?: number;
  modelValue?: number[];
  name?: string;
  orientation?: SliderOrientation;
  step?: number;
  thumbSize?: {
    height: number;
    width: number;
  };
  validationState?: ValidationState;
  withField?: boolean;
}
