import type { RatingType, RatingsType, FaqsType } from "database/home";

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

export interface DisplayServiceType {
  data: {
    id: number;
    attributes: {
      title: string;
      quote: string;
      about_headquarter: string;
      why_we: string;
      what_we_can_for_you_made: string;
      why_we_cover: ImageType;
      what_we_can_for_you_made_cover: ImageType;
      createdAt: Date;
      updatedAt: Date;
      cover?: ImageType;
      Advantages?: AdvantagesServiceType;
      branch?: BranchServiceType;
      faqs?: FaqsType;
      ratings?: RatingsType;
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
  };
  meta: {};
}
