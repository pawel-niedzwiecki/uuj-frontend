import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Header, Form, Menu, MenuItem, BoxContact, Hambuger } from "./index.header.style";
import { Input, InputTypeEnum } from "components/molecules/form/component.form.index";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

import Logo from "assets/icon/logo.svg";

const HeaderComponent = () => {
  const [menuPower, setMenuPower] = useState(false);

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
                <MenuItem>
                  <Link href="/">
                    <a>Usługi</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Poradniki</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Wiadomosći</a>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">
                    <a>Kontakt</a>
                  </Link>
                </MenuItem>
              </Menu>
            </Col>
            <Col xs={12} className="col">
              <BoxContact href="tel:888333885">+48 888 333 885</BoxContact>
              <BoxContact href="tel:888333885">biuro@uuj.pl</BoxContact>
              <BoxContact href="tel:888333885">+48 888 333 885</BoxContact>
            </Col>
          </Row>
        </Container>
      </Header>
    </>
  );
};

export default HeaderComponent;
