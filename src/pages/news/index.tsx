import Laout from "layout/laout.index";
import styled from "styled-components";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayCategory, DisplayCategoryType } from "database/categories";
import { displayNewsListOnBackend, DisplayNewsListType, displayListNewsPageOnBackEnd, DisplayListNewsPageType } from "database/news";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
import { ComponentSectionNewsList } from "components/templates/section";

const Break = styled.div`
  display: block;
  width: 100%;
  height: 14rem;

  @media all and (min-width: 768px) {
    height: 3rem;
  }
`;

export default function NewsList({
  menuHeader,
  menuFooterUseful,
  menuFooterForCustomers,
  menuFooterForMedia,
  contact,
  dataListNewsPage,
  newsList,
}: {
  menuHeader: DisplayMenuType;
  menuFooterUseful: DisplayMenuType;
  menuFooterForCustomers: DisplayMenuType;
  menuFooterForMedia: DisplayMenuType;
  contact: DisplayContactType;
  dataListNewsPage: DisplayListNewsPageType;
  categories: DisplayCategoryType;
  newsList: DisplayNewsListType;
}) {
  return (
    <Laout
      data={{
        header: { menu: menuHeader, contact },
        footer: { socialMedia: contact.data?.attributes.social_media, mainAddress: contact.data?.attributes.main_address, branches: contact.data?.attributes.branches, description: dataListNewsPage.data?.attributes.description_page, menuFooterUseful, menuFooterForCustomers, menuFooterForMedia },
      }}
    >
      <Break />
      <ComponentSectionNewsList data={{ newsList: newsList.data, pagination: true, pageCount: newsList.meta.pagination.pageCount }} />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader: DisplayMenuType = await displayMenu({ name: "header" });
  const menuFooterUseful: DisplayMenuType = await displayMenu({ name: "useful" });
  const menuFooterForCustomers: DisplayMenuType = await displayMenu({ name: "for-customers" });
  const menuFooterForMedia: DisplayMenuType = await displayMenu({ name: "for-media" });
  const dataListNewsPage: DisplayListNewsPageType = await displayListNewsPageOnBackEnd({ seo: true });
  const contact: DisplayContactType = await displayContactOnBackEnd({ numberPhones: true, email: true, socialMedia: true, mainAddress: true, branches: true });
  const categories: DisplayCategoryType = await displayCategory({ cover: true, services: true });
  const newsList: DisplayNewsListType = await displayNewsListOnBackend({ cover: true, category: true, author: true });

  return {
    props: {
      menuHeader,
      menuFooterUseful,
      menuFooterForCustomers,
      menuFooterForMedia,
      contact,
      dataListNewsPage,
      categories,
      newsList,
    },
  };
}
