import { DisplayMenuType } from "database/menu";
import { DisplayContactType } from "database/contact";
import Header from "components/templates/header/index.header";
import Footer from "components/templates/footer/component.footer.index";

export default function Laout({ children, data: { header } }: { children: JSX.Element | JSX.Element[]; data: { header: { menu: DisplayMenuType; contact: DisplayContactType } } }) {
  return (
    <>
      <Header data={header} />
      {children}
      <Footer />
    </>
  );
}
