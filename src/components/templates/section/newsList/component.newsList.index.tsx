import Link from "next/link";
import Image from "next/image";
import logoOnYellowBackgroud from "assets/image/logoOnYellowBackgroud.png";
import { slugFromTitle } from "utils/utils.slug";
import { CategoryType, ServiceType } from "database/categories/index";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Header, Aricle, AricleCover, AricleTitle, AricleAuthorAvatar, AricleAuthorDataBox, AricleAuthorName, AricleDateAdds, ArticleQuote, More } from "./component.newsList.style";

export default function ComponentSectionNewsList() {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Widomości</Header>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <Link href="/" passHref>
              <a>
                <Aricle>
                  <AricleCover>{true && <Image src={logoOnYellowBackgroud} alt="ok" layout="responsive" width={600} height={400} />}</AricleCover>
                  <AricleTitle>Tytuł</AricleTitle>
                  <AricleAuthorAvatar>image</AricleAuthorAvatar>
                  <AricleAuthorDataBox>
                    <AricleAuthorName>Paweł Niedźwiecki</AricleAuthorName>
                    <AricleDateAdds>Miesiąc temu</AricleDateAdds>
                  </AricleAuthorDataBox>
                  <ArticleQuote>Auto pomoc to nic innego jak pomoc drogowa . Często młodzi klienci stosują właśnie zamiennik auto pomoc zamiast pomoc drogowa191</ArticleQuote>
                  <More>Wiecej</More>
                </Aricle>
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
