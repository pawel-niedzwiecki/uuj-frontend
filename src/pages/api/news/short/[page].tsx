import { displayNewsListOnBackend, displayNewsListState } from "database/news/index";

export default async function ArticleShortAPI(req: any, res: any): Promise<void> {
  const { page } = req.query;

  // i check page number
  if (parseInt(page) < 0) res.status(200).json(displayNewsListState);
  else if (parseInt(page) === 0 ? false : !parseInt(page)) res.status(400).json({ err: "wrong page number" });

  res.status(200).json(await displayNewsListOnBackend({ page, cover: true, category: true, author: true }));
}
