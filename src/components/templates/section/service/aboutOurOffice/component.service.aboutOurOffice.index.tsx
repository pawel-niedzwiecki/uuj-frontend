import Link from "next/link";
import { Section, Title, Description } from "./component.service.aboutOurOffice.style";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import GoogleMaps from "./component.service.aboutOurOffice.map";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { BranchServiceType } from "database/services";

export default function ComponentSectionAboutOurOffice({ data }: { data?: { branch?: BranchServiceType; title?: string; about?: string } }): JSX.Element {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <GoogleMaps data={{ lat: data?.branch?.data.attributes.lat || 0, lng: data?.branch?.data.attributes.lng || 0 }} />
          </Col>
          <Col xs={12} md={6}>
            <Title>{data?.title}</Title>
            <Description>{data?.about}</Description>
            <List type={ListTypeEnum.vertical}>
              <li>
                <strong>{data?.branch?.data.attributes.title}</strong>
              </li>
              <li>
                ul. {data?.branch?.data.attributes.street} {data?.branch?.data.attributes.street_number}
              </li>
              <li>
                {data?.branch?.data.attributes.post_code} {data?.branch?.data.attributes.city}
              </li>
              <li>
                Tel:
                <Link href={`tel:${data?.branch?.data?.attributes?.number_phone?.data.attributes.number_phone}`}>
                  <a>{`${data?.branch?.data?.attributes?.number_phone?.data.attributes.number_phone}`}</a>
                </Link>
              </li>
            </List>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
