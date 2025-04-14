import type { StyleValue } from "vue";

export interface Props {
  autoFocus?: boolean;
  closeOnEscape?: boolean;
  closeOnInteractOutside?: boolean;
  contentClass?: string;
  contentStyles?: StyleValue;
  description?: string;
  id?: string;
  initialFocusEl?: () => HTMLElement | null;
  lazyMount?: boolean;
  modal?: boolean;
  persistentElements?: (() => Element | null)[];
  portalled?: boolean;
  positioning?: any;
  title?: string;
  unmountOnExit?: boolean;
}
