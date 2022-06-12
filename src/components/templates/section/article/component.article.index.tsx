import Image from "next/image";
import coverImg from "assets/image/logoOnYellowBackgroud.png";
import Avatar from "assets/icon/avatar.svg";
import time from "utils/utils.time";
import { DisplayArticleType } from "database/news";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

import { Section, Article, Cover, BoxAuthor, BoxAuthorImg, BoxAuthorAvatar, AuthorData, AuthorName, DateAdded, Title, Content } from "./component.article.style";

export default function ComponentSectionArticle({ data }: { data?: DisplayArticleType }) {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Article>
              <Cover>{data?.data?.attributes?.cover?.data?.attributes?.url && <Image src={data?.data?.attributes?.cover?.data?.attributes?.url} alt="tytuł" width={1200} height={400} layout="fill" />}</Cover>
              <BoxAuthor>
                <BoxAuthorImg>
                  {data?.data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url ? (
                    <Image width={42} height={42} placeholder="blur" blurDataURL="/img/blur.png" alt={data?.data?.attributes?.author?.data.attributes.username} src={data?.data?.attributes?.author?.data?.attributes?.avatar?.data?.attributes?.url} />
                  ) : (
                    <BoxAuthorAvatar>
                      <Avatar />
                    </BoxAuthorAvatar>
                  )}
                </BoxAuthorImg>
                <AuthorData>
                  <AuthorName>{data?.data?.attributes?.author?.data.attributes.username || "Brak danych o autorze"}</AuthorName>

                  <DateAdded>
                    {data?.data?.attributes?.createdAt && time.nameOfTheMonths(data?.data?.attributes?.createdAt)} ( {data?.data?.attributes?.createdAt && time.countDays(data?.data?.attributes?.createdAt)} )
                  </DateAdded>
                </AuthorData>
              </BoxAuthor>
              <Title>{data?.data?.attributes?.title || "Dodaj tytuł"}</Title>
              <Content>
                <ReactMarkdown>{data?.data?.attributes?.content || "Dodaj opis"}</ReactMarkdown>
              </Content>
            </Article>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
