export type data = null | {
  data: {
    id: number;
    attributes: {
      createdAt: Date;
      updatedAt: Date;
      number_phones?: {
        data: {
          id: number;
          attributes: {
            number_phone: string;
            createdAt: Date;
            updatedAt: Date;
          };
        }[];
      };
      e_mail?: {
        data: {
          id: 1;
          attributes: {
            email: string;
            createdAt: Date;
            updatedAt: Date;
          };
        };
      };
      social_media?: {
        id: number;
        type: string;
        url: string;
      }[];
    };
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
  data: data;
  error?: error;
}
