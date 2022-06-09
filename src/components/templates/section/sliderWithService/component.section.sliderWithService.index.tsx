import Gas from "assets/icon/gas.svg";
import Key from "assets/icon/key.svg";
import Clock from "assets/icon/clock.svg";
import Medal from "assets/icon/medal.svg";
import Truck from "assets/icon/truck.svg";
import Tireflat from "assets/icon/tireflat.svg";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Carousel } from "react-responsive-carousel";
import Wheelchair from "assets/icon/wheelchair.svg";
import { Advantage, Slide, Slider } from "database/pages/home";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import ComponentList, { ListTypeEnum } from "components/molecules/list/component.list.index";

import { Section, Box, Header, Text, UnitText } from "./component.section.sliderWithService.style";

export default function ComponentSliderWithService({ data }: { data: { slider: Slider | undefined } }) {
  return (
    <Section>
      {!!data.slider?.data?.length && (
        <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
          {data.slider?.data?.map((item: Slide, i: number): JSX.Element => {
            return (
              <Box key={i}>
                <Container>
                  <Row>
                    <Col xs={12} className="col">
                      <Header>{item.attributes.title}</Header>
                    </Col>
                    <Col xs={12} md={6} className="col">
                      <ComponentList type={ListTypeEnum.vertical}>
                        {!!item?.attributes?.Advantages?.length &&
                          item.attributes.Advantages.map((advantage: Advantage, i: number) => {
                            return (
                              <li key={i}>
                                <Text>
                                  {advantage.icon === "clock" && <Clock />}
                                  {advantage.icon === "gas" && <Gas />}
                                  {advantage.icon === "key" && <Key />}
                                  {advantage.icon === "medal" && <Medal />}
                                  {advantage.icon === "tireflat" && <Tireflat />}
                                  {advantage.icon === "truck" && <Truck />}
                                  {advantage.icon === "wheelchair" && <Wheelchair />}
                                  <div>
                                    <ReactMarkdown>{advantage.content}</ReactMarkdown>
                                  </div>
                                </Text>
                              </li>
                            );
                          })}
                      </ComponentList>
                    </Col>
                    <Col xs={12} md={6} className="col">
                      <UnitText>
                        <ReactMarkdown>{item.attributes.quote}</ReactMarkdown>
                      </UnitText>
                    </Col>
                  </Row>
                </Container>
              </Box>
            );
          })}
        </Carousel>
      )}
    </Section>
  );
}
