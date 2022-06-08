export type Number_phones = {
  data: {
    id: number;
    attributes: {
      number_phone: string;
      createdAt: Date;
      updatedAt: Date;
    };
  }[];
};

export type E_mail = {
  data: {
    id: 1;
    attributes: {
      email: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
};

export type Social_media = {
  id: number;
  type: string;
  url: string;
}[];

export type Data = null | {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    number_phones?: Number_phones;
    e_mail?: E_mail;
    social_media?: Social_media;
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
  data: Data;
  error?: error;
}
