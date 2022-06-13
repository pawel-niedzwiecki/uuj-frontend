import Gas from "assets/icon/gas.svg";
import Key from "assets/icon/key.svg";
import Clock from "assets/icon/clock.svg";
import Medal from "assets/icon/medal.svg";
import Truck from "assets/icon/truck.svg";
import Tireflat from "assets/icon/tireflat.svg";
import Wheelchair from "assets/icon/wheelchair.svg";

import Link from "next/link";
import { BranchServiceType, AdvantagesServiceType, AdvantageServiceType } from "database/services";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Section, Title, Adress } from "./component.service.serviceHeader.style";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

export default function ComponentSectionServiceHeader({ data }: { data?: { title?: string; adress?: BranchServiceType; advantages?: AdvantagesServiceType } }): JSX.Element {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>{data?.title || "Dodaj nazwę usługi"}</Title>
            <Adress>
              ul. {data?.adress?.data.attributes.street} {data?.adress?.data.attributes.street_number} {data?.adress?.data.attributes.post_code} {data?.adress?.data.attributes.city} Tel :
              <Link href={`tel:${data?.adress?.data.attributes.number_phone?.data.attributes.number_phone}`}>
                <a>{data?.adress?.data.attributes.number_phone?.data.attributes.number_phone}</a>
              </Link>
            </Adress>
            <List type={ListTypeEnum.vertical} className="advantages">
              {data?.advantages?.length &&
                data?.advantages?.map((advantage, index) => {
                  return (
                    <li key={index}>
                      {advantage?.icon === "clock" && <Clock />}
                      {advantage?.icon === "gas" && <Gas />}
                      {advantage?.icon === "key" && <Key />}
                      {advantage?.icon === "medal" && <Medal />}
                      {advantage?.icon === "tireflat" && <Tireflat />}
                      {advantage?.icon === "truck" && <Truck />}
                      {advantage?.icon === "wheelchair" && <Wheelchair />}
                      <div>
                        <ReactMarkdown>{advantage?.content || ""}</ReactMarkdown>
                      </div>
                    </li>
                  );
                })}
            </List>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
