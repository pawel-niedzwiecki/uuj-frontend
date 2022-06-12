// display menu
import type { DisplayNewsListType, NewsListType, Cover, Category, Author } from "./types/database.news.list.";
import { displayNewsListState } from "./state/database.news.list.";
import { displayNewsListOnBackend, displayNewsListOnFrontEnd } from "./query/database.news.list";

// export
export type { DisplayNewsListType, NewsListType, Cover, Category, Author };
export { displayNewsListState, displayNewsListOnBackend, displayNewsListOnFrontEnd };
