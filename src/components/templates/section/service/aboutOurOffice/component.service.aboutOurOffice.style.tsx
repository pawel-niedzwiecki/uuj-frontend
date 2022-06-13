import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
  color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextPrimmary};

  ul {
    padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;

    li {
      padding: 0;
    }
  }
`;

export const Title = styled.h1`
  padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;
export const Description = styled.div``;
