export interface Cover {
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
}

export interface Category {
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
}

export interface Author {
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
      avatar: {
        data: {
          id: number;
          attributes: {
            name: string;
            alternativeText: string;
            caption: string;
            width: number;
            height: number;
            formats: {
              large: {
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
    };
  };
}

export interface DisplayNewsListType {
  data: {
    id: number;
    attributes: {
      title: string;
      quote: string;
      content: string;
      createdAt: Date;
      updatedAt: Date;
      category: Category;
      cover: Cover;
      author: Author;
    };
  }[];
}
