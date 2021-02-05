export interface MenuItemBadge {
  label: string;
  classes: string;
}

export interface MenuItemBase {
  label: string;
  iconClasses?: string;
  badges?: MenuItemBadge[];
}

export interface MenuItemLeafRoute extends MenuItemBase {
  route: string;
}

export interface MenuItemLeafURL extends MenuItemBase {
  url: string;
  target?: string;
}

export interface MenuItemSeparator {
  label: string;
  separator: boolean;
}

export interface MenuItemNode extends MenuItemBase {
  children: MenuItem[];
}

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

export type MenuItem = XOR<MenuItemLeafRoute, XOR<MenuItemLeafURL, XOR<MenuItemSeparator, MenuItemNode>>>;

export type Menu = MenuItem[];
