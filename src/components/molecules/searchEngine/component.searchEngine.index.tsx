import Link from "next/link";
import Search from "assets/icon/search.svg";
import { slugFromTitle } from "utils/utils.slug";
import React, { useEffect, useState } from "react";
import { InputInterface } from "./component.searchEngine.type";
import { searchOnFrontEnd, searchState, SearchType } from "database/search";
import { Label, Input, ButtonSearch, SearchResultBox, SearchResultItem, SearchResultItemHeader } from "./component.searchEngine.style";

export default function ComponentSearchEngine({ id, name, placeholder }: InputInterface) {
  const [focus, setFocus] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState(searchState);

  useEffect(() => {
    (async () => (!!searchQuery.length ? setSearchResult((await searchOnFrontEnd({ query: searchQuery })).data) : setSearchResult(searchState)))();
  }, [searchQuery]);

  return (
    <Label htmlFor={id} type="search">
      <Input
        name="query"
        value={searchQuery}
        onFocus={() =>
          setTimeout(() => {
            setFocus(true);
          }, 150)
        }
        onBlur={() =>
          setTimeout(() => {
            setFocus(false);
          }, 150)
        }
        onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchQuery(e.currentTarget.value)}
      />
      <ButtonSearch title="szukaj">
        <Search />
      </ButtonSearch>
      {(!!searchResult?.data?.news?.length || !!searchResult?.data?.services?.length) && !!searchQuery?.length && focus && (
        <SearchResultBox>
          {!!searchResult?.data?.news?.length && (
            <>
              <SearchResultItemHeader>Wiadomości</SearchResultItemHeader>
              {searchResult?.data?.news.map((item: { id: number; title: string }): JSX.Element => {
                return (
                  <Link href={`/s/${slugFromTitle(item.title)}`} passHref key={item.id}>
                    <SearchResultItem>{item.title}</SearchResultItem>
                  </Link>
                );
              })}
            </>
          )}
          {!!searchResult?.data?.services?.length && (
            <>
              <SearchResultItemHeader>Usługi</SearchResultItemHeader>
              {searchResult?.data?.services.map((item: { id: number; title: string }): JSX.Element => {
                return (
                  <Link href={`/s/${slugFromTitle(item.title)}`} passHref key={item.id}>
                    <SearchResultItem>{item.title}</SearchResultItem>
                  </Link>
                );
              })}
            </>
          )}
        </SearchResultBox>
      )}
    </Label>
  );
}
