export enum CategoryTypeEnum {
  news = "news",
  services = "services",
}

export interface DisplayCategoryType {
  data: {
    id: number;
    attributes: {
      title: string;
      type: string;
      content: string;
      createdAt: Date;
      updatedAt: Date;
      cover: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string;
            caption: string;
            width: number;
            height: number;
            formats: {
              small: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null | string;
                size: number;
                width: number;
                height: number;
              };
              medium: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null | string;
                size: number;
                width: number;
                height: number;
              };
              thumbnail: {
                ext: string;
                url: string;
                hash: string;
                mime: string;
                name: string;
                path: null | string;
                size: number;
                width: number;
                height: number;
              };
            };
            hash: string;
            ext: string;
            mime: string;
            size: number;
            url: string;
            previewUrl: null | string;
            provider: string;
            provider_metadata: null | string;
            createdAt: Date;
            updatedAt: Date;
          };
        };
      };
      services?: {
        data: {
          id: number;
          attributes: {
            title: string;
            quote: string;
            about_headquarter: string;
            why_we: string;
            what_we_can_for_you_made: string;
            createdAt: Date;
            updatedAt: Date;
          };
        }[];
      };
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
