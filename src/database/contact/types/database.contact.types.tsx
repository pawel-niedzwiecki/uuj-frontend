export type Seo =
  | {
      id: number;
      title: string;
      description: string;
    }
  | undefined;

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
};

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
      e_mail: {
        data: {
          id: number;
          attributes: {
            email: string;
            createdAt: Date;
            updatedAt: Date;
          };
        };
      };
      number_phone: {
        data: {
          id: number;
          attributes: {
            number_phone: string;
            createdAt: Date;
            updatedAt: Date;
          };
        };
      };
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
    e_mail: {
      data: {
        id: number;
        attributes: {
          email: string;
          createdAt: Date;
          updatedAt: Date;
        };
      };
    };
    number_phone: {
      data: {
        id: number;
        attributes: {
          number_phone: string;
          createdAt: Date;
          updatedAt: Date;
        };
      };
    };
  };
};

export type BranchesType = {
  data: BrancheType[];
};

export interface FaqType {
  id: 1;
  attributes: {
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface FaqsType {
  data: FaqType[];
}

export type DataType = null | {
  id: number;
  attributes: {
    seo?: Seo;
    createdAt: Date;
    updatedAt: Date;
    faqs?: FaqsType;
    e_mail?: EmailType;
    branches?: BranchesType;
    main_address?: MainAddressType;
    description_page: null | string;
    social_media?: SocialMediaType[];
    number_phones?: NumberPhonesType;
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
