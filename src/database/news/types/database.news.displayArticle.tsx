export type Error = {
  status: number;
  name: string;
  message: string;
  details: {};
};

export type ImageType = {
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
      provider_metadata: null;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

export interface DisplayArticleType {
  data?: {
    id: number;
    attributes: {
      title: string;
      quote: string;
      content: string;
      createdAt: Date;
      updatedAt: Date;
      cover?: ImageType;
      author?: {
        data: {
          id: 1;
          attributes: {
            username: string;
            email: string;
            provider: string;
            confirmed: boolean;
            blocked: boolean;
            createdAt: Date;
            updatedAt: Date;
            avatar?: ImageType;
          };
        };
      };
      category?: {
        data: {
          id: number;
          attributes: {
            title: string;
            type: string;
            content: string;
            createdAt: Date;
            updatedAt: Date;
          };
        };
      };
    };
  } | null;
  meta?: {};
  error?: Error;
}
