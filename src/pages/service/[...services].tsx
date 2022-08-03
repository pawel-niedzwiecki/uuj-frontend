import Head from "next/head";
import Laout from "layout/laout.index";
import styled from "styled-components";
import { slugFromTitle } from "utils/utils.slug";
import { GetStaticPaths, GetStaticProps } from "next";
import { displayMenu, DisplayMenuType } from "database/menu";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
import { ComponentSectionRatingList, ComponentSectionServiceHeader, ComponentSectionAboutOurOffice, ComponentSectionWyWe, ComponentSectionWhatWeCanForYouMade, ComponentSectionFaq } from "components/templates/section";
import { displayServicesListOnBackend, DisplayServicesListType, DisplayServiceListType, displayServiceOnBackend, DisplayServiceType } from "database/services";

const Break = styled.div`
  display: block;
  width: 100%;
  height: 22rem;

  @media all and (min-width: 768px) {
    height: 11rem;
  }
`;

function PageService({
  menuHeader,
  menuFooterUseful,
  menuFooterForCustomers,
  menuFooterForMedia,
  contact,
  service,
}: {
  menuHeader?: DisplayMenuType;
  menuFooterUseful?: DisplayMenuType;
  menuFooterForCustomers?: DisplayMenuType;
  menuFooterForMedia?: DisplayMenuType;
  contact?: DisplayContactType;
  service?: DisplayServiceType;
}) {
  return (
    <>
      <Head>
        <title>{!!service?.data?.attributes?.title ? service?.data.attributes.title : "Usługa"} | UUJ</title>
        <meta name="description" content={!!service?.data?.attributes?.quote ? service?.data.attributes.quote : "Usługa"} />
      </Head>
      <Laout
        data={{
          header: { menu: menuHeader, contact },
          footer: { socialMedia: contact?.data?.attributes?.social_media, mainAddress: contact?.data?.attributes?.main_address, branches: contact?.data?.attributes?.branches, menuFooterUseful, menuFooterForCustomers, menuFooterForMedia },
        }}
      >
        <Break />

        <ComponentSectionServiceHeader data={{ title: service?.data.attributes.title, adress: service?.data.attributes.branch, advantages: service?.data.attributes.Advantages }} />
        <ComponentSectionAboutOurOffice data={{ branch: service?.data.attributes.branch, title: service?.data.attributes.title, about: service?.data.attributes.about_headquarter }} />
        <ComponentSectionRatingList data={service?.data?.attributes?.ratings} />
        <ComponentSectionWyWe data={{ title: service?.data.attributes.title, description: service?.data.attributes.why_we, cover: service?.data?.attributes?.why_we_cover }} />
        <ComponentSectionWhatWeCanForYouMade data={{ city: service?.data.attributes.branch?.data.attributes.city, description: service?.data.attributes.what_we_can_for_you_made, cover: service?.data?.attributes?.what_we_can_for_you_made_cover }} />
        <ComponentSectionFaq data={service?.data?.attributes?.faqs?.data} />
      </Laout>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const services: DisplayServicesListType = await displayServicesListOnBackend({});

  const allService: any[] = await Promise.all(
    new Array(services.meta.pagination.pageCount).fill(undefined).map(async (_: undefined, i: number): Promise<any> => {
      const serviceWithOnlyTitle: DisplayServicesListType = await displayServicesListOnBackend({ page: i + 1 });
      return serviceWithOnlyTitle?.data;
    })
  );

  return {
    paths: [].concat.apply([], allService).map((item: DisplayServiceListType) => `/service/${item.id}/${slugFromTitle(item.attributes.title)}`),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const menuHeader: DisplayMenuType = await displayMenu({ name: "header" });
  const menuFooterUseful: DisplayMenuType = await displayMenu({ name: "useful" });
  const menuFooterForMedia: DisplayMenuType = await displayMenu({ name: "for-media" });
  const menuFooterForCustomers: DisplayMenuType = await displayMenu({ name: "for-customers" });
  const contact: DisplayContactType = await displayContactOnBackEnd({ numberPhones: true, email: true, socialMedia: true, mainAddress: true, branches: true });
  const service: DisplayServiceType = await displayServiceOnBackend({ id: context?.params?.services?.length ? parseInt(context?.params?.services[0]) : 1 });

  return {
    props: {
      menuHeader,
      menuFooterUseful,
      menuFooterForMedia,
      menuFooterForCustomers,
      contact,
      service,
    },
  };
};

export default PageService;
