import { RatingType } from "database/home";

export const countRaitings = ({ ratings }: { ratings: RatingType[] | undefined }) => {
  let ratingsMean = 0;

  !!ratings && ratings.forEach((rating: RatingType) => (ratingsMean = ratingsMean + rating.attributes.rating));

  return {
    mean: !!ratings?.length ? ratingsMean / ratings?.length : 0,
    count: !!ratings?.length ? ratings?.length : 0,
  };
};
