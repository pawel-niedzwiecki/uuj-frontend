import Laout from "layout/laout.index";
import styled from "styled-components";
import { slugFromTitle } from "utils/utils.slug";
import { GetStaticPaths, GetStaticProps } from "next";
import { displayMenu, DisplayMenuType } from "database/menu";
import { ComponentSectionArticle } from "components/templates/section";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
import { displayNewsListOnBackend, DisplayNewsListType, NewsListType, displayArticleOnBackend, DisplayArticleType } from "database/news";

const Break = styled.div`
  display: block;
  width: 100%;
  height: 22rem;

  @media all and (min-width: 768px) {
    height: 12rem;
  }
`;

function Article({
  menuHeader,
  menuFooterUseful,
  menuFooterForCustomers,
  menuFooterForMedia,
  contact,
  article,
}: {
  menuHeader?: DisplayMenuType;
  menuFooterUseful?: DisplayMenuType;
  menuFooterForCustomers?: DisplayMenuType;
  menuFooterForMedia?: DisplayMenuType;
  contact?: DisplayContactType;
  article?: DisplayArticleType;
}) {
  return (
    <Laout
      data={{
        header: { menu: menuHeader, contact },
        footer: { socialMedia: contact?.data?.attributes?.social_media, mainAddress: contact?.data?.attributes?.main_address, branches: contact?.data?.attributes?.branches, menuFooterUseful, menuFooterForCustomers, menuFooterForMedia },
      }}
    >
      <Break />
      <ComponentSectionArticle data={article} />
    </Laout>
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
  const menuHeader: DisplayMenuType | undefined = await displayMenu({ name: "header" });
  const menuFooterUseful: DisplayMenuType | undefined = await displayMenu({ name: "useful" });
  const menuFooterForMedia: DisplayMenuType | undefined = await displayMenu({ name: "for-media" });
  const menuFooterForCustomers: DisplayMenuType | undefined = await displayMenu({ name: "for-customers" });
  const contact: DisplayContactType | undefined = await displayContactOnBackEnd({ numberPhones: true, email: true, socialMedia: true, mainAddress: true, branches: true });
  const article: DisplayArticleType | undefined = await displayArticleOnBackend({ id: context?.params?.articles?.length ? parseInt(context?.params?.articles[1]) : 1 });

  return {
    props: {
      menuHeader,
      menuFooterUseful,
      menuFooterForMedia,
      menuFooterForCustomers,
      contact,
      article,
    },
  };
};

export default Article;
