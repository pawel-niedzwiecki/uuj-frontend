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

export type Data = null | {
  id: number;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    seo?: Seo;
    slider?: Slider;
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
