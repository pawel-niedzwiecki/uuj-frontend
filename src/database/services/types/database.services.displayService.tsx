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

export type BranchServiceType = {
  data: {
    id: number;
    attributes: {
      title: string;
      street: string;
      street_number: string;
      post_code: string;
      city: string;
      nip: string;
      regon: string;
      createdAt: Date;
      updatedAt: Date;
      number_phone?: {
        data: {
          id: number;
          attributes: {
            number_phone: string;
            createdAt: Date;
            updatedAt: Date;
          };
        };
      };
      lat: number;
      lng: number;
    };
  };
};

export type AdvantageServiceType = {
  id: number;
  icon: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AdvantagesServiceType = AdvantageServiceType[];

export type Rating = {
  id: number;
  attributes: {
    from: string;
    rating: number;
    author: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    cover: {
      data: {
        id: 3;
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

export type Ratings = {
  id: number;
  title: string;
  ratings: {
    data: Rating[];
  };

  cover: {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: 400;
        height: 400;
        formats: {
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

export interface DisplayServiceType {
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
      cover?: ImageType;
      Advantages?: AdvantagesServiceType;
      branch?: BranchServiceType;
      faqs?: {
        data: {
          id: number;
          attributes: {
            title: string;
            content: string;
            createdAt: Date;
            updatedAt: Date;
          };
        }[];
      };
      ratings?: Ratings;
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
      history?: {
        id: number;
        date: string;
        title: string;
        content: string;
      }[];
    };
  };
  meta: {};
}
