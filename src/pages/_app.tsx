import Laout from "layout/laout.index";
import type { AppProps } from "next/app";
import GlobalStyle from "assets/style/GlobalStyle";
import ProviderWrapper from "providers/providers.wrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProviderWrapper>
      <GlobalStyle />
      <Component {...pageProps} />
    </ProviderWrapper>
  );
}

export default MyApp;
