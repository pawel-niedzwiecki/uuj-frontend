import Facebook from "assets/icon/facebook.svg";
import Instagram from "assets/icon/instagram.svg";
import Logo from "assets/icon/logo.svg";
import Youtube from "assets/icon/youtube.svg";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { Col, Container, Row } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import Link from "next/link";
import Map from "./component.footer.maps";
import { Footer, Header, ItemAdress } from "./component.footer.style";

const FooterComponent = () => {
  return (
    <>
      <Footer>
        <Container size="full">
          <Row>
            <Col xs={12} lg={6} style={{ padding: "0", minHeight: "30rem" }}>
              <Map />
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
                          <h6>UUJ POMOC DROGOWA</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>ul. Piotrkowska 22</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>66-300 Łódź</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>NIP:</b> 5961204628
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>REGON:</b> 5961204628
                          </p>
                        </ItemAdress>
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
                            <Link href="tel:+48888333885">
                              <a> +48 888 888 888</a>
                            </Link>
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>E-MAIL: </b>
                            <Link href="mailto:biuro@uxu.pl">
                              <a> biuro@uxu.pl</a>
                            </Link>
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
                    <Col xs={12}>
                      <Header>NASZE ODDZIAŁY</Header>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <h6>UUJ POMOC DROGOWA</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>ul. Piotrkowska 22</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>66-300 Łódź</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>NIP:</b> 5961204628
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>REGON:</b> 5961204628
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <h6>UUJ POMOC DROGOWA</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>ul. Piotrkowska 22</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>66-300 Łódź</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>NIP:</b> 5961204628
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>REGON:</b> 5961204628
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <h6>UUJ POMOC DROGOWA</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>ul. Piotrkowska 22</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>66-300 Łódź</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>NIP:</b> 5961204628
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>REGON:</b> 5961204628
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <h6>UUJ POMOC DROGOWA</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>ul. Piotrkowska 22</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>66-300 Łódź</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>NIP:</b> 5961204628
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>REGON:</b> 5961204628
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <h6>UUJ POMOC DROGOWA</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>ul. Piotrkowska 22</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>66-300 Łódź</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>NIP:</b> 5961204628
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>REGON:</b> 5961204628
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                      <List type={ListTypeEnum.vertical}>
                        <ItemAdress>
                          <h6>UUJ POMOC DROGOWA</h6>
                        </ItemAdress>
                        <ItemAdress>
                          <p>ul. Piotrkowska 22</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>66-300 Łódź</p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>NIP:</b> 5961204628
                          </p>
                        </ItemAdress>
                        <ItemAdress>
                          <p>
                            <b>REGON:</b> 5961204628
                          </p>
                        </ItemAdress>
                      </List>
                    </Col>
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
                <li>
                  <Link href="/">
                    <a>
                      <Facebook />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <Instagram />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <Youtube />
                    </a>
                  </Link>
                </li>
              </List>

              <ReactMarkdown className="descriptionPage">
                POMOC DROGOWA ANHOL to firma rodzinna, która przez ostatnie 20 lat wyspecjalizowała się w świadczeniu usług z zakresu pomocy drogowej. Dzięki wieloletniemu doświadczeniu i nabytej wiedzy, współpracujemy z najlepszymi fachowcami, zaś nasz specjalistyczny sprzęt pozwala nam na bycie
                liderem na terenie zachodniej Polski. Będąc sprawdzonym partnerem biznesowym dla wielu firm oraz wychodząc na wprost oczekiwaniom klientów, prowadzimy również ekspansję na rynek ogólnopolski.
              </ReactMarkdown>
            </Col>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={6} lg={4}>
                  <List type={ListTypeEnum.vertical} className="menu">
                    <li>
                      <h6>PRZYDATNE</h6>
                    </li>
                    <li>
                      <Link href="/c">
                        <a>Wiadomosći</a>
                      </Link>
                    </li>
                  </List>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <List type={ListTypeEnum.vertical} className="menu">
                    <li>
                      <h6>DLA KLIENTÓW</h6>
                    </li>
                    <li>
                      <Link href="/c">
                        <a>Kontakt</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/c">
                        <a>Reklamacja</a>
                      </Link>
                    </li>
                  </List>
                </Col>
                <Col xs={12} md={6} lg={4}>
                  <List type={ListTypeEnum.vertical} className="menu">
                    <li>
                      <h6>DLA MEDIÓW</h6>
                    </li>
                    <li>
                      <Link href="/c">
                        <a>Polityka prywatności</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/c">
                        <a>Regulamin</a>
                      </Link>
                    </li>
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
