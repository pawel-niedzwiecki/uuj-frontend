import { displayMenu, displayMenuState } from "database/menu";
import { json } from "stream/consumers";

export default async function ArticleShortAPI(req: any, res: any): Promise<void> {
  const { get } = req.query;

  // i check page number
  if (!get) res.status(200).json(displayMenuState);

  res.status(200).json(await displayMenu({ name: get }));
}
