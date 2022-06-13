import styled, { ThemeProps } from "styled-components";
import { MainSettingsTemplate } from "types/types.mainSettingsTemplate";

export const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  min-height: 40rem;
  text-align: center;
  position: relative;
  align-items: center;
  padding: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big} 0;
  color: ${({ theme }: { theme: MainSettingsTemplate }) => theme.colorTextPrimmary};
`;

export const Title = styled.h2`
  width: 100%;
  display: block;
  text-align: center;
  position: relative;
  padding-bottom: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.main};
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 40rem;
  display: block;
  position: relative;
`;

export const DescriptionBox = styled.div`
  width: 100%;
  display: block;
  text-align: left;
  position: relative;
  padding-top: ${({ theme }: { theme: MainSettingsTemplate }) => theme.break.big};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  img {
    margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main};
  }

  img {
    width: 100%;
    display: block;
  }

  a {
    font-weight: bold;
    color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkPrimmary};

    &:hover {
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorLinkActivePrimmary};
    }
  }

  ul {
    list-style: disc;
    margin-left: 1.5rem;
  }

  ol {
    display: block;
    margin-left: 2.8rem;
    list-style: decimal-leading-zero;
  }

  img {
    max-width: 100%;
  }

  blockquote {
    width: 100%;
    display: flex;
    position: relative;
    align-items: center;
    border-radius: 0.6rem;
    justify-content: center;
    background-color: #404040;
    padding: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
    margin: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.main} 0;
    border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};

    &::before,
    &::after {
      line-height: 0;
      font-size: 6rem;
      font-weight: bold;
      position: absolute;
    }

    &::before {
      bottom: 4rem;
      content: ",,";
      left: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    &::after {
      top: 3rem;
      content: '"';
      right: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }

    p {
      margin: 0;
      text-align: center;
    }
  }

  pre {
    p {
      font-size: 1rem;
      font-weight: bold;
      margin-top: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.big};
      color: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorTextDesactive};
      margin-bottom: ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.break.small};
    }
    pre {
      margin-top: 0;
      border-radius: 0.6rem;
      border: 1px solid ${({ theme }: ThemeProps<MainSettingsTemplate>): string => theme.colorBorder};
      code {
        display: flex !important;
      }
    }
  }
`;
