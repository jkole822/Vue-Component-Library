export enum ProgressVariantEnum {
  Linear = "linear",
  Circular = "circular",
}

export type ProgressVariant =
  | ProgressVariantEnum.Linear
  | ProgressVariantEnum.Circular;

export interface Props {
  className?: string;
  label: string;
  max?: number;
  min?: number;
  size?: number;
  thickness?: number;
  value: number;
  variant?: ProgressVariant;
}
