import Laout from "layout/laout.index";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayCategory, DisplayCategoryType } from "database/categories";
import { displayNewsListOnBackend, DisplayNewsListType } from "database/news";
import { displayHomePageOnBackEnd, DisplayHomeType } from "database/home";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
import { ComponentSliderWithService, ComponentSectionRatingList, ComponentSectionServiceList, ComponentSectionNewsList, ComponentSectionFaq } from "components/templates/section";

function Home({
  menuHeader,
  menuFooterUseful,
  menuFooterForCustomers,
  menuFooterForMedia,
  contact,
  dataPageHome,
  categories,
  newsList,
}: {
  menuHeader: DisplayMenuType;
  menuFooterUseful: DisplayMenuType;
  menuFooterForCustomers: DisplayMenuType;
  menuFooterForMedia: DisplayMenuType;
  contact: DisplayContactType;
  dataPageHome: DisplayHomeType;
  categories: DisplayCategoryType;
  newsList: DisplayNewsListType;
}) {
  return (
    <Laout
      data={{
        header: { menu: menuHeader, contact },
        footer: { socialMedia: contact.data?.attributes.social_media, mainAddress: contact.data?.attributes.main_address, branches: contact.data?.attributes.branches, description: dataPageHome.data?.attributes.description_page, menuFooterUseful, menuFooterForCustomers, menuFooterForMedia },
      }}
    >
      <ComponentSliderWithService data={{ slider: dataPageHome?.data?.attributes?.slider }} />
      <ComponentSectionRatingList data={dataPageHome.data?.attributes.ratings} />
      <ComponentSectionServiceList data={categories.data} />
      <ComponentSectionNewsList data={{ newsList: newsList.data, pagination: false, pageCount: newsList.meta.pagination.pageCount }} />
      <ComponentSectionFaq data={dataPageHome.data?.attributes.faqs?.data} />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader: DisplayMenuType = await displayMenu({ name: "header" });
  const menuFooterUseful: DisplayMenuType = await displayMenu({ name: "useful" });
  const menuFooterForCustomers: DisplayMenuType = await displayMenu({ name: "for-customers" });
  const menuFooterForMedia: DisplayMenuType = await displayMenu({ name: "for-media" });
  const dataPageHome: DisplayHomeType = await displayHomePageOnBackEnd({ seo: true, faqs: true, slider: true, ratings: true });
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
      dataPageHome,
      categories,
      newsList,
    },
  };
}

export default Home;
