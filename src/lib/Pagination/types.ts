export enum PaginationTypeEnum {
  Button = "button",
  Link = "link"
}

export type PaginationType = PaginationTypeEnum.Button | PaginationTypeEnum.Link;

export interface Props {
  asChild?: boolean;
  className?: string;
  count: number;
  defaultPage?: number;
  defaultPageSize?: number;
  hideNextButton?: boolean;
  hidePreviousButton?: boolean;
  id?: string;
  page: number;
  pageSize: number;
  siblingCount?: number;
  type?: PaginationType;
}
