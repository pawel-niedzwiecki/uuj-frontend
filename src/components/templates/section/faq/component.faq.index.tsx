import { FaqType } from "database/home";
import { Section, Header } from "./component.faq.style";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

export default function ComponentSectionFaq({ data }: { data: FaqType[] | undefined }): JSX.Element {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Często zadawane pytania</Header>
          </Col>
          <Col xs={12}>
            <Accordion>
              {!!data?.length &&
                data.map((faq: FaqType, index: number): JSX.Element => {
                  return (
                    <AccordionItem key={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton>{faq.attributes.title}</AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <ReactMarkdown>{faq.attributes.content}</ReactMarkdown>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
