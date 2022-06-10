import Link from "next/link";
import Image from "next/image";
import logoOnYellowBackgroud from "assets/image/logoOnYellowBackgroud.png";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Header, Service, ServiceCategoryCover, ServiceCategoryTitle, ServiceCategoryDescription } from "./component.servicesList.style";

export default function ComponentSectionServiceList() {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Jakie świadczymy usługi ?</Header>
          </Col>
          <Col xs={12}>
            <Service>
              <ServiceCategoryCover>
                <Image src={logoOnYellowBackgroud} alt="Picture of the author" layout="responsive" width={1280} height={300} />
              </ServiceCategoryCover>
              <ServiceCategoryTitle>Nazwa kategoriii</ServiceCategoryTitle>
              <ServiceCategoryDescription>
                <ReactMarkdown>Nazwa kategoriiiNazwa kategoriiiNazwa kategoriiiNazwa kategoriiiNazwa kategoriiiNazwa kategoriii</ReactMarkdown>
              </ServiceCategoryDescription>
              <List type={ListTypeEnum.vertical}>
                <li>
                  <Link href="/">
                    <a>
                      <span>#</span>ok
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <span>#</span>ok
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <span>#</span>ok
                    </a>
                  </Link>
                </li>
              </List>
            </Service>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
