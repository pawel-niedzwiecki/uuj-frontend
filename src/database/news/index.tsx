// display menu
import type { DisplayNewsListType, NewsListType, Cover, Category, Author } from "./types/database.news.list.";
import type { DisplayListNewsPageType, DataListNewsPageType, SeoListNewsPageType } from "./types/database.news.displayNewsListPage.types";
import { displayNewsListState } from "./state/database.news.list";
import { displayListNewsPageState } from "./state/database.news.displayNewsListPage.state";
import { displayNewsListOnBackend, displayNewsListOnFrontEnd } from "./query/database.news.list";
import { displayListNewsPageOnBackEnd } from "./query/database.news.displayNewsListPage.query";

// export
export type { DisplayNewsListType, NewsListType, Cover, Category, Author, DisplayListNewsPageType, DataListNewsPageType, SeoListNewsPageType };
export { displayNewsListState, displayNewsListOnBackend, displayNewsListOnFrontEnd, displayListNewsPageOnBackEnd, displayListNewsPageState };
