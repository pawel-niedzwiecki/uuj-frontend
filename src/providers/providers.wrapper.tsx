import React from "react";
import settings from "assets/style/settings";
import { ThemeProvider } from "styled-components";

interface ProviderWrapperType {
  session: any;
  children?: JSX.Element | JSX.Element[];
}

const ProviderWrapper: React.FC<any> = ({ children, session }: ProviderWrapperType) => {
  return <ThemeProvider theme={settings}>{children}</ThemeProvider>;
};

export default ProviderWrapper;
