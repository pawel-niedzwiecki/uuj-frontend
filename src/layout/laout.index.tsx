import Head from "next/head";
import Script from "next/script";
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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W5CKFDFWZN" />
      <Script id="google-analytics" strategy="afterInteractive">{`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-W5CKFDFWZN');
  `}</Script>
      <Header data={data?.header} />
      {children}
      <Footer data={data?.footer} />
    </>
  );
}
