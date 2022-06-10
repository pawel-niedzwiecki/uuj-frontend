import styled from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  position: relative;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
`;

export const Header = styled.h2`
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
`;

export const Service = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  margin: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
  background-color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorPostPrimmaryBg};
  ul {
    padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};

    a {
      font-weight: bold;
      font-size: 1.4rem;
      padding-right: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.small};

      &:after {
        content: ",";
        color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextDesactive};
      }

      &:last-child {
        &::after {
          display: none;
        }
      }

      span {
        color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextDesactive};
      }
    }
  }
`;

export const ServiceCategoryCover = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  max-height: 30rem;
  position: relative;
`;

export const ServiceCategoryTitle = styled.h3`
  width: 100%;
  display: block;
  position: relative;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const ServiceCategoryDescription = styled.div`
  width: 100%;
  display: block;
  position: relative;
  padding: 0 ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;
