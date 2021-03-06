export type MenuItemType = {
  id: number;
  order: number;
  title: string;
  url: string;
  target: null | string;
  createdAt: Date;
  updatedAt: Date;
  parent: null | string;
};

export type MenuType = null | {
  menu: {
    id: number;
    title: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    items: MenuItemType[];
  };
};

export type error = {
  status: number;
  name: string;
  message: string;
  details: {};
};

export interface DisplayMenuType {
  data: MenuType;
  error?: error;
}
