import Link from "next/link";
import Image from "next/image";
import time from "utils/utils.time";
import { slugFromTitle } from "utils/utils.slug";
import useWindowData from "hooks/hooks.windowData";
import { useEffect, useState, useRef } from "react";
import { ComponentShortNewsAnimation } from "components/atoms/animation";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { displayNewsListOnFrontEnd, NewsListType, DisplayNewsListType } from "database/news";
import { Section, Header, Aricle, AricleCover, AricleTitle, AricleAuthorAvatar, AricleAuthorDataBox, AricleAuthorName, AricleDateAdds, ArticleQuote, More } from "./component.newsList.style";

export default function ComponentSectionNewsList({ data }: { data: { newsList: NewsListType[]; pageCount: number; pagination: boolean } }) {
  const { height } = useWindowData();
  const articeRef = useRef<HTMLDivElement>(null);
  const [pageActive, setPageActive] = useState(1);
  const [content, setContent] = useState(data.newsList);
  const [iAmWaitingForAnswer, setIamWaitingForAnswer] = useState(false);

  useEffect(() => {
    let check = setTimeout(() => {}, 200);

    function loadArticle() {
      clearTimeout(check);
      check = setTimeout(() => {
        const heightEl: any = articeRef?.current?.getBoundingClientRect().y;
        if (data.pageCount > pageActive && !iAmWaitingForAnswer && heightEl - height < 0) setIamWaitingForAnswer(true);
      }, 200);
    }

    document.addEventListener("scroll", loadArticle);

    return () => document.removeEventListener("scroll", loadArticle);
  }, [content, data, pageActive, height, iAmWaitingForAnswer]);

  useEffect(() => {
    (async () => {
      if (iAmWaitingForAnswer) {
        displayNewsListOnFrontEnd({ page: pageActive + 1 })
          .then((articles: DisplayNewsListType) => {
            setPageActive(pageActive + 1);
            setContent([...content, ...articles.data]);
            setIamWaitingForAnswer(false);
          })
          .catch((err) => {
            alert("Upss.. coś poszło nie tak spróbuj odświeyć stronę za kilka minut");
            setIamWaitingForAnswer(false);
          });
      }
    })();
  }, [iAmWaitingForAnswer, pageActive, content]);

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Widomości</Header>
          </Col>

          {!!content.length &&
            content.map((item: NewsListType, i: number) => {
              return (
                <Col xs={12} md={6} lg={4} key={i}>
                  <Link href={`/a/${slugFromTitle(item.attributes.title)}`} passHref>
                    <a>
                      <Aricle ref={articeRef}>
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
          {iAmWaitingForAnswer &&
            new Array(9).fill(undefined).map((_: undefined, index: number) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <ComponentShortNewsAnimation />
              </Col>
            ))}
        </Row>
      </Container>
    </Section>
  );
}
