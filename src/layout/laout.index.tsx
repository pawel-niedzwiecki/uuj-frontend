import { DisplayMenuType } from "database/menu";
import Header from "components/templates/header/index.header";
import Footer from "components/templates/footer/component.footer.index";
import { DisplayContactType, SocialMediaType, MainAddressType, BranchesType } from "database/contact";

export default function Laout({
  children,
  data,
}: {
  children: JSX.Element | JSX.Element[];
  data?: {
    header?: { menu?: DisplayMenuType; contact?: DisplayContactType };
    footer?: { socialMedia?: SocialMediaType[]; mainAddress?: MainAddressType; branches?: BranchesType; description?: string | null; menuFooterUseful?: DisplayMenuType; menuFooterForCustomers?: DisplayMenuType; menuFooterForMedia?: DisplayMenuType };
  };
}) {
  return (
    <>
      <Header data={data?.header} />
      {children}
      <Footer data={data?.footer} />
    </>
  );
}
