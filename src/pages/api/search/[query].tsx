import { searchOnBackend, searchState } from "database/search";

export default async function ArticleShortAPI(req: any, res: any): Promise<void> {
  const { query } = req.query;

  // i check page number
  if (!query) res.status(200).json(searchState);

  res.status(200).json(await searchOnBackend({ query }));
}
