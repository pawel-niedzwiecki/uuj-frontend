import Laout from "layout/laout.index";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
import { ComponentSliderWithService } from "components/templates/section";

function Home({ menuHeader, contactHeader }: { menuHeader: DisplayMenuType; contactHeader: DisplayContactType }) {
  return (
    <Laout data={{ header: { menu: menuHeader, contact: contactHeader } }}>
      <ComponentSliderWithService />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader = await displayMenu({ name: "header" });
  const contactHeader = await displayContactOnBackEnd({ numberPhones: true, email: true });

  return {
    props: {
      menuHeader,
      contactHeader,
    },
  };
}

export default Home;
