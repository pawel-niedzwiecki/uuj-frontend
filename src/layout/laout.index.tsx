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
      <Script id="google-analytics" strategy="afterInteractive">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-W5CKFDFWZN');
        `}
      </Script>
      <Script id="google-tagmenager" strategy="afterInteractive">{`
     (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
     })(window,document,'script','dataLayer','GTM-NZPGQMJ');
  `}</Script>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NZPGQMJ" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
      </noscript>
      <Header data={data?.header} />

      {children}
      <Footer data={data?.footer} />
    </>
  );
}
