import Laout from "layout/laout.index";
import styled from "styled-components";
import { slugFromTitle } from "utils/utils.slug";
import { GetStaticPaths, GetStaticProps } from "next";
import { displayMenu, DisplayMenuType } from "database/menu";
import { ComponentSectionRatingList, ComponentSectionServiceHeader, ComponentSectionAboutOurOffice } from "components/templates/section";
import { displayContactOnBackEnd, DisplayContactType } from "database/contact";
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

      <p>usługa: {service?.data.attributes.title}</p>
    </Laout>
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
  const menuHeader: DisplayMenuType | undefined = await displayMenu({ name: "header" });
  const menuFooterUseful: DisplayMenuType | undefined = await displayMenu({ name: "useful" });
  const menuFooterForMedia: DisplayMenuType | undefined = await displayMenu({ name: "for-media" });
  const menuFooterForCustomers: DisplayMenuType | undefined = await displayMenu({ name: "for-customers" });
  const contact: DisplayContactType | undefined = await displayContactOnBackEnd({ numberPhones: true, email: true, socialMedia: true, mainAddress: true, branches: true });
  const service: DisplayServiceType | undefined = await displayServiceOnBackend({ id: context?.params?.services?.length ? parseInt(context?.params?.services[0]) : 1 });

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
