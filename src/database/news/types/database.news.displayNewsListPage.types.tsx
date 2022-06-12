export type SeoListNewsPageType =
  | {
      id: number;
      title: string;
      description: string;
    }
  | undefined;

export type DataListNewsPageType = null | {
  id: number;
  attributes: {
    seo?: SeoListNewsPageType;
    createdAt: Date;
    updatedAt: Date;
    description_page: null | string;
  };
  meta?: {};
};

export type Error = {
  status: number;
  name: string;
  message: string;
  details: {};
};

export interface DisplayListNewsPageType {
  data: DataListNewsPageType;
  error?: Error;
}
