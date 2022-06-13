import Image from "next/image";
import { Section, Title, ImageBox, DescriptionBox } from "./component.service.wyWe.style";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { ImageType } from "database/services";

export default function ComponentSectionWyWe({ data }: { data?: { title?: string; description?: string; cover?: ImageType } }): JSX.Element {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Czemu {data?.title?.toLocaleLowerCase() || ""} ?</Title>
            <ImageBox>{data?.cover?.data?.attributes?.url ? <Image src={data?.cover?.data?.attributes?.url} alt={data?.title} width={1200} height={500} layout="fill" /> : "Dodaj zdjęcie"}</ImageBox>
            <DescriptionBox>
              <ReactMarkdown>{data?.description || "Dodaj opis"}</ReactMarkdown>
            </DescriptionBox>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
