import Link from "next/link";
import Image from "next/image";
import time from "utils/utils.time";
import { slugFromTitle } from "utils/utils.slug";
import { displayNewsList, NewsListType } from "database/news";
import logoOnYellowBackgroud from "assets/image/logoOnYellowBackgroud.png";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Header, Aricle, AricleCover, AricleTitle, AricleAuthorAvatar, AricleAuthorDataBox, AricleAuthorName, AricleDateAdds, ArticleQuote, More } from "./component.newsList.style";

export default function ComponentSectionNewsList({ data }: { data: { newsList: NewsListType[]; pageCount: number; pagination: boolean } }) {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Widomości</Header>
          </Col>
          {!!data.newsList.length &&
            data.newsList.map((item: NewsListType, i: number) => {
              return (
                <Col xs={12} md={6} lg={4} key={i}>
                  <Link href={`/a/${slugFromTitle(item.attributes.title)}`} passHref>
                    <a>
                      <Aricle>
                        <AricleCover>{item?.attributes?.cover?.data?.attributes?.url && <Image src={item?.attributes?.cover?.data?.attributes?.url} alt={item.attributes.title} width={300} height={200} layout="fill" />}</AricleCover>
                        <AricleTitle>{item.attributes.title}</AricleTitle>
                        <AricleAuthorAvatar>
                          {item?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url && <Image src={item?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url} alt={item.attributes.author.data.attributes.username} width={60} height={60} layout="fill" />}
                        </AricleAuthorAvatar>
                        <AricleAuthorDataBox>
                          <AricleAuthorName>{item.attributes.author?.data.attributes.username}</AricleAuthorName>
                          <AricleDateAdds>{item.attributes.createdAt && time.countDays(item.attributes.createdAt)}</AricleDateAdds>
                        </AricleAuthorDataBox>
                        <ArticleQuote>{item.attributes.quote}</ArticleQuote>
                        <More>Wiecej</More>
                      </Aricle>
                    </a>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    </Section>
  );
}
