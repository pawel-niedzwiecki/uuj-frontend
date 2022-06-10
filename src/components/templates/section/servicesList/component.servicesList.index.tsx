import Link from "next/link";
import Image from "next/image";
import { slugFromTitle } from "utils/utils.slug";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CategoryType, ServiceType } from "database/categories/index";
import List, { ListTypeEnum } from "components/molecules/list/component.list.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Header, Service, ServiceCategoryCover, ServiceCategoryTitle, ServiceCategoryDescription } from "./component.servicesList.style";

export default function ComponentSectionServiceList({ data }: { data: CategoryType[] }) {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Header>Jakie świadczymy usługi ?</Header>
          </Col>
          {!!data?.length &&
            data
              .filter((item: CategoryType) => item.attributes.type === "services")
              .map((item: CategoryType, i: number): JSX.Element => {
                return (
                  <Col xs={12} key={i}>
                    <Service>
                      <ServiceCategoryCover>{item?.attributes?.cover?.data?.attributes?.url && <Image src={item.attributes.cover.data.attributes.url} alt={item.attributes.title} layout="responsive" width={1280} height={300} />}</ServiceCategoryCover>
                      <ServiceCategoryTitle>{item.attributes.title}</ServiceCategoryTitle>
                      <ServiceCategoryDescription>
                        <ReactMarkdown>{item.attributes.content}</ReactMarkdown>
                      </ServiceCategoryDescription>
                      <List type={ListTypeEnum.vertical}>
                        {item?.attributes?.services?.data?.length
                          ? item?.attributes?.services?.data.map((service: ServiceType, i: number): JSX.Element => {
                              return (
                                <li key={i}>
                                  <Link href={`/s/${slugFromTitle(service.attributes.title)}`}>
                                    <a>
                                      <span>#</span>
                                      {service.attributes.title}
                                    </a>
                                  </Link>
                                </li>
                              );
                            })
                          : ""}
                      </List>
                    </Service>
                  </Col>
                );
              })}
        </Row>
      </Container>
    </Section>
  );
}
