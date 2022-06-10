// display menu
import type { DisplayNewsListType } from "./types/database.news.list.";
import { displayNewsListState } from "./state/database.news.list.";
import displayCategory from "./query/database.news.list";

// export
export type { DisplayNewsListType };
export { displayNewsListState, displayCategory };
