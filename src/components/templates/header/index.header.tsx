import Link from "next/link";
import Logo from "assets/icon/logo.svg";
import { DisplayMenuType } from "database/menu";
import React, { useState, useEffect } from "react";
import { DisplayContactType } from "database/contact";
import { Header, Form, Menu, MenuItem, BoxContact, Hambuger } from "./index.header.style";
import { SearchEngine } from "components/orgamis/form/component.form.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const HeaderComponent = ({ data }: { data?: { menu?: DisplayMenuType; contact?: DisplayContactType } }) => {
  const [menuPower, setMenuPower] = useState(false);
  const [menuContactShow, setMenuContactShow] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    const switchMenu = (e: Event) => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && st > 150) menuContactShow && setMenuContactShow(false);
      else if (st < 150) !menuContactShow && setMenuContactShow(true);
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", (e) => switchMenu(e));

    return () => window.removeEventListener("scroll", (e) => switchMenu(e));
  }, [menuContactShow]);

  return (
    <>
      <Header>
        <Container>
          <Row>
            <Col xs={12} className="col">
              <Link href="/">
                <a title="Pomoc drogowa UJJ" className="brand">
                  <Logo />
                </a>
              </Link>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <SearchEngine id="query" name="query" placeholder="Szukaj..." />
              </Form>
              <Hambuger onClick={() => setMenuPower(!menuPower)}>
                <span></span>
                <span></span>
                <span></span>
              </Hambuger>

              <Menu menuPower={menuPower}>
                {data?.menu?.data?.menu?.items &&
                  data?.menu?.data?.menu?.items.map((item) => {
                    return (
                      <MenuItem key={item.id}>
                        <Link href={item.url}>
                          {item.target ? (
                            <a target={item.target} title={item.title}>
                              {item.title}
                            </a>
                          ) : (
                            <a title={item.title}>{item.title}</a>
                          )}
                        </Link>
                      </MenuItem>
                    );
                  })}
              </Menu>
            </Col>
            <Col xs={12} className="col">
              <BoxContact href={`tel:${data?.contact?.data?.attributes?.number_phones?.data[0].attributes?.number_phone}`} power={menuContactShow}>
                {data?.contact?.data?.attributes?.number_phones?.data[0].attributes?.number_phone}
              </BoxContact>
              <BoxContact href={`mailto:${data?.contact?.data?.attributes?.e_mail?.data?.attributes?.email}`} power={menuContactShow}>
                {data?.contact?.data?.attributes?.e_mail?.data?.attributes?.email}
              </BoxContact>
              <BoxContact href={`tel:${data?.contact?.data?.attributes?.number_phones?.data[1].attributes?.number_phone}`} power={menuContactShow}>
                {data?.contact?.data?.attributes?.number_phones?.data[1].attributes?.number_phone}
              </BoxContact>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
