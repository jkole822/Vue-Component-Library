export enum DialogRoleEnum {
  Alert = "alertdialog",
  Dialog = "dialog",
}

export type DialogRole = DialogRoleEnum.Alert | DialogRoleEnum.Dialog;

export interface Props {
  "aria-label"?: string;
  closeOnEscape?: boolean;
  closeOnInteractOutside?: boolean;
  description?: string;
  finalFocusEl?: () => HTMLElement | null;
  id?: string;
  initialFocusEl?: () => HTMLElement | null;
  lazyMount?: boolean;
  modal?: boolean;
  open?: boolean;
  persistentElements?: (() => Element | null)[];
  preventScroll?: boolean;
  restoreFocus?: boolean;
  role?: DialogRole;
  title?: string;
  trapFocus?: boolean;
  unmountOnExit?: boolean;
}
