import Image from "next/image";
import Star from "assets/icon/star.svg";
import HalfStar from "assets/icon/halfStar.svg";
import StarBlack from "assets/icon/starBlack.svg";
import HalfStarBlack from "assets/icon/halfStarBlack.svg";
import { Carousel } from "react-responsive-carousel";
import logoOnYellowBackgroud from "assets/image/logoOnYellowBackgroud.png";
import { Section, Header, Title, AllRating, MeanRating, RatingBox, RatingTitle, RatingContent, RatingFaceAuthor, RatingAuthorDataBox, RatingAuthorName, RatingDateAdds, RatingAuthor } from "./component.ratingList.style";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

export default function ComponentSectionRatingList(): JSX.Element {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Jak oceniają nas klienci ?</Header>
            <Title>UUJ POMOC DROGOWA</Title>
          </Col>
        </Row>
      </Container>
      <Container size="full" style={{ backgroundColor: "#FFCC00", padding: "0 1.5rem", margin: "3rem 0" }}>
        <Row>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <Image src={logoOnYellowBackgroud} alt="Picture of the author" width="300px" height="300px" />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <AllRating>112 / 4.5</AllRating>
            <MeanRating>
              <Star />
              <Star />
              <Star />
              <Star />
              <HalfStar />
            </MeanRating>
          </Col>
          <Col xs={12} style={{ padding: "3rem 0" }}>
            <Header>Ostatnio dodane oceny</Header>
          </Col>
          <Col xs={12}>
            <Carousel showArrows={true} showThumbs={false} autoPlay={false} infiniteLoop={true} showStatus={false} showIndicators={false}>
              <Container>
                <Row>
                  <Col xs={1} md={2} lg={4}>
                    <RatingBox>
                      <RatingTitle>LTMS Sp. z o.o.</RatingTitle>
                      <RatingContent>Nasza Auto pomoc działa na terenie województwa lubuskiego nie przerwanie od ponad 20 lat 24 godziny n a dobę 7 dni w tygodniu.</RatingContent>
                      <RatingFaceAuthor>
                        <Image src={logoOnYellowBackgroud} alt="Picture of the author" width="60px" height="60px" />
                      </RatingFaceAuthor>
                      <RatingAuthorDataBox>
                        <RatingAuthorName>Paweł Niedźwiecki</RatingAuthorName>
                        <RatingDateAdds>Miesiąc temu</RatingDateAdds>
                        <RatingAuthor>
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <HalfStarBlack />
                        </RatingAuthor>
                      </RatingAuthorDataBox>
                    </RatingBox>
                  </Col>
                  <Col xs={1} md={2} lg={4}>
                    <RatingBox>
                      <RatingTitle>LTMS Sp. z o.o.</RatingTitle>
                      <RatingContent>Nasza Auto pomoc działa na terenie województwa lubuskiego nie przerwanie od ponad 20 lat 24 godziny n a dobę 7 dni w tygodniu.</RatingContent>
                      <RatingFaceAuthor>
                        <Image src={logoOnYellowBackgroud} alt="Picture of the author" width="60px" height="60px" />
                      </RatingFaceAuthor>
                      <RatingAuthorDataBox>
                        <RatingAuthorName>Paweł Niedźwiecki</RatingAuthorName>
                        <RatingDateAdds>Miesiąc temu</RatingDateAdds>
                        <RatingAuthor>
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <HalfStarBlack />
                        </RatingAuthor>
                      </RatingAuthorDataBox>
                    </RatingBox>
                  </Col>
                  <Col xs={1} md={2} lg={4}>
                    <RatingBox>
                      <RatingTitle>LTMS Sp. z o.o.</RatingTitle>
                      <RatingContent>Nasza Auto pomoc działa na terenie województwa lubuskiego nie przerwanie od ponad 20 lat 24 godziny n a dobę 7 dni w tygodniu.</RatingContent>
                      <RatingFaceAuthor>
                        <Image src={logoOnYellowBackgroud} alt="Picture of the author" width="60px" height="60px" />
                      </RatingFaceAuthor>
                      <RatingAuthorDataBox>
                        <RatingAuthorName>Paweł Niedźwiecki</RatingAuthorName>
                        <RatingDateAdds>Miesiąc temu</RatingDateAdds>
                        <RatingAuthor>
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <HalfStarBlack />
                        </RatingAuthor>
                      </RatingAuthorDataBox>
                    </RatingBox>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col xs={1} md={2} lg={4}>
                    <RatingBox>
                      <RatingTitle>LTMS Sp. z o.o.</RatingTitle>
                      <RatingContent>Nasza Auto pomoc działa na terenie województwa lubuskiego nie przerwanie od ponad 20 lat 24 godziny n a dobę 7 dni w tygodniu.</RatingContent>
                      <RatingFaceAuthor>
                        <Image src={logoOnYellowBackgroud} alt="Picture of the author" width="60px" height="60px" />
                      </RatingFaceAuthor>
                      <RatingAuthorDataBox>
                        <RatingAuthorName>Paweł Niedźwiecki</RatingAuthorName>
                        <RatingDateAdds>Miesiąc temu</RatingDateAdds>
                        <RatingAuthor>
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <HalfStarBlack />
                        </RatingAuthor>
                      </RatingAuthorDataBox>
                    </RatingBox>
                  </Col>
                  <Col xs={1} md={2} lg={4}>
                    <RatingBox>
                      <RatingTitle>LTMS Sp. z o.o.</RatingTitle>
                      <RatingContent>Nasza Auto pomoc działa na terenie województwa lubuskiego nie przerwanie od ponad 20 lat 24 godziny n a dobę 7 dni w tygodniu.</RatingContent>
                      <RatingFaceAuthor>
                        <Image src={logoOnYellowBackgroud} alt="Picture of the author" width="60px" height="60px" />
                      </RatingFaceAuthor>
                      <RatingAuthorDataBox>
                        <RatingAuthorName>Paweł Niedźwiecki</RatingAuthorName>
                        <RatingDateAdds>Miesiąc temu</RatingDateAdds>
                        <RatingAuthor>
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <HalfStarBlack />
                        </RatingAuthor>
                      </RatingAuthorDataBox>
                    </RatingBox>
                  </Col>
                  <Col xs={1} md={2} lg={4}>
                    <RatingBox>
                      <RatingTitle>LTMS Sp. z o.o.</RatingTitle>
                      <RatingContent>Nasza Auto pomoc działa na terenie województwa lubuskiego nie przerwanie od ponad 20 lat 24 godziny n a dobę 7 dni w tygodniu.</RatingContent>
                      <RatingFaceAuthor>
                        <Image src={logoOnYellowBackgroud} alt="Picture of the author" width="60px" height="60px" />
                      </RatingFaceAuthor>
                      <RatingAuthorDataBox>
                        <RatingAuthorName>Paweł Niedźwiecki</RatingAuthorName>
                        <RatingDateAdds>Miesiąc temu</RatingDateAdds>
                        <RatingAuthor>
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <StarBlack />
                          <HalfStarBlack />
                        </RatingAuthor>
                      </RatingAuthorDataBox>
                    </RatingBox>
                  </Col>
                </Row>
              </Container>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
