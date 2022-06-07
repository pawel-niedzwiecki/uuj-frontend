import Laout from "layout/laout.index";
import { displayMenu, DisplayMenuType } from "database/menu";
import { ComponentSliderWithService } from "components/templates/section";

function Home({ menuHeader }: { menuHeader: DisplayMenuType }) {
  return (
    <Laout data={{ header: { menu: menuHeader } }}>
      <ComponentSliderWithService />
    </Laout>
  );
}

export async function getStaticProps() {
  const menuHeader = await displayMenu({ name: "header" });

  return {
    props: {
      menuHeader,
    },
  };
}

export default Home;
