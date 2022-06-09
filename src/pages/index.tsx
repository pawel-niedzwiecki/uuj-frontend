import Laout from "layout/laout.index";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayHomeOnBackEnd, DisplayHomeType } from "database/pages/home";
import { displayContactOnBackEnd, DisplayContactType } from "database/pages/contact";
import { ComponentSliderWithService, ComponentSectionRatingList } from "components/templates/section";

function Home({ menuHeader, contactHeader, dataPageHome }: { menuHeader: DisplayMenuType; contactHeader: DisplayContactType; dataPageHome: DisplayHomeType }) {
  return (
    <Laout data={{ header: { menu: menuHeader, contact: contactHeader } }}>
      <ComponentSliderWithService data={{ slider: dataPageHome?.data?.attributes?.slider }} />
      <ComponentSectionRatingList />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader = await displayMenu({ name: "header" });
  const dataPageHome = await displayHomeOnBackEnd({ seo: true, slider: true, raitings: true });
  const contactHeader = await displayContactOnBackEnd({ numberPhones: true, email: true });

  return {
    props: {
      menuHeader,
      contactHeader,
      dataPageHome,
    },
  };
}

export default Home;
