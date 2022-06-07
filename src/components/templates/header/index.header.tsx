import Link from "next/link";
import { useForm } from "react-hook-form";
import { DisplayMenuType } from "database/menu";
import React, { useState, useEffect } from "react";
import { Header, Form, Menu, MenuItem, BoxContact, Hambuger } from "./index.header.style";
import { Input, InputTypeEnum } from "components/molecules/form/component.form.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

import Logo from "assets/icon/logo.svg";

const HeaderComponent = ({ data }: { data: { menu: DisplayMenuType } }) => {
  const [menuPower, setMenuPower] = useState(false);
  const [menuContactShow, setMenuContactShow] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;
    let saveSwitchMenu = setTimeout(() => {}, 0);

    const switchMenu = (e: Event) => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop && st > 150) {
        clearTimeout(saveSwitchMenu);
        saveSwitchMenu = setTimeout(() => menuContactShow && setMenuContactShow(false), 10);
      } else {
        clearTimeout(saveSwitchMenu);
        saveSwitchMenu = setTimeout(() => !menuContactShow && setMenuContactShow(true), 10);
      }
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", (e) => switchMenu(e));

    return () => window.removeEventListener("scroll", (e) => switchMenu(e));
  }, [menuContactShow]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
                onSubmit={handleSubmit(({ search }): void => {
                  console.log(search);
                })}
              >
                <Input type={InputTypeEnum.search} id="search" name="search" error={errors.identifier} placeholder="Szukaj..." register={register} required />
              </Form>
              <Hambuger onClick={() => setMenuPower(!menuPower)}>
                <span></span>
                <span></span>
                <span></span>
              </Hambuger>

              <Menu menuPower={menuPower}>
                {data.menu.data?.menu.items.map((item) => {
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
              <BoxContact href="tel:888333885" power={menuContactShow}>
                +48 888 333 885
              </BoxContact>
              <BoxContact href="tel:888333885" power={menuContactShow}>
                biuro@uuj.pl
              </BoxContact>
              <BoxContact href="tel:888333885" power={menuContactShow}>
                +48 888 333 885
              </BoxContact>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
