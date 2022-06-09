export type Seo =
  | {
      id: number;
      title: string;
      description: string;
    }
  | undefined;

export type Advantage = {
  id: number;
  icon: string;
  content: string;
};

export type Slide = {
  id: number;
  attributes: {
    title: string;
    quote: string;
    about_headquarter: string;
    why_we: string;
    what_we_can_for_you_made: string;
    createdAt: Date;
    updatedAt: Date;
    Advantages: Advantage[] | undefined;
  };
};

export type Slider = { data: Slide[] | undefined };

export type Rating = {
  id: number;
  attributes: {
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

export type Data = null | {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    seo?: Seo;
    slider?: Slider;
    raitings?: Ratings;
  };
  meta?: {};
};

export type Error = {
  status: number;
  name: string;
  message: string;
  details: {};
};

export interface DisplayHomeType {
  data: Data;
  error?: Error;
}
