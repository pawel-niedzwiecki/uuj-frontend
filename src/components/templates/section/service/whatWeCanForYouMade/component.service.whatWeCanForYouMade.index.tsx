import Image from "next/image";
import { Section, Title, ImageBox, DescriptionBox } from "./component.service.whatWeCanForYouMade.style";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ImageType } from "database/services";

export default function ComponentSectionWhatWeCanForYouMade({ data }: { data?: { city?: string; description?: string; cover?: ImageType } }): JSX.Element {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Co możemy dla Ciebie zrobić w mieście {data?.city?.toLocaleLowerCase() || ""} ?</Title>
          </Col>
          <Col xs={12} md={6}>
            <ImageBox>{data?.cover?.data?.attributes?.url ? <Image src={data?.cover?.data?.attributes?.url} alt={data?.city} width={1200} height={500} layout="fill" /> : "Dodaj zdjęcie"}</ImageBox>
          </Col>
          <Col xs={12} md={6}>
            <DescriptionBox>
              <ReactMarkdown>{data?.description || "Dodaj opis"}</ReactMarkdown>
            </DescriptionBox>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
