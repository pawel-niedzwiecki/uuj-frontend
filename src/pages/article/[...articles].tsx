import Laout from "layout/laout.index";
import styled from "styled-components";
import { slugFromTitle } from "utils/utils.slug";
import { GetStaticPaths, GetStaticProps } from "next";
import { displayMenu, DisplayMenuType } from "database/menu";
import { ComponentSectionNewsList } from "components/templates/section";
import { displayCategory, DisplayCategoryType } from "database/categories";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
import { displayNewsListOnBackend, DisplayNewsListType, NewsListType, displayListNewsPageOnBackEnd, DisplayListNewsPageType, DataListNewsPageType } from "database/news";

const Break = styled.div`
  display: block;
  width: 100%;
  height: 14rem;

  @media all and (min-width: 768px) {
    height: 3rem;
  }
`;

function Article({
  menuHeader,
  menuFooterUseful,
  menuFooterForCustomers,
  menuFooterForMedia,
  contact,
  dataListNewsPage,
}: {
  menuHeader: DisplayMenuType;
  menuFooterUseful: DisplayMenuType;
  menuFooterForCustomers: DisplayMenuType;
  menuFooterForMedia: DisplayMenuType;
  contact: DisplayContactType;
  dataListNewsPage: DisplayListNewsPageType;
}) {
  return (
    <>
      <Break />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: DisplayNewsListType = await displayNewsListOnBackend({});

  const allArticle: any[] = await Promise.all(
    new Array(articles.meta.pagination.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const articeWithOnlyTitle: DisplayNewsListType = await displayNewsListOnBackend({ page: i + 1 });
      return articeWithOnlyTitle?.data;
    })
  );

  return {
    paths: [].concat.apply([], allArticle).map((item: NewsListType) => `/article/${item.id}/${slugFromTitle(item.attributes.title)}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const menuHeader: DisplayMenuType = await displayMenu({ name: "header" });
  const menuFooterUseful: DisplayMenuType = await displayMenu({ name: "useful" });
  const menuFooterForCustomers: DisplayMenuType = await displayMenu({ name: "for-customers" });
  const menuFooterForMedia: DisplayMenuType = await displayMenu({ name: "for-media" });
  const dataListNewsPage: DisplayListNewsPageType = await displayListNewsPageOnBackEnd({ seo: true });
  const contact: DisplayContactType = await displayContactOnBackEnd({ numberPhones: true, email: true, socialMedia: true, mainAddress: true, branches: true });

  return {
    props: {
      menuHeader,
      menuFooterUseful,
      menuFooterForCustomers,
      menuFooterForMedia,
      contact,
      dataListNewsPage,
    },
  };
};

export default Article;
