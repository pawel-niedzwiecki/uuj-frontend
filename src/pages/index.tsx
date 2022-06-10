import Laout from "layout/laout.index";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayCategory, DisplayCategoryType } from "database/categories";
import { displayNewsList, DisplayNewsListType } from "database/news";
import { displayHomeOnBackEnd, DisplayHomeType } from "database/pages/home";
import { displayContactOnBackEnd, DisplayContactType } from "database/pages/contact";
import { ComponentSliderWithService, ComponentSectionRatingList, ComponentSectionServiceList, ComponentSectionNewsList, ComponentSectionFaq } from "components/templates/section";

function Home({ menuHeader, contactHeader, dataPageHome, categories, newsList }: { menuHeader: DisplayMenuType; contactHeader: DisplayContactType; dataPageHome: DisplayHomeType; categories: DisplayCategoryType; newsList: DisplayNewsListType }) {
  return (
    <Laout data={{ header: { menu: menuHeader, contact: contactHeader } }}>
      <ComponentSliderWithService data={{ slider: dataPageHome?.data?.attributes?.slider }} />
      <ComponentSectionRatingList data={dataPageHome.data?.attributes.raitings} />
      <ComponentSectionServiceList data={categories.data} />
      <ComponentSectionNewsList data={{ newsList: newsList.data, pagination: false, pageCount: newsList.meta.pagination.pageCount }} />
      <ComponentSectionFaq />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader: DisplayMenuType = await displayMenu({ name: "header" });
  const dataPageHome: DisplayHomeType = await displayHomeOnBackEnd({ seo: true, slider: true, raitings: true });
  const contactHeader: DisplayContactType = await displayContactOnBackEnd({ numberPhones: true, email: true });
  const categories: DisplayCategoryType = await displayCategory({ cover: true, services: true });
  const newsList: DisplayNewsListType = await displayNewsList({ cover: true, category: true, author: true });

  return {
    props: {
      menuHeader,
      contactHeader,
      dataPageHome,
      categories,
      newsList,
    },
  };
}

export default Home;
