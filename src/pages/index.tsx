import Laout from "layout/laout.index";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayCategory, DisplayCategoryType } from "database/categories";
import { displayHomeOnBackEnd, DisplayHomeType } from "database/pages/home";
import { displayContactOnBackEnd, DisplayContactType } from "database/pages/contact";
import { ComponentSliderWithService, ComponentSectionRatingList, ComponentSectionServiceList, ComponentSectionNewsList } from "components/templates/section";

function Home({ menuHeader, contactHeader, dataPageHome, categories }: { menuHeader: DisplayMenuType; contactHeader: DisplayContactType; dataPageHome: DisplayHomeType; categories: DisplayCategoryType }) {
  return (
    <Laout data={{ header: { menu: menuHeader, contact: contactHeader } }}>
      <ComponentSliderWithService data={{ slider: dataPageHome?.data?.attributes?.slider }} />
      <ComponentSectionRatingList data={dataPageHome.data?.attributes.raitings} />
      <ComponentSectionServiceList data={categories.data} />
      <ComponentSectionNewsList />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader = await displayMenu({ name: "header" });
  const dataPageHome = await displayHomeOnBackEnd({ seo: true, slider: true, raitings: true });
  const contactHeader = await displayContactOnBackEnd({ numberPhones: true, email: true });
  const categories = await displayCategory({ cover: true, services: true });

  return {
    props: {
      menuHeader,
      contactHeader,
      dataPageHome,
      categories,
    },
  };
}

export default Home;
