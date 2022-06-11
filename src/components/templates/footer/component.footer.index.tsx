import { Footer } from "./component.footer.style";
import Map from "./component.footer.maps";
import List from "components/molecules/list/component.list.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const FooterComponent = () => {
  return (
    <>
      <Footer>
        <Container size="full">
          <Row>
            <Col xs={12} lg={6} style={{ paddingLeft: "0" }}>
              <Map />
            </Col>
            <Col xs={12} lg={6}>
              <Row>
                <Col xs={12}></Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

export default FooterComponent;
