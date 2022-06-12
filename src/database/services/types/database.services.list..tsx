export interface DisplayServiceListType {
  id: number;
  attributes: {
    title: string;
    quote: string;
    about_headquarter: string;
    why_we: string;
    what_we_can_for_you_made: string;
    createdAt: Date;
    updatedAt: Date;
  };
}

export interface DisplayServicesListType {
  data: DisplayServiceListType[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
