import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: block;
  position: relative;
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorLinkPrimmary};
`;

export const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: block;
  align-items: center;
  justify-content: center;

  .col {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: center;

    &:first-child {
      padding-top: 30rem;
    }
  }
`;

export const Header = styled.h2`
  color: white;
`;

export const Text = styled.p`
  color: white;
  svg {
    color: white;
  }
`;
