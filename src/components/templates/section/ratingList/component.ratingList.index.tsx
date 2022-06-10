import Image from "next/image";
import Star from "assets/icon/star.svg";
import HalfStar from "assets/icon/halfStar.svg";
import StarBlack from "assets/icon/starBlack.svg";
import HalfStarBlack from "assets/icon/halfStarBlack.svg";
import { Carousel } from "react-responsive-carousel";
import logoOnYellowBackgroud from "assets/image/logoOnYellowBackgroud.png";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Header, Title, AllRating, MeanRating, RatingBox, RatingTitle, RatingContent, RatingFaceAuthor, RatingAuthorDataBox, RatingAuthorName, RatingDateAdds, RatingAuthor } from "./component.ratingList.style";
import { Rating, Ratings } from "database/pages/home";
import { countRaitings } from "utils/utils.ratings";

export default function ComponentSectionRatingList({ data }: { data: Ratings | undefined }): JSX.Element {
  const countRatingsAll = countRaitings({ ratings: data?.ratings.data });
  let newArray: Rating[][] = [];
  new Array(Math.round(countRatingsAll.count / 3)).fill(undefined).forEach((_, i) => data?.ratings?.data && newArray.push(data?.ratings.data.slice(i * 3, i * 3 + 3)));
  console.log(newArray);
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Jak oceniają nas klienci ?</Header>
            <Title>{data?.title || "Dodaj tytuł"}</Title>
          </Col>
        </Row>
      </Container>
      <Container size="full" style={{ backgroundColor: "#FFCC00", padding: "0 1.5rem", margin: "3rem 0" }}>
        <Row>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            {data?.cover?.data?.attributes?.url ? <Image src={data?.cover?.data?.attributes?.url} alt={data?.title} width="300px" height="300px" /> : "Dodaj zdjęcie"}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <AllRating>
              {countRatingsAll.count} / {countRatingsAll.mean}
            </AllRating>
            <MeanRating>
              {new Array(Math.round(countRatingsAll.mean)).fill(undefined).map((_: undefined, i: number) => {
                if (Math.round(countRatingsAll.mean) - 1 === i && countRatingsAll.mean % 1 > 0) return <HalfStar key={i} />;
                else return <Star key={i} />;
              })}
            </MeanRating>
          </Col>
          <Col xs={12} style={{ padding: "3rem 0" }}>
            <Header>Ostatnio dodane oceny</Header>
          </Col>
          <Col xs={12}>
            <Carousel showArrows={true} showThumbs={false} autoPlay={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
              {newArray.map((items: Rating[], index: number): any => {
                return (
                  <Container key={index}>
                    <Row style={{ justifyContent: "center" }}>
                      {items.map((item: Rating, i: number): JSX.Element[] | JSX.Element => {
                        return (
                          <Col xs={12} md={6} lg={4} key={i}>
                            <RatingBox>
                              <RatingTitle>{item.attributes.from}</RatingTitle>
                              <RatingContent>{item.attributes.content}</RatingContent>
                              <RatingFaceAuthor>{item?.attributes?.cover?.data?.attributes?.url && <Image src={item.attributes.cover.data.attributes.url} alt={item.attributes.author} width="60px" height="60px" />}</RatingFaceAuthor>
                              <RatingAuthorDataBox>
                                <RatingAuthorName>{item.attributes.author}</RatingAuthorName>
                                <RatingDateAdds>Miesiąc temu</RatingDateAdds>
                                <RatingAuthor>
                                  {new Array(Math.round(item.attributes.rating)).fill(undefined).map((_: undefined, i: number) => {
                                    if (Math.round(item.attributes.rating) - 1 === i && item.attributes.rating % 1 > 0) return <HalfStarBlack key={i} />;
                                    else return <StarBlack key={i} />;
                                  })}
                                </RatingAuthor>
                              </RatingAuthorDataBox>
                            </RatingBox>
                          </Col>
                        );
                      })}
                    </Row>
                  </Container>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
