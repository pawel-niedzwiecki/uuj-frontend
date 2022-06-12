import Facebook from "assets/icon/facebook.svg";
import Instagram from "assets/icon/instagram.svg";
import Logo from "assets/icon/logo.svg";

import Youtube from "assets/icon/youtube.svg";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { DisplayMenuType, MenuItemType } from "database/menu";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { Col, Container, Row } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import Link from "next/link";
import Map from "./component.footer.maps";
import { Footer, Header, ItemAdress } from "./component.footer.style";
import { SocialMediaType, MainAddressType, BranchesType, BrancheType } from "database/contact";

const FooterComponent = ({ data }: { data?: { socialMedia?: SocialMediaType[]; mainAddress?: MainAddressType; branches?: BranchesType; description?: string | null; menuFooterUseful?: DisplayMenuType; menuFooterForCustomers?: DisplayMenuType; menuFooterForMedia?: DisplayMenuType } }) => {
  return (
    <>
      <Footer>
        <Container size="full">
          <Row>
            <Col xs={12} lg={6} style={{ padding: "0", minHeight: "30rem" }}>
              <Map data={{ branches: data?.branches?.data, mainAddress: data?.mainAddress }} />
            </Col>
            <Col xs={12} lg={6} style={{ background: "#FFCC00" }}>
              <Row>
                <Container size="half" className="data">
                  <Row>
                    <Col xs={12}>
                      <Header>DANE FIRMY</Header>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <h6>{data?.mainAddress?.data?.attributes?.title}</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            ul. {data?.mainAddress?.data.attributes.street} {data?.mainAddress?.data.attributes.street_number}
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            {data?.mainAddress?.data.attributes.post_code} {data?.mainAddress?.data.attributes.city}
                          </p>
                        </ItemAdress>
                        {data?.mainAddress?.data?.attributes?.nip && (
                          <ItemAdress>
                            <p>
                              <b>NIP:</b> {data?.mainAddress?.data.attributes.nip}
                            </p>
                          </ItemAdress>
                        )}
                        {data?.mainAddress?.data?.attributes?.regon && (
                          <ItemAdress>
                            <p>
                              <b>REGON:</b> {data?.mainAddress?.data.attributes.regon}
                            </p>
                          </ItemAdress>
                        )}
                      </List>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <p>
                            <b>KONTAKT</b>
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>TEL:</b>
                            <Link href={`tel:${data?.mainAddress?.data?.attributes?.number_phone.data.attributes.number_phone}`}>
                              <a> {data?.mainAddress?.data?.attributes?.number_phone.data.attributes.number_phone}</a>
                            </Link>
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>E-MAIL: </b>
                            <Link href={`mailto:${data?.mainAddress?.data?.attributes?.e_mail.data.attributes.email}`}>
                              <a> {data?.mainAddress?.data?.attributes?.e_mail.data.attributes.email}</a>
                            </Link>
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
                    <Col xs={12}>
                      <Header>NASZE ODDZIAŁY</Header>
                    </Col>
                    {data?.branches?.data &&
                      data?.branches?.data.map((item: BrancheType, index: number): JSX.Element => {
                        return (
                          <Col xs={12} md={6} lg={4} key={index}>
                            <List type={ListTypeEnum.vertical}>
                              <ItemAdress>
                                <h6>{item.attributes.title}</h6>
                              </ItemAdress>
                              <ItemAdress>
                                <p>
                                  ul. {item.attributes.street} {item.attributes.street_number}
                                </p>
                              </ItemAdress>
                              <ItemAdress>
                                <p>
                                  {item.attributes.post_code} {item.attributes.city}
                                </p>
                              </ItemAdress>
                              {item?.attributes?.number_phone?.data?.attributes?.number_phone && (
                                <ItemAdress>
                                  <p>
                                    <b>TEL:</b> <Link href={`tel:${item?.attributes?.number_phone?.data?.attributes?.number_phone}`}>{item?.attributes?.number_phone?.data?.attributes?.number_phone}</Link>
                                  </p>
                                </ItemAdress>
                              )}
                              {item?.attributes?.e_mail?.data?.attributes?.email && (
                                <ItemAdress>
                                  <p>
                                    <b>Email:</b> <Link href={`mailto:${item?.attributes?.e_mail?.data?.attributes?.email}`}>{item?.attributes?.e_mail?.data?.attributes?.email}</Link>
                                  </p>
                                </ItemAdress>
                              )}
                            </List>
                          </Col>
                        );
                      })}
                  </Row>
                </Container>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="footer">
          <Row>
            <Col xs={12} md={4}>
              <Link href="/">
                <a className="logo" title="UUJ POMOC DROGOWA">
                  <Logo />
                </a>
              </Link>
              <List type={ListTypeEnum.level} className="socialmedia">
                {data?.socialMedia &&
                  data?.socialMedia?.map((socialLink: SocialMediaType, index: number): JSX.Element => {
                    return (
                      <li key={index}>
                        <Link href={socialLink.url}>
                          <a title={socialLink.type}>
                            {socialLink.type === "YouTube" && <Youtube />}
                            {socialLink.type === "Facebook" && <Facebook />}
                            {socialLink.type === "Instagram" && <Instagram />}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
              </List>

              <ReactMarkdown className="descriptionPage">{data?.description || ""}</ReactMarkdown>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <List type={ListTypeEnum.vertical} className="menu">
                    <li>
                      <h6>PRZYDATNE</h6>
                    </li>
                    {!!data?.menuFooterUseful?.data?.menu?.items &&
                      data?.menuFooterUseful.data?.menu.items.map((item: MenuItemType, index: number) => {
                        return (
                          <li key={index}>
                            <Link href={item.url}>
                              <a>{item.title}</a>
                            </Link>
                          </li>
                        );
                      })}
                  </List>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <List type={ListTypeEnum.vertical} className="menu">
                    <li>
                      <h6>DLA KLIENTÓW</h6>
                    </li>
                    {!!data?.menuFooterForCustomers?.data?.menu?.items &&
                      data?.menuFooterForCustomers.data?.menu.items.map((item: MenuItemType, index: number) => {
                        return (
                          <li key={index}>
                            <Link href={item.url}>
                              <a>{item.title}</a>
                            </Link>
                          </li>
                        );
                      })}
                  </List>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <List type={ListTypeEnum.vertical} className="menu">
                    <li>
                      <h6>DLA MEDIÓW</h6>
                    </li>
                    {!!data?.menuFooterForMedia?.data?.menu?.items &&
                      data?.menuFooterForMedia.data?.menu.items.map((item: MenuItemType, index: number) => {
                        return (
                          <li key={index}>
                            <Link href={item.url}>
                              <a>{item.title}</a>
                            </Link>
                          </li>
                        );
                      })}
                  </List>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

export default FooterComponent;
