import { Rating } from "database/home";

export const countRaitings = ({ ratings }: { ratings: Rating[] | undefined }) => {
  let ratingsMean = 0;

  !!ratings && ratings.forEach((rating: Rating) => (ratingsMean = ratingsMean + rating.attributes.rating));

  return {
    mean: !!ratings?.length ? ratingsMean / ratings?.length : 0,
    count: !!ratings?.length ? ratings?.length : 0,
  };
};
