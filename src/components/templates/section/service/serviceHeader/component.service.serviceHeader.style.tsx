import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 40rem;
  position: relative;
  align-items: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
  color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextSecound};
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTertiaryBg};

  .advantages {
    padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};

    li {
      display: flex;
      font-size: 1.4rem;
      align-items: center;
      justify-content: center;
    }

    svg {
      height: 1.6rem;
      display: block;
      margin-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};
      fill: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextSecound};
    }
  }
`;

export const Title = styled.h1`
  width: 100%;
  display: block;
  position: relative;
  text-align: center;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const Adress = styled.p`
  width: 100%;
  display: block;

  position: relative;
  text-align: center;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};

  @media all and (min-width: 768px) {
    font-size: 2.4rem;
  }

  a {
    font-weight: bold;
    color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextSecound};
  }
`;
