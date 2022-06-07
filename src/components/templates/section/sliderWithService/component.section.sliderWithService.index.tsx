import React from "react";
import { Carousel } from "react-responsive-carousel";
import Clock from "assets/icon/clock.svg";
import Gas from "assets/icon/gas.svg";
import Key from "assets/icon/key.svg";
import Medal from "assets/icon/medal.svg";
import Tireflat from "assets/icon/tireflat.svg";
import Truck from "assets/icon/truck.svg";
import Wheelchair from "assets/icon/wheelchair.svg";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import ComponentList, { ListTypeEnum } from "components/molecules/list/component.list.index";

import { Section, Box, Header, Text, UnitText } from "./component.section.sliderWithService.style";

export default function ComponentSliderWithService() {
  return (
    <Section>
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} showStatus={false} showIndicators={false}>
        <Box>
          <Container>
            <Row>
              <Col xs={12} className="col">
                <Header>Pomoc Drogowa 1</Header>
              </Col>
              <Col xs={12} md={6} className="col">
                <ComponentList
                  type={ListTypeEnum.vertical}
                  items={[
                    <>
                      <Text>
                        <Clock /> <span>Średni czas dojazdu do klienta do 1 sekunda</span>
                      </Text>
                    </>,
                    <>
                      <Text>
                        <Gas /> <span> Średni czas dojazdu do klienta do 1 sekunda</span>
                      </Text>
                    </>,
                    <>
                      <Text>
                        <Key /> <span>Średni czas dojazdu do klienta do 1 sekunda</span>
                      </Text>
                    </>,
                    <>
                      <Text>
                        <Tireflat /> <span>Średni czas dojazdu do klienta do 1 sekunda</span>
                      </Text>
                    </>,
                    <>
                      <Text>
                        <Truck /> <span>Średni czas dojazdu do klienta do 1 sekunda</span>
                      </Text>
                    </>,
                  ]}
                />
              </Col>
              <Col xs={12} md={6} className="col">
                <UnitText>
                  <strong>Ratownictwo drogowe UUJ</strong> prowadzi działalność związaną z pomocą drogową. Oferujemy kierowcom pomoc na drodze podczas awarii, wypadku lub kolizji. Mamy ogromne doświadczenie, które procentuje podczas wykonywania powierzonych nam zadań. Jako{" "}
                  <strong>pomoc drogowa</strong> w szczególności obsługujemy <strong>Gorzów Wielkopolski</strong>. Stale patrolujemy drogę ekspresową <strong>S3</strong> na odcinku Świebodzin, Myślibórz oraz autostradę <strong>A2</strong> na odcinku <strong>Świecko</strong>, Torzym, Nowy Tomyśl. W
                  swojej ofercie posiadamy usługę <strong>tanie holowanie</strong> oraz <strong>tania laweta</strong>. Do dyspozycji mamy <strong>dźwig grove do 35t</strong> oraz <strong>ładowarkę JCB</strong>. Jesteśmy rzetelną firmą z wieloletnim doświadczeniem na rynku.
                  <strong>Prowadzimy współpracę z Policją</strong>, okolicznymi gminami, Starostwem Powiatowym czy też Sądem Rejonowym. Mamy do dyspozycji <strong>potężny, strzeżony 24h/dobę parking</strong> z możliwością podłączenia się do WiFi, telewizją oraz zapleczem sanitarnym.
                </UnitText>
              </Col>
            </Row>
          </Container>
        </Box>
        <Box>kupa2</Box>
      </Carousel>
    </Section>
  );
}
