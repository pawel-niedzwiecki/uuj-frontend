import Laout from "layout/laout.index";
import styled from "styled-components";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayCategory, DisplayCategoryType } from "database/categories";
import { displayNewsListOnBackend, DisplayNewsListType, displayListNewsPageOnBackEnd, DisplayListNewsPageType } from "database/news";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
import { ComponentSectionNewsList, ComponentSectionFaq } from "components/templates/section";

const Break = styled.div`
  display: block;
  width: 100%;
  height: 24rem;

  @media all and (min-width: 768px) {
    height: 14rem;
  }
`;

export default function NewsList({
  menuHeader,
  menuFooterUseful,
  menuFooterForCustomers,
  menuFooterForMedia,
  contact,
  displayListNewsPage,
}: {
  menuHeader: DisplayMenuType;
  menuFooterUseful: DisplayMenuType;
  menuFooterForCustomers: DisplayMenuType;
  menuFooterForMedia: DisplayMenuType;
  contact: DisplayContactType;
  displayListNewsPage: DisplayListNewsPageType;
  categories: DisplayCategoryType;
}) {
  return (
    <Laout
      data={{
        header: { menu: menuHeader, contact },
        footer: { socialMedia: contact.data?.attributes.social_media, mainAddress: contact.data?.attributes.main_address, branches: contact.data?.attributes.branches, description: displayListNewsPage.data?.attributes.description_page, menuFooterUseful, menuFooterForCustomers, menuFooterForMedia },
      }}
    >
      <Break />
      <ComponentSectionFaq data={contact.data?.attributes.faqs?.data} />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader: DisplayMenuType = await displayMenu({ name: "header" });
  const menuFooterUseful: DisplayMenuType = await displayMenu({ name: "useful" });
  const menuFooterForCustomers: DisplayMenuType = await displayMenu({ name: "for-customers" });
  const menuFooterForMedia: DisplayMenuType = await displayMenu({ name: "for-media" });
  const displayListNewsPage: DisplayListNewsPageType = await displayListNewsPageOnBackEnd({ seo: true });
  const contact: DisplayContactType = await displayContactOnBackEnd({ faqs: true, numberPhones: true, email: true, socialMedia: true, mainAddress: true, branches: true });
  const categories: DisplayCategoryType = await displayCategory({ cover: true, services: true });

  return {
    props: {
      menuHeader,
      menuFooterUseful,
      menuFooterForCustomers,
      menuFooterForMedia,
      contact,
      displayListNewsPage,
      categories,
    },
  };
}
