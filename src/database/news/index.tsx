// display menu
import { displayNewsListState } from "./state/database.news.list";
import { displayArticleState } from "./state/database.news.displayArticle";
import type { DisplayArticleType } from "./types/database.news.displayArticle";
import { displayArticleOnBackend } from "./query/database.news.displayArticle";
import { displayListNewsPageState } from "./state/database.news.displayNewsListPage.state";
import { displayListNewsPageOnBackEnd } from "./query/database.news.displayNewsListPage.query";
import { displayNewsListOnBackend, displayNewsListOnFrontEnd } from "./query/database.news.list";
import type { DisplayNewsListType, NewsListType, Cover, Category, Author } from "./types/database.news.list.";
import type { DisplayListNewsPageType, DataListNewsPageType, SeoListNewsPageType } from "./types/database.news.displayNewsListPage.types";

// export
export type { DisplayNewsListType, NewsListType, Cover, Category, Author, DisplayListNewsPageType, DataListNewsPageType, SeoListNewsPageType, DisplayArticleType };
export { displayNewsListState, displayNewsListOnBackend, displayNewsListOnFrontEnd, displayListNewsPageOnBackEnd, displayListNewsPageState, displayArticleOnBackend, displayArticleState };
