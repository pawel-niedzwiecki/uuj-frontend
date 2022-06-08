import Laout from "layout/laout.index";
import { displayMenu, DisplayMenuType } from "database/menu";
import { ComponentSliderWithService } from "components/templates/section";
import { displayHomeOnBackEnd, DisplayHomeType } from "database/pages/home";
import { displayContactOnBackEnd, DisplayContactType } from "database/pages/contact";

function Home({ menuHeader, contactHeader, dataPageHome }: { menuHeader: DisplayMenuType; contactHeader: DisplayContactType; dataPageHome: DisplayHomeType }) {
  return <Laout data={{ header: { menu: menuHeader, contact: contactHeader } }}>{<ComponentSliderWithService data={{ slider: dataPageHome?.data?.attributes?.slider }} />}</Laout>;
}

export async function getStaticProps() {
  const menuHeader = await displayMenu({ name: "header" });
  const dataPageHome = await displayHomeOnBackEnd({ seo: true, slider: true });
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
