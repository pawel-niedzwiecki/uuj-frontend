export type NumberPhonesType = {
  data: {
    id: number;
    attributes: {
      number_phone: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
};

export type EmailType = {
  data: {
    id: 1;
    attributes: {
      email: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

export type SocialMediaType = {
  id: number;
  type: string;
  url: string;
}[];

export type MainAddressType = {
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
      lat: number;
      lng: number;
    };
  };
};

export type BrancheType = {
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
    lat: number;
    lng: number;
  };
};

export type BranchesType = {
  data: BrancheType[];
};

export type DataType = null | {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    number_phones?: NumberPhonesType;
    e_mail?: EmailType;
    social_media?: SocialMediaType;
    main_address?: MainAddressType;
    branches?: BranchesType;
  };

  meta?: {};
};

export type error = {
  status: number;
  name: string;
  message: string;
  details: {};
};

export interface DisplayContactType {
  data: DataType;
  error?: error;
}
